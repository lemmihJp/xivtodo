(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checklist"],{"503b":function(e,t,s){"use strict";s.r(t);var i=s("6b75");function n(e){if(Array.isArray(e))return Object(i["a"])(e)}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var o=s("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e){return n(e)||c(e)||Object(o["a"])(e)||r()}s("99af");var d=s("7a23"),l={class:"container"},u={class:"d-flex align-items-end"},h={class:"me-auto"},b={key:0,class:"fs-3 fw-lighter"},f=Object(d["i"])("hr",null,null,-1),m={class:"row"},O=Object(d["i"])("h2",null,"Things to do",-1),j={class:"col-md"},y=Object(d["i"])("h3",null,"Weeklies",-1),k={key:0,class:"fw-lighter text-muted"},p={key:1,class:"input-group mt-3 mb-2"},g={class:"list-group list-group-flush"},w=Object(d["i"])("br",null,null,-1),C={class:"col-md"},v=Object(d["i"])("h3",null,"Dailies",-1),D={key:0,class:"fw-lighter text-muted"},$={key:1,class:"input-group mt-3 mb-2"},I={class:"list-group list-group-flush"},x=Object(d["i"])("br",null,null,-1),H={key:2,class:"text-muted fw-light float-end"},N=Object(d["h"])(" 1 hidden task"),A=Object(d["i"])("br",null,null,-1),T=Object(d["i"])("br",null,null,-1),R={key:3,class:"text-muted fw-light float-end"},W=Object(d["i"])("br",null,null,-1),E=Object(d["i"])("br",null,null,-1);function S(e,t,s,i,n,c){var o=Object(d["y"])("Alert"),r=Object(d["y"])("ChecklistItem");return Object(d["t"])(),Object(d["e"])("div",l,[Object(d["i"])("h1",u,[Object(d["i"])("span",h,[Object(d["h"])(Object(d["A"])(e.$t("page.checklist"))+" ",1),this.$store.getters.hasCharacter?(Object(d["t"])(),Object(d["e"])("span",b,Object(d["A"])(e.$t("message.forCharacter",{characterName:this.$store.getters.character.Name})),1)):Object(d["f"])("",!0)]),this.$store.getters.hasCharacter?(Object(d["t"])(),Object(d["e"])("button",{key:0,type:"button",class:["btn float-end",{"btn-outline-success":!n.showHidden,"btn-success":n.showHidden}],onClick:t[1]||(t[1]=function(e){return n.showHidden=!n.showHidden})}," Customize ",2)):Object(d["f"])("",!0)]),this.$store.getters.hasCharacter?Object(d["f"])("",!0):(Object(d["t"])(),Object(d["e"])(o,{key:0,type:"normal",msg:"No characters found. You can add your characters from the <a href='/settings' class='alert-link'>Settings</a>."})),f,Object(d["i"])("div",m,[O,Object(d["i"])("div",j,[y,n.showHidden?Object(d["f"])("",!0):(Object(d["t"])(),Object(d["e"])("span",k,Object(d["A"])(n.weeklyReset)+" until reset",1)),n.showHidden?(Object(d["t"])(),Object(d["e"])("div",p,[Object(d["H"])(Object(d["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.customWeekly=e}),type:"text",class:"form-control",placeholder:"Custom weekly"},null,512),[[d["E"],n.customWeekly]]),Object(d["i"])("button",{class:["btn btn-outline-success",{disabled:!n.customWeekly}],type:"button",id:"button-addon2",onClick:t[3]||(t[3]=function(){return c.addCustomWeekly&&c.addCustomWeekly.apply(c,arguments)})}," Add custom weekly ",2)])):Object(d["f"])("",!0),Object(d["i"])("ul",g,[(Object(d["t"])(!0),Object(d["e"])(d["a"],null,Object(d["x"])([].concat(a(n.db.weeklyChecklist),a(this.$store.getters.todosCustomWeeklies)),(function(e){return Object(d["t"])(),Object(d["e"])(r,{key:e.ID,item:e,showHidden:n.showHidden,rerender:n.rerender},null,8,["item","showHidden","rerender"])})),128))]),w]),Object(d["i"])("div",C,[v,n.showHidden?Object(d["f"])("",!0):(Object(d["t"])(),Object(d["e"])("span",D,Object(d["A"])(n.dailyReset)+" until reset",1)),n.showHidden?(Object(d["t"])(),Object(d["e"])("div",$,[Object(d["H"])(Object(d["i"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.customDaily=e}),type:"text",class:"form-control",placeholder:"Custom daily"},null,512),[[d["E"],n.customDaily]]),Object(d["i"])("button",{class:["btn btn-outline-success",{disabled:!n.customDaily}],type:"button",id:"button-addon2",onClick:t[5]||(t[5]=function(){return c.addCustomDaily&&c.addCustomDaily.apply(c,arguments)})}," Add custom daily ",2)])):Object(d["f"])("",!0),Object(d["i"])("ul",I,[(Object(d["t"])(!0),Object(d["e"])(d["a"],null,Object(d["x"])([].concat(a(n.db.dailyChecklist),a(this.$store.getters.todosCustomDailies)),(function(e){return Object(d["t"])(),Object(d["e"])(r,{key:e.ID,item:e,showHidden:n.showHidden,rerender:n.rerender},null,8,["item","showHidden","rerender"])})),128))]),x,1==this.$store.getters.todosHidden.length?(Object(d["t"])(),Object(d["e"])("span",H,[N,A,T])):this.$store.getters.todosHidden.length>1?(Object(d["t"])(),Object(d["e"])("span",R,[Object(d["h"])(Object(d["A"])(this.$store.getters.todosHidden.length)+" hidden tasks",1),W,E])):Object(d["f"])("",!0)])])])}var M=s("b85c"),U=(s("d81d"),s("98ab")),_={key:0,class:"\n      list-group-item list-group-item-action\n      d-flex\n      justify-content-between\n      align-items-center\n      user-select-none\n    "},V=Object(d["h"])("   "),F={key:1,class:"list-group-item d-flex justify-content-between align-items-center"},G={key:0},L=Object(d["i"])("span",{class:"tt-text"},"Remove",-1),Y=Object(d["i"])("span",{class:"tt-text"},"Show",-1),J=Object(d["i"])("span",{class:"tt-text"},"Hide",-1);function P(e,t,s,i,n,c){return Object(d["t"])(),Object(d["e"])(d["a"],null,[n.hidden||s.showHidden?Object(d["f"])("",!0):(Object(d["t"])(),Object(d["e"])("label",_,[Object(d["i"])("span",null,[!s.showHidden&&this.$store.getters.hasCharacter?Object(d["H"])((Object(d["t"])(),Object(d["e"])("input",{key:0,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.checked=e}),class:[{"checkbox-checked":n.checked},"form-check-input"],type:"checkbox",id:s.item.Name},null,10,["id"])),[[d["C"],n.checked]]):Object(d["f"])("",!0),V,Object(d["i"])("span",{class:{"checklist-checked":n.checked}},Object(d["A"])(s.item.Name),3)])])),s.showHidden?(Object(d["t"])(),Object(d["e"])("span",F,[Object(d["i"])("span",{class:[{"text-muted":n.hidden},"user-select-none"]},Object(d["A"])(s.item.Name),3),s.showHidden?(Object(d["t"])(),Object(d["e"])("span",G,[s.item.Custom?(Object(d["t"])(),Object(d["e"])("a",{key:0,class:"bi-trash text-danger cursor-pointer tt",onClick:t[2]||(t[2]=function(){return c.remove&&c.remove.apply(c,arguments)})},[L])):n.hidden?(Object(d["t"])(),Object(d["e"])("a",{key:1,class:"bi-eye-slash text-secondary cursor-pointer tt",onClick:t[3]||(t[3]=function(){return c.hid&&c.hid.apply(c,arguments)})},[Y])):n.hidden?Object(d["f"])("",!0):(Object(d["t"])(),Object(d["e"])("a",{key:2,class:"bi-eye text-success cursor-pointer tt",onClick:t[4]||(t[4]=function(){return c.hid&&c.hid.apply(c,arguments)})},[J]))])):Object(d["f"])("",!0)])):Object(d["f"])("",!0)],64)}s("a9e3");var X={data:function(){return{checked:this.$store.getters.todosChecked.indexOf(this.item.ID)>=0,hidden:this.$store.getters.todosHidden.indexOf(this.item.ID)>=0}},props:{item:Object,showHidden:Boolean,rerender:Number},watch:{checked:function(){this.$store.commit("todoChecked",{id:this.item.ID,checked:this.checked})},rerender:function(){this.checked=this.$store.getters.todosChecked.indexOf(this.item.ID)>=0,this.hidden=this.$store.getters.todosHidden.indexOf(this.item.ID)>=0}},methods:{hid:function(){this.hidden=!this.hidden,this.$store.commit("todoHidden",{id:this.item.ID,hidden:this.hidden})},remove:function(){this.$store.commit("todosRemoveCustom",this.item.ID)}}},z=(s("af92"),s("d959")),B=s.n(z);const q=B()(X,[["render",P]]);var K=q,Q=s("b35b"),Z={name:"Checklist",data:function(){return{db:Q,rerender:0,showHidden:!1,weeklyReset:this.formatTimeDiff(this.weeklyResetTime(),!0),dailyReset:this.formatTimeDiff(this.dailyResetTime(),!1),customWeekly:"",customDaily:""}},components:{Alert:U["a"],ChecklistItem:K},mounted:function(){var e=this;this.$nextTick((function(){if(this.$store.getters.hasCharacter){var e,t=this.db.dailyChecklist.map((function(e){return e.ID})),s=this.db.weeklyChecklist.map((function(e){return e.ID})),i=this.$store.getters.todosCustomDailies.map((function(e){return e.ID})),n=this.$store.getters.todosCustomWeeklies.map((function(e){return e.ID})),c=[].concat(a(t),a(s),a(i),a(n)),o=this.$store.getters.todosChecked,r=Object(M["a"])(o);try{for(r.s();!(e=r.n()).done;){var d=e.value;-1==c.indexOf(d)&&this.$store.commit("todoChecked",{id:d,checked:!1})}}catch(f){r.e(f)}finally{r.f()}var l,u=this.$store.getters.todosHidden,h=Object(M["a"])(u);try{for(h.s();!(l=h.n()).done;){var b=l.value;-1==c.indexOf(b)&&this.$store.commit("todoHidden",{id:b,checked:!1})}}catch(f){h.e(f)}finally{h.f()}this.resetDailliesWeeklies()}})),setInterval((function(){e.resetDailliesWeeklies()}),1e3)},methods:{weeklyResetTime:function(){var e=new Date,t=new Date;t.setUTCHours(8,0,0),t.setDate(e.getDate()+(9-e.getDay()));var s=t-e,i=6048e5;return s%i+e.getTime()},dailyResetTime:function(){var e=new Date,t=new Date;t.setUTCHours(15,0,0),t.setUTCDate(t.getDate()+1);var s=t-e,i=864e5;return s%i+e.getTime()},formatTimeDiff:function(e,t){var s=new Date,i=e-s,n=864e5,c=36e5,o=6e4,r=1e3,a=Math.floor(i/n),d=Math.floor(i/c)-24*Math.floor(i/n),l=Math.floor(i/o)-60*Math.floor(i/c),u=Math.floor(i/r)-60*Math.floor(i/o);return a>0&&t?"".concat(a,"d ").concat(d,"h"):d>0?"".concat(d,"h ").concat(l,"m"):"".concat(l,"m ").concat(u,"s")},resetDailliesWeeklies:function(){if(this.weeklyReset=this.formatTimeDiff(this.weeklyResetTime(),!0),this.dailyReset=this.formatTimeDiff(this.dailyResetTime(),!1),this.rerender++,this.$store.getters.hasCharacter){if(this.$store.getters.todosNextWeeklyReset<Date.now()){this.$store.commit("todosNextWeeklyReset",this.weeklyResetTime());var e,t=this.$store.getters.todosChecked,s=Object(M["a"])(t);try{for(s.s();!(e=s.n()).done;){var i=e.value;i>=1e3&&i<2e3&&this.$store.commit("todoChecked",{id:i,checked:!1})}}catch(a){s.e(a)}finally{s.f()}}if(this.$store.getters.todosNextDailyReset<Date.now()){this.$store.commit("todosNextDailyReset",this.dailyResetTime());var n,c=this.$store.getters.todosChecked,o=Object(M["a"])(c);try{for(o.s();!(n=o.n()).done;){var r=n.value;r>=2e3&&r<3e3&&this.$store.commit("todoChecked",{id:r,checked:!1})}}catch(a){o.e(a)}finally{o.f()}}}},addCustomWeekly:function(){this.$store.commit("todosAddCustomWeekly",this.customWeekly),this.customWeekly=""},addCustomDaily:function(){this.$store.commit("todosAddCustomDaily",this.customDaily),this.customDaily=""}}};const ee=B()(Z,[["render",S]]);t["default"]=ee},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var i=s("1d80"),n=s("5899"),c="["+n+"]",o=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),a=function(e){return function(t){var s=String(i(t));return 1&e&&(s=s.replace(o,"")),2&e&&(s=s.replace(r,"")),s}};e.exports={start:a(1),end:a(2),trim:a(3)}},a9e3:function(e,t,s){"use strict";var i=s("83ab"),n=s("da84"),c=s("94ca"),o=s("6eeb"),r=s("5135"),a=s("c6b6"),d=s("7156"),l=s("c04e"),u=s("d039"),h=s("7c73"),b=s("241c").f,f=s("06cf").f,m=s("9bf2").f,O=s("58a8").trim,j="Number",y=n[j],k=y.prototype,p=a(h(k))==j,g=function(e){var t,s,i,n,c,o,r,a,d=l(e,!1);if("string"==typeof d&&d.length>2)if(d=O(d),t=d.charCodeAt(0),43===t||45===t){if(s=d.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+d}for(c=d.slice(2),o=c.length,r=0;r<o;r++)if(a=c.charCodeAt(r),a<48||a>n)return NaN;return parseInt(c,i)}return+d};if(c(j,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,C=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof C&&(p?u((function(){k.valueOf.call(s)})):a(s)!=j)?d(new y(g(t)),s,C):g(t)},v=i?b(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;v.length>D;D++)r(y,w=v[D])&&!r(C,w)&&m(C,w,f(y,w));C.prototype=k,k.constructor=C,o(n,j,C)}},af92:function(e,t,s){"use strict";s("b230")},b230:function(e,t,s){},d81d:function(e,t,s){"use strict";var i=s("23e7"),n=s("b727").map,c=s("1dde"),o=c("map");i({target:"Array",proto:!0,forced:!o},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=checklist.ac3a6f8f.js.map