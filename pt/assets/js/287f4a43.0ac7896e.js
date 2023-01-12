"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58643],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=i.createContext({}),d=function(t){var e=i.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return i.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),h=r,c=s["".concat(m,".").concat(h)]||s[h]||u[h]||a;return n?i.createElement(c,l(l({ref:e},p),{},{components:n})):i.createElement(c,l({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86891:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>p});n(67294);var i=n(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const l={id:"windowSize",title:"Tamanho da janela"},o=void 0,m={unversionedId:"FormEditor/windowSize",id:"version-19-R8/FormEditor/windowSize",title:"Tamanho da janela",description:"Fixed Height",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/FormEditor/properties_WindowSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/windowSize",permalink:"/docs/pt/FormEditor/windowSize",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/FormEditor/properties_WindowSize.md",tags:[],version:"19-R8",frontMatter:{id:"windowSize",title:"Tamanho da janela"},sidebar:"docs",previous:{title:"Imprimir",permalink:"/docs/pt/FormEditor/print"},next:{title:"Sobre os objetos formul\xe1rios 4D",permalink:"/docs/pt/FormObjects/formObjectsOverview"}},d={},p=[{value:"Fixed Height",id:"fixed-height",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Fixed Width",id:"fixed-width",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Maximum Height, Minimum Height",id:"maximum-height-minimum-height",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:5},{value:"Maximum Width, Minimum Width",id:"maximum-width-minimum-width",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4}],u={toc:p};function s(t){var{components:e}=t,n=a(t,["components"]);return(0,i.kt)("wrapper",r({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",r({},{id:"fixed-height"}),"Fixed Height"),(0,i.kt)("p",null,"If you select this option, the window height will be locked and it will not be possible for the user to resize it."),(0,i.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,i.kt)("a",r({parentName:"p"},{href:"#maximum-height-minimum-height"}),"Minimum Height and Maximum Height")," properties can be used to determine the resizing limits."),(0,i.kt)("h4",r({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Nome"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de dados"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:null}),"windowSizingY"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,i.kt)("hr",null),(0,i.kt)("h2",r({},{id:"fixed-width"}),"Fixed Width"),(0,i.kt)("p",null,"If you select this option, the window width will be locked and it will not be possible for the user to resize it."),(0,i.kt)("p",null,"If this option is not selected, the width of the form window can be modified. In this case, the ",(0,i.kt)("a",r({parentName:"p"},{href:"#maximum-width-minimum-width"}),"Minimum Width and Maximum Width")," properties can be used to determine the resizing limits."),(0,i.kt)("h4",r({},{id:"gram\xe1tica-json-1"}),"Gram\xe1tica JSON"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Nome"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de dados"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:null}),"windowSizingX"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),'"fixed", "variable"')))),(0,i.kt)("hr",null),(0,i.kt)("h2",r({},{id:"maximum-height-minimum-height"}),"Maximum Height, Minimum Height"),(0,i.kt)("p",null,"Maximum and minimum height (in pixels) of a resizeable form window if the ",(0,i.kt)("a",r({parentName:"p"},{href:"#fixed-height"}),"Fixed Height")," option is not set."),(0,i.kt)("h5",r({},{id:"gram\xe1tica-json-2"}),"Gram\xe1tica JSON"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Nome"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de dados"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:null}),"windowMinHeight"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"valor inteiro")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:null}),"windowMaxHeight"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"valor inteiro")))),(0,i.kt)("h2",r({},{id:"maximum-width-minimum-width"}),"Maximum Width, Minimum Width"),(0,i.kt)("p",null,"Maximum and minimum width (in pixels) of a resizeable form window if the ",(0,i.kt)("a",r({parentName:"p"},{href:"#fixed-width"}),"Fixed Width")," option is not set."),(0,i.kt)("h4",r({},{id:"gram\xe1tica-json-3"}),"Gram\xe1tica JSON"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Nome"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de dados"),(0,i.kt)("th",r({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:null}),"windowMinWidth"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"valor inteiro")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",r({parentName:"tr"},{align:null}),"windowMaxWidth"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,i.kt)("td",r({parentName:"tr"},{align:null}),"valor inteiro")))))}s.isMDXComponent=!0}}]);