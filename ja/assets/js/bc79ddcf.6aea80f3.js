"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>l});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"components",title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},c=void 0,s={unversionedId:"Concepts/components",id:"version-19-R8/Concepts/components",title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",description:"4D \u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u53ef\u80fd\u306a\u30011\u3064\u4ee5\u4e0a\u306e\u6a5f\u80fd\u3092\u6301\u3064 4D\u30b3\u30fc\u30c9\u3084\u30d5\u30a9\u30fc\u30e0\u306e\u4e00\u5f0f\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u30014D SVG\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 \u306f\u3001SVG\u30d5\u30a1\u30a4\u30eb\u306e\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u9ad8\u5ea6\u306a\u30b3\u30de\u30f3\u30c9\u3068\u7d71\u5408\u3055\u308c\u305f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30a8\u30f3\u30b8\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/ja/Concepts/components",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"components",title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},sidebar:"docs",previous:{title:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30e2\u30fc\u30c9",permalink:"/docs/ja/Concepts/interpreted-compiled"},next:{title:"\u30d7\u30e9\u30b0\u30a4\u30f3",permalink:"/docs/ja/Concepts/plug-ins"}},i={},l=[{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u898b\u3064\u3051\u65b9",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u898b\u3064\u3051\u65b9",level:2},{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u3044\u65b9",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u3044\u65b9",level:2}],u={toc:l};function m(e){var{components:t}=e,p=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D \u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u53ef\u80fd\u306a\u30011\u3064\u4ee5\u4e0a\u306e\u6a5f\u80fd\u3092\u6301\u3064 4D\u30b3\u30fc\u30c9\u3084\u30d5\u30a9\u30fc\u30e0\u306e\u4e00\u5f0f\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.ja.html"}),"4D SVG\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8")," \u306f\u3001SVG\u30d5\u30a1\u30a4\u30eb\u306e\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u9ad8\u5ea6\u306a\u30b3\u30de\u30f3\u30c9\u3068\u7d71\u5408\u3055\u308c\u305f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30a8\u30f3\u30b8\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",o({},{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u898b\u3064\u3051\u65b9"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u898b\u3064\u3051\u65b9"),(0,r.kt)("p",null,"\u3044\u304f\u3064\u304b\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Extensions/overview"}),"4D\u958b\u767a\u74b0\u5883\u306b\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u3055\u308c\u3066\u3044\u307e\u3059\u304c\u30014D\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308b\u591a\u304f\u306e 4D\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/search?q=4d-component&type=Repositories"}),"GitHub \u4e0a\u306b\u516c\u958b")," \u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u307e\u305f\u3001",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Extensions/develop-components"}),"\u72ec\u81ea\u306e 4D\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u958b\u767a")," \u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",o({},{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Project/architecture"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,r.kt)("inlineCode",{parentName:"a"},"Components")," \u30d5\u30a9\u30eb\u30c0\u30fc")," \u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002 \u30a8\u30a4\u30ea\u30a2\u30b9\u307e\u305f\u306f\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3067\u52d5\u4f5c\u3059\u308b\u30db\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u307e\u305f\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u3069\u3061\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u308b\u30db\u30b9\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002 \u3053\u306e\u5834\u5408\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u307f\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("h2",o({},{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u3044\u65b9"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u3044\u65b9"),(0,r.kt)("p",null,"\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30b3\u30fc\u30c9 (\u30e1\u30bd\u30c3\u30c9\u3084\u95a2\u6570) \u3068\u30d5\u30a9\u30fc\u30e0\u306f\u30014D\u958b\u767a\u306b\u304a\u3044\u3066\u6a19\u6e96\u306e\u8981\u7d20\u3068\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30e1\u30bd\u30c3\u30c9\u3084\u30af\u30e9\u30b9\u3001\u95a2\u6570\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u308c\u3089\u306f\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u306e\u30e1\u30bd\u30c3\u30c9\u30da\u30fc\u30b8\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e1\u30bd\u30c3\u30c9")," \u30c6\u30fc\u30de\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(15319).Z,width:"352",height:"411"})),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Extensions/develop-components#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D%E5%89%8D%E7%A9%BA%E9%96%93%E3%81%AE%E5%AE%A3%E8%A8%80"}),"\u540d\u524d\u7a7a\u9593")," \u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u540d\u306e\u5f8c\u306b\u62ec\u5f27\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u540d\u524d\u7a7a\u9593\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u95a2\u6570\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Concepts/methods"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9")," \u307e\u305f\u306f ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Concepts/classes"}),"\u30af\u30e9\u30b9")," \u3092\u9078\u629e\u3057\u3001\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u305d\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u5f97\u3089\u308c\u307e\u3059 (",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/ja/Project/documentation"}),"\u3042\u308c\u3070"),")\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:n(56621).Z,width:"868",height:"569"})))}m.isMDXComponent=!0},15319:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/components-explorer-855ea8e2a6155a2d44c0b5540983924e.png"},56621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compDoc-a7c75dc713078bc430fe37a9e103b856.png"}}]);