const router = require('express').Router();

router.use(require('./auth'));
// router.use(require('./client'));
// router.use(require('./user'));

module.exports = router;
