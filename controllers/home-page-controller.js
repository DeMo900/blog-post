/////requiring
const um = require("../models/models")
const get = (req,res)=>{
    res.render("index")
}
//signup
const signup = async (req,res)=>{
    let result =  await req.body
    console.log("Received signup data:", result)
    if(result.username !="" && result.password !="" && result.email !=""){
        um.insertOne(result).then(_=>{
            console.log("signup successful")
            res.send("signup successful")
        }).catch((err)=>{
            console.log(`error while inserting: ${err}`)
            res.status(400)
        })
    }else{
        res.send("user is already existed")
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