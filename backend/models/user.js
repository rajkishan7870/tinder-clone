const { default: mongoose } = require("mongoose");

const user_schema = new mongoose.Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
    phone: { type: "string", required: true },
    DOB: { type: "string", required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("user", user_schema);

module.exports = { User };
