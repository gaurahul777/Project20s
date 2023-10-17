
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pic: {
      type: String,
      // required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", userSchema);

module.exports = Users;
