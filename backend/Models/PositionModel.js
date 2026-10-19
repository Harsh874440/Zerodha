const {model} =require("mongoose");
const {PositionSchema} = require("../Schema/OrderSchema.js");


const PositionModel = new model("position",PositionSchema);

module.exports({PositionModel});


