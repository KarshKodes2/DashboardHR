(this.webpackJsonpdashboard_app=this.webpackJsonpdashboard_app||[]).push([[0],{26:function(e,a,t){},27:function(e,a,t){e.exports=t.p+"static/media/profile.13ef868e.jpg"},28:function(e,a,t){e.exports=t.p+"static/media/solab-logo2.152d4c02.png"},37:function(e,a,t){e.exports=t(54)},42:function(e,a,t){},43:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(7),o=t.n(l),r=t(55),s=t(56),m=t(27),i=t.n(m);t(42);var u=function(e){return c.a.createElement("nav",{className:"main_nav"},c.a.createElement("div",{className:"left_nav"}),c.a.createElement("div",{className:"right_nav"},c.a.createElement(r.a,{className:"nav_icon1"}),c.a.createElement(s.a,{className:"nav_icon1"}),c.a.createElement("img",{className:"users_logo",src:i.a,alt:"persons pic"})))},d=t(57),E=t(58),p=t(59),v=t(60),f=(t(43),t(14)),h=t(28),N=t.n(h);var b=function(e){return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"navLogo"},c.a.createElement("img",{className:"logo-image",src:N.a,alt:"Solab Technologies"})),c.a.createElement("div",{className:"navLinks"},c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(d.a,{className:"nav_icon"})," ",c.a.createElement(f.b,{className:"link",to:"/dashboard"},"Dashboard")),c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(d.b,{className:"nav_icon"})," ",c.a.createElement(f.b,{className:"link",to:"/report"},"Report")," "),c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(E.b,{className:"nav_icon"})," Message"),c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(s.c,{className:"nav_icon"}),c.a.createElement(f.b,{className:"link",to:"/schedule"},"Schedule")),c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(d.c,{className:"nav_icon"})," ",c.a.createElement(f.b,{className:"link",to:"/request"},"Request")),c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(p.b,{className:"nav_icon"})," Profile"),c.a.createElement("p",{className:"linkTag"}," ",c.a.createElement(v.a,{className:"nav_icon"})," Settings")))};t(48),t(49);var g=function(e){return c.a.createElement("section",{style:{overflow:"hidden",height:"100vh"}},c.a.createElement(u,null),c.a.createElement("div",{className:"layout"},c.a.createElement(b,null),c.a.createElement("div",{className:"content"},e.children)))},k=t(13);t(50);var y=function(e){return c.a.createElement("div",{id:"MainCard",className:e.className},c.a.createElement("div",{className:"left"},c.a.createElement("p",{className:"info"},e.info),c.a.createElement("h5",{className:"subtitle"},e.subtitle)),c.a.createElement("div",{className:"right"},c.a.createElement("p",{className:"icon"},e.icon)))};t(51),t(26);var x=function(e){return c.a.createElement("div",{className:"todo-item"},c.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),c.a.createElement("p",{className:e.item.completed&&"strike"},e.item.text))},_=[{id:1,text:"Refactor Mizi code",completed:!0},{id:2,text:"Create Shobbu dashboard",completed:!1},{id:3,text:"Buy food at 2pm",completed:!0},{id:4,text:"Generate Weekly report for Kumbi",completed:!1},{id:5,text:"Complete Ifeanyi's assignment",completed:!0},{id:6,text:"Deliver package to owner",completed:!0}];var T=function(e){var a=_.map((function(e){return c.a.createElement(x,{key:e.id,item:e})}));return c.a.createElement("div",{className:"MainBody"},c.a.createElement("h3",{className:"subtitle"}," ",c.a.createElement(d.a,{className:"subIcon"})," DASHBOARD"),c.a.createElement("div",{className:"view"},c.a.createElement(y,{className:"TotalMoney",subtitle:"Total Investment",info:"$7,500",icon:c.a.createElement(E.a,null)}),c.a.createElement(y,{className:"Revenue",subtitle:"Total Revenue",info:"$12,500",icon:c.a.createElement(s.b,null)}),c.a.createElement(y,{className:"Investment",subtitle:"Current Investment",info:"$3,000",icon:c.a.createElement(p.a,null)}),c.a.createElement(y,{className:"Balance",subtitle:"Total Balance",info:"$8,200",icon:c.a.createElement(p.c,null)})),c.a.createElement("div",{className:"todo-list"},a),c.a.createElement("div",{className:"copyright"},c.a.createElement("p",null,"Copyright \xa9 2020 Solab Technologies. All rights reserved.")))},w=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Report"),c.a.createElement("p",null))},j=t(22),O=t(34),S=t.n(O),C=(t(53),Object(j.b)(S.a)),R=function(e){return c.a.createElement("div",null,c.a.createElement(j.a,{localizer:C,events:[],startAccessor:"start",endAccessor:"end",style:{height:500}}))},B=t(36),M=t(35),q=function(e){var a=Object(n.useState)({todos:[]}),t=Object(M.a)(a,2),l=t[0],o=t[1];Object(n.useEffect)((function(){o({todos:_})}),[]),Object(n.useEffect)((function(){console.log("hello......")}),[l.todos]),Object(n.useEffect)((function(){console.log("updating....")})),Object(n.useEffect)((function(){return function(){alert("you are now leaving bye bye.....")}}),[]);var r=function(e){var a=l.todos.map((function(a){return a.id===e&&(a.completed=!a.completed),a}));o(Object(B.a)({},l,{todos:a}))};return c.a.createElement("div",null,c.a.createElement("h1",null,"Request"),c.a.createElement("div",{className:"todo-list"},l.todos.map((function(e){return c.a.createElement(x,{key:e.id,item:e,handleChange:r})}))))};var A=function(){return c.a.createElement(f.a,null,c.a.createElement(k.c,null,c.a.createElement(g,null,c.a.createElement(k.a,{exact:!0,path:"/dashboard",component:T}),c.a.createElement(k.a,{exact:!0,path:"/report",component:w}),c.a.createElement(k.a,{exact:!0,path:"/schedule",component:R}),c.a.createElement(k.a,{exact:!0,path:"/request",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.7c42ec85.chunk.js.map