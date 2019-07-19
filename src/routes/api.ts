var express = require('express');
var router = express.Router();
import { Schema, Document, model } from 'mongoose';
import mgs from '../db';
console.log(mgs);
interface UserSchema extends Document {
  password: string;
  username: string;
}
var schema1 = new Schema<UserSchema>({ username: String, password: String })
var model1 = model<UserSchema>('model1', schema1, 'demo')
router.get('/test', function (req, res, next) {
  model1.find().then(d => {
    res.send([
      { username: '111', password: '111' },
      { username: '222', password: '222' },
      { username: '333', password: '333' },
    ])
  })
});

router.get('/body', function (req, res, next) {
  res.send(req.query);
});

router.post('/post', function (req, res, next) {
  res.send(req.body);
});

router.post('/login', async function (req, res, next) {
  // login
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