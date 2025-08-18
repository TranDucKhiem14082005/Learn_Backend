const userModel = require("../models/user.model");

class userService {

    async getUsers() {

        const users = await userModel.getUsers();

        if(!users) {
            return { error: "Users not found" };
        }

        return {
            users
        };
    }

   async getUserById(userId) {
        if(!userId) {
            return { error: "User ID is required" };
        }

        const user = await userModel.getUser(userId);

        if(!user) {
            return { error: "User not found" };
        }

        return {
            user
        };
}


    async   createdUser({name, email}) {
        if(!name || !email) {
            return {error: "Name and Email are  required"}
        }

        const user = await userModel.createUser(name, email);

        if(!user) {
            return {error: "User not created"}
        }

        console.log(user);

        return {
            message: "user created success",
            user
        };

    }

    async updateUser({userId, name, email}) {
        if(!userId) {
            return { error: "User ID is required" };
        }

        const user = await userModel.updateUser(userId, name, email);

        if(!user) {
            return { error: "User not updated" };
        }

        return {
            message: "User updated successfully",
            user
        };
    }

   async deleteUser(userId) {
    if (!userId) {
        return { error: "User ID is required" };
    }

    const user = await userModel.deleteUser(userId);

    if (!user) {
        return { error: "User not found or already deleted" };
    }

    return { message: "User deleted successfully", user };
}


}

    


module.exports = new userService();