(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),c=t.n(o),i=(t(10),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(1),l={sum:function(e){return e.reduce(function(e,n){return e+n},0)},range:function(e,n){return Array.from({length:n-e+1},function(n,t){return e+t})},random:function(e,n){return e+Math.floor(n*Math.random())},randomSumIn:function(e,n){for(var t=[[]],a=[],r=0;r<e.length;r++)for(var o=0,c=t.length;o<c;o++){var i=t[o].concat(e[r]),s=l.sum(i);s<=n&&(t.push(i),a.push(s))}return a[l.random(0,a.length)]}},m=l,d=function(){var e=Object(a.useState)(m.random(1,9)),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(m.range(1,9)),c=Object(u.a)(o,2),i=c[0],s=c[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),f=d[0],g=d[1],v=Object(a.useState)(10),h=Object(u.a)(v,2),b=h[0],w=h[1];Object(a.useEffect)(function(){if(b>0&&i.length>0){var e=setTimeout(function(){return w(b-1)},1e3);return function(){return clearTimeout(e)}}});return{stars:t,availableNums:i,candidateNums:f,secondsLeft:b,setGameState:function(e){if(m.sum(e)!==t)g(e);else{var n=i.filter(function(n){return!e.includes(n)});r(m.randomSumIn(n,9)),s(n),g([])}}}},f=function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game Over":"Nice"),r.a.createElement("button",{onClick:e.onClick},"Play Again"))},g={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},v=function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:g[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},h=function(e){return r.a.createElement("div",null,m.range(1,e.count).map(function(e){return r.a.createElement("div",{key:e,className:"star"})}))},b=function(e){var n=d(),t=n.stars,a=n.availableNums,o=n.candidateNums,c=n.secondsLeft,i=n.setGameState,s=m.sum(o)>t,u=0===a.length?"won":0===c?"lost":"active",l=function(e){return a.includes(e)?o.includes(e)?s?"wrong":"candidate":"available":"used"},g=function(e,n){if("used"!==n&&0!==c){var t="available"===n?o.concat(e):o.filter(function(n){return n!==e});i(t)}};return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},"active"!==u?r.a.createElement(f,{onClick:e.startNewGame,gameStatus:u}):r.a.createElement(h,{count:t})),r.a.createElement("div",{className:"right"},m.range(1,9).map(function(e){return r.a.createElement(v,{key:e,status:l(e),number:e,onClick:g})}))),r.a.createElement("div",{className:"timer"},"Time Remaining: ",c))},w=function(){var e=Object(a.useState)(1),n=Object(u.a)(e,2),t=n[0],o=n[1];return r.a.createElement(b,{key:t,startNewGame:function(){return o(t+1)}})};c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/star-match",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/star-match","/service-worker.js");i?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(n,e)})}}()},4:function(e,n,t){e.exports=t(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.6087cf10.chunk.js.map