"use strict";

const path = require('path');
const fs = require('fs');
const port = require('./port.json');

/* key */
const PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '/key/private.pem'));
const PUBLIC_KEY = fs.readFileSync(path.join(__dirname, '/key/public.pem'));
const ISSUER = 'sample-auth-server';
const LIFE_SPAN = 1800;

/* port */
const AUTH_SERVER_PORT = port.server.auth_port;
const DEMO_SERVER_PORT = port.server.demo_port;


module.exports = {
  AUTH_SERVER_PORT,
  DEMO_SERVER_PORT,
  PRIVATE_KEY,
  PUBLIC_KEY,
  ISSUER,
  LIFE_SPAN
}