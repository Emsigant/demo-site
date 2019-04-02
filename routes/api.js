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

module.exports = router;