"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):E(E({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(r),c=o,u=d["".concat(i,".").concat(c)]||d[c]||s[c]||a;return r?n.createElement(u,E(E({ref:t},m),{},{components:r})):n.createElement(u,E({ref:t},m))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,E=new Array(a);E[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,E[1]=p;for(var l=2;l<a;l++)E[l]=r[l];return n.createElement.apply(null,E)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>E,metadata:()=>i,toc:()=>m});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const E={id:"forms",title:"4D \u30d5\u30a9\u30fc\u30e0\u306b\u3064\u3044\u3066"},p=void 0,i={unversionedId:"FormEditor/forms",id:"version-19-R8/FormEditor/forms",title:"4D \u30d5\u30a9\u30fc\u30e0\u306b\u3064\u3044\u3066",description:"\u30d5\u30a9\u30fc\u30e0\u306f\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u3001\u30c7\u30fc\u30bf\u306e\u5165\u529b\u30fb\u4fee\u6b63\u30fb\u5370\u5237\u3092\u304a\u3053\u306a\u3046\u305f\u3081\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3068\u306a\u308a\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c7\u30fc\u30bf\u3092\u3084\u308a\u53d6\u308a\u3057\u3001\u30ec\u30dd\u30fc\u30c8\u3092\u5370\u5237\u3057\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ab\u30b9\u30bf\u30e0\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3084\u30d1\u30ec\u30c3\u30c8\u3001\u305d\u306e\u307b\u304b\u306e\u30ab\u30b9\u30bf\u30e0\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/FormEditor/forms.md",sourceDirName:"FormEditor",slug:"/FormEditor/forms",permalink:"/docs/ja/FormEditor/forms",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/FormEditor/forms.md",tags:[],version:"19-R8",frontMatter:{id:"forms",title:"4D \u30d5\u30a9\u30fc\u30e0\u306b\u3064\u3044\u3066"},sidebar:"docs",previous:{title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406",permalink:"/docs/ja/Desktop/clientServer"},next:{title:"\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8",permalink:"/docs/ja/FormEditor/stylesheets"}},l={},m=[{value:"\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b",id:"\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0",level:2},{value:"\u30d5\u30a9\u30fc\u30e0\u306e\u30da\u30fc\u30b8",id:"\u30d5\u30a9\u30fc\u30e0\u306e\u30da\u30fc\u30b8",level:2},{value:"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0",id:"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3\u4e00\u89a7",id:"\u30d7\u30ed\u30d1\u30c6\u30a3\u4e00\u89a7",level:2}],s={toc:m};function d(e){var{components:t}=e,E=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,E,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306f\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u3001\u30c7\u30fc\u30bf\u306e\u5165\u529b\u30fb\u4fee\u6b63\u30fb\u5370\u5237\u3092\u304a\u3053\u306a\u3046\u305f\u3081\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3068\u306a\u308a\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c7\u30fc\u30bf\u3092\u3084\u308a\u53d6\u308a\u3057\u3001\u30ec\u30dd\u30fc\u30c8\u3092\u5370\u5237\u3057\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ab\u30b9\u30bf\u30e0\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3084\u30d1\u30ec\u30c3\u30c8\u3001\u305d\u306e\u307b\u304b\u306e\u30ab\u30b9\u30bf\u30e0\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(28160).Z,width:"1114",height:"896"})),(0,n.kt)("p",null,"\u307e\u305f\u3001\u4ee5\u4e0b\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30d5\u30a9\u30fc\u30e0\u306f\u4ed6\u306e\u30d5\u30a9\u30fc\u30e0\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/ja/FormObjects/subformOverview"}),"\u30b5\u30d6\u30d5\u30a9\u30fc\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0"}),"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0"))),(0,n.kt)("h2",o({},{id:"\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b"}),"\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("p",null,"4D\u30d5\u30a9\u30fc\u30e0\u306e\u8ffd\u52a0\u3084\u5909\u66f4\u306f\u3001\u4ee5\u4e0b\u306e\u8981\u7d20\u3092\u4f7f\u3063\u3066\u304a\u3053\u306a\u3044\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4D Developer \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9:")," ",(0,n.kt)("strong",{parentName:"li"},"\u30d5\u30a1\u30a4\u30eb")," \u30e1\u30cb\u30e5\u30fc\u307e\u305f\u306f ",(0,n.kt)("strong",{parentName:"li"},"\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9")," \u30a6\u30a3\u30f3\u30c9\u30a6\u304b\u3089\u65b0\u898f\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u30d5\u30a9\u30fc\u30e0\u30a8\u30c7\u30a3\u30bf\u30fc"),": \u30d5\u30a9\u30fc\u30e0\u306e\u7de8\u96c6\u306f ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",o({parentName:"strong"},{href:"/docs/ja/FormEditor/overview"}),"\u30d5\u30a9\u30fc\u30e0\u30a8\u30c7\u30a3\u30bf\u30fc"))," \u3092\u4f7f\u3063\u3066\u304a\u3053\u306a\u3044\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JSON \u30b3\u30fc\u30c9:")," JSON \u3092\u4f7f\u3063\u3066\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u30fb\u8a2d\u8a08\u3057\u3001\u30d5\u30a9\u30fc\u30e0 \u30d5\u30a1\u30a4\u30eb\u3092 ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/ja/Project/architecture#sources-%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%83%BC"}),"\u9069\u5207\u306a\u5834\u6240")," \u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u4f8b:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n')),(0,n.kt)("h2",o({},{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0"),(0,n.kt)("p",null,"2\u3064\u306e\u30ab\u30c6\u30b4\u30ea\u30fc\u306e\u30d5\u30a9\u30fc\u30e0\u304c\u5b58\u5728\u3057\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0")," - \u30c6\u30fc\u30d6\u30eb\u306b\u5c5e\u3055\u306a\u3044\u72ec\u7acb\u3057\u305f\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002 \u3053\u306e\u30bf\u30a4\u30d7\u306e\u30d5\u30a9\u30fc\u30e0\u306f\u3001\u304a\u3082\u306b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3088\u308a\u7c21\u5358\u306b OS\u6a19\u6e96\u306b\u6e96\u62e0\u3059\u308b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0")," - \u7279\u5b9a\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u5c5e\u3057\u3066\u3044\u3066\u3001\u305d\u308c\u306b\u3088\u308a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u57fa\u3065\u304f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u4fbf\u5229\u306a\u81ea\u52d5\u6a5f\u80fd\u306e\u6069\u6075\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u901a\u5e38\u3001\u30c6\u30fc\u30d6\u30eb\u306b\u306f\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u3068\u51fa\u529b\u30d5\u30a9\u30fc\u30e0\u304c\u5225\u3005\u306b\u5b58\u5728\u3057\u307e\u3059\u3002"))),(0,n.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u30d5\u30a9\u30fc\u30e0\u30ab\u30c6\u30b4\u30ea\u30fc\u3092\u9078\u629e\u3057\u307e\u3059\u304c\u3001\u5f8c\u304b\u3089\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("h2",o({},{id:"\u30d5\u30a9\u30fc\u30e0\u306e\u30da\u30fc\u30b8"}),"\u30d5\u30a9\u30fc\u30e0\u306e\u30da\u30fc\u30b8"),(0,n.kt)("p",null,"\u5404\u30d5\u30a9\u30fc\u30e0\u306f\u3001\u5c11\u306a\u304f\u3068\u3082 2\u3064\u306e\u30da\u30fc\u30b8\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30da\u30fc\u30b81: \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u8868\u793a\u3055\u308c\u308b\u30e1\u30a4\u30f3\u30da\u30fc\u30b8"),(0,n.kt)("li",{parentName:"ul"},"\u30da\u30fc\u30b80: \u80cc\u666f\u30da\u30fc\u30b8\u3002\u3053\u306e\u30da\u30fc\u30b8\u4e0a\u306b\u7f6e\u304b\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3059\u3079\u3066\u306e\u30da\u30fc\u30b8\u3067\u8868\u793a\u3055\u308c\u307e\u3059")),(0,n.kt)("p",null,"1\u3064\u306e\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306b\u8907\u6570\u306e\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4e00\u753b\u9762\u306b\u7d0d\u307e\u308a\u304d\u3089\u306a\u3044\u6570\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u5909\u6570\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u30da\u30fc\u30b8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u8907\u6570\u306e\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u3082\u3063\u3068\u3082\u91cd\u8981\u306a\u60c5\u5831\u3092\u6700\u521d\u306e\u30da\u30fc\u30b8\u306b\u914d\u7f6e\u3057\u3001\u4ed6\u306e\u60c5\u5831\u3092\u5f8c\u308d\u306e\u30da\u30fc\u30b8\u306b\u914d\u7f6e\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30c8\u30d4\u30c3\u30af\u3054\u3068\u306b\u3001\u5c02\u7528\u30da\u30fc\u30b8\u306b\u307e\u3068\u3081\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"../FormEditor/formEditor.html#%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E5%85%A5%E5%8A%9B%E9%A0%86"}),"\u5165\u529b\u9806"),"\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u30c7\u30fc\u30bf\u5165\u529b\u4e2d\u306e\u30b9\u30af\u30ed\u30fc\u30eb\u52d5\u4f5c\u3092\u5c11\u306a\u304f\u3057\u305f\u308a\u3001\u307e\u305f\u306f\u4e0d\u8981\u306b\u3059\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u8981\u7d20\u306e\u5468\u308a\u306e\u7a7a\u9593\u3092\u5e83\u3052\u3001\u6d17\u7df4\u3055\u308c\u305f\u753b\u9762\u3092\u30c7\u30b6\u30a4\u30f3\u3059\u308b\u3002")),(0,n.kt)("p",null,"\u8907\u6570\u30da\u30fc\u30b8\u306f\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u306e\u307f\u5f79\u7acb\u3061\u307e\u3059\u3002 \u5370\u5237\u51fa\u529b\u306b\u306f\u5411\u304d\u307e\u305b\u3093\u3002 \u30de\u30eb\u30c1\u30da\u30fc\u30b8\u30d5\u30a9\u30fc\u30e0\u3092\u5370\u5237\u3059\u308b\u3068\u3001\u6700\u521d\u306e\u30da\u30fc\u30b8\u3057\u304b\u5370\u5237\u3055\u308c\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306e\u30da\u30fc\u30b8\u6570\u306b\u306f\u5236\u9650\u304c\u3042\u308a\u307e\u305b\u3093\u3002 \u30d5\u30a9\u30fc\u30e0\u5185\u306e\u8907\u6570\u30da\u30fc\u30b8\u4e0a\u306b\u540c\u3058\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f55\u5ea6\u3067\u3082\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u30d5\u30a9\u30fc\u30e0\u306e\u30da\u30fc\u30b8\u6570\u304c\u591a\u304f\u306a\u308b\u307b\u3069\u3001\u30d5\u30a9\u30fc\u30e0\u306e\u8868\u793a\u306b\u8981\u3059\u308b\u6642\u9593\u304c\u9577\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30de\u30eb\u30c1\u30da\u30fc\u30b8\u30d5\u30a9\u30fc\u30e0\u306b\u306f\u30011\u3064\u306e\u80cc\u666f\u30da\u30fc\u30b8\u3068\u8907\u6570\u306e\u8868\u793a\u30da\u30fc\u30b8\u304c\u5b58\u5728\u3057\u307e\u3059\u3002 \u80cc\u666f\u30da\u30fc\u30b8\u4e0a\u306b\u7f6e\u304b\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3059\u3079\u3066\u306e\u8868\u793a\u30da\u30fc\u30b8\u306b\u73fe\u308c\u307e\u3059\u304c\u3001\u305d\u308c\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u9078\u629e\u3084\u7de8\u96c6\u306f\u80cc\u666f\u30da\u30fc\u30b8\u3067\u306e\u307f\u53ef\u80fd\u3067\u3059\u3002 \u8907\u6570\u30da\u30fc\u30b8\u30d5\u30a9\u30fc\u30e0\u3067\u306f\u3001\u30dc\u30bf\u30f3\u30d1\u30ec\u30c3\u30c8\u3092\u80cc\u666f\u30da\u30fc\u30b8\u306b\u7f6e\u304f\u3079\u304d\u3067\u3059\u3002 \u307e\u305f\u3001\u30da\u30fc\u30b8\u79fb\u52d5\u30c4\u30fc\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u80cc\u666f\u30da\u30fc\u30b8\u306b\u914d\u7f6e\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h2",o({},{id:"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0"}),"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0"),(0,n.kt)("p",null,'4D \u3067\u306f "\u7d99\u627f\u30d5\u30a9\u30fc\u30e0" \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3064\u307e\u308a\u3001',(0,n.kt)("em",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0A")," \u306e\u5168\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c ",(0,n.kt)("em",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0B")," \u3067\u4f7f\u7528\u53ef\u80fd\u3067\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u5834\u5408\u3001",(0,n.kt)("em",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0B")," \u306f ",(0,n.kt)("em",{parentName:"p"},"\u30d5\u30a9\u30fc\u30e0A"),' \u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092 "\u7d99\u627f" \u3057\u307e\u3059\u3002'),(0,n.kt)("p",null,"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3078\u306e\u53c2\u7167\u306f\u5e38\u306b\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306e\u8981\u7d20\u304c\u5909\u66f4\u3055\u308c\u308b\u3068 (\u305f\u3068\u3048\u3070\u3001\u30dc\u30bf\u30f3\u30b9\u30bf\u30a4\u30eb)\u3001\u3053\u306e\u8981\u7d20\u3092\u4f7f\u7528\u3059\u308b\u5168\u30d5\u30a9\u30fc\u30e0\u304c\u81ea\u52d5\u7684\u306b\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0\u304a\u3088\u3073\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u4e21\u65b9\u3092\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306b\u542b\u307e\u308c\u308b\u8981\u7d20\u306f\u3001\u7570\u306a\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30c6\u30fc\u30d6\u30eb\u3067\u306e\u4f7f\u7528\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u3001\u6b21\u306e\u9806\u5e8f\u3067\u7d44\u307f\u7acb\u3066\u3089\u308c\u307e\u3059:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306e 0\u30da\u30fc\u30b8"),(0,n.kt)("li",{parentName:"ol"},"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306e 1\u30da\u30fc\u30b8"),(0,n.kt)("li",{parentName:"ol"},"\u958b\u304b\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u306e 0\u30da\u30fc\u30b8"),(0,n.kt)("li",{parentName:"ol"},"\u958b\u304b\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u306e\u30ab\u30ec\u30f3\u30c8\u30da\u30fc\u30b8")),(0,n.kt)("p",null,"\u3053\u306e\u9806\u5e8f\u306b\u3088\u308a\u3001\u30d5\u30a9\u30fc\u30e0\u306b\u304a\u3051\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,n.kt)("a",o({parentName:"p"},{href:"../FormEditor/formEditor.html#%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E5%85%A5%E5%8A%9B%E9%A0%86"}),"\u5165\u529b\u9806")," \u304c\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306e 0\u30da\u30fc\u30b8\u3068 1\u30da\u30fc\u30b8\u3060\u3051\u304c\u4ed6\u306e\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u53ef\u80fd\u3067\u3059\u3002")),(0,n.kt)("p",null,"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u5834\u5408\u3001\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u30d5\u30a9\u30fc\u30e0\u30e1\u30bd\u30c3\u30c9\u306f\u4f7f\u7528\u3055\u308c\u307e\u305b\u3093\u3002 \u4ed6\u65b9\u3001\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u306b\u542b\u307e\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u4ed6\u306e\u30d5\u30a9\u30fc\u30e0\u3092\u7d99\u627f\u3059\u308b\u30d5\u30a9\u30fc\u30e0\u306b\u304a\u3044\u3066\u3001",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D"}),"\u7d99\u627f\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u540d")," \u304a\u3088\u3073 ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"}),"\u7d99\u627f\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u30c6\u30fc\u30d6\u30eb")," (\u30c6\u30fc\u30d6\u30eb\u30d5\u30a9\u30fc\u30e0\u306e\u5834\u5408) \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u7d99\u627f\u3059\u308b\u306b\u306f ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"}),"\u7d99\u627f\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u30c6\u30fc\u30d6\u30eb")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3067 ",(0,n.kt)("inlineCode",{parentName:"p"},"\\<\u306a\u3057>"),' \u3092\u9078\u629e\u3057\u307e\u3059 (JSON \u306e\u5834\u5408\u306f " ")\u3002'),(0,n.kt)("p",null,"\u30d5\u30a9\u30fc\u30e0\u306e\u7d99\u627f\u3092\u3084\u3081\u308b\u306b\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u30ea\u30b9\u30c8\u306e ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D"}),"\u7d99\u627f\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u540d")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3067 ",(0,n.kt)("inlineCode",{parentName:"p"},"\\<\u306a\u3057>"),' \u30aa\u30d7\u30b7\u30e7\u30f3 (JSON\u306e\u5834\u5408\u306f " ") \u3092\u9078\u629e\u3057\u307e\u3059\u3002'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4efb\u610f\u306e\u30d5\u30a9\u30fc\u30e0\u3067\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u306e\u30d5\u30a9\u30fc\u30e0\u3092\u7b2c3\u306e\u30d5\u30a9\u30fc\u30e0\u306e\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u518d\u5e30\u7684\u306a\u65b9\u6cd5\u3067\u5404\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u9023\u7d50\u3055\u308c\u307e\u3059\u3002 4D\u306f\u3001\u518d\u5e30\u7684\u30eb\u30fc\u30d7\u3092\u898b\u3064\u3051\u51fa\u3057 (\u305f\u3068\u3048\u3070\u3001","[\u30c6\u30fc\u30d6\u30eb1]","\u30d5\u30a9\u30fc\u30e01 \u304c ","[\u30c6\u30fc\u30d6\u30eb1]","\u30d5\u30a9\u30fc\u30e01 \u3092\u7d99\u627f\u30d5\u30a9\u30fc\u30e0\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3066\u3044\u308b\u3001\u3064\u307e\u308a\u81ea\u5206\u81ea\u8eab\u3092\u7d99\u627f\u3057\u3066\u3044\u308b\u5834\u5408)\u3001\u30d5\u30a9\u30fc\u30e0\u306e\u9023\u9396\u3092\u4e2d\u65ad\u3057\u307e\u3059\u3002")),(0,n.kt)("h2",o({},{id:"\u30d7\u30ed\u30d1\u30c6\u30a3\u4e00\u89a7"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u4e00\u89a7"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%BF%E3%82%A4%E3%83%97"}),"\u30d5\u30a9\u30fc\u30e0\u30bf\u30a4\u30d7")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D"}),"\u30d5\u30a9\u30fc\u30e0\u540d")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB"}),"\u7d99\u627f\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u30c6\u30fc\u30d6\u30eb")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E7%B6%99%E6%89%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%90%8D"}),"\u7d99\u627f\u3055\u308c\u305f\u30d5\u30a9\u30fc\u30e0\u540d")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB"}),"\u30a6\u30a3\u30f3\u30c9\u30a6\u30bf\u30a4\u30c8\u30eb")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E9%85%8D%E7%BD%AE%E3%82%92%E8%A8%98%E6%86%B6"}),"\u914d\u7f6e\u3092\u8a18\u61b6")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#%E3%82%B5%E3%83%96%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%A8%E3%81%97%E3%81%A6%E5%85%AC%E9%96%8B"}),"\u30b5\u30d6\u30d5\u30a9\u30fc\u30e0\u3068\u3057\u3066\u516c\u958b")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/windowSize#%E5%9B%BA%E5%AE%9A%E5%B9%85"}),"\u56fa\u5b9a\u5e45")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E5%B9%85-%E6%9C%80%E5%B0%8F%E5%B9%85"}),"\u6700\u5c0f\u5e45")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E5%B9%85-%E6%9C%80%E5%B0%8F%E5%B9%85"}),"\u6700\u5927\u5e45")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/windowSize#%E5%9B%BA%E5%AE%9A%E9%AB%98%E3%81%95"}),"\u56fa\u5b9a\u9ad8\u3055")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E9%AB%98%E3%81%95-%E6%9C%80%E5%B0%8F%E9%AB%98%E3%81%95"}),"\u6700\u5c0f\u9ad8\u3055")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/windowSize#%E6%9C%80%E5%A4%A7%E9%AB%98%E3%81%95-%E6%9C%80%E5%B0%8F%E9%AB%98%E3%81%95"}),"\u6700\u5927\u9ad8\u3055")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/print#%E8%A8%AD%E5%AE%9A"}),"\u5370\u5237\u8a2d\u5b9a")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/menu#%E9%80%A3%E7%B5%90%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%90%E3%83%BC"}),"\u9023\u7d50\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%98%E3%83%83%E3%83%80%E3%83%BC"}),"\u30d5\u30a9\u30fc\u30e0\u30d8\u30c3\u30c0\u30fc")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E8%A9%B3%E7%B4%B0"}),"\u30d5\u30a9\u30fc\u30e0\u8a73\u7d30")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AF"}),"\u30d5\u30a9\u30fc\u30e0\u30d6\u30ec\u30fc\u30af")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/markers#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%95%E3%83%83%E3%82%BF%E3%83%BC"}),"\u30d5\u30a9\u30fc\u30e0\u30d5\u30c3\u30bf\u30fc")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/action#%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89"}),"\u30e1\u30bd\u30c3\u30c9")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ja/FormEditor/propertiesForm#pages"}),"Pages")))}d.isMDXComponent=!0},28160:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"}}]);