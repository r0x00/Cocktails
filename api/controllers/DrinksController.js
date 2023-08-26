module.exports = {
  load: function(req, res, next) {
    DrinksServices.load(req, res, next);
  },
  show: function(req, res, next) {
    DrinksServices.show(req, res, next);
  },
  create: function(req, res, next) {
    DrinksServices.create(req, res, next);
  },
  update: function(req, res, next) {
    DrinksServices.update(req, res, next);
  },
  trash: function(req, res, next) {
    DrinksServices.trash(req, res, next)
  },
  delete: function(req, res, next) {
    DrinksServices.delete(req, res, next)
  }
};
