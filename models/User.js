const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    faid: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);