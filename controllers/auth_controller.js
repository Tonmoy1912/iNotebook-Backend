const User=require("./../models/User");
const { validationResult } = require('express-validator');


module.exports.auth=function(req,res){
    // res.writeHeader("nicename","BSDK");
    console.log("body:",req.body);
    const err= validationResult(req);
    if (!err.isEmpty()) {
        // return res.send(`Hello, ${req.query.person}!`);
        return res.status(400).json({errors:err.array()});
    }
    const user=new User(req.body);
    user.save();
    return res.status(200).json(req.body);
};