const express=require("express");
const controller=require("../Controller/Auth-Controller")

const router=express.Router();



router.post("/signup",controller.signup);
router.get("/user",controller.login)


module.exports=router;




