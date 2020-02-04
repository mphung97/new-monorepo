const router = require('express').Router();

const middlewares = require('../middlewares/user.middleware');
const controllers = require('../controllers/user');

router
  .get('/signup', (req, res) => {
    res.send('signup');
  })
  .get('/:username', (req, res) => {
    console.log(req.params.username);
    res.send(req.params.username);
  })
  .post('/signup', [
    middlewares.validationUserData,
    middlewares.hashPassword,
    controllers.signup
  ]);

module.exports = router;
