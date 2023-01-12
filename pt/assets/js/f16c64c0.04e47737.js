"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36562],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});t(67294);var r=t(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const a={id:"plug-ins",title:"Plug-ins"},l=void 0,s={unversionedId:"Concepts/plug-ins",id:"version-19-R7/Concepts/plug-ins",title:"Plug-ins",description:"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/pt/19-R7/Concepts/plug-ins",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Concepts/plug-ins.md",tags:[],version:"19-R7",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Componentes",permalink:"/docs/pt/19-R7/Concepts/components"},next:{title:"Identificadores",permalink:"/docs/pt/19-R7/Concepts/identifiers"}},p={},u=[{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Where to find plug-ins?",id:"where-to-find-plug-ins",level:2},{value:"Installing plug-ins",id:"installing-plug-ins",level:2},{value:"Using plug-ins",id:"using-plug-ins",level:2}],c={toc:u};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",i({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding ",(0,r.kt)("strong",{parentName:"p"},"plug-ins")," to your 4D development environment."),(0,r.kt)("h2",i({},{id:"what-is-a-plug-in-and-what-can-it-do"}),"What is a plug-in and what can it do?"),(0,r.kt)("p",null,"A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. It adds functionality to 4D and thus increases its capacity. A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes."),(0,r.kt)("h2",i({},{id:"where-to-find-plug-ins"}),"Where to find plug-ins?"),(0,r.kt)("p",null,"Multiple plug-ins have already been written by the 4D community. Published plug-ins ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/search?q=4d-plugin&type=Repositories"}),"can be found on GitHub"),". Additionnally, you can ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/pt/19-R7/Extensions/develop-plug-ins"}),"develop your own plug-ins"),"."),(0,r.kt)("h2",i({},{id:"installing-plug-ins"}),"Installing plug-ins"),(0,r.kt)("p",null,"You install plug-ins in the 4D environment by copying their files into the ",(0,r.kt)("strong",{parentName:"p"},"Plugins")," folder, at the ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/pt/19-R7/Project/architecture#plugins"}),"same level as the Project folder"),"."),(0,r.kt)("p",null,"Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. If a plug-in requires a specific license for use, it will be loaded but not available for use."),(0,r.kt)("h2",i({},{id:"using-plug-ins"}),"Using plug-ins"),(0,r.kt)("p",null,"Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the ",(0,r.kt)("strong",{parentName:"p"},"Plug-ins")," page of the Explorer."))}d.isMDXComponent=!0}}]);