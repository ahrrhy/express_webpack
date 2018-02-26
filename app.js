const express = require('express');
const server = express();
const path    = require("path");
const bodyParser = require('body-parser');

server.use(express.static('./'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

let create_user = require('./server/controllers/create-user'),
    create_task = require('./server/controllers/create-task');

server.post('/create-user', create_user, function(req, res) {
    res.send('Hello from server: ' + req.body.message);
});

server.post('/create-task', create_task, function (req, res) {
    res.send('Hello from server: ' + req.body.message);
});


server.listen(8010);
console.log('hello world');