const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const PRIVATE_KEY = fs.readFileSync(path.join(__dirname,'/key/private.pem'),'utf8');
const PUBLIC_KEY = fs.readFileSync(path.join(__dirname,'/key/public.pem'),'utf8');
const ISSUER = 'sample_issuer';
const LIFE_SPAN = 1800;

exports.generateAccessToken = function() {
  const payload = {
    "iss": ISSUER,
    "exp": Date.now() + LIFE_SPAN,
  }
  const access_token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  return access_token;
}

exports.verifyToken = function(token) {
  try {
    jwt.verify(token, PUBLIC_KEY, { issuer: ISSUER, algorithms: ['RS256'] });    
  } catch (error) {
    return false;
  }
  return true;
}
