"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"expand",title:"$expand"},p=void 0,l={unversionedId:"REST/expand",id:"version-20-R2/REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/es/REST/expand",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/es/REST/entityset"},next:{title:"$filter",permalink:"/docs/es/REST/filter"}},u={},s=[{value:"Visualizaci\xf3n de un atributo de imagen",id:"visualizaci\xf3n-de-un-atributo-de-imagen",level:2},{value:"Guardar un atributo BLOB en el disco",id:"guardar-un-atributo-blob-en-el-disco",level:2}],d={toc:s};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Expands an image stored in an Image attribute (",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee(1)/photo?$imageformat=best&$expand=photo"),")",(0,r.kt)("br",null)," or",(0,r.kt)("br",null)," Expands an BLOB attribute to save it."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Compatibilidad"),": por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (",(0,r.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Company(1)?$expand=staff")," o ",(0,r.kt)("inlineCode",{parentName:"p"},'Employee/?$filter="firstName BEGIN a"&$expand=employer'),"). Sin embargo, se recomienda utilizar ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/attributes"}),(0,r.kt)("inlineCode",{parentName:"a"},"$attributes"))," para esta funcionalidad.")),(0,r.kt)("h2",a({},{id:"visualizaci\xf3n-de-un-atributo-de-imagen"}),"Visualizaci\xf3n de un atributo de imagen"),(0,r.kt)("p",null,"Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,r.kt)("p",null,"Para m\xe1s informaci\xf3n sobre los formatos de imagen, consulte ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/imageformat"}),(0,r.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Para m\xe1s informaci\xf3n sobre el par\xe1metro de versi\xf3n, consulte ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/version"}),(0,r.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,r.kt)("h2",a({},{id:"guardar-un-atributo-blob-en-el-disco"}),"Guardar un atributo BLOB en el disco"),(0,r.kt)("p",null,'Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente pasando tambi\xe9n "true" a $binary:'),(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")))}c.isMDXComponent=!0}}]);