import{S as q,i as V,s as A,k as d,q as K,a as B,l as _,m as p,r as P,h as g,c as y,n as o,b as I,C as h,u as j,D as C,K as E,y as b,z as T,A as x,g as v,d as S,B as $}from"../chunks/index.58ab55ac.js";function k(c){let e,a;return{c(){e=d("img"),this.h()},l(i){e=_(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","rounded max-h-[100%] max-w-[100%]"),E(e.src,a=c[2])||o(e,"src",a),o(e,"alt",c[3])},m(i,l){I(i,e,l)},p(i,l){l&4&&!E(e.src,a=i[2])&&o(e,"src",a),l&8&&o(e,"alt",i[3])},d(i){i&&g(e)}}}function z(c){let e,a,i,l,u,r,t=c[2]!==void 0&&k(c);return{c(){e=d("div"),a=d("a"),i=d("h3"),l=K(c[1]),u=B(),r=d("div"),t&&t.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var m=p(e);a=_(m,"A",{class:!0,href:!0});var s=p(a);i=_(s,"H3",{class:!0});var f=p(i);l=P(f,c[1]),f.forEach(g),u=y(s),r=_(s,"DIV",{class:!0});var D=p(r);t&&t.l(D),D.forEach(g),s.forEach(g),m.forEach(g),this.h()},h(){o(i,"class","text-2xl"),o(r,"class","card"),o(a,"class","flex flex-col gap-4"),o(a,"href",c[0]),o(e,"class","col-span-1 flex flex-col gap-8")},m(n,m){I(n,e,m),h(e,a),h(a,i),h(i,l),h(a,u),h(a,r),t&&t.m(r,null)},p(n,[m]){m&2&&j(l,n[1]),n[2]!==void 0?t?t.p(n,m):(t=k(n),t.c(),t.m(r,null)):t&&(t.d(1),t=null),m&1&&o(a,"href",n[0])},i:C,o:C,d(n){n&&g(e),t&&t.d()}}}function F(c,e,a){let{url:i}=e,{title:l}=e,{image:u}=e,{altText:r}=e;return c.$$set=t=>{"url"in t&&a(0,i=t.url),"title"in t&&a(1,l=t.title),"image"in t&&a(2,u=t.image),"altText"in t&&a(3,r=t.altText)},[i,l,u,r]}class w extends q{constructor(e){super(),V(this,e,F,z,A,{url:0,title:1,image:2,altText:3})}}function G(c){let e,a,i,l,u,r,t,n,m;return a=new w({props:{altText:"tic tac toe board",image:"/images/gameplay.png",title:"Tic Tac Toe",url:"https://abumsoo.github.io/tic-tac-toe"}}),l=new w({props:{altText:"what the bin gameplay",image:"/images/whatTheBin.png",title:"What The Bin",url:"https://github.com/abumsoo/csci1300-whatthebin"}}),r=new w({props:{altText:"digital library UI",image:"/images/digilib.png",title:"Digital Library",url:"https://abumsoo.github.io/library"}}),n=new w({props:{altText:"Command line interface for SSB4 BST",image:"/images/ssb4.png",title:"Super Smash Bros 4 BST",url:"https://github.com/abumsoo/Kim_CSCI2270_FinalProject"}}),{c(){e=d("div"),b(a.$$.fragment),i=B(),b(l.$$.fragment),u=B(),b(r.$$.fragment),t=B(),b(n.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var f=p(e);T(a.$$.fragment,f),i=y(f),T(l.$$.fragment,f),u=y(f),T(r.$$.fragment,f),t=y(f),T(n.$$.fragment,f),f.forEach(g),this.h()},h(){o(e,"class","col-span-1 flex flex-col gap-8")},m(s,f){I(s,e,f),x(a,e,null),h(e,i),x(l,e,null),h(e,u),x(r,e,null),h(e,t),x(n,e,null),m=!0},p:C,i(s){m||(v(a.$$.fragment,s),v(l.$$.fragment,s),v(r.$$.fragment,s),v(n.$$.fragment,s),m=!0)},o(s){S(a.$$.fragment,s),S(l.$$.fragment,s),S(r.$$.fragment,s),S(n.$$.fragment,s),m=!1},d(s){s&&g(e),$(a),$(l),$(r),$(n)}}}class L extends q{constructor(e){super(),V(this,e,null,G,A,{})}}export{L as component};
