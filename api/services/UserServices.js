const _ = require('lodash');
const passport = require('passport');
const generator = require('generate-password');

exports.load = async function(req, res, next) {
  try {
    let result = await User.find();

    res.send(result);

  } catch(e) {
    res.serverError(e);
  };
};

exports.show = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.id) return res.badRequest({err: 'Please add the id'});

    let result = await User.findOne(values.id);

    if(!result) return res.notFound();

    res.send(result);

  } catch(e) {
    res.serverError(e);
  };
};

// Need to finish this endpoint
exports.create = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(Object.values(values).length <= 0 || !values) return res.badRequest({err: 'Please add some data'});
    if(!values.username) return res.badRequest({err: 'Please add the username'});
    if(!values.email) return res.badRequest({err: 'Please add the email'});

    const attr = values;

    delete attr._csrf;

    attr.password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true
    });

  } catch(e) {
    res.serverError(e);
  };
};

exports.update = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values || Object.values(values).length <= 0) return res.badRequest({err: 'Please add some data'});

    if(!values.id) return res.badRequest({err: 'Please add the id'});

    const id = values.id;

    const attr = values;

    delete attr._csrf;

    delete attr.id;

    const result = await User.update(id, attr);

    res.send(result);

  } catch(e) {
    res.serverError(e);
  };
};

exports.trash = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(values.enabled || typeof values.enabled != "boolean") return res.badRequest({err: 'Please add some data'});

    if(!values.id) return res.badRequest({err: 'Please add the id'})

    const result = await User.update(values.id, { enabled: values.enabled });

    res.send(result);
  } catch(e) {
    res.serverError(e);
  };
};

exports.delete = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.id) return res.badRequest({err: 'Please add the id'});

    const result = await User.destroy(values.id);

    res.ok();
  } catch(e) {
    res.serverError(e);
  };
};
