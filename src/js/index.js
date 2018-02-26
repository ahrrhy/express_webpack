import '../css/main.css';

const METHOD_POST = 'POST',
    DOMAIN = 'http://localhost:8010';

let createUserForm = document.getElementById('userform'),
    createTaskForm = document.getElementById('taskform');

console.log(createUserForm);

createTaskForm.addEventListener('click', serverConnecttion(createTaskForm));
createUserForm.addEventListener('click', serverConnecttion(createUserForm));

function serverConnecttion(form) {
    let xhr = new XMLHttpRequest(),
        action = form.getAttribute('action');
        //msg = form.serialize();
    xhr.open(METHOD_POST, DOMAIN, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.send(msg);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            console.log(xhr.responseText);
        }

    };
}
