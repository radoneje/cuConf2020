import "core-js/stable";
import "regenerator-runtime/runtime";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import moment from 'moment'

// Install BootstrapVue
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


var app = new Vue({
    el: '#app',
    data: {
        opacity:0,
        adminSect:0,
        sessions:[],
        speakers:[],
        lid:[],
        quests:[],
        newQtext:"",
        newSpeaker:{img:'/img/user.png'},
        dateOptions:[{value: 22, text: '22 окт'}, {value: 23, text: '23 окт'}],
    },
    methods: {
        saveLid:async function(){
            var res= await axios.post("/api/lid", {lid:this.lid});
        },
        qDelete:async function(q){
            var res= await axios.delete("/api/q/"+q.id);
            this.quests=this.quests.filter(qq=>qq.id!=q.id);

        },
        isMyLike:function(q){
            return localStorage.getItem("qlike"+q.id)
        },
        qLike:async function(q){
            if(!localStorage.getItem("qlike"+q.id)) {
                localStorage.setItem("qlike" + q.id, true);
                var res= await axios.post("/api/qLike",{id:q.id});
                q.likes=res.data;
            }
            else{
                localStorage.removeItem("qlike" + q.id);
                var res= await axios.post("/api/qUnLike",{id:q.id});
                q.likes=res.data;
            }

        },
        saveAnswer:async function(q){
            var res= await axios.post("/api/qAnswer",{id:q.id, answer:q.answer});
        },
        getQTime:function(date){
            return moment(date).format('HH:mm');
        },
        updateQ:async function(){
            try {
                var res = await axios.get("/api/q/",)
                res.data.forEach(q => {
                    if (this.quests.filter(e => e.id == q.id).length == 0)
                        this.quests.push(q);
                })
            }
            catch (e) {console.warn(e)}
            setTimeout(()=>{this.updateQ()},5000)
        },
        newQ:async function(){
            if(this.newQtext.length<1)
                return;
            var text=this.newQtext;
            this.newQtext="";
            var res=await axios.post("/api/q", {text, id:session.id})
            console.log(res.data)
            this.quests.push(res.data);
            setTimeout(()=>{
                var objDiv = document.getElementById("qDiv");
                objDiv.scrollTop = objDiv.scrollHeight;
            },0)

        },

        upModeratorFromSession:async function(session, speaker){
            var ret=await axios.post("/api/upModeratorFromSession", {speakerid:speaker.id, sessionid:session.id});
            console.log(ret.data)
            session.moderators=ret.data;
        },
        deleteModeratorFromSession:async function (session, speaker){
            await axios.post("/api/deleteModeratorFromSession", {speakerid:speaker.id, sessionid:session.id});
            session.moderators=session.moderators.filter((spk)=>{return spk.id!=speaker.id});
        },
        upSpeakerFromSession:async function(session, speaker){
            var ret=await axios.post("/api/upSpeakerFromSession", {speakerid:speaker.id, sessionid:session.id});
            console.log(ret.data)
            session.speakers=ret.data;
        },
        deleteSpeakerFromSession:async function (session, speaker){
            await axios.post("/api/deleteSpeakerFromSession", {speakerid:speaker.id, sessionid:session.id});
            session.speakers=session.speakers.filter((spk)=>{return spk.id!=speaker.id});
        },
        changeListSpeakerAvatar:async function( speaker){
            uploadFile((percent)=>{console.log("percent", percent)},
                async (val)=>{
                    if(val)
                    {
                        speaker.img=val;
                        await this.changeListSpeaker(speaker)
                    }

                });
        },
        changeListSpeaker:async function(speaker){
            await axios.post("/api/changeListSpeaker", speaker);
        },
        deleteSpeakerFromList:async function(speaker){
            var res=await axios.post("/api/deleteNewspeaker", speaker);
            this.speakers=res.data;
        },
        addNewSpeaker:async function(){
            var res=await axios.post("/api/speakers", this.newSpeaker);
            this.speakers.push(res.data[0]);
            this.newSpeaker={img:'/img/user.png'};
        },
        addSpeakerAvatar:function(){
            uploadFile((percent)=>{console.log("percent", percent)},
                async (val)=>{
                    if(val)
                    {
                        this.newSpeaker.img=val;
                    }

                });
        },
        reloadSpeakers:async function(){
            this.$bvModal.show('spaekersDialog');
            this.speakers=(await axios.get('/api/speakers')).data;
        },
        addSpeaker:async function(session){
            await this.reloadSpeakers(session)
            this.selectSpeakerFromList=async (speaker)=>{
                this.$bvModal.hide('spaekersDialog');
                console.log(speaker);
                var r=await axios.post("/api/speakerToSession",{sessionid:session.id, speakerid:speaker.id });
                session.speakers=r.data;
            }
        },
        addModerator:async function(session){
            await this.reloadSpeakers(session)
            this.selectSpeakerFromList=async (speaker)=>{
                this.$bvModal.hide('spaekersDialog');

                var r=await axios.post("/api/moderatorToSession",{sessionid:session.id, speakerid:speaker.id });
                session.moderators=r.data;
            }
        }

        ,
        changeImage:async function(session){
             uploadFile((percent)=>{
                     console.log("percent", percent)
            },
                 async (val)=>{
                    if(val)
                    {
                        session.img=val;
                        await this.updateSession(session);
                    }

                 });
        },
        getTime: function(session){

            if(!session.start)
                return ""
            var m=moment(session.start);
            return m.format("HH:mm")
        },
        getTimeEnd: function(session){

            if(!session.end)
                return ""
            var m=moment(session.end);
            return m.format("HH:mm")
        },
        getDate:function(session){

            if(!session.start)
                return "23"
            var m=moment(session.start);
            return m.format("DD");
        },
        changeDate:async function(session, e){
            console.log(e.target.value);
            var re=new RegExp(/^(\d\d)$/);
            var match = e.target.value.match(re);
            if(match) {
                if(!session.start)
                    session.start= new Date("2020-09-23T00:00:00.000")
                var c=moment(session.start).set("date",match[1]);
                session.start=c.toDate();
                await this.updateSession(session);
            }


        },
        changeTime:async function(session, e){

            var re=new RegExp(/^(\d\d):(\d\d)$/);
            var match = e.target.value.match(re);
            console.log(e.target.value, match)
            if(match)
            {
                if(!session.start)
                    session.start= new Date("2020-09-23T00:00:00.000")
                var c=moment(session.start).set("hour",match[1]).set("minute",match[2]);
                session.start=c.toDate();

               // session.start= new Date("2020-09-26T"+match[1]+":"+match[2]+":00"+".000")
               // console.log(session.start)
                await this.updateSession(session);
            }

           //
        },
        changeTimeEnd:async function(session, e){

            var re=new RegExp(/^(\d\d):(\d\d)$/);
            var match = e.target.value.match(re);
            console.log(e.target.value, match)
            if(match)
            {
                if(!session.end)
                    session.end= new Date("2020-09-23T00:00:00.000")
                var c=moment(session.end).set("hour",match[1]).set("minute",match[2]);
                session.end=c.toDate();

                // session.start= new Date("2020-09-26T"+match[1]+":"+match[2]+":00"+".000")
                // console.log(session.start)
                await this.updateSession(session);
            }

            //
        },
        updateSession: async function(session){
            console.log("updateSession", session)
            var res=await axios.post('/api/session',session );
            return  res.data;
        },
        sessAdd: async function () {
            var res=await axios.put('/api/session');
            console.log(res.data);
            this.sessions.unshift(res.data[0]);
        },
        changeStatus:async function(session, status) {
            session.status=status;
            await this.updateSession(session);
        }
    },
    mounted:async function () {
        this.sessions=(await axios.get('/api/session')).data;
        this.updateQ();
        this.lid=(await axios.get('/api/lid')).data;
        this.opacity=1;

    }
});
function uploadFile(percent, ret) {
    var input =document.createElement("input");
    input.style.display="none";
    input.type="file";
    input.accept="image/x-png,image/gif,image/jpeg"
    input.click();
    input.addEventListener("change",(e)=>{
        if(!input.files || input.files.length==0) {
           // input.parentNode.removeChild(input);
            if(ret)
                ret(null);
        }
        var file=input.files[0];
        var data = new FormData();
        data.append('file', file);
        console.log(file.name);
        data.append("filename", file.name)

        var xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function(event) {
            if(percent)
                percent(parseFloat(event.loaded/event.total));

        }
        xhr.onload = xhr.onerror = function() {
            if (this.status == 200) {
                if(ret)
                    ret(xhr.response);

            } else {
                if(ret)
                    ret(null);
            }
        };
        xhr.open("POST", "/api/file",true);
        xhr.send(data);



       // input.parentNode.removeChild(input);
    })
}