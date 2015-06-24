var express = require('express');
var router = express.Router();
var path = require('path');
 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express Play!' });
// });

router.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname, '../views/index.html') );
   console.log('home page.');
});


// router.post('/upload', function(req, res, next){


// });

module.exports = router;
