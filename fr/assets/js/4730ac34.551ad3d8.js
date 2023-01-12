"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"allowProject",title:"M\xe9thodes projet"},l=void 0,p={unversionedId:"WebServer/allowProject",id:"version-19-R7/WebServer/allowProject",title:"M\xe9thodes projet",description:"Les balises 4D telles que 4DEVAL, 4DTEXT, 4DHTML, etc. ainsi que l'URL /4DACTION vous permettent de d\xe9clencher l'ex\xe9cution de toute m\xe9thode projet d'un projet 4D publi\xe9 sur le Web. Par exemple, la requ\xeate http://www.server.com/4DACTION/login entra\xeene l'ex\xe9cution de la m\xe9thode projet login, si elle existe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/fr/19-R7/WebServer/allowProject",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/WebServer/allowProject.md",tags:[],version:"19-R7",frontMatter:{id:"allowProject",title:"M\xe9thodes projet"},sidebar:"docs",previous:{title:"Traitement des requ\xeates HTTP",permalink:"/docs/fr/19-R7/WebServer/httpRequests"},next:{title:"Pages d'erreur HTTP personnalis\xe9es",permalink:"/docs/fr/19-R7/WebServer/errorPages"}},s={},c=[],u={toc:c};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Les balises 4D telles que ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", etc. ainsi que l'",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R7/WebServer/httpRequests#/4daction"}),(0,n.kt)("inlineCode",{parentName:"a"},"URL /4DACTION"))," vous permettent de d\xe9clencher l'ex\xe9cution de toute m\xe9thode projet d'un projet 4D publi\xe9 sur le Web. Par exemple, la requ\xeate ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",o({parentName:"em"},{href:"http://www.server.com/4DACTION/login"}),"http://www.server.com/4DACTION/login"))," entra\xeene l'ex\xe9cution de la m\xe9thode projet ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"login")),", si elle existe."),(0,n.kt)("p",null,"Ce m\xe9canisme pr\xe9sente donc un risque de s\xe9curit\xe9 pour l'application, notamment si un internaute d\xe9clenche intentionnellement (ou non) une m\xe9thode non destin\xe9e \xe0 \xeatre ex\xe9cut\xe9e via le web. Vous pouvez \xe9viter ce risque comme suit :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Filtrez les m\xe9thodes appel\xe9es via les URL \xe0 l'aide de la m\xe9thode base ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/fr/19-R7/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication")),". Inconv\xe9nients : si la base de donn\xe9es comprend un grand nombre de m\xe9thodes, ce syst\xe8me peut \xeatre difficile \xe0 g\xe9rer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Utilisez l'option ",(0,n.kt)("strong",{parentName:"p"},"Available through 4D tags and URLs (4DACTION...)")," de la bo\xeete de dialogue Propri\xe9t\xe9s de la m\xe9thode :"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(92956).Z,width:"577",height:"575"})),(0,n.kt)("p",null,"This option is used to individually designate each project method that can be called using the ",(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION")," special URL, or the ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DELSEIF")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"4DLOOP")," tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.)."),(0,n.kt)("p",null,"This option is unchecked by default. Methods that can be executed through ",(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION")," or specific tags must be specifically indicated."),(0,n.kt)("p",null,"In the Explorer, Project methods with this property are given a specific icon:"),(0,n.kt)("p",null," ",(0,n.kt)("img",{src:r(10082).Z,width:"54",height:"48"})))}d.isMDXComponent=!0},10082:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},92956:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"}}]);