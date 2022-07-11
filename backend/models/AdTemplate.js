const mongoose = require('mongoose');

const adTemplateSchema = new mongoose.Schema({

    adTemplates: { 
       title: {type: String, required:false},

       required:false
       
    },

});

module.exports= mongoose.model('adTemplates', adTemplateSchema, "adTemplate");
