const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userToken = req.cookies?.token;

  if (!userToken) return null;
  const user = getUser(userToken);

  if (!user) return null;

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userToken = req.cookies?.token;

  const user = getUser(userToken);

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};