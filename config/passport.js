const { session } = require('./session');

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy,
    usernameField: 'email',
  },
  jwt: {
    strategy: require('passport-jwt').Strategy,
    secretOrKey: session.secret,
    jwtFromRequest: require('passport-jwt').ExtractJwt.fromAuthHeaderAsBearerToken(),
  }
};
