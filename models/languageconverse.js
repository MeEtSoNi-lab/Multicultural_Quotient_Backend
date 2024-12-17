const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const languageconverseSchema=new mongoose.Schema({
    languageconverse:{
        type:String
    },
    score:{
        type: String    
    }

})

const languageconverse=mongoose.model("languageconverse",languageconverseSchema)
module.exports=languageconverse