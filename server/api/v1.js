const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
  }
});
const upload = multer({ storage });
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
      message: 'IT worked !!!'
    });
});
  
router.post('/', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.json({
      message: 'Worked'
    });
});

module.exports = router;
