(function(){"use strict";var n={3784:function(n,t,e){var s=e(9242),o=e(3396),a=e(7139);const i={class:"container"},r={class:"columns"},u={class:"column col-12 tasksInfo"},c={class:"column-inner-Left"},l={class:"column-inner-Right"},d={class:"column col-12 itens"},k={class:"buttonsManageTask"},m=(0,o._)("i",{class:"icon icon-delete"},null,-1),f=[m],p=(0,o._)("i",{class:"icon icon-check"},null,-1),h=[p],v=(0,o._)("i",{class:"icon icon-plus"},null,-1),T=[v];function b(n,t,e,m,p,v){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",r,[(0,o._)("div",u,[(0,o._)("div",c,[(0,o._)("h1",null,(0,a.zw)(p.numbersTaks)+" Total tasks ",1)]),(0,o._)("div",l,[(0,o._)("h4",null,(0,a.zw)(p.numberCompletdeTask)+" Completed ",1)])]),(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.tasks,(n=>((0,o.wg)(),(0,o.iD)("div",{class:"item",key:n.text},[(0,o._)("h3",null,(0,a.zw)(n.text),1),(0,o._)("div",k,[(0,o._)("button",{class:"main-button",onClick:t[0]||(t[0]=(...n)=>v.removeTask&&v.removeTask(...n))},f),(0,o._)("button",{class:"main-button",onClick:t[1]||(t[1]=(...n)=>v.completedTask&&v.completedTask(...n))},h)])])))),128))]),(0,o._)("div",{class:"colun col-12 addTodo",onKeydown:t[4]||(t[4]=(0,s.D2)(((...n)=>v.addTask&&v.addTask(...n)),["enter"]))},[(0,o.wy)((0,o._)("input",{class:"main-input",type:"text","onUpdate:modelValue":t[2]||(t[2]=n=>p.taskText=n)},null,512),[[s.nr,p.taskText]]),(0,o._)("button",{class:"main-button",onClick:t[3]||(t[3]=(...n)=>v.addTask&&v.addTask(...n))},T)],32)])])}var _={name:"App",data(){return{taskText:"",tasks:[{text:"Add you task"}],numbersTaks:0,numberCompletdeTask:0}},components:{},methods:{addTask:function(){""!=this.taskText?(this.tasks.push({text:this.taskText,done:!1}),this.numbersTaks=this.numbersTaks+1,this.taskText=""):alert("Preencha o campo")},removeTask:function(){this.tasks.pop(),this.numbersTaks=this.numbersTaks-1,this.numbersTaks<0&&(this.numbersTaks=this.numbersTaks=0)},completedTask:function(){this.tasks.pop(),this.numberCompletdeTask=this.numberCompletdeTask+1,this.numberCompletdeTask<0&&(this.numberCompletdeTask=this.numberCompletdeTask=0)}}},w=e(89);const x=(0,w.Z)(_,[["render",b]]);var g=x;(0,s.ri)(g).mount("#app")}},t={};function e(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return n[s](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,s,o,a){if(!s){var i=1/0;for(l=0;l<n.length;l++){s=n[l][0],o=n[l][1],a=n[l][2];for(var r=!0,u=0;u<s.length;u++)(!1&a||i>=a)&&Object.keys(e.O).every((function(n){return e.O[n](s[u])}))?s.splice(u--,1):(r=!1,a<i&&(i=a));if(r){n.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[s,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var s in t)e.o(t,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,s){var o,a,i=s[0],r=s[1],u=s[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(o in r)e.o(r,o)&&(e.m[o]=r[o]);if(u)var l=u(e)}for(t&&t(s);c<i.length;c++)a=i[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(l)},s=self["webpackChunkreactive_vue_app"]=self["webpackChunkreactive_vue_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(3784)}));s=e.O(s)})();
//# sourceMappingURL=app.8cb96c13.js.map