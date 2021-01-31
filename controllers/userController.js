const mongoose = require("mongoose");
const User = mongoose.model("User");
// const sha256 = require("js-sha256");
// const jwt = require("jwt-then");



exports.getallusers = async (req, res) => {
  await User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.checkusername = async (req, res) => {
  const { username } = req.body;
  await User.findOne({ username })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
}

exports.fetchuser = async (req, res) => {
  const { faid } = req.body;
  await User.findOne({ faid })
    .then(users => res.json(users))
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

    // email,
    // password: sha256(password + process.env.SALT),
  });
  await user.save();
  res.json({
    message: "" + username + " is successfully registered with mobile number" + phonenumber + "",
  });
  //   const token = await jwt.sign({ id: user.id }, process.env.SECRET);
  //   res.json({
  //     message: "User logged in successfully!",
  //     token,
  //   });
};

