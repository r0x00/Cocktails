module.exports = function(req, res, next) {
  let isRest = req.headers.hasOwnProperty('content-type') && !!req.headers['content-type'] && req.headers['content-type'].split(';')[0] === 'application/json';


  if(req.cookies.session === undefined && !isRest ) {
    req.session.authenticated = false;
    res.status(403);
    return res.send({location: '/forbidden'})
  };

  if (req.session.authenticated) {
    return next();
  };

  if (isRest) {
    passport.verifyToken(req, res, async function(err, user) {
      if (err || !user) {
        return res.unauthorized({ message: 'Access Denied' });
      }
      req.session.user = user;
      req.session.authenticated = false;
      next();
    });
  }

};
