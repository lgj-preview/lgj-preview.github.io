import{C as Te,V as We}from"./Cover.2d55d441.js";import{c as ee}from"./current.926c3b14.js";import{g as I,e as o,m as V,b4 as ie,p as A,b0 as U,bi as Le,b1 as de,bj as Re,ax as je,aD as Fe,b7 as De,Z as q,c as x,d as N,V as C,aY as ae,b3 as Ve,ak as H,$ as He,bk as W,u as $,bl as z,bm as Ue,r as G,aM as J,ap as X,n as O,bn as Pe,aE as _e,aB as we,aJ as qe,aO as ze,aw as Se,a0 as Je,B as Ge,aT as Xe,a2 as Ze,b9 as Qe,ba as Ke,a3 as et,C as tt,H as at,I as nt,Y as Ce,a8 as lt,aZ as st,ab as ot,bc as rt,bd as it,ac as dt,o as Z,a7 as ut,F as ne,bo as ct,a as vt,a_ as mt,an as ft,f as ht,bp as kt,h as le,j as Q,z as Me,w as S,l as P,t as ue,q as te,k as Ae,s as yt,_ as gt,v as ce,x as pt}from"./index.a0dac46e.js";import{m as bt,V as ve,a as xt,T as Dt}from"./VOverlay.69ccf62f.js";import"./VCard.61b0ef16.js";const Vt=A({target:[Object,Array]},"v-dialog-transition"),Pt=I()({name:"VDialogTransition",props:Vt(),setup(e,n){let{slots:a}=n;const i={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,v){var p;await new Promise(c=>requestAnimationFrame(c)),await new Promise(c=>requestAnimationFrame(c)),t.style.visibility="";const{x:r,y:u,sx:d,sy:l,speed:s}=fe(e.target,t),h=U(t,[{transform:`translate(${r}px, ${u}px) scale(${d}, ${l})`,opacity:0},{}],{duration:225*s,easing:Le});(p=me(t))==null||p.forEach(c=>{U(c,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:de})}),h.finished.then(()=>v())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,v){var p;await new Promise(c=>requestAnimationFrame(c));const{x:r,y:u,sx:d,sy:l,speed:s}=fe(e.target,t);U(t,[{},{transform:`translate(${r}px, ${u}px) scale(${d}, ${l})`,opacity:0}],{duration:125*s,easing:Re}).finished.then(()=>v()),(p=me(t))==null||p.forEach(c=>{U(c,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:de})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?o(ie,V({name:"dialog-transition"},i,{css:!1}),a):o(ie,{name:"dialog-transition"},a)}});function me(e){var a;const n=(a=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:a.children;return n&&[...n]}function fe(e,n){const a=je(e),i=Fe(n),[t,v]=getComputedStyle(n).transformOrigin.split(" ").map(g=>parseFloat(g)),[r,u]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=a.left+a.width/2;r==="left"||u==="left"?d-=a.width/2:(r==="right"||u==="right")&&(d+=a.width/2);let l=a.top+a.height/2;r==="top"||u==="top"?l-=a.height/2:(r==="bottom"||u==="bottom")&&(l+=a.height/2);const s=a.width/i.width,h=a.height/i.height,p=Math.max(1,s,h),c=s/p||0,k=h/p||0,m=i.width*i.height/(window.innerWidth*window.innerHeight),b=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:d-(t+i.left),y:l-(v+i.top),sx:c,sy:k,speed:b}}const _t=De("v-spacer","div","VSpacer");const Ee=A({active:{type:[String,Array],default:void 0},disabled:{type:[Boolean,String,Array],default:!1},nextIcon:{type:q,default:"$next"},prevIcon:{type:q,default:"$prev"},modeIcon:{type:q,default:"$subgroup"},text:String,viewMode:{type:String,default:"month"}},"VDatePickerControls"),he=I()({name:"VDatePickerControls",props:Ee(),emits:{"click:year":()=>!0,"click:month":()=>!0,"click:prev":()=>!0,"click:next":()=>!0,"click:text":()=>!0},setup(e,n){let{emit:a}=n;const i=x(()=>Array.isArray(e.disabled)?e.disabled.includes("text"):!!e.disabled),t=x(()=>Array.isArray(e.disabled)?e.disabled.includes("mode"):!!e.disabled),v=x(()=>Array.isArray(e.disabled)?e.disabled.includes("prev"):!!e.disabled),r=x(()=>Array.isArray(e.disabled)?e.disabled.includes("next"):!!e.disabled);function u(){a("click:prev")}function d(){a("click:next")}function l(){a("click:year")}function s(){a("click:month")}return N(()=>o("div",{class:["v-date-picker-controls"]},[o(C,{class:"v-date-picker-controls__month-btn",disabled:i.value,text:e.text,variant:"text",rounded:!0,onClick:s},null),o(C,{key:"mode-btn",class:"v-date-picker-controls__mode-btn",disabled:t.value,density:"comfortable",icon:e.modeIcon,variant:"text",onClick:l},null),o(_t,{key:"mode-spacer"},null),o("div",{key:"month-buttons",class:"v-date-picker-controls__month"},[o(C,{disabled:v.value,icon:e.prevIcon,variant:"text",onClick:u},null),o(C,{disabled:r.value,icon:e.nextIcon,variant:"text",onClick:d},null)])])),{}}});const wt=A({appendIcon:q,color:String,header:String,transition:String,onClick:He()},"VDatePickerHeader"),ke=I()({name:"VDatePickerHeader",props:wt(),emits:{click:()=>!0,"click:append":()=>!0},setup(e,n){let{emit:a,slots:i}=n;const{backgroundColorClasses:t,backgroundColorStyles:v}=ae(e,"color");function r(){a("click")}function u(){a("click:append")}return N(()=>{const d=!!(i.default||e.header),l=!!(i.append||e.appendIcon);return o("div",{class:["v-date-picker-header",{"v-date-picker-header--clickable":!!e.onClick},t.value],style:v.value,onClick:r},[i.prepend&&o("div",{key:"prepend",class:"v-date-picker-header__prepend"},[i.prepend()]),d&&o(Ve,{key:"content",name:e.transition},{default:()=>{var s,h;return[o("div",{key:e.header,class:"v-date-picker-header__content"},[(h=(s=i.default)==null?void 0:s.call(i))!=null?h:e.header])]}}),l&&o("div",{class:"v-date-picker-header__append"},[i.append?o(H,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VBtn:{icon:e.appendIcon,variant:"text"}}},{default:()=>{var s;return[(s=i.append)==null?void 0:s.call(i)]}}):o(C,{key:"append-btn",icon:e.appendIcon,variant:"text",onClick:u},null)])])}),{}}});const St=A({allowedDates:[Array,Function],disabled:Boolean,displayValue:null,modelValue:Array,month:[Number,String],max:null,min:null,showAdjacentMonths:Boolean,year:[Number,String],weekdays:{type:Array,default:()=>[0,1,2,3,4,5,6]},weeksInMonth:{type:String,default:"dynamic"},firstDayOfWeek:[Number,String]},"calendar");function Ct(e){const n=W(),a=$(e,"modelValue",[],c=>z(c)),i=x(()=>e.displayValue?n.date(e.displayValue):a.value.length>0?n.date(a.value[0]):e.min?n.date(e.min):Array.isArray(e.allowedDates)?n.date(e.allowedDates[0]):n.date()),t=$(e,"year",void 0,c=>{const k=c!=null?Number(c):n.getYear(i.value);return n.startOfYear(n.setYear(n.date(),k))},c=>n.getYear(c)),v=$(e,"month",void 0,c=>{const k=c!=null?Number(c):n.getMonth(i.value),m=n.setYear(n.startOfMonth(n.date()),n.getYear(t.value));return n.setMonth(m,k)},c=>n.getMonth(c)),r=x(()=>{var k;const c=Number((k=e.firstDayOfWeek)!=null?k:0);return e.weekdays.map(m=>(m+c)%7)}),u=x(()=>{const c=n.getWeekArray(v.value,e.firstDayOfWeek),k=c.flat(),m=6*7;if(e.weeksInMonth==="static"&&k.length<m){const b=k[k.length-1];let g=[];for(let f=1;f<=m-k.length;f++)g.push(n.addDays(b,f)),f%7===0&&(c.push(g),g=[])}return c});function d(c,k){return c.filter(m=>r.value.includes(n.toJsDate(m).getDay())).map((m,b)=>{const g=n.toISO(m),f=!n.isSameMonth(m,v.value),w=n.isSameDay(m,n.startOfMonth(v.value)),E=n.isSameDay(m,n.endOfMonth(v.value)),M=n.isSameDay(m,v.value);return{date:m,isoDate:g,formatted:n.format(m,"keyboardDate"),year:n.getYear(m),month:n.getMonth(m),isDisabled:p(m),isWeekStart:b%7===0,isWeekEnd:b%7===6,isToday:n.isSameDay(m,k),isAdjacent:f,isHidden:f&&!e.showAdjacentMonths,isStart:w,isSelected:a.value.some(Y=>n.isSameDay(m,Y)),isEnd:E,isSame:M,localized:n.format(m,"dayOfMonth")}})}const l=x(()=>{const c=n.startOfWeek(i.value,e.firstDayOfWeek),k=[];for(let b=0;b<=6;b++)k.push(n.addDays(c,b));const m=n.date();return d(k,m)}),s=x(()=>{const c=u.value.flat(),k=n.date();return d(c,k)}),h=x(()=>u.value.map(c=>c.length?Ue(n,c[0]):null));function p(c){if(e.disabled)return!0;const k=n.date(c);return e.min&&n.isAfter(n.date(e.min),k)||e.max&&n.isAfter(k,n.date(e.max))?!0:Array.isArray(e.allowedDates)&&e.allowedDates.length>0?!e.allowedDates.some(m=>n.isSameDay(n.date(m),k)):typeof e.allowedDates=="function"?!e.allowedDates(k):!1}return{displayValue:i,daysInMonth:s,daysInWeek:l,genDays:d,model:a,weeksInMonth:u,weekDays:r,weekNumbers:h}}const Ie=A({color:String,hideWeekdays:Boolean,multiple:[Boolean,Number,String],showWeek:Boolean,transition:{type:String,default:"picker-transition"},reverseTransition:{type:String,default:"picker-reverse-transition"},...St()},"VDatePickerMonth"),ye=I()({name:"VDatePickerMonth",props:Ie(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0},setup(e,n){let{emit:a,slots:i}=n;const t=G(),{daysInMonth:v,model:r,weekNumbers:u}=Ct(e),d=W(),l=J(),s=J(),h=J(!1),p=x(()=>h.value?e.reverseTransition:e.transition);e.multiple==="range"&&r.value.length>0&&(l.value=r.value[0],r.value.length>1&&(s.value=r.value[r.value.length-1]));const c=x(()=>{const g=["number","string"].includes(typeof e.multiple)?Number(e.multiple):1/0;return r.value.length>=g});X(v,(g,f)=>{!f||(h.value=d.isBefore(g[0].date,f[0].date))});function k(g){const f=d.startOfDay(g);if(r.value.length===0?l.value=void 0:r.value.length===1&&(l.value=r.value[0],s.value=void 0),!l.value)l.value=f,r.value=[l.value];else if(s.value)l.value=g,s.value=void 0,r.value=[l.value];else{if(d.isSameDay(f,l.value)){l.value=void 0,r.value=[];return}else d.isBefore(f,l.value)?(s.value=d.endOfDay(l.value),l.value=f):s.value=d.endOfDay(f);const w=d.getDiff(s.value,l.value,"days"),E=[l.value];for(let M=1;M<w;M++){const Y=d.addDays(l.value,M);E.push(Y)}E.push(s.value),r.value=E}}function m(g){const f=r.value.findIndex(w=>d.isSameDay(w,g));if(f===-1)r.value=[...r.value,g];else{const w=[...r.value];w.splice(f,1),r.value=w}}function b(g){e.multiple==="range"?k(g):e.multiple?m(g):r.value=[g]}return()=>o("div",{class:"v-date-picker-month"},[e.showWeek&&o("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!e.hideWeekdays&&o("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[O("\xA0")]),u.value.map(g=>o("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[g]))]),o(Ve,{name:p.value},{default:()=>{var g;return[o("div",{ref:t,key:(g=v.value[0].date)==null?void 0:g.toString(),class:"v-date-picker-month__days"},[!e.hideWeekdays&&d.getWeekdays(e.firstDayOfWeek).map(f=>o("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[f])),v.value.map((f,w)=>{const E={props:{onClick:()=>b(f.date)},item:f,i:w};return c.value&&!f.isSelected&&(f.isDisabled=!0),o("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":f.isAdjacent,"v-date-picker-month__day--hide-adjacent":f.isHidden,"v-date-picker-month__day--selected":f.isSelected,"v-date-picker-month__day--week-end":f.isWeekEnd,"v-date-picker-month__day--week-start":f.isWeekStart}],"data-v-date":f.isDisabled?void 0:f.isoDate},[(e.showAdjacentMonths||!f.isAdjacent)&&o(H,{defaults:{VBtn:{class:"v-date-picker-month__day-btn",color:(f.isSelected||f.isToday)&&!f.isDisabled?e.color:void 0,disabled:f.isDisabled,icon:!0,ripple:!1,text:f.localized,variant:f.isDisabled?f.isToday?"outlined":"text":f.isToday&&!f.isSelected?"outlined":"flat",onClick:()=>b(f.date)}}},{default:()=>{var M,Y;return[(Y=(M=i.day)==null?void 0:M.call(i,E))!=null?Y:o(C,E.props,null)]}})])})])]}})])}});const Ye=A({color:String,height:[String,Number],min:null,max:null,modelValue:Number,year:Number},"VDatePickerMonths"),ge=I()({name:"VDatePickerMonths",props:Ye(),emits:{"update:modelValue":e=>!0},setup(e,n){let{emit:a,slots:i}=n;const t=W(),v=$(e,"modelValue"),r=x(()=>{let u=t.startOfYear(t.date());return e.year&&(u=t.setYear(u,e.year)),Pe(12).map(d=>{const l=t.format(u,"monthShort"),s=!!(e.min&&t.isAfter(t.startOfMonth(t.date(e.min)),u)||e.max&&t.isAfter(u,t.startOfMonth(t.date(e.max))));return u=t.getNextMonth(u),{isDisabled:s,text:l,value:d}})});return _e(()=>{var u;v.value=(u=v.value)!=null?u:t.getMonth(t.date())}),N(()=>o("div",{class:"v-date-picker-months",style:{height:we(e.height)}},[o("div",{class:"v-date-picker-months__content"},[r.value.map((u,d)=>{var h,p;const l={active:v.value===d,color:v.value===d?e.color:void 0,disabled:u.isDisabled,rounded:!0,text:u.text,variant:v.value===u.value?"flat":"text",onClick:()=>s(d)};function s(c){if(v.value===c){a("update:modelValue",v.value);return}v.value=c}return(p=(h=i.month)==null?void 0:h.call(i,{month:u,i:d,props:l}))!=null?p:o(C,V({key:"month"},l),null)})])])),{}}});const Be=A({color:String,height:[String,Number],min:null,max:null,modelValue:Number},"VDatePickerYears"),pe=I()({name:"VDatePickerYears",props:Be(),emits:{"update:modelValue":e=>!0},setup(e,n){let{emit:a,slots:i}=n;const t=W(),v=$(e,"modelValue"),r=x(()=>{const d=t.getYear(t.date());let l=d-100,s=d+52;e.min&&(l=t.getYear(t.date(e.min))),e.max&&(s=t.getYear(t.date(e.max)));let h=t.startOfYear(t.date());return h=t.setYear(h,l),Pe(s-l+1,l).map(p=>{const c=t.format(h,"year");return h=t.setYear(h,t.getYear(h)+1),{text:c,value:p}})});_e(()=>{var d;v.value=(d=v.value)!=null?d:t.getYear(t.date())});const u=qe();return ze(async()=>{var d;await Se(),(d=u.el)==null||d.scrollIntoView({block:"center"})}),N(()=>o("div",{class:"v-date-picker-years",style:{height:we(e.height)}},[o("div",{class:"v-date-picker-years__content"},[r.value.map((d,l)=>{var h,p;const s={ref:v.value===d.value?u:void 0,active:v.value===d.value,color:v.value===d.value?e.color:void 0,rounded:!0,text:d.text,variant:v.value===d.value?"flat":"text",onClick:()=>{if(v.value===d.value){a("update:modelValue",v.value);return}v.value=d.value}};return(p=(h=i.year)==null?void 0:h.call(i,{year:d,i:l,props:s}))!=null?p:o(C,V({key:"month"},s),null)})])])),{}}});const Mt=De("v-picker-title");const Oe=A({color:String,...Je(),...Ge(),...Xe(),...Ze(),...Qe(),...Ke(),...et(),...tt(),...at()},"VSheet"),be=I()({name:"VSheet",props:Oe(),setup(e,n){let{slots:a}=n;const{themeClasses:i}=nt(e),{backgroundColorClasses:t,backgroundColorStyles:v}=ae(Ce(e,"color")),{borderClasses:r}=lt(e),{dimensionStyles:u}=st(e),{elevationClasses:d}=ot(e),{locationStyles:l}=rt(e),{positionClasses:s}=it(e),{roundedClasses:h}=dt(e);return N(()=>o(e.tag,{class:["v-sheet",i.value,t.value,r.value,d.value,s.value,h.value,e.class],style:[v.value,u.value,l.value,e.style]},a)),{}}}),$e=A({bgColor:String,landscape:Boolean,title:String,hideHeader:Boolean,...Oe()},"VPicker"),xe=I()({name:"VPicker",props:$e(),setup(e,n){let{slots:a}=n;const{backgroundColorClasses:i,backgroundColorStyles:t}=ae(Ce(e,"color"));return N(()=>{const v=be.filterProps(e),r=!!(e.title||a.title);return o(be,V(v,{color:e.bgColor,class:["v-picker",{"v-picker--landscape":e.landscape,"v-picker--with-actions":!!a.actions},e.class],style:e.style}),{default:()=>{var u;return[!e.hideHeader&&o("div",{key:"header",class:[i.value],style:[t.value]},[r&&o(Mt,{key:"picker-title"},{default:()=>{var d,l;return[(l=(d=a.title)==null?void 0:d.call(a))!=null?l:e.title]}}),a.header&&o("div",{class:"v-picker__header"},[a.header()])]),o("div",{class:"v-picker__body"},[(u=a.default)==null?void 0:u.call(a)]),a.actions&&o(H,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[o("div",{class:"v-picker__actions"},[a.actions()])]})]}})}),{}}}),At=A({header:{type:String,default:"$vuetify.datePicker.header"},...Ee(),...Ie({weeksInMonth:"static"}),...Z(Ye(),["modelValue"]),...Z(Be(),["modelValue"]),...$e({title:"$vuetify.datePicker.title"}),modelValue:null},"VDatePicker"),Et=I()({name:"VDatePicker",props:At(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0,"update:viewMode":e=>!0},setup(e,n){var se,oe;let{emit:a,slots:i}=n;const t=W(),{t:v}=ut(),r=$(e,"modelValue",void 0,y=>z(y),y=>e.multiple?y:y[0]),u=$(e,"viewMode"),d=x(()=>{var _;const y=t.date((_=r.value)==null?void 0:_[0]);return y&&t.isValid(y)?y:t.date()}),l=G(Number((se=e.month)!=null?se:t.getMonth(t.startOfMonth(d.value)))),s=G(Number((oe=e.year)!=null?oe:t.getYear(t.startOfYear(t.setMonth(d.value,l.value))))),h=J(!1),p=x(()=>e.multiple&&r.value.length>1?v("$vuetify.datePicker.itemsSelected",r.value.length):r.value[0]&&t.isValid(r.value[0])?t.format(t.date(r.value[0]),"normalDateWithWeekday"):v(e.header)),c=x(()=>{let y=t.date();return y=t.setDate(y,1),y=t.setMonth(y,l.value),y=t.setYear(y,s.value),t.format(y,"monthAndYear")}),k=x(()=>`date-picker-header${h.value?"-reverse":""}-transition`),m=x(()=>{const y=t.date(e.min);return e.min&&t.isValid(y)?y:null}),b=x(()=>{const y=t.date(e.max);return e.max&&t.isValid(y)?y:null}),g=x(()=>{if(e.disabled)return!0;const y=[];if(u.value!=="month")y.push("prev","next");else{let _=t.date();if(_=t.setYear(_,s.value),_=t.setMonth(_,l.value),m.value){const B=t.addDays(t.startOfMonth(_),-1);t.isAfter(m.value,B)&&y.push("prev")}if(b.value){const B=t.addDays(t.endOfMonth(_),1);t.isAfter(B,b.value)&&y.push("next")}}return y});function f(){l.value<11?l.value++:(s.value++,l.value=0,R(s.value)),L(l.value)}function w(){l.value>0?l.value--:(s.value--,l.value=11,R(s.value)),L(l.value)}function E(){u.value="month"}function M(){u.value=u.value==="months"?"month":"months"}function Y(){u.value=u.value==="year"?"month":"year"}function L(y){u.value==="months"&&M(),a("update:month",y)}function R(y){u.value==="year"&&Y(),a("update:year",y)}return X(r,(y,_)=>{const B=z(_),j=z(y);if(!j.length)return;const K=t.date(B[B.length-1]),F=t.date(j[j.length-1]),T=t.getMonth(F),D=t.getYear(F);T!==l.value&&(l.value=T,L(l.value)),D!==s.value&&(s.value=D,R(s.value)),h.value=t.isBefore(K,F)}),N(()=>{const y=xe.filterProps(e),_=he.filterProps(e),B=ke.filterProps(e),j=ye.filterProps(e),K=Z(ge.filterProps(e),["modelValue"]),F=Z(pe.filterProps(e),["modelValue"]),T={header:p.value,transition:k.value};return o(xe,V(y,{class:["v-date-picker",`v-date-picker--${u.value}`,{"v-date-picker--show-week":e.showWeek},e.class],style:e.style}),{title:()=>{var D,re;return(re=(D=i.title)==null?void 0:D.call(i))!=null?re:o("div",{class:"v-date-picker__title"},[v(e.title)])},header:()=>i.header?o(H,{defaults:{VDatePickerHeader:{...T}}},{default:()=>{var D;return[(D=i.header)==null?void 0:D.call(i,T)]}}):o(ke,V({key:"header"},B,T,{onClick:u.value!=="month"?E:void 0}),{...i,default:void 0}),default:()=>o(ne,null,[o(he,V(_,{disabled:g.value,text:c.value,"onClick:next":f,"onClick:prev":w,"onClick:month":M,"onClick:year":Y}),null),o(ct,{hideOnLeave:!0},{default:()=>[u.value==="months"?o(ge,V({key:"date-picker-months"},K,{modelValue:l.value,"onUpdate:modelValue":[D=>l.value=D,L],min:m.value,max:b.value,year:s.value}),null):u.value==="year"?o(pe,V({key:"date-picker-years"},F,{modelValue:s.value,"onUpdate:modelValue":[D=>s.value=D,R],min:m.value,max:b.value}),null):o(ye,V({key:"date-picker-month"},j,{modelValue:r.value,"onUpdate:modelValue":D=>r.value=D,month:l.value,"onUpdate:month":[D=>l.value=D,L],year:s.value,"onUpdate:year":[D=>s.value=D,R],min:m.value,max:b.value}),null)]})]),actions:i.actions})}),{}}});const It=A({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...bt({origin:"center center",scrollStrategy:"block",transition:{component:Pt},zIndex:2400})},"VDialog"),Ne=I()({name:"VDialog",props:It(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{emit:a,slots:i}=n;const t=$(e,"modelValue"),{scopeId:v}=vt(),r=G();function u(s){var c,k;const h=s.relatedTarget,p=s.target;if(h!==p&&((c=r.value)==null?void 0:c.contentEl)&&((k=r.value)==null?void 0:k.globalTop)&&![document,r.value.contentEl].includes(p)&&!r.value.contentEl.contains(p)){const m=kt(r.value.contentEl);if(!m.length)return;const b=m[0],g=m[m.length-1];h===b?g.focus():b.focus()}}mt(()=>{document.removeEventListener("focusin",u)}),ft&&X(()=>t.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0});function d(){var s;a("afterEnter"),((s=r.value)==null?void 0:s.contentEl)&&!r.value.contentEl.contains(document.activeElement)&&r.value.contentEl.focus({preventScroll:!0})}function l(){a("afterLeave")}return X(t,async s=>{var h;s||(await Se(),(h=r.value.activatorEl)==null||h.focus({preventScroll:!0}))}),N(()=>{const s=ve.filterProps(e),h=V({"aria-haspopup":"dialog"},e.activatorProps),p=V({tabindex:-1},e.contentProps);return o(ve,V({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:t.value,"onUpdate:modelValue":c=>t.value=c,"aria-modal":"true",activatorProps:h,contentProps:p,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:d,onAfterLeave:l},v),{activator:i.activator,default:function(){for(var c=arguments.length,k=new Array(c),m=0;m<c;m++)k[m]=arguments[m];return o(H,{root:"VDialog"},{default:()=>{var b;return[(b=i.default)==null?void 0:b.call(i,...k)]}})}})}),ht({},r)}}),Yt={class:"w-100 text-h5"},Bt={class:"v-date-picker-month__days"},Ot={class:"v-date-picker-month__day"},$t=le({__name:"DateLocked",setup(e){const n=W(),a=ee.date.dates.map(i=>n.parseISO(i));return(i,t)=>(Q(),Me(Ne,{"max-width":"fit-content"},{activator:S(({props:v})=>[o(C,V(v,{variant:"tonal",size:"small",text:"Ver calendario"}),null,16)]),default:S(()=>[o(Et,{class:"date-locked",elevation:"24","allowed-dates":te(ee).date.dates,"model-value":te(a),"view-mode":"month",disabled:"","hide-header":"","hide-weekdays":""},{actions:S(()=>[P("div",null,[P("div",Yt," ENERO, "+ue(te(ee).year),1),P("div",Bt,[(Q(),Ae(ne,null,yt("DLMXJVS",v=>P("div",Ot,ue(v),1)),64))])])]),_:1},8,["allowed-dates","model-value"])]),_:1}))}});const Nt=["src"],Tt=le({__name:"HubMap",props:{mapUrl:{}},setup(e){return(n,a)=>(Q(),Me(Ne,{"max-width":"fit-content"},{activator:S(({props:i})=>[o(C,V(i,{variant:"tonal",size:"small",text:"Ver mapa"}),null,16)]),default:S(()=>[P("iframe",{src:n.mapUrl,class:"map",allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,8,Nt)]),_:1}))}});const Wt=gt(Tt,[["__scopeId","data-v-3241b436"]]),Lt={class:"text-overline"},Rt={class:"text-overline"},jt={class:"text-center mt-2"},Jt=le({__name:"Registration",setup(e){return(n,a)=>(Q(),Ae(ne,null,[o(Te,{title:"Registro"},{default:S(()=>[a[3]||(a[3]=P("p",null,[O(" Inscripciones hasta el "),P("strong",null,"12 de enero")],-1)),P("p",Lt,[a[0]||(a[0]=O(" Lugar: Escuela Toulouse Lautrec - Sede Chacarilla ")),o(Wt,{"map-url":""})]),P("p",Rt,[a[1]||(a[1]=O(" SIGUIENTE EDICI\xD3N DEL 24 AL 26 DE ENERO DE 2025 ")),o($t)]),o(xt,{class:"text-h6 text-wrap h-auto text-uppercase mt-4"},{default:S(()=>a[2]||(a[2]=[O(" \xA1An\xEDmate a participar! ")])),_:1})]),_:1}),o(We,{"no-gutters":""},{default:S(()=>[o(ce,{cols:"6"},{default:S(()=>[o(pt,{"aspect-ratio":4/3,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""})]),_:1}),o(ce,{cols:"4",offset:"1",class:"side-text"},{default:S(()=>[a[5]||(a[5]=P("h2",null,"Reg\xEDstrate al evento",-1)),a[6]||(a[6]=P("p",null," A continuaci\xF3n, encontrar\xE1s el formulario para la pre-inscripci\xF3n al Lima Game Jam. Debido a que tenemos un espacio limitado, existe un proceso previo para elegir a los participantes. ",-1)),a[7]||(a[7]=P("p",null," Buscamos un grupo variado en experiencia y habilidades por lo que no hay un perfil \xFAnico. Queremos conocerte, por favor t\xF3mate el tiempo necesario para contestar las preguntas. ",-1)),o(C,{color:"primary",href:"https://forms.gle/qpueNLa1F7chU8YC9",target:"_blank"},{default:S(()=>a[4]||(a[4]=[O("Ir al formulario")])),_:1})]),_:1})]),_:1}),P("div",jt,[a[9]||(a[9]=O(" \xA1Buscamos patrocinadores para el Lima Game Jam 2025! Si quieres apoyarnos, escr\xEDbenos al ")),a[10]||(a[10]=P("strong",null,"limagamejam@gmail.com",-1)),o(C,{href:"mailto:limagamejam@gmail.com?subject=Inscripcion como Sponsor",variant:"flat",size:"small"},{default:S(()=>a[8]||(a[8]=[O("enviar mensaje")])),_:1})]),o(Dt)],64))}});export{Jt as default};
