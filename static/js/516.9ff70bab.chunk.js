"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[516],{139:function(t,n,r){r.d(n,{$0:function(){return s},Dx:function(){return p},TX:function(){return f},gb:function(){return d}});var e,a,i,c,u=r(168),o=r(6444),s=o.ZP.section(e||(e=(0,u.Z)(["\n\tpadding: 60px 0;\n"]))),p=o.ZP.h1(a||(a=(0,u.Z)(['\n\tfont-weight: 600;\n\tfont-size: 26px;\n\twhite-space: nowrap;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row-reverse;\n\tcolumn-gap: 20px;\n\tmargin-bottom: 25px;\n\n\t&::before {\n\t\tcontent: "";\n\t\tdisplay: inline-block;\n\t\twidth: 100%;\n\t\theight: 1px;\n\t\tbackground-color: var(--accent);\n\t\ttransform: translateY(2px);\n\t}\n']))),f=o.ZP.p(i||(i=(0,u.Z)(["\n\tfont-weight: 600;\n\tfont-size: 22px;\n\tcolor: var(--accent);\n"]))),d=o.ZP.p(c||(c=(0,u.Z)(["\n\tfont-size: 20px;\n\tcolor: var(--gray);\n"])))},7368:function(t,n,r){r.d(n,{FS:function(){return f},aV:function(){return s},ck:function(){return p},mC:function(){return d}});var e,a,i,c,u=r(168),o=r(6444),s=o.ZP.ul(e||(e=(0,u.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tcolumn-gap: 20px;\n\trow-gap: 40px;\n"]))),p=o.ZP.li(a||(a=(0,u.Z)(["\n\twidth: 232px;\n\tflex-basis: calc((100% - 20px * (5 - 1)) / 5);\n"]))),f=o.ZP.div(i||(i=(0,u.Z)(["\n\theight: 350px;\n\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 10px;\n\t}\n"]))),d=o.ZP.h2(c||(c=(0,u.Z)(["\n\tfont-weight: 600;\n\tmargin-top: 8px;\n\tline-height: 1.5;\n\tpadding-right: 10px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n"])))},4118:function(t,n,r){r.d(n,{y:function(){return e}});var e="https://image.tmdb.org/t/p/w500"},4322:function(t,n,r){r.d(n,{Q:function(){return e}});var e={idle:"idle",loading:"loading",success:"success",error:"error"}},7516:function(t,n,r){r.r(n),r.d(n,{default:function(){return m}});var e=r(5861),a=r(9439),i=r(7757),c=r.n(i),u=r(2791),o=r(8565),s=r(4322),p=r(1087),f=r(7689),d=r(4118),l=r(9126),h=r(7368),x=r(184),g=function(t){var n=t.movies,r=(0,f.TH)();return(0,x.jsx)(h.aV,{children:n.map((function(t){var n=t.id,e=t.img,a=t.title;return(0,x.jsx)(h.ck,{children:(0,x.jsxs)(p.rU,{to:"movies/".concat(n),state:{from:r},children:[(0,x.jsx)(h.FS,{children:e?(0,x.jsx)("img",{src:"".concat(d.y)+e,alt:a,width:232,height:350}):(0,x.jsx)("img",{src:l,alt:"Plug",width:232,height:350})}),(0,x.jsx)(h.mC,{children:a})]})},n)}))})},v=r(139),m=function(){var t=(0,u.useState)([]),n=(0,a.Z)(t,2),r=n[0],i=n[1],p=(0,u.useState)(s.Q.idle),f=(0,a.Z)(p,2),d=f[0],l=f[1];(0,u.useEffect)((function(){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(s.Q.loading),t.prev=1,t.next=4,(0,o.wr)();case 4:n=t.sent,h(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),l(s.Q.error);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var h=function(t){var n=t.map((function(t){return{id:t.id,img:t.poster_path,title:t.original_title}}));i(n),l(s.Q.success)};return(0,x.jsxs)(v.$0,{children:[d===s.Q.error&&(0,x.jsx)(v.TX,{children:"NOT FOUND"}),d===s.Q.loading&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v.Dx,{children:"Trending today"}),(0,x.jsx)(v.gb,{children:"Loading..."})]}),d===s.Q.success&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v.Dx,{children:"Trending today"}),(0,x.jsx)(g,{movies:r})]})]})}},8565:function(t,n,r){r.d(n,{IV:function(){return d},Sg:function(){return f},bI:function(){return p},wH:function(){return l},wr:function(){return s}});var e=r(5861),a=r(7757),i=r.n(a),c=r(1912),u="bf2393b8354e3e35d9cd0d94a6af5ebc",o=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var t=(0,e.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("trending/movie/day",{params:{api_key:u}});case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("search/movie",{params:{api_key:u,query:n}});case 2:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n),{params:{api_key:u}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"/credits"),{params:{api_key:u}});case 2:return r=t.sent,e=r.data.cast,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(i().mark((function t(n){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"/reviews"),{params:{api_key:u}});case 2:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9126:function(t,n,r){t.exports=r.p+"static/media/poster-not-found.0a5c47d51136d8a88ebe.jpg"}}]);
//# sourceMappingURL=516.9ff70bab.chunk.js.map