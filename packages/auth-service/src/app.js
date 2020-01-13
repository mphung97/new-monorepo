"use strict";

const express = require('express');
const app = express();
const path = require('path')
const { AUTH_SERVER_PORT } = require('config');

const Auth = require('./routers/auth');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname , '/views'));
app.use(express.static(path.join(__dirname , '/views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Auth API !!!'));
app.use('/', Auth);

app.listen(AUTH_SERVER_PORT, () => console.log(`AuthAPI listening on port ${AUTH_SERVER_PORT}!`));