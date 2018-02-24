const express = require('express');
const server = express();
const path    = require("path");
const bodyParser = require('body-parser');

server.use(express.static('src'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.post('/create-user', require('./server/controllers/create-user'));

server.post('/create-task', require('./server/controllers/create-task'));
server.listen(8010);
console.log('hello world');