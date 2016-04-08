var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sPage = req.params.page;
    res.render('index', { title: 'Swig Express', User: { Name: 'MengkZhaoyun' } });
});

/* GET home page. */
router.get('/:page', function(req, res, next) {
    var sPage = req.params.page;
    sPage = sPage.split('.')[0] + '.tpl';
    res.render(sPage, { title: 'Swig Express', User: { Name: 'MengkZhaoyun' } });
});

module.exports = router;
