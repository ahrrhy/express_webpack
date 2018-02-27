const express = require('express');
const server = express();
const path    = require("path");
const bodyParser = require('body-parser');

server.use(express.static('./'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

function create_user (request, response, next) {
    let user = request.body;
    console.log(user);
    response.send(user.login);
    next();
}
function create_task (request, response, next) {
    let task = request.body;
    console.log(task);
    response.send(task.taskname);
    next();
}

server.post('/create-user', create_user);

server.post('/create-task', create_task);


server.listen(8010);
console.log('hello world');