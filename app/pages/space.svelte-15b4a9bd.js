import{S as t,i as e,s,j as n,m as o,o as l,v as r,r as a,w as i,k as f,l as c,n as u,f as $,u as d,d as m,Q as p,B as h,e as g,c as v,a as j,b as x,E as k,L as w,F as b,t as y,g as S}from"../chunks/vendor-811c4217.js";import{E}from"../chunks/EzeMedia-585cc3dd.js";import{S as B}from"../chunks/Sidebar-c1720963.js";import{H as z}from"../chunks/Head-fdf0f33f.js";import{T as A}from"../chunks/Title-03f628f3.js";import"../chunks/_stores-76a31f1a.js";import"../chunks/utils-39f3f74c.js";function D(t,e,s){const n=t.slice();return n[4]=e[s],n[6]=s,n}function H(t){var e,s,c;let d,p,h,w;return p=new E({props:{file:null==(c=null==(s=null==(e=t[4])?void 0:e.item)?void 0:s.media)?void 0:c[0],root:"/media/space"}}),{c(){d=g("div"),n(p.$$.fragment),h=f(),this.h()},l(t){d=v(t,"DIV",{class:!0,style:!0});var e=j(d);o(p.$$.fragment,e),e.forEach(m),h=u(t),this.h()},h(){x(d,"class","border"),k(d,"margin-top","calc( var(--stroke-width) * -1) ")},m(t,e){$(t,d,e),l(p,d,null),$(t,h,e),w=!0},p(t,e){var s,n,o;const l={};1&e&&(l.file=null==(o=null==(n=null==(s=t[4])?void 0:s.item)?void 0:n.media)?void 0:o[0]),p.$set(l)},i(t){w||(r(p.$$.fragment,t),w=!0)},o(t){a(p.$$.fragment,t),w=!1},d(t){t&&m(d),i(p),t&&m(h)}}}function I(t){let e;return{c(){e=y("Space")},l(t){e=S(t,"Space")},m(t,s){$(t,e,s)},d(t){t&&m(e)}}}function T(t){var e,s;let c,d,p,h,k,y=(null==(s=null==(e=t[4])?void 0:e.item)?void 0:s.text)+"",S=0==t[6]&&function(t){let e,s;return e=new A({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){a(e.$$.fragment,t),s=!1},d(t){i(e,t)}}}(t);return{c(){c=g("div"),S&&S.c(),d=f(),h=f(),this.h()},l(t){c=v(t,"DIV",{slot:!0});var e=j(c);S&&S.l(e),d=u(e),h=u(e),e.forEach(m),this.h()},h(){p=new w(h),x(c,"slot","sidebar")},m(t,e){$(t,c,e),S&&S.m(c,null),b(c,d),p.m(y,c),b(c,h),k=!0},p(t,e){var s,n;(!k||1&e)&&y!==(y=(null==(n=null==(s=t[4])?void 0:s.item)?void 0:n.text)+"")&&p.p(y)},i(t){k||(r(S),k=!0)},o(t){a(S),k=!1},d(t){t&&m(c),S&&S.d()}}}function V(t){let e,s;return e=new B({props:{flip:t[6]%2!=0,$$slots:{sidebar:[T],default:[H]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};129&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){a(e.$$.fragment,t),s=!1},d(t){i(e,t)}}}function F(t){var e,s,g,v;let j,x,k,w;j=new z({props:{title:"Space | Kreuzberg, Berlin",description:(null==(g=null==(s=null==(e=t[0])?void 0:e[0])?void 0:s.item)?void 0:g.text)||"About us",image:null==(v=t[1])?void 0:v[0]}});let b=t[0]||[],y=[];for(let n=0;n<b.length;n+=1)y[n]=V(D(t,b,n));const S=t=>a(y[t],1,1,(()=>{y[t]=null}));return{c(){n(j.$$.fragment),x=f();for(let t=0;t<y.length;t+=1)y[t].c();k=c()},l(t){o(j.$$.fragment,t),x=u(t);for(let e=0;e<y.length;e+=1)y[e].l(t);k=c()},m(t,e){l(j,t,e),$(t,x,e);for(let s=0;s<y.length;s+=1)y[s].m(t,e);$(t,k,e),w=!0},p(t,[e]){var s,n,o,l;const a={};if(1&e&&(a.description=(null==(o=null==(n=null==(s=t[0])?void 0:s[0])?void 0:n.item)?void 0:o.text)||"About us"),2&e&&(a.image=null==(l=t[1])?void 0:l[0]),j.$set(a),1&e){let s;for(b=t[0]||[],s=0;s<b.length;s+=1){const n=D(t,b,s);y[s]?(y[s].p(n,e),r(y[s],1)):(y[s]=V(n),y[s].c(),r(y[s],1),y[s].m(k.parentNode,k))}for(h(),s=b.length;s<y.length;s+=1)S(s);d()}},i(t){if(!w){r(j.$$.fragment,t);for(let t=0;t<b.length;t+=1)r(y[t]);w=!0}},o(t){a(j.$$.fragment,t),y=y.filter(Boolean);for(let e=0;e<y.length;e+=1)a(y[e]);w=!1},d(t){i(j,t),t&&m(x),p(y,t),t&&m(k)}}}const K=async({fetch:t,page:e})=>({props:{infos:await(await t("/infos.json")).json()}});function L(t,e,s){let n,o,l,{infos:r}=e;return t.$$set=t=>{"infos"in t&&s(2,r=t.infos)},t.$$.update=()=>{4&t.$$.dirty&&s(3,n=r[0]),8&t.$$.dirty&&s(0,o=n["space-sections"]),8&t.$$.dirty&&s(1,l=n["space-photos"])},[o,l,r,n]}export default class extends t{constructor(t){super(),e(this,t,L,F,s,{infos:2})}}export{K as load};
