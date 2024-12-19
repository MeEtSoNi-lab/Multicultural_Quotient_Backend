const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const multiculturalismbenefitsSchema =new mongoose.Schema({
    multiculturalismbenefits:{
        type:String
    },
    score:{
        type:String
    }

})

const multiculturalismbenefits=mongoose.model('multiculturalismbenefits',multiculturalismbenefitsSchema)
module.exports = multiculturalismbenefits;