const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, ISSUER, LIFE_SPAN } = require('config');
/* util */
exports.generate_access_token = function () {
  const payload = {
    "iss": ISSUER,
    "exp": Date.now() + LIFE_SPAN,
  }
  const access_token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  return access_token;
}

exports.has_empty_value_in_array= function(array) {
  return array.some(value => !value);
}