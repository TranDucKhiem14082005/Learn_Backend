const authModel = require("../models/auth.model");

class authService {
    register(username, password) {

        if(!username || !password) {
            return {
                success: false,
                message: 'username , password is required',
                status: 400
            } 
        }

        if(password < 6) {
            return {
                success: false,
                message: 'you can set password again',
                status: 400
            }
        }


        const user = authModel.getUser(username);

        if(user) {
            return {
                success: false,
                message: 'username already exists',
                status: 400
            }
        }

        authModel.createUser(username, password);

        return  {username, password}
    }

    async login(username, password) {

        if(!username || !password) {
            return {
                success: false,
                message: "Username and password are required",
                status: 400
            }
        }

         const user = await authModel.getUser(username);



        if(!user) {
            return {
                success: false,
                message: "username not exists",
                status: 400
            }
        }

     
        return {
            message: 'login success',
            user
        }
    }
}

module.exports = new authService();