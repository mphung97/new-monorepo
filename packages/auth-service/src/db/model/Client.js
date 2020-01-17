const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  clientId: String,
  clientSecret: String
});

exports.Client = mongoose.model('Client', clientSchema);