function generate_access_token() {
  const payload = {
    "iss": ISSUER,
    "exp": Date.now() + LIFE_SPAN,
  }
  const access_token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  return access_token;
}

module.exports = {
  generate_access_token
}