import{a as l,b as r,e as n,F as c,r as u,o as s,t as i}from"./entry.e5418cff.js";function p(t){return t.replace(/([A-Z])/g," $1").toLowerCase()}const d={data(){return{routes:this.$router.getRoutes().filter(e=>e.path.indexOf("/guides/")===0).map(e=>(e.label=p(e.name.split("-")[1]||"Index"),e))}}},_={class:"container",style:{"margin-top":"120px"}};function f(t,e,m,x,o,g){return s(),r("section",null,[n("div",_,[n("ul",null,[(s(!0),r(c,null,u(o.routes,a=>(s(),r("li",null,i(a.label),1))),256))])])])}const h=l(d,[["render",f]]);export{h as default};
