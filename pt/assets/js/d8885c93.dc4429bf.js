"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),u=a,b=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return r?n.createElement(b,o(o({ref:t},d),{},{components:r})):n.createElement(b,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"webServerObject",title:"Objeto Web Server"},i=void 0,p={unversionedId:"WebServer/webServerObject",id:"version-20/WebServer/webServerObject",title:"Objeto Web Server",description:"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/pt/WebServer/webServerObject",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"webServerObject",title:"Objeto Web Server"},sidebar:"docs",previous:{title:"Administra\xe7\xe3o",permalink:"/docs/pt/WebServer/webServerAdmin"},next:{title:"Desenvolvimento Web",permalink:"/docs/pt/WebServer/gettingStarted"}},s={},d=[{value:"Instantiating a web server object",id:"instantiating-a-web-server-object",level:2},{value:"Fun\xe7\xf5es do servidor Web",id:"fun\xe7\xf5es-do-servidor-web",level:2},{value:"Propriedades do servidor web",id:"propriedades-do-servidor-web",level:2},{value:"Scope of the 4D Web commands",id:"scope-of-the-4d-web-commands",level:2}],m={toc:d};function c(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component."),(0,n.kt)("p",null,"For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"one web server for the host application,"),(0,n.kt)("li",{parentName:"ul"},"one web server for the component #1,"),(0,n.kt)("li",{parentName:"ul"},"one web server for the component #2.")),(0,n.kt)("p",null,"Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project."),(0,n.kt)("p",null,"Each 4D web server, including the main application's web server, is exposed as a specific ",(0,n.kt)("strong",{parentName:"p"},"object")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"4D. WebServer")," class. Once instantiated, a web server object can be handled from the current application or from any component using a ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass"}),"large number of properties and functions"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The legacy ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"WEB commands")," of the 4D language are supported but cannot select the web server to which they apply (see below).")),(0,n.kt)("p",null,"Each web server (host application or component) can be used in its own separate context, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method calls"),(0,n.kt)("li",{parentName:"ul"},"4D tags processing and method calls,"),(0,n.kt)("li",{parentName:"ul"},"web sessions and TLS protocol management.")),(0,n.kt)("p",null,"This allows you to develop independant components and features that come with their own web interfaces."),(0,n.kt)("h2",a({},{id:"instantiating-a-web-server-object"}),"Instantiating a web server object"),(0,n.kt)("p",null,"The web server object of the host application (default web server) is automatically loaded by 4D at startup. Thus, if you write in a newly created project:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$nbSrv:=WEB Server list.length   \n//$nbSrv value is 1\n")),(0,n.kt)("p",null,"To instantiate a web server object, call the ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass#web-server"}),(0,n.kt)("inlineCode",{parentName:"a"},"WEB Server"))," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"    //create an object variable of the 4D. WebServer class\nvar webServer : 4D. WebServer \n    //call the web server from the current context\nwebServer:=WEB Server  \n\n    //equivalent to\nwebServer:=WEB Server(Web server database)\n")),(0,n.kt)("p",null,"If the application uses components and you want to call:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the host application's web server from a component or"),(0,n.kt)("li",{parentName:"ul"},"the server that received the request (whatever the server),")),(0,n.kt)("p",null,"tamb\xe9m pode ser utilizado:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var webServer : 4D. WebServer \n    //call the host web server from a component  \nwebServer:=WEB Server(Web server host database)  \n    //call the target web server\nwebServer:=WEB Server(Web server receiving request)  \n")),(0,n.kt)("h2",a({},{id:"fun\xe7\xf5es-do-servidor-web"}),"Fun\xe7\xf5es do servidor Web"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass#web-server-object"}),"web server class object")," contains the following functions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Fun\xe7\xf5es"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valor retornado"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/pt/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"start()"))),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"settings (objet)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"status (objecto)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Inicia o servidor web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/pt/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"stop()"))),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"P\xe1ra o servidor Web")))),(0,n.kt)("p",null,"To start and stop a web server, just call the ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"start()"))," and ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass#stop"}),(0,n.kt)("inlineCode",{parentName:"a"},"stop()"))," functions of the web server object:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var $status : Object\n    //to start a web server with default settings\n$status:=webServer.start()\n    //to start the web server with custom settings  \n    //$settings object contains web server properties\nwebServer.start($settings)\n\n    //to stop the web server\n$status:=webServer.stop()\n")),(0,n.kt)("h2",a({},{id:"propriedades-do-servidor-web"}),"Propriedades do servidor web"),(0,n.kt)("p",null,"A web server object contains ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass#web-server-object"}),"various properties")," which configure the web server."),(0,n.kt)("p",null,"These properties are defined:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"using the ",(0,n.kt)("inlineCode",{parentName:"li"},"settings")," parameter of the ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/pt/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},".start()"))," function (except for read-only properties, see below),"),(0,n.kt)("li",{parentName:"ol"},"if not used, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET OPTION")," command (host applications only),"),(0,n.kt)("li",{parentName:"ol"},"if not used, in the settings of the host application or the component.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the web server is not started, the properties contain the values that will be used at the next web server startup."),(0,n.kt)("li",{parentName:"ul"},"If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the ",(0,n.kt)("inlineCode",{parentName:"li"},"settings")," parameter of the ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/pt/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},".start()"))," function.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"isRunning"),", ",(0,n.kt)("em",{parentName:"p"},"name"),", ",(0,n.kt)("em",{parentName:"p"},"openSSLVersion"),", and ",(0,n.kt)("em",{parentName:"p"},"perfectForwardSecrecy")," are read-only properties that cannot be predefined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," object parameter for the ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"start()"))," function.")),(0,n.kt)("h2",a({},{id:"scope-of-the-4d-web-commands"}),"Scope of the 4D Web commands"),(0,n.kt)("p",null,"The 4D Language contains ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"several commands")," that can be used to control the web server. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Comando"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Scope"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SET DATABASE PARAMETER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB CLOSE SESSION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET BODY PART")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get body part count")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get Current Session ID")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP BODY")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP HEADER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET OPTION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get server info")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET SESSION EXPIRATION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get session process count")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET STATISTICS")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET VARIABLES")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Is secured connection")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Is server running")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND HTTP REDIRECT")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND RAW DATA")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET HOME PAGE")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET HTTP HEADER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET OPTION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET ROOT FOLDER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB START SERVER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB STOP SERVER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Host application web server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Validate digest")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Web server that received the request")))))}c.isMDXComponent=!0}}]);