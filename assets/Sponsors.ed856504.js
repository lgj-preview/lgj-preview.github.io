import{C as x,V as _}from"./Cover.268c4075.js";import{A as C}from"./AvatarItem.3ab51835.js";import{s as c}from"./sponsors.9c1b3e5c.js";import{V}from"./VContainer.4998ced7.js";import{d as k,o as t,c as r,b as n,w as l,e as a,t as u,u as i,F as d,i as f,k as v,g as S,B as h,_ as w}from"./index.a8ac4a70.js";const B={style:{"flex-basis":"100%"},class:"text-center"},b={key:0},N=k({__name:"Sponsors",setup(A){const p=c[0];let y=c.slice(1,c.length).map(o=>o.sponsors).flat(),m=new Set,g=y.filter(o=>{const e=o.name.toLowerCase();return m.has(e)?!1:(m.add(e),!0)});return(o,e)=>(t(),r(d,null,[n(x,{title:"Sponsors"}),n(V,null,{default:l(()=>[n(_,{class:"py-12"},{default:l(()=>[a("h2",B,u(i(p).year),1),(t(!0),r(d,null,f(i(p).sponsors,s=>(t(),v(C,{cols:3,"image-url":i(p).imgFolder+s.logo,title:s.name,crop:!1,icon:"mdi-domain"},null,8,["image-url","title"]))),256))]),_:1}),n(_,{class:"py-12 justify-center"},{default:l(()=>[e[1]||(e[1]=a("h2",{style:{"flex-basis":"100%"},class:"text-center"}," Ediciones Anteriores ",-1)),(t(!0),r(d,null,f(i(g),s=>(t(),v(S,{cols:"6",sm:"4",md:"3",class:"avatar"},{default:l(()=>[e[0]||(e[0]=a("span",{class:"back rounded-pill"},null,-1)),a("div",null,[a("h4",null,u(s.name),1),s.description?(t(),r("p",b,u(s.description),1)):h("",!0)])]),_:2},1024))),256))]),_:1})]),_:1})],64))}});const D=w(N,[["__scopeId","data-v-ad570f33"]]);export{D as default};
