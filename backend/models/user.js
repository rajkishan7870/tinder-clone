const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
    phone: { type: "string", required: true },
    DOB: { type: "string", required: true },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);

module.exports =  UserModel
