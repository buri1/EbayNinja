const mongoose = require("mongoose");

const User = require("./models/User");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database!")
}).catch(() => {
    console.log('connection failed!')
});

const createUser = async (req, res, next) => {
  const createdUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,

    messageTemplates: req.body.messageTemplate,
    adTemplates: req.body.adTemplates,
    searchUrls: req.body.searchUrls
  });
  const result = await createdUser.save();

  res.json(createdUser);
};
//.exec bc mongoose otherwise doesnt return a "real" promise on .find, with exec it does which enables async/await
const getUser = async (req, res, next) => {
    const user = await User.find().exec();
    res.json(user);
  };


exports.createUser= createUser;
exports.getUser= getUser;