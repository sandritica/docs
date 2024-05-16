"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27978],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(a),u=n,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},627938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>p});a(667294);var r=a(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"WebFormItemClass",title:"WebFormItem"},s=void 0,m={unversionedId:"API/WebFormItemClass",id:"version-20-R5/API/WebFormItemClass",title:"WebFormItem",description:"4D.WebFormItem objects are properties of the 4D.WebForm object returned by the Web Form command.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/API/WebFormItemClass.md",sourceDirName:"API",slug:"/API/WebFormItemClass",permalink:"/docs/pt/API/WebFormItemClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormItemClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebFormItemClass",title:"WebFormItem"},sidebar:"docs",previous:{title:"WebForm",permalink:"/docs/pt/API/WebFormClass"},next:{title:"WebServer",permalink:"/docs/pt/API/WebServerClass"}},i={},p=[{value:"Objeto WebFormItem",id:"objeto-webformitem",level:3},{value:".hide()",id:"hide",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".show()",id:"show",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".addCSSClass()",id:"addcssclass",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".removeCSSClass()",id:"removecssclass",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4}],d={toc:p};function c(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebFormItem")," objects are properties of the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/WebFormItemClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"4D.WebForm"))," object returned by the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/WebFormClass#web-form"}),(0,r.kt)("inlineCode",{parentName:"a"},"Web Form"))," command."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WebFormItem")," class is detailed in the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass"}),"Qodly documentation"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3ria"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Release"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"20 R2"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Adicionado"))))),(0,r.kt)("h3",n({},{id:"objeto-webformitem"}),"Objeto WebFormItem"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,"| ",(0,r.kt)("a",n({parentName:"p"},{href:"#addclass"}),(0,r.kt)("strong",{parentName:"a"},".addCSSClass"),"(",(0,r.kt)("em",{parentName:"a"},"className")," : string)"),(0,r.kt)("br",null),"adds the class specified in ",(0,r.kt)("em",{parentName:"p"},"className")," to the component          |\n| ",(0,r.kt)("a",n({parentName:"p"},{href:"#hide"}),(0,r.kt)("strong",{parentName:"a"},".hide"),"()"),(0,r.kt)("br",null),"hides the component                            |\n| ",(0,r.kt)("a",n({parentName:"p"},{href:"#removeclass"}),(0,r.kt)("strong",{parentName:"a"},".removeCSSClass"),"(",(0,r.kt)("em",{parentName:"a"},"className"),": string)"),(0,r.kt)("br",null),"removes the class specified in ",(0,r.kt)("em",{parentName:"p"},"className")," from the component |\n| ",(0,r.kt)("a",n({parentName:"p"},{href:"#show"}),(0,r.kt)("strong",{parentName:"a"},".show"),"()"),(0,r.kt)("br",null),"makes the component visible                            |"),(0,r.kt)("h3",n({},{id:"hide"}),".hide()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".hide"),"()"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xe3o exige nenhum par\xe2metro")))),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".hide()")," function hides the component."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#hide"}),(0,r.kt)("inlineCode",{parentName:"a"},".hide()")," description in the Qodly documentation"),"."),(0,r.kt)("h3",n({},{id:"show"}),".show()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".show"),"()"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xe3o exige nenhum par\xe2metro")))),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".show()")," function makes the component visible."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#show"}),(0,r.kt)("inlineCode",{parentName:"a"},".show()")," description in the Qodly documentation"),"."),(0,r.kt)("h3",n({},{id:"addcssclass"}),".addCSSClass()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".addCSSClass"),"(",(0,r.kt)("em",{parentName:"p"},"className")," : string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"className"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nome da classe CSS a ser adicionada ao componente")))),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".addCSSClass")," function adds the class specified in ",(0,r.kt)("em",{parentName:"p"},"className")," to the component."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass"}),(0,r.kt)("inlineCode",{parentName:"a"},".addCSSClass")," description in the Qodly documentation"),"."),(0,r.kt)("h3",n({},{id:"removecssclass"}),".removeCSSClass()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".removeCSSClass"),"(",(0,r.kt)("em",{parentName:"p"},"className"),": string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"className"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nome da classe CSS a ser removida do componente")))),(0,r.kt)("h4",n({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".removeCSSClass()")," function removes the class specified in ",(0,r.kt)("em",{parentName:"p"},"className")," from the component."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass"}),(0,r.kt)("inlineCode",{parentName:"a"},".removeCSSClass()")," description in the Qodly documentation"),"."))}c.isMDXComponent=!0}}]);