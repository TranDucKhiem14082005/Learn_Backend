const users = require("../../../data/dummy/auth.dummy");

class authModel {
    static createUser(username, password) {
        return users.push({username, password});
    }

    static getUser(username, password) {
        return users.find((user) => user.username === username);
    }
}

module.exports =  authModel;