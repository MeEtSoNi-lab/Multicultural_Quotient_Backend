const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const middleeasternSchema = new  mongoose.Schema({
    middleeastern :{
        type:String
    }
})

const middleeasterns = mongoose.model("middleeasterns",middleeasternSchema);
module.exports = middleeasterns;
