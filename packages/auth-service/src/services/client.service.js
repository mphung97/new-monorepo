const { Client } = require('../db/model/Client');

exports.createClient = () => {
  const data = {
    clientId: 'phphan',
    clientSecret: 'phphansecret'
  };
  const client = new Client(data);
  return client.save();
};

findByClientId = clientId => {
  const client = Client.findOne({ clientId });
  return client;
};

exports.authenticateClient = async (client_id, client_secret) => {
  console.log(await findByClientId(client_id));
  if (await findByClientId(client_id)) {
    return true;
  }
  return false;
}