import{u,T as m}from"./theImage.64b118c6.js";import{d as p,r as f,w as v,c as r,F as w,a as g,u as y,b as n,o as s,e as h,f as o,g as a,n as k,h as l,t as F}from"./index.f3040b77.js";const S={class:"wrap"},x={class:"wrap-item"},B={class:"wrap-item__name"},b=p({setup(C){var i;const e=f(!1);return window.sessionStorage.getItem("isFit")&&(e.value=JSON.parse((i=window.sessionStorage.getItem("isFit"))!=null?i:"false")),v(()=>e.value,()=>{window.sessionStorage.setItem("isFit",JSON.stringify(e.value))},{immediate:!0}),(I,L)=>{const _=n("vue-relay-runner"),c=n("RouterLink");return s(),r("div",S,[(s(!0),r(w,null,g(y(u),(t,d)=>(s(),h(c,{key:t.id,to:`/relayDetail/${t.id}`},{default:o(()=>[a("div",x,[a("div",{class:k(["wrap-item__image",e.value?"wrap-item__image__fit":""])},[l(_,{id:d,duration:"800","style-attr":{borderRadius:"8px"}},{default:o(()=>[l(m,{src:t.src},null,8,["src"])]),_:2},1032,["id"])],2),a("div",B,[a("p",null,F(t.name),1)])])]),_:2},1032,["to"]))),128))])}}});export{b as default};
