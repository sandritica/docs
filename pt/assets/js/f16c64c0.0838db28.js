"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"plug-ins",title:"Plug-ins"},l=void 0,s={unversionedId:"Concepts/plug-ins",id:"version-19-R7/Concepts/plug-ins",title:"Plug-ins",description:"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/pt/19-R7/Concepts/plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Componentes",permalink:"/docs/pt/19-R7/Concepts/components"},next:{title:"Identificadores",permalink:"/docs/pt/19-R7/Concepts/identifiers"}},p={},u=[{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Where to find plug-ins?",id:"where-to-find-plug-ins",level:2},{value:"Instala\xe7\xe3o de plug-ins",id:"instala\xe7\xe3o-de-plug-ins",level:2},{value:"Utiliza\xe7\xe3o de plug-ins",id:"utiliza\xe7\xe3o-de-plug-ins",level:2}],c={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding ",(0,r.kt)("strong",{parentName:"p"},"plug-ins")," to your 4D development environment."),(0,r.kt)("h2",i({},{id:"what-is-a-plug-in-and-what-can-it-do"}),"What is a plug-in and what can it do?"),(0,r.kt)("p",null,"A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. It adds functionality to 4D and thus increases its capacity. A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes."),(0,r.kt)("h2",i({},{id:"where-to-find-plug-ins"}),"Where to find plug-ins?"),(0,r.kt)("p",null,"Multiple plug-ins have already been written by the 4D community. Published plug-ins ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/search?q=4d-plugin&type=Repositories"}),"can be found on GitHub"),". Additionnally, you can ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/pt/19-R7/Extensions/develop-plug-ins"}),"develop your own plug-ins"),"."),(0,r.kt)("h2",i({},{id:"instala\xe7\xe3o-de-plug-ins"}),"Instala\xe7\xe3o de plug-ins"),(0,r.kt)("p",null,"You install plug-ins in the 4D environment by copying their files into the ",(0,r.kt)("strong",{parentName:"p"},"Plugins")," folder, at the ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/pt/19-R7/Project/architecture#plugins"}),"same level as the Project folder"),"."),(0,r.kt)("p",null,"Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. If a plug-in requires a specific license for use, it will be loaded but not available for use."),(0,r.kt)("h2",i({},{id:"utiliza\xe7\xe3o-de-plug-ins"}),"Utiliza\xe7\xe3o de plug-ins"),(0,r.kt)("p",null,"Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the ",(0,r.kt)("strong",{parentName:"p"},"Plug-ins")," page of the Explorer."))}d.isMDXComponent=!0}}]);