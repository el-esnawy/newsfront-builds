(this.webpackJsonpnewsfront_v2=this.webpackJsonpnewsfront_v2||[]).push([[0],{187:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(42),a=n.n(r),s=n(59),o=(n(185),n(186),n(187),n(13)),l=n(18),b=n(10),j=n(11),d=n(233),p=n(90);var g,u,x,O,A,h,m,E,f,S,B,v,y,I,w,k,L,C,q,z,X,R,M,V,W,H,N=function(e){var t=Object(c.useState)(window.innerWidth),n=Object(l.a)(t,2),i=n[0],r=n[1],a=function(){r(window.innerWidth)};window.addEventListener("resize",a);var s=Object(c.useState)(i<e),o=Object(l.a)(s,2),b=o[0],j=o[1];return Object(c.useEffect)((function(){return window.addEventListener("resize",a),j(i<e),function(){return window.removeEventListener("resize",a)}}),[i,e]),b},P=n(38),T=n(2),U=j.b.div(g||(g=Object(b.a)(["\n  width: 100%;\n  background-image: linear-gradient(to bottom right, #476072 20%, #548ca8);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min-content, 12rem));\n  justify-content: center;\n  justify-items: stretch;\n  gap: 1rem;\n  padding: 2rem 1.5rem;\n"]))),G=Object(j.b)(P.c)(u||(u=Object(b.a)(["\n  max-width: 12rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-radius: 12px;\n  padding: 0.5rem;\n  height: 120%;\n\n  color: #334257;\n  text-shadow: 0 4px 6px rgba(0, 0, 0, 0);\n  background-image: linear-gradient(\n    to bottom right,\n    rgb(255, 255, 255, 0.6),\n    rgb(255, 255, 255, 0.2)\n  );\n\n  transition: all 0.2s;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  &:hover {\n    background-color: #ffffff;\n    transform: translateY(-4px);\n    color: #000000;\n    filter: blur(0px);\n  }\n  &:active {\n    transform: translateY(-1px);\n  }\n\n  @media (max-width: 950px) {\n    filter: opacity(0);\n    filter: blur(0px);\n  }\n"]))),Z={backgroundColor:"#ffffff",color:"#000000",filter:"opacity(1)"},F=function(){return Object(T.jsxs)(U,{children:[Object(T.jsxs)(G,{to:"/category/headlines",activeStyle:Z,children:[Object(T.jsx)("i",{className:"far fa-newspaper"}),"Headlines"]}),Object(T.jsxs)(G,{to:"/category/general",activeStyle:Z,children:[Object(T.jsx)("i",{className:"fas fa-rss"}),"General News"]}),Object(T.jsxs)(G,{activeStyle:Z,to:"/category/business",children:[Object(T.jsx)("i",{className:"fas fa-briefcase"}),"Business"]}),Object(T.jsxs)(G,{activeStyle:Z,to:"/category/science",children:[Object(T.jsx)("i",{className:"fas fa-flask"}),"Science"]}),Object(T.jsxs)(G,{activeStyle:Z,to:"/category/sports",children:[Object(T.jsx)("i",{className:"fas fa-futbol"}),"Sports"]}),Object(T.jsxs)(G,{activeStyle:Z,to:"/category/technology",children:[Object(T.jsx)("i",{className:"fas fa-robot"}),"Technology"]})]})},J=Object(j.b)(d.a)(x||(x=Object(b.a)(["\n  background-image: linear-gradient(to bottom right, #476072 40%, #548ca8);\n"]))),K=Object(j.b)(d.a.Title)(O||(O=Object(b.a)(["\n  color: #fff !important;\n  font-size: 1.2rem !important;\n  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n"]))),Q=function(){var e=N(770),t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(T.jsx)(i.a.Fragment,{children:e?Object(T.jsxs)(J,{fluid:!0,children:[Object(T.jsxs)(K,{active:r,index:0,onClick:function(){return a(!r)},children:[Object(T.jsx)(p.a,{name:"dropdown"})," Categories"]}),Object(T.jsx)(d.a.Content,{active:r,children:Object(T.jsx)(F,{})})]}):Object(T.jsx)(F,{})})},D=n(231),Y=n(230),_=n(229),$=Object(j.b)(D.a)(A||(A=Object(b.a)(["\n  background-color: #273549 !important;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  width: 100%;\n"]))),ee=j.b.sub(h||(h=Object(b.a)(["\n  margin-left: 0.5rem;\n  background-color: #fff;\n  color: #334257;\n  font-size: 0.8rem;\n  font-weight: 800;\n  padding: 0.2rem;\n  border-radius: 4px;\n  box-shadow: inset 0 6px 8px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.25);\n  border: 2px solid #93b5c6;\n"]))),te=j.b.div(m||(m=Object(b.a)(["\n  box-sizing: border-box;\n  display: grid !important;\n  place-items: center !important;\n  color: #fff;\n  background-color: #93b5c6;\n  padding: 0.5rem;\n  border-radius: 100%;\n  border: 1px solid #fff;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n\n  & > * {\n  }\n"]))),ne=j.b.input(E||(E=Object(b.a)([""]))),ce=Object(j.b)(D.a.Item)(f||(f=Object(b.a)(["\n  justify-content: space-around;\n"]))),ie=function(){var e=Object(o.f)(),t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1],a=Object(c.useRef)(null),s=N(770),b=Object(c.useRef)(null),j=Object(c.useState)(!1),d=Object(l.a)(j,2),g=d[0],u=d[1],x=function(t){t.preventDefault(),b.current.value.length<3?(b.current.value="",u(!0),setTimeout((function(){u(!1)}),2500)):(e.replace("/search/".concat(b.current.value)),b.current.value="",b.current.className="")};return Object(T.jsxs)($,{pointing:!0,inverted:!0,style:{borderRadius:0,paddingRight:"3rem",marginBottom:0},stackable:!0,children:[Object(T.jsxs)(ce,{children:[Object(T.jsxs)(D.a.Header,{className:"header",as:P.b,to:"/",children:["NewsFronts",Object(T.jsx)(ee,{children:"BETA"})]}),s&&Object(T.jsx)(te,{onClick:function(){r((function(e){return!e}))},children:Object(T.jsx)("i",{className:"fas fa-search"})})]}),s&&i?Object(T.jsx)(D.a.Item,{size:"large",style:{width:"50vw",marginRight:"auto"},children:Object(T.jsx)(Y.a,{ref:a,style:{width:"100%"},onSubmit:x,size:"large",inverted:!0,children:Object(T.jsxs)(Y.a.Input,{style:{width:"100%"},icon:!0,placeholder:"Search...",onSubmit:x,children:[Object(T.jsx)(ne,{ref:b,style:{width:"100%",borderRadius:"150px"}}),Object(T.jsx)(p.a,{name:"search"})]})})}):!s&&Object(T.jsx)(D.a.Item,{size:"large",style:{width:"30vw",marginRight:"auto"},children:Object(T.jsx)(_.a,{trigger:Object(T.jsx)(Y.a,{style:{width:"100%"},onSubmit:x,size:"large",inverted:!0,children:Object(T.jsxs)(Y.a.Input,{ref:a,style:{width:"100%"},icon:!0,placeholder:"Search...",onSubmit:x,children:[Object(T.jsx)("input",{ref:b,style:{width:"100%",borderRadius:"150px"}}),Object(T.jsx)(p.a,{name:"search"})]})}),position:"bottom left",content:"Search term must be more than 3 characters long.",open:g})})]})},re=n(237),ae=n(232),se=n(238),oe=n(163),le=n(227),be=n(234),je=n(192),de=function(e){var t=new Date(e.publishedAt),n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],a=i[1],s=parseInt(t.getUTCDate().toString().split("")[t.getUTCDate().toString().split("").length-1]),o=1===s?"st":2===s?"nd":3===s?"rd":"th";return Object(T.jsx)(ae.a,{fluid:!0,style:{padding:"1rem",marginTop:"2rem"},children:Object(T.jsx)(re.a,{padded:!0,stackable:!0,relaxed:"very",children:Object(T.jsxs)(re.a.Row,{children:[Object(T.jsxs)(re.a.Column,{mobile:15,tablet:15,computer:6,widescreen:6,largeScreen:6,floated:"left",textAlign:"left",children:[Object(T.jsx)(se.a,{as:"h3",style:{marginRight:"auto"},children:e.source}),r?Object(T.jsx)("h4",{children:"Image Could not be loaded from Source"}):Object(T.jsx)(oe.a,{onError:function(){a(!0)},src:e.image,style:{borderRadius:"25px"},ribbon:"right",centered:!0,fluid:!0}),Object(T.jsx)(le.a,{className:"transparent"}),Object(T.jsx)(ae.a.Meta,{as:"h5",children:Object(T.jsxs)("span",{className:"date",children:["Published On ",t.getUTCDate(),Object(T.jsx)("sup",{children:o}),"\xa0",je.toMonth(t.getMonth()+1,"f")," \xa0",t.getFullYear()]})})]}),Object(T.jsxs)(re.a.Column,{mobile:15,tablet:15,computer:10,widescreen:10,largeScreen:10,textAlign:"left",children:[Object(T.jsx)(re.a.Row,{children:Object(T.jsxs)(se.a,{floated:"left",style:{textAlign:"left"},as:"h1",icon:!0,children:[e.title,Object(T.jsxs)(se.a.Subheader,{children:["Written by: ",e.author," "]})]})}),Object(T.jsxs)(re.a.Row,{children:[Object(T.jsx)(se.a,{floated:"left",as:"h4",style:{textAlign:"left"},children:"Article Summary"}),Object(T.jsx)(se.a,{floated:"left",as:"h5",children:e.description})]}),Object(T.jsx)("br",{}),Object(T.jsxs)(be.a,{as:"a",target:"_blank",floated:"left",color:"blue",size:"small",href:e.link,children:["Read More ",Object(T.jsx)(p.a,{name:"angle right"})]})]})]})})})},pe=n(239),ge=n(235),ue=n(228),xe=function(){return Object(T.jsx)(pe.a,{children:Object(T.jsx)(ge.a,{active:!0,page:!0,children:Object(T.jsx)(ue.a,{size:"massive",active:!0,children:"Loading"})})})},Oe=n(138),Ae=n.n(Oe),he=n(12),me=n(161),Ee=n(80),fe=n(95),Se=n.n(fe),Be=Object(Ee.b)("articles/getAllArtices",function(){var e=Object(me.a)(Ae.a.mark((function e(t){var n,c,i,r,a,s;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.page,c=t.pageSize,!t.searchterm){e.next=8;break}return e.next=4,Se.a.get("https://newsfronts.herokuapp.com/api/v1/search/".concat(t.searchterm));case 4:return i=e.sent,e.abrupt("return",Object(he.a)(Object(he.a)({},i.data),{},{responseURL:i.request.responseURL}));case 8:if("headlines"!==t.category){e.next=15;break}return e.next=11,Se.a.get("https://newsfronts.herokuapp.com/api/v1/headlines",{params:{pageNumber:n||1,pageSize:c||20}});case 11:return r=e.sent,e.abrupt("return",Object(he.a)(Object(he.a)({},r.data),{},{responseURL:r.request.responseURL}));case 15:if(!t.category&&!t.source){e.next=22;break}return e.next=18,Se.a.get("https://newsfronts.herokuapp.com/api/v1/".concat(Object.keys(t)[0],"/").concat(Object.values(t)[0]),{params:{pageNumber:n||1,pageSize:c||20}});case 18:return a=e.sent,e.abrupt("return",Object(he.a)(Object(he.a)({},a.data),{},{responseURL:a.request.responseURL}));case 22:return e.next=24,Se.a.get("https://newsfronts.herokuapp.com/api/v1/headlines",{params:{pageNumber:n||1,pageSize:c||20}});case 24:return s=e.sent,e.abrupt("return",Object(he.a)(Object(he.a)({},s.data),{},{responseURL:s.request.responseURL}));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ve=n(62),ye=ve.a.Item,Ie=ve.a.First,we=ve.a.Prev,ke=ve.a.Next,Le=ve.a.Last,Ce=ve.a.Ellipsis,qe=Object(j.b)(ve.a)(S||(S=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(4rem, max-content));\n  color: #fff !important;\n  background-color: #334257 !important;\n  justify-content: center;\n  align-items: center;\n\n  & > * {\n    background-color: #334257 !important;\n    color: #fff !important;\n  }\n"]))),ze=Object(j.a)(B||(B=Object(b.a)(["\n  background-color: #334257 !important;\n  color: #fff !important;\n  justify-self: stretch !important;\n  border-left: 1px solid #93b5c6;\n  border-right: 1px solid #93b5c6;\n  display: grid;\n  place-items: center;\n\n  & > * {\n    background-color: #334257 !important;\n    color: #fff !important;\n    border: 0px;\n    justify-self: stretch !important;\n    display: grid;\n    place-items: center;\n  }\n"]))),Xe=Object(j.b)(ye)(v||(v=Object(b.a)(["\n  ","\n"])),ze),Re=Object(j.b)(Ie)(y||(y=Object(b.a)(["\n  ","\n  font-size: 1.6rem;\n"])),ze),Me=Object(j.b)(we)(I||(I=Object(b.a)(["\n  ","\n  font-size: 1.6rem;\n"])),ze),Ve=Object(j.b)(ke)(w||(w=Object(b.a)(["\n  ","\n  font-size: 1.6rem;\n"])),ze),We=Object(j.b)(Le)(k||(k=Object(b.a)(["\n  ","\n  font-size: 1.6rem;\n"])),ze),He=Object(j.b)(Ce)(L||(L=Object(b.a)(["\n  ","\n"])),ze),Ne=Object(j.b)(ye)(C||(C=Object(b.a)(["\n  ","\n  text-decoration: underline;\n"])),ze),Pe=function(){var e=Object(o.g)(),t=Object(s.b)(),n=Object(s.c)((function(e){return e.articles})),r=n.loading,a=n.page,b=n.pageSize,j=n.count,d=Object(c.useState)(a),p=Object(l.a)(d,2),g=p[0],u=p[1],x=Math.ceil(j/b),O=Object(c.useState)(x),A=Object(l.a)(O,2),h=A[0],m=A[1];Object(c.useEffect)((function(){u(parseInt(a)),m(Math.ceil(parseInt(j)/parseInt(b)))}),[r,j,a,b]);var E=function(n){n.target.textContent.includes("\u203a")&&g+1<h?t(Be(Object(he.a)(Object(he.a)({},e),{},{page:g+1}))):n.target.textContent.includes("\xbb")?t(Be(Object(he.a)(Object(he.a)({},e),{},{page:h}))):n.target.textContent.includes("\xab")?t(Be(Object(he.a)(Object(he.a)({},e),{},{page:1}))):n.target.textContent.includes("\u2039")?t(Be(Object(he.a)(Object(he.a)({},e),{},{page:g-1}))):t(Be(Object(he.a)(Object(he.a)({},e),{},{page:parseInt(n.target.textContent)})))};return Object(T.jsx)(i.a.Fragment,{children:r?Object(T.jsx)("div",{}):Object(T.jsxs)(qe,{children:[g>2&&Object(T.jsxs)("div",{style:{display:"flex"},children:[Object(T.jsx)(Re,{onClick:E}),Object(T.jsx)(Me,{onClick:E})]}),!(g-2<1)&&Object(T.jsx)(Xe,{onClick:E,children:g-2}),!(g-1<1)&&Object(T.jsx)(Xe,{onClick:E,children:g-1}),Object(T.jsx)(Ne,{onClick:E,children:g}),!(g+1>h)&&Object(T.jsx)(Xe,{onClick:E,children:g+1}),!(g+2>h)&&Object(T.jsx)(Xe,{onClick:E,children:g+2}),!(g+2>=h)&&Object(T.jsx)(He,{}),g!==h&&Object(T.jsxs)(i.a.Fragment,{children:[!(g+1>=h||g+2>=h)&&Object(T.jsx)(Xe,{onClick:E,children:h}),Object(T.jsxs)("div",{style:{display:"flex"},children:[Object(T.jsx)(Ve,{onClick:E}),Object(T.jsx)(We,{onClick:E})]})]})]})})},Te=function(e){var t=Object(s.c)((function(e){return e.articles})),n=t.articles,c=t.loading,r=Object(s.b)();return i.a.useEffect((function(){r(Be(e))}),[r,e]),Object(T.jsxs)(re.a,{textAlign:"center",verticalAlign:"middle",children:[Object(T.jsx)(re.a.Row,{textAlign:"center",children:Object(T.jsxs)(re.a.Column,{mobile:15,tablet:15,computer:14,widescreen:10,largeScreen:10,children:[c&&Object(T.jsx)(xe,{}),n.map((function(e){return Object(T.jsx)(de,{title:e.title,image:e.urlToImage,source:e.source.name,publishedAt:e.publishedAt,author:e.author||e.source.name,description:e.description,link:e.url},e._id)}))]})}),Object(T.jsx)(re.a.Row,{children:Object(T.jsx)(Pe,{})})]})},Ue=n.p+"static/media/BBC_logo.dbf3a320.png",Ge=n.p+"static/media/CNN-logo.4050e2dc.png",Ze=n.p+"static/media/1200px-Axios_logo_(2020).svg.78e20a74.png",Fe=n.p+"static/media/ABC-logo.81ec3446.png",Je=n.p+"static/media/ARS-logo-removebg-preview.9a70826b.png",Ke=n.p+"static/media/BI-logo.ed118c3e.png",Qe=n.p+"static/media/Bleacher-logo-removebg-preview.7d3c409b.png",De=n.p+"static/media/Breitebart-logo-removebg-preview.b0464437.png",Ye=n.p+"static/media/BuzzFeed-Logo.4f74af05.png",_e=n.p+"static/media/CBC-logo-removebg-preview.164791a7.png",$e=n.p+"static/media/cbs-logo-removebg-preview.e89d1c21.png",et=n.p+"static/media/fox_sports_logo.d8c4e67e.png",tt=n.p+"static/media/foxNews-logo.69a634aa.jpg",nt=n.p+"static/media/vice-logo-removebg-preview.b0f7e0c1.png",ct=n.p+"static/media/reuters-logo.d7bac795.png",it=n.p+"static/media/newsweek-logo-removebg-preview.c792a95f.png",rt=n.p+"static/media/independent-logo-removebg-preview.fec78f7f.png",at=n.p+"static/media/nbc-logo.b214552d.png",st=n.p+"static/media/msnbc-logo.2bbc4eb1.png",ot=n.p+"static/media/ign-logo-removebg-preview.0892a8de.png",lt=j.b.div(q||(q=Object(b.a)(["\n  height: max-content;\n  padding: 1rem 7rem;\n  /* background-color: #93b5c6; */\n  background-image: linear-gradient(to top right, #476072 20%, #548ca8);\n  display: flex;\n  flex-wrap: wrap;\n\n  justify-content: center;\n  justify-items: stretch;\n  align-items: stretch;\n  gap: 1rem;\n  font-size: 1rem;\n"]))),bt=Object(j.b)(P.c)(z||(z=Object(b.a)(["\n  min-height: 3rem;\n  width: max-content;\n  flex: 1 1 12%;\n  border-radius: 35px;\n  background-image: linear-gradient(\n    to bottom right,\n    rgb(255, 255, 255, 0.8),\n    rgb(255, 255, 255, 0.6)\n  );\n  filter: opacity(0.9);\n  transition: all 0.3s;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25);\n\n  padding: 0.1rem 0.4rem;\n  display: grid;\n  place-items: center;\n\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  &:hover {\n    color: #000000;\n    transform: translateY(-4px);\n    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);\n    filter: opacity(1);\n  }\n"]))),jt=j.b.img(X||(X=Object(b.a)(["\n  /* max-width: 5rem; */\n  /* max-height: 2rem; */\n  width: 8rem;\n  aspect-ratio: initial;\n  border-radius: 0px;\n  object-fit: fit;\n"]))),dt={boxShadow:"0 0 0 5px #93b5c6, 0 0 0 8px #334257"},pt=function(){return Object(T.jsxs)(lt,{children:[Object(T.jsx)(bt,{activeStyle:dt,to:"/source/abc",children:Object(T.jsx)(jt,{src:Fe,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/ars",children:Object(T.jsx)(jt,{src:Je,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/axios",children:Object(T.jsx)(jt,{src:Ze,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/bbc",children:Object(T.jsx)(jt,{src:Ue,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/bloomberg",children:Object(T.jsx)(jt,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAACRCAYAAACPFwDyAAAcbElEQVR4Xu2dC7AWxZXHufK6CKgQebhIgCiGVwKiJoKKS0owEBVwA4gUbtWiiYZEs+xSpShBk9KYMlFM1gdZSAU3AkpWRFYQ3KiY6LquKA9XeUSQoOGpaHgJKHf/58vMt/PNncc5PXM/Pu79T9WtEL/u06d/03PmTPfp040a8SIBEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEgCBTz/9tDH+muGvWv63EqFAryqNXtpyGlks0zAJcAw1zPtep72uqampmjVr1vfQyGf4q0n5O6ookyjj0ksvXX7PPfdMfvnll8+zduy11177kqX9li1b7rO2wfL1n8DYsWMfs4yj+k+EPSwbARjc6kcfffQfjQMwzTCrf7/11lvv2Lt3bwtNh1etWtXTome/fv1WaeSyTMMicMMNNzxkGUcNiw57qyVwgragXw7Gtin+LVMH51jr5lX+zjvv/EHr1q0PPPTQQ9cpZIoht1yq6QeLQJatFwTkS40XCWQiYDa4nrEVg9s6U8s5VIbX8UuZbshBVFAEDW7OQOuJOI6LenIjj2U3zAa3qqpqP/52Q+k/HEvF/baXLVs2ZOLEibMqQRfqUK8JWL+U6jUMds6NgNngBpr5X7cm8681e/bsiZhTHpuTZHoyOYGkGBIggVICWQzuYYiqmLf++PHj5/PmkgAJkEAlE8hicMUTrChvEF7umEqGTd1IgAQaNoEsBrdJpaGbOXPmd3PQqWK89hz6QhEkQAIVRCCLwZXwsIq6XnzxxYsqSiEqQwIkQAIBAlm81MZWkvjk/+bQoUOXfvLJJxJWFjT2/tRE1b59+1q/8MILX0PIl1Pkwdtvv92tZ8+em626sTwJkAAJ1DWBLAbXPH/bvn377e3atTuATslf3CUhZ7Oxk+zX2NzwqRXAnj172qJOFoNr7pdVR5YnARJomATKanCBWO0Vw9h+tmjRoktHjBix7Hi8Nbt27WqxZcuWM4O6d+jQ4c+dO3f+4Fj1B/q0hV6nof3CS6W6uvogdJKX4P5jpVO4XbxoG69fv77npk2bustvzZs3P9SlS5d3seX6LRcd0d+W6PcXIK9wL3x5Z5xxxiaMsU9cZGapI+Pirbfe6vvee+99fuvWrZ8XWRgTfzr99NO3Xnzxxf+VRbamLvieAL49oEcH/Pskn0mnTp22CucKGwsn4Gu4sLMVeu3V9E/KoF9Vr7/++nkbN27ssXv37naNGzc+ir5tPuuss9ZhHK3TyqmLclkMbl3oUyJz4MCBv6/zRnJqADkbznrmmWe+8eSTT45+5ZVXBmCAxEru2LHj9uuvv/4Xl1122VPnnnvumzmpUEsMXlhDn3vuuSH333//P8uPGHSxTWHH3tKRI0f+dvjw4f+BcjstOuHhbfX8889fAmMmBixp0bHq0KFDzceMGbMoLP/xxx8fedddd02HEewX1zYSyMyfMmXKj8FsTZJ+eOCaPvzww9+9/fbbf4z70DyurOTNmDp16g+hz0JLf13K4l58ffr06T+BPl9Oqo8+zrvlllt+BN3edmknqg7GZncZl+BxJ/imisVGoplXXXXVo0OGDDE9f/JywzgY6o2DpK3QhelEOFNLw8rg5fi5e++992YZsyFdZVwlrjkhuVU/JLmahnpXJnXypptu+tltt932Q9yLv/jlUO9G+XezZs0OJbRTdfDgwZaXXHLJf2IMvpEKMs8CmI/9O+/hUiedefbZZwc56KCWL/rgphfe2v6FwdbDoicGuskAiheODGPy9jXpGSyPnBDXOnCJrCIeDJL7TM+iDxisXrFixQCtTm+++eYZhvZKHkTMuVvqFhjDIMyO0w3jcrRBl4I8vAB34UEveJtxF9YUHjDKLYiCF9sB4+OgsW6NvFyypnpcunTp4LZt28oXlfPYtIRaYsycb2yrBDcY/yKhfmIuC3lRGduuQcbDCQEF1FkNwWSc9tnIrVw5DC4exq5WiOEO1pXBhZE5y0G3xIFvMXJRNxJewQ156jRo0KAVmqxsuE/iOmsf6uKDA49EEiBp65WUg0f+bJgBDPEvXeVJPYyV3nkaXNzPc7PoI3XhQMiahOmSaQvwWZK1bb8+jPaHeHF0TFMC97O/sc2iSExpvJdSN9LgyteVsc2ScYRn5tueEhVvcL9p7ajVw4WndrulDUnbWA6DC490okUvS1l87tybNrCjfodxfCGhHRlMwT9/0MX995JB6RnGWLVgcMU71BrOwoMj0SShOr4uWjk1QVbymWjQIbYNPMBtojpq9HCPyqexx1zdnzj9odMp2jFhzf/stRkeB5HGB+Pg7CQ9vN8t/S2Iw9zqBuW9K2le5vuzfl3KPYLevfBSkcV6le7HysM1G1y88b+qHTjyqa4F4JeTz7ccDO7aJB29h1x1YyL0jzJ6tWRZk/HIgkcKq6gHSmVsfbn4PP1aHBejh+vP8QYfahWXqD6KYZO5autYiSs/atSoJ3IwuNLH8AvE/ELxdZQpHs1zk+Jhal+6ieMiyei6GFw8Tz813LsSDBdccMGLhrpJz+xRi+GGwb1Kcz+iymRZNDOHTz344IM3wgvdCEVk8rtWfYSNbROAc+bMuQ4T6olv03Bn8GnwHaz27nAFoamHifXvY9FGEq+7XipmkowHA3Ef+vT9tIbE2L7//vunp5STdn1Dp9IhLG/YsGG/wzTKF/v06SPeSKZLvkSQ0zhKD7NuEyZMWLBy5cqBmRQKVF64cOEovEC+gFjuTSGZSYuBUc2H+2Lumy8UUx1fxlj4HsaEzHFGXnA2PofxvzLix6DeVua+kSrWw0L26zLvHsHHdAvkZBVEa5yCBdrJpopeYZl/vfbaa/Pa6FS1f/9+mZqo3MtlccJ76F29w9h63tRDJCyHEx8iPdws842u/YbndlnSCJDVZFfZGerVUsnBw819DGToTy1dvOmDkn7iv/1Lnm24yEqZTy8301rjwOLhykKig4daaBMcxFEsd3+L7WXxcLNs7a2ItwHCiUbAW7o9R2UiPRm82V/LsQ2VKHj5izG4IsOaZHoGnvC3VIJyLAQv674cxVWkKMzRf6cSFXvggQfkHMFa19133/1PVn3hWb4vLxH52oDhe9laHyFm06x1guXhUVa/9NJLTh6qhPxlafu4rHusPVyZc8F1Yho8Bw+3VoynyyIZph9u8t7EBRXxyXeqS+hK3CKarBxb3/LhOXRZxIScj61y0Jf2Qe71zcMVHpg+Kdm0ksXDlTA9LGb1xnxze4m8cRlPgXsUNeQt3p4sEkk0QcklUxJYeDXNiUq8c1CIxcO1jjmvvN+cpb/FshLFgqmIa2RqsH///m846lCTY+7tNPP1/78fa4PrwTrqhULFKp6HwbXeGAlyj1PIZdEtPLBhOL9i1SnOU5ZdOVZZ6MOMPA0uvKVb5UFwYROlO15sc0WezOt7h4KaH1B8OY0K9tHV4MLQ9okaC4g8kC8XdSiS38+wsfS8W23/jqLdk5Oecni7L2nHAwxXyXpGOQwueJri6qUv8iLBOJf8LSWX62JrQza4xYEmCx1RAymrwYUXKJ892gFdc+WVV/5W8dpSy5O2xXgEZaKNf7folBaO5xA/WTLt4urhwuP41yhWCBNab+lfsCy8yL8Jy3SJT4YhK+zO8y8Xg+uNndjhILsTrf3Ey+m2kED1WBLPLm1sypeYUaeiyDwMLhaBt8mLUtjJ14D84d8X+88A7osYeXWf007hRvTN31rkSVkaXO8GRHkTWQ2uZxTUN9hrL3Fce4NHLfP8889/1Rdo9Ugx9aLKF2CIhSzoHdyk4WJwoVds/gb59LY+BFI+KV4YDCVPgZp52LBZDS48RdW2WIShyQtarRcMSHHKS6YpLHW18byyzVsrN/jMZTW4aS8oeQasXyyYGirk5Ei6cA9MDgwNbmDAhgdVVoOrHXiBcmn3t5HsObfK9T+JrNMJYU8tTjlve7H6wYfcKb4sF4Mb/mQP64XkMn+0MPK84lj2Xhyxun9h79tqcJPiloNKevPqar08JgUR4glqGWH7sjpkEnKv18oNLthlMbhxU14RN1TNCmNCxlDqZf3Cy2Jwj/sohTDNyy+/PLfsYrKQkHq3AgXiPpHDMiQjk7e/Xi1eMjxJ4VdffdUUczpgwACZk0u9LrrooudTCwUKLFmypGSO01JXyg4ePPh3SXWQPGWuReakSZPuTyrftWvXdyzyPvzwQ/m0dr4uvPBClYeLxZvi14u2Me+zvxHuwQhtHWQiK/CW3VmymCs5N+RrKfAn/7+QzQ+sNmvlLl68WHKq+JdTrLFMByLhjCSNSbzQ78hdgHGVrr766l+nyZTfJbZYUy6PMlk2PpjblxCU0aNHS1IOubFyc/w/kVWcF2zSpMkRfKp8FRl9frZ9+3aT0UOmrq9IEg0MsFfMCoYq+Cn9tHJ69OihzvCETGGLHnvsMfWOFegiSV7WrFu3rqdWH+/heVdTHmFCWzTl/DI4XUOd3CZKbjBTU9Tv3bp1MxnIXr16JZ4iLekPLf3LUlaywcGAHNHIQLnIMMSkul5ax93Lli2THXaqC2NNEq6M02QLQziiSqYUQmhXcByY+yJbsrUHBnz88cenqBVDwbPPPjtqI0ikCNnNh6/hvhb5LmXLanDlITLko5S8lXPkUw6fu5MsnZs2bZrsq7/AUieqLHKWdrHIaNOmjYRqqS4ZDBaDu23bNslj20jyqKoa8Ap5e8RTq7gkexdPyaUepgs2v/OOyZ6m6p80JyyVoWditqnUBgwnVMtXBXasKUT+tQjmTJdbjOeRI0cq6ngrSSCDF+g+dYcDBZGm9EFMYaiq4hlI21FZIsdLiKOSDdu0uRwGt6xTChgosblJ46jA2JqDnOF9DdRkuVLdCUMhyw1GUmTTaRY7d+4s5InAgxkbchalqtbTkrrimRm661wUXzi1QnQihDl9njorlWNFB46mvuKlazI8iq6ZPdOgTCxydlW0EVnEskUY48b0osGXsukZc+2DpV5ZDS4Uc7qxmnCWcKfXrl0bGf9ogWMte+KJJyYdHWQVV1Iec4qmqRWXxg4fPqwxhC6iw3VMBiaPBikjkUCm++Eda2VG7IU3mutpK8AjrhUiqK2bUs7JjonMchtcp/5iGsI8qb1582Y/LtcZjlXZujRYyER/2KqPtXw52vB0yvSAW/tV7vLWceDwoq7CZ3x1ufsV156rwYV3mzjvHm7vtNNO+7Olz4qkTkVxmAIaaZHtWva4MLguncNRGKnbftPkQkaLtDLB37N8WqW1gwW5wple3vbLtOJOv2OBMjXJtJNgt0ple1G6qRdfC9nL1GlIRcqaNWtMizWyFoI5U1V8dd59i5Hn9ALFdFfxiBuNnji6R07OUF+I6x2mKexHfWjKZi1T1kUzV2WRxu1L1rotWrTI/HnfvXt32fGkvpCQQ+JrVReiDXqpCnqFTjrpJMl50Mj6lpccwXWVttJlwczS52Nc1tngSzpFi+5YQOxqKe9SVnIHeKF/UZFBfl/jUkrGsaiCN9/cNQLk1FNP3WXpCzxiUyQNFqXHQn5qJBDWRYZb9MhS9rgwuHfcccdd1k5m8HCLg06Odbe0azGiTz/99BUW2RjUcgSJhLq8Zolu8MLJUoPe5dQGDGi1SniAV+FkVHX5hlZQjnbSROTIphELd+HoL87KjjAYC5UX16pVq72IBjBnFdPcNyxsa4rlUkbOaLOsZ8jGjJtvvlmilmIv5NWdk4tyCiEVP6UgsbsAfLKiLyVFvFMQrNVKyuNBeNci4JFHHvHPR0qths/3WqdTJFVCnGlhSqFv374mK4evA9XiIYynJMRRX0hI/pS6cAMsuGDBAtVBg8uXL0/MeRyFDjHTBc8QJywv1qJF5M4gbdkyljNPRXg7/tQqwtj+NC6BkAjxtvWq5WUtWFaD27RpU1UwuOyCkS2smK/8PXLd/sClk5bdMknyLTcEUwpNMI+bakjlNFVLnxBmtBtzdoUpBRzP/D+WujNnzrxRUx4vCzmnTX1hJ9WKQGHnz291g8dZQRm3mtwFCPyXxObqC15zMUG+l8BbXRfPlDo2PSq7VlRDhi25aj2TCg4dOrTW0eppgvHMrIWnOzmYLlXSb0q+CyyWJR6pnia7bL9XSHrGpH3VBRYOp/aW5MOVBOcQo96/nXT6hH9zLCnwpO1wWBwSsUjCaLVO3gnDsWMDLwlrhqia4ANpPESyBh5a6mqzNcEP9sPLCblpl5pZ+GyzlCO8I+Vi2iVxp5PLwZdZsoXBWKuiAmQjhnZ8IV+BbFAqXLgH/bT1pBzu8d+n3bCY39X30aKPtqzl6Piw/mX1cB3hmqtFHZFiFuJVGDNmzCJLXXg2070TaSOryVlM2A5pyocAHeYFhU2ePPknFp0wR/WbpPLIHxucHkj1VuWzDgtmdR6mZumj97AYqyQWT+WQ1himafqLQfJeSMXi8gUnBhxzqubzvJCDouR4eMtpD3A+ekWdbB3sh2TswrzwkLS++b9Pnz49nC5SW9W5XDhdqbOg46liJXu4wTkbBw+31plm8Cqmat9+XrmjXq7TkluKxYV/MMqp8U6JiBoaprc85MwPC5EHP3S8uiohNjxmyetQvGBQOlv6VUce7jmK50fNLDyV5OLhBpnAu1yJe/AovMclFlYRZTOPBTn5QA6CDAqSsWA4iaJ4sm8wOX4ZPdxGllN2M/KuNWayeLiKMRpdpFINLgxIcG7RZUoh7ph09cPq32AxZpIw2XgUdEk7cXPC4G8+pl70wsP2MKYobpRTESIGYqrB9eqVDIoGYnB/nveDa5UX580aT30oGV9YXP4AawRxxywlHu0enj4rp8H1viLNz6SVeVR5GtzAfKbEnQatQR4ersjDXK6EcZX1Bqd9/mEu9w/l1ilqkYQGtzzjInzUUnCce6Fi5RyftZIBORjckpNMrN5fjs9kqqMRfM6yGNx6NYcrczt1FeSPedSn5FPMOihcy0uguswHJ9WXo0dc5bvUk7SXmrylCtmacKDMc6gKPcpVxDeEzu1JsvGkRERRU1jOjSkqhg8kVVTJvYg8k96itrNszLFvxhRZF2cBxor1xuDiM3kyFof+zdh/U3EcS/5tzME9Y6rkWFgWXNKq4gH8DB59u7RyefyOA/eGI8fwf8fI0hjQYFVNeU2ZPLqWuwwYx0l4kDcGBGfqC+Z/38C0VOLuAoQNHog71y/vDorxx1gwhSfmNG5qiRGjC4P5RZc+wqlZu2HDBkl+XrZt0vXC4IoxmDJlyn0x0HP1lGRnT116urKDC/1QP6Dw6HeHp1FcBl9SHfD9BpJSJ8U/qvXNW7dKlIckQAfx9REOU3NihJ1Ve+C9pr58hYMk8g4vhuXNRxbW0ox/3m2myevTp88GeWbk2CYspqli/WVaAE6NaQu2rwd27Tnl/pX6x7XBlWO1Jbg8Z2OQ+mCIp5v1UyZqECEaYhoGwdlpAyz8O4zuThlweb8IkCh8Cx7g7uArK+tJl3Ucacqn3oeQQtbyaZjj8gqk1WuE/ALViMT4C4zuhamFEwpAxlbssmxrkeHll61KiG6xiCspK1NKiNb4VYKAvO+BSVd4u09i81EzWVATgwr7cJ8ce+X9zZKvYEQwSV6WqvHjxy/whR84cKCVpSFL3muL3MSyxypKQVbJpe2kBYSg4tZFMwzybVpIch4UFrZknjXTYgUGxMy8pgbkID8spsnxQpl08u6vCoX3SWdtL1G29VBL9Ps8hbJqHb3g/6JI72Wmqh/cqCI7mlzuhSW+Nq7fMha8zRcqveP01OoiBtnSV9zj6xT3rM6L4AtOkvqrGWl2EMYp7fxGwlvkTHhj52C7blQAvPYzPrZ9pGI75L9JqqurD3To0GEH5qn2WukDzsnYrz7M21Yc1qtW+2j3MDw69R510UdiGLFd9/L58+df88QTT6i2CsIorhw3btyvcNDdb9LO97L2WcrLUePz5s27ZsaMGVORt6GNRgY8ghnyQsOheqb5OTBuC8Zf98aCzzi4UBTkLN5tFbyRoocRpRsMVY/Vq1f3i9gO7ssXmfLvKjlyBls+l4HjnqR+ymmrgXHg6xQ5VmW8YZ5SdvQVLhiTgTt27Ejatl2QI7r07t17bThxjYTxTZ06dQbuS6c4HfE5fBTHQ92MAzF/ntPiZKEpPKtdkfBo/Ny5cydizrKbZiyIV3jFFVcsTPl6LBElU1vI2TA44Z4V7pfHqRnygqzGdID6HECph6+GQZIGNZQNsCjXV0iSV2E87NLoLzHWxpNlnO2mc0XNTWuoZcTYIflxZyRBl+DyooGQNHbIQLbDcqxIHgxlGy506iKHD3qZlgoDVOai5KUGr/5PGJwf5dEWZSQTkPO/8NV1Do5MKuYelvy2SAW6oS5evGFtJJ8A0kGeidMQOgXGQiPJJob2d0KPP5ZDD9dxIlub8fcjbX2M+Y5JkUt4Ltpi/H+glScvIkwpfktbnuVIgARI4LglgGkS2VGo/vyXsl58cK0+ezsmTTG4WUMx6eEet0OPipNAgyUQNQ0UnGqqBUa2k48cOXKefGV+9NFHpyB95gRMr5Rsb1bSpM1UgmIxEiCBekBA4oBjvNzgVmST56rxmrPsMKsH2NkFEiCBBkwgyqAWk+qAS/DfpimIKOOLEMngRpYGjJ1dJwESaHAEJPLCM6phY+pidFO94SyhYA3u5rDDJEAC9Y8AQvUk9jrVWGqmC5LKIKpEf9hf/cPMHpEACZDAXwlICGZd5cbFNMIGCSsjaxIgARIggQABl+T+SV6tl4ydjEmABEiABOIIYJvuUDlZw2UaQXZZor7q2HnXO8CYMldyrEcCJFDRBORwVMTa9sCuvg4bN24MpnAs2D3sqluPbGwf4ITvTdj9uaWiO0PlSIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAEGiKB/wMUqHHohLc92AAAAABJRU5ErkJggg==",alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/bleacher-report",children:Object(T.jsx)(jt,{src:Qe,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/business-insider",children:Object(T.jsx)(jt,{src:Ke,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/breitbart",children:Object(T.jsx)(jt,{src:De,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/buzzfeed",children:Object(T.jsx)(jt,{src:Ye,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/cbc",children:Object(T.jsx)(jt,{src:_e,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/cbs",children:Object(T.jsx)(jt,{src:$e,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/cnn",children:Object(T.jsx)(jt,{src:Ge,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/fox-news",children:Object(T.jsx)(jt,{src:tt,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/fox-sport",children:Object(T.jsx)(jt,{src:et,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/vice-news",children:Object(T.jsx)(jt,{src:nt,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/reuters",children:Object(T.jsx)(jt,{src:ct,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/newsweek",children:Object(T.jsx)(jt,{src:it,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/nbc-news",children:Object(T.jsx)(jt,{src:at,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/msnbc",children:Object(T.jsx)(jt,{src:st,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/ign",children:Object(T.jsx)(jt,{src:ot,alt:"logo"})}),Object(T.jsx)(bt,{activeStyle:dt,to:"/source/independent",children:Object(T.jsx)(jt,{src:rt,alt:"logo"})})]})},gt=Object(j.b)(d.a)(R||(R=Object(b.a)(["\n  background-color: #89b5ca;\n"]))),ut=Object(j.b)(d.a.Title)(M||(M=Object(b.a)(["\n  color: #ffffff !important;\n  font-size: 1.2rem !important;\n  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n"]))),xt=function(){var e=N(770),t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(T.jsx)(i.a.Fragment,{children:e?Object(T.jsxs)(gt,{fluid:!0,children:[Object(T.jsxs)(ut,{active:r,index:0,onClick:function(){return a(!r)},children:[Object(T.jsx)(p.a,{name:"dropdown"}),"Sources"]}),Object(T.jsx)(d.a.Content,{active:r,children:Object(T.jsx)(pt,{})})]}):Object(T.jsx)(pt,{})})},Ot=function(e){var t=e.match.params,n=t.term,c=t.source,r=t.category;return Object(T.jsxs)(i.a.Fragment,{children:[Object(T.jsx)(ie,{}),Object(T.jsx)(Q,{}),Object(T.jsx)(xt,{}),Object(T.jsx)("br",{}),n?Object(T.jsx)(Te,{searchterm:n}):c?Object(T.jsx)(Te,{source:c}):r?Object(T.jsx)(Te,{category:r}):Object(T.jsx)(Te,{})]})},At=j.b.div(V||(V=Object(b.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: #93b5c6;\n  color: #fff;\n"]))),ht=j.b.h1(W||(W=Object(b.a)(["\n  font-size: 6rem !important;\n  text-shadow: 0 6px 12px rgba(0, 0, 0.25);\n"]))),mt=j.b.h4(H||(H=Object(b.a)(["\n  font-size: 3rem !important;\n  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n"]))),Et=function(){return Object(T.jsxs)(At,{children:[Object(T.jsx)(ht,{children:"Coming Soon"}),Object(T.jsx)(p.a,{name:"warning sign",size:"massive"}),Object(T.jsx)(mt,{children:"Our App is still under construction"})]})};var ft,St=function(){return Object(T.jsx)(c.Fragment,{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"/",component:Ot,exact:!0}),Object(T.jsx)(o.a,{path:"/category/:category",component:Ot}),Object(T.jsx)(o.a,{path:"/source/:source",component:Ot}),Object(T.jsx)(o.a,{path:"/search/:term",component:Ot}),Object(T.jsx)(o.a,{component:Et})]})})},Bt=n(93),vt=n(88),yt=(ft={},Object(vt.a)(ft,Be.pending,(function(){return{loading:!0,articles:[]}})),Object(vt.a)(ft,Be.fulfilled,(function(e,t){return{loading:!1,articles:t.payload.articles,responseURL:t.payload.responseURL,page:t.payload.page,pageSize:t.payload.pageSize,count:t.payload.count}})),Object(vt.a)(ft,Be.rejected,(function(e,t){return console.log(e,t),{loading:!1,articles:[],error:"Something Went Wrong"}})),ft),It=Object(Ee.c)({name:"Articles/Slice",initialState:{articles:[],loading:!1,responseURL:""},reducers:{getArticles:function(e){return e}},extraReducers:yt}),wt=(It.actions.getArticles,{articles:It.reducer}),kt=[Bt.a],Lt=Object(Ee.a)({reducer:wt,middleware:kt,devTools:!1,preloadedState:{articles:{articles:[],loading:!1,responseURL:""}}});a.a.render(Object(T.jsx)(P.a,{children:Object(T.jsx)(s.a,{store:Lt,children:Object(T.jsx)(St,{})})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.cf26d1e7.chunk.js.map