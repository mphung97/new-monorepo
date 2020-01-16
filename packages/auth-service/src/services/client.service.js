const Client = require('../db/model/Client');

createClient = async data => {
  const client = new Client(data);
  return await client.save();
};

findByClientId = async clientId => {
  return await Client.findOne({ clientId });
};

exports.authenticateClient = function (client_id, client_secret) {
  // check in db
  return true;
}