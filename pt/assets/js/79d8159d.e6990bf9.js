"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19109],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},168500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});n(667294);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"distinct",title:"$distinct"},c=void 0,l={unversionedId:"REST/distinct",id:"version-20-R5/REST/distinct",title:"$distinct",description:'Devuelve los diferentes valores de un atributo espec\xedfico en una colecci\xf3n (por ejemplo, Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/pt/REST/distinct",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/pt/REST/compute"},next:{title:"$entityset",permalink:"/docs/pt/REST/entityset"}},p={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],u={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Devuelve los diferentes valores de un atributo espec\xedfico en una colecci\xf3n (",(0,r.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'Company/name?$filter="name=a*"&$distinct=true'),")"),(0,r.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$distinct")," permite devolver una colecci\xf3n que contiene los diferente valores de una petici\xf3n sobre un atributo espec\xedfico. S\xf3 pode ser especificado um atributo na dataclass. Geralmente, o tipo String \xe9 o melhor; no entanto, tamb\xe9m pode ser utilizado em qualquer tipo de atributo que possa conter v\xe1rios valores."),(0,r.kt)("p",null,"Tambi\xe9n puede utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"$top/$limit"),", si desea navegar por la selecci\xf3n antes de colocarla en un array."),(0,r.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,'No nosso exemplo abaixo, queremos obter os valores distintos de um nome de empresa que come\xe7a com a letra "a":'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company/name?$filter="name=a*"&$distinct=true')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'[\n    "Adobe",\n    "Apple"\n]\n')))}d.isMDXComponent=!0}}]);