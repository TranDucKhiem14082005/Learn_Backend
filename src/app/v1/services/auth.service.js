const authModel = require("../models/auth.model");

class authService {
    
    register(username, password) {

        //1. check invalid
        if(!username || !password) {
            return {
                success: false,
                message: "Username and passsword are required",
                status: 400,
            }
        }

        // 2. check existing user

        const user = authModel.getUser(username);
        console.log(user);

        if(user) {
            return {
                success: false,
                message: "Username alread exists",
                status: 400,
            }
        }

        authModel.createUser(username,password);

        console.log("Access user created account!");

        return {username, password};
    }

    login(username, password) {

        if(!username || !password) {
            return {
                success: false,
                message: "Username and passsword are required",
                status: 400,
            }
        }

        const user = authModel.getUser(username);

        if(!user) {
            return {
                success: false,
                message: "Username not exists",
                status: 400,
            }
        }

        //check password

        if(user.password != password) {
            return {
                success: false,
                message: "Username or Password are incorrect",
                status: 400,    
            }
        }

        return {    
            message: 'login success'
        }
    }
}

module.exports = new authService();