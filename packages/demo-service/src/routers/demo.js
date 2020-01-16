const router = require('express').Router();
const utilities = require('utilities');

function before_request(req, res, next) {
  const auth_header = req.headers['authorization'] || '';
  if (!auth_header.startsWith('Bearer ')) {
    return res.status(400).json({ 'error': 'Access token does not exist.' });
  }
  const token = auth_header.slice(7);  
  if (token && utilities.verifyToken(token)) {
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