const express = require('express');
const { getAllUsers, createNewUser, verifyUser } = require("../controllers/userController")

const router = express.Router();

router.get('/', getAllUsers)
  
router.post("/", createNewUser);

router.post('/api/login', verifyUser)

module.exports = router;