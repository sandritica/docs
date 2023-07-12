"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94911],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>m});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=n.createContext({}),l=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=t,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:r},u),{},{components:a})):n.createElement(f,i({ref:r},u))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58835:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});a(67294);var n=a(3905);function t(){return t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},t.apply(this,arguments)}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const i={id:"overview",title:"Copia de seguridad y restauraci\xf3n"},c=void 0,s={unversionedId:"Backup/overview",id:"version-20-R2/Backup/overview",title:"Copia de seguridad y restauraci\xf3n",description:"4D incluye un m\xf3dulo completo de copia de seguridad y de restauraci\xf3n de la aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/es/Backup/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"overview",title:"Copia de seguridad y restauraci\xf3n"},sidebar:"docs",previous:{title:"P\xe1gina de cifrado",permalink:"/docs/es/MSC/encrypt"},next:{title:"Copia de seguridad",permalink:"/docs/es/Backup/backup"}},l={},u=[],d={toc:u};function p(e){var{components:r}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",t({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D incluye un m\xf3dulo completo de copia de seguridad y de restauraci\xf3n de la aplicaci\xf3n."),(0,n.kt)("p",null,"Este m\xf3dulo permite hacer una copia de seguridad de una aplicaci\xf3n en uso sin tener que salir de ella. Cada copia de seguridad puede incluir la carpeta del proyecto, el archivo de datos y cualquier archivo o carpeta adicional. Estos par\xe1metros se definen primero en las Propiedades."),(0,n.kt)("p",null,"Las copias de seguridad pueden iniciarse de forma manual o autom\xe1tica a intervalos regulares sin intervenci\xf3n del usuario. Los comandos espec\xedficos del lenguaje, as\xed como los m\xe9todos base espec\xedficos, permiten integrar las funciones de copia de seguridad en una interfaz personalizada."),(0,n.kt)("p",null,"Las aplicaciones pueden restaurarse autom\xe1ticamente cuando se abre una aplicaci\xf3n da\xf1ada."),(0,n.kt)("p",null,"Adem\xe1s, el m\xf3dulo de copia de seguridad integrado puede aprovechar el archivo .journal (",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/Backup/log"}),"de historial"),"). Este archivo mantiene un registro de todas las operaciones realizadas en los datos y tambi\xe9n garantiza una seguridad total entre dos copias de seguridad. Puede ver el contenido del archivo de historial en cualquier momento. En caso de problemas con una aplicaci\xf3n en uso, las operaciones que falten en el archivo de datos se reintegran autom\xe1ticamente la pr\xf3xima vez que se abra la aplicaci\xf3n."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tambi\xe9n puede implementar soluciones alternativas para replicar y sincronizar los datos con el fin de mantener versiones id\xe9nticas de las aplicaciones con fines de copia de seguridad. These solutions can be based on the following mechanisms and technologies:  "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  "),(0,n.kt)("li",{parentName:"ul"},"Synchronization using SQL - Synchronization using HTTP (/rest/url)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,n.kt)("a",t({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"Gu\xeda de seguridad de 4D"),".")))}p.isMDXComponent=!0}}]);