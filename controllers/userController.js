const mongoose = require("mongoose");
const User = mongoose.model("User");
var jwt = require('jsonwebtoken');



exports.getallusers = async (req, res) => {
  await User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.checkusername = async (req, res) => {
  const { username } = req.body;
  await User.findOne({ username })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.fetchuser = async (req, res) => {
  const { faid } = req.body;
  await User.findOne({ faid })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.register = async (req, res) => {
  const { faid, phonenumber, username } = req.body;

  const userExist = await User.findOne({ username })
  if (userExist) return res.status(400).send('Username already exists')

  const user = new User({
    faid,
    phonenumber,
    username,
  });

  await user.save();
  const token = jwt.sign({ id: user.id }, process.env.SECRET);
  res.json({
    message: "User logged in successfully!",
    token,
    user: user.id,
  })
  res.status(200).send({ auth: true, token: token , user: user.id});
};

