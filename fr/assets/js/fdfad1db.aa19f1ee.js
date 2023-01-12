"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(r),y=a,d=m["".concat(u,".").concat(y)]||m[y]||c[y]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"queryplan",title:"$queryplan"},p=void 0,u={unversionedId:"REST/queryplan",id:"version-19-R7/REST/queryplan",title:"$queryplan",description:"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 pass\xe9e au 4D Server (par exemple, $queryplan=true)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/fr/19-R7/REST/queryplan",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/REST/$queryplan.md",tags:[],version:"19-R7",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/fr/19-R7/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/fr/19-R7/REST/savedfilter"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"R\xe9ponse :",id:"r\xe9ponse-",level:4}],c={toc:s};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Retourne la requ\xeate telle qu'elle a \xe9t\xe9 pass\xe9e au 4D Server (par exemple, ",(0,n.kt)("inlineCode",{parentName:"p"},"$queryplan=true"),")"),(0,n.kt)("h2",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"$queryplan retourne le plan de la requ\xeate telle qu'il a \xe9t\xe9 ex\xe9cut\xe9 par 4D Server."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"item"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Requ\xeate ex\xe9cut\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"subquery"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Tableau"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"S'il existe une sous-requ\xeate, un objet suppl\xe9mentaire contenant une propri\xe9t\xe9 d'\xe9l\xe9ment (comme celle indiqu\xe9e ci-dessus)")))),(0,n.kt)("p",null,"Pour plus d'informations sur les plans de requ\xeate, reportez-vous \xe0 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R7/REST/genInfo#querypath-and-queryplan"}),"queryPlan ete queryPath"),"."),(0,n.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Si vous passez la requ\xeate suivante :"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true')),(0,n.kt)("h4",a({},{id:"r\xe9ponse-"}),"R\xe9ponse :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);