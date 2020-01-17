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

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
	const uri = await mongod.getConnectionString();
	console.log(uri);

	const mongooseOpts = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	try {
		await mongoose.connect(uri, mongooseOpts);
	} catch (error) {
		console.log(error);
	}
}

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongod.stop();
}

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
	const collections = mongoose.connection.collections;

	for (const key in collections) {
		const collection = collections[key];
		await collection.deleteMany();
	}
}