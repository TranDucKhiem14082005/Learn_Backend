const express = require('express');
const bodyParser = require("body-parser");
const PgDatabase = require('./database/pg.database');
const app = express();
app.use(bodyParser.json());

PgDatabase.connectDB();


app.use('/v1/auth', require('./app/v1/routes'));
app.use('/v1/user', require('./app/v1/routes/user'));


module.exports = app;
