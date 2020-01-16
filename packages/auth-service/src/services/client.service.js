const Client = require('../db/model/Client');

createClient = data => {
  const client = new Client(data);
  return client.save();
};

findByClientId = clientId => {
  return Client.findOne({ clientId });
};

exports.authenticateClient = function (client_id, client_secret) {
  // check in db
  return true;
}