import{S as s,i as a,s as e,e as t,t as l,k as r,c,a as o,g as i,d as n,n as h,b as f,f as m,F as d,h as p,M as u,T as b}from"../chunks/vendor-60623916.js";import{I as g}from"../chunks/_stores-88dd5ace.js";function k(s){let a,e,b,g,k,x,v,j,E,A,q=s[1].email+"",I=s[1].address.split("\n").splice(1,3).join(", ")+"";return{c(){a=t("div"),e=t("a"),b=l(q),k=r(),x=t("span"),v=r(),j=t("a"),E=l(I),this.h()},l(s){a=c(s,"DIV",{class:!0});var t=o(a);e=c(t,"A",{class:!0,href:!0});var l=o(e);b=i(l,q),l.forEach(n),k=h(t),x=c(t,"SPAN",{class:!0}),o(x).forEach(n),v=h(t),j=c(t,"A",{target:!0,class:!0,href:!0});var r=o(j);E=i(r,I),r.forEach(n),t.forEach(n),this.h()},h(){f(e,"class",s[0]),f(e,"href",g="mailto:"+s[1].email),f(x,"class","flex w1em"),f(j,"target","_blank"),f(j,"class",s[0]),f(j,"href",A=`https://maps.google.com?q=${s[1].address}`),f(a,"class","flex column-flex-start-flex-start mtb2 cmb1")},m(s,t){m(s,a,t),d(a,e),d(e,b),d(a,k),d(a,x),d(a,v),d(a,j),d(j,E)},p(s,[a]){2&a&&q!==(q=s[1].email+"")&&p(b,q),1&a&&f(e,"class",s[0]),2&a&&g!==(g="mailto:"+s[1].email)&&f(e,"href",g),2&a&&I!==(I=s[1].address.split("\n").splice(1,3).join(", ")+"")&&p(E,I),1&a&&f(j,"class",s[0]),2&a&&A!==(A=`https://maps.google.com?q=${s[1].address}`)&&f(j,"href",A)},i:u,o:u,d(s){s&&n(a)}}}function x(s,a,e){let t,l;return b(s,g,(s=>e(1,l=s))),e(0,t="inline-block button"),["inline-block button",l]}export default class extends s{constructor(s){super(),a(this,s,x,k,e,{})}}
