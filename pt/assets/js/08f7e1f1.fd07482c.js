"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64811],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92899:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(67294);var t=r(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"plug-ins",title:"Plug-ins"},s=void 0,u={unversionedId:"Concepts/plug-ins",id:"version-20-R2/Concepts/plug-ins",title:"Plug-ins",description:"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando plug-ins ao seu ambiente de desenvolvimento 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/pt/Concepts/plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Componentes",permalink:"/docs/pt/Concepts/components"},next:{title:"Identificadores",permalink:"/docs/pt/Concepts/identifiers"}},l={},p=[{value:"Por que a necessidade de um plug-in?",id:"por-que-a-necessidade-de-um-plug-in",level:2},{value:"Como criar um plug-in?",id:"como-criar-um-plug-in",level:2},{value:"Instala\xe7\xe3o de plug-ins",id:"instala\xe7\xe3o-de-plug-ins",level:2},{value:"Como instalar um plug-in?",id:"como-instalar-um-plug-in",level:2}],c={toc:p};function d(e){var{components:n}=e,r=a(e,["components"]);return(0,t.kt)("wrapper",o({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Ao desenvolver uma aplica\xe7\xe3o 4D, ir\xe1 descobrir muitas capacidades que n\xe3o notou quando come\xe7ou. Pode mesmo aumentar a vers\xe3o padr\xe3o de 4D adicionando ",(0,t.kt)("strong",{parentName:"p"},"plug-ins")," ao seu ambiente de desenvolvimento 4D."),(0,t.kt)("h2",o({},{id:"por-que-a-necessidade-de-um-plug-in"}),"Por que a necessidade de um plug-in?"),(0,t.kt)("p",null,"A plug-in is a piece of code that 4D launches at start up. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade. Um plug-in cont\xe9m normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma \xc1rea Externa e gerir um processo externo."),(0,t.kt)("h2",o({},{id:"como-criar-um-plug-in"}),"Como criar um plug-in?"),(0,t.kt)("p",null,"V\xe1rios plug-ins j\xe1 foram escritos pela comunidade 4D. O ",(0,t.kt)("a",o({parentName:"p"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),(0,t.kt)("strong",{parentName:"a"},"4D Plugin Wizard"))," \xe9 uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o c\xf3digo 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu pr\xf3prio c\xf3digo. Al\xe9m disso, pode ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/Extensions/develop-plug-ins"}),"desenvolver os seus pr\xf3prios plug-ins"),"."),(0,t.kt)("h2",o({},{id:"instala\xe7\xe3o-de-plug-ins"}),"Instala\xe7\xe3o de plug-ins"),(0,t.kt)("p",null,"A sua arquitetura interna espec\xedfica permite ao Servidor 4D carregar a vers\xe3o apropriada de acordo com a plataforma onde a m\xe1quina cliente ser\xe1 executada. To install a plug-in in your environment, you just need to put the \u201cPluginName.bundle\u201d folder or package concerned into the desired ",(0,t.kt)("strong",{parentName:"p"},"Plugins")," folder."),(0,t.kt)("p",null,"Os plug-ins s\xe3o carregados por 4D quando a aplica\xe7\xe3o for lan\xe7ada, pelo que ter\xe1 de abandonar a sua aplica\xe7\xe3o 4D antes de os instalar. Se qualquer plug-in necessitar de uma licen\xe7a espec\xedfica para utiliza\xe7\xe3o, ser\xe1 carregado mas n\xe3o estar\xe1 dispon\xedvel para utiliza\xe7\xe3o."),(0,t.kt)("h2",o({},{id:"como-instalar-um-plug-in"}),"Como instalar um plug-in?"),(0,t.kt)("p",null,"Os comandos de plug-ins podem ser utilizados como comandos 4D normais no seu desenvolvimento 4D. Os comandos de plug-in aparecem na p\xe1gina ",(0,t.kt)("strong",{parentName:"p"},"Plug-ins")," do Explorer."))}d.isMDXComponent=!0}}]);