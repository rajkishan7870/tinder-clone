const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/conn");
const { default: mongoose } = require("mongoose");
const userRouter = require("../routes/user");
dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT || 5000;

// Middleware Plugin
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/user", userRouter)

app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});
