const _ = require('lodash');

const passport = require('passport');
passport.protocols = require('./protocols');

passport.callback = function(req, res, callback) {
  const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

  if(!this.protocols.local[values.action]) return res.badRequest({err: "Please add a action"});

  this.protocols.local[values.action](req, res, callback);
};

passport.loadStrategy = async function(req, res, next) {
  try {
    const strategies = sails.config.passport;

    const options = {
      passReqToCallback: true
    };

    let Strategy;

    _.each(strategies, (s, k) => {
      Strategy =  s.strategy;

      const data = s;
      delete data.strategy;

      _.extend(options, data);

      passport.use(new Strategy(options, passport.protocols[k].login))

    });

  } catch(e) {
    console.log(e)

  };
};

passport.serializeUser = function (user, callback) {
  callback(null, user.id);
};

passport.deserializeUser = async function(id, callback) {
  try {
    const result = await User.findOne(id);

    callback(null, result || null);

    return result;

  } catch(e) {

  };
};

passport.verifyToken = function(req, res, next) {
  let token = passport.protocols.jwt.extractToken(req.headers['authorization']);

  if(!token) return next(null, false);

  passport.authenticate('jwt', { session: false }, next)(req, res, req.next);

};

module.exports = passport;
