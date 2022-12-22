import{m as _,n as m,q as b,s as w,v as $,x as N,y as P,a as r,_ as T,o as x,j as A,w as o,g as f,z as B,V as g,A as L,t as E}from"./index.794f9144.js";const U=["sm","md","lg","xl","xxl"],i=["start","end","center"],y=["space-between","space-around","space-evenly"];function c(e,s){return U.reduce((t,a)=>(t[e+$(a)]=s(),t),{})}const G=[...i,"baseline","stretch"],h=e=>G.includes(e),C=c("align",()=>({type:String,default:null,validator:h})),I=[...i,...y],k=e=>I.includes(e),p=c("justify",()=>({type:String,default:null,validator:k})),O=[...i,...y,"stretch"],S=e=>O.includes(e),V=c("alignContent",()=>({type:String,default:null,validator:S})),v={align:Object.keys(C),justify:Object.keys(p),alignContent:Object.keys(V)},z={align:"align",justify:"justify",alignContent:"align-content"};function M(e,s,t){let a=z[e];if(t!=null){if(s){const n=s.replace(e,"");a+=`-${n}`}return a+=`-${t}`,a.toLowerCase()}}const J=_({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...C,justify:{type:String,default:null,validator:k},...p,alignContent:{type:String,default:null,validator:S},...V,...m()},setup(e,s){let{slots:t}=s;const a=b(()=>{const n=[];let l;for(l in v)v[l].forEach(u=>{const j=e[u],d=M(l,u,j);d&&n.push(d)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return w(e.tag,{class:["v-row",a.value]},(n=t.default)==null?void 0:n.call(t))}}}),R={props:{title:String,imageUrl:String}};const q=_({name:"VThemeProvider",props:{withBackground:Boolean,...N(),...m()},setup(e,s){let{slots:t}=s;const{themeClasses:a}=P(e);return()=>{var n,l;return e.withBackground?r(e.tag,{class:["v-theme-provider",a.value]},{default:()=>[(l=t.default)==null?void 0:l.call(t)]}):(n=t.default)==null?void 0:n.call(t)}}});function D(e,s,t,a,n,l){return x(),A(q,{theme:"dark","with-background":""},{default:o(()=>[f("div",{class:"cover under-header",style:B({"background-image":t.imageUrl?"url("+t.imageUrl+")":"var(--background-gradient)"})},[r(g,{offset:"1",cols:"10",class:"on-cover"},{default:o(()=>[L(e.$slots,"default",{},void 0,!0)]),_:3}),r(g,{offset:"1",cols:"10",class:"title"},{default:o(()=>[f("h1",null,E(t.title),1)]),_:1})],4)]),_:3})}const Y=T(R,[["render",D],["__scopeId","data-v-6c3b8f0e"]]);export{Y as C,J as V};
