"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4840],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):k(k({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(n),c=l,N=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(N,k(k({ref:t},m),{},{components:n})):a.createElement(N,k({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,k=new Array(r);k[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,k[1]=o;for(var i=2;i<r;i++)k[i]=n[i];return a.createElement.apply(null,k)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},258981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>k,metadata:()=>p,toc:()=>m});n(667294);var a=n(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const k={id:"WebSocketClass",title:"WebSocket"},o=void 0,p={unversionedId:"API/WebSocketClass",id:"version-20-R5/API/WebSocketClass",title:"WebSocket",description:"WebSocket \u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u3068\u306e WebSocket \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u3092\u958b\u3044\u3066\u3001\u30c7\u30fc\u30bf\u3092\u9001\u53d7\u4fe1\u3057\u3001\u63a5\u7d9a\u3092\u9589\u3058\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/API/WebSocketClass.md",sourceDirName:"API",slug:"/API/WebSocketClass",permalink:"/docs/ja/API/WebSocketClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebSocketClass",title:"WebSocket"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/ja/API/WebServerClass"},next:{title:"WebSocketConnection",permalink:"/docs/ja/API/WebSocketConnectionClass"}},i={},m=[{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"websocket-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"<em>connectionHandler</em> \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"connectionhandler-\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:".handler",id:"handler",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".id",id:"id",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:".send()",id:"send",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:".status",id:"status",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-5",level:4},{value:".url",id:"url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-6",level:4}],d={toc:m};function u(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebSocket")," \u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u3068\u306e WebSocket \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u3092\u958b\u3044\u3066\u3001\u30c7\u30fc\u30bf\u3092\u9001\u53d7\u4fe1\u3057\u3001\u63a5\u7d9a\u3092\u9589\u3058\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"WebSocket\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u306f\u3001\u305f\u3068\u3048\u3070\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u8ca1\u52d9\u30c7\u30fc\u30bf\u3092\u53d7\u4fe1\u3057\u305f\u308a\u3001\u30c1\u30e3\u30c3\u30c8\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u53d7\u4fe1\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5c65\u6b74"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30ea\u30ea\u30fc\u30b9"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"20 R2"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8ffd\u52a0"))))),(0,a.kt)("h3",l({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,a.kt)("p",null,"\u3053\u306e\u4f8b\u984c\u3067\u306f\u3001\u57fa\u672c\u7684\u306a WebSocket\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"WebSocket \u30a4\u30d9\u30f3\u30c8\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3092\u542b\u3080 ",(0,a.kt)("inlineCode",{parentName:"li"},"WSConnectionHandler")," \u30e6\u30fc\u30b6\u30fc\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'// WSConnectionHandler \u30af\u30e9\u30b9\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("\u63a5\u7d9a\u3092\u7d42\u4e86\u3057\u307e\u3057\u305f")\n')),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"4D.WebSocket \u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u3066\u30014D\u30d5\u30a9\u30fc\u30e0\u304b\u3089 WebSocket\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u307e\u3059:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"4D\u30d5\u30a9\u30fc\u30e0\u304b\u3089 WebSocket\u30b5\u30fc\u30d0\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'Form.webSocket.send("Hello world")\n\n')),(0,a.kt)("h3",l({},{id:"websocket-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",null,"WebSocket\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#dataType"}),(0,a.kt)("strong",{parentName:"a"},".dataType")," : Text"),(0,a.kt)("br",null),"\u30ec\u30b9\u30dd\u30f3\u30b9\u672c\u6587\u306e\u30c7\u30fc\u30bf\u578b\u3067\u3059")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#handler"}),(0,a.kt)("strong",{parentName:"a"},".handler")," : Object"),(0,a.kt)("br",null),"\u63a5\u7d9a\u3092\u958b\u59cb\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"td"},"connectionHandler")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3059\u308b\u30a2\u30af\u30bb\u30b5\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#id"}),(0,a.kt)("strong",{parentName:"a"},".id")," : Longint"),(0,a.kt)("br",null),"\u63a5\u7d9a\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3092\u683c\u7d0d\u3057\u307e\u3059")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#send"}),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Object )"),(0,a.kt)("br",null),"\u5b9a\u7fa9\u3055\u308c\u305f\u30c7\u30fc\u30bf\u578b (Text\u3001Blob\u3001\u307e\u305f\u306f Object) \u3067\u3001WebSocket \u30b5\u30fc\u30d0\u30fc\u306b ",(0,a.kt)("em",{parentName:"td"},"message")," \u3092\u9001\u4fe1\u3057\u307e\u3059")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#status"}),(0,a.kt)("strong",{parentName:"a"},".status")," : Text"),(0,a.kt)("br",null),'\u73fe\u5728\u306e\u63a5\u7d9a\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u683c\u7d0d\u3057\u307e\u3059 ("Connecting"\u3001"Closing"\u3001"Closed"\u3001"Connected" \u306e\u3044\u305a\u308c\u304b)')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#terminate"}),(0,a.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"a"},"code")," : Integer { ; ",(0,a.kt)("em",{parentName:"a"},"reason")," : Text } } )"),(0,a.kt)("br",null),"\u4efb\u610f\u306e ",(0,a.kt)("em",{parentName:"td"},"code")," \u304a\u3088\u3073 ",(0,a.kt)("em",{parentName:"td"},"reason")," \u5f15\u6570\u3068\u3068\u3082\u306b\u3001WebSocket \u63a5\u7d9a\u3092\u9589\u3058\u307e\u3059")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#url"}),(0,a.kt)("strong",{parentName:"a"},".url")," : Text"),(0,a.kt)("br",null),"WebSocket \u304c\u63a5\u7d9a\u3057\u305f URL \u3092\u683c\u7d0d\u3057\u307e\u3059")))),(0,a.kt)("h2",l({},{id:"4dwebsocketnew"}),"4D.WebSocket.new()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5c65\u6b74"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30ea\u30ea\u30fc\u30b9"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"20 R3"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"connectionHandler")," \u3067 ",(0,a.kt)("inlineCode",{parentName:"td"},"headers")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30b5\u30dd\u30fc\u30c8"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4D.WebSocket.new"),"( ",(0,a.kt)("em",{parentName:"p"},"url")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"connectionHandler")," : Object } ) : 4D.WebSocket"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u5148\u306e URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"#connectionHandler-%E5%BC%95%E6%95%B0"}),"connectionHandler")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"WebSocket\u7528\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u5ba3\u8a00\u3057\u3066\u3044\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u623b\u308a\u5024"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"4D.WebSocket"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u65b0\u3057\u3044 ",(0,a.kt)("a",l({parentName:"td"},{href:"#websocket-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"}),"WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"))))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebSocket.new()")," \u95a2\u6570\u306f\u3001",(0,a.kt)("em",{parentName:"p"},"url")," \u3067\u6307\u5b9a\u3057\u305f\u30a2\u30c9\u30ec\u30b9\u306e WebSocket\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3055\u308c\u305f\u65b0\u3057\u3044 ",(0,a.kt)("a",l({parentName:"p"},{href:"#websocket-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"}),(0,a.kt)("inlineCode",{parentName:"a"},"4D.WebSocket")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u4f5c\u6210\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebSocket")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u3068\u306e WebSocket\u63a5\u7d9a\u306e\u4f5c\u6210\u3068\u7ba1\u7406\u3001\u304a\u3088\u3073\u30c7\u30fc\u30bf\u306e\u9001\u53d7\u4fe1\u306e\u305f\u3081\u306e API \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"url"),"\u306b\u306f\u3001WebSocket\u30b5\u30fc\u30d0\u30fc\u304c\u5fdc\u7b54\u3059\u308b URL \u3092\u6e21\u3057\u307e\u3059\u3002 \u4ee5\u4e0b\u306e URL\u30d1\u30bf\u30fc\u30f3\u304c\u4f7f\u7528\u3067\u304d\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a19\u6e96\u63a5\u7d9a\u7528: ",(0,a.kt)("inlineCode",{parentName:"li"},"ws://host[:port]path[?query]")),(0,a.kt)("li",{parentName:"ul"},"TLS\u30bb\u30ad\u30e5\u30a2\u63a5\u7d9a\u7528: ",(0,a.kt)("inlineCode",{parentName:"li"},"wss://host[:port]path[?query]"))),(0,a.kt)("p",null,"\u63a5\u7d9a\u3067\u304d\u306a\u3044\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u3055\u308c\u3001\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u307e\u3059 (\u3053\u306e\u30a8\u30e9\u30fc\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," \u3067\u5b9f\u88c5\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u3063\u3066\u30a4\u30f3\u30bf\u30fc\u30bb\u30d7\u30c8\u3067\u304d\u307e\u3059)\u3002"),(0,a.kt)("h3",l({},{id:"connectionhandler-\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),(0,a.kt)("em",{parentName:"h3"},"connectionHandler")," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"connectionHandler")," \u306b\u306f\u3001\u63a5\u7d9a\u30a4\u30d9\u30f3\u30c8\u306b\u5fdc\u3058\u3066\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u306e\u307b\u304b\u3001\u51e6\u7406\u3059\u308b\u30c7\u30fc\u30bf\u578b\u3084\u30d8\u30c3\u30c0\u30fc\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u3001\u63a5\u7d9a\u3092\u958b\u59cb\u3057\u305f\u30d5\u30a9\u30fc\u30e0\u307e\u305f\u306f\u30ef\u30fc\u30ab\u30fc\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u307e\u305f\u306f\u30ef\u30fc\u30ab\u30fc\u304c\u9589\u3058\u3089\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001WebSocket \u306f\u6709\u52b9\u3067\u3059\u3002")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onMessage"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/ja/API/FunctionClass"}),"Function")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"WebSocket \u30c7\u30fc\u30bf\u7528\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3002 WebSocket \u304c\u30c7\u30fc\u30bf\u3092\u53d7\u4fe1\u3059\u308b\u305f\u3073\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u4ee5\u4e0b\u306e\u5f15\u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): \u5e38\u306b "message"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.data")," (text, BLOB, \u307e\u305f\u306f object\u3002",(0,a.kt)("inlineCode",{parentName:"td"},"dataType")," \u53c2\u7167): \u53d7\u4fe1\u30c7\u30fc\u30bf")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/ja/API/FunctionClass"}),"Function")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5b9f\u884c\u30a8\u30e9\u30fc\u7528\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3002 \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u4ee5\u4e0b\u306e\u5f15\u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): \u5e38\u306b "error"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.errors"),": \u5b9f\u884c\u30a8\u30e9\u30fc\u306e\u5834\u5408\u30014D\u30a8\u30e9\u30fc\u30b9\u30bf\u30c3\u30af\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002",(0,a.kt)("ul",null,(0,a.kt)("li",null,"[].errCode (number): 4D\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"),(0,a.kt)("li",null,"[].message (text): 4D\u30a8\u30e9\u30fc\u306e\u8aac\u660e"),(0,a.kt)("li",null,"[].componentSignature (text) - \u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u305f\u5185\u90e8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7f72\u540d")))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onTerminate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/ja/API/FunctionClass"}),"Function")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"WebSocket \u304c\u7d42\u4e86\u3057\u305f\u6642\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3002 \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u4ee5\u4e0b\u306e\u5f15\u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.code")," (number\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528): \u7b26\u53f7\u306a\u3057\u77ed\u6574\u6570\u578b\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u9001\u3089\u308c\u305f\u30af\u30ed\u30fc\u30ba\u30b3\u30fc\u30c9\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.reason")," (text\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528): \u30b5\u30fc\u30d0\u30fc\u304c\u63a5\u7d9a\u3092\u5207\u65ad\u3057\u305f\u7406\u7531\u3002 \u3053\u308c\u306f\u3001\u5bfe\u8c61\u306e\u30b5\u30fc\u30d0\u30fc\u3068\u30b5\u30d6\u30d7\u30ed\u30c8\u30b3\u30eb\u306b\u56fa\u6709\u306e\u3082\u306e\u3067\u3059\u3002")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onOpen"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/ja/API/FunctionClass"}),"Function")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"WebSocket \u304c\u958b\u59cb\u3057\u305f\u6642\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u3002 \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u4ee5\u4e0b\u306e\u5f15\u6570\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): \u5e38\u306b "open"')))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"dataType"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),'\u53d7\u4fe1\u307e\u305f\u306f\u9001\u4fe1\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u578b\u3002 \u53ef\u80fd\u306a\u5024: "text" (\u30c7\u30d5\u30a9\u30eb\u30c8), "blob", "object"\u3002 "text" = utf-8')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"headers"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"WebSocket \u306e\u30d8\u30c3\u30c0\u30fc\u3002",(0,a.kt)("li",null,"\u6a19\u6e96\u7684\u306a key \u5272\u308a\u5f53\u3066\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9:",(0,a.kt)("inlineCode",{parentName:"td"}," headers.*key*:=*value*")," (\u540c\u3058 key \u3092\u8907\u6570\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001",(0,a.kt)("em",{parentName:"td"},"value")," \u306b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059)"),(0,a.kt)("li",null,"Cookie\u5272\u308a\u5f53\u3066\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9 (\u7279\u5b9a\u306e\u5834\u5408): ",(0,a.kt)("inlineCode",{parentName:"td"},'headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"')))))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u547c\u3073\u51fa\u3057\u306e\u6d41\u308c\u3067\u3059:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onOpen")," \u306f 1\u56de\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onMessage")," \u304c 0\u56de\u4ee5\u4e0a\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onError")," \u304c 0\u56de\u307e\u305f\u306f 1\u56de\u5b9f\u884c\u3055\u308c\u307e\u3059 (\u51e6\u7406\u3092\u505c\u6b62\u3057\u307e\u3059)\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onTerminate")," \u306f\u5e38\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("h4",l({},{id:"\u4f8b\u984c-1"}),"\u4f8b\u984c"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WSConnectionHandler")," \u30e6\u30fc\u30b6\u30fc\u30af\u30e9\u30b9\u3067\u30d8\u30c3\u30c0\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'// WSConnectionHandler \u30af\u30e9\u30b9\n\nClass constructor($myToken:Text)\n\n// \u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3059\u308b\u30d8\u30c3\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\nThis.headers:=New object("x-authorization";$myToken)\n// 2\u3064\u306e Cookie \u3092\u8a2d\u5b9a\u3057\u307e\u3059\nThis.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"\n...\n\n')),(0,a.kt)("h2",l({},{id:"datatype"}),".dataType"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".dataType")," : Text"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".dataType"),' \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u672c\u6587\u306e\u30c7\u30fc\u30bf\u578b\u3067\u3059\u3002 "text"\u3001"blob"\u3001"object" \u306e\u3044\u305a\u308c\u304b\u3067\u3059\u3002'),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"),(0,a.kt)("h2",l({},{id:"handler"}),".handler"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".handler")," : Object"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-1"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".handler")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u63a5\u7d9a\u3092\u958b\u59cb\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionHandler")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3059\u308b\u30a2\u30af\u30bb\u30b5\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"),(0,a.kt)("h2",l({},{id:"id"}),".id"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".id")," : Longint"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-2"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".id")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u63a5\u7d9a\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"),(0,a.kt)("h2",l({},{id:"send"}),".send()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Object )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text, Blob, Object"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9001\u4fe1\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-3"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".send()")," \u95a2\u6570\u306f\u3001\u5b9a\u7fa9\u3055\u308c\u305f\u30c7\u30fc\u30bf\u578b (Text\u3001Blob\u3001\u307e\u305f\u306f Object) \u3067\u3001WebSocket \u30b5\u30fc\u30d0\u30fc\u306b ",(0,a.kt)("em",{parentName:"p"},"message")," \u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u30e1\u30c3\u30bb\u30fc\u30b8")," \u306e\u578b\u306b\u3088\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"UTF-8 \u306e\u30c6\u30ad\u30b9\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"JSON UTF-8 \u306e\u30c6\u30ad\u30b9\u30c8 (",(0,a.kt)("a",l({parentName:"td"},{href:"https://doc.4d.com/4dv20/help/command/ja/page1217.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"JSON Stringify"))," \u3068\u540c\u3058\u7d50\u679c)\u3002")))),(0,a.kt)("h2",l({},{id:"status"}),".status"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".status")," : Text"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-4"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".status"),' \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u73fe\u5728\u306e\u63a5\u7d9a\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u683c\u7d0d\u3057\u307e\u3059 ("Connecting"\u3001"Closing"\u3001"Closed"\u3001"Connected" \u306e\u3044\u305a\u308c\u304b)\u3002'),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"),(0,a.kt)("h2",l({},{id:"terminate"}),".terminate()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"p"},"code")," : Integer { ; ",(0,a.kt)("em",{parentName:"p"},"reason")," : Text } } )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"})),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u304c\u5207\u65ad\u3055\u308c\u308b\u7406\u7531\u3092\u793a\u3059\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"reason"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u63a5\u7d9a\u304c\u5207\u65ad\u3055\u308c\u308b\u7406\u7531\u3092\u8aac\u660e\u3059\u308b\u30c6\u30ad\u30b9\u30c8")))),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-5"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".terminate()")," \u95a2\u6570\u306f\u3001\u4efb\u610f\u306e ",(0,a.kt)("em",{parentName:"p"},"code")," \u304a\u3088\u3073 ",(0,a.kt)("em",{parentName:"p"},"reason")," \u5f15\u6570\u3068\u3068\u3082\u306b\u3001WebSocket \u63a5\u7d9a\u3092\u9589\u3058\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"code")," \u306b\u306f\u3001\u63a5\u7d9a\u3092\u9589\u3058\u308b\u7406\u7531\u3092\u8aac\u660e\u3059\u308b\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (",(0,a.kt)("a",l({parentName:"p"},{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5"}),"RFC6455 \u306e WebSocket Connection Close Code")," \u3082\u53c2\u7167\u304f\u3060\u3055\u3044):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u63a5\u7d9a\u306e\u30af\u30ed\u30fc\u30ba\u30b3\u30fc\u30c9\u306f\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059: \u901a\u5e38\u7d42\u4e86\u306e\u5834\u5408\u306f 1000\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u3001\u63a5\u7d9a\u304c\u5207\u65ad\u3055\u308c\u305f\u5b9f\u969b\u306e\u7406\u7531\u3092\u793a\u3059 1001\u301c1015 \u306e\u6a19\u6e96\u5024\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u306e code \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u306f\u81ea\u52d5\u8a2d\u5b9a\u306e\u5024\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u307e\u3059\u3002 \u5024\u306f\u6574\u6570\u3067\u306a\u304f\u3066\u306f\u306a\u308a\u307e\u305b\u3093\u3002 1000\u3001\u307e\u305f\u306f 3000-4999 \u306e\u7bc4\u56f2\u306e\u30ab\u30b9\u30bf\u30e0\u30b3\u30fc\u30c9\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u3002 ",(0,a.kt)("em",{parentName:"li"},"code")," \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u306f\u3001",(0,a.kt)("em",{parentName:"li"},"reason")," \u306e\u5024\u3082\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"reason")," \u306b\u306f\u3001\u63a5\u7d9a\u3092\u9589\u3058\u308b\u7406\u7531\u3092\u8aac\u660e\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",l({},{id:"url"}),".url"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".url")," : Text"),(0,a.kt)("h4",l({},{id:"\u8aac\u660e-6"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".url")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001WebSocket \u304c\u63a5\u7d9a\u3057\u305f URL \u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001",(0,a.kt)("a",l({parentName:"p"},{href:"#4dwebsocketnew"}),(0,a.kt)("inlineCode",{parentName:"a"},"new()"))," \u95a2\u6570\u306b\u6e21\u3057\u305f URL \u3068\u540c\u3058\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"))}u.isMDXComponent=!0}}]);