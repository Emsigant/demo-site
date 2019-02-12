var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
})

router.get('/react-demo', function(req, res, next) {
  res.render('react-demo')
})

module.exports = router;
