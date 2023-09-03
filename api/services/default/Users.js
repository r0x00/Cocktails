const _ = require('lodash');

exports.create = async function() {
  const users = [
    { username: "admin", email: "admin@drinks.com", password: "BJzgnn45Z0aQY", permission:"admin" }
  ];

  _.each(users, (user) => createFunction(user))

  // try {
  //   const check = await User.findOne({ email: "admin@cocktails.com" });

  //   if(check) return;

  //   await User.create({ username: "admin", email: "admin@drinks.com", password: "BJzgnn45Z0aQY", permission:"admin" });

  //   const result = await User.findOne({ email: "admin@drinks.com" });

  //   const token = crypto.randomBytes(48).toString('base64');

  //   await Passport.create({ user: result.id, protocol: 'local', accessToken: token, password: "BJzgnn45Z0aQY"});

  // } catch(e) {
  //   console.log(e)
  // };
};

const createFunction = async function(user) {
  try {
    if(!user) return;

    const check = await User.findOne({ email: user.email });

    if(check) return;

    await User.create(user);

    const result = await User.findOne({ email: user.email });

    const token = crypto.randomBytes(48).toString('base64');

    await Passport.create({ user: result.id, protocol: 'local', accessToken: token, password: user.password});

  } catch(e) {
    console.log(e)
  };
}
