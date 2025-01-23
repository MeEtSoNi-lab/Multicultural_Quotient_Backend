const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const whiteSchema = new  mongoose.Schema({
    white :{
        type:String
    }
})

const whites = mongoose.model("whites",whiteSchema);
module.exports = whites;
