"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{134:function(e,t,r){r.d(t,{Hx:function(){return s},LI:function(){return c},Y5:function(){return i},wr:function(){return a}});var n=r(340);n.Z.defaults.baseURL="https://api.themoviedb.org/3",n.Z.defaults.params={api_key:"c49109de954741c007bf763c44eb8f9c"};var a=function(){return n.Z.get("/trending/movie/day")},i=function(e){return n.Z.get("/movie/".concat(e))},s=function(e){return n.Z.get("/movie/".concat(e,"/reviews"))},c=function(e){return n.Z.get("/search/movie",{params:{query:e}})}},305:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),i=r(757),s=r.n(i),c=r(791),o=r(689),u=r(87),l="MovieDetails_container__QvgHL",v="MovieDetails_error__EL+MU",m="MovieDetails_loading__JhSsF",f="MovieDetails_movieDetails__r0JTz",_="MovieDetails_movieTitle__K3ZxU",d="MovieDetails_movieImage__1bb8W",h="MovieDetails_movieOverview__zLmqx",p="MovieDetails_button__-UUYF",x=r(134),g=r(184),b=function(){var e=(0,o.UO)().movieId,t=(0,o.s0)(),r=(0,c.useState)(null),i=(0,a.Z)(r,2),b=i[0],w=i[1],j=(0,c.useState)(!0),k=(0,a.Z)(j,2),Z=k[0],N=k[1],D=(0,c.useState)(null),M=(0,a.Z)(D,2),L=M[0],U=M[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.prev=1,t.next=4,(0,x.Y5)(e);case 4:r=t.sent,w(r.data),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),U(t.t0),console.error("Error fetching movie details:",t.t0);case 12:return t.prev=12,N(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,g.jsxs)("div",{className:l,children:[L&&(0,g.jsx)("div",{className:v,children:L.message}),Z&&(0,g.jsx)("div",{className:m,children:"Loading..."}),!Z&&b&&(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("button",{onClick:function(){return t(-1)},className:p,children:"Go back"}),(0,g.jsx)("h1",{className:_,children:b.title}),(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(b.poster_path),alt:b.title,className:d}),(0,g.jsx)("p",{className:h,children:b.overview}),(0,g.jsx)(u.OL,{to:"reviews",className:p,children:"Reviews"}),(0,g.jsx)(u.OL,{to:"cast",className:p,children:"Cast"}),(0,g.jsx)(o.j3,{})]})]})}}}]);
//# sourceMappingURL=305.8d3a0180.chunk.js.map