import '../css/main.css';

;(function () {
    document.addEventListener("DOMContentLoaded", function () {
        let createUserForm = JQuery('#userform'),
            createTaskForm = JQuery('#taskform');

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