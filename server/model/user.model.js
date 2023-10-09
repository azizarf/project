const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = Schema({
    name : String,
    imageUrl : String,
    password : String,
    email : String,
    blogs : [{
        type : Schema.Types.ObjectId,
        ref : "blog"
    }]
})

module.exports = mongoose.model("user",UserSchema);