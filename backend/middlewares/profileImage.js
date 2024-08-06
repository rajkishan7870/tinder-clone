
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); 
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

const upload = multer({ storage: storage });


const receiveImageFile = async (req, res, next) =>{
  await upload.single('image')
  next()
}


module.exports = {receiveImageFile}