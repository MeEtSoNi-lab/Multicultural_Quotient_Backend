const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const traveledcountriesSchema= new mongoose.Schema({
    traveledcountries:{
        type:String
    },

    score:{
        type:String
    }
})

const traveledcountries = mongoose.model("traveledcountries",traveledcountriesSchema);
module.exports=traveledcountries;