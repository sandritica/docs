"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45443],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(n),m=r,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||o;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},272623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"WebSocketConnectionClass",title:"WebSocketConnection"},i=void 0,s={unversionedId:"API/WebSocketConnectionClass",id:"version-20-R5/API/WebSocketConnectionClass",title:"WebSocketConnection",description:"The WebSocketConnection class API allows you to handle WebSocket connections, once established using the WebSocketServer class.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/es/API/WebSocketConnectionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebSocket",permalink:"/docs/es/API/WebSocketClass"},next:{title:"WebSocketServer",permalink:"/docs/es/API/WebSocketServerClass"}},c={},p=[{value:"Objeto WebSocketConnection",id:"objeto-websocketconnection",level:3},{value:".handler",id:"handler",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".id",id:"id",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".send()",id:"send",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".status",id:"status",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".wss",id:"wss",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4}],d={toc:p};function k(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," class API allows you to handle WebSocket connections, once established using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebSocketServerClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")," class"),"."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"For an overview and some examples of the WebSocket server implementation in 4D, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebSocketServerClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")," class"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historia"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"20"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,a.kt)("h3",r({},{id:"objeto-websocketconnection"}),"Objeto WebSocketConnection"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," object is automatically created when the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebSocketServerClass#wsshandler-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"WSHandler.onConnection"))," callback function of the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebSocketServerClass#4dwebsocketservernew"}),"WebSocketServer object")," returns a ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebSocketServerClass#connectionhandler-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"connectionHandler"))," object."),(0,a.kt)("p",null,"Los objetos WebSocketConnection ofrecen las siguientes propiedades y funciones:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#handler"}),(0,a.kt)("strong",{parentName:"a"},".handler")," : Object"),(0,a.kt)("br",null),"the accessor that gets the ",(0,a.kt)("inlineCode",{parentName:"td"},"connectionHandler")," object used to initiate the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#id"}),(0,a.kt)("strong",{parentName:"a"},".id")," : Integer"),(0,a.kt)("br",null),"the unique identifier of the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#send()"}),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Object )"),(0,a.kt)("br",null),"sends a ",(0,a.kt)("em",{parentName:"td"},"message")," to the client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#status"}),(0,a.kt)("strong",{parentName:"a"},".status")," : Text"),(0,a.kt)("br",null),'the connection status (can be "Closing", "Closed" or  "Connected")')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#terminate()"}),(0,a.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"a"},"code")," : Integer ; ",(0,a.kt)("em",{parentName:"a"},"message")," : Text } )"),(0,a.kt)("br",null),"forces the connection to close")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#wss"}),(0,a.kt)("strong",{parentName:"a"},".wss")," : 4D.WebSocketServer"),(0,a.kt)("br",null),"the ",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/es/API/WebSocketServerClass#4dwebsocketservernew"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer"))," parent object of the connection")))),(0,a.kt)("h2",r({},{id:"handler"}),".handler"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".handler")," : Object"),(0,a.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".handler")," property contains the accessor that gets the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionHandler")," object used to initiate the connection."),(0,a.kt)("h2",r({},{id:"id"}),".id"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".id")," : Integer"),(0,a.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".id")," property contains the unique identifier of the connection."),(0,a.kt)("p",null,"Esta propiedad es de s\xf3lo lectura."),(0,a.kt)("h2",r({},{id:"send"}),".send()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Object )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text / Blob / Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"El mensaje a enviar")))),(0,a.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".send()")," function sends a ",(0,a.kt)("em",{parentName:"p"},"message")," to the client."),(0,a.kt)("p",null,"The following contents are sent depending on the ",(0,a.kt)("em",{parentName:"p"},"message")," type:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Contenido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Texto en UTF-8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Datos binarios")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text in JSON UTF-8 (same result as with ",(0,a.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"JSON Stringify")),")")))),(0,a.kt)("h2",r({},{id:"status"}),".status"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".status")," : Text"),(0,a.kt)("h4",r({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".status"),' property contains the connection status (can be "Closing", "Closed" or  "Connected").'),(0,a.kt)("p",null,"Esta propiedad es de s\xf3lo lectura."),(0,a.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"p"},"code")," : Integer ; ",(0,a.kt)("em",{parentName:"p"},"message")," : Text } )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Error code sent to the client (must be > 3000, otherwise the message is not sent)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mensaje de error enviado al cliente")))),(0,a.kt)("h4",r({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".terminate()")," function forces the connection to close."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"code")," and ",(0,a.kt)("em",{parentName:"p"},"message")," can be sent to the client during the closure to indicate the reason of the termination."),(0,a.kt)("h2",r({},{id:"wss"}),".wss"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".wss")," : 4D.WebSocketServer"),(0,a.kt)("h4",r({},{id:"descripci\xf3n-5"}),"Descripci\xf3n"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".wss")," property contains the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebSocketServerClass#4dwebsocketservernew"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer"))," parent object of the connection."),(0,a.kt)("p",null,"Esta propiedad es de s\xf3lo lectura."))}k.isMDXComponent=!0}}]);