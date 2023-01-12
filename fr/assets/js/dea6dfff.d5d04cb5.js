"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"expand",title:"$expand"},p=void 0,u={unversionedId:"REST/expand",id:"version-19-R8/REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/fr/REST/expand",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/REST/$expand.md",tags:[],version:"19-R8",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/fr/REST/entityset"},next:{title:"$filter",permalink:"/docs/fr/REST/filter"}},l={},s=[{value:"Affichage d&#39;un attribut d&#39;image",id:"affichage-dun-attribut-dimage",level:2},{value:"Enregistrement d&#39;un attribut BLOB sur le disque",id:"enregistrement-dun-attribut-blob-sur-le-disque",level:2}],c={toc:s};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Expands an image stored in an Image attribute (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee(1)/photo?$imageformat=best&$expand=photo"),")",(0,n.kt)("br",null)," or",(0,n.kt)("br",null)," Expands an BLOB attribute to save it."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Compatibilit\xe9")," : pour des raisons de compatibilit\xe9, $expand peut \xeatre utilis\xe9 pour d\xe9velopper un attribut relationnel (par exemple, ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)?$expand= staff")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},'EmployeeEmployee/?$filter="firstName BEGIN a"&$expand=employer'),"). Il est cependant recommand\xe9 d'utiliser ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/REST/attributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"$attributes"))," pour cette fonctionnalit\xe9.")),(0,n.kt)("h2",a({},{id:"affichage-dun-attribut-dimage"}),"Affichage d'un attribut d'image"),(0,n.kt)("p",null,"Si vous souhaitez afficher int\xe9gralement un attribut d'image, saisissez ce qui suit :"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,n.kt)("p",null,"Pour plus d'informations sur les formats d'image, reportez-vous \xe0 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/REST/imageformat"}),(0,n.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Pour plus d'informations sur le param\xe8tre de version, reportez-vous \xe0 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/REST/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,n.kt)("h2",a({},{id:"enregistrement-dun-attribut-blob-sur-le-disque"}),"Enregistrement d'un attribut BLOB sur le disque"),(0,n.kt)("p",null,'Si vous souhaitez enregistrer un BLOB stock\xe9 dans votre dataclass, vous pouvez \xe9crire ce qui suit en passant \xe9galement "true" \xe0 $binary :'),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")))}d.isMDXComponent=!0}}]);