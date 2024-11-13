const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDB_URL).then(()=> {
    console.log("connection sucessfull")
}).catch((err)=> {
    console.log(err)
})