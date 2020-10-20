var express = require('express');
var router = express.Router();
var lang=require('../lang');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/rus")
});
router.get('/rus', function(req, res, next) {
  console.log(lang.rus.title)
  res.render('index', {lang:lang.rus, title: lang.rus.title.replace(/\<br\/\>/g,' ') });
});
router.get('/eng', function(req, res, next) {
  res.render('index', {lang:lang.eng, title: lang.eng.title.replace(/\<br\/\>/g,' ') });
});
router.get('/session/:id/:lang?',async  (req, res, next)=> {
  if(!req.params.lang)
    return res.redirect("/session/"+req.params.id+"/rus")
  var r=await req.knex.select("*").from("t_sessions").whereNot({status:0}).andWhere({id:req.params.id});
  console.log(r.length)
  if(r.length==0)
    return res.send(404);
  console.log(r)
  var session=r[0];
  res.render('session', {session:session,lang:lang[req.params.lang], title: lang[req.params.lang].title.replace(/\<br\/\>/g,' ') });
});

router.get('/admin', checkAdminLogin, function(req, res, next) {
  res.render('admin', {title:"admin"});
});

router.get('/questions/:code', async function(req, res, next) {
  var r=await req.knex.select("*").from("t_sessions").where({code:req.params.code});
  if(r.length==0)
    return res.sendStatus(404).send("no code")

  res.render('questions', {title:"questions", session:r[0],lang:lang["eng"]});
});

router.get('/moderator/:code', async function(req, res, next) {
  var r=await req.knex.select("*").from("t_sessions").where({code:req.params.code});
  if(r.length==0)
    return res.sendStatus(404).send("no code")

  res.render('moderator', {title:"questions", session:r[0],lang:lang["rus"]});
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
