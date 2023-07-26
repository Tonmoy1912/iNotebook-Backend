const express=require("express");
const router=express.Router();
const authController=require("./../../controllers/auth_controller");
const { body } = require('express-validator');



//Create a user using: POST:"/api/auth" Doesn't require auth
router.post("/",[
    body("email","enter a valid email").isEmail(),
    body("name","enter a valid name").isLength({min:3}),
    body("password","enter a valid password").isLength({min:5}),
],authController.auth);


module.exports=router;