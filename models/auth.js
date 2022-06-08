const mongoose = require("mongoose");
//create
const authSchema = new mongoose.Schema
(
    {
        email: String,
        password: {
            type: String,
            default: "thanks"

        },
        firstname: String,
        lastname: String,
        status: {
            type: String,
            default: "admin",
            
        }
    },
    {
        timestamps: true
    }


)

const authmodel = mongoose.model("auth", authSchema );
module.exports = authmodel;


