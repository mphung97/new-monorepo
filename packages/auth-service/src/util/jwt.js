const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY || undefined;
const PUBLIC_KEY = process.env.PRIVATE_KEY || undefined;
const ISSUER = 'sample_issuer';
const LIFE_SPAN = 1800;

exports.jwtManager = {
  generateToken: () => {
    const payload = {
      iss: ISSUER,
      exp: Date.now() + LIFE_SPAN,
    };
    return jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  },
  verifyToken: token => {
    try {
      jwt.verify(token, PUBLIC_KEY, { issuer: ISSUER, algorithms: ['RS256'] });
    } catch (error) {
      return false;
    }
    return true;
  },
};
