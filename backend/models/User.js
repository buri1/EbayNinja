const mongoose = require('mongoose');
//const uniqueValidator = require ('mongoose-unique-validator');

const userSchema = new mongoose.Schema({

    name: { type: String, required:false },
    email: { type: String, required:false, unique: true },
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

    messageTemplates: {type:mongoose.Types.ObjectId, required:false, ref: "User"}

    ,

    searchUrls: { type: String, required:false }}
);



module.exports= mongoose.model('Users', userSchema, "user");
