const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  }
});

exports.User = mongoose.model('User', userSchema);