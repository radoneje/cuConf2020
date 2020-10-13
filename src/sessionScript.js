import "core-js/stable";
import "regenerator-runtime/runtime";
import './style.scss'
import axios from 'axios'
import moment from 'moment'
import  Vue from 'vue'

document.addEventListener('DOMContentLoaded', function() {
    var app = new Vue({
        el: '#app',
        data: {
            session:[],
            newQtext:'',
            quests:[],
            isEnd:false,
            opacity:0,
            token:null
        },
        methods: {
            goToHome:function(){
                document.location.href="/"+lang.langId;
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
            getQTime:function(date){
                return moment(date).format('HH:mm');
            },
            updateQ:async function(){
                try {
                    var res = await axios.get("/api/q/" + session.id,)
                    res.data.forEach(q => {
                        if (this.quests.filter(e => e.id == q.id).length == 0)
                            this.quests.push(q);
                        this.quests.forEach(qq=>{
                            if(qq.id==q.id) {
                                qq.isDeleted = q.isDeleted;
                                qq.answer = q.answer;
                            }
                        })
                        setTimeout(()=>{
                            var objDiv = document.getElementById("qDiv");
                            objDiv.scrollTop = objDiv.scrollHeight;
                        },0)
                    })
                    this.quests=this.quests.filter(q=>{
                        return !q.isDeleted
                    });
                }
                catch (e) {console.warn(e)}
                setTimeout(()=>{this.updateQ()},5000)
            },
            newQ:async function(){
                if(this.newQtext.length<1)
                    return;
                var _this=this;
                grecaptcha.ready(function() {
                    grecaptcha.execute('6Lek0tYZAAAAACqhYvQVHlL6mSZBXMhfaQ7X9V_6', {action: 'submit'}).then(async function(token) {
                        // Add your logic to submit to your backend server here.
                        var text=_this.newQtext;
                        _this.newQtext="";
                        var res=await axios.post("/api/q", {text, id:session.id, token})
                        console.log(res.data)
                        _this.quests.push(res.data);
                        setTimeout(()=>{
                            var objDiv = document.getElementById("qDiv");
                            objDiv.scrollTop = objDiv.scrollHeight;
                        },0)
                    });
                });



            },
            getTitle:function () {
                return this.session['title' + lang.langId.substr(0, 2)];
            },
            getYT:function () {
                return this.session['yt' + lang.langId.substr(0, 2)];
            },
            updateSession:async function(){
                try {
                    var r = await axios.get("/api/session/" + session.id)
                    if (r.data[0].status == 3 && this.session.status == 2)
                        this.isEnd = true;
                }
                catch (e) {
                    console.warn(e)
                }
                setTimeout(()=>{this.updateSession()},5000)
            }
        },
        mounted: async function () {
            var r= await axios.get("/api/session/"+session.id)

            r.data.forEach(s=>{
                s.s=moment(s.start).format("HH:mm")
                s.e=moment(s.end).format("HH:mm")
                s.title=s['title'+lang.langId.substr(0,2)];
                s.speakers.forEach(spk=>{
                    spk.name=spk['name'+lang.langId.substr(0,2)];
                    spk.position=spk['position'+lang.langId.substr(0,2)];
                })
                s.moderators.forEach(spk=>{
                    spk.name=spk['name'+lang.langId.substr(0,2)];
                    spk.position=spk['position'+lang.langId.substr(0,2)];
                })
            })


            this.session=r.data[0];
            console.log("session", this.session)
            this.updateQ();
            this.updateSession();
            this.opacity=1;
        }
    });
});
function onRecaptchaLoadCallback() {
    var clientId = grecaptcha.render('inline-badge', {
        'sitekey': '6Lek0tYZAAAAACqhYvQVHlL6mSZBXMhfaQ7X9V_6',
        'badge': 'inline',
        'size': 'invisible'
    });
}
