var t=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(e,l,s)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s;import{S as o,i as c,s as i,e as $,c as f,a as m,d,b as u,f as p,B as h,r as v,u as g,v as b,a3 as y,t as w,g as x,h as j,M as k,D,H as E,j as I,k as V,m as H,n as O,o as T,w as M,T as P,E as q,F as A,Q as L}from"../../chunks/vendor-60623916.js";import{u as S}from"../../chunks/utils-b0a22032.js";import{T as Y}from"../../chunks/Timestamp-985d8836.js";import{T as B}from"../../chunks/Tag-87237adc.js";import{E as U}from"../../chunks/EzeMedia-249266b8.js";import{p as z}from"../../chunks/stores-6f3ba01c.js";import{T as F}from"../../chunks/Title-989d96c5.js";import{H as Q}from"../../chunks/Head-f78c8e4f.js";import{P as _}from"../../chunks/Profiles-7201810a.js";import{S as C}from"../../chunks/Sidebar-bfefe58e.js";import"../../chunks/_stores-88dd5ace.js";function G(t){var e,l;let s,n=(null==(l=null==(e=t[0])?void 0:e.item)?void 0:l.title)+"";return{c(){s=w(n)},l(t){s=x(t,n)},m(t,e){p(t,s,e)},p(t,e){var l,r;1&e&&n!==(n=(null==(r=null==(l=t[0])?void 0:l.item)?void 0:r.title)+"")&&j(s,n)},i:k,o:k,d(t){t&&d(s)}}}function J(t){let e;const l=t[5].default,s=D(l,t,t[4],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,l){s&&s.m(t,l),e=!0},p(t,n){s&&s.p&&(!e||16&n)&&E(s,l,t,t[4],n,null,null)},i(t){e||(b(s,t),e=!0)},o(t){v(s,t),e=!1},d(t){s&&s.d(t)}}}function K(t){let e,l,s,n,r;const a=[J,G],o=[];function c(t,e){return t[3].default?0:1}return l=c(t),s=o[l]=a[l](t),{c(){e=$("a"),s.c(),this.h()},l(t){e=f(t,"A",{href:!0,class:!0,style:!0});var l=m(e);s.l(l),l.forEach(d),this.h()},h(){var l,s;u(e,"href",n=`https://maps.google.com?q=${((null==(s=null==(l=t[0])?void 0:l.item)?void 0:s.address)||"").replaceAll("\n",",")}`),u(e,"class",t[1]),u(e,"style",t[2])},m(t,s){p(t,e,s),o[l].m(e,null),r=!0},p(t,[i]){var $,f;let m=l;l=c(t),l===m?o[l].p(t,i):(h(),v(o[m],1,1,(()=>{o[m]=null})),g(),s=o[l],s?s.p(t,i):(s=o[l]=a[l](t),s.c()),b(s,1),s.m(e,null)),(!r||1&i&&n!==(n=`https://maps.google.com?q=${((null==(f=null==($=t[0])?void 0:$.item)?void 0:f.address)||"").replaceAll("\n",",")}`))&&u(e,"href",n),(!r||2&i)&&u(e,"class",t[1]),(!r||4&i)&&u(e,"style",t[2])},i(t){r||(b(s),r=!0)},o(t){v(s),r=!1},d(t){t&&d(e),o[l].d()}}}function N(t,e,l){let{$$slots:s={},$$scope:n}=e;const r=y(s);let{place:a}=e,{class:o=""}=e,{style:c=""}=e;return t.$$set=t=>{"place"in t&&l(0,a=t.place),"class"in t&&l(1,o=t.class),"style"in t&&l(2,c=t.style),"$$scope"in t&&l(4,n=t.$$scope)},[a,o,c,r,n,s]}class R extends o{constructor(t){super(),c(this,t,N,K,i,{place:0,class:1,style:2})}}function W(t,e,l){const s=t.slice();return s[6]=e[l],s}function X(t,e,l){const s=t.slice();return s[9]=e[l],s}function Z(t){var e,l;let s,n,r;return n=new U({props:{file:null==(l=null==(e=t[0])?void 0:e.cover)?void 0:l[0],format:"820x0x95",root:"/media/events"}}),{c(){s=$("div"),I(n.$$.fragment),this.h()},l(t){s=f(t,"DIV",{class:!0,style:!0});var e=m(s);H(n.$$.fragment,e),e.forEach(d),this.h()},h(){u(s,"class","bl bt"),q(s,"margin-left","calc( var(--stroke-width) * -1)"),q(s,"margin-top","calc( var(--stroke-width) * -1)")},m(t,e){p(t,s,e),T(n,s,null),r=!0},p(t,e){var l,s;const r={};1&e&&(r.file=null==(s=null==(l=t[0])?void 0:l.cover)?void 0:s[0]),n.$set(r)},i(t){r||(b(n.$$.fragment,t),r=!0)},o(t){v(n.$$.fragment,t),r=!1},d(t){t&&d(s),M(n)}}}function tt(t){let e,l=t[0].title+"";return{c(){e=w(l)},l(t){e=x(t,l)},m(t,l){p(t,e,l)},p(t,s){1&s&&l!==(l=t[0].title+"")&&j(e,l)},d(t){t&&d(e)}}}function et(t){let e,l,s;return l=new Y({props:{date:t[0].end,format:"DD-MM HH:mm"}}),{c(){e=w("until "),I(l.$$.fragment)},l(t){e=x(t,"until "),H(l.$$.fragment,t)},m(t,n){p(t,e,n),T(l,t,n),s=!0},p(t,e){const s={};1&e&&(s.date=t[0].end),l.$set(s)},i(t){s||(b(l.$$.fragment,t),s=!0)},o(t){v(l.$$.fragment,t),s=!1},d(t){t&&d(e),M(l,t)}}}function lt(t){let e,l=t[9].id+"";return{c(){e=w(l)},l(t){e=x(t,l)},m(t,l){p(t,e,l)},p(t,s){1&s&&l!==(l=t[9].id+"")&&j(e,l)},d(t){t&&d(e)}}}function st(t){let e,l;return e=new B({props:{href:"/events?q="+t[9].id,$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){T(e,t,s),l=!0},p(t,l){const s={};1&l&&(s.href="/events?q="+t[9].id),4097&l&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function nt(t){var e,l,s,n;let r,a,o=(null==(n=null==(s=null==(l=null==(e=t[0])?void 0:e.places)?void 0:l[0])?void 0:s.item)?void 0:n.title)+"";return{c(){r=w("at "),a=w(o)},l(t){r=x(t,"at "),a=x(t,o)},m(t,e){p(t,r,e),p(t,a,e)},p(t,e){var l,s,n,r;1&e&&o!==(o=(null==(r=null==(n=null==(s=null==(l=t[0])?void 0:l.places)?void 0:s[0])?void 0:n.item)?void 0:r.title)+"")&&j(a,o)},d(t){t&&d(r),t&&d(a)}}}function rt(t){var e,l,s;let n,r,a,o,c,i,y,w,x,j,k,D,E,P;r=new F({props:{class:"w100pc",$$slots:{default:[tt]},$$scope:{ctx:t}}}),y=new Y({props:{class:"f2",date:t[0].start,format:"dddd HH:mm, DD/MM/YYYY"}});let q=t[0].end&&et(t),S=(null==(e=t[0])?void 0:e.tags)||[],B=[];for(let $=0;$<S.length;$+=1)B[$]=st(X(t,S,$));const U=t=>v(B[t],1,1,(()=>{B[t]=null}));return E=new R({props:{class:"bb2-solid pb0-2",place:null==(s=null==(l=t[0])?void 0:l.places)?void 0:s[0],$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){n=$("div"),I(r.$$.fragment),a=V(),o=$("div"),c=$("div"),i=$("div"),I(y.$$.fragment),w=V(),q&&q.c(),x=V(),j=$("div");for(let t=0;t<B.length;t+=1)B[t].c();k=V(),D=$("div"),I(E.$$.fragment),this.h()},l(t){n=f(t,"DIV",{slot:!0,class:!0});var e=m(n);H(r.$$.fragment,e),a=O(e),o=f(e,"DIV",{class:!0});var l=m(o);c=f(l,"DIV",{class:!0});var s=m(c);i=f(s,"DIV",{});var $=m(i);H(y.$$.fragment,$),w=O($),q&&q.l($),$.forEach(d),x=O(s),j=f(s,"DIV",{});var u=m(j);for(let n=0;n<B.length;n+=1)B[n].l(u);u.forEach(d),k=O(s),D=f(s,"DIV",{});var p=m(D);H(E.$$.fragment,p),p.forEach(d),s.forEach(d),l.forEach(d),e.forEach(d),this.h()},h(){u(c,"class","flex column cmb1"),u(o,"class","plr1 pb1 flex column-flex-start-space-between h100pc grow"),u(n,"slot","sidebar"),u(n,"class","minw22em flex column h100pc")},m(t,e){p(t,n,e),T(r,n,null),A(n,a),A(n,o),A(o,c),A(c,i),T(y,i,null),A(i,w),q&&q.m(i,null),A(c,x),A(c,j);for(let l=0;l<B.length;l+=1)B[l].m(j,null);A(c,k),A(c,D),T(E,D,null),P=!0},p(t,e){var l,s,n;const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a);const o={};if(1&e&&(o.date=t[0].start),y.$set(o),t[0].end?q?(q.p(t,e),1&e&&b(q,1)):(q=et(t),q.c(),b(q,1),q.m(i,null)):q&&(h(),v(q,1,1,(()=>{q=null})),g()),1&e){let s;for(S=(null==(l=t[0])?void 0:l.tags)||[],s=0;s<S.length;s+=1){const l=X(t,S,s);B[s]?(B[s].p(l,e),b(B[s],1)):(B[s]=st(l),B[s].c(),b(B[s],1),B[s].m(j,null))}for(h(),s=S.length;s<B.length;s+=1)U(s);g()}const c={};1&e&&(c.place=null==(n=null==(s=t[0])?void 0:s.places)?void 0:n[0]),4097&e&&(c.$$scope={dirty:e,ctx:t}),E.$set(c)},i(t){if(!P){b(r.$$.fragment,t),b(y.$$.fragment,t),b(q);for(let t=0;t<S.length;t+=1)b(B[t]);b(E.$$.fragment,t),P=!0}},o(t){v(r.$$.fragment,t),v(y.$$.fragment,t),v(q),B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)v(B[e]);v(E.$$.fragment,t),P=!1},d(t){t&&d(n),M(r),M(y),q&&q.d(),L(B,t),M(E)}}}function at(t){let e,l=t[0].description+"";return{c(){e=$("div"),this.h()},l(t){e=f(t,"DIV",{class:!0}),m(e).forEach(d),this.h()},h(){u(e,"class","pb1")},m(t,s){p(t,e,s),e.innerHTML=l},p(t,s){1&s&&l!==(l=t[0].description+"")&&(e.innerHTML=l)},d(t){t&&d(e)}}}function ot(t){let e;return{c(){e=w("Links")},l(t){e=x(t,"Links")},m(t,l){p(t,e,l)},d(t){t&&d(e)}}}function ct(t){let e,l,s,n=t[6].item.title+"";return{c(){e=$("a"),l=w(n),this.h()},l(t){e=f(t,"A",{class:!0,href:!0});var s=m(e);l=x(s,n),s.forEach(d),this.h()},h(){u(e,"class","button block text-center"),u(e,"href",s=S.safeUrl(t[6].item.url))},m(t,s){p(t,e,s),A(e,l)},p(t,r){4&r&&n!==(n=t[6].item.title+"")&&j(l,n),4&r&&s!==(s=S.safeUrl(t[6].item.url))&&u(e,"href",s)},d(t){t&&d(e)}}}function it(t){let e,l,s,n,r,a,o;l=new F({props:{class:"",$$slots:{default:[ot]},$$scope:{ctx:t}}});let c=t[2]||[],i=[];for(let $=0;$<c.length;$+=1)i[$]=ct(W(t,c,$));return a=new _({props:{profiles:t[1],columns:2}}),{c(){e=$("div"),I(l.$$.fragment),s=V(),n=$("div");for(let t=0;t<i.length;t+=1)i[t].c();r=V(),I(a.$$.fragment),this.h()},l(t){e=f(t,"DIV",{slot:!0,class:!0});var o=m(e);H(l.$$.fragment,o),s=O(o),n=f(o,"DIV",{});var c=m(n);for(let e=0;e<i.length;e+=1)i[e].l(c);c.forEach(d),r=O(o),H(a.$$.fragment,o),o.forEach(d),this.h()},h(){u(e,"slot","sidebar"),u(e,"class","cmb1")},m(t,c){p(t,e,c),T(l,e,null),A(e,s),A(e,n);for(let e=0;e<i.length;e+=1)i[e].m(n,null);A(e,r),T(a,e,null),o=!0},p(t,e){const s={};if(4096&e&&(s.$$scope={dirty:e,ctx:t}),l.$set(s),4&e){let l;for(c=t[2]||[],l=0;l<c.length;l+=1){const s=W(t,c,l);i[l]?i[l].p(s,e):(i[l]=ct(s),i[l].c(),i[l].m(n,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=c.length}const r={};2&e&&(r.profiles=t[1]),a.$set(r)},i(t){o||(b(l.$$.fragment,t),b(a.$$.fragment,t),o=!0)},o(t){v(l.$$.fragment,t),v(a.$$.fragment,t),o=!1},d(t){t&&d(e),M(l),L(i,t),M(a)}}}function $t(t){var e;let l,s,n,r,a,o;return l=new Q({props:{title:t[0].title,description:t[0].meta,image:null==(e=t[0].cover)?void 0:e[0]}}),n=new C({props:{class:"bl br bb",spacer:"0em",$$slots:{sidebar:[rt],default:[Z]},$$scope:{ctx:t}}}),a=new C({props:{class:"mt2 ",flip:!0,$$slots:{sidebar:[it],default:[at]},$$scope:{ctx:t}}}),{c(){I(l.$$.fragment),s=V(),I(n.$$.fragment),r=V(),I(a.$$.fragment)},l(t){H(l.$$.fragment,t),s=O(t),H(n.$$.fragment,t),r=O(t),H(a.$$.fragment,t)},m(t,e){T(l,t,e),p(t,s,e),T(n,t,e),p(t,r,e),T(a,t,e),o=!0},p(t,[e]){var s;const r={};1&e&&(r.title=t[0].title),1&e&&(r.description=t[0].meta),1&e&&(r.image=null==(s=t[0].cover)?void 0:s[0]),l.$set(r);const o={};4097&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const c={};4103&e&&(c.$$scope={dirty:e,ctx:t}),a.$set(c)},i(t){o||(b(l.$$.fragment,t),b(n.$$.fragment,t),b(a.$$.fragment,t),o=!0)},o(t){v(l.$$.fragment,t),v(n.$$.fragment,t),v(a.$$.fragment,t),o=!1},d(t){M(l,t),t&&d(s),M(n,t),t&&d(r),M(a,t)}}}const ft=async({fetch:t,page:e})=>({props:{events:await(await t("/events.json")).json()}});function mt(t,o,c){let i,$,f,m,d;P(t,z,(t=>c(5,d=t)));let{events:u}=o;return t.$$set=t=>{"events"in t&&c(3,u=t.events)},t.$$.update=()=>{32&t.$$.dirty&&c(4,$=d.params.id),24&t.$$.dirty&&c(0,i=u.find((t=>t.id==$))),1&t.$$.dirty&&c(1,f=(i.associated||[]).map((t=>{return o=((t,e)=>{for(var l in e||(e={}))n.call(e,l)&&a(t,l,e[l]);if(s)for(var l of s(e))r.call(e,l)&&a(t,l,e[l]);return t})({},t.item),c={id:t.id,model:t.model},e(o,l(c));var o,c}))),1&t.$$.dirty&&c(2,m=i.links||[])},[i,f,m,u,$,d]}export default class extends o{constructor(t){super(),c(this,t,mt,$t,i,{events:3})}}export{ft as load};
