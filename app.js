// Basics packages
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require("path")
const homepageroutes = require("./routes/home-page-routes") 
require("dotenv").config()
//////
// Middleware
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use( express.static(path.join(__dirname,"assets")));
app.use(homepageroutes)

//////
// Setting the port
const IP = "localhost";
const PORT = process.env.PORT || 30000

// Start the server
app.listen(PORT,err=>{require("dotenv").config()
    if(err){
        console.log(`error while starting ${err}`)
        process.exit(1)
    }else{
        console.log("conected to the server")
    }
})
// Conecting to DB
mongoose.connect(process.env.DB_URL)
.then(_=>console.log("conected to database\nrunning at http://"+IP+":"+PORT))
.catch(err=>{
    console.log(`database error was found ${err}`)
})