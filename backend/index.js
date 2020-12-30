const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello');
})

let server = app.listen(3001, () => {
    console.log('Server is working on 3001');
})