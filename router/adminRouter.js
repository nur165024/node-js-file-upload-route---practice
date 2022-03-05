const express = require('express');

const adminRouter = express();

adminRouter.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

adminRouter.get('/order', (req, res) => {
  res.send('Order list');
});

adminRouter.get('/login', (req, res) => {
  res.send('Admin Login');
});

module.exports = adminRouter;
