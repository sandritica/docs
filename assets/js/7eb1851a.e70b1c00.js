"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"action",title:"Action"},l=void 0,p={unversionedId:"FormEditor/action",id:"version-19-R7/FormEditor/action",title:"Action",description:"Method",source:"@site/versioned_docs/version-19-R7/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/19-R7/FormEditor/action",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"action",title:"Action"},sidebar:"docs",previous:{title:"JSON property list",permalink:"/docs/19-R7/FormEditor/jsonReference"},next:{title:"Form Properties",permalink:"/docs/19-R7/FormEditor/propertiesForm"}},m={},c=[{value:"Method",id:"method",level:2},{value:"JSON Grammar",id:"json-grammar",level:4}],s={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"method"}),"Method"),(0,n.kt)("p",null,"Reference of a method attached to the form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. See ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/19-R7/Concepts/methods#specialized-methods"}),"Specialized methods"),"."),(0,n.kt)("p",null,"You do not call a form method\u20144D calls it automatically when an event involves the form to which the method is attached."),(0,n.kt)("p",null,"Several types of method references are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a standard project method file path, i.e. that uses the following pattern:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"method.4dm"),(0,n.kt)("br",{parentName:"p"}),"\n",'This type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,n.kt)("em",{parentName:"p"},"numTable"),"} | {Forms}/",(0,n.kt)("em",{parentName:"p"},"formName"),'/"). In this case, 4D automatically handles the form method when operations are executed on the form (renaming, duplication, copy/paste...)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a project method name: name of an existing project method without file extension, i.e.:\n",(0,n.kt)("inlineCode",{parentName:"p"},"myMethod"),"\nIn this case, 4D does not provide automatic support for form operations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a custom method file path including the .4dm extension, e.g.:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"MyMethods/myFormMethod.4dm"),"\nYou can also use a filesystem:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"/RESOURCES/Forms/FormMethod.4dm"),"\nIn this case, 4D does not provide automatic support for object operations."))),(0,n.kt)("h4",o({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Data Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"method"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Form method standard or custom file path, or project method name")))))}d.isMDXComponent=!0}}]);