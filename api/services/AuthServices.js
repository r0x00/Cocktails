const _ = require('lodash');
const jwt = require('jsonwebtoken');
const passport = require('passport');

exports.authenticate = function(req, res, next, callback) {
  passport.callback(req, res, async function(err, user) {
    if (err || !user) return res.badRequest({ err: 'Ops! Something happend' })

    return callback(req, res, next, user);
  });
};

exports.basic = {
  login: async (req, res, next) => {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.email) return res.badRequest({ err: 'Please add the user email' });

    AuthServices.authenticate(req, res, next, async (req, res, next, user) => AuthServices.basic.authenticate(req, res, next, user));
  },

  authenticate: async (req, res, next, user) => {
    req.login(user, (e) => {
      if(e) return res.badRequest(e);

      req.session.user = result;
      req.session.authenticated = true;

      const session = {
        user: req.session.user,
        passport: req.session.passport
      };

      res.ok({
        session: session
      });
    });
  },

  logout: async (req, res, next) => {
    req.logout();

    res.redirect('/login');
  }
};

exports.rest = {
  login: async (req, res, next) => {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.email) return res.badRequest({ err: 'Please add the user email' });

    AuthServices.authenticate(req, res, next, async (req, res, next, user) => AuthServices.rest.authenticate(req, res, next, user));
  },

  authenticate: async (req, res, next, user) => {
    let data = { id: user.id };
    let token = jwt.sign(data, sails.config.session.secret, { expiresIn: '1d' });
    let decode = jwt.decode(token);

    return res.ok({
      access_token: token,
      token_type: 'Bearer',
      expires_in: decode.exp
    });
  },
};
