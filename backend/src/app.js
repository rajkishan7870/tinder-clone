const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const connectDB = require("../db/conn");
const userRouter = require("../routes/user");
const profileRouter = require("../routes/profile");
const loginRouter = require("../routes/login");
const suggestionRouter = require("../routes/suggestion");
const { checkAuthForProfile } = require("../middlewares/auth");
dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT || 5000;

// Middleware Plugin
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/api/user", userRouter)
app.use("/api/profile", checkAuthForProfile, profileRouter)
app.use("/api/login", loginRouter)
app.use("/api/suggestion", checkAuthForProfile, suggestionRouter)

app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
