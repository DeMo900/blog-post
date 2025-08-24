/////requiring
const um = require("../models/models")
//rendering home
let gethome = (req,res)=>{
    res.render("home")
}
//rendering inndex
let getindex = (req,res)=>{
    res.render("index")
}
//signup
let signup = async (req,res)=>{
let result = await um.find({username:req.body.username})
if(result.length===0) {
    let newuser = new um({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    })
    newuser.save()
    res.redirect("/index")
    console.log("signup successful")
}else{
    res.send("user already exists").status(400)
    console.log(result)}
}
//sign in
let signin = async (req,res)=>{
let result = await um.find({username:req.body.username})

if(result.length===0) {  
   res.send("signup first").status(404)
   console.log(result)
}else{
    res.redirect("/home")
    console.log("signin successful")
}

}

//exporting
module.exports={gethome,getindex,signup,signin}