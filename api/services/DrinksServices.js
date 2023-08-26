const _ = require('lodash');

exports.load = async function(req, res, next) {
  try {
    let result = await Drinks.find();

    res.send(result);

  } catch(e) {
    res.serverError(e);
  };
};

exports.show = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.id) return res.badRequest();

    let result = await Drinks.findOne(values.id);

    if(!result) return res.notFound();

    res.send(result);

  } catch(e) {
    res.serverError(e);
  };
};

exports.create = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(Object.values(values).length <= 0 || !values) return res.badRequest();

    const attr = values;

    delete attr._csrf;

    const data = {};

    data.baseSpirit = values.data.baseSpirit;
    data.served = values.data.served;
    data.drinkware = values.data.drinkware;
    data.ingredients = values.data.ingredients;
    data.preparation = values.data.preparation;

    attr.data = data;

    const result = await Drinks.create(attr);

    res.send(result)

  } catch(e) {
    res.serverError(e);
  };
};

exports.update = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.id || !values || Object.values(values).length <= 0) return res.badRequest();

    const id = values.id;

    const attr = values;

    delete attr._csrf;

    delete attr.id;

    const data = {};

    data.baseSpirit = values.data.baseSpirit;
    data.served = values.data.served;
    data.drinkware = values.data.drinkware;
    data.ingredients = values.data.ingredients;
    data.preparation = values.data.preparation;

    attr.data = data;

    attr.enabled = true;

    const result = await Drinks.update(id, attr);

    res.send(result);

  } catch(e) {
    res.serverError(e);
  };
};

exports.trash = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.id || values.enabled || typeof values.enabled != "boolean") return res.badRequest();

    const result = await Drinks.update(values.id, { enabled: values.enabled });

    res.send(result);
  } catch(e) {
    res.serverError(e);
  };
};

exports.delete = async function(req, res, next) {
  try {
    const values = typeof(req.query.values) == 'undefined' ? req.allParams() : JSON.parse(req.param('values'));

    if(!values.id) return res.badRequest();

    const result = await Drinks.destroy(values.id);

    res.ok();
  } catch(e) {
    res.serverError(e);
  };
};
