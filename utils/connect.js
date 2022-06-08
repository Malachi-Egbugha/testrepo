const mongoose = require("mongoose");
const connect = async () =>{
    try
    {
    await mongoose.connect("mongodb://localhost/sms");
    console.log(process.env);
    console.log("Mongo connected");
    }
    catch(err)
    {
        console.log(err);
    }

}

module.exports = connect;