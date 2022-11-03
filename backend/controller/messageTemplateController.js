const mongoose = require("mongoose");

const MessageTemplate = require("../models/MessageTemplate");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database m !")
}).catch(() => {
    console.log('connection failed!')
});


const createMessageTemplate = async (req, res, next) => {
    const createdMessageTemplate = new MessageTemplate ({
      messageTemplates:{
    
        templatetitle: req.body.messagetemplates.templatetitle,
        templatedescription: req.body.messagetemplates.templatedescription
      }

    });

    const result = await createdMessageTemplate.save();

    res.json(createdMessageTemplate)

};

//getAdTemplate needs to be fixed to show the correct ones
const getMessageTemplate = async (req, res, next) => {
  const messageTemplate = await MessageTemplate.find().exec();
  res.json(messageTemplate);
};

const getMessageTemplates = async (req, res, next) => {
  const messageTemplates = await MessageTemplate.find().exec();
  res.json(messageTemplates);
};


exports.createMessageTemplate= createMessageTemplate;
exports.getMessageTemplate= getMessageTemplate;
exports.getMessageTemplates= getMessageTemplates;