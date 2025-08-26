/////requiring
const um = require("../models/models")
const bcrypt = require("bcryptjs")
const {validation} = require("../validation/user-validation.js")
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
    //checking if user exists
let result = await um.find({username:req.body.username})
//hashing pass
let hashedpass = await bcrypt.hash(req.body.password,12)
//checking if user exists and if not check if there is a validation error and if not it works
if(result.length===0) {
    const {error} = validation(req.body)
    if(!error){
    let newuser = new um({
        username:req.body.username,
        password:hashedpass,
        email:req.body.email
    })
    newuser.save()
    res.redirect("/index")
    console.log("signup successful")
}else{
    console.log("validation error"+error)
}
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