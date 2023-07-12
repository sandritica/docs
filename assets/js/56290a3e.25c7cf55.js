"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12256],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,s=k["".concat(p,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},16344:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={id:"data-types",title:"Data types overview"},d=void 0,p={unversionedId:"Concepts/data-types",id:"version-20/Concepts/data-types",title:"Data types overview",description:"In 4D, data are handled according to their type in two places: database fields and the 4D language.",source:"@site/versioned_docs/version-20/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/20/Concepts/data-types",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"data-types",title:"Data types overview"},sidebar:"docs",previous:{title:"Operators",permalink:"/docs/20/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/20/Concepts/blob"}},o={},m=[{value:"Default values",id:"default-values",level:2},{value:"Converting data types",id:"converting-data-types",level:2}],u={toc:m};function k(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In 4D, data are handled according to their type in two places: database fields and the 4D language."),(0,n.kt)("p",null,"Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Data Types"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Database support(1)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Language support"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"th"},{href:"/docs/20/Concepts/variables#using-the-var-keyword"}),(0,n.kt)("inlineCode",{parentName:"a"},"var")," declaration")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"th"},{href:"/docs/20/Concepts/variables#using-a-c_-directive"}),(0,n.kt)("inlineCode",{parentName:"a"},"C_")," or ",(0,n.kt)("inlineCode",{parentName:"a"},"ARRAY")," declaration")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/string"}),"Alphanumeric")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Converted to text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/string"}),"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Text")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_TEXT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY TEXT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/date"}),"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_DATE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY DATE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/time"}),"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_TIME"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY TIME"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/boolean"}),"Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_BOOLEAN"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY BOOLEAN"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/number"}),"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Converted to longint"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY INTEGER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/number"}),"Longint")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY LONGINT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/number"}),"Longint 64 bits")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes (SQL)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Converted to real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/number"}),"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Real")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_REAL"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY REAL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/null-undefined"}),"Undefined")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/null-undefined"}),"Null")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/pointer"}),"Pointer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Pointer")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_POINTER"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY POINTER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/picture"}),"Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Picture")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_PICTURE"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY PICTURE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/blob"}),"BLOB")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Blob"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_BLOB"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY BLOB"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/object"}),"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_OBJECT"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY OBJECT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/collection"}),"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Collection")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_COLLECTION"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/20/Concepts/variant"}),"Variant"),"(2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Variant")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"C_VARIANT"))))),(0,n.kt)("p",null,"(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/object"}),"Object")," data type description. "),(0,n.kt)("p",null,"(2) Variant is actually not a ",(0,n.kt)("em",{parentName:"p"},"data")," type but a ",(0,n.kt)("em",{parentName:"p"},"variable")," type that can contain a value of any other data type. "),(0,n.kt)("h2",r({},{id:"default-values"}),"Default values"),(0,n.kt)("p",null,"When ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/variables"}),"variables")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/parameters"}),"parameters")," are typed by means of an ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/20/Concepts/variables#declaring-variables"}),"explicit declaration"),", they receive a default value, which they will keep during the session as long as they have not been assigned. "),(0,n.kt)("p",null,"The default value depends on the variable type:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"00-00-00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Longint"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"00:00:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"picture size=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pointer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nil=true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob size=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"null")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Variant"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"undefined")))),(0,n.kt)("h2",r({},{id:"converting-data-types"}),"Converting data types"),(0,n.kt)("p",null,'The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.'),(0,n.kt)("p",null,"The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Data Type to Convert"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"to String"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"to Number"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"to Date"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"to Time"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"to Boolean"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String (1)"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Num")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Date")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Time")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number (2)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Bool"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Num")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,"(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON Parse")," command."),(0,n.kt)("p",null,"(2) Time values can be treated as numbers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands."))}k.isMDXComponent=!0}}]);