const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const yearofrecidenceSchema = new mongoose.Schema({
    years:{
        type:String
    },

    score:{
        type:String
    }
})

const yearsofrecidence = mongoose.model('yearsofrecidence',yearofrecidenceSchema);

module.exports = yearsofrecidence;