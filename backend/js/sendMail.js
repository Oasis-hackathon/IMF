const nodemailer = require('nodemailer');
const ejs = require('ejs');
const env = require('../.env.json');
const {MAIL_SEND_ERROR} = require('./terms');

const sendMail = async (req) => {
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

    try {
        await transporter.sendMail(mailOptions);
        return authNum;
    } catch (err) {
        console.log(err);
        console.log(MAIL_SEND_ERROR);
        throw new Error(MAIL_SEND_ERROR);
    }
}
module.exports = sendMail;