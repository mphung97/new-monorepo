const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  roles: [{ role: String }]
});

exports.User = mongoose.model('User', userSchema);