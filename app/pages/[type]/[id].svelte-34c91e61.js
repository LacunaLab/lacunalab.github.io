import{S as s,i as e,s as t,e as l,t as r,k as n,c as o,a,g as i,n as c,d as f,b as u,f as d,F as p,h as v,j as m,m as $,E as h,Y as g,o as b,v as y,r as w,w as E,Q as x,T as j,z as k}from"../../chunks/vendor-d8848aa7.js";import{T as I,E as D}from"../../chunks/Events-eacf01a0.js";import{p as V}from"../../chunks/stores-fd2cc8b4.js";import{T}from"../../chunks/Title-56b8e34e.js";import{H}from"../../chunks/Head-3a8bf723.js";import{u as L}from"../../chunks/utils-7b57918c.js";import{g as M}from"../../chunks/navigation-20968cc5.js";import{E as z}from"../../chunks/EzeMedia-f0572190.js";import"../../chunks/Timestamp-94a97e80.js";import"../../chunks/singletons-bb9012b7.js";import"../../chunks/_stores-05686e17.js";function A(s,e,t){const l=s.slice();return l[8]=e[t],l}function U(s){var e;let t,l=(null==(e=s[0])?void 0:e.name)+"";return{c(){t=r(l)},l(s){t=i(s,l)},m(s,e){d(s,t,e)},p(s,e){var r;1&e&&l!==(l=(null==(r=s[0])?void 0:r.name)+"")&&v(t,l)},d(s){s&&f(t)}}}function _(s){var e;let t,l=(null==(e=s[0])?void 0:e.type)+"";return{c(){t=r(l)},l(s){t=i(s,l)},m(s,e){d(s,t,e)},p(s,e){var r;1&e&&l!==(l=(null==(r=s[0])?void 0:r.type)+"")&&v(t,l)},d(s){s&&f(t)}}}function q(s){var e,t;let m,$,h,g,b=(null==(t=null==(e=s[8])?void 0:e.item)?void 0:t.title)+"";return{c(){m=l("a"),$=r(b),h=n(),this.h()},l(s){m=o(s,"A",{class:!0,target:!0,href:!0});var e=a(m);$=i(e,b),h=c(e),e.forEach(f),this.h()},h(){var e,t;u(m,"class","button wrap flex maxw100pc row-center-center whitespace-normal"),u(m,"target","_blank"),u(m,"href",g=L.safeUrl(null==(t=null==(e=s[8])?void 0:e.item)?void 0:t.url))},m(s,e){d(s,m,e),p(m,$),p(m,h)},p(s,e){var t,l,r,n;1&e&&b!==(b=(null==(l=null==(t=s[8])?void 0:t.item)?void 0:l.title)+"")&&v($,b),1&e&&g!==(g=L.safeUrl(null==(n=null==(r=s[8])?void 0:r.item)?void 0:n.url))&&u(m,"href",g)},d(s){s&&f(m)}}}function C(s){var e,t,j,k,V,L,M,C,F,Q;let R,S,Y,B,G,J,K,N,O,P,W,X,Z,ss,es,ts,ls,rs,ns,os,as,is,cs,fs,us,ds,ps=((null==(e=s[0])?void 0:e.profession)||"")+"",vs=((null==(t=s[0])?void 0:t.biography)||"")+"";R=new H({props:{title:(null==(j=s[0])?void 0:j.name)+((null==(k=s[0])?void 0:k.profession)?" | "+s[0].profession:""),description:(null==(V=s[0])?void 0:V.biography)||"",image:null==(M=null==(L=s[0])?void 0:L.cover)?void 0:M[0]}}),G=new T({props:{class:"",$$slots:{default:[U]},$$scope:{ctx:s}}}),N=new z({props:{file:null==(F=null==(C=s[0])?void 0:C.picture)?void 0:F[0],root:"/media/profiles",format:"400x0x90"}}),X=new I({props:{href:s[2],$$slots:{default:[_]},$$scope:{ctx:s}}});let ms=(null==(Q=s[0])?void 0:Q.links)||[],$s=[];for(let l=0;l<ms.length;l+=1)$s[l]=q(A(s,ms,l));return us=new D({props:{events:s[1],columns:!1,format:"600x0x90",stretch:"width"}}),{c(){m(R.$$.fragment),S=n(),Y=l("div"),B=l("div"),m(G.$$.fragment),J=n(),K=l("div"),m(N.$$.fragment),P=n(),W=l("div"),m(X.$$.fragment),Z=n(),ss=l("div"),es=r(ps),ts=n(),ls=l("div");for(let s=0;s<$s.length;s+=1)$s[s].c();rs=n(),ns=l("div"),os=n(),as=l("article"),is=l("div"),cs=n(),fs=l("div"),m(us.$$.fragment),this.h()},l(s){$(R.$$.fragment,s),S=c(s),Y=o(s,"DIV",{class:!0});var e=a(Y);B=o(e,"DIV",{class:!0});var t=a(B);$(G.$$.fragment,t),J=c(t),K=o(t,"DIV",{class:!0});var l=a(K);$(N.$$.fragment,l),l.forEach(f),P=c(t),W=o(t,"DIV",{});var r=a(W);$(X.$$.fragment,r),r.forEach(f),Z=c(t),ss=o(t,"DIV",{class:!0});var n=a(ss);es=i(n,ps),n.forEach(f),ts=c(t),ls=o(t,"DIV",{class:!0});var u=a(ls);for(let o=0;o<$s.length;o+=1)$s[o].l(u);u.forEach(f),t.forEach(f),rs=c(e),ns=o(e,"DIV",{class:!0}),a(ns).forEach(f),os=c(e),as=o(e,"ARTICLE",{class:!0});var d=a(as);is=o(d,"DIV",{style:!0,class:!0}),a(is).forEach(f),cs=c(d),fs=o(d,"DIV",{});var p=a(fs);$(us.$$.fragment,p),p.forEach(f),d.forEach(f),e.forEach(f),this.h()},h(){var e,t;u(K,"class",O="border profile-"+(null==(e=s[0])?void 0:e.type)+" profile-"+(null==(t=s[0])?void 0:t["picture-style"])),u(ss,"class","mt1"),u(ls,"class","mt1 cmb1"),u(B,"class","basis10pc grow flex column-stretch-flex-start"),u(ns,"class","w1em h1em"),h(is,"column-count","2"),u(is,"class","mb2 mt1"),g(fs,"none",s[1].length<=0),u(as,"class","basis60pc flex grow column ptb1 mt0 "),u(Y,"class","flex row wrap")},m(s,e){b(R,s,e),d(s,S,e),d(s,Y,e),p(Y,B),b(G,B,null),p(B,J),p(B,K),b(N,K,null),p(B,P),p(B,W),b(X,W,null),p(B,Z),p(B,ss),p(ss,es),p(B,ts),p(B,ls);for(let t=0;t<$s.length;t+=1)$s[t].m(ls,null);p(Y,rs),p(Y,ns),p(Y,os),p(Y,as),p(as,is),is.innerHTML=vs,p(as,cs),p(as,fs),b(us,fs,null),ds=!0},p(s,[e]){var t,l,r,n,o,a,i,c,f,d,p,m;const $={};1&e&&($.title=(null==(t=s[0])?void 0:t.name)+((null==(l=s[0])?void 0:l.profession)?" | "+s[0].profession:"")),1&e&&($.description=(null==(r=s[0])?void 0:r.biography)||""),1&e&&($.image=null==(o=null==(n=s[0])?void 0:n.cover)?void 0:o[0]),R.$set($);const h={};2049&e&&(h.$$scope={dirty:e,ctx:s}),G.$set(h);const b={};1&e&&(b.file=null==(i=null==(a=s[0])?void 0:a.picture)?void 0:i[0]),N.$set(b),(!ds||1&e&&O!==(O="border profile-"+(null==(c=s[0])?void 0:c.type)+" profile-"+(null==(f=s[0])?void 0:f["picture-style"])))&&u(K,"class",O);const y={};if(4&e&&(y.href=s[2]),2049&e&&(y.$$scope={dirty:e,ctx:s}),X.$set(y),(!ds||1&e)&&ps!==(ps=((null==(d=s[0])?void 0:d.profession)||"")+"")&&v(es,ps),1&e){let t;for(ms=(null==(p=s[0])?void 0:p.links)||[],t=0;t<ms.length;t+=1){const l=A(s,ms,t);$s[t]?$s[t].p(l,e):($s[t]=q(l),$s[t].c(),$s[t].m(ls,null))}for(;t<$s.length;t+=1)$s[t].d(1);$s.length=ms.length}(!ds||1&e)&&vs!==(vs=((null==(m=s[0])?void 0:m.biography)||"")+"")&&(is.innerHTML=vs);const w={};2&e&&(w.events=s[1]),us.$set(w),2&e&&g(fs,"none",s[1].length<=0)},i(s){ds||(y(R.$$.fragment,s),y(G.$$.fragment,s),y(N.$$.fragment,s),y(X.$$.fragment,s),y(us.$$.fragment,s),ds=!0)},o(s){w(R.$$.fragment,s),w(G.$$.fragment,s),w(N.$$.fragment,s),w(X.$$.fragment,s),w(us.$$.fragment,s),ds=!1},d(s){E(R,s),s&&f(S),s&&f(Y),E(G),E(N),E(X),x($s,s),E(us)}}}const F=async({fetch:s,page:e})=>({props:{profiles:await(await s("/profiles.json")).json(),events:(await(await s("/events.json")).json()).sort(((s,e)=>e.start-s.start))}});function Q(s,e,t){let l,r,n,o,a,i;j(s,V,(s=>t(6,i=s)));let{profiles:c}=e,{events:f}=e;return k((async s=>{"events"==o&&M(`/activities/${n}`)})),s.$$set=s=>{"profiles"in s&&t(3,c=s.profiles),"events"in s&&t(4,f=s.events)},s.$$.update=()=>{64&s.$$.dirty&&t(5,n=i.params.id),40&s.$$.dirty&&t(0,l=c.find((s=>s.id==n))),17&s.$$.dirty&&t(1,r=(f||[]).filter((s=>{if(!l)return;let e=!1;return(s.associated||[]).forEach((s=>{console.log(s),e=s.id==l.id||e})),e}))),64&s.$$.dirty&&(o=i.params.type),1&s.$$.dirty&&t(2,a="member"==(null==l?void 0:l.type)?`/members?q=${null==l?void 0:l.type}`:"/friends")},[l,r,a,c,f,n,i]}export default class extends s{constructor(s){super(),e(this,s,Q,C,t,{profiles:3,events:4})}}export{F as load};
