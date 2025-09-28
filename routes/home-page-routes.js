//creating router 
const express = require("express")
const router = express.Router()
const {getindex,gethome,signup,signin,forgotpassword}= require("../controllers/home-page-controller")

//adding routes
router.get("/home",gethome)
router.get("/signin",getindex)
router.post("/postsignup",signup)
router.post("/postsignin",signin)
router.post("/signin/forgotpassword",forgotpassword)

//exporting
module.exports=router