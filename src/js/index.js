import '../css/main.css';

const METHOD_POST = 'POST',
    DOMAIN = 'http://localhost:8010';

let createUserForm = document.getElementById('userform'),
    createTaskForm = document.getElementById('taskform');

function serverConnecttion(form) {
    let xhr = new XMLHttpRequest(),
        msg = form.serialize();
}

;(function () {
    document.addEventListener("DOMContentLoaded", function () {

        createUserForm.on('submit', (e) => {
            e.preventDefault();

            JQuery.ajax( {
                method: 'POST',
                url: '/create-user',
                body: createUserForm.serialize(),
                success: function (result) {
                    if (createUserForm.hasClass('red')) {
                        createUserForm.removeClass('red');
                    }
                    createTaskForm.addClass('green');
                },
                error: function (error) {
                    if (createUserForm.hasClass('green')) {
                        createUserForm.removeClass('green');
                    }
                    createUserForm.addClass('red')
                }
            } );
        });

        createTaskForm.on('submit', (e) => {
            e.preventDefault();

            JQuery.ajax( {
                method: 'POST',
                url: '/create-task',
                body: createTaskForm.serialize(),
                success: function (result) {
                    if (createTaskForm.hasClass('red')) {
                        createTaskForm.removeClass('red');
                    }
                    createTaskForm.addClass('green');
                },
                error: function (error) {
                    if (createTaskForm.hasClass('green')) {
                        createTaskForm.removeClass('green');
                    }
                    createTaskForm.addClass('red')
                }
            } );
        });
    });
})();