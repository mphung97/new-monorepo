const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { PUBLIC_KEY, ISSUER } = require('config');

async function verify_access_token(access_token) {
  try {
    await jwt.verify(access_token, PUBLIC_KEY, { issuer: ISSUER, algorithms: ['RS256'] });    
  } catch (error) {
    return false;
  }
  return true;
}

async function before_request(req, res, next) {
  const auth_header = req.headers['authorization'] || '';
  if (!auth_header.startsWith('Bearer ')) {
    return res.status(400).json({ 'error': 'Access token does not exist.' });
  }
  const access_token = auth_header.slice(7);  
  if (access_token && await verify_access_token(access_token)) {
    return next();
  } else {
    return res.status(400).json({ 'error': 'Access token is invalid.' });
  }
}

router.get('/', [before_request], (req, res) => {
  users = [
    { 'username': 'Jane Doe', 'email': 'janedoe@example.com'},
    { 'username': 'John Doe', 'email': 'johndoe@example.com'}
  ]
  res.status(200).json({users});
});


module.exports = router;