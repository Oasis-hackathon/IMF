const express = require('express');
const app = express();
const mysql = require('mysql');
const env = require('./.env.json');
const connection = mysql.createConnection({
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database
})

connection.connect( err => {
    if (err)
        console.log(err);
    else
        console.log("Connected to the MySQL server");
});

app.get('/',(req, res) => {
    connection.query('SELECT * from Users', (err, result) => {
        res.send(result);
    });
})

let server = app.listen(3001, () => {
    console.log('Server is working on 3001');
})