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
            idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
            connectionTimeoutMillis: 2000 // Return an error after 2 seconds if connection could not be established
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

module.exports = PgDatabase;