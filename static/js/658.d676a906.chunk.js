"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{419:function(e,n,t){t.d(n,{Hx:function(){return i},LI:function(){return c},Y5:function(){return a},wr:function(){return s}});var r=t(340);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.params={api_key:"c49109de954741c007bf763c44eb8f9c"};var s=function(){return r.Z.get("/trending/movie/day")},a=function(e){return r.Z.get("/movie/".concat(e))},i=function(e){return r.Z.get("/movie/".concat(e,"/reviews"))},c=function(e){return r.Z.get("/search/movie",{params:{query:e}})}},658:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(861),s=t(439),a=t(757),i=t.n(a),c=t(791),u=t(689),o="Reviews_reviewsContainer__Km20f",l="Reviews_loading__J1WYu",v="Reviews_error__MknbM",f="Reviews_reviewsList__tztJ3",_="Reviews_reviewItem__VwK0+",d="Reviews_author__uXaaG",h="Reviews_content__979Ys",m="Reviews_noReviews__usOZo",w=t(419),p=t(184),x=function(){var e=(0,u.UO)().movieId,n=(0,c.useState)([]),t=(0,s.Z)(n,2),a=t[0],x=t[1],g=(0,c.useState)(null),Z=(0,s.Z)(g,2),k=Z[0],R=Z[1],N=(0,c.useState)(!1),b=(0,s.Z)(N,2),j=b[0],y=b[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),R(null),n.prev=2,n.next=5,(0,w.Hx)(e);case 5:t=n.sent,x(t.data.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),R(n.t0),console.error("Error fetching reviews:",n.t0);case 13:return n.prev=13,y(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,9,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,p.jsxs)("div",{className:o,children:[k&&(0,p.jsx)("div",{className:v,children:k.message}),j&&(0,p.jsx)("div",{className:l,children:"Loading..."}),a&&a.length>0?(0,p.jsx)("ul",{className:f,children:a.map((function(e){return(0,p.jsxs)("li",{className:_,children:[(0,p.jsx)("h3",{className:d,children:e.author}),(0,p.jsx)("p",{className:h,children:e.content})]},e.id)}))}):(0,p.jsx)("div",{className:m,children:"No reviews yet"})]})}}}]);
//# sourceMappingURL=658.d676a906.chunk.js.map