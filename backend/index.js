const express =require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=process.env.PORT || 5000;

require("dotenv").config();
const uri=process.env.MONGO_URL;

app.listen(PORT,()=>{
    console.log("server listining to app");
    mongoose.connect(uri);
    console.log("mongoose connected");
})