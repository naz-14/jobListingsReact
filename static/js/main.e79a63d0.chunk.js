(this.webpackJsonpjoblistings=this.webpackJsonpjoblistings||[]).push([[0],{15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(8),s=t.n(r),l=(t(15),t(2)),i=t(0),o=function(e){var a=e.tags,t=e.handleRemoveTag,n=e.handleRemoveAllTags;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"tags-bar wrapper",children:[Object(i.jsx)("div",{className:"tags-container",children:a.map((function(e){var a=e.id,n=e.tag;return Object(i.jsxs)("div",{className:"tag-wrapper",children:[Object(i.jsx)("li",{className:"tag-in-bar",id:a,children:n}),Object(i.jsx)("button",{className:"remove-tag",type:"button",onClick:function(){return t(a)},children:"X"})]},a)}))}),Object(i.jsx)("div",{className:"clearAllContainer",children:Object(i.jsx)("button",{className:"clear-all",type:"button",onClick:function(){return n()},children:"Clear All"})})]})})},d=function(e){var a=e.tags,t=e.handleRemoveTag,c=e.handleRemoveAllTags,r=window.matchMedia("(min-width:768px)"),s=Object(n.useState)(r.matches),d=Object(l.a)(s,2),j=d[0],u=d[1];Object(n.useEffect)((function(){var e=function(e){u(e.matches)};return r.addEventListener("change",e),function(){r.removeEventListener("change",e)}}),[r]);var b;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"bg-header",style:(b=j,{background:b?"url('/img/bg-header-desktop.svg') #64a1a2 center/cover no-repeat":"url('/img/bg-header-mobile.svg') #64a1a2 center/cover no-repeat"})}),Object(i.jsx)("header",{className:"site-header",children:0!==a.length?Object(i.jsx)(o,{tags:a,handleRemoveTag:t,handleRemoveAllTags:c}):""})]})},j=t(4),u=t.n(j),b=t(7),g=t.n(b),m=t(9),h=function(){var e=Object(m.a)(g.a.mark((function e(a){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=function(e){var a=Object(n.useState)({loading:!0,data:[],error:null}),t=Object(l.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){h(e).then((function(e){r({loading:!1,data:e,error:null})}))}),[e]),c},p=function(e){var a=e.handleAddTag,t=e.tags,n=void 0===t?[]:t,c=v("/data/data.json"),r=c.loading,s=c.data;return Object(i.jsxs)(i.Fragment,{children:[r&&Object(i.jsx)("div",{className:"loading",children:"Cargando...."}),Object(i.jsx)("div",{className:"jobs-grid__container",children:Object(i.jsx)("div",{className:"wrapper",children:s.map((function(e){var t=-1===n.map((function(a){var t=a.tag;return e.position===t||e.role===t||e.level===t||e.languages.indexOf(t)>-1||e.tools.indexOf(t)>-1})).indexOf(!1);return Object(i.jsxs)("div",{className:"job ".concat(t?"":"hide"),children:[Object(i.jsxs)("div",{className:"job-left-content",children:[Object(i.jsx)("div",{className:"job-image-wrapper",children:Object(i.jsx)("img",{src:"".concat(e.logo),alt:"",className:"job-image"})}),Object(i.jsxs)("div",{className:"job-description",children:[Object(i.jsxs)("p",{className:"job-title",children:[e.company,!0===e.new?Object(i.jsx)("span",{className:"pill new",children:"New!"}):null,!0===e.featured?Object(i.jsx)("span",{className:"pill featured",children:"Fetured"}):null]}),Object(i.jsx)("h2",{className:"job-position",children:e.position}),Object(i.jsx)("div",{className:"job-details",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{className:"detail",children:["\xb7 ",e.postedAt]}),Object(i.jsxs)("li",{className:"detail",children:["\xb7 ",e.contract]}),Object(i.jsxs)("li",{className:"detail",children:["\xb7 ",e.location]})]})})]})]}),Object(i.jsxs)("div",{className:"job-tags",children:[Object(i.jsx)("p",{className:"job-tag role",onClick:function(e){var t={id:u()(),tag:e.target.innerText};a(t)},children:e.role}),Object(i.jsx)("p",{className:"job-tag level",onClick:function(e){var t={id:u()(),tag:e.target.innerText};a(t)},children:e.level}),e.languages.map((function(e){return Object(i.jsx)("p",{className:"job-tag language",onClick:function(e){var t={id:u()(),tag:e.target.innerText};a(t)},children:e})})),e.tools.map((function(e){return Object(i.jsx)("p",{className:"job-tag language",onClick:function(e){var t={id:u()(),tag:e.target.innerText};a(t)},children:e})}))]})]},e.id)}))})})]})},O=t(10),x=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{payload:{tag:""}},t=a.payload.tag,n=[];switch(a.type){case"add":return e.map((function(e){return e.tag===t})).indexOf(!0)>-1?e:[].concat(Object(O.a)(e),[a.payload]);case"remove":return n=e.filter((function(e){return e.id!==a.payload}));case"removeAll":return console.log("remove all"),n;default:return e}};var f=function(){var e=Object(n.useReducer)(x,[],(function(){return[]})),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{tags:t,handleRemoveTag:function(e){c({type:"remove",payload:e})},handleRemoveAllTags:function(){c({type:"removeAll",payload:""})}}),Object(i.jsx)(p,{handleAddTag:function(e){c({type:"add",payload:e})},tags:t})]})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e79a63d0.chunk.js.map