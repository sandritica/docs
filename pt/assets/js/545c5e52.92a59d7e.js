"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=s,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const r={id:"datastores",title:"Using a remote datastore"},i=void 0,l={unversionedId:"ORDA/datastores",id:"version-19/ORDA/datastores",title:"Using a remote datastore",description:"A datastore exposed on a 4D application can be accessed simultaneously through different clients:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/pt/19/ORDA/datastores",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"datastores",title:"Using a remote datastore"},sidebar:"docs",previous:{title:"Working with data",permalink:"/docs/pt/19/ORDA/entities"},next:{title:"Glossary",permalink:"/docs/pt/19/ORDA/glossary"}},c={},p=[{value:"Opening sessions",id:"opening-sessions",level:2},{value:"Viewing sessions",id:"viewing-sessions",level:2},{value:"Locking and transactions",id:"locking-and-transactions",level:2},{value:"Closing sessions",id:"closing-sessions",level:2}],d={toc:p};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",s({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/pt/19/ORDA/dsmapping#datastore"}),"datastore")," exposed on a 4D application can be accessed simultaneously through different clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4D remote applications using ORDA to access the main datastore with the ",(0,a.kt)("inlineCode",{parentName:"li"},"ds")," command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the ",(0,a.kt)("strong",{parentName:"li"},"4D application server"),"."),(0,a.kt)("li",{parentName:"ul"},"Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the ",(0,a.kt)("inlineCode",{parentName:"li"},"Open datastore")," command. These accesses are handled by the ",(0,a.kt)("strong",{parentName:"li"},"HTTP REST server"),"."),(0,a.kt)("li",{parentName:"ul"},"4D for iOS queries for updating iOS applications. These accesses are handled by the ",(0,a.kt)("strong",{parentName:"li"},"HTTP server"),".")),(0,a.kt)("p",null,"When you work with a remote datastore referenced through calls to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, the connection between the requesting processes and the remote datastore is handled via sessions."),(0,a.kt)("h2",s({},{id:"opening-sessions"}),"Opening sessions"),(0,a.kt)("p",null,"When a 4D application (",(0,a.kt)("em",{parentName:"p"},"i.e.")," a process) opens an external datastore using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, a session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the ",(0,a.kt)("inlineCode",{parentName:"p"},"localID")," on the 4D application. This session automatically manages access to data, entity selections, or entities."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"localID")," is local to the machine that connects to the remote datastore, which means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If other processes of the same application need to access the same remote datastore, they can use the same ",(0,a.kt)("inlineCode",{parentName:"li"},"localID")," and thus, share the same session."),(0,a.kt)("li",{parentName:"ul"},"If another process of the same application opens the same remote datastore but with another ",(0,a.kt)("inlineCode",{parentName:"li"},"localID"),", it will create a new session on the remote datastore."),(0,a.kt)("li",{parentName:"ul"},"If another machine connects to the same remote datastore with the same ",(0,a.kt)("inlineCode",{parentName:"li"},"localID"),", it will create another session with another cookie.")),(0,a.kt)("p",null,"These principles are illustrated in the following graphics:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(12155).Z,width:"962",height:"719"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For sessions opened by REST requests, please refer to ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/pt/19/REST/authUsers"}),"Users and sessions"),".")),(0,a.kt)("h2",s({},{id:"viewing-sessions"}),"Viewing sessions"),(0,a.kt)("p",null,"Processes that manage sessions for datastore access are shown in the 4D Server administration window:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'name: "REST Handler: \\<process name',">",'"'),(0,a.kt)("li",{parentName:"ul"},"type: HTTP Server Worker type"),(0,a.kt)("li",{parentName:"ul"},"session: session name is the user name passed to the Open datastore command.")),(0,a.kt)("p",null,"In the following example, two processes are running for the same session:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86356).Z,width:"1402",height:"708"})),(0,a.kt)("h2",s({},{id:"locking-and-transactions"}),"Locking and transactions"),(0,a.kt)("p",null,"ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see ",(0,a.kt)("a",s({parentName:"li"},{href:"/docs/pt/19/ORDA/entities#entity-locking"}),"Entity locking"),"). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory."),(0,a.kt)("li",{parentName:"ul"},"Transactions can be started, validated or cancelled separately on each remote datastore using the ",(0,a.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()")," functions. They do not impact other datastores."),(0,a.kt)("li",{parentName:"ul"},"Classic 4D language commands (",(0,a.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") only apply to the main datastore (returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"ds"),"). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session."),(0,a.kt)("li",{parentName:"ul"},"Locks on entities are removed and transactions are rollbacked:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when the process is killed."),(0,a.kt)("li",{parentName:"ul"},"when the session is closed on the server"),(0,a.kt)("li",{parentName:"ul"},"when the session is killed from the server administration window.")))),(0,a.kt)("h2",s({},{id:"closing-sessions"}),"Closing sessions"),(0,a.kt)("p",null,"A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionInfo")," parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Open datastore")," command."),(0,a.kt)("p",null,"If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above)."))}m.isMDXComponent=!0},86356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},12155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);