const express = require('express');
const bodyParser = require("body-parser");
const PgDatabase = require('./database/pg.database');
const app = express();
app.use(bodyParser.json());

const pgDatabaseInstance = new PgDatabase();
pgDatabaseInstance.connectDB();

app.use('/v1/auth', require('./app/v1/routes'));


module.exports = app;


