module.exports = {
  basicLogin: function(req, res, next) {
    AuthServices.basic.login(req, res, next);
  },
  restLogin: function(req, res, next) {
    AuthServices.rest.login(req, res, next);
  }
}
