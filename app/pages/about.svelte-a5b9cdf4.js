import{S as s,i as e,s as t,e as a,c as l,a as n,d as o,b as r,f as i,j as c,k as f,t as d,m as u,n as m,g as h,o as p,F as v,h as $,v as g,r as b,w as x,Q as k,T as w}from"../chunks/vendor-d8848aa7.js";import{I as j}from"../chunks/_stores-05686e17.js";import{T as E}from"../chunks/Title-56b8e34e.js";import{H as A}from"../chunks/Head-3a8bf723.js";function L(s,e,t){const a=s.slice();return a[5]=e[t],a[7]=t,a}function T(s){let e;return{c(){e=d("Lacuna Lab")},l(s){e=h(s,"Lacuna Lab")},m(s,t){i(s,e,t)},d(s){s&&o(e)}}}function y(s){var e,t;let c,f=(null==(t=null==(e=s[5])?void 0:e.item)?void 0:t.text)+"";return{c(){c=a("div"),this.h()},l(s){c=l(s,"DIV",{class:!0}),n(c).forEach(o),this.h()},h(){r(c,"class","basis40pc grow minw20em mr2")},m(s,e){i(s,c,e),c.innerHTML=f},p(s,e){var t,a;2&e&&f!==(f=(null==(a=null==(t=s[5])?void 0:t.item)?void 0:a.text)+"")&&(c.innerHTML=f)},d(s){s&&o(c)}}}function H(s){var e,t,w,j,H,I;let D,V,_,q,M,P,W,B,F,N,Q,S,z,C,G,J,K,O,R,U,X,Y,Z=s[3].email+"",ss=s[3].address.split("\n").splice(1,3).join(", ")+"",es=((null==(e=s[3])?void 0:e.telephone)||"")+"";D=new A({props:{title:"Non-Profit-Association founded in 2015, Berlin",description:(null==(j=null==(w=null==(t=s[1])?void 0:t[0])?void 0:w.item)?void 0:j.text)||"About us",image:null==(I=null==(H=s[0])?void 0:H.covers)?void 0:I[0]}}),_=new E({props:{$$slots:{default:[T]},$$scope:{ctx:s}}});let ts=s[1],as=[];for(let a=0;a<ts.length;a+=1)as[a]=y(L(s,ts,a));return{c(){c(D.$$.fragment),V=f(),c(_.$$.fragment),q=f(),M=a("div");for(let s=0;s<as.length;s+=1)as[s].c();P=f(),W=a("div"),B=a("p"),F=d("We can be contacted at:"),N=f(),Q=a("a"),S=d(Z),C=f(),G=a("a"),J=d(ss),O=f(),R=a("a"),U=d(es),this.h()},l(s){u(D.$$.fragment,s),V=m(s),u(_.$$.fragment,s),q=m(s),M=l(s,"DIV",{class:!0});var e=n(M);for(let l=0;l<as.length;l+=1)as[l].l(e);P=m(e),W=l(e,"DIV",{class:!0});var t=n(W);B=l(t,"P",{});var a=n(B);F=h(a,"We can be contacted at:"),a.forEach(o),N=m(t),Q=l(t,"A",{class:!0,href:!0});var r=n(Q);S=h(r,Z),r.forEach(o),C=m(t),G=l(t,"A",{target:!0,class:!0,href:!0});var i=n(G);J=h(i,ss),i.forEach(o),O=m(t),R=l(t,"A",{target:!0,class:!0,href:!0});var c=n(R);U=h(c,es),c.forEach(o),t.forEach(o),e.forEach(o),this.h()},h(){var e;r(Q,"class",s[2]),r(Q,"href",z="mailto:"+s[3].email),r(G,"target","_blank"),r(G,"class",s[2]),r(G,"href",K=`https://maps.google.com?q=${s[3].address}`),r(R,"target","_blank"),r(R,"class",s[2]),r(R,"href",X=`tel:${null==(e=s[3])?void 0:e.telephone}`),r(W,"class","basis40pc grow minw20em mr2 flex column-flex-start-flex-start"),r(M,"class","flex row wrap mtb1")},m(s,e){p(D,s,e),i(s,V,e),p(_,s,e),i(s,q,e),i(s,M,e);for(let t=0;t<as.length;t+=1)as[t].m(M,null);v(M,P),v(M,W),v(W,B),v(B,F),v(W,N),v(W,Q),v(Q,S),v(W,C),v(W,G),v(G,J),v(W,O),v(W,R),v(R,U),Y=!0},p(s,[e]){var t,a,l,n,o,i,c;const f={};2&e&&(f.description=(null==(l=null==(a=null==(t=s[1])?void 0:t[0])?void 0:a.item)?void 0:l.text)||"About us"),1&e&&(f.image=null==(o=null==(n=s[0])?void 0:n.covers)?void 0:o[0]),D.$set(f);const d={};if(256&e&&(d.$$scope={dirty:e,ctx:s}),_.$set(d),2&e){let t;for(ts=s[1],t=0;t<ts.length;t+=1){const a=L(s,ts,t);as[t]?as[t].p(a,e):(as[t]=y(a),as[t].c(),as[t].m(M,P))}for(;t<as.length;t+=1)as[t].d(1);as.length=ts.length}(!Y||8&e)&&Z!==(Z=s[3].email+"")&&$(S,Z),(!Y||4&e)&&r(Q,"class",s[2]),(!Y||8&e&&z!==(z="mailto:"+s[3].email))&&r(Q,"href",z),(!Y||8&e)&&ss!==(ss=s[3].address.split("\n").splice(1,3).join(", ")+"")&&$(J,ss),(!Y||4&e)&&r(G,"class",s[2]),(!Y||8&e&&K!==(K=`https://maps.google.com?q=${s[3].address}`))&&r(G,"href",K),(!Y||8&e)&&es!==(es=((null==(i=s[3])?void 0:i.telephone)||"")+"")&&$(U,es),(!Y||4&e)&&r(R,"class",s[2]),(!Y||8&e&&X!==(X=`tel:${null==(c=s[3])?void 0:c.telephone}`))&&r(R,"href",X)},i(s){Y||(g(D.$$.fragment,s),g(_.$$.fragment,s),Y=!0)},o(s){b(D.$$.fragment,s),b(_.$$.fragment,s),Y=!1},d(s){x(D,s),s&&o(V),x(_,s),s&&o(q),s&&o(M),k(as,s)}}}const I=async({fetch:s,page:e})=>({props:{infos:await(await s("/infos.json")).json()}});function D(s,e,t){let a,l,n,o;w(s,j,(s=>t(3,o=s)));let{infos:r}=e;return s.$$set=s=>{"infos"in s&&t(4,r=s.infos)},s.$$.update=()=>{16&s.$$.dirty&&t(0,a=r[0]),1&s.$$.dirty&&t(1,l=(null==a?void 0:a.about)||[])},t(2,n="bb2-solid unclickable inline-block mb1"),[a,l,"bb2-solid unclickable inline-block mb1",o,r]}export default class extends s{constructor(s){super(),e(this,s,D,H,t,{infos:4})}}export{I as load};