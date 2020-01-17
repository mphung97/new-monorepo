const { User } = require('../db/model/User');

createUser = async () => {
  const data = {
    username: 'phphan',
    password: '123456'
  };
  const user = new User(data);
  return await user.save();
};

findByUsername = async username => {
  return await User.findOne({ username });
};

exports.authenticateUserCredentials = function (username, password) {
  // check in db
  findByUsername(username);
  return true;
}