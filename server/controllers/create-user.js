function create_user (request, response, next) {
    let user = request.body;
    console.log(user);
    response.json({
        name: user.firstname,
        login: user.login
    });
    next();
}
module.exports = create_user;