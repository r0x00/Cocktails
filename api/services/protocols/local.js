const validator = require('validator');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");

exports.register = async function(req, res, callback) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    delete values.action;

    if(!values.email || !values.password) return callback(new Error('Ops! Something happened'));

    const check = await User.findOne({ email: values.email });

    if(check) return callback(null, check);
    console.log(values)

    await User.create(values);

    const resultUser = await User.findOne({ email: values.email });

    const token = crypto.randomBytes(48).toString('base64');

    const passportData = {};
    passportData.user = resultUser.id;
    passportData.protocol = 'local';
    passportData.accessToken = token;
    passportData.password = values.password;

    const resultPassport = await Passport.create(passportData);

    callback(null, resultUser);

  } catch(e) {
    console.log(e, 'lll')
    callback(e);
  };
};

exports.connect = async function(req, res, callback) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.user) return callback(new Error('Ops! Something happened'));

    const data = {};
    data.protocol = 'local';
    data.user = values.user.id;

    const passport = await Passport.findOne(data);

    if(passport) return callback(null, values.user);

    data.password = values.password;

    const result = await Passport.create(data);

    callback(null, values.user);

  } catch(e) {
    callback(e);
  };
};

exports.login = async function(req, res, callback) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.email || !values.password) return next(new Error('Ops! Something happened'));

    const dataUser = {};
    dataUser.email = values.email;

    const user = await User.findOne(dataUser);

    if(!user.enabled) return callback(null, false);

    const dataPassport = {};
    dataPassport.user = user.id;
    dataPassport.protocol = 'local';

    const passport = await Passport.findOne(dataPassport);

    console.log(passport)

    if(!passport) return callback(null, false);


    const result = await Passport.validatePassword(values.password, (e, res) => {
      if(!e) return callback(null, false);

      callback(null, user);
    });


  } catch(e) {
    console.log(e)
    callback(e);
  };
};
