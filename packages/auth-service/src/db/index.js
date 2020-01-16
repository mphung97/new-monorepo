/* const mongoose = require('mongoose');
const { MONGODB_URL } = require('config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

// connect mongodb
mongoose
  .connect(MONGODB_URL, options)
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.log('MongoDB connect failed', err)); */

  // https://dev.to/paulasantamaria/testing-node-js-mongoose-with-an-in-memory-database-32np
// https://mongoosejs.com/docs/api/model.html#model_Model.insertMany