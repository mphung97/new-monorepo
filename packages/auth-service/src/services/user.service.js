const { User } = require('../db/model/user');

module.exports = {
  create: (username, password) => {
    const user = new User({
      username,
      password
    });
    return user.save();
  },
  findByUsername: username => {
    return User.findOne({ username })
  }
}