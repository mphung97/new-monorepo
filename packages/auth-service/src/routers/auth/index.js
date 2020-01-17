"use strict";

const router = require('express').Router();

const { createClient } = require('../../services');

const ROPC = require('../../controllers/ropc.controller');
const AC = require('../../controllers/ac.controller');
const CC = require('../../controllers/cc.controller');

router
  .get('/createdb', (req, res) => {
    res.json(createClient());
  })
  .post('/token', (req, res) => {
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
        res.status(400).send(JSON.stringify({
          'error': 'invalid_request',
          'error_description': 'Client secret and code verifier are exclusive' +
            'to each other.'
        }));
        break;

      case 'client_credentials':
        CC.token(req, res);
        break;

      default:
        res.status(400).json({
          'error': 'invalid_request',
          'error_description': 'Grant type is invalid or missing.'
        });
        break;
    }
  });

module.exports = router;