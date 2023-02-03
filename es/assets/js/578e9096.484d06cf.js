"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"onActivate",title:"On Activate"},l=void 0,c={unversionedId:"Events/onActivate",id:"version-19/Events/onActivate",title:"On Activate",description:"| Code | Puede ser llamado por | Definici\xf3n                                                                                                                           |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onActivate.md",sourceDirName:"Events",slug:"/Events/onActivate",permalink:"/docs/es/19/Events/onActivate",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonActivate.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onActivate",title:"On Activate"},sidebar:"docs",previous:{title:"Generalidades",permalink:"/docs/es/19/Events/overview"},next:{title:"On After Edit",permalink:"/docs/es/19/Events/onAfterEdit"}},s={},u=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}],p={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Puede ser llamado por"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Definici\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"11"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Formulario"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"La ventana del formulario se convierte en la ventana que se encuentra m\xe1s adelante o el contenedor del subformulario obtiene el foco")))),(0,r.kt)("h2",o({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Si la ventana de un formulario fue enviada al fondo, este evento es llamado cuando la ventana se convierte en la ventana activa."),(0,r.kt)("p",null,"Este evento se aplica al formulario en su conjunto y no a un objeto en particular. Por lo tanto, si se selecciona la propiedad de evento formulario ",(0,r.kt)("inlineCode",{parentName:"p"},"On Activate"),", s\xf3lo se llamar\xe1 al m\xe9todo formulario."),(0,r.kt)("p",null,"En el caso de un subformulario, este evento se pasa al subformulario cuando el contenedor obtiene el foco (si tiene la propiedad ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesEntry#focusable"}),"focusable"),")."))}d.isMDXComponent=!0}}]);