const express = require('express');
const { createNewProfile, checkAuthentication, returnImageUrl, getProfile } = require('../controllers/profile');
const receiveImageUrl = require('../middlewares/profileImage');
const router = express.Router();

router.post('/', createNewProfile)
router.get('/', checkAuthentication)
router.post('/image', returnImageUrl)
router.get("/getprofile", getProfile)

module.exports = router;