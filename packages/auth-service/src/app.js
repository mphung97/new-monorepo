const express = require('express');
const path = require('path');
require('dotenv').config();
require('./db');

const PRIVATE_KEY = process.env.PRIVATE_KEY || undefined;
const PUBLIC_KEY = process.env.PRIVATE_KEY || undefined;

console.log(PRIVATE_KEY, PUBLIC_KEY);

const port = process.env.PORT || 4001;
const app = express();
const router = require('./routers');
// const client = require('./routers/client.router');
const apiVersion = 'api/v1/';

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiVersion, router);
// app.use('/client', client);

app.listen(port, () => console.log(`AuthAPI listening on port ${port}!`));
