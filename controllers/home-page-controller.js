/////requiring
const um = require("../models/usermodel.js")
const tm = require("../models/tokenmodel.js")
const bcrypt = require("bcryptjs")
const {validation} = require("../validation/user-validation.js")
const mailer = require("nodemailer")
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
    //ceck if password matches
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
 let result =await um.find({email:req.body.forgetPasswdEmail})
    if(result.length===0){
        return res.status(404).send("user not found signup first")
    }
 //creating the transport
const transport = mailer.createTransport({
   
      service: 'gmail',
    port: 587,
    auth: {
        user: 'proplayer524522@gmail.com',
        pass: 'tosnrnlttudhivny'
    }
})
//sending mails
transport.sendMail(
    {
  to: `${req.body.forgetPasswdEmail}`, 
  subject: "Hello from Nodemailer!", 
  text: "This is a plain text body", 
  
}
,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
}
)
}

//exporting
module.exports={gethome,getindex,signup,signin,forgotpassword}