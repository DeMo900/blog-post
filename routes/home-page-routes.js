//creating router 
const express = require("express")
const router = express.Router()
const {get}= require("../controllers/home-page-controller")
//adding routes
router.get("/",get)
//exporting
module.exports=router