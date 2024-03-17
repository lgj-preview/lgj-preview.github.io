import{d as y,f as N,g as C,h as n,ab as V,I as m,j as P,V as I,K as S,R as O,c as Y,i as q,ac as z,k as G,ad as J,ae as M,af as Q,n as U,o as W,b as X,e as Z,p as ee,r as ae,s as te,v as ne,ag as le,w as se,ah as de,ai as ie,aj as ce,x as oe,B as ue,C as _,D as re,E as ve,Y as me,ak as fe,F as ge}from"./index.843bf678.js";const ke=y({name:"VCardActions",setup(e,s){let{slots:t}=s;return N({VBtn:{variant:"text"}}),C(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=V("v-card-subtitle"),Ie=V("v-card-title"),ye=y({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...P()},setup(e,s){let{slots:t}=s;return C(()=>{var a,i,c,o,u;const f=!!(e.prependAvatar||e.prependIcon||t.prepend),g=!!(e.appendAvatar||e.appendIcon||t.append),k=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[f&&n(I,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[(l=(a=t.prepend)==null?void 0:a.call(t))!=null?l:n(S,null,null)])]}}),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var l;return[(l=(i=t.title)==null?void 0:i.call(t))!=null?l:e.title]}}),b&&n(be,{key:"subtitle"},{default:()=>{var l;return[(l=(c=t.subtitle)==null?void 0:c.call(t))!=null?l:e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),g&&n(I,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[(l=(u=t.append)==null?void 0:u.call(t))!=null?l:n(S,null,null)])]}})])}),{}}}),Ce=V("v-card-text"),he=y({name:"VCard",directives:{Ripple:O},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:Boolean,subtitle:String,text:String,title:String,...Y(),...q(),...P(),...z(),...G(),...J(),...M(),...Q(),...U(),...W(),...X(),...Z({variant:"elevated"})},setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:i}=ee(e),{borderClasses:c}=ae(e),{colorClasses:o,colorStyles:u,variantClasses:f}=te(e),{densityClasses:g}=ne(e),{dimensionStyles:k}=le(e),{elevationClasses:b}=se(e),{loaderClasses:l}=de(e),{locationStyles:x}=ie(e),{positionClasses:$}=ce(e),{roundedClasses:B}=oe(e),r=ue(e,t),D=_(()=>e.link!==!1&&r.isLink.value),v=_(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return C(()=>{var h,A,p;const T=D.value?"a":e.tag,L=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=L||R,j=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),F=!!(a.image||e.image),H=E||w||j,K=!!(a.text||e.text);return re(n(T,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},i.value,c.value,o.value,g.value,b.value,l.value,$.value,B.value,f.value],style:[u.value,k.value,x.value],href:r.href.value,onClick:v.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[F&&n(I,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var d;return[n("div",{class:"v-card__image"},[(d=(h=a.image)==null?void 0:h.call(a))!=null?d:n(me,null,null)])]}}),n(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(ye,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),K&&n(Ce,{key:"text"},{default:()=>{var d;return[(d=(A=a.text)==null?void 0:A.call(a))!=null?d:e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ke,null,{default:a.actions}),ge(v.value,"v-card")]}),[[ve("ripple"),v.value]])}),{}}});export{he as V,Ie as a,Ce as b};