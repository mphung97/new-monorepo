const { User } = require('../db/model/user');

module.exports = {
  create: (data) => {
    const user = new User(data);
    return user.save();
  },
  findByUsername: username => {
    return User.findOne({ username })
  }
}