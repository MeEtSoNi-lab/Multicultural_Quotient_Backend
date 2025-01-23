const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const multiculturalSchema=new mongoose.Schema({
    multicultural:{
        type:String
    }
})

const multiculturals=mongoose.model('multiculturals',multiculturalSchema)
module.exports = multiculturals;