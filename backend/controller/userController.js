const { validationResult} = require('express-validator')
const { HTTPError } = require("got/dist/source");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
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


//User Signup function

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
      let error = new HTTPError(
        "Signing Up failed, please try again", 501);
      return next(error);
    }
    //create and return JWT on signup
    let token;
    try {
      token = jwt.sign({userId: signedUpUser.id, email: signedUpUser.email}, 
        'supersecret_dont_share', 
        {expiresIn: '12h'});
    }
    catch (err) {
      let error = new HTTPError(
        "Signing Up failed, please try again", 502);
      return next(error);
    }



    res.status(201).json({userId: signedUpUser.id, email: signedUpUser.email, token: token });
  }
};

//User Login function

const loginUser = async (req, res, next) => {

  let existingUser

  try {
    existingUser = await User.findOne({ email: req.email })
  } catch (err) {
    const error = new HTTPError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HTTPError (
      'invalid credentials, could not log you in',
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = bcrypt.compare(password, existingUser.password);
  }
  catch (err) {
    const error = new HTTPError (
      'could not log you in, please check your credentials and try again',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HTTPError (
      'invalid credentials, could not log you in',
      401
    );
    return next (error);
  }

  let token;
  try{
    token = jwt.sign(
      {userId: existingUser.id, email: existingUser.email},
      'supersecret_dont_share',
      { expiresIn: '12h'}
    );
  } catch (err) {
    const error = new HTTPError (
      'Logging in failed, please try again later',
      500
    );
    return next (error);
  }
  
  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token
  }
  );
};

exports.loginUser = loginUser;
exports.signUpUser = signUpUser;
