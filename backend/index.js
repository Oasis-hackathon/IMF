const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const env = require('./.env.json');

const userQuery = require('./js/userQuery');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {

})

// app.get('/user', async (req, res) => {
//     try {
//         const resultRow = await userQuery.selectUserById(req.query.id);
//         res.status('200').json(resultRow[0]).end();
//     } catch (err) {
//         console.log(err);
//         res.status('400').json(err).end();
//     }
// })

app.post('/login/google', async (req, res) => {
    try {
        let resultRow;
        const result = await userQuery.isUserExist(req.body.userId);
        if (result === false) 
            resultRow = await userQuery.insertUser(req.body);
        else
            resultRow = result;
        res.status('200').json(resultRow).end();
    } catch (err) {
        console.log(err);
        res.status('400').json(err).end();
    }
    
})

app.post('/editinfo', async (req, res) => {
    try {
        await userQuery.editUserValue(req.body);
        const resultRow = await userQuery.selectUserById(req.body.id);
        res.status('200').json(resultRow[0]).end();
    } catch (err) {
        console.log(err);
        res.status('400').json(err).end();
    }
})

app.get('/univ', async (req, res) => {
    try {
        const resultRow = await userQuery.selectUniv(req.query.id);
        res.status('200').json(resultRow[0]).end();
    } catch (err) {
        console.log(err);
        res.status('400').json(err).end();
    }
})

app.get('/univs', async (req, res) => {
    try {
        const resultRow = await userQuery.selectUnivs();
        res.status('200').json(resultRow).end();
    } catch (err) {
        console.log(err);
        res.status('400').json(err).end();
    }
})

app.post('/mail', async(req, res) => {
    let authNum = Math.random().toString().substr(2,6);
    let emailTemplate;
    ejs.renderFile('./template/authMail.ejs', {authCode: authNum}, (err, data) => {
        if (err) 
            console.log(err);
        emailTemplate = data;
    })

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: env.nodemailer.user,
            pass: env.nodemailer.pass
        },
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: env.nodemailer.user, // 구글계정
        to: req.body.mail, // 메일을 보낼 주소
        subject: "같이사자 대학 인증 메일입니다",
        html: emailTemplate
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err);
        else {
            console.log("SUCCESS SENDING MAIL");
        }
        transporter.close();
    })

    res.status('200').json({authCode: authNum}).end();
})


app.listen(3001, () => {
    console.log('Server is working on 3001');
})