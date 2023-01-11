const { HTTPError } = require("got/dist/source");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const User = require("../models/User");

//connection to the database

mongoose
  .connect(
    "mongodb+srv://12347:12347@cluster0.9xxdj.mongodb.net/Users?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database usercontroller!");
  })
  .catch(() => {
    console.log("connection failed!");
  });

const createUser = async (req, res, next) => {
  const createdUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const result = await createdUser.save();

  res.json(createdUser);
};

const signUpUser = async (req, res, next) => {
  let existingUser;

  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    const error = new HTTPError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    let error = new HTTPError("User exits already, please login instead.", 422);
    return next(error);
  }

  else {

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(req.body.password, 12);
    } catch (err) {
      const error = new HTTPError(
        "could not create user, please try again.", 500
      );
      return next(error);
    }

    let signedUpUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      await signedUpUser.save();
    } catch (err) {
      let error = new HTTPError("Signing Up failed, please try again", 501);
      return next(error);
    }

    res.status(201).json({ user: signedUpUser.toObject({ getters: true }) });
  }
};

/* 
// create/register user
const createUser = async (req, res, next) => {
  let existingUser
  try {
    existingUser = await User.findOne({ email: req.body.email})
  } catch(err) {
    const error = new HTTPError (
      'Signing up failed, please try again later.',
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
  });
  try {
    await createdUser.save();
  }
 catch(err) {
  const error = new HTTPError(
    'Signing Up failed, please try agian',500
  );}
  res.status(201).json({user: createdUser.toObject({getters:true})});
};
 
//Login User
 const loginUser = async (req, res, next) => {
  let existingUser
  try {
    existingUser = await User.findOne({ email: email})
  } catch(err) {
    const error = new HTTPError (
      'Singing up failed, please try again later.',
      500
          );
          return next (error);
  }

  const user = await User.find().exec();
  res.json(user);
};
 
//Get single User data
//.exec bc mongoose otherwise doesnt return a "real" promise on .find, with exec it does which enables async/await
 const getUser = async (req, res, next) => {
    const user = await User.find().exec();
    res.json(user);
  };


//Load all Users data
  const getUsers = async (req, res, next) => {
    const users = await User.find().exec();
    res.json(users);
  };  */

/* exports.loginUser= loginUser; 
exports.createUser= createUser; 
exports.getUser= getUser;
exports.getUsers= getUsers;  */

exports.createUser = createUser;
exports.signUpUser = signUpUser;
