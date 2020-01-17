const utilities = require('utilities');
const { authenticateClient, authenticateUserCredentials } = require('../services');

exports.token = function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const client_id = req.body.client_id;
  const client_secret = req.body.client_secret;

  if (utilities.hasEmptyValueInArray([username, password, client_id, client_secret])) {
    return res.status(400).json({
      error: "invalid_request",
      error_description: 'Required parameters are missing in the request.'
    });
  }
  console.log(authenticateClient(client_id, client_secret));
  
  if (!authenticateClient(client_id, client_secret)) {
    return res.status(401).json({ error: "access_denied" });
  }

  if (!authenticateUserCredentials(username, password)) {
    return res.status(400).json({ error: "invalid_request" });
  }

  const token = utilities.generateAccessToken();

  return res.json({ token });
}