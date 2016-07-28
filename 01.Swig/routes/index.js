var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.tpl', { title: 'Swig Express SHU' });
});

module.exports = router;
