const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const contentengagementSchema= new mongoose.Schema({
    contentengagement:{
        type:String
    },
    score:{
        type:String
    }
})

const contentengagement=mongoose.model("contentengagement",contentengagementSchema)
module.exports=contentengagement