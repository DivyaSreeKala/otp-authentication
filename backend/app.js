const express = require("express");
const cors = require("cors");

const nodemailer = require("nodemailer");
require('dotenv').config();



const app = new express();
// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
require('./db/connection')

const emailModel = require("./models/emailModel")

function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10); // Generates a number between 0-9
    }
    return otp;
}


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-otp',async(req,res) => {
    try{
        const email = req.body.email;
        const otp = generateOTP();
        console.log(req.body)
        console.log(email,otp)
        const data = new emailModel({email,otp});
        // if(data){
            const mailOptions = {
                from: 'dsk.dev77@gmail.com',
                to: `${email}`,
                subject: 'Your OTP',
                text: `${otp}`,
            };
        // }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
        console.log(mailOptions)
        const savedData = await data.save();
        res.status(200).send("successfull");
    }catch(err){
        res.status(404).send(err);
    }
})

app.get('/verify-email/:email/:otp',async(req,res) => {
    try{
        const { email, otp } = req.params;
        const data = await emailModel.find({email,otp});
        res.status(200).send("successfull");
    }catch(err){
        res.status(404).send(err);
    }
})

app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.PORT}`)
})