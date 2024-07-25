const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
email:{
    type: String,
    required: true,
    max: 50,
    unique: true
},
likeByUser:Array
})

module.exports = mongoose.model("user", userSchema)