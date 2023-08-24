"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"lock",title:"$lock"},l=void 0,i={unversionedId:"REST/lock",id:"version-19/REST/lock",title:"$lock",description:"Locks and unlocks an entity using the pessimistic mechanism.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/pt/19/REST/lock",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/pt/19/REST/imageformat"},next:{title:"$method",permalink:"/docs/pt/19/REST/method"}},p={},c=[{value:"Sintaxe",id:"sintaxe",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Resposta",id:"resposta",level:3},{value:"Exemplo",id:"exemplo",level:2}],d={toc:c};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Locks and unlocks an entity using the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/19/ORDA/entities#pessimistic-lock"}),"pessimistic mechanism"),"."),(0,r.kt)("h2",a({},{id:"sintaxe"}),"Sintaxe"),(0,r.kt)("p",null,"Para bloquear uma entidade para outras sess\xf5es e processos 4D:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=true\n")),(0,r.kt)("p",null,"Para desbloquear a entidade para outras sess\xf5es e processos 4D:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"/?$lock=false\n")),(0,r.kt)("p",null,"A propriedade ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/19/API/EntityClass#lock"}),(0,r.kt)("inlineCode",{parentName:"a"},"lockKindText")),' \xe9 "Locked by session".'),(0,r.kt)("h3",a({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The locks triggered by the REST API are put at the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/19/REST/authUsers#opening-sessions"}),"session")," level."),(0,r.kt)("p",null,"A locked entity is seen as ",(0,r.kt)("em",{parentName:"p"},"locked")," (i.e. lock / unlock / update / delete actions are not possible) by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"outras sess\xf5es REST"),(0,r.kt)("li",{parentName:"ul"},"4D processes (client/server, remote datastore, standalone) running on the REST server.")),(0,r.kt)("p",null,"Uma entidade bloqueada pela API REST s\xf3 pode ser desbloqueada:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by its locker, i.e. a ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," in the REST session that sets ",(0,r.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,r.kt)("li",{parentName:"ul"},"or if the session's ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/pt/19/REST/directory"}),"inactivity timeout")," is reached (the session is closed).")),(0,r.kt)("h3",a({},{id:"resposta"}),"Resposta"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"?$lock")," request returns a JSON object with ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=true')," if the lock operation was successful and ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"=false')," if it failed."),(0,r.kt)("p",null,'O objeto "__STATUS" devolvido tem as seguintes propriedades:'),(0,r.kt)("p",null,"| Propriedade  |  | Tipo    | Descri\xe7\xe3o                                                                                                                                       |\n| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |\n|              |  |         | ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Dispon\xedvel apenas em caso de sucesso:")),"                                                                                                     |\n| success      |  | boolean | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case). |\n|              |  |         | ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Dispon\xedvel apenas em caso de erro:")),'                                                                                                        |\n| status       |  | number  | C\xf3digo de erro, ver abaixo                                                                                                                      |\n| statusText   |  | text    | Descri\xe7\xe3o do erro, ver abaixo                                                                                                                   |\n| lockKind     |  | number  | C\xf3digo de bloqueio                                                                                                                              |\n| lockKindText |  | text    | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                   |'),(0,r.kt)("p",null,"Os seguintes valores podem ser devolvidos nas propriedades ",(0,r.kt)("em",{parentName:"p"},"status")," e ",(0,r.kt)("em",{parentName:"p"},"statusText")," do objeto ",(0,r.kt)("em",{parentName:"p"},"__STATUS")," em caso de erro:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"status"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"O valor de selo interno da entidade n\xe3o corresponde a uma da entidade armazenada nos dados (bloqueio otimista).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Already locked"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A entidade est\xe1 fechada por uma fechadura pessimista.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Other error"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Um erro grave \xe9 um erro de banco de dados de baixo n\xedvel (por exemplo, chave duplicada), um erro de hardware, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A entidade n\xe3o existe mais nos dados.")))),(0,r.kt)("h2",a({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"Bloqueamos uma entidade num primeiro navegador:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responsa:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,r.kt)("p",null,"Num segundo navegador (outra sess\xe3o), enviamos o mesmo pedido."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responsa:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n')))}u.isMDXComponent=!0}}]);