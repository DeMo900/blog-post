
//basics packages
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require("path")
const homepageroutes = require("./routes/home-page-routes") 
require("dotenv").config()
//////
app.use(homepageroutes)
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use( express.static(path.join(__dirname,"assets")));

app.listen(30000,err=>{
    if(err){
        console.log(`error while starting ${err}`)
        process.exit(1)
    }else{
        console.log("conected to the server")
    }
})
//conecting to db
mongoose.connect(process.env.DB_URL)
.then(_=>console.log("conected to database"))
.catch(err=>{
    console.log(`database error was found ${err}`)
})