class authService {
    // if(!username || !password) {

    // }
    register(username, password) {
        return {username, password};
    }
}

module.exports = new authService();