module.exports = function (request, response) {
    let user = request.body;
    console.log(user);
    response.json({
        name: user.firstname,
        login: user.login
    });
};