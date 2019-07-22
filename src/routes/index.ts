import * as express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
})
router.get('/test-api',function(req,res,next){
  res.send({message: 'OK', status: 1});
})
router.get('/react-demo', function(req, res, next) {
  res.render('react-demo')
})

router.get('/angular-demo', function(req, res, next) {
  res.render('angular-demo')
})


export default router;
