"use strict";

require('dotenv').config();
const path = require('path');
const fs = require('fs');

/* key */
const PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '/key/private.pem'), 'utf8');
const PUBLIC_KEY = fs.readFileSync(path.join(__dirname, '/key/public.pem'), 'utf8');

module.exports = {
  AUTH_SERVER_PORT: process.env.AUTH_SERVER_PORT,
  DEMO_SERVER_PORT: process.env.DEMO_SERVER_PORT,
  PRIVATE_KEY,
  PUBLIC_KEY,
  ISSUER: 'sample-auth-server',
  LIFE_SPAN: 1800
}