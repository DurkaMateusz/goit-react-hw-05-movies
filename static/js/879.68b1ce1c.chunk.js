"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{879:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=a(689),n=a(861),c=a(439),s=a(757),i=a.n(s),o=a(340),h=a(791),u=function(t){var e=(0,h.useState)(null),a=(0,c.Z)(e,2),r=a[0],s=a[1],u=(0,h.useState)(!1),d=(0,c.Z)(u,2),l=d[0],p=d[1],_=(0,h.useState)(null),f=(0,c.Z)(_,2),m=f[0],v=f[1];return(0,h.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,o.Z.get(t);case 4:a=e.sent,r=a.data,s(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v(e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();t&&e()}),[t]),{data:r,isLoading:l,error:m}},d={castContainer:"Cast_castContainer__86M6b",castItem:"Cast_castItem__h+6ey",castImage:"Cast_castImage__JrQlW",castName:"Cast_castName__Yd-Bt",castCharacter:"Cast_castCharacter__3Ntd4",noPhoto:"Cast_noPhoto__bWihi"},l=a(184),p=function(){var t=(0,r.UO)().movieId,e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=c49109de954741c007bf763c44eb8f9c"),a=u(e),n=a.data,c=a.isLoading,s=a.error;return(0,l.jsxs)("div",{children:[s&&(0,l.jsx)("div",{children:s.message}),c&&(0,l.jsx)("div",{children:"Loading..."}),n&&(n.cast.length>0?(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:d.castList,children:n.cast.map((function(t){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:t.name}),(0,l.jsx)("p",{children:t.character}),t.profile_path?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:""}):(0,l.jsx)("p",{children:"No photo"})]},t.id)}))})}):(0,l.jsx)("div",{children:"No cast yet"}))]})}}}]);
//# sourceMappingURL=879.68b1ce1c.chunk.js.map