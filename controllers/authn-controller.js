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
//rendering forget password page
let getindex = (req,res)=>{
    res.render("index")
}
//rendering siginup page

let getsignup = (req,res)=>{
res.render("login")
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
     res.status(301).redirect("/home")
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
 if(!match.test(`${req.body.email}`)){
    //sending res.json to the front-end
return res.status(400).json({error:"invalid email format"
    ,code:"VALIDATION_FAILED",
    status:400
})
 }
    //checking if user exists
 try{
 let result =await um.find({email:req.body.email})
    if(result.length===0){
        console.log("not found,sign up first sir ")
        return res.status(404).json({
            error:"user not found",
            status:404,
            code:"USER_NOT_FOUND"
    })
    }
}catch(err){
    console.log(err)
    return res.status(500).send("internal server error")
}
//generating the 6 digits code
let code ="" 
try{
for (let i=0;i<6;i++){
code+=crypto.randomInt(0,10)
}
}catch(err){
    console.log(`error while generating the code ${err}`)
    return res.status(500).send("error while generating the code")
}
 //creating the transport
const transport = mailer.createTransport({
   
      service: 'gmail',
    auth: {
        user: "proplayer524522@gmail.com",
        pass: process.env.APP_PASS
    }
})
//sending mails
try{
await transport.sendMail(
    {
        from:"",
  to: `${req.body.email}`, 
  subject: `YOUR CODE`, 
  text: `HERE IS YOUR CODE DON'T FORGET YOUR PASSWORD AGAIN :( \n ${code}`, 
  
}
)
console.log("mail sent successfully")
}catch(err){
    console.log(`error while sending mail ${err}`)
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
//clearing previous codes from the same email
try{
await tm.deleteMany({email:req.body.email})
//storing 
 let ntm=new tm({
    email:req.body.email,
    token:hashedcode,
})
await ntm.save()
return res.status(200).json({ success: true, message: "Code sent successfully" });
}catch(err){
   console.log(`error while saving the token ${err}`)
return res.status(500).send("internal server error while saving in db")
}
}  

//verfying the code
let verify = async(req,res)=>{
//validating the code
let tbody = req.body.code.trim()
let results = await tm.findOne()
if(tbody.length!==6){
 console.log("validation error: code must be 6 digits")
 //console.log(req.body.code.length)
    return res.status(400)
}
//chcking if code is provided
if(!results){
    console.log("no code found,request for a new one")
    return res.status(404).json({
        error:"no code found,request for a new one",
        code:"NO_CODE_FOUND",
        status:404
    })
}
//checking if code matches
try{
    console.log(results)
let ismatch = await bcrypt.compare(tbody,results.token)
if(!ismatch){
      console.log("invalid code ")
    return res.status(400).json({
        error:"invalid code",
        code:"INVALID_CODE",
        status:400
    })
}
}catch(err){
    console.log(`error while comparing the code ${err}`)
    return res.status(500).send("internal server error")
}
    //logging success
console.log("code matched")
res.status(200).json({success:true,message:"code verified",status:200})
}
let updatepassword = async(req,res)=>{
    //getting the user
    let finding = await um.findOne({email:req.body.email})
    let vuser = {
        email:finding.email,
        username:finding.username,
        password:req.body.password
    }
 //use joi to validate the password 
    try{
    validation(vuser)
    }catch(err){
        console.log(`validation error: ${err}`)
        return res.status(400).send(`validation error: ${err}`)
    }
   

// hashing req.body.password
let hashedpass = await bcrypt.hash(req.body.password,12)
//storing the new hashed password in the db
try{
    await um.updateOne({email:req.body.email,username:finding.username},
        {$set:{password:hashedpass}}
        )
    console.log("password updated successfully")
    res.status(200).json({success:true,message:"password updated successfully",status:200}) 
}catch(err){
    console.log(`error while updating the password ${err}`)
    return res.status(500).send("internal server error")
}
//handle errors 

}

//exporting
module.exports={gethome,getindex,signup,forgotpassword,updatepassword,signin,getsignup,verify}