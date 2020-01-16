"use strict";

const express = require('express');
const app = express();
const path = require('path');
const port = 4001;

const authRouter = require('./routers/auth');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname , '/views'));
app.use(express.static(path.join(__dirname , '/views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Auth API !!!'));
app.use('/', authRouter);

app.listen(port, () => console.log(`AuthAPI listening on port ${port}!`));