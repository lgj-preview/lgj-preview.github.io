import{q as G,D as J,E as M,G as ie,d as ce,o as V,c as z,e as de,b as l,w as u,F as I,i as re,u as ue,j as P,k as ve,f as E,t as R,_ as pe,l as H,H as me,I as fe,m as K,J as ye,n as O,z as j,K as X,A as Q,L as ke,M as he,N as p,O as Ce,P as S,Q as m,R as F,S as be,T as ge,U as Ve,W as _e,X as Ie,Y as Pe,Z as Se,$ as Ge,a0 as Ae,a1 as xe,a2 as Be,a3 as qe,a4 as Te,a5 as Le,a6 as we,a7 as De,s as _,a8 as N,a9 as ze,aa as Ee,ab as Re,ac as f,ad as y,ae as Fe,af as $}from"./index.a8ac4a70.js";import{V as Ne,b as $e,a as Je}from"./VCard.26006a8c.js";const Me=[{name:"Hitoshi Kanno",quote:"LGJ es un gran lugar para reunirte con gente apasionada por la industria en el Per\xFA. Tanto gente nueva como veteranos. Siempre me motiva verlos y saber en qu\xE9 andan. Como alguien que lleva haciendo un proyecto largo... es refrescante hacer algo nuevo de cero ya sea con gente nueva o conocidos con los que nunca he trabajado antes. En LGJ la comunidad y las personas detr\xE1s se esfuerzan para dar un espacio divertido y c\xF3modo para probar nuevas cosas o aprender si eres nuevo."},{name:"Anthony Rumiche",quote:"Me encanta el LGJ, ya que es la oportunidad perfecta para poner en pr\xE1ctica tus nuevos conocimientos, superar tus l\xEDmites, y realizar networking con diversos perfiles de la industria, desde iniciantes hasta expertos. No importa si el proyecto no sali\xF3 como lo esperaban, sino en disfrutar el proceso de desarrollo con tu equipo(s). Finalmente, la organizaci\xF3n tambi\xE9n realiza actividades muy divertidas durante el evento para poder interactuar con otras personas."},{name:"Coralain",quote:"Hacer lo que te apasiona mientras compartes esa pasi\xF3n con muchas m\xE1s personas y al final logran un proyecto inesperado es... revelador. No siempre ser\xE1 lo que planearon al inicio, pero \xCDtaca es el camino, no el resultado. He podido conocer a una gran variedad de personas, algunas de las cuales he permanecido en contacto, y siempre brindan algo valioso que aprender."}],He=G()({name:"VSlideGroupItem",props:J(),emits:{"group:selected":e=>!0},setup(e,c){let{slots:o}=c;const n=M(e,ie);return()=>{var s;return(s=o.default)==null?void 0:s.call(o,{isSelected:n.isSelected.value,select:n.select,toggle:n.toggle,selectedClass:n.selectedClass.value})}}}),Ke={class:"py-12"},Oe=ce({__name:"Testimonials",setup(e){return(c,o)=>(V(),z("div",Ke,[o[0]||(o[0]=de("h2",{class:"mb-4 px-8"},"#LimaGameJam",-1)),l(P,{"show-arrows":"",class:"px-md-8"},{default:u(()=>[(V(!0),z(I,null,re(ue(Me),n=>(V(),ve(He,{key:n.name},{default:u(()=>[l(Ne,{class:"testimony w-25 w-md-50 w-sm-100"},{default:u(()=>[l($e,null,{default:u(()=>[E(R(n.quote),1)]),_:2},1024),l(Je,null,{default:u(()=>[E(R(n.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))}});const We=pe(Oe,[["__scopeId","data-v-c02dbd14"]]);const U=Symbol.for("vuetify:v-chip-group"),je=H({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:me},...fe(),...K(),...ye({selectedClass:"v-chip--selected"}),...O(),...j(),...X({variant:"tonal"})},"VChipGroup");G()({name:"VChipGroup",props:je(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:o}=c;const{themeClasses:n}=Q(e),{isSelected:s,select:k,next:h,prev:C,selected:b}=ke(e,U);return he({VChip:{color:p(e,"color"),disabled:p(e,"disabled"),filter:p(e,"filter"),variant:p(e,"variant")}}),Ce(()=>{const g=P.filterProps(e);return l(P,S(g,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style}),{default:()=>{var v;return[(v=o.default)==null?void 0:v.call(o,{isSelected:s,select:k,next:h,prev:C,selected:b.value})]}})}),{}}});const Xe=H({activeClass:String,appendAvatar:String,appendIcon:m,closable:Boolean,closeIcon:{type:m,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:m,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:F(),onClickOnce:F(),...be(),...K(),...ge(),...Ve(),...J(),..._e(),...Ie(),...Pe(),...O({tag:"span"}),...j(),...X({variant:"tonal"})},"VChip"),Ye=G()({name:"VChip",directives:{Ripple:Se},props:Xe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,c){let{attrs:o,emit:n,slots:s}=c;const{t:k}=Ge(),{borderClasses:h}=Ae(e),{colorClasses:C,colorStyles:b,variantClasses:g}=xe(e),{densityClasses:v}=Be(e),{elevationClasses:W}=qe(e),{roundedClasses:Y}=Te(e),{sizeClasses:Z}=Le(e),{themeClasses:ee}=Q(e),A=we(e,"modelValue"),a=M(e,U,!1),i=De(e,o),ae=_(()=>e.link!==!1&&i.isLink.value),d=_(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||i.isClickable.value)),le=_(()=>({"aria-label":k(e.closeLabel),onClick(t){t.preventDefault(),t.stopPropagation(),A.value=!1,n("click:close",t)}}));function x(t){var r;n("click",t),d.value&&((r=i.navigate)==null||r.call(i,t),a==null||a.toggle())}function se(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),x(t))}return()=>{var L;const t=i.isLink.value?"a":e.tag,r=!!(e.appendIcon||e.appendAvatar),ne=!!(r||s.append),te=!!(s.close||e.closable),B=!!(s.filter||e.filter)&&a,q=!!(e.prependIcon||e.prependAvatar),oe=!!(q||s.prepend),T=!a||a.isSelected.value;return A.value&&N(l(t,S({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":d.value,"v-chip--filter":B,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((L=i.isActive)==null?void 0:L.value)},ee.value,h.value,T?C.value:void 0,v.value,W.value,Y.value,Z.value,g.value,a==null?void 0:a.selectedClass.value,e.class],style:[T?b.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:d.value?0:void 0,onClick:x,onKeydown:d.value&&!ae.value&&se},i.linkProps),{default:()=>{var w,D;return[Ee(d.value,"v-chip"),B&&l(Re,{key:"filter"},{default:()=>[N(l("div",{class:"v-chip__filter"},[s.filter?l(y,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},s.filter):l(f,{key:"filter-icon",icon:e.filterIcon},null)]),[[Fe,a.isSelected.value]])]}),oe&&l("div",{key:"prepend",class:"v-chip__prepend"},[s.prepend?l(y,{key:"prepend-defaults",disabled:!q,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},s.prepend):l(I,null,[e.prependIcon&&l(f,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l($,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content","data-no-activator":""},[(D=(w=s.default)==null?void 0:w.call(s,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?D:e.text]),ne&&l("div",{key:"append",class:"v-chip__append"},[s.append?l(y,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},s.append):l(I,null,[e.appendIcon&&l(f,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l($,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),te&&l("button",S({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},le.value),[s.close?l(y,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},s.close):l(f,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[ze("ripple"),d.value&&e.ripple,null]])}}});export{We as T,Ye as V,He as a};
