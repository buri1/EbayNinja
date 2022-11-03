const mongoose = require("mongoose");

const AdTemplate = require ("../models/AdTemplate");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database a !")
}).catch(() => {
    console.log('connection failed!')
});


const createAdTemplate = async (req, res, next) => {
    const createdAdTemplate = new AdTemplate ({

      adTemplates: { 
    
        title: req.body.adTemplate.title,

      
      }

    });

    const result = await createdAdTemplate.save();

    res.json(createdAdTemplate)

};

//getAdTemplate needs to be fixed to show the correct ones
const getAdTemplate = async (req, res, next) => {
  const adTemplate = await AdTemplate.find().exec();
  res.json(adTemplate);
};

const getAdTemplates = async (req, res, next) => {
  const adTemplates = await AdTemplate.find().exec();
  res.json(adTemplates);
};


exports.createAdTemplate= createAdTemplate;
exports.getAdTemplate= getAdTemplate;
exports.getAdTemplates= getAdTemplates;