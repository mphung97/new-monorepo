const User = require('../db/model/User');

createUser = data => {
  const user = new User(data);
  return user.save();
};

findByUsername = username => {
  return User.findOne({ username });
};

exports.authenticateUserCredentials = function (username, password) {
  // check in db
  return true;
}