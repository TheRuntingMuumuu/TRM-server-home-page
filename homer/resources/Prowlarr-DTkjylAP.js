import{s as c}from"./service-P8kc4j81.js";import{_ as l,G as f,r as d,o as t,c as h,w as m,a as p,b as s,t as n,e as o}from"./index-D5OCvD-v.js";const _={name:"Prowlarr",mixins:[c],props:{item:Object},components:{Generic:f},data:()=>({warnings:null,errors:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){this.fetch(`/api/v1/health?apikey=${this.item.apikey}`).then(r=>{this.warnings=0,this.errors=0;for(var e=0;e<r.length;e++)r[e].type=="warning"?this.warnings++:r[e].type=="error"&&this.errors++}).catch(r=>{console.error(r),this.serverError=!0})}}},g={class:"notifs"},u={key:0,class:"notif warnings",title:"Warning"},w={key:1,class:"notif errors",title:"Error"},k={key:2,class:"notif errors",title:"Connection error to Prowlarr API, check url and apikey in config.yml"};function y(r,e,i,v,C,E){const a=d("Generic");return t(),h(a,{item:i.item},{indicator:m(()=>[p("div",g,[r.warnings>0?(t(),s("strong",u,n(r.warnings),1)):o("",!0),r.errors>0?(t(),s("strong",w,n(r.errors),1)):o("",!0),r.serverError?(t(),s("strong",k," ? ")):o("",!0)])]),_:1},8,["item"])}const P=l(_,[["render",y],["__scopeId","data-v-d43ad11a"]]);export{P as default};