//creating router 
const express = require("express")
const router = express.Router()
const {get}= require("../controllers/home-page-controller")
const {signup}= require("../controllers/home-page-controller")
const {signin}= require("../controllers/home-page-controller")

//adding routes
router.get("/",get)
router.post("/signup",signup)
router.post("/signin",signin)

//exporting
module.exports=router