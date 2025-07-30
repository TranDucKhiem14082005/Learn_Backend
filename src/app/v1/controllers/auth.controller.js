const authService = require("../services/auth.service");

class authController {
    
    register(req, res) {

        const {username, password} = req.body;

        const result = authService.register(username, password);

        if(result.success === false) {
            return res.status(result.status).json({
                message: result.message,
                
            })
        }

        return res.status(200).json({
            message: "created user success",
            data: result
        })


    }

     login(req, res) {
       const {username, password} = req.body;
       const result = authService.login(username,password);

          if(result.success === false) {
            return res.status(result.status).json({
                message: result.message
            })
        }

        return res.status(200).json({
            message: result.message
        }) 

    }
}

module.exports =  new authController();    