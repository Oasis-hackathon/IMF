const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');

const query = require('./js/query');

// app.use(cors());
// app.options('*', cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {

})

app.post('/login/google', async (req, res) => {
    try {
        let insertId;
        const result = await query.isUserExist(req.body.userId);
        if (result === false) 
            insertId = await query.insertUser(req.body);
        else
            insertId = result;
        res.status('200').json({id: result}).end();
    } catch (err) {
        res.status('400').json(err).end();
    }
    
})

app.listen(3001, () => {
    console.log('Server is working on 3001');
})