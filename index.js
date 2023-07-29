const db=require("./config/mongoose");
const express=require("express");
const cors=require("cors");

const port=8000;

const app=express();

app.use(cors({
    origin:["http://localhost:3000", "http://192.168.0.106:3000"],
    methods:["GET","PUT","POST","DELETE"]
}));

// app.use(cors());

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
