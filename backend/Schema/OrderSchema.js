const {Schema}=require("mongoose");


const OredrSchema=new schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
})


module.exports({OrderSchema});