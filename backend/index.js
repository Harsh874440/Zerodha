const express =require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=process.env.PORT || 5000;
const {HoldingModel}=require("./Models/HoldingModel.js");
const {PositionModel}=require("./Models/PositionModel.js");

require("dotenv").config();
const uri=process.env.MONGO_URL;

// app.get("/addHoldingData", (req,res)=>{
//     const positions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];


// positions.forEach((item)=>{
//     let newHolding= new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price:item.price,
//     net: item.net,
//     day: item.day,
//     isLoss:item.isLoss,
//     })

//     newHolding.save();
   
// })

// res.send("done");

// })

app.listen(PORT,()=>{
    console.log("server listining to app");
    mongoose.connect(uri);
    console.log("mongoose connected");
})