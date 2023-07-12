"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20491],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=n,u=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"ZipFileClass",title:"ZIPFile"},o=void 0,s={unversionedId:"API/ZipFileClass",id:"version-20-R2/API/ZipFileClass",title:"ZIPFile",description:"Las siguientes propiedades y funciones de la clase File est\xe1n disponibles para los objetos ZIPFile:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/API/ZipFileClass.md",sourceDirName:"API",slug:"/API/ZipFileClass",permalink:"/docs/es/API/ZipFileClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFileClass.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"ZipFileClass",title:"ZIPFile"},sidebar:"docs",previous:{title:"ZIPArchive",permalink:"/docs/es/API/ZipArchiveClass"},next:{title:"ZIPFolder",permalink:"/docs/es/API/ZipFolderClass"}},p={},m=[],d={toc:m};function c(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las siguientes propiedades y funciones de la clase ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/API/FileClass"}),"File")," est\xe1n disponibles para los objetos ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIPFile"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"APIs disponibles de ",(0,r.kt)("a",n({parentName:"th"},{href:"/docs/es/API/FileClass"}),"File")," API para ZIPFile"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Comentario"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#copyto"}),(0,r.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,r.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { ; ",(0,r.kt)("em",{parentName:"a"},"newName")," : Text } { ; ",(0,r.kt)("em",{parentName:"a"},"overwrite")," : Integer } ) : 4D.File")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#creationdate"}),(0,r.kt)("strong",{parentName:"a"},".creationDate")," : Date")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#creationtime"}),(0,r.kt)("strong",{parentName:"a"},".creationTime")," : Time")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#exists"}),(0,r.kt)("strong",{parentName:"a"},".exists")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#extension"}),(0,r.kt)("strong",{parentName:"a"},".extension")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#fullname"}),(0,r.kt)("strong",{parentName:"a"},".fullName")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#getcontent"}),(0,r.kt)("strong",{parentName:"a"},".getContent( )")," : 4D.Blob")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#geticon"}),(0,r.kt)("strong",{parentName:"a"},".getIcon"),"( { ",(0,r.kt)("em",{parentName:"a"},"size")," : Integer } ) : Picture")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#gettext"}),(0,r.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,r.kt)("em",{parentName:"a"},"charSetName")," : Text { ; ",(0,r.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,r.kt)("em",{parentName:"a"},"charSetNum")," : Integer { ; ",(0,r.kt)("em",{parentName:"a"},"breakMode")," : Integer } } ) : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#hidden"}),(0,r.kt)("strong",{parentName:"a"},".hidden")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#isalias"}),(0,r.kt)("strong",{parentName:"a"},".isAlias")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#isfile"}),(0,r.kt)("strong",{parentName:"a"},".isFile")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#isfolder"}),(0,r.kt)("strong",{parentName:"a"},".isFolder")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#iswritable"}),(0,r.kt)("strong",{parentName:"a"},".isWritable")," : Boolean")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Siempre false con archivo ZIP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#modificationdate"}),(0,r.kt)("strong",{parentName:"a"},".modificationDate")," : Date")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#modificationtime"}),(0,r.kt)("strong",{parentName:"a"},".modificationTime")," : Time")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#name"}),(0,r.kt)("strong",{parentName:"a"},".name")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#original"}),(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.File",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#parent"}),(0,r.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#path"}),(0,r.kt)("strong",{parentName:"a"},".path")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Devuelve una ruta relativa al archivo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/es/API/FileClass#platformpath"}),(0,r.kt)("strong",{parentName:"a"},".platformPath")," : Text")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))))}c.isMDXComponent=!0}}]);