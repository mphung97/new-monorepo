"use strict";

const router = require('express').Router();
const controller = require('./controllers/ropc.controller');
const middleware = require('./middlewares/ropc.middleware');

router.post('/', [
  middleware.valid_request,
  middleware.check_client,
  middleware.check_user,
  controller.ropc_auth
]);

module.exports = router;