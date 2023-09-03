exports.login = async function(req, jwt, next) {
  try {
    const result = await User.findOne(jwt.id);

    next(null, result);

  } catch(e) {
    next(null, false);
  };
};

exports.extractToken = function(authHeader) {
  if (!authHeader) return null;

  let authParts = authHeader.split(' ');
  if (authParts.length != 2) return null;

  let [token_type, token] = authParts;

  if (!/^Bearer$/.test(token_type)) return null;

  if (_.isEmpty(token)) return null;

  return token;
};
