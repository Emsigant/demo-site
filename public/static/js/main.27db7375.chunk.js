(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),c=(n(15),n(3)),i=n(4),s=n(7),u=n(5),m=n(8),d=(n(16),n(6)),f=n.n(d),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={list:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/test").then(function(e){return e.json()}).then(function(t){e.setState(function(){return{list:t}})})}},{key:"render",value:function(){var e=this.state.list;return r.a.createElement("div",null,r.a.createElement("div",{className:"logo-wrap"},r.a.createElement("img",{src:f.a,className:"logo"})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/react-demo"},"react-demo")),r.a.createElement("li",null,r.a.createElement("a",{href:"/angular-demo"},"angular-demo")),r.a.createElement("li",null,r.a.createElement("a",{href:"/api/test"},"test api")))),r.a.createElement("div",{className:"list"},r.a.createElement("ul",null,e.map(function(e,t){return r.a.createElement("li",{key:t},e.username," - ",e.password)}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.27db7375.chunk.js.map