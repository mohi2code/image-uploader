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
  
router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file);
    res.json({
      recieved: true,
      filename: req.file.filename
    });
});

module.exports = router;
