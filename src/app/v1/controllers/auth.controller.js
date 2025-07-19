const authService = require("../services/auth.service");

class authController {
    static register(req, res) {
        const {username, password} = req.body;
        const result = authService.register(username,password);

        return res.status(201).json({
            message: "User created",
            data: result,
        })
    }
}

module.exports =  authController;    