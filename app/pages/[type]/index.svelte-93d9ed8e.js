import{S as t,i as e,s,j as r,k as n,e as o,m as l,n as a,c as i,a as c,d as f,b as m,o as h,f as p,F as u,v as g,t as $,g as d,h as v,r as w,w as y,u as b,Q as j,l as x,T as k,z as E,B as A}from"../../chunks/vendor-d8848aa7.js";import{g as P}from"../../chunks/navigation-20968cc5.js";import{p as N}from"../../chunks/stores-fd2cc8b4.js";import{T as S}from"../../chunks/Title-56b8e34e.js";import{H as B}from"../../chunks/Head-3a8bf723.js";import{P as D}from"../../chunks/Profiles-69986c3a.js";import{E as I}from"../../chunks/EzeMedia-f0572190.js";import{u as M}from"../../chunks/utils-7b57918c.js";import"../../chunks/singletons-bb9012b7.js";import"../../chunks/_stores-05686e17.js";function O(t,e,s){const r=t.slice();return r[7]=e[s][0],r[8]=e[s][1],r[10]=s,r}function T(t,e,s){const r=t.slice();return r[11]=e[s],r[10]=s,r}function V(t,e,s){const r=t.slice();return r[13]=e[s],r}function z(t){let e,s=t[7]+"";return{c(){e=$(s)},l(t){e=d(t,s)},m(t,s){p(t,e,s)},p(t,r){2&r&&s!==(s=t[7]+"")&&v(e,s)},d(t){t&&f(e)}}}function H(t){var e,s;let b,j,x,k,E,A,P,N,S,B,D,O,T,V,z=t[13].name+"";return k=new I({props:{class:"",file:null==(s=null==(e=t[13])?void 0:e.picture)?void 0:s[0],root:t[2],format:"300x0x90",stretch:"width"}}),{c(){b=o("a"),j=o("span"),x=n(),r(k.$$.fragment),E=n(),A=o("span"),P=n(),N=o("span"),S=$(z),O=n(),T=o("div"),this.h()},l(t){b=i(t,"A",{href:!0,class:!0});var e=c(b);j=i(e,"SPAN",{class:!0}),c(j).forEach(f),x=a(e),l(k.$$.fragment,e),E=a(e),A=i(e,"SPAN",{class:!0}),c(A).forEach(f),P=a(e),N=i(e,"SPAN",{class:!0});var s=c(N);S=d(s,z),s.forEach(f),e.forEach(f),O=a(t),T=i(t,"DIV",{class:!0}),c(T).forEach(f),this.h()},h(){m(j,"class","grow"),m(A,"class","grow"),m(N,"class","p1 border mt1"),m(b,"href",B=`/${t[13].type}/${t[13].id}`),m(b,"class",D="no-basis mb1 grow flex column-stretch-flex-start wrap profile-"+t[13].type+" profile-"+t[13]["picture-style"]+" "+M.slugify(t[13].name)),m(T,"class","flex w1em maxe1em")},m(t,e){p(t,b,e),u(b,j),u(b,x),h(k,b,null),u(b,E),u(b,A),u(b,P),u(b,N),u(N,S),p(t,O,e),p(t,T,e),V=!0},p(t,e){var s,r;const n={};2&e&&(n.file=null==(r=null==(s=t[13])?void 0:s.picture)?void 0:r[0]),4&e&&(n.root=t[2]),k.$set(n),(!V||2&e)&&z!==(z=t[13].name+"")&&v(S,z),(!V||2&e&&B!==(B=`/${t[13].type}/${t[13].id}`))&&m(b,"href",B),(!V||2&e&&D!==(D="no-basis mb1 grow flex column-stretch-flex-start wrap profile-"+t[13].type+" profile-"+t[13]["picture-style"]+" "+M.slugify(t[13].name)))&&m(b,"class",D)},i(t){V||(g(k.$$.fragment,t),V=!0)},o(t){w(k.$$.fragment,t),V=!1},d(t){t&&f(b),y(k),t&&f(O),t&&f(T)}}}function C(t){let e;return{c(){e=o("div"),this.h()},l(t){e=i(t,"DIV",{class:!0}),c(e).forEach(f),this.h()},h(){m(e,"class","no-basis grow")},m(t,s){p(t,e,s)},d(t){t&&f(e)}}}function F(t){let e,s,$,d,v,x;e=new S({props:{$$slots:{default:[z]},$$scope:{ctx:t}}});let k=t[8].items,E=[];for(let r=0;r<k.length;r+=1)E[r]=H(V(t,k,r));const P=t=>w(E[t],1,1,(()=>{E[t]=null}));let N=new Array(6-t[8].items.length),B=[];for(let r=0;r<N.length;r+=1)B[r]=C(T(t,N,r));return{c(){r(e.$$.fragment),s=n(),$=o("div");for(let t=0;t<E.length;t+=1)E[t].c();d=n();for(let t=0;t<B.length;t+=1)B[t].c();v=n(),this.h()},l(t){l(e.$$.fragment,t),s=a(t),$=i(t,"DIV",{class:!0});var r=c($);for(let e=0;e<E.length;e+=1)E[e].l(r);d=a(r);for(let e=0;e<B.length;e+=1)B[e].l(r);v=a(r),r.forEach(f),this.h()},h(){m($,"class","flex row wrap mtb1")},m(t,r){h(e,t,r),p(t,s,r),p(t,$,r);for(let e=0;e<E.length;e+=1)E[e].m($,null);u($,d);for(let e=0;e<B.length;e+=1)B[e].m($,null);u($,v),x=!0},p(t,s){const r={};if(65538&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r),6&s){let e;for(k=t[8].items,e=0;e<k.length;e+=1){const r=V(t,k,e);E[e]?(E[e].p(r,s),g(E[e],1)):(E[e]=H(r),E[e].c(),g(E[e],1),E[e].m($,d))}for(A(),e=k.length;e<E.length;e+=1)P(e);b()}if(2&s){const e=N.length;let s;for(N=new Array(6-t[8].items.length),s=e;s<N.length;s+=1)T(t,N,s),B[s]||(B[s]=C(),B[s].c(),B[s].m($,v));for(s=N.length;s<e;s+=1)B[s].d(1);B.length=N.length}},i(t){if(!x){g(e.$$.fragment,t);for(let t=0;t<k.length;t+=1)g(E[t]);x=!0}},o(t){w(e.$$.fragment,t),E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)w(E[e]);x=!1},d(t){y(e,t),t&&f(s),t&&f($),j(E,t),j(B,t)}}}function Q(t){var e,s,o;let i,c,m,u;i=new B({props:{title:"Profiles, workshops, talks + performances",description:t[0].map(q).join(", "),image:null==(o=null==(s=null==(e=t[0])?void 0:e[0])?void 0:s.cover)?void 0:o[0]}});let $=Object.entries(t[1]),d=[];for(let r=0;r<$.length;r+=1)d[r]=F(O(t,$,r));const v=t=>w(d[t],1,1,(()=>{d[t]=null}));return{c(){r(i.$$.fragment),c=n();for(let t=0;t<d.length;t+=1)d[t].c();m=x()},l(t){l(i.$$.fragment,t),c=a(t);for(let e=0;e<d.length;e+=1)d[e].l(t);m=x()},m(t,e){h(i,t,e),p(t,c,e);for(let s=0;s<d.length;s+=1)d[s].m(t,e);p(t,m,e),u=!0},p(t,[e]){var s,r,n;const o={};if(1&e&&(o.description=t[0].map(q).join(", ")),1&e&&(o.image=null==(n=null==(r=null==(s=t[0])?void 0:s[0])?void 0:r.cover)?void 0:n[0]),i.$set(o),6&e){let s;for($=Object.entries(t[1]),s=0;s<$.length;s+=1){const r=O(t,$,s);d[s]?(d[s].p(r,e),g(d[s],1)):(d[s]=F(r),d[s].c(),g(d[s],1),d[s].m(m.parentNode,m))}for(A(),s=$.length;s<d.length;s+=1)v(s);b()}},i(t){if(!u){g(i.$$.fragment,t);for(let t=0;t<$.length;t+=1)g(d[t]);u=!0}},o(t){w(i.$$.fragment,t),d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)w(d[e]);u=!1},d(t){y(i,t),t&&f(c),j(d,t),t&&f(m)}}}const _=async({fetch:t,page:e})=>({props:{profiles:(await(await t("/profiles.json")).json()).sort((t=>Math.random()>.5))}}),q=t=>t.name;function G(t,e,s){let r,n,o,l,a;k(t,N,(t=>s(3,a=t)));let{profiles:i}=e;return E((async t=>{"events"==r&&P("/activities")})),t.$$set=t=>{"profiles"in t&&s(0,i=t.profiles)},t.$$.update=()=>{8&t.$$.dirty&&(r=a.params.type),1&t.$$.dirty&&s(4,n=i.filter((t=>"community"==t.type)).sort(((t,e)=>Math.random()>.5))),17&t.$$.dirty&&s(1,o={Communities:{items:n,component:D,grow:!0,stretch:"width"},Orgs:{items:i.filter((t=>"organisation"==t.type)).reverse(),component:D,grow:!0,stretch:"width"}})},s(2,l="/media/community"),[i,o,"/media/community",a,n]}export default class extends t{constructor(t){super(),e(this,t,G,Q,s,{profiles:0})}}export{_ as load};