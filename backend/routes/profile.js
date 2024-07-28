const express = require('express');
const { createNewProfile, checkAuthentication, returnImageUrl } = require('../controllers/profile');
const receiveImageUrl = require('../middlewares/profileImage');
const router = express.Router();

router.post('/', createNewProfile)
router.get('/', checkAuthentication)
router.post('/image', returnImageUrl)

module.exports = router;