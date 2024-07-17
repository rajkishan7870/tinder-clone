const UserModel = require("../models/user")


const getAllUsers = async (req, res) => {
    const allUser = await UserModel.find({})
    res.send(allUser);
}

const createNewUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    await UserModel.create(user);
    res.status(201).send({ message: "successfully created a new user" });
}

module.exports = {getAllUsers, createNewUser}