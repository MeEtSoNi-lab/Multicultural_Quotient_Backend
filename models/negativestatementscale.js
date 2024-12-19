const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const negativestatementscaleSchema=new mongoose.Schema({
    negativestatementscale:{
        type:String
    },
    score:{
        type:String
    }

})

const negativestatementscale=mongoose.model('negativestatementscale',negativestatementscaleSchema)
module.exports=negativestatementscale