module.exports = {
  load: function(req, res, next) {
    UserServices.load(req, res, next);
  },
  show: function(req, res, next) {
    UserServices.show(req, res, next);
  },
  create: function(req, res, next) {
    UserServices.create(req, res, next);
  },
  update: function(req, res, next) {
    UserServices.update(req, res, next);
  },
  trash: function(req, res, next) {
    UserServices.trash(req, res, next)
  },
  delete: function(req, res, next) {
    UserServices.delete(req, res, next)
  }
};
