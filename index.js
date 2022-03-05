// dependence
const express = require('express');
const upload = require('./router/fileUploadRoute');

const app = express();

// home route
app.get('/', (req, res) => {
  res.send('hello world');
});
app.post('/image-upload', upload.single('userImage'), (req, res) => {
  console.log(req.file);
  res.send('file upload done');
});

// server code run
app.listen(5000, () => {
  console.log('Your server listening code 5000');
});
