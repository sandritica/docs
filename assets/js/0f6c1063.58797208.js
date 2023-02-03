"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},52128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"lock",title:"$lock"},i=void 0,s={unversionedId:"REST/lock",id:"version-19/REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/versioned_docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/19/REST/lock",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/19/REST/imageformat"},next:{title:"$method",permalink:"/docs/19/REST/method"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example",level:2}],u={toc:c};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Locks and unlocks an entity using the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19/ORDA/entities#pessimistic-lock"}),"pessimistic mechanism"),"."),(0,r.kt)("h2",a({},{id:"syntax"}),"Syntax"),(0,r.kt)("p",null,"To lock an entity for other sessions and 4D processes:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=true\n")),(0,r.kt)("p",null,"To unlock the entity for other sessions and 4D processes:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=false\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"../API/EntityClass.html#lock"}),(0,r.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The locks triggered by the REST API are put at the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19/REST/authUsers#opening-sessions"}),"session")," level. "),(0,r.kt)("p",null,"A locked entity is seen as ",(0,r.kt)("em",{parentName:"p"},"locked")," (i.e. lock / unlock / update / delete actions are not possible) by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"other REST sessions"),(0,r.kt)("li",{parentName:"ul"},"4D processes (client/server, remote datastore, standalone) running on the REST server. ")),(0,r.kt)("p",null,"An entity locked by the REST API can only be unlocked:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by its locker, i.e. a ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," in the REST session that sets ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,r.kt)("li",{parentName:"ul"},"or if the session's ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/19/REST/directory"}),"inactivity timeout")," is reached (the session is closed).")),(0,r.kt)("h3",a({},{id:"response"}),"Response"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"?$lock")," request returns a JSON object with ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=true')," if the lock operation was successful and ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=false')," if it failed. "),(0,r.kt)("p",null,'The returned "__STATUS" object has the following properties: '),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Available only in case of success:")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Available only in case of error:")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Error code, see below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Description of the error, see below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"lockKind"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Lock code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"lockKindText"),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process')))),(0,r.kt)("p",null,"The following values can be returned in the ",(0,r.kt)("em",{parentName:"p"},"status")," and ",(0,r.kt)("em",{parentName:"p"},"statusText")," properties of the ",(0,r.kt)("em",{parentName:"p"},"__STATUS")," object in case of error: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Already locked"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The entity is locked by a pessimistic lock.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Other error"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The entity no longer exists in the data.")))),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("p",null,"We lock an entity in a first browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,r.kt)("p",null,"In a second browser (other session), we send the same request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n')))}k.isMDXComponent=!0}}]);