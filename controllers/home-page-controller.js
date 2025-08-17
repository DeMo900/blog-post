/////requiring
const um = require("../models/models")
const get = (req,res)=>{
    res.render("index")
}

const post = (req,res)=>{

 um.insertOne({username:req.body.username,password:req.body.password}).then(_=>{
    
console.log("sent")
 }).catch((err)=>{
console.log(`error while inserting ${err}`)
 })

}
//exporting
module.exports={get,post}