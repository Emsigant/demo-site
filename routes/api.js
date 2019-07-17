var express = require('express');
var router = express.Router();
var mongoose = require('../db')
var schema1 = new mongoose.Schema({ username: String, password: String })
var model1 = mongoose.model('model1', schema1, 'demo')
router.get('/test', function (req, res, next) {
  model1.find().then(d => {
    res.send(d)
  })
});

router.get('/body', function (req, res, next) {
  res.send(req.body);
});

router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  if (username && password) {
    model1
      .find({ username })
      .then(result => {
        if (result.length) {
          const match = result[0];
          if (match.password === password) {
            res.send({
              message: 'Login success'
            });
          } else {
            res.send({
              message: 'Wrong password'
            });
          }
        } else {
          res.send({
            message: 'Account not exist'
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.send({
          message: 'Fail to fetch data from database'
        });
      });
  } else {
    res.send({
      message: 'Bad request'
    });
  }
})

module.exports = router;