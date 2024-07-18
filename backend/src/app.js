const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/conn");
const userRouter = require("../routes/user");
const profileRouter = require("../routes/profile");
const loginRouter = require("../routes/login");
dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT || 5000;

// Middleware Plugin
app.use(express.json());

app.use("/api/user", userRouter)
app.use("/api/profile", profileRouter)
app.use("/api/login", loginRouter)

app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
