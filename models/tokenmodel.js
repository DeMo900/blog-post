
const { number } = require("joi");
const mongo = require("mongoose")

let token = new mongo.Schema({
    email:{
        type:String,
        required:true,
        match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    token:{
        type:String,
        required:true,
        minlength:6
    },

  createdAt:{
    type:Date,
    default:Date.now,
    expires:900
  }

})
let tm = mongo.model("token",token)

module.exports = tm;