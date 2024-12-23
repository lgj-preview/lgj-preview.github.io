import{l as v,m as y,n as h,q as k,s as T,v as N,x as B,y as A,z as E,A as L,b as i,_ as $,o as g,k as U,w as l,e as r,c as x,B as G,g as m,C as I,t as R}from"./index.a8ac4a70.js";const c=["start","end","center"],C=["space-between","space-around","space-evenly"];function u(e,s){return B.reduce((t,a)=>{const n=e+A(a);return t[n]=s(),t},{})}const O=[...c,"baseline","stretch"],V=e=>O.includes(e),w=u("align",()=>({type:String,default:null,validator:V})),M=[...c,...C],p=e=>M.includes(e),P=u("justify",()=>({type:String,default:null,validator:p})),z=[...c,...C,"stretch"],S=e=>z.includes(e),j=u("alignContent",()=>({type:String,default:null,validator:S})),_={align:Object.keys(w),justify:Object.keys(P),alignContent:Object.keys(j)},F={align:"align",justify:"justify",alignContent:"align-content"};function q(e,s,t){let a=F[e];if(t!=null){if(s){const n=s.replace(e,"");a+=`-${n}`}return a+=`-${t}`,a.toLowerCase()}}const D=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V},...w,justify:{type:String,default:null,validator:p},...P,alignContent:{type:String,default:null,validator:S},...j,...y(),...h()},"VRow"),ee=k()({name:"VRow",props:D(),setup(e,s){let{slots:t}=s;const a=T(()=>{const n=[];let o;for(o in _)_[o].forEach(d=>{const b=e[d],f=q(o,d,b);f&&n.push(f)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return N(e.tag,{class:["v-row",a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),J={props:{title:String,imageUrl:String}};const K=v({withBackground:Boolean,...y(),...E(),...h()},"VThemeProvider"),Y=k()({name:"VThemeProvider",props:K(),setup(e,s){let{slots:t}=s;const{themeClasses:a}=L(e);return()=>{var n;return e.withBackground?i(e.tag,{class:["v-theme-provider",a.value,e.class],style:e.style},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}}):(n=t.default)==null?void 0:n.call(t)}}}),H={class:"cover under-header"},Q=["src"],W={class:"content w-100"};function X(e,s,t,a,n,o){return g(),U(Y,{theme:"dark","with-background":""},{default:l(()=>[r("div",H,[t.imageUrl?(g(),x("img",{key:0,src:t.imageUrl,class:"back-bg"},null,8,Q)):G("",!0),r("div",W,[i(m,{offset:"0","offset-md":"1",cols:"12",md:"10",class:"on-cover"},{default:l(()=>[I(e.$slots,"default",{},void 0,!0)]),_:3}),i(m,{offset:"0","offset-md":"1",cols:"12",md:"10",class:"title"},{default:l(()=>[r("h1",null,R(t.title),1)]),_:1})])])]),_:3})}const te=$(J,[["render",X],["__scopeId","data-v-6617e483"]]);export{te as C,ee as V};
