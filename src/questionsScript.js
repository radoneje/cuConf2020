import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import moment from 'moment'

import './style.scss'
import './sStyle.scss'

document.addEventListener("DOMContentLoaded",()=>{
var app = new Vue({
    el: '#app',
    data: {
        opacity: 0,
        quests: [],
        newQtext: ""
    },
    methods: {
        isMyLike:function(q){
            return localStorage.getItem("qlike"+q.id)
        },
        getQTime:function(date){
            return moment(date).format('HH:mm');
        },
        qToSpk:async function(q){
            var res= await axios.post("/api/qToSpk",{id:q.id, isSpk:q.isSpk});
            q.isSpk=!q.isSpk;
        },
        addAnswer:async function(q){
            q.answer=" ";
            await this.saveAnswer(q);
            document.getElementById("qAnsw"+q.id).focus();
        },
        saveAnswer:async function(q){
            var res= await axios.post("/api/qAnswer",{id:q.id, answer:q.answer});
        },
        updateQ:async function(){
            try {
                var res = await axios.get("/api/q/"+session.id,)
                res.data.forEach(q => {
                    if (this.quests.filter(e => e.id == q.id).length == 0)
                        this.quests.push(q);
                    this.quests.forEach(qq=>{
                        if(qq.id==q.id) {
                            qq.isDeleted = q.isDeleted;
                            qq.isSpk = q.isSpk;
                            var el=document.getElementById("qAnsw"+qq.id);
                            if((document.activeElement != el))
                                qq.answer = q.answer;
                        }
                    })
                })
            }
            catch (e) {console.warn(e)}
            setTimeout(()=>{this.updateQ()},5000)
        },
    },
    mounted: async function () {
        this.updateQ();
        this.opacity = 1;
    }
});
})