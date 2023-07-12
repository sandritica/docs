"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"directory",title:"$directory"},i=void 0,s={unversionedId:"REST/directory",id:"version-18/REST/directory",title:"$directory",description:"The directory handles user access through REST requests.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/pt/18/REST/directory",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/pt/18/REST/catalog"},next:{title:"$info",permalink:"/docs/pt/18/REST/info"}},p={},c=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3}],u={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The directory handles user access through REST requests."),(0,n.kt)("h2",o({},{id:"directorylogin"}),"$directory/login"),(0,n.kt)("p",null,"Opens a REST session on your 4D application and logs in the user."),(0,n.kt)("h3",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"$directory/login")," to open a session in your 4D application through REST and login a user. You can also modify the default 4D session timeout."),(0,n.kt)("p",null,"All parameters must be passed in ",(0,n.kt)("strong",{parentName:"p"},"headers")," of a POST method:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Chave de cabe\xe7alho"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valor do cabe\xe7alho"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"username-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Usu\xe1rio - N\xe3o obrigat\xf3rio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"password-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Palavra-passe - N\xe3o obrigat\xf3ria")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"hashed-password-4D"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Hashed password - Not mandatory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"session-4D-length"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tempo de inatividade da sess\xe3o (minutos). N\xe3o pode ser inferior a 60 - N\xe3o obrigat\xf3rio")))),(0,n.kt)("h3",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("p",null,"Se o login for bem-sucedido, o resultado ser\xe1:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "result": true\n}\n')),(0,n.kt)("p",null,"Otherwise, the response will be:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n     "result": false\n}\n')))}d.isMDXComponent=!0}}]);