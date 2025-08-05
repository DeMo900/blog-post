
//basics packages
const express = require("express")
const mongo = require("mongoose")
const app = express()
const path = require("path")
//////
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/assets", express.static("assets"));

app.listen(3000,(err)=>{
    if(err){
        console.log(`error while starting ${err}`)
    }else{
        console.log("conected to the server")
    }
})
app.get("/",(req,res)=>{
    res.render(path.join(__dirname,"views","tailwind_test.ejs"))
})
