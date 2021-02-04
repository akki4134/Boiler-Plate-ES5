const mongoose = require("mongoose");

const groupchatSchema = new mongoose.Schema({
    groupname: {
        type: String,
        required: "Group Name is required!",
    },
    grouptype: {
        type: String,
        required: "Group Type is required!",
    },
    groupadmin: {
        type: String,
        required: "Group Admin is required!",
    }
});

module.exports = mongoose.model("Groupchat", groupchatSchema);