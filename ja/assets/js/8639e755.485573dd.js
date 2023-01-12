"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),y=a,d=s["".concat(i,".").concat(y)]||s[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"queryplan",title:"$queryplan"},p=void 0,i={unversionedId:"REST/queryplan",id:"version-19-R8/REST/queryplan",title:"$queryplan",description:"4D Server \u306b\u6e21\u3057\u305f\u30af\u30a8\u30ea\u3092\u8fd4\u3057\u307e\u3059 (\u4f8b: $queryplan=true)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/REST/$queryplan.md",sourceDirName:"REST",slug:"/REST/queryplan",permalink:"/docs/ja/REST/queryplan",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/REST/$queryplan.md",tags:[],version:"19-R8",frontMatter:{id:"queryplan",title:"$queryplan"},sidebar:"docs",previous:{title:"$querypath",permalink:"/docs/ja/REST/querypath"},next:{title:"$savedfilter",permalink:"/docs/ja/REST/savedfilter"}},u={},c=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9:",id:"\u30ec\u30b9\u30dd\u30f3\u30b9",level:4}],m={toc:c};function s(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D Server \u306b\u6e21\u3057\u305f\u30af\u30a8\u30ea\u3092\u8fd4\u3057\u307e\u3059 (",(0,r.kt)("em",{parentName:"p"},"\u4f8b"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"$queryplan=true"),")"),(0,r.kt)("h2",a({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,r.kt)("p",null,"$queryplan \u306f\u30014D Server \u306b\u6e21\u3057\u305f\u30af\u30a8\u30ea\u30d7\u30e9\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"item"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6e21\u3055\u308c\u305f\u5b9f\u969b\u306e\u30af\u30a8\u30ea")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"subquery"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u914d\u5217"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"(\u30b5\u30d6\u30af\u30a8\u30ea\u304c\u5b58\u5728\u3059\u308b\u5834\u5408) item \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u683c\u7d0d\u3059\u308b\u8ffd\u52a0\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,r.kt)("p",null,"\u30af\u30a8\u30ea\u30d7\u30e9\u30f3\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/REST/genInfo#querypath-%E3%81%A8-queryplan"}),"queryPlan \u3068 queryPath")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u3092\u6e21\u3057\u305f\u5834\u5408:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true')),(0,r.kt)("h4",a({},{id:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),"\u30ec\u30b9\u30dd\u30f3\u30b9:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'__queryPlan: {\n    And: [\n        {\n            item: "Join on Table : Company : People.employer = Company.ID",\n            subquery: [\n                {\n                    item: "Company.name = acme"\n                }\n            ]\n        },\n        {\n            item: "People.lastName = Jones"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);