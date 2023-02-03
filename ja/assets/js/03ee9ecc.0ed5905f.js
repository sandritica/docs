"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"control-flow",title:"\u5236\u5fa1\u30d5\u30ed\u30fc"},i=void 0,p={unversionedId:"Concepts/control-flow",id:"version-19-R8/Concepts/control-flow",title:"\u5236\u5fa1\u30d5\u30ed\u30fc",description:"\u30e1\u30bd\u30c3\u30c9\u3084\u95a2\u6570\u304c\u5358\u7d14\u304b\u8907\u96d1\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u958b\u767a\u8005\u306f3\u3064\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306e\u3046\u3061\u30011\u3064\u4ee5\u4e0a\u3092\u5e38\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u304c\u5b9f\u884c\u3055\u308c\u308b\u9806\u5e8f\u3092\u6c7a\u5b9a\u3059\u308b\u5b9f\u884c\u30d5\u30ed\u30fc\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002 3\u3064\u306e\u30bf\u30a4\u30d7\u306e\u69cb\u9020\u304c\u3042\u308a\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/Concepts/flow-control.md",sourceDirName:"Concepts",slug:"/Concepts/control-flow",permalink:"/docs/ja/Concepts/control-flow",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fflow-control.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"control-flow",title:"\u5236\u5fa1\u30d5\u30ed\u30fc"},sidebar:"docs",previous:{title:"\u30af\u30e9\u30b9",permalink:"/docs/ja/Concepts/classes"},next:{title:"\u5206\u5c90\u69cb\u9020",permalink:"/docs/ja/Concepts/branching"}},s={},c=[{value:"return {expression}",id:"return-expression",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3}],u={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30e1\u30bd\u30c3\u30c9\u3084\u95a2\u6570\u304c\u5358\u7d14\u304b\u8907\u96d1\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u958b\u767a\u8005\u306f3\u3064\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306e\u3046\u3061\u30011\u3064\u4ee5\u4e0a\u3092\u5e38\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u69cb\u9020\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u304c\u5b9f\u884c\u3055\u308c\u308b\u9806\u5e8f\u3092\u6c7a\u5b9a\u3059\u308b\u5b9f\u884c\u30d5\u30ed\u30fc\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002 3\u3064\u306e\u30bf\u30a4\u30d7\u306e\u69cb\u9020\u304c\u3042\u308a\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb"),": \u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u69cb\u9020\u306f\u5358\u7d14\u306a\u7dda\u5f62\u69cb\u9020\u3067\u3059\u3002 \u30b7\u30fc\u30b1\u30f3\u30b9\u3068\u306f\u30014D\u304c\u6700\u521d\u304b\u3089\u6700\u5f8c\u307e\u3067\u6b21\u3005\u306b\u5b9f\u884c\u3059\u308b\u4e00\u9023\u306e\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3067\u3059\u3002 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3067\u983b\u7e41\u306b\u4f7f\u7528\u3055\u308c\u308b1\u884c\u304b\u3089\u6210\u308b\u30eb\u30fc\u30c1\u30f3\u306f\u3082\u3063\u3068\u3082\u7c21\u5358\u306a\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u69cb\u9020\u306e\u4f8b\u3067\u3059\u3002 \u4f8b: ",(0,r.kt)("inlineCode",{parentName:"li"},"[People]lastName:=Uppercase([People]lastName)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/docs/ja/Concepts/branching"}),"\u5206\u5c90")),": \u5206\u5c90\u69cb\u9020\u306f\u3001\u6761\u4ef6\u3092\u30c6\u30b9\u30c8\u3057\u3001\u305d\u306e\u7d50\u679c\u306b\u57fa\u3065\u3044\u3066\u7570\u306a\u308b\u6d41\u308c\u306b\u30e1\u30bd\u30c3\u30c9\u3092\u5c0e\u304d\u307e\u3059\u3002 \u6761\u4ef6\u306f true \u307e\u305f\u306f false \u306b\u8a55\u4fa1\u3055\u308c\u308b\u30d6\u30fc\u30eb\u5f0f\u3067\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"li"},"If...Else...End if")," \u69cb\u6587\u306f\u5206\u5c90\u69cb\u9020\u306e\u4e00\u4f8b\u3067\u3001\u51e6\u7406\u30d5\u30ed\u30fc\u3092\u4e8c\u3064\u306b\u5206\u5c90\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"li"},"Case of...Else...End case")," \u69cb\u6587\u3082\u5206\u5c90\u69cb\u9020\u306e\u4e00\u3064\u3067\u3001\u51e6\u7406\u30d5\u30ed\u30fc\u3092\u3082\u3063\u3068\u305f\u304f\u3055\u3093\u5206\u5c90\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/docs/ja/Concepts/looping"}),"\u30eb\u30fc\u30d7")),": \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210\u306b\u3042\u305f\u3063\u3066\u3001\u4f55\u5ea6\u3082\u540c\u3058\u51e6\u7406\u3092\u7e70\u308a\u8fd4\u3059\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u30014D\u306f\u4ee5\u4e0b\u306e\u30eb\u30fc\u30d7\u69cb\u9020\u3092\u5099\u3048\u3066\u3044\u307e\u3059:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"While...End while")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Repeat...Until")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For...End for")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each"),(0,r.kt)("br",null)," \u30eb\u30fc\u30d7\u3092\u5236\u5fa1\u3059\u308b\u65b9\u6cd5\u306b\u306f\u3001\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u308b\u307e\u3067\u30eb\u30fc\u30d7\u3059\u308b\u65b9\u6cd5\u3068\u3001\u6307\u5b9a\u3057\u305f\u56de\u6570\u3060\u3051\u30eb\u30fc\u30d7\u3059\u308b\u65b9\u6cd5\u306e 2\u901a\u308a\u304c\u3042\u308a\u307e\u3059\u3002 \u5404\u30eb\u30fc\u30d7\u69cb\u9020\u306f\u3044\u305a\u308c\u306e\u65b9\u6cd5\u306b\u3082\u7528\u3044\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"While")," \u30eb\u30fc\u30d7\u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"Repeat")," \u30eb\u30fc\u30d7\u306f\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u308b\u307e\u3067\u7e70\u308a\u8fd4\u3059\u5834\u5408\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"For")," \u30eb\u30fc\u30d7\u306f\u6307\u5b9a\u3057\u305f\u56de\u6570\u3060\u3051\u30eb\u30fc\u30d7\u3059\u308b\u5834\u5408\u306e\u5229\u7528\u306b\u9069\u5207\u3067\u3059\u3002  ",(0,r.kt)("inlineCode",{parentName:"li"},"For each...End for each")," \u30eb\u30fc\u30d7\u306f\u4e21\u65b9\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u3067\u30eb\u30fc\u30d7\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8:")," 4D\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u69cb\u9020 (If/While/For/Caes of/Repeat/For each) \u3092512\u30ec\u30d9\u30eb\u307e\u3067\u5165\u308c\u5b50\u3067\u8a18\u8ff0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",a({},{id:"return-expression"}),"return {expression}"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5c65\u6b74"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"v19 R4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8ffd\u52a0"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"return"),"\u6587\u306f\u3069\u3053\u304b\u3089\u3067\u3082\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u95a2\u6570\u3084\u30e1\u30bd\u30c3\u30c9\u306e\u4e2d\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u6587\u304c\u4f7f\u308f\u308c\u308b\u3068\u3001\u305d\u306e\u95a2\u6570\u3084\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u884c\u304c\u4e2d\u65ad\u3055\u308c\u307e\u3059\u3002 \u6b8b\u308a\u306e\u30b3\u30fc\u30c9\u306f\u5b9f\u884c\u3055\u308c\u305a\u3001\u547c\u3073\u51fa\u3057\u5143\u306b\u5236\u5fa1\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"return")," \u6587\u3092\u4f7f\u7528\u3057\u3066\u3001\u547c\u3073\u51fa\u3057\u5143\u306b",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/ja/Concepts/parameters#%E6%88%BB%E3%82%8A%E5%80%A4"}),"\u623b\u308a\u5024")," \u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",a({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $message : Text\nvar $i : Integer\n\nWhile (True) // \u7121\u9650\u30eb\u30fc\u30d7\n    $i:=$i+1\n    $message+=String($i)+"A\\r"  // 5\u307e\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\n    logConsole($message)\n    If ($i=5)\n        return // \u30eb\u30fc\u30d7\u3092\u7d42\u4e86\u3055\u305b\u307e\u3059\n    End if \n    $message+=String($i)+"B\\r"  // 4\u307e\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\n    logConsole($message)\nEnd while \n$message+=String($i)+"C\\r"  // \u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093 \nlogConsole($message)\n\n// 1A\n// 1B\n// 2A\n// 2B\n// 3A\n// 3B\n// 4A\n// 4B\n// 5A\n\n')))}m.isMDXComponent=!0}}]);