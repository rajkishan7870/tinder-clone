const express = require('express');
const { createNewProfile } = require('../controllers/profile');
const router = express.Router();

router.post('/', createNewProfile)


module.exports = router;