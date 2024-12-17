const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const culturalfoodSchema= new mongoose.Schema({
    culturalfood:{
        type:String
    },
    score:{
        type: String
    }
})

const culturalfood=mongoose.model("culturalfood",culturalfoodSchema)
module.exports=culturalfood