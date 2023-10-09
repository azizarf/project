const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = Schema({
    title : String,
    content : String,
    users : [{
        type : Schema.Types.ObjectId,
        ref : "user"
    }]
})

module.exports = mongoose.model("blog",BlogSchema)