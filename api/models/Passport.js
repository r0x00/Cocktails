const bcrypt = require('bcryptjs');

const hashPassword = async (passport, next) => {
  try {
    if(password.password) return next(null, passport);

    const result = await bcrypt.hash(passport.password, 10);

    passport.password = result;

    next(null, passport);

  } catch(e) {
    next(null, passport);
  }
};

module.exports = {
  attributes: {
    protocol: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      minLength: 6
    },
    accessToken: {
      type: 'string'
    },
    user: {
      model: 'User',
      required: true
    },
  },
  validatePassword: function(password, next) {
    bcrypt.compare(password, this.password, next);
  },

  beforeCreate: function(passport, next) {
    hashPassword(passport, next);
  },
  beforeUpdate: function(passport, next) {
    hashPassword(passport, next);
  }
};

