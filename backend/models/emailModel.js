
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    email:String,
    otp:Number
})

const emailData = mongoose.model('otp',Schema);

module.exports = emailData;