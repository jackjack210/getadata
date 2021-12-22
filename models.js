const mongoose = require('mongoose');

const models = new mongoose.Schema({
    name:{
        type:String,
    },
    longitude:{
        type:String,
    },
    latitude:{
        type:String,
    },
    email:{
        type:String,
    },
    data:{
        type:String,
    },
});

const Models = mongoose.model('MODELS', models)

module.exports = Models;