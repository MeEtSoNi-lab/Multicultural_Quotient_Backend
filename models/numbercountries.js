const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const numbercountriesSchema= new mongoose.Schema({
    numbercountries:{
        type:String
    },
    score:{
        type:String
    }
})

const numbercountries = mongoose.model("numbercountries",numbercountriesSchema)

module.exports = numbercountries

