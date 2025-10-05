
const mongo = require("mongoose")

let token = new mongo.Schema({
    email:{
        type:String,
        required:true,
        match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique:true
    },
    token:{
        type:String,
        required:true,
        minlength:6
    },

  createdAt:{
    type:Date,
    default:Date.now,
    expires:900 //15 minutes
  }

})
let tm = mongo.model("token",token)

module.exports = tm;