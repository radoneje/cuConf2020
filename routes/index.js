var express = require('express');
var router = express.Router();
var lang=require('../lang');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {lang:lang.rus, title: lang.rus.title });
});

router.get('/admin', checkAdminLogin, function(req, res, next) {
  res.render('admin', {title:"admin"});
});

function checkAdminLogin(req, res, next){
 if(!req.session.admin)
   return res.redirect('/login');
 else
   next();

}
router.get('/login', function(req, res, next) {
  res.render('login', {title:"admin"});
});
router.post('/login', function(req, res, next) {
  if(req.body.user=="admin" && req.body.pass=="bolero123"){
    req.session.admin=true;
    res.redirect('admin', );
  }
    else
  {
    req.session.admin=null;
    res.render('login', {title: "admin"});
  }
});
module.exports = router;
