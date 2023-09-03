exports.authorize = async function(accessToken, done) {
  try {
    const passport = await Passport.findOne({ accessToken });

    if(!passport) return done(null, false);

    const result = await User.findOneById(passport.user);

    if(!result) return done(null, false);

    return done(null, user, { scope: 'all' });
  } catch(e) {
    done(e);
  };
};
