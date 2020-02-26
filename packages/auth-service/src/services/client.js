const { Client } = require('../db/model/client');

module.exports = {
  create: () => {
    const data = {
      clientId: 'root',
      clientSecret: '1234'
    };
    const client = new Client(data);
    return client.save();
  },
  findByClientId: clientId => {
    return Client.findOne({ clientId });
  }
};
