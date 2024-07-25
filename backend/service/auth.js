const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
secret = process.env.JWT_SECRET;

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}

function checkForSameDay(eventTime) {
  const today = new Date().toISOString().split("T")[0];
  const eventDate = new Date(eventTime).toISOString().split("T")[0];

  return eventDate === today ? true : false;
}

module.exports = {
  setUser,
  getUser,
  checkForSameDay,
};
