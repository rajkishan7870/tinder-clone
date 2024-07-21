const express = require('express');
const { createNewProfile, checkAuthentication } = require('../controllers/profile');
const router = express.Router();

router.post('/', createNewProfile)
router.get('/', checkAuthentication)

module.exports = router;