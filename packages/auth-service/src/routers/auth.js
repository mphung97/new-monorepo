const router = require('express').Router();
const { AC, CC, ROPC } = require('../controllers/auth');

router.post('/token', (req, res) => {
  switch (req.body.grant_type) {
    case 'password':
      ROPC.token(req, res);
      break;
    case 'authorization_code':
      if (req.body.client_secret && !req.body.code_verifier) {
        AC.token(req, res);
        break;
      }
      if (req.body.code_verifier) {
        AC.PKCEtoken(req, res);
        break;
      }
      res.status(400).json({
        error: 'invalid_request',
        error_description:
          'Client secret and code verifier are exclusive to each other.',
      });
      break;
    case 'client_credentials':
      CC.token(req, res);
      break;
    default:
      res.status(400).json({
        error: 'invalid_request',
        error_description: 'Grant type is invalid or missing.',
      });
      break;
  }
});

module.exports = router;
