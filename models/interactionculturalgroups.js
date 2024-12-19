const mongoose = require('mongoose');
const { type } = require('express/lib/response');

const interactionculturalgroupsSchema = new mongoose.Schema({
    interactionculturalgroups:{
        type:String
    },

    score:{
        type:String
    }

})


const interactionculturalgroups = mongoose.model('interactionculturalgroups',interactionculturalgroupsSchema)
module.exports=interactionculturalgroups