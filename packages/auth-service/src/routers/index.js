const router = require('express').Router();

// const apiPrefix = '';

router.use(require('./auth'));
router.use(require('./client'));
router.use(require('./user'));

module.exports = router;
