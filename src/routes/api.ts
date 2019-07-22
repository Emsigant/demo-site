import * as express from 'express';
import { Schema, Document, model } from 'mongoose';
import { connect } from 'mongoose';
const IS_DEV = process.argv.indexOf('DEV') >= 0 ? 'mongodb://116.62.126.60:27017/demo' : 'mongodb://localhost:27017/demo'
const DB_URL = `mongodb://${IS_DEV ? `116.62.126.60` : `localhost`}:27017/demo`
let mongoose: typeof import("mongoose") = null;
async function initmongoose() {
    try {
        mongoose = await connect(DB_URL, { useNewUrlParser: true })
        console.log(`success to connect ${DB_URL}`)
    } catch (err) {
        throw new Error(`fail to connect ${DB_URL}`)
    }
    return mongoose
}
initmongoose()
var router = express.Router();
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

export default router;