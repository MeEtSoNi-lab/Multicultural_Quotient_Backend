const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const countrySchema= new mongoose.Schema({
    name:{
        type:String,
    },
    powerdistance:{
        type:String
    },
    indivisualism:{
        type:String
    },
    uncertenityavoidance:{
        type:String
    },
    indulgence:{
        type:String
    },
    allrest:{
        type:String
    }


})

const Country= mongoose.model('country',countrySchema);
module.exports = Country;
