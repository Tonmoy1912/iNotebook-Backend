const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/inotebook')
.then(()=>{
    console.log("Successfully connected to database");
})
.catch((err)=>{
    console.log("Error while connection to database",err);
})

const db=mongoose.connection;
module.exports=db;