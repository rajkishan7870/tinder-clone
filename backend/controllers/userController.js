const UserModel = require("../models/user")
const generateToken = require("../token/generateToken");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
    const allUser = await UserModel.find({})
    res.send(allUser);
}

const createNewUser = async (req, res) => {
    console.log(req.body)
    const { name, email, password, phone, DOB } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        alert("Please Enter all the Fields");
    }
    const userExists = await UserModel.findOne({email});
    if (userExists) {
        res.status(400);
        alert("User already Exist");
    }

    salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
    
    const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
        phone,
        DOB,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            DOB: user.DOB,
            token: generateToken(user._id),
        })
    }
    else {
        res.status(401);
        alert("Failed to create User");
    }
}

const verifyUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) { 
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token : generateToken(user._id)
        })
    }
    else {
        res.status(401);
        alert("Invalid Email or password");
    }
}

module.exports = {getAllUsers, createNewUser, verifyUser}