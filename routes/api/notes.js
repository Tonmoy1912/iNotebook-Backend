const express=require("express");
const router=express.Router();
const notesController=require("./../../controllers/notes_controller");


router.get("/",notesController.notes);


module.exports=router;