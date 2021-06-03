const User = require('./validation');
require('./db')

module.exports = {

    /**
     * Function to add user
     * @param ctx(name, email)
     * Created By: Nitesh Bisht
     * Created At: 12,Mar 2021
     */
    async addUser(ctx) {
        try {
            var body = ctx.request.body;
            var user = new User();
            user.name = body.name;
            user.email = body.email;
            user.save();
            ctx.body = { status: 200, message: "data save ", user: user }
        }
        catch (error) {
            ctx.throw(error)
        }
    },
}
