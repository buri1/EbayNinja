const mongoose = require('mongoose');

const messageTemplateSchema = new mongoose.Schema({

    messageTemplates: { 
                   
        templatetitle: {type: String, required:false},
        templatedescription: {type: String, required:false},

       required:false
       
    },

});

module.exports= mongoose.model('messageTemplates', messageTemplateSchema, "messageTemplate");