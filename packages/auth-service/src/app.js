"use strict";

const express = require('express');
const app = express();
const { AUTH_SERVER_PORT } = require('config');

const Auth = require('./routers/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Auth API !!!'));
app.use('/auth', Auth);

app.listen(AUTH_SERVER_PORT, () => console.log(`AuthAPI listening on port ${AUTH_SERVER_PORT}!`));
