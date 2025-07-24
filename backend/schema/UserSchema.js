const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type : String
    }
});

const userdata = new mongoose.model('user', userschema);
module.exports = userdata;