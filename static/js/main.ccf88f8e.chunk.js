(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(4),a=n.n(s),r=n(2),u=n(1);var i=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1];return setInterval((function(){var t=(new Date).toLocaleTimeString("it-IT");s(t)}),1e3),Object(u.jsx)("h1",{children:n})};var o=function(t){var e=Object(c.useState)(0),n=Object(r.a)(e,2),s=n[0],a=n[1],i=Object(c.useState)(0),o=Object(r.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(!1),f=Object(r.a)(b,2),d=f[0],O=f[1],m=Object(c.useState)(!1),v=Object(r.a)(m,2),h=(v[0],v[1]),p=Object(c.useState)(!1),S=Object(r.a)(p,2),x=S[0],y=S[1];return Object(c.useEffect)((function(){a(0)}),[t.class]),Object(c.useEffect)((function(){if("Pause"===t.status)var e=0,n=setInterval((function(){90===e&&(e=-90,a((function(e){return 0!==e?(console.log(t.name,e-1),e-1):(setTimeout((function(){t.reportChange("hours")}),100),59)}))),0===(e+=18)&&clearInterval(n),j(e)}),100)}),[t.val]),Object(c.useEffect)((function(){if("Start"!==t.status&&"Okay"!==t.status||!0!==d||"seconds"!==t.name||x||h(!0),"Okay"===t.status&&(y(!0),a((function(){return 0}))),"seconds"===t.name&&"Pause"===t.status){y(!1),O(!0);var e=0,n=setInterval((function(){90===e&&(e=-90,a((function(e){return 0!==e?e-1:(t.reportChange("minutes"),59)}))),e+=18,h((function(t){return!0===t&&0===e?(clearInterval(n),!1):t})),j(e)}),100)}}),[t.status]),Object(u.jsx)("div",{className:"p",children:Object(u.jsx)("div",{className:"c",onWheel:function(e){if("Start"===t.status){var n,c;function r(t,e){setTimeout((function(){j(t)}),100*e)}if(e.deltaY>=0)if(n=0,s!==t.end)for(var u=0;u<6;u++)-90===(n-=30)&&(n=90,a(s+1)),r(n,u);else a(0);else if(n=0,0!==s)for(u=0;u<6;u++)90===(n+=30)&&(n=-90,a(s-1)),r(n,u);else a(t.end);e.deltaY>=0&&(c=s!==t.end?s+1:0),e.deltaY<=0&&(c=0!==s?s-1:t.end),t.func(c,t.name)}},style:{transform:"rotateX("+l+"deg)"},children:s})})},l=n(5),j=n.p+"static/media/s.24b60537.mp3";var b=function(t){var e=Object(c.useState)("Start"),n=Object(r.a)(e,2),s=n[0],a=n[1],i=Object(l.a)(j),b=Object(r.a)(i,2),f=b[0],d=b[1].stop;Object(c.useEffect)((function(){"Okay"===s&&f(),"Start"==s&&d()}),[s]);var O=Object(c.useState)([!0,!0,0]),m=Object(r.a)(O,2),v=Object(r.a)(m[0],3),h=v[0],p=v[1],S=(v[2],m[1]),x=Object(c.useState)([0,0,0]),y=Object(r.a)(x,2),g=Object(r.a)(y[0],3),k=(g[0],g[1],g[2],y[1]);function T(t,e){k("seconds"===e?function(e){return[e[0],e[1],t]}:"minutes"===e?function(e){return[e[0],t,e[2]]}:function(e){return[t,e[1],e[2]]})}function C(t){k("minutes"===t?function(t){return 0!==t[1]?(S((function(t){return[t[0],!t[1],t[2]]})),[t[0],t[1]-1,t[2]]):0!==t[0]?(S((function(t){return[!t[0],!t[1],t[2]]})),[t[0],59,t[2]]):(a("Okay"),[t[0],t[1],t[2]])}:function(t){return 0!==t[0]?(S((function(t){return[!t[0],t[1],t[2]]})),[t[0]-1,t[1],t[0]]):t})}return Object(c.useEffect)((function(){a("Start")}),[t.class]),Object(u.jsxs)("div",{className:t.class,children:[Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)(o,{class:t.class,val:h,status:s,func:T,end:23,name:"hours",reportChange:C}),Object(u.jsx)(o,{class:t.class,val:p,status:s,func:T,end:59,name:"minutes",reportChange:C}),Object(u.jsx)(o,{class:t.class,val:"constant",status:s,func:T,end:59,name:"seconds",reportChange:C})]}),Object(u.jsx)("button",{style:{color:"white",fontSize:"2vh",backgroundColor:"black",borderRadius:"100%",padding:"10px"},className:"AddTimer",onClick:function(){a("Start"===s?"Pause":"Start")},children:s})]})};var f=function(t){var e=Object(c.useState)("none"),n=Object(r.a)(e,2),s=n[0],a=n[1],i=Object(c.useState)("\u2795"),o=Object(r.a)(i,2),l=o[0],j=o[1],f=Object(c.useState)("displaynone"),d=Object(r.a)(f,2),O=d[0],m=d[1];return Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsxs)("button",{className:"AddTimer",children:[Object(u.jsx)("p",{style:{color:"white",fontSize:"2vh",backgroundColor:"black",borderRadius:"100%",padding:"10px"},onMouseOver:function(){"\u2795"===l&&a("block")},onMouseOut:function(){a("none")},onClick:function(){"\u2795"===l?(t.sendFunction("TimeMinimum"),j("\u2796"),m("countdown")):(t.sendFunction("Time"),j("\u2795"),m("displaynone"))},children:l})," "]}),Object(u.jsx)("div",{style:{width:"100vw",display:"flex",justifyContent:"center",marginTop:"3vh"},children:Object(u.jsx)(b,{class:O})}),Object(u.jsx)("p",{style:{display:s},className:"hoverdisplay",children:"Set Timer"})]})};var d=function(){var t=Object(c.useState)("Time"),e=Object(r.a)(t,2),n=e[0],s=e[1];return Object(u.jsxs)("div",{className:n,children:[Object(u.jsx)(i,{}),Object(u.jsx)(f,{sendFunction:function(t){s(t)}})]})};a.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ccf88f8e.chunk.js.map