const {Pool} = require('pg');
const dbConfigPG = require('../configs/db.config');

class PgDatabase {
    constructor() {
        this.pool = new Pool({
            host: dbConfigPG.host,
            port: dbConfigPG.port,
            user: dbConfigPG.user,
            password: dbConfigPG.password,
            database: dbConfigPG.database,
            ssl: false,
            max: 20,
            idleTimeoutMillis: 30000, 
            connectionTimeoutMillis: 2000 
        });
    }

    async connectDB() {
        try{
            const client = await this.pool.connect();
            console.log("connect to database successfully");
            client.release();
        }catch(error) {
            console.log("Error connecting to the database: ",error);
        }
    }

}

module.exports = new PgDatabase();