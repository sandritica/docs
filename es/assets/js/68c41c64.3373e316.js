"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50767],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(f,s(s({ref:a},d),{},{components:t})):n.createElement(f,s({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},38265:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"overview",title:"\xbfQu\xe9 es ORDA?"},i=void 0,l={unversionedId:"ORDA/overview",id:"version-19-R7/ORDA/overview",title:"\xbfQu\xe9 es ORDA?",description:"ORDA significa Object Relational Data Access. Se trata de una tecnolog\xeda avanzada que permite acceder tanto al modelo como a los datos de una base a trav\xe9s de objetos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/ORDA/overview.md",sourceDirName:"ORDA",slug:"/ORDA/overview",permalink:"/docs/es/19-R7/ORDA/overview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/ORDA/overview.md",tags:[],version:"19-R7",frontMatter:{id:"overview",title:"\xbfQu\xe9 es ORDA?"},sidebar:"docs",previous:{title:"Rutas de acceso",permalink:"/docs/es/19-R7/Concepts/paths"},next:{title:"Objeto del modelo de datos",permalink:"/docs/es/19-R7/ORDA/dsmapping"}},c={},d=[{value:"\xbfPor qu\xe9 utilizar ORDA?",id:"por-qu\xe9-utilizar-orda",level:2},{value:"\xbfC\xf3mo utilizar ORDA?",id:"c\xf3mo-utilizar-orda",level:2}],u={toc:d};function p(e){var{components:a}=e,t=r(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"ORDA significa ",(0,n.kt)("strong",{parentName:"p"},"Object Relational Data Access"),". Se trata de una tecnolog\xeda avanzada que permite acceder tanto al modelo como a los datos de una base a trav\xe9s de objetos."),(0,n.kt)("p",null,"Las relaciones se incluyen de forma transparente en el concepto, en combinaci\xf3n con el principio del ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/glossary#lazy-loading"}),"lazy loading"),", para eliminar todas las molestias t\xedpicas de la selecci\xf3n o la transferencia de datos del desarrollador."),(0,n.kt)("p",null,"Con ORDA, se accede a los datos a trav\xe9s de una capa de abstracci\xf3n, el ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/dsmapping#datastore"}),"datastore"),". Un datastore es un objeto que ofrece una interfaz al modelo de base de datos y a los datos a trav\xe9s de objetos y de clases. Por ejemplo, una tabla corresponde a un objeto ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/dsmapping#dataclass"}),"dataclass"),", un campo es un ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/dsmapping##attribute"}),"atributo ")," de una dataclass, y se accede a los registros a trav\xe9s de ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/dsmapping#entity"}),"entidades ")," y ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/dsmapping#entity-selection"}),"selecciones de entidades"),"."),(0,n.kt)("h2",o({},{id:"por-qu\xe9-utilizar-orda"}),"\xbfPor qu\xe9 utilizar ORDA?"),(0,n.kt)("p",null,"En lugar de representar la informaci\xf3n como tablas, registros y campos, ORDA utiliza un enfoque alternativo que asigna con mayor precisi\xf3n los datos a conceptos concretos."),(0,n.kt)("p",null,"Imagine la posibilidad de desnormalizar una estructura relacional sin que afectar la eficacia. Imagine que describe todo lo relativo a los objetos de su aplicaci\xf3n de tal forma que el uso de los datos se convierte en algo sencillo y directo y elimina la necesidad de comprender por completo la estructura relacional."),(0,n.kt)("p",null,"En el modelo de datos ORDA, una \xfanica clase de datos puede incorporar todos los elementos que componen una tabla de base de datos relacional tradicional, pero tambi\xe9n puede incluir valores de entidades padres relacionadas y las referencias directas a las entidades y a las selecciones de entidades relacionadas."),(0,n.kt)("p",null,'Una petici\xf3n devuelve una lista de entidades denominada selecci\xf3n de entidades, que cumple la funci\xf3n de un conjunto de l\xedneas de una petici\xf3n SQL. La diferencia es que cada entidad "sabe" cu\xe1l es su lugar en el modelo de datos y "comprende" su relaci\xf3n con las dem\xe1s entidades. Esto significa que un desarrollador no necesita explicar en una petici\xf3n c\xf3mo relacionar las distintas piezas de informaci\xf3n, ni en una actualizaci\xf3n c\xf3mo volver a escribir los valores modificados en la estructura relacional.'),(0,n.kt)("p",null,"Adem\xe1s, los objetos ORDA, como las selecciones de entidades o las entidades, pueden vincularse f\xe1cilmente a los objetos de interfaz de usuario, como los list box o las variables. Combinadas con las funcionalidades poderosas tales como los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"This")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"Form"),", permiten construir interfaces modernas y modulares basadas en objetos y colecciones."),(0,n.kt)("h2",o({},{id:"c\xf3mo-utilizar-orda"}),"\xbfC\xf3mo utilizar ORDA?"),(0,n.kt)("p",null,"Fundamentalmente, ORDA gestiona objetos. En ORDA, todos los conceptos principales, incluido el propio datastore, est\xe1n disponibles a trav\xe9s de objetos. In 4D, the datastore is automatically ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/dsmapping"}),"mapped upon the 4D structure"),"."),(0,n.kt)("p",null,"ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods."),(0,n.kt)("p",null,"ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R7/ORDA/ordaClasses"}),"classes where you can add custom functions"),"."))}p.isMDXComponent=!0}}]);