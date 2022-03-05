const express = require('express');
const multer = require('multer');
const path = require('path');

// file upload folder
const UPLOADS_FOLDER = './src/uploads/';

// defile the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

// multer file upload object
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg, .png or .jpeg format allowed'));
    }
  },
});

const image = express();

// error handling
image.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send('There was an upload error');
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send('success');
  }
});

module.exports = upload;
