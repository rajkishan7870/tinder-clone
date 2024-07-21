const { getUser } = require("../service/auth");


async function checkAuthForProfile(req, res, next) {
  const tokenFromCookies = req?.headers.authorization.split("Bearer ")[1]
  const user = getUser(tokenFromCookies)
  if (!user) {
    res.status(401).json({
      message: "Invalid or expired token"
    });
  }
  else {
    req.user = user;
  }
  next()
}


module.exports = {
  checkAuthForProfile,
};