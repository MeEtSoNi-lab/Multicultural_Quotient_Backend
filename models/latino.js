const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const latinoSchema = new  mongoose.Schema({
    latino :{
        type:String
    }
})

const latinos = mongoose.model("latinos",latinoSchema);
module.exports = latinos;
