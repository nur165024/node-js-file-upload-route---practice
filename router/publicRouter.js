const express = require('express');

const publicRouter = express.Router();

publicRouter
  .route('/user')
  .all((req, res, next) => {
    console.log('I am logging something');
    next();
  })
  .get((req, res) => {
    res.send('User Get method');
  })
  .post((req, res) => {
    res.send('User Post method');
  })
  .put((req, res) => {
    res.send('User Put method');
  })
  .delete((req, res) => {
    res.send('User Delete method');
  });

publicRouter.get('/', (req, res) => {
  res.send(`Home page User`);
});

publicRouter.get('/about', (req, res) => {
  res.send('About page');
});

module.exports = publicRouter;
