"use strict";

const express = require('express');
const app = express();
const path = require('path');
const port = 4001;

const auth = require('./routers/auth.router');
const client = require('./routers/client.router');
const user = require('./routers/user.router');

require('./db');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname , '/views'));
app.use(express.static(path.join(__dirname , '/views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', auth);
// app.use('/client', client);
app.use('/users', user);

app.listen(port, () => console.log(`AuthAPI listening on port ${port}!`));