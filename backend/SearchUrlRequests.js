const mongoose = require("mongoose");

const SearchUrlTemplate = require ("./models/User");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database!")
}).catch(() => {
    console.log('connection failed!')
});


const createSearchUrl = async (req, res, next) => {
    const createdSearchUrl = new SearchUrlTemplate ({
    
        searchUrls: {type: String, required:false},


    });

    const result = await createdSearchUrl.save();

    res.json(createdSearchUrl)

};

//getAdTemplate needs to be fixed to show the correct ones
const getSearchUrl = async (req, res, next) => {
  const searchUrls = await SearchUrlTemplate.find().exec();
  res.json(searchUrls);
};




exports.createSearchUrl= createSearchUrl;
exports.getSearchUrls= getSearchUrl;
