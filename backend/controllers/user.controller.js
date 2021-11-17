const { hash } = require('bcrypt');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const User = require('../models/User');

exports.signup = (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.email === req.body.email) {
        return res.status(409).json({ error: 'Mail Exists' });
      } else {
        bcrypt.hash(req.body.password, 10, (error, hash) => {
          if (error) {
            return res.status(500).json({ error: error });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              ...req.body,
            });
            const token = jwt.sign(
              {
                email: user.email,
                password: user.password,
              },
              process.env.SECRET_KEY,
              { expiresIn: '24h' }
            );
            const data = {
              from: 'SkouShop Team <no-reply@skou-shop.tn>',
              to: req.body.email,
              subject: 'Account Activation',
              html: `<h2> Please click on given button to activate you account </h2>
                      <a href=" http://localhost:6000/activation/${token}" > Verify your account</a>`,
            };
            user
              .save()
              .then((result) => {
                console.log(result);
                mg.messages().send(data, function (error, body) {
                  if (error) {
                    return res.json({
                      error: error,
                    });
                  } else {
                    return res.status(200).json({
                      user: result,
                    });
                  }
                });
              })
              .catch((error) => {
                return res.status(500).json({ error: error });
              });
          }
        });
      }
    });
};
/*const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (findUser) {
      return res.status(400).json({ error: 'User exists' });
    }

    const newUser = new User({ ...req.body });

    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;

    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '3h' }
    );

    return res.status(200).json({ user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    const comparePass = await bcrypt.compare(password, findUser.password);

    if (!comparePass) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      {
        id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '3h' }
    );
   return res.status(200).json({ user: findUser });
  } catch (error) {
    res.status(500).json({ error: 'Cannot login' });
  }
};*/
