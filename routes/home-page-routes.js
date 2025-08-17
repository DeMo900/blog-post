//creating router 
const express = require("express")
const router = express.Router()
const {get}= require("../controllers/home-page-controller")
const {post}= require("../controllers/home-page-controller")
//adding routes
router.get("/",get)
router.post("/signup",post)
//exporting
module.exports=router