const mongoose =('mongoose');

const User = require ("./models/User");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database!")
}).catch(() => {
    console.log('connection failed!')
});


const createAdTemplate = async (req, res, next) => {
    const createdAdTemplate = new AdTemplate ({
    
        title: {type: String, required:false},
        description: {type: String, required:false},
        price: {type: String, required:false},
        //later replaced through embedded documents from which one needs to be true (vb/verschenken/suche)
        adType: {type: Number , required:false},
        Imagess: {type: String, required:false},
        SearchorSell: {type: Boolean, required:false},
        category: {type: String, required:false},
        required:false

    });

    const result = await createdAdTemplate.save();

    res.json(createdAdTemplate)

};

exports.createAdTemplate= createAdTemplate;