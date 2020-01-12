"use strict";

const router = require('express').Router();
const ROPCController = require('./controllers/ropc.controller');
const middleware = require('./middlewares/ropc.middleware');

router
    .get('/auth', (req, res) => {
        console.log('auth!');
    })
    .post('/token', (req, res, next) => {
        switch (req.body.grant_type) {
            case 'password':
                ROPCController.auth(req, res);
                break;

                /*            case 'authorization_code':
                                if (req.body.client_secret && !req.body.code_verifier) {
                                    handleACTokenRequest(req, res);
                                    break;
                                }
                                if (req.body.code_verifier) {
                                    handleACPKCETokenRequest(req, res);
                                    break;
                                }
                                res.status(400).send(JSON.stringify({
                                    'error': 'invalid_request',
                                    'error_description': 'Client secret and code verifier are exclusive' +
                                        'to each other.'
                                }));
                                break;

                            case 'client_credentials':
                                handleCCTokenRequest(req, res);
                                break;*/

            default:
                res.status(400).json({
                    'error': 'invalid_request',
                    'error_description': 'Grant type is invalid or missing.'
                });
                break;
        }
    });

module.exports = router;