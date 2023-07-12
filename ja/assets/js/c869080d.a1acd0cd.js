"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=i(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"compute",title:"$compute"},p=void 0,u={unversionedId:"REST/compute",id:"version-20/REST/compute",title:"$compute",description:"\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3044\u307e\u3059 (\u4f8b Employee/objectAtt.property1/?$compute=sum)\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/ja/20/REST/compute",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/ja/20/REST/binary"},next:{title:"$distinct",permalink:"/docs/ja/20/REST/distinct"}},i={},m=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:2}],c={toc:m};function s(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3044\u307e\u3059 (",(0,r.kt)("em",{parentName:"p"},"\u4f8b"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee/salary/?$compute=sum"),"\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee/objectAtt.property1/?$compute=sum"),")\u3002"),(0,r.kt)("h2",a({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,r.kt)("p",null,"\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30c7\u30fc\u30bf\u3092\u5bfe\u8c61\u306b\u8a08\u7b97\u3092\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u8a08\u7b97\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u5834\u5408\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u4f8b:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAtt.property1/?$compute=$all")),(0,r.kt)("p",null,"\u6b21\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u30ad\u30fc\u30ef\u30fc\u30c9"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"$all"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u8a08\u7b97\u3092\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u304a\u3053\u306a\u3044\u3001\u7d50\u679c\u3092\u683c\u7d0d\u3057\u305f JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u6570\u5024\u578b\u306e\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f\u5e73\u5747 (average)\u3001\u30ab\u30a6\u30f3\u30c8 (count)\u3001\u6700\u5c0f (min)\u3001\u6700\u5927 (max)\u3001\u5408\u8a08 (sum)\u3001\u6587\u5b57\u5217\u578b\u306e\u5c5e\u6027\u306b\u3064\u3044\u3066\u306f\u30ab\u30a6\u30f3\u30c8 (count)\u3001\u6700\u5c0f (min)\u3001\u6700\u5927 (max) \u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"average"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u306e\u5e73\u5747\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"count"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u306e\u8981\u7d20\u6570\u307e\u305f\u306f\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u6570\u3092\u53d6\u5f97\u3057\u307e\u3059 (\u3069\u3061\u3089\u306e\u5834\u5408\u3082\u5c5e\u6027\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"min"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u3042\u308b\u3044\u306f\u6587\u5b57\u5217\u578b\u5c5e\u6027\u306e\u6700\u5c0f\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"max"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u3042\u308b\u3044\u306f\u6587\u5b57\u5217\u578b\u5c5e\u6027\u306e\u6700\u5927\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sum"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6570\u5024\u578b\u5c5e\u6027\u306e\u5408\u8a08\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,r.kt)("p",null,"\u6570\u5024\u578b\u306e\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u3059\u3079\u3066\u306e\u8a08\u7b97\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n')),(0,r.kt)("p",null,"\u6587\u5b57\u5217\u578b\u306e\u5c5e\u6027\u3092\u5bfe\u8c61\u306b\u3059\u3079\u3066\u306e\u8a08\u7b97\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/firstName/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n')),(0,r.kt)("p",null,"\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u7279\u5b9a\u306e\u8a08\u7b97\u306e\u307f\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=sum")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ec\u30b9\u30dd\u30f3\u30b9"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"235000")),(0,r.kt)("p",null,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306b\u5bfe\u3057\u3066\u7279\u5b9a\u306e\u8a08\u7b97\u306e\u307f\u3092\u304a\u3053\u306a\u3046\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAttribute.property1/?$compute=sum")),(0,r.kt)("p",null,"\u30ec\u30b9\u30dd\u30f3\u30b9:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"45")))}s.isMDXComponent=!0}}]);