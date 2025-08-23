/////requiring
const um = require("../models/models")
const get = (req,res)=>{
    res.render("index")
}
//signup
const signup = async (req,res)=>{
    let result =  await um.find({username:req.body.username})
    if(result.length>0){
        res.send("user is already existed")
    }else{
         um.insertOne({username:req.body.username,password:req.body.password}).then(_=>{
    
console.log("sent")
 }).catch((err)=>{
console.log(`error while inserting ${err}`)
res.status(400)
 })
    }
}
//sign in
const signin = async (req,res)=>{
let result = await um.find({username:req.body.username,password:req.body.password})

if(result.length===0) {  
   res.send("signup first").status(404)
   
}else{
    res.redirect("")
}

}

//exporting
module.exports={get,signup,signin}