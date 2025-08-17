const userService = require("../services/user.service");

class userController {
    
   async getUsers(_, res) {
        const result = await userService.getUsers();
        return res.status(200).json(result);
    }

    async getUserById(req, res) {
        const {userId} = req.params;
        const result = await userService.getUserById(userId);
        return res.status(200).json(result);
    }
    async createdUser(req, res) {
        const {name, email} = req.body;
        const result = await userService.createdUser({name, email});
        return res.status(200).json(result);
    }
    async updateUser(req, res) {
        const {id, name, email} = req.body;
        const result = await userService.updateUser({id, name, email});
        return res.status(200).json(result);
    }
     async deleteUser(req, res) {
        const {id} = req.query;
        const result = await userService.deleteUser({id});
        return res.status(200).json(result);
    }

    
}

module.exports =  new userController();    