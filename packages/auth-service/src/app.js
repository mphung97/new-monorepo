const express = require('express');
const path = require('path');

const app = express();
const port = 4001;

const router = require('./routers');
// const client = require('./routers/client.router');

require('./db');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
// app.use('/client', client);

app.listen(port, () => console.log(`AuthAPI listening on port ${port}!`));
