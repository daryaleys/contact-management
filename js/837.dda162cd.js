"use strict";(self["webpackChunkcontact_management"]=self["webpackChunkcontact_management"]||[]).push([[837],{637:function(n,e,t){t.d(e,{A:function(){return m}});var a=t(641),u=t(751),l=t(414),o={class:"input-wrap"},i={class:"input-wrap"},r={class:"input-wrap"},p=(0,a.pM)({__name:"ContactForm",props:{id:{},name:{},phone:{},email:{}},setup:function(n){var e,t,p,c=n,d={name:null!==(e=c.name)&&void 0!==e?e:"",phone:null!==(t=c.phone)&&void 0!==t?t:"",email:null!==(p=c.email)&&void 0!==p?p:""};return function(n,e){return(0,a.uX)(),(0,a.CE)("form",{onSubmit:e[3]||(e[3]=(0,u.D$)((function(e){return n.$emit("updateContacts",d)}),["prevent"])),class:"form"},[(0,a.Lk)("div",o,[e[4]||(e[4]=(0,a.Lk)("label",{for:"name"},"Имя:",-1)),(0,a.bo)((0,a.Lk)("input",{class:"input",type:"text",placeholder:"Иван",id:"name",name:"name",required:"","onUpdate:modelValue":e[0]||(e[0]=function(n){return d.name=n})},null,512),[[u.Jo,d.name]])]),(0,a.Lk)("div",i,[e[5]||(e[5]=(0,a.Lk)("label",{for:"phone"},"Телефон:",-1)),(0,a.bo)((0,a.Lk)("input",{class:"input",type:"tel",placeholder:"+7(999)999-99-99",id:"phone",name:"phone","onUpdate:modelValue":e[1]||(e[1]=function(n){return d.phone=n})},null,512),[[u.Jo,d.phone]])]),(0,a.Lk)("div",r,[e[6]||(e[6]=(0,a.Lk)("label",{for:"email"},"Email:",-1)),(0,a.bo)((0,a.Lk)("input",{class:"input",type:"email",placeholder:"***@yandex.ru",id:"email",name:"email",required:"","onUpdate:modelValue":e[2]||(e[2]=function(n){return d.email=n})},null,512),[[u.Jo,d.email]])]),(0,a.bF)(l.A,{type:"submit"},{default:(0,a.k6)((function(){return e[7]||(e[7]=[(0,a.eW)("Сохранить")])})),_:1})],32)}}}),c=t(262);const d=(0,c.A)(p,[["__scopeId","data-v-0f62336f"]]);var m=d},837:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var a=t(641),u=t(953),l=t(637),o=t(2),i=t(220),r={key:0},p=(0,a.pM)({__name:"EditContactView",setup:function(n){var e=(0,i.rd)(),t=(0,i.lq)(),p=(0,o.k)(),c=p.findIndex((function(n){return n.id===+t.params.id})),d=function(n){n.id=p[c].id,p.splice(c,1,n),(0,o._)(p),e.push("/")};return function(n,e){return(0,a.uX)(),(0,a.CE)(a.FK,null,[e[0]||(e[0]=(0,a.Lk)("h1",null,"Редактирование контакта",-1)),-1===(0,u.R1)(c)?((0,a.uX)(),(0,a.CE)("p",r,"Контакт не найден")):((0,a.uX)(),(0,a.Wv)(l.A,(0,a.v6)({key:1},(0,u.R1)(p)[(0,u.R1)(c)],{onUpdateContacts:d}),null,16))],64)}}});const c=p;var d=c}}]);
//# sourceMappingURL=837.dda162cd.js.map