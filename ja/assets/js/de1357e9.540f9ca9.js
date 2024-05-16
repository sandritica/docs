"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71090],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},404095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},s=void 0,o={unversionedId:"REST/authUsers",id:"version-20-R5/REST/authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",description:"\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9 \u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408 (\u63a8\u5968)\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3 \u3092\u4f5c\u6210\u30fb\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8907\u6570\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u3084\u3001Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u30c7\u30fc\u30bf\u5171\u6709\u3001\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u306e\u5236\u5fa1\u306a\u3069\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/ja/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},sidebar:"docs",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",permalink:"/docs/ja/REST/configuration"},next:{title:"\u30b5\u30fc\u30d0\u30fc\u60c5\u5831\u306e\u53d6\u5f97",permalink:"/docs/ja/REST/genInfo"}},p={},u=[{value:"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",id:"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9",level:3},{value:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",id:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",level:3},{value:"\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8",id:"\u8a18\u8ff0\u7684rest\u30ea\u30af\u30a8\u30b9\u30c8",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:3},{value:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"<code>On REST Authentication</code> \u306e\u4f7f\u7528",id:"on-rest-authentication-\u306e\u4f7f\u7528",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-1",level:3}],d={toc:u};function c(e){var{components:t}=e,l=i(e,["components"]);return(0,a.kt)("wrapper",r({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96"}),"\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9")," \u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408 (\u63a8\u5968)\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/WebServer/sessions"}),"Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3")," \u3092\u4f5c\u6210\u30fb\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8907\u6570\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u3084\u3001Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u30c7\u30fc\u30bf\u5171\u6709\u3001\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u306e\u5236\u5fa1\u306a\u3069\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u958b\u304b\u308c\u305f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Session"),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/SessionClass"}),"Session API")," \u3092\u4ecb\u3057\u3066\u64cd\u4f5c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5f8c\u7d9a\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u540c\u3058\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u3092\u518d\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"4D Server\u4e0a\u3067\u306f\u3001",(0,a.kt)("a",r({parentName:"li"},{href:"#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%89"}),"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9")," \u306b\u3088\u3063\u3066\u306f\u3001REST\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304f\u969b\u306b 4D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc\u306e 4D \u3067\u306f\u3001\u30c6\u30b9\u30c8\u76ee\u7684\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u3092 3\u3064\u307e\u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))),(0,a.kt)("h2",r({},{id:"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"}),"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"),(0,a.kt)("p",null,'REST\u30ea\u30af\u30a8\u30b9\u30c8\u304c 4D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u306b\u3088\u3063\u3066\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 "\u30c7\u30d5\u30a9\u30eb\u30c8" \u307e\u305f\u306f "\u5f37\u5236\u30ed\u30b0\u30a4\u30f3" \u306e 2\u3064\u306e\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u304b\u3089\u9078\u629e\u3067\u304d\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u306f\u3001",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/ORDA/privileges#rolesjson-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB"}),(0,a.kt)("inlineCode",{parentName:"a"},"roles.json"),"\u30d5\u30a1\u30a4\u30eb")," \u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"forceLogin")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3063\u3066\u8a2d\u5b9a\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"forceLogin" \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u5b58\u5728\u3057\u306a\u3044\u304b "false" \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001',(0,a.kt)("strong",{parentName:"li"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9")," \u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},'"forceLogin" \u30d7\u30ed\u30d1\u30c6\u30a3\u304c "true" \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001',(0,a.kt)("strong",{parentName:"li"},"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3")," \u30e2\u30fc\u30c9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("admonition",r({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5909\u66f4\u3057\u305f\u5834\u5408\u3001\u8a2d\u5b9a\u3092\u53cd\u6620\u3059\u308b\u306b\u306f\u30b5\u30fc\u30d0\u30fc\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Qodly Studio for 4D \u3067\u306f\u3001\u6a29\u9650\u30d1\u30cd\u30eb\u306e ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/WebServer/qodly-studio#force-login"}),(0,a.kt)("strong",{parentName:"a"},"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3"),"\u30aa\u30d7\u30b7\u30e7\u30f3")," \u3092\u4f7f\u7528\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("h3",r({},{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9"}),"\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9"),(0,a.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9\u3067\u306f\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3067\u51e6\u7406\u3055\u308c\u3001\u81ea\u52d5\u7684\u306b\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u6d88\u8cbb\u3055\u308c\u307e\u3059 (Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u4f5c\u6210\u3055\u308c\u307e\u3059)\u3002 \u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u4fdd\u6301\u3055\u308c\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u6570\u3092\u5236\u5fa1\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u306e\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30fc\u30c9\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (\u5f8c\u8ff0\u53c2\u7167)\u3002"),(0,a.kt)("h3",r({},{id:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"}),"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"),(0,a.kt)("p",null,'"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3" \u30e2\u30fc\u30c9\u3067\u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6d88\u8cbb\u306f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304b\u3089\u5207\u308a\u96e2\u3055\u308c\u307e\u3059\u3002 \u30e9\u30a4\u30bb\u30f3\u30b9\u306f\u3001',(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," \u304c\u5b9f\u884c\u3055\u308c\u305f\u6642\u306b\u306e\u307f\u5fc5\u8981\u306a\u305f\u3081\u3001\u4f7f\u7528\u3055\u308c\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6570\u3092\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"#%E8%A8%98%E8%BF%B0%E7%9A%84rest%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88"}),"\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8"),' \u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u6d88\u8cbb\u3059\u308b Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u304b\u308c\u3066\u3044\u306a\u304f\u3066\u3082\u3001\u5e38\u306b\u30b5\u30fc\u30d0\u30fc\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u305d\u308c\u3089\u306f "\u30b2\u30b9\u30c8" \u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4ecb\u3057\u3066\u51e6\u7406\u3055\u308c\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u4ed6\u306e\u3059\u3079\u3066\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8 (\u30c7\u30fc\u30bf\u51e6\u7406\u3084\u95a2\u6570\u306e\u5b9f\u884c) \u306f\u3001\u9069\u5207\u306a\u6a29\u9650\u3092\u6301\u3064 Web\u30bb\u30c3\u30b7\u30e7\u30f3\u5185\u3067\u5b9f\u884c\u3055\u308c\u305f\u5834\u5408\u306b\u306e\u307f\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059 Web\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u308b\u306b\u306f\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," \u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u3068\u30014D\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6d88\u8cbb\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u30ed\u30b0\u30a4\u30f3\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'\u6700\u521d\u306e REST\u30b3\u30fc\u30eb (\u305f\u3068\u3048\u3070 Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30fc\u30eb) \u3067\u306f\u3001"\u30b2\u30b9\u30c8" Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u8a18\u8ff0\u7684\u30ea\u30af\u30a8\u30b9\u30c8\u4ee5\u5916\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u6a29\u9650\u3082\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6d88\u8cbb\u3082\u3042\u308a\u307e\u305b\u3093\u3002'),(0,a.kt)("li",{parentName:"ol"},"\u4e8b\u524d\u306b\u7528\u610f\u3057\u305f ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/ja/ORDA/ordaClasses#datastore-%E3%82%AF%E3%83%A9%E3%82%B9"}),"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30af\u30e9\u30b9\u95a2\u6570")," ",(0,a.kt)("inlineCode",{parentName:"li"},"authentify()")," \u3092\u547c\u3073\u51fa\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u8cc7\u683c\u60c5\u5831\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3001\u9069\u5207\u306a\u6a29\u9650\u3067",(0,a.kt)("inlineCode",{parentName:"li"},"Session.setPrivileges()")," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/rest/$catalog/authentify")," \u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u8cc7\u683c\u60c5\u5831\u3068\u5171\u306b\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u306a\u3044\u57fa\u672c\u7684\u306a\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u306e\u307f\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"/rest/$getWebForm"),"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4ecb\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u308b Qodly\u30d5\u30a9\u30fc\u30e0\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u30e6\u30fc\u30b6\u30fc\u304c\u6b63\u5e38\u306b\u8a8d\u8a3c\u3055\u308c\u305f\u5834\u5408\u30014D\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u6d88\u8cbb\u3055\u308c\u3001\u3059\u3079\u3066\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u53d7\u3051\u5165\u308c\u3089\u308c\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(113820).Z,width:"1344",height:"756"})),(0,a.kt)("h3",r({},{id:"\u8a18\u8ff0\u7684rest\u30ea\u30af\u30a8\u30b9\u30c8"}),"\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8"),(0,a.kt)("p",null,'\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044 Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3 ("\u30b2\u30b9\u30c8" \u30bb\u30c3\u30b7\u30e7\u30f3) \u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u306f\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u6307\u3057\u307e\u3059:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docs/ja/REST/catalog"}),(0,a.kt)("inlineCode",{parentName:"a"},"/rest/$catalog"))," \u30ea\u30af\u30a8\u30b9\u30c8 (\u4f8b: ",(0,a.kt)("inlineCode",{parentName:"li"},"/rest/$catalog/$all"),") - \u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/rest/$catalog/authentify")," - \u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u95a2\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/rest/$getWebForm")," - Qodly\u30d5\u30a9\u30fc\u30e0\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(995656).Z,width:"1171",height:"302"})),(0,a.kt)("h3",r({},{id:"function-authentify"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Function authentify")),(0,a.kt)("h4",r({},{id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9"}),"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"exposed Function authentify({params : type}) {-> result : type}\n    // \u30b3\u30fc\u30c9\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"authentify()")," \u95a2\u6570\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/ORDA/ordaClasses#datastore-%E3%82%AF%E3%83%A9%E3%82%B9"}),"DataStore \u30af\u30e9\u30b9")," \u306b\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4ecb\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,'"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3" \u30e2\u30fc\u30c9\u304c\u6709\u52b9\u306a\u5834\u5408\u3001\u3053\u306e\u95a2\u6570\u306f\u3001REST\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304b\u3089\u552f\u4e00\u306e\u5229\u7528\u53ef\u80fd\u306a\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u3067\u3059\u3002\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u9069\u5207\u306a\u6a29\u9650\u3092\u53d6\u5f97\u3059\u308b\u307e\u3067\u3001\u4ed6\u306e\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u3084\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u306f\u62d2\u5426\u3055\u308c\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u3053\u306e\u95a2\u6570\u306f\u3001\u4efb\u610f\u306e\u8a8d\u8a3c\u307e\u305f\u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u60c5\u5831\u3092 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/REST/classFunctions#%E5%BC%95%E6%95%B0"}),"\u5f15\u6570")," \u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u3001\u4efb\u610f\u306e\u5024\u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306f REST\u30ea\u30af\u30a8\u30b9\u30c8\u304b\u3089\u306e\u307f\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u305f\u3081\u3001\u5f15\u6570\u306f POST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u672c\u6587\u3067\u6e21\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u95a2\u6570\u306f 2\u90e8\u69cb\u6210\u3067\u66f8\u304b\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"REST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u9001\u4fe1\u5143\u3092\u8b58\u5225\u3057\u3001\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9"),(0,a.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u9069\u5207\u306a\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u308b ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/ja/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," \u306e\u547c\u3073\u51fa\u3057")),(0,a.kt)("p",null,"\u95a2\u6570\u304c ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," \u3092\u547c\u3073\u51fa\u3055\u306a\u3044\u5834\u5408\u3001\u6a29\u9650\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u306a\u3044\u305f\u3081\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3082\u6d88\u8cbb\u3055\u308c\u305a\u3001\u5f8c\u7d9a\u306e\u8a18\u8ff0\u7684\u3067\u306a\u3044 REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u62d2\u5426\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("h4",r({},{id:"\u4f8b\u984c"}),"\u4f8b\u984c"),(0,a.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067 Web\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304f\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 DataStore \u30af\u30e9\u30b9\u306b\u6b21\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"authentify()")," \u95a2\u6570\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) // \u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u5834\u5408\n    If (Verify password hash($credentials.password; $user.password))\n        Session.setPrivileges("vip")\n    Else \n        return "\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059"\n    End if \nElse \n        return "\u767b\u9332\u3055\u308c\u3066\u3044\u306a\u3044\u30e6\u30fc\u30b6\u30fc\u3067\u3059"\nEnd if \n\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"authentify()")," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u306b\u306f:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/authentify")),(0,a.kt)("p",null,"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'[{"name":"Henry",\n"password":"123"}]\n')),(0,a.kt)("h2",r({},{id:"on-rest-authentication-\u306e\u4f7f\u7528"}),(0,a.kt)("inlineCode",{parentName:"h2"},"On REST Authentication")," \u306e\u4f7f\u7528"),(0,a.kt)("p",null,'\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u306e (\u3064\u307e\u308a\u3001"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3" \u30e2\u30fc\u30c9\u304c\u7121\u52b9\u5316\u3055\u308c\u3066\u3044\u308b) \u5834\u5408\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30d8\u30c3\u30c0\u30fc\u306b\u542b\u3081\u305f POST\u30ea\u30af\u30a8\u30b9\u30c8\u5185\u3067 ',(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/REST/directory#directorylogin"}),(0,a.kt)("inlineCode",{parentName:"a"},"$directory/login"))," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9 (\u5b58\u5728\u3059\u308c\u3070) \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30e6\u30fc\u30b6\u30fc\u306e\u8a8d\u8a3c\u3092\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (\u5f8c\u8ff0\u53c2\u7167)\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u306a\u3044\u5834\u5408\u306b\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"guest")," \u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u304b\u308c\u307e\u3059\u3002"),(0,a.kt)("h3",r({},{id:"\u4f8b\u984c-1"}),"\u4f8b\u984c"),(0,a.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c html\u30da\u30fc\u30b8\u306b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3001POST \u3067 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/ja/REST/directory#directorylogin"}),(0,a.kt)("inlineCode",{parentName:"a"},"$directory/login"))," \u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059 (html\u30da\u30fc\u30b8\u306e\u9001\u4fe1\u306b\u304a\u3044\u3066\u306f\u3001HTTPS\u63a5\u7d9a\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059)\u3002 \u3053\u308c\u306b\u3088\u3066\u547c\u3073\u51fa\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u3092\u304a\u3053\u306a\u3044\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"html\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(867663).Z,width:"268",height:"85"})),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n    <FORM name="myForm">\n\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n\u30d1\u30b9\u30ef\u30fc\u30c9: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\n\u30ed\u30b0\u30a4\u30f3\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">\u30ed\u30b0\u30a4\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); // REST\u30b5\u30fc\u30d0\u30fc\u30a2\u30c9\u30ec\u30b9\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n\n')),(0,a.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306b\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u304c\u9001\u4fe1\u3055\u308c\u308b\u3068\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// On REST Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n    // \u30d8\u30c3\u30c0\u30fc\u306b username-4D \u3068 password-4D \u3092\u542b\u3081\u3066 \'/rest\' URL \u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3057\u305f\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e00\u65e6\u547c\u3073\u51fa\u3055\u308c\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," \u3092\u8fd4\u3059\u3068\u3001\u540c\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306f\u305d\u308c\u4ee5\u4e0a\u547c\u3073\u51fa\u3055\u308c\u307e\u305b\u3093\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fillSession")," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u305f\u3068\u3048\u3070\u6b21\u306e\u3088\u3046\u306b\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u521d\u671f\u5316\u3057\u307e\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n')))}c.isMDXComponent=!0},995656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},113820:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/force-login-2-1930148cafd4aa463ed094161b992f72.jpeg"},867663:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);