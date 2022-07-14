const mongoose = require('mongoose');

const searchUrlSchema = new mongoose.Schema({

    SearchUrls: { 
                   
        searchUrls: {type: String, required:false},


       required:false
       
    },

});

module.exports= mongoose.model('searchUrls', searchUrlSchema,"searchUrl");