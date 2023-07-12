"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42244],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(p,".").concat(m)]||k[m]||s[m]||l;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},32576:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={id:"configuration",title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"},i=void 0,p={unversionedId:"REST/configuration",id:"version-20/REST/configuration",title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",description:"4D \u306e REST\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u6a19\u6e96\u306e HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7528\u3044\u3066\u5916\u90e8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u30c7\u30fc\u30bf\u3092\u64cd\u4f5c\u3057\u305f\u308a\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u308a\u3001\u3068\u3044\u3063\u305f\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/ja/20/REST/configuration",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"configuration",title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/docs/ja/20/REST/gettingStarted"},next:{title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",permalink:"/docs/ja/20/REST/authUsers"}},u={},c=[{value:"REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b",id:"rest\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b",level:2},{value:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a",id:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a",level:2},{value:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b",id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"On REST Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b",id:"on-rest-authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",id:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",level:2},{value:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b",id:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b",level:3},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",level:3}],s={toc:c};function k(t){var{components:e}=t,o=l(t,["components"]);return(0,r.kt)("wrapper",a({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D \u306e REST\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u6a19\u6e96\u306e HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7528\u3044\u3066\u5916\u90e8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u30c7\u30fc\u30bf\u3092\u64cd\u4f5c\u3057\u305f\u308a\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u308a\u3001\u3068\u3044\u3063\u305f\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",null,"REST\u6a5f\u80fd\u3092\u4f7f\u3044\u59cb\u3081\u308b\u307e\u3048\u306b\u3001\u307e\u305a\u306f 4D REST \u30b5\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u3092\u304a\u3053\u306a\u3044\u3001\u3053\u308c\u3092\u8d77\u52d5\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"4D Server\u4e0a\u3067\u306f\u3001\u958b\u304b\u308c\u308b REST\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u3064\u304d\u30014D Client \u30e9\u30a4\u30bb\u30f3\u30b9\u304c1\u6d88\u8cbb\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc\u306e 4D \u3067\u306f\u3001\u30c6\u30b9\u30c8\u76ee\u7684\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u3092 3\u3064\u307e\u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u304a\u3053\u306a\u3046\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.kt)("a",a({parentName:"li"},{href:"/docs/ja/20/REST/authUsers"}),"\u30bb\u30c3\u30b7\u30e7\u30f3")," \u306f\u5225\u9014\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,r.kt)("h2",a({},{id:"rest\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b"}),"REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b"),(0,r.kt)("p",null,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30014D \u306f REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5fdc\u7b54\u3057\u307e\u305b\u3093\u3002 REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3057\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("strong",{parentName:"p"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a")," \u306e ",(0,r.kt)("strong",{parentName:"p"},"Web")," \uff1e ",(0,r.kt)("strong",{parentName:"p"},"Web\u6a5f\u80fd")," \u30da\u30fc\u30b8\u306b\u3066\u3001",(0,r.kt)("strong",{parentName:"p"},"REST\u30b5\u30fc\u30d0\u30fc\u3068\u3057\u3066\u516c\u958b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(31688).Z,width:"855",height:"381"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"REST\u30b5\u30fc\u30d3\u30b9\u306f 4D \u306e HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u30014D Web\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u5316\u3055\u308c\u308b\u3068\u3001\u300c\u8b66\u544a: \u30a2\u30af\u30bb\u30b9\u6a29\u304c\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u300d\u3068\u3044\u3046\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f REST\u63a5\u7d9a\u306e\u8a8d\u8a3c\u8a2d\u5b9a\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u81ea\u7531\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u3066\u3057\u307e\u3046\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5909\u66f4\u3092\u53cd\u6620\u3059\u308b\u306b\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("h2",a({},{id:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a"}),"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001REST\u63a5\u7d9a\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u3057\u3066\u30aa\u30fc\u30d7\u30f3\u3067\u3059\u304c\u3001\u3053\u306e\u72b6\u614b\u306f\u30e9\u30a4\u30bb\u30f3\u30b9\u7ba1\u7406\u4e0a\u3082\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u3082\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"REST\u63a5\u7d9a\u306f\u6b21\u306e\u65b9\u6cd5\u3067\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "',(0,r.kt)("strong",{parentName:"li"},"Web")," \uff1e ",(0,r.kt)("strong",{parentName:"li"},"Web\u6a5f\u80fd"),'" \u30da\u30fc\u30b8\u306b\u3066\u3001REST\u30b5\u30fc\u30d3\u30b9\u306b\u5272\u308a\u5f53\u3066\u308b ',(0,r.kt)("strong",{parentName:"li"},"\u8aad\u307f\u8fbc\u307f/\u66f8\u304d\u51fa\u3057")," \u30e6\u30fc\u30b6\u30fc\u30b0\u30eb\u30fc\u30d7\u3092\u8a2d\u5b9a\u3057\u307e\u3059;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u3001REST\u306e\u521d\u671f\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u306b\u6319\u3052\u305f 2\u3064\u306e\u65b9\u6cd5\u3092\u540c\u6642\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),' \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u305f\u5834\u5408\u30014D \u306f REST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u3092\u540c\u30e1\u30bd\u30c3\u30c9\u306b\u59d4\u306d\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "',(0,r.kt)("strong",{parentName:"p"},"Web")," \uff1e ",(0,r.kt)("strong",{parentName:"p"},"Web\u6a5f\u80fd"),'" \u30da\u30fc\u30b8\u306b\u3066\u6307\u5b9a\u3057\u305f "\u8aad\u307f\u8fbc\u307f/\u66f8\u304d\u51fa\u3057" \u306e\u8a2d\u5b9a\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002')),(0,r.kt)("h3",a({},{id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b"}),"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b"),(0,r.kt)("p",null,'\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "',(0,r.kt)("strong",{parentName:"p"},"Web")," \uff1e ",(0,r.kt)("strong",{parentName:"p"},"Web\u6a5f\u80fd"),'" \u30da\u30fc\u30b8\u306b\u3042\u308b ',(0,r.kt)("strong",{parentName:"p"},"\u8aad\u307f\u8fbc\u307f/\u66f8\u304d\u51fa\u3057")," \u8a2d\u5b9a\u306f\u3001REST\u30af\u30a8\u30ea\u3092\u4f7f\u3063\u3066 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u30ea\u30f3\u30af\u3092\u8a2d\u7acb\u3059\u308b\u3053\u3068\u306e\u3067\u304d\u308b 4D\u30e6\u30fc\u30b6\u30fc\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"\\<Anyone>")," \u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001REST\u63a5\u7d9a\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u3057\u3066\u30aa\u30fc\u30d7\u30f3\u3067\u3042\u308b\u3068\u3044\u3046\u72b6\u614b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u30b0\u30eb\u30fc\u30d7\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b 4D\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u307f\u304c ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/20/REST/authUsers"}),"REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u901a\u3057\u3066 4D \u306b\u30a2\u30af\u30bb\u30b9")," \u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3057\u3066\u3044\u306a\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5834\u5408\u30014D \u306f\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u9001\u4fe1\u8005\u306b\u5bfe\u3057\u3066\u8a8d\u8a3c\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u3053\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002 \u3053\u308c\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306b\u3066\u6307\u5b9a\u3057\u305f\u30a2\u30af\u30bb\u30b9\u8a2d\u5b9a\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("h3",a({},{id:"on-rest-authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b"}),"On REST Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9 \u306f 4D \u4e0a\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u958b\u59cb\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u3063\u3066\u65b0\u898f\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u308b\u969b\u3001\u3053\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306f\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/20/REST/authUsers"}),"REST\u30bb\u30c3\u30b7\u30e7\u30f3\u958b\u59cb\u306e\u30ea\u30af\u30a8\u30b9\u30c8")," \u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001\u305d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u306b\u306f\u63a5\u7d9a\u306e\u8b58\u5225\u5b50\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u8b58\u5225\u5b50\u3092\u8a55\u4fa1\u3059\u308b\u305f\u3081\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306f\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 \u8a55\u4fa1\u306b\u3042\u305f\u3063\u3066\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6\u30fc\u30ea\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001\u72ec\u81ea\u306e\u8b58\u5225\u5b50\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.ja.html"}),"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",a({},{id:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b"}),"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b"),(0,r.kt)("p",null,"4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e REST\u30b5\u30fc\u30d3\u30b9\u304c\u6709\u52b9\u5316\u3055\u308c\u308b\u3068\u3001",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/20/ORDA/dsmapping#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%88%E3%82%A2"}),"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9")," \u3092\u901a\u3057\u3066 4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30c6\u30fc\u30d6\u30eb\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u304a\u3088\u3073\u683c\u7d0d\u30c7\u30fc\u30bf\u304c REST\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b ","[Employee]"," \u30c6\u30fc\u30d6\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n')),(0,r.kt)("p",null,"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u3001salary (\u7d66\u4e0e) \u30d5\u30a3\u30fc\u30eb\u30c9\u304c 10000\u4ee5\u4e0a\u306e\u793e\u54e1\u30c7\u30fc\u30bf\u304c\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"\u975e\u8868\u793a" \u5c5e\u6027\u3092\u9078\u629e\u3055\u308c\u305f\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u3082\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 REST \u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002')),(0,r.kt)("p",null,'REST \u7d4c\u7531\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5236\u9650\u3059\u308b\u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u4e0d\u53ef\u306b\u3059\u308b\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3064\u3044\u3066 "REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b" \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u89e3\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u30ea\u30bd\u30fc\u30b9\u3078\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u3042\u3063\u305f\u5834\u5408\u30014D\u306f\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002'),(0,r.kt)("h3",a({},{id:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30c6\u30fc\u30d6\u30eb\u304c REST \u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u304b\u3089\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u4e00\u90e8\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u307f\u3092\u516c\u958b\u3057\u305f\u3044\u72b6\u6cc1\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002 \u305f\u3068\u3048\u3070\u3001","[Users]"," \u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u4e2d\u306b\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u30c6\u30fc\u30d6\u30eb\u306f\u516c\u958b\u3057\u306a\u3044\u65b9\u304c\u8ce2\u660e\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb\u3092\u516c\u958b\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3066\u5bfe\u8c61\u3068\u306a\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u3044\u3066\u30c6\u30fc\u30d6\u30eb\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u9078\u629e\u3092\u89e3\u9664\u3057\u307e\u3059: ",(0,r.kt)("img",{alt:"alt-text",src:n(16558).Z,width:"279",height:"330"})," \u516c\u958b\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u5404\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3057\u3066\u3001\u3053\u306e\u624b\u9806\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"))),(0,r.kt)("h3",a({},{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3059\u3079\u3066\u306e 4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u304c REST \u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u90e8\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u307f\u3092\u975e\u516c\u958b\u306b\u3057\u305f\u3044\u72b6\u6cc1\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002 \u305f\u3068\u3048\u3070\u3001","[Employees]","Salary \u306e\u3088\u3046\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u975e\u516c\u958b\u306e\u65b9\u304c\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u975e\u516c\u958b\u306b\u3059\u308b\u306b\u306f:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3066\u5bfe\u8c61\u3068\u306a\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u9078\u629e\u3057\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u3044\u3066\u30d5\u30a3\u30fc\u30eb\u30c9\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e ",(0,r.kt)("strong",{parentName:"p"},"REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u9078\u629e\u3092\u89e3\u9664\u3057\u307e\u3059: ",(0,r.kt)("img",{alt:"alt-text",src:n(38181).Z,width:"279",height:"271"})," \u516c\u958b\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5bfe\u3057\u3066\u3053\u306e\u624b\u9806\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u3042\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c REST \u3092\u901a\u3057\u3066\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3042\u308b\u305f\u3081\u306b\u306f\u3001\u305d\u306e\u89aa\u30c6\u30fc\u30d6\u30eb\u3082\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u89aa\u30c6\u30fc\u30d6\u30eb\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b\u8a2d\u5b9a\u306b\u95a2\u308f\u3089\u305a\u3001\u3059\u3079\u3066\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u30a2\u30af\u30bb\u30b9\u4e0d\u53ef\u306b\u306a\u308a\u307e\u3059\u3002")))}k.isMDXComponent=!0},31688:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},38181:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},16558:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"}}]);