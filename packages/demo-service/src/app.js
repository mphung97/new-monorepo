"use strict";
global.__basedir = __dirname;

const express = require('express');
const app = express();
const port = 4002;

const Demo = require('./routers/demo');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Client API !!!'));
app.use('/demo', Demo);

app.listen(port, () => console.log(`Client API listening on port ${port}!`));
