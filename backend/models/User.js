const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: { type: String, required:true },
    email: { type: String, required:true },
    pw: { type: String, required:true },

    messageTemplates: { type: Object, required:false},
    adTemplates: { type: Object, required:false },
    searchUrls: { type: String, required:false }
});

module.exports= mongoose.model('User', userSchema, "User");
