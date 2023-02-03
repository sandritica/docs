"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),m=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var o=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"action",title:"A\xe7\xe3o"},l=void 0,p={unversionedId:"FormEditor/action",id:"version-19-R8/FormEditor/action",title:"A\xe7\xe3o",description:"M\xe9todos",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/pt/FormEditor/action",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"action",title:"A\xe7\xe3o"},sidebar:"docs",previous:{title:"JSON property list",permalink:"/docs/pt/FormEditor/jsonReference"},next:{title:"Form Properties",permalink:"/docs/pt/FormEditor/propertiesForm"}},m={},s=[{value:"M\xe9todos",id:"m\xe9todos",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}],c={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",n({},{id:"m\xe9todos"}),"M\xe9todos"),(0,o.kt)("p",null,"Reference of a method attached to the form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. Ver ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/Concepts/methods#specialized-methods"}),"M\xe9todos especializados"),"."),(0,o.kt)("p",null,"You do not call a form method\u20144D calls it automatically when an event involves the form to which the method is attached."),(0,o.kt)("p",null,"Several types of method references are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a standard project method file path, i.e. that uses the following pattern:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"method.4dm"),(0,o.kt)("br",{parentName:"p"}),"\n",'This type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,o.kt)("em",{parentName:"p"},"numTable"),"} | {Forms}/",(0,o.kt)("em",{parentName:"p"},"formName"),'/"). In this case, 4D automatically handles the form method when operations are executed on the form (renaming, duplication, copy/paste...)')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a project method name: name of an existing project method without file extension, i.e.: ",(0,o.kt)("inlineCode",{parentName:"p"},"myMethod")," In this case, 4D does not provide automatic support for form operations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a custom method file path including the .4dm extension, e.g.:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"MyMethods/myFormMethod.4dm")," You can also use a filesystem:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/RESOURCES/Forms/FormMethod.4dm")," In this case, 4D does not provide automatic support for object operations."))),(0,o.kt)("h4",n({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Nome"),(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de dados"),(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:null}),"method"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"text"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Form method standard or custom file path, or project method name")))))}d.isMDXComponent=!0}}]);