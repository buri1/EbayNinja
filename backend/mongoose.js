const mongoose = require("mongoose");

const User = require("./models/User");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/User?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database!")
}).catch(() => {
    console.log('connection failed!')
});

const createUser = async (req, res, next) => {
  const createdUser = new User({
    name: req.body.name,
    email: req.body.email,
    pw: req.body.pw,

    messageTemplates: req.body.messageTemplate,
    adTemplates: req.body.adTemplates,
    searchUrls: req.body.searchUrls
  });
  const result = await createdUser.save();
  res.json(createdUser);
};


exports.createUser= createUser;