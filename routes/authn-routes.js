//creating router 
const express = require("express")
const router = express.Router()
const {getsignup,getindex,gethome,signup,updatepassword,verify,signin,forgotpassword}= require("../controllers/authn-controller")

//adding routes
router.get("/",gethome)
router.get("/forget-password",getindex)
router.get("/signup",getsignup)
router.post("/signup",signup)
router.post("/signin",signin)
router.post("/signin/forgotpassword",forgotpassword)
router.post("/signin/forgotpassword/verify",verify)
router.patch("/updatepassword",updatepassword)
//exporting
module.exports=router