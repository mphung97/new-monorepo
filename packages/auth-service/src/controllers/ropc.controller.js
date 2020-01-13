const { generate_access_token, has_empty_value_in_array } = require('../util');
const { authenticate_client, authenticate_user_credentials } = require('../services');

exports.token = function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const client_id = req.body.client_id;
  const client_secret = req.body.client_secret;

  if (has_empty_value_in_array([username, password, client_id, client_secret])) {
    return res.status(400).json({
      error: "invalid_request",
      error_description: 'Required parameters are missing in the request.'
    });
  }
  if (!authenticate_client(client_id, client_secret)) {
    return res.status(401).json({ error: "access_denied" });
  }
  if (!authenticate_user_credentials(username, password)) {
    return res.status(400).json({ error: "invalid_request" });
  }
  const token = generate_access_token();

  return res.json({ token });
}