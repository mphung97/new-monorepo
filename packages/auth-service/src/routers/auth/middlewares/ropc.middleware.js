/* service */
function authenticate_user_credentials(username, password) {
  // check in db
  return true;
}

/* service */
function authenticate_client(client_id, client_secret) {
  // check in db
  return true;
}

/* util */
function has_empty_value_in_array(array) {
  for (const value of array) {
    if (!value) {
      return true;
    }
  }
  return false;
}

function valid_request(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const client_id = req.body.client_id;
  const client_secret = req.body.client_secret;

  if (has_empty_value_in_array([username, password, client_id, client_secret])) {
    return res.sendStatus(400);
    // return res.status(400).json({ "error": "invalid_request" });
  }
  return next();
}

function check_client(req, res, next) {
  const client_id = req.body.client_id;
  const client_secret = req.body.client_secret;

  if (!authenticate_client(client_id, client_secret)) {
    return res.sendStatus(401);
    // return res.status(401).json({ "error": "access_denied" });
  }
  return next();
}

function check_user(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!authenticate_user_credentials(username, password)) {
    return res.sendStatus(400);
    // return res.status(400).json({ "error": "invalid_request" });
  }
  return next();
}

module.exports = {
  valid_request,
  check_client,
  check_user
}
