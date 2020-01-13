const { authenticate_client } = require('./client.service');
const { authenticate_user_credentials } = require('./user.service');

module.exports = {
  authenticate_client,
  authenticate_user_credentials
}