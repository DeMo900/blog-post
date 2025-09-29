/////requiring
const um = require("../models/usermodel.js")
const tm = require("../models/tokenmodel.js")
const bcrypt = require("bcryptjs")
const {validation} = require("../validation/user-validation.js")
const mailer = require("nodemailer")
const crypto = require("crypto")
require("dotenv").config()
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
    res.redirect("/signin")
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
    let bc = await bcrypt.compare(req.body.password,result[0].password)
    //check if password matches
if(!bc){
    res.status(400).send("wrong password")
    console.log("wrong password")
}else{
    //redirecting to home page
     res.redirect("/home")
    console.log("signin successful")
  


}
//catching error
}catch(err){
    console.log(err)
return res.status(500).send("internal server error")
}
}
//forgot password
let forgotpassword= async(req,res)=>{
 console.log(req.body)
 //validating
 const match = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 if(!match.test(`${req.body.forgetPasswdEmail}`)){
return res.json("invalid email format")
 }
    //checking if user exists
 try{
 let result =await um.find({email:req.body.forgetPasswdEmail})
    if(result.length===0){
        console.log("not found,sign up first sir ")
        return res.status(404).send("user not found signup first")
    }
}catch(err){
    console.log(err)
    return res.status(500).send("internal server error")
}
//generating the 6 digits code
let code ="" 
try{
for (let i=0;i<6;i++){
code+=crypto.randomInt(0,9)
}
}catch(err){
    console.log(`error while generating the code ${err}`)
    return res.status(500)
}
 //creating the transport
const transport = mailer.createTransport({
   
      service: 'gmail',
    port: 587,
    auth: {
        user: 'proplayer524522@gmail.com',
        pass: process.env.APP_PASS
    }
})
//sending mails
try{
await transport.sendMail(
    {
  to: `${req.body.forgetPasswdEmail}`, 
  subject: `YOUR CODE`, 
  text: `HERE IS YOUR CODE DON'T FORGET YOUR PASSWORD AGAIN :( \n ${code}`, 
  
}
)
}catch(err){
    console.log(`error while sending mail ${error}`)
    return res.status(500).send("error while sending the email")
}

//hashing the code
let hashedcode
try{
    hashedcode=await bcrypt.hash(code,12)
}catch(err){
    console.log(`error while hashing the code ${err}`)
    return res.status(500).send(`error while hashing`)
}       
//storing 
 let ntm=new tm({
    email:req.body.forgetPasswdEmail,
    token:hashedcode,
})
try{
await ntm.save()
}catch(err){
   console.log(`error while saving the token ${err}`)
return res.status(500).send("internal server error while saving in db")
}
}  

//exporting
module.exports={gethome,getindex,signup,signin,forgotpassword}