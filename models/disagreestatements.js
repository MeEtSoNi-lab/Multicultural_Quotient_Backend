const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const disagreestatementsSchema=new mongoose.Schema({
    disagreestatements:{
        type:String
    },
    score:{
        type:String
    }
})

const disagreestatements=mongoose.model("disagreestatements",disagreestatementsSchema)
module.exports=disagreestatements