const mongoose = require("mongoose");
const Groupchat = mongoose.model("Groupchat");

exports.createGroupChat = async (req, res) => {
  const { groupname, grouptype, groupadmin } = req.body;

  const chatroomExists = await Groupchat.findOne({ groupname });

  if (chatroomExists) throw "Chatroom with that name already exists!";

  const groupchat = new Groupchat({
    groupname,
    grouptype,
    groupadmin,
  });

  await groupchat.save();

  res.json({
    message: "Chatroom created!",
  });
};

exports.getAllGroupChats = async (req, res) => {
  const groupchats = await Groupchat.find({});
  res.json(groupchats);
};

exports.removeGroupchat = async (req, res) => {
  const groupchats = await Groupchatremove({});
  res.json(groupchats);
};