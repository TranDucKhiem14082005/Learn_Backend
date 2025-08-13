const  pgDatabaseInstance  = require("../../../app");
const users = require("../../../data/dummy/auth.dummy");
const PgDatabase = require("../../../database/pg.database");

class authModel {
    static createUser(username, password) {
        return users.push({username, password});
    }

    static async getUser(username) {
      const result = await PgDatabase.pool.query('SELECT * FROM users WHERE username = $1',
        [username]
      );
      return result.rows[0];
    }
}

module.exports =  authModel;