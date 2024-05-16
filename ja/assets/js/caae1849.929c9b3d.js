"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68067],{603905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),i=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(k.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=i(n),c=r,u=s["".concat(k,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},575376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>k,toc:()=>m});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"WebSocketConnectionClass",title:"WebSocketConnection"},p=void 0,k={unversionedId:"API/WebSocketConnectionClass",id:"version-20-R5/API/WebSocketConnectionClass",title:"WebSocketConnection",description:"WebSocketConnection \u30af\u30e9\u30b9 API \u306f\u3001WebSocketServer \u30af\u30e9\u30b9 \u3092\u4f7f\u3063\u3066\u78ba\u7acb\u3055\u308c\u305f WebSocket \u63a5\u7d9a\u3092\u7ba1\u7406\u3059\u308b\u306e\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/ja/API/WebSocketConnectionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebSocket",permalink:"/docs/ja/API/WebSocketClass"},next:{title:"WebSocketServer",permalink:"/docs/ja/API/WebSocketServerClass"}},i={},m=[{value:"WebSocketConnection \u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"websocketconnection-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3},{value:".handler",id:"handler",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:".id",id:"id",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".send()",id:"send",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:".status",id:"status",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4},{value:".wss",id:"wss",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-5",level:4}],d={toc:m};function s(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," \u30af\u30e9\u30b9 API \u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")," \u30af\u30e9\u30b9")," \u3092\u4f7f\u3063\u3066\u78ba\u7acb\u3055\u308c\u305f WebSocket \u63a5\u7d9a\u3092\u7ba1\u7406\u3059\u308b\u306e\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"4D \u306b\u304a\u3051\u308b WebSocket\u30b5\u30fc\u30d0\u30fc\u306e\u5b9f\u88c5\u306e\u6982\u8981\u3068\u3044\u304f\u3064\u304b\u306e\u4f8b\u984c\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")," \u30af\u30e9\u30b9")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5c65\u6b74"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30ea\u30ea\u30fc\u30b9"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"20"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8ffd\u52a0"))))),(0,a.kt)("h3",r({},{id:"websocketconnection-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"WebSocketConnection \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass#4dwebsocketservernew"}),"WebSocketServer \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u306e ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass#wsshandler-%E5%BC%95%E6%95%B0"}),(0,a.kt)("inlineCode",{parentName:"a"},"WSHandler.onConnection"))," \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass#connectionhandler-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"}),(0,a.kt)("inlineCode",{parentName:"a"},"connectionHandler"))," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u3068\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"WebSocketConnection \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u6b21\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u95a2\u6570\u3092\u63d0\u4f9b\u3057\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#handler"}),(0,a.kt)("strong",{parentName:"a"},".handler")," : Object"),(0,a.kt)("br",null),"\u63a5\u7d9a\u3092\u958b\u59cb\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"td"},"connectionHandler")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3059\u308b\u30a2\u30af\u30bb\u30b5\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#id"}),(0,a.kt)("strong",{parentName:"a"},".id")," : Integer"),(0,a.kt)("br",null),"\u63a5\u7d9a\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3092\u683c\u7d0d\u3057\u307e\u3059")))),(0,a.kt)("p",null,"| ",(0,a.kt)("a",r({parentName:"p"},{href:"#send()"}),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Object )"),(0,a.kt)("br",null),"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b ",(0,a.kt)("em",{parentName:"p"},"message")," \u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u30e1\u30c3\u30bb\u30fc\u30b8")," \u306e\u578b\u306b\u3088\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UTF-8 \u306e\u30c6\u30ad\u30b9\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"JSON UTF-8 \u306e\u30c6\u30ad\u30b9\u30c8 (",(0,a.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/ja/page1217.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"JSON Stringify"))," \u3068\u540c\u3058\u7d50\u679c)\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"            |\n")),(0,a.kt)("p",null,"| ",(0,a.kt)("a",r({parentName:"p"},{href:"#status"}),(0,a.kt)("strong",{parentName:"a"},".status")," : Text"),(0,a.kt)("br",null),'\u63a5\u7d9a\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u683c\u7d0d\u3057\u307e\u3059 ("Closing"\u3001"Closed"\u3001"Connected" \u306e\u3044\u305a\u308c\u304b)                  |\n| ',(0,a.kt)("a",r({parentName:"p"},{href:"#terminate()"}),(0,a.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"a"},"code")," : Integer ; ",(0,a.kt)("em",{parentName:"a"},"message")," : Text } )"),(0,a.kt)("br",null),"\u63a5\u7d9a\u3092\u5f37\u5236\u7d42\u4e86\u3057\u307e\u3059 |\n| ",(0,a.kt)("a",r({parentName:"p"},{href:"#wss"}),(0,a.kt)("strong",{parentName:"a"},".wss")," : 4D.WebSocketServer"),(0,a.kt)("br",null),"\u63a5\u7d9a\u306e ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass#4dwebsocketservernew"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer"))," \u89aa\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u683c\u7d0d\u3057\u307e\u3059                           |"),(0,a.kt)("h2",r({},{id:"handler"}),".handler"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".handler")," : Object"),(0,a.kt)("h4",r({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".handler")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u63a5\u7d9a\u3092\u958b\u59cb\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionHandler")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3059\u308b\u30a2\u30af\u30bb\u30b5\u30fc\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",r({},{id:"id"}),".id"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".id")," : Integer"),(0,a.kt)("h4",r({},{id:"\u8aac\u660e-1"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".id")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u63a5\u7d9a\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"),(0,a.kt)("h2",r({},{id:"send"}),".send()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Object )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text / Blob / Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9001\u4fe1\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,a.kt)("h4",r({},{id:"\u8aac\u660e-2"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".send()")," \u95a2\u6570\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b ",(0,a.kt)("em",{parentName:"p"},"message")," \u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u30e1\u30c3\u30bb\u30fc\u30b8")," \u306e\u578b\u306b\u3088\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UTF-8 \u306e\u30c6\u30ad\u30b9\u30c8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"JSON UTF-8 \u306e\u30c6\u30ad\u30b9\u30c8 (",(0,a.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/ja/page1217.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"JSON Stringify"))," \u3068\u540c\u3058\u7d50\u679c)\u3002")))),(0,a.kt)("h2",r({},{id:"status"}),".status"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".status")," : Text"),(0,a.kt)("h4",r({},{id:"\u8aac\u660e-3"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".status"),' \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u63a5\u7d9a\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u683c\u7d0d\u3057\u307e\u3059 ("Closing"\u3001"Closed"\u3001"Connected" \u306e\u3044\u305a\u308c\u304b)\u3002'),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"),(0,a.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"p"},"code")," : Integer ; ",(0,a.kt)("em",{parentName:"p"},"message")," : Text } )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3055\u308c\u308b\u30a8\u30e9\u30fc\u30b3\u30fc\u30c9 ( > 3000 \u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u9001\u4fe1\u3055\u308c\u307e\u305b\u3093)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3055\u308c\u308b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,a.kt)("h4",r({},{id:"\u8aac\u660e-4"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".terminate()")," \u95a2\u6570\u306f\u3001\u63a5\u7d9a\u3092\u5f37\u5236\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u7d42\u4e86\u6642\u306b\u3001",(0,a.kt)("em",{parentName:"p"},"code")," \u3068 ",(0,a.kt)("em",{parentName:"p"},"message")," \u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3057\u3001\u7d42\u4e86\u306e\u7406\u7531\u3092\u793a\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",r({},{id:"wss"}),".wss"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".wss")," : 4D.WebSocketServer"),(0,a.kt)("h4",r({},{id:"\u8aac\u660e-5"}),"\u8aac\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".wss")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u63a5\u7d9a\u306e ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/WebSocketServerClass#4dwebsocketservernew"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer"))," \u89aa\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f \u8aad\u307f\u53d6\u308a\u5c02\u7528 \u3067\u3059\u3002"))}s.isMDXComponent=!0}}]);