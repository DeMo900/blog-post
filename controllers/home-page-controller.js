/////requiring
const um = require("../models/models")
const bcrypt = require("bcryptjs")
const {validation} = require("../validation/user-validation.js")
const { hash } = require("crypto")
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
const {error} = validation(req.body)
    if(!error){
        let result = await um.find({username:req.body.username})
        if(result.length!==0) {
return  res.status(400).send("user exists already")
}
let hashedpass
try{
             hashedpass = await bcrypt.hash(req.body.password,12)
}catch(err){
    console.log(err)
}
        let newuser = new um({
        username:req.body.username,
        password:hashedpass,
        email:req.body.email
    })
    await newuser.save()
    res.redirect("/index")
    console.log("signup successful")
    }else {
        res.status(400).send(`validation error: ${error}`)
}
}
//sign in
let signin = async (req,res)=>{
let result = await um.find({username:req.body.username})

if(result.length===0) {  
return  res.status(404).send("signup first")
}

try{
    let bc = await bcrypt.compare("Qazwsxedcrfv233@",result[0].password)
    //ceck if password matches
if(!bc){
    res.status(400).send("wrong password")
    console.log("wrong password")
    //shows only the username without the password --issue
    console.log(req.body)
}else{
    //redirecting to home page
     res.redirect("/home")
    console.log("signin successful")
    //shows only the username without the password --issue
    console.log(req.body)

}
//catching error
}catch(err){
    console.log(err)
return res.status(500).send("internal server error")
}
}

//exporting
module.exports={gethome,getindex,signup,signin}