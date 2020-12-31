const mysql = require('mysql2');
const env = require('../.env.json');
const pool = mysql.createPool({
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database
});
const myPool = pool.promise();
module.exports = myPool;