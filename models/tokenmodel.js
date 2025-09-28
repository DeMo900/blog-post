
const mongo = require("mongoose")

const token = new mongo.Schema({
    username:{type:String,required:true},
    token:{type:String,required:true}
})
const tm = mongo.model("token",token)

module.exports = tm;