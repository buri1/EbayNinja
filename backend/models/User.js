const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: { type: String, required:true },
    email: { type: String, required:true, unique: true },
    password: { type: String, required:true, minlength: 6 },
    ebaylogin: {
        Accounts: {
            Account: {
                ebayEmail: {type: String, required:false},
                ebayPassword: {type: String, required:false}
                     }
                    },
                required:false
                },

    adTemplates: { 
       title: {type: String, required:false},
       description: {type: String, required:false},
       price: {type: String, required:false},
       //later replaced through embedded documents from which one needs to be true (vb/verschenken/suche)
       adType: {type: Number , required:false},
       Imagess: {type: String, required:false},
       SearchorSell: {type: Boolean, required:false},
       category: {type: String, required:false},
       required:false
    },

    messageTemplates: { 
        templateTitle: {type: String, required:false},
        templateDescription: {type: String, required:false},
        required:false

    },

    searchUrls: { type: Object, required:false }
});

module.exports= mongoose.model('Users', userSchema, "user");
