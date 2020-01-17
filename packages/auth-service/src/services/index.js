const { authenticateClient, createClient } = require('./client.service');
const { authenticateUserCredentials } = require('./user.service');

module.exports = {
  createClient,
  authenticateClient,
  authenticateUserCredentials
}