const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const blackSchema = new  mongoose.Schema({
    black :{
        type:String
    }
})

const blacks = mongoose.model("blacks",blackSchema);
module.exports = blacks;
