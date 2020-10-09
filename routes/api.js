var express = require('express');
var router = express.Router();
var uuid =require('uuidv4');
var path =require('path');
var fs =require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/session', async (req, res, next) =>{
  var r = await req.knex("t_sessions").insert({}, "*")
    r[0].speakers=[];
    r[0].moderators=[];
  res.json(r);
});
router.get('/session', async (req, res, next) =>{
  var r = await req.knex.select("*").from("t_sessions").orderBy("id","desc")
    for(var session of r){
        session.speakers=await req.knex.select("*").from("v_spktosess").where({sessionid:session.id}).orderBy("sort", "desc");
        session.moderators=await req.knex.select("*").from("v_modtosess").where({sessionid:session.id}).orderBy("sort", "desc");
    }
  res.json(r);
});
router.post('/session', async (req, res, next) =>{
  var id=req.body.id;
  delete req.body.id;
    delete req.body.speakers;
    delete req.body.moderators;
  var r = await req.knex("t_sessions").update(req.body, "*").where({id:id})
  res.json(r);
});
router.post('/file', async (req, res, next) =>{
 console.log(req.files.file.name)

    console.log(uuid.uuid)
    var fname='/files/'+uuid.uuid()+getExtension(req.body.filename);
    console.log(fname, req.files.file)

    fs.rename(req.files.file.tempFilePath,path.resolve(__dirname,'../public')+ fname, (err)=>{

        res.json(fname);
    } )

});
function getExtension(filename) {
    var i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i);
}
router.get("/speakers",async  (req, res, next) =>{
    var r = await req.knex.select("*").from("t_speakers").orderBy("nameru")
    res.json(r);
})
router.post("/speakers",async  (req, res, next) =>{
    var r = await req.knex("t_speakers").insert(req.body, "*")
    res.json(r);
})
router.post("/deleteNewspeaker",async  (req, res, next) =>{
    var r = await req.knex("t_speakers").where({id:req.body.id}).del();
    r = await req.knex.select("*").from("t_speakers").orderBy("nameru")
    res.json(r);
})
router.post("/changeListSpeaker",async  (req, res, next) =>{
    var id=req.body.id;
    delete req.body.id;
    var r = await req.knex("t_speakers").where({id:id}).update(req.body);
    res.json(r);
})
router.post("/speakerToSession",async  (req, res, next) =>{

    var r = await req.knex("t_speakerstosession").insert(req.body, "*");
    r=await req.knex.select("*").from("v_spktosess").where({sessionid:req.body.sessionid}).orderBy("sort", "desc");
    res.json(r);
})

router.post("/moderatorToSession",async  (req, res, next) =>{

    var r = await req.knex("t_moderatorstosession").insert(req.body, "*");
    r=await req.knex.select("*").from("v_modtosess").where({sessionid:req.body.sessionid}).orderBy("sort", "desc");
    res.json(r);
})

router.post("/deleteSpeakerFromSession",async  (req, res, next) =>{

    var r = await req.knex("t_speakerstosession").where(req.body).del();
    res.json(1);
})
router.post("/deleteModeratorFromSession",async  (req, res, next) =>{

    var r = await req.knex("t_moderatorstosession").where(req.body).del();
    res.json(1);
})

router.post("/upSpeakerFromSession",async  (req, res, next) =>{

    var source = await req.knex.select("*").from("t_speakerstosession").where(req.body);
    source[0].sort=source[0].sort+15;
    await req.knex("t_speakerstosession").where({id:source[0].id}).update({sort:source[0].sort});

    var list = await req.knex("t_speakerstosession").where({sessionid:source[0].sessionid}).orderBy("sort","desc");

    var i=0;
    for(var item of list){
        await req.knex("t_speakerstosession").where({id:item.id}).update({sort:i});
        i=i-10;
        console.log(i)
    }
    r=await req.knex.select("*").from("v_spktosess").where({sessionid:req.body.sessionid}).orderBy("sort", "desc");
    res.json(r);
})
router.post("/upModeratorFromSession",async  (req, res, next) =>{

    var source = await req.knex.select("*").from("t_moderatorstosession").where(req.body);
    source[0].sort=source[0].sort+15;
    await req.knex("t_moderatorstosession").where({id:source[0].id}).update({sort:source[0].sort});

    var list = await req.knex("t_moderatorstosession").where({sessionid:source[0].sessionid}).orderBy("sort","desc");

    var i=0;
    for(var item of list){
        await req.knex("t_moderatorstosession").where({id:item.id}).update({sort:i});
        i=i-10;
        console.log(i)
    }
    r=await req.knex.select("*").from("v_modtosess").where({sessionid:req.body.sessionid}).orderBy("sort", "desc");
    res.json(r);
})







module.exports = router;
