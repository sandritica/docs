"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"allowProject",title:"Permitir m\xe9todos proyecto"},s=void 0,l={unversionedId:"WebServer/allowProject",id:"version-19/WebServer/allowProject",title:"Permitir m\xe9todos proyecto",description:"Las etiquetas 4D como 4DEVAL, 4DTEXT, 4DHTML... as\xed como la UURL /4DACTION permiten desencadenar la ejecuci\xf3n de cualquier m\xe9todo de un proyecto 4D publicado en la web. For example, the request  causes the execution of the login project method, if it exists.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/es/19/WebServer/allowProject",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"allowProject",title:"Permitir m\xe9todos proyecto"},sidebar:"docs",previous:{title:"Procesamiento de peticiones HTTP",permalink:"/docs/es/19/WebServer/httpRequests"},next:{title:"P\xe1ginas de error HTTP personalizadas",permalink:"/docs/es/19/WebServer/errorPages"}},c={},p=[],d={toc:p};function u(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Las etiquetas 4D como ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),"... as\xed como la U",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/WebServer/httpRequests#/4daction"}),(0,n.kt)("inlineCode",{parentName:"a"},"URL /4DACTION"))," permiten desencadenar la ejecuci\xf3n de cualquier m\xe9todo de un proyecto 4D publicado en la web. For example, the request ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",o({parentName:"em"},{href:"http://www.server.com/4DACTION/login"}),"http://www.server.com/4DACTION/login"))," causes the execution of the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"login"))," project method, if it exists."),(0,n.kt)("p",null,"Por lo tanto, este mecanismo presenta un riesgo de seguridad para la aplicaci\xf3n, en particular si un usuario de Internet activa intencionalmente (o no) un m\xe9todo no previsto para su ejecuci\xf3n a trav\xe9s de la web. Puede evitar este riesgo de las siguientes maneras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Filtre los m\xe9todos llamados a trav\xe9s de las URLS utilizando el m\xe9todo base ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication")),". Inconvenientes: si la base de datos incluye un gran n\xfamero de m\xe9todos, este sistema puede ser dif\xedcil de gestionar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Utilice la opci\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Disponible a trav\xe9s de etiquetas 4D y URLs (4DACTION...)")," que se encuentra en la caja de di\xe1logo de propiedades del m\xe9todo:"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(50245).Z,width:"577",height:"575"})),(0,n.kt)("p",null,"Esta opci\xf3n se utiliza para designar individualmente cada m\xe9todo del proyecto que puede ser llamado utilizando la URL especial ",(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION"),", o las etiquetas ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DELSEIF")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"4DLOOP"),". Cuando no est\xe1 marcada, el m\xe9todo proyecto en cuesti\xf3n no puede ser ejecutado directamente a trav\xe9s de una petici\xf3n HTTP. Por el contrario, puede ejecutarse mediante otro tipo de llamadas (f\xf3rmulas, otros m\xe9todos, etc.)."),(0,n.kt)("p",null,"Esta opci\xf3n est\xe1 deseleccionada por defecto. Los m\xe9todos que se pueden ejecutar a trav\xe9s de ",(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION")," o de etiquetas espec\xedficas deben indicarse espec\xedficamente."),(0,n.kt)("p",null,"En el Explorador, los m\xe9todos proyecto con esta propiedad reciben un icono espec\xedfico:"),(0,n.kt)("p",null," ",(0,n.kt)("img",{src:r(82955).Z,width:"54",height:"48"})))}u.isMDXComponent=!0},82955:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},50245:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"}}]);