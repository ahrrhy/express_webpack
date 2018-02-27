import '../css/main.css';

const METHOD_POST = 'POST',
    DOMAIN = 'http://localhost:8010';

let createUserForm = document.getElementById('userform'),
    createTaskForm = document.getElementById('taskform');

createTaskForm.addEventListener('click', function(e) {
    e.preventDefault();
    serverConnecttion(createTaskForm);
});
createUserForm.addEventListener('click', function(e) {
    e.preventDefault();
    serverConnecttion(createUserForm);
});

function serverConnecttion(form) {
    let xhr = new XMLHttpRequest(),
        action = form.getAttribute('action');
    let message = {};

    if (action === '/create-user') {
        message.login = document.querySelector('#login').value;
        message.firstname = document.querySelector('#firstname').value;
        message.secondname = document.querySelector('#secondname').value;
    }
    if (action === '/create-task') {
        message.taskname = document.querySelector('#taskname').value;
        message.taskDescription = document.querySelector('#task-description').value;
        message.taskDuration = document.querySelector('#task-duration').value;
    }
    xhr.open(METHOD_POST, DOMAIN + action, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(message));

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
            if (xhr.status == 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
                console.log(xhr.responseText);
            }
        }

    };
}
