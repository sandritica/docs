"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"menu",title:"Men\xfa"},l=void 0,u={unversionedId:"FormEditor/menu",id:"version-19-R8/FormEditor/menu",title:"Men\xfa",description:"Associated Menu Bar",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/FormEditor/properties_Menu.md",sourceDirName:"FormEditor",slug:"/FormEditor/menu",permalink:"/docs/pt/FormEditor/menu",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/FormEditor/properties_Menu.md",tags:[],version:"19-R8",frontMatter:{id:"menu",title:"Men\xfa"},sidebar:"docs",previous:{title:"Marcadores",permalink:"/docs/pt/FormEditor/markers"},next:{title:"Imprimir",permalink:"/docs/pt/FormEditor/print"}},c={},p=[{value:"Associated Menu Bar",id:"associated-menu-bar",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}],s={toc:p};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"associated-menu-bar"}),"Associated Menu Bar"),(0,n.kt)("p",null,"When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment."),(0,n.kt)("p",null,"The selection of a menu command causes an ",(0,n.kt)("inlineCode",{parentName:"p"},"On Menu Selected")," event to be sent to the form method; you can then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Menu selected")," command to test the selected menu."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the menu bar of the form is identical to the current menu bar, it is not added.")),(0,n.kt)("p",null,"The form menu bar will operate for both input and output forms."),(0,n.kt)("h4",o({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Nome"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Tipo de dados"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"menuBar"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Nome de uma barra de menu")))))}m.isMDXComponent=!0}}]);