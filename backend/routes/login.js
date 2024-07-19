const express = require('express');
const { verifyUser } = require("../controllers/userController")

const router = express.Router();


router.post('/', verifyUser)

module.exports = router;