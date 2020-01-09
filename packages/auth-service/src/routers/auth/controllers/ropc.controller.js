const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, ISSUER, LIFE_SPAN } = require('config');


/* util */
function generate_access_token() {
  const payload = {
    "iss": ISSUER,
    "exp": Date.now() + LIFE_SPAN,
  }
  const access_token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  return access_token;
}

exports.ropc_auth = function (req, res) {

  const token = generate_access_token();

  return res.json({ token });
}