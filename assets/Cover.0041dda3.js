import{d as v,b as h,C as w,a5 as N,a6 as P,c as T,p as $,h as r,a4 as B,N as g,a1 as E,P as o,T as i,O as L,a7 as U,S as _,a8 as x,U as A}from"./index.651b3270.js";const G=["sm","md","lg","xl","xxl"],c=["start","end","center"],y=["space-between","space-around","space-evenly"];function u(e,s){return G.reduce((t,n)=>(t[e+P(n)]=s(),t),{})}const I=[...c,"baseline","stretch"],C=e=>I.includes(e),k=u("align",()=>({type:String,default:null,validator:C})),O=[...c,...y],p=e=>O.includes(e),S=u("justify",()=>({type:String,default:null,validator:p})),M=[...c,...y,"stretch"],V=e=>M.includes(e),j=u("alignContent",()=>({type:String,default:null,validator:V})),m={align:Object.keys(k),justify:Object.keys(S),alignContent:Object.keys(j)},R={align:"align",justify:"justify",alignContent:"align-content"};function z(e,s,t){let n=R[e];if(t!=null){if(s){const a=s.replace(e,"");n+=`-${a}`}return n+=`-${t}`,n.toLowerCase()}}const Q=v({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:C},...k,justify:{type:String,default:null,validator:p},...S,alignContent:{type:String,default:null,validator:V},...j,...h()},setup(e,s){let{slots:t}=s;const n=w(()=>{const a=[];let l;for(l in m)m[l].forEach(d=>{const b=e[d],f=z(l,d,b);f&&a.push(f)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return N(e.tag,{class:["v-row",n.value]},(a=t.default)==null?void 0:a.call(t))}}}),D={props:{title:String,imageUrl:String}};const F=v({name:"VThemeProvider",props:{withBackground:Boolean,...T(),...h()},setup(e,s){let{slots:t}=s;const{themeClasses:n}=$(e);return()=>{var a,l;return e.withBackground?r(e.tag,{class:["v-theme-provider",n.value]},{default:()=>[(l=t.default)==null?void 0:l.call(t)]}):(a=t.default)==null?void 0:a.call(t)}}}),J={class:"cover under-header"},Y=["src"],q={class:"content"};function H(e,s,t,n,a,l){return g(),E(F,{theme:"dark","with-background":""},{default:o(()=>[i("div",J,[t.imageUrl?(g(),L("img",{key:0,src:t.imageUrl,class:"back-bg"},null,8,Y)):U("",!0),i("div",q,[r(_,{offset:"0","offset-md":"1",cols:"12",md:"10",class:"on-cover"},{default:o(()=>[x(e.$slots,"default",{},void 0,!0)]),_:3}),r(_,{offset:"0","offset-md":"1",cols:"12",md:"10",class:"title"},{default:o(()=>[i("h1",null,A(t.title),1)]),_:1})])])]),_:3})}const W=B(D,[["render",H],["__scopeId","data-v-f77e86ff"]]);export{W as C,Q as V};