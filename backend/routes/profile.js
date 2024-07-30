const express = require('express');
const { createNewProfile, checkAuthentication, returnImageUrl, getProfile } = require('../controllers/profile');
const router = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); 
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

const upload = multer({ storage: storage });

router.post('/', createNewProfile)
router.get('/', checkAuthentication)
router.post('/image', upload.single('image'), returnImageUrl)
router.get("/getprofile", getProfile)

module.exports = router;