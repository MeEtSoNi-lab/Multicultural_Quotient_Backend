const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const borndataSchema=new mongoose.Schema(
    {
        generation:{
            type:String
        },
        score:{
            type : String
        }
    }
)

const Borndata=mongoose.model("borndata",borndataSchema);
module.exports=Borndata;