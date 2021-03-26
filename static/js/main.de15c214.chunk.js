(this.webpackJsonpReactGallery=this.webpackJsonpReactGallery||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),i=n.n(a),s=(n(27),n(28),n(6)),u=n(5),o=n.n(u),l=n(0);function d(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{className:"NewImage",children:[Object(l.jsx)("h1",{id:"title",children:"Add Your Own Image"}),Object(l.jsx)("div",{className:"url-input",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{id:"img-url",type:"url",onChange:function(e){r(e.target.value)},placeholder:"https://",autoComplete:"off"}),Object(l.jsx)("button",{id:"submit",onClick:function(){return function(e){o.a.post("https://ms-gallery-api.herokuapp.com/api/gallery/new-picture/?url=".concat(e)).then((function(e){return console.log(e)}))}(n)},children:"Submit"})]})})]})}var j=n(4),p=n.n(j),h=n(7),b=n(2),f=function(e){return{type:"ASSIGN_INDEX",payload:e}},m=function(e){return{type:"FETCHING",payload:e}};function O(){var e=Object(b.c)((function(e){return e.activeIndex})),t=Object(b.c)((function(e){return e.pictures})),n=Object(b.b)(),r=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://ms-gallery-api.herokuapp.com/api/gallery/pictures").then((function(e){n({type:"ASSIGN_PICTURES",payload:e.data})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),a=function(c){switch(c){case"left":n(f(0===e?t.length-1:e-1));break;case"right":e===t.length-1?n(f(0)):n(f(e+1))}};return Object(c.useEffect)((function(){r()}),[]),Object(l.jsxs)("div",{className:"Slider",children:[Object(l.jsx)("button",{className:"slider-arrows",onClick:function(){return a("left")},children:"\u21d0"}),Object(l.jsx)("div",{className:"Picture",children:t.map((function(t,n){return Object(l.jsx)("img",{className:"image ".concat(e===n?"active":""),src:t.url,alt:""},n)}))}),Object(l.jsx)("button",{className:"slider-arrows",onClick:function(){return a("right")},children:"\u21d2"})]})}function v(e){return Object(l.jsxs)("div",{className:"Comment",children:[Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("img",{id:"avatar",src:e.avatar,alt:"avatar",width:"50px",height:"50px"}),Object(l.jsx)("h5",{id:"username",children:e.username})]}),Object(l.jsx)("p",{id:"text",children:e.text}),Object(l.jsxs)("div",{className:"upvotes",children:[Object(l.jsx)("button",{id:"upvote",children:"+"}),Object(l.jsx)("p",{children:e.upvotes}),Object(l.jsx)("button",{id:"downvote",children:"-"})]})]})}function x(e){var t=Object(c.useState)("Guest"),n=Object(s.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)("https://cdn4.iconfinder.com/data/icons/gray-business-2/512/xxx006-512.png"),u=Object(s.a)(i,2),d=u[0],j=u[1],f=Object(c.useState)(""),O=Object(s.a)(f,2),v=O[0],x=O[1],g=Object(b.c)((function(e){return e.isFetching})),y=Object(b.b)(),N=function(){var e=Object(h.a)(p.a.mark((function e(t,n,c,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(m(!0)),e.next=4,o.a.post("https://ms-gallery-api.herokuapp.com/api/gallery/add-comment/?picture_id=".concat(t,"&author=").concat(n,"&avatar=").concat(c,"&text=").concat(r)).then((function(e){y(m(!1)),console.log("New Comment!")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"CommentInput",children:[Object(l.jsxs)("div",{className:"user-info",children:[Object(l.jsx)("input",{id:"username",type:"text",placeholder:"username",onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("input",{id:"avatar",type:"url",placeholder:"avatar url",onChange:function(e){return j(e.target.value)}})]}),Object(l.jsx)("input",{id:"comment-input",type:"text",placeholder:"Write a public comment...",autoComplete:"off",maxLength:"120",onChange:function(e){return x(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),v&&(N(e.picture_id,r,d,v),y({type:"COMMENTING"}),x("")))},value:v||""}),g?Object(l.jsx)("i",{className:"loader"}):""]})}function g(){var e=Object(b.c)((function(e){return e.comments})),t=Object(b.c)((function(e){return e.commenting})),n=Object(b.c)((function(e){return e.pictures})),r=Object(b.c)((function(e){return e.activeIndex})),a=Object(b.b)(),i=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://ms-gallery-api.herokuapp.com/api/gallery/comment/?picture_id=".concat(t)).then((function(e){a({type:"ASSIGN_COMMENTS",payload:e.data.comments})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i(n[r]._id)}),[r,t]),Object(l.jsxs)("div",{className:"CommentsBox",children:[Object(l.jsx)(x,{picture_id:n[r]._id}),e.map((function(e,t){return Object(l.jsx)(v,{username:e.author,avatar:e.avatar,text:e.text,upvotes:e.upvotes},t)}))]})}function y(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{className:"Panel",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{children:"Like"}),Object(l.jsx)("button",{onClick:function(){r(!n)},children:"Comments"})]}),n?Object(l.jsx)(g,{}):""]})}function N(){return Object(l.jsxs)("div",{className:"Gallery",children:[Object(l.jsx)(O,{}),Object(l.jsx)(y,{})]})}var S=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(N,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},C=n(8),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASSIGN_INDEX":return t.payload;default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASSIGN_PICTURES":return t.payload;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASSIGN_COMMENTS":return t.payload;default:return e}},k=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"COMMENTING":return!0;default:return!1}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING":return t.payload;default:return e}},T=(0,n(8).combineReducers)({activeIndex:I,pictures:_,comments:E,commenting:k,isFetching:G}),M=Object(C.createStore)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b.a,{store:M,children:Object(l.jsx)(S,{})})}),document.getElementById("root")),w()}},[[55,1,2]]]);
//# sourceMappingURL=main.de15c214.chunk.js.map