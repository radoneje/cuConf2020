
import './style.scss'
import './headerBg.scss'
import axios from 'axios'
import moment from 'moment'

import Vue from 'vue'

setTimeout(()=>{

},200)

document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
                                                          // Если должен быть найден один элемент
   var app = new Vue({
       el: '#app',
       data: {
           loaded:false,
           document:document,

           descr:[],
           sessions:[],
           liveSessions:[],
           endedSessions:[],
       },
       methods:{
           clickActiveItem:function(item)
           {
               if(item.status==2)
                   document.location.href='/session/'+item.id+'/' +lang.langId;
           },
           updateSessions:async function() {
               try{
                   var res=await axios.get("/api/session/");
                   this.sessions=res.data;
                   this.sessions.forEach(s=>{
                       s.s=moment(s.start).format("HH:mm")
                            s.e=moment(s.end).format("HH:mm")
                       console.log('title'+lang.langId.substr(0,2))
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
                   this.liveSessions=this.sessions.filter(s=>s.status==2);
                   var plannedSession=this.sessions.filter(s=>s.status==1);
                   this.liveSessions=this.liveSessions.concat(plannedSession)
                   this.endedSessions=this.sessions.filter(s=>s.status==3);
               }
               catch (e) {
                   console.warn(e)
               }
               setTimeout(()=>{
                    this.updateSessions();
               },5000)

           }
       },
       watch: {
           liveSessions: function () {
               return this.sessions
           },
       },
       mounted:async function () {
           var res=await axios.get("/api/descr/"+lang.langId);
           for(var i=0; i<2; i++) {
                 this.descr[i] = JSON.parse((res.data.filter(r => r.field == "block"+i))[0].val)
                 this.descr[i] = JSON.parse((res.data.filter(r => r.field == "block"+i))[0].val)
           }
           this.updateSessions();
           console.log(lang);
           this.loaded=true;
               setTimeout(()=>{

               },200)

       }


   })
});