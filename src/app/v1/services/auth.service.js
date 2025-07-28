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
   
    login(username, password) {

        if(!username || !password) {
            return {
                success: false,
                message: "Username and password are required",
                status: 400
            }
        }

         const user = authModel.getUser(username);


        if(!user) {
            return {
                success: false,
                message: "username not exists",
                status: 400
            }
        }

        if(user.password !== password) {
            return {
                success: false,
                message: "password is incorect",
                status: 400
            }
        }

        return {
            message: 'login success'
        }
    }
}

module.exports = new authService();