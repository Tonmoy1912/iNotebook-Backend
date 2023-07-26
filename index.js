const db=require("./config/mongoose");
const express=require("express");

const port=8000;

const app=express();


app.use(express.json());

app.use("/",require("./routes"));

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connecting to the server\n${err}`);
    }
    else{
        console.log(`Server is running on port : ${port}`);
    }
});