const { HTTPError } = require("got/dist/source");
const mongoose = require("mongoose");

const User = require("./models/User");

mongoose.connect('mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to Database!")
}).catch(() => {
    console.log('connection failed!')
});

const createUser = async (req, res, next) => {

  let existingUser
  try {
    existingUser = await User.findOne({ email: email})
  } catch(err) {
    const error = new error = new HttpError (
      'Singing up failed, please try again later.',
      500
          );
          return next (error);
  }
  if (existingUser) {
    const error = new HTTPError(
      'User exits already, please login instead.',
      422
    );
    return next(error);
  
  }
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