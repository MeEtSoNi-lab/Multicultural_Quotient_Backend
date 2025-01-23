const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const asiansSchema = new  mongoose.Schema({
    ASIAN :{
        type:String
    }
})

const asians = mongoose.model("asians",asiansSchema);
module.exports = asians;
