const { authenticateClient } = require('./client.service');
const { authenticateUserCredentials } = require('./user.service');

module.exports = {
  authenticateClient,
  authenticateUserCredentials
}