const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
{
    title : {type:String },
    message : {type:String},
    link : {type:String}
})

module.exports = mongoose.model("Posts", postSchema);