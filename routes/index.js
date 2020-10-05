var express = require('express');
var router = express.Router();
var lang=require('../lang');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {lang:lang.rus, title: lang.rus.title });
});

module.exports = router;
