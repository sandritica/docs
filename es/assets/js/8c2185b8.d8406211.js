"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"lock",title:"$lock"},s=void 0,i={unversionedId:"REST/lock",id:"version-19/REST/lock",title:"$lock",description:"Bloquea y desbloquea una entidad utilizando el mecanismo pesimista.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$lock.md",sourceDirName:"REST",slug:"/REST/lock",permalink:"/docs/es/19/REST/lock",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"lock",title:"$lock"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/es/19/REST/imageformat"},next:{title:"$method",permalink:"/docs/es/19/REST/method"}},p={},u=[{value:"Sintaxis",id:"sintaxis",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Respuesta",id:"respuesta",level:3},{value:"Ejemplo",id:"ejemplo",level:2}],d={toc:u};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bloquea y desbloquea una entidad utilizando el ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/19/ORDA/entities#pessimistic-lock"}),"mecanismo pesimista"),"."),(0,a.kt)("h2",r({},{id:"sintaxis"}),"Sintaxis"),(0,a.kt)("p",null,"Para bloquear una entidad para las otras sesiones y procesos 4D:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"/?$lock=true\n")),(0,a.kt)("p",null,"Para desbloquear la entidad para las otras sesiones y procesos 4D:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"/?$lock=false\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/19/API/EntityClass#lock"}),(0,a.kt)("inlineCode",{parentName:"a"},"lockKindText")," property"),' is "Locked by session".'),(0,a.kt)("h3",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,a.kt)("p",null,"Los bloqueos activados por la API REST se colocan al nivel de la ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/19/REST/authUsers#opening-sessions"}),"sesi\xf3n"),"."),(0,a.kt)("p",null,"Una entidad bloqueada se ve como ",(0,a.kt)("em",{parentName:"p"},"bloqueada")," (es decir, las acciones de bloqueo / desbloqueo / actualizaci\xf3n / eliminaci\xf3n no son posibles) por:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"otras sesiones REST"),(0,a.kt)("li",{parentName:"ul"},"los procesos 4D (cliente/servidor, almac\xe9n de datos remoto, monopuesto) ejecutadas en el servidor REST.")),(0,a.kt)("p",null,"Una entidad bloqueada por la API REST s\xf3lo puede ser desbloqueada:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"por su bloqueador, es decir un ",(0,a.kt)("inlineCode",{parentName:"li"},"/?$lock=false")," en la sesi\xf3n REST que define ",(0,a.kt)("inlineCode",{parentName:"li"},"/?$lock=true")),(0,a.kt)("li",{parentName:"ul"},"o si el ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/es/19/REST/directory"}),"timeout de inactividad")," de la sesi\xf3n se alcanza (la sesi\xf3n se cierra).")),(0,a.kt)("h3",r({},{id:"respuesta"}),"Respuesta"),(0,a.kt)("p",null,"Una petici\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"?$lock")," devuelve un objeto JSON con ",(0,a.kt)("inlineCode",{parentName:"p"},'"result"=true')," si la operaci\xf3n de bloqueo se reutiliza y ",(0,a.kt)("inlineCode",{parentName:"p"},'"result"=false')," si falla."),(0,a.kt)("p",null,'El objeto "__STATUS" devuelto tiene las siguientes propiedades:'),(0,a.kt)("p",null,"| Propiedad    |  | Tipo    | Descripci\xf3n                                                                                                                                           |\n| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |\n|              |  |         | ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Disponible s\xf3lo en caso de \xe9xito:")),"                                                                                                               |\n| success      |  | boolean | true si la acci\xf3n de bloqueo tiene \xe9xito (o si la entidad ya est\xe1 bloqueada en la sesi\xf3n actual), false en caso contrario (no devuelto en este caso). |\n|              |  |         | ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Disponible s\xf3lo en caso de error:")),'                                                                                                               |\n| status       |  | number  | C\xf3digo de error, ver abajo                                                                                                                            |\n| statusText   |  | text    | Descripci\xf3n del error, ver abajo                                                                                                                      |\n| lockKind     |  | number  | C\xf3digo de bloqueo                                                                                                                                     |\n| lockKindText |  | text    | "Locked by session" si est\xe1 bloqueado por una sesi\xf3n REST, "Locked by record" si est\xe1 bloqueado por un proceso 4D                                     |'),(0,a.kt)("p",null,"Los siguientes valores pueden ser devueltos en las propiedade ",(0,a.kt)("em",{parentName:"p"},"status")," y ",(0,a.kt)("em",{parentName:"p"},"statusText")," del objeto ",(0,a.kt)("em",{parentName:"p"},"__STATUS")," en caso de error:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"status"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"statusText"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"Stamp has changed"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"Already locked"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La entidad est\xe1 bloqueada por un bloqueo pesimista.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"Other error"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"Entity does not exist anymore"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"La entidad ya no existe en los datos.")))),(0,a.kt)("h2",r({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"Bloqueamos una entidad en un primer navegador:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"GET /rest/Customers(1)/?$lock=true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Respuesta:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    "result": true,\n    "__STATUS": {\n        "success": true\n    }\n}\n')),(0,a.kt)("p",null,"En un segundo navegador (otra sesi\xf3n), enviamos la misma petici\xf3n."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Respuesta:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    "result":false,\n    "__STATUS":{\n        "status":3,\n        "statusText":"Already Locked",\n        "lockKind":7,\n        "lockKindText":"Locked By Session",\n    }\n}\n')))}c.isMDXComponent=!0}}]);