//creating router 
const express = require("express")
const router = express.Router()
const {getindex,gethome,signup,signin}= require("../controllers/home-page-controller")

//adding routes
router.get("/home",gethome)
router.get("/index",getindex)
router.post("/signup",signup)
router.post("/signin",signin)

//exporting
module.exports=router