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
                message: "Username , password are required",
                status: 400
            }
        }

        const user = authModel.getUser(username);

        if(!user) {
            return {
                succes: false,
                message: "username not exits",
                status: 400
            }
        }


        //3. check password true
        if(user.password !== password) {
            return {
                succes: false,
                message: "password is incorrect",
                status: 400
            }
        }

       return {
        message: "login success",
        status: 200
       }
       
    }
}

module.exports = new authService();