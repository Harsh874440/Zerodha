const {model} =require("mongoose");
const {HoldingSchema} = require("../Schema/HoldingSchema.js");


const HoldingModel = new model("holding",HoldingSchema);

module.exports({HoldingModel});