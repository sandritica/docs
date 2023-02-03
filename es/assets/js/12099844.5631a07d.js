"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78107],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>m});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return a?t.createElement(v,i(i({ref:r},p),{},{components:a})):t.createElement(v,i({ref:r},p))}));function m(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40177:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});a(67294);var t=a(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function n(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={id:"advanced-programming",title:"Programaci\xf3n avanzada con Javascript"},l=void 0,c={unversionedId:"ViewPro/advanced-programming",id:"version-19-R8/ViewPro/advanced-programming",title:"Programaci\xf3n avanzada con Javascript",description:"Un \xc1rea 4D View Pro es un objeto de formulario de \xc1rea Web que utiliza el motor de renderizado web integrado. Como tal, se comporta como cualquier otra \xe1rea web, y puede hacer ejecutar c\xf3digo Javascript llamando al comando 4D WA Evaluate Javascript.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/es/ViewPro/advanced-programming",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"advanced-programming",title:"Programaci\xf3n avanzada con Javascript"},sidebar:"docs",previous:{title:"Clases",permalink:"/docs/es/ViewPro/classes"},next:{title:"Componentes de desarrollo",permalink:"/docs/es/Extensions/develop-components"}},s={},p=[{value:"Ejemplo: ocultar la cinta",id:"ejemplo-ocultar-la-cinta",level:2},{value:"Llamar los m\xe9todos Javascript de SpreadJS",id:"llamar-los-m\xe9todos-javascript-de-spreadjs",level:2},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Repositorio 4D View Pro Tips",id:"repositorio-4d-view-pro-tips",level:2}],d={toc:p};function u(e){var{components:r}=e,a=n(e,["components"]);return(0,t.kt)("wrapper",o({},d,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Un \xc1rea 4D View Pro es un ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/webAreaOverview"}),"objeto de formulario de \xc1rea Web")," que utiliza el ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"motor de renderizado web integrado"),". Como tal, se comporta como cualquier otra \xe1rea web, y puede hacer ejecutar c\xf3digo Javascript llamando al comando 4D ",(0,t.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1029.html"}),(0,t.kt)("inlineCode",{parentName:"a"},"WA Evaluate Javascript")),"."),(0,t.kt)("p",null,"Dado que 4D View Pro es alimentado por la ",(0,t.kt)("a",o({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html"}),"soluci\xf3n de hoja de c\xe1lculo SpreadJS"),", tambi\xe9n puede llamar a los m\xe9todos Javascript de SpreadJS en las \xe1reas 4D View Pro."),(0,t.kt)("h2",o({},{id:"ejemplo-ocultar-la-cinta"}),"Ejemplo: ocultar la cinta"),(0,t.kt)("p",null,"Dado que 4D View Pro es un \xe1rea web, puede seleccionar un elemento de la p\xe1gina web y modificar su comportamiento utilizando Javascript. El siguiente ejemplo oculta la ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/ViewPro/configuring#ribbon"}),"cinta")," spreadJS:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"//M\xe9todo objeto del bot\xf3n\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n")),(0,t.kt)("h2",o({},{id:"llamar-los-m\xe9todos-javascript-de-spreadjs"}),"Llamar los m\xe9todos Javascript de SpreadJS"),(0,t.kt)("p",null,"Puede aprovechar la librer\xeda de m\xe9todos Javascript de SpreadJS y llamarlos directamente para controlar sus hojas de c\xe1lculo."),(0,t.kt)("p",null,"4D tiene una propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},"Utils.spread")," integrada que da acceso al documento de la hoja de c\xe1lculo (tambi\xe9n llamado libro de trabajo) dentro del \xe1rea 4D View Pro, haciendo m\xe1s sencillo llamar a los ",(0,t.kt)("a",o({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html"}),"m\xe9todos de Workbook")," SpreadJS."),(0,t.kt)("h4",o({},{id:"ejemplo"}),"Ejemplo"),(0,t.kt)("p",null,"El siguiente c\xf3digo deshace la \xfaltima acci\xf3n en la hoja de c\xe1lculo:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n')),(0,t.kt)("h2",o({},{id:"repositorio-4d-view-pro-tips"}),"Repositorio 4D View Pro Tips"),(0,t.kt)("p",null,(0,t.kt)("a",o({parentName:"p"},{href:"https://github.com/4d-depot/4D-View-Pro-Tips"}),"4D-View-Pro-Tips")," es un repositorio GitHub que contiene un proyecto lleno de funciones \xfatiles, que permiten gestionar im\xe1genes flotantes, ordenar columnas o l\xedneas, crear una cultura personalizada, \xa1y mucho m\xe1s! Si\xe9ntase libre de clonarlo y experimentar con el proyecto."))}u.isMDXComponent=!0}}]);