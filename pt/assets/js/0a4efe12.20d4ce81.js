"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,y=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"attributes",title:"$attributes"},l=void 0,p={unversionedId:"REST/attributes",id:"version-19/REST/attributes",title:"$attributes",description:"Allows selecting the related attribute(s) to get from the dataclass (e.g., Company(1)?$attributes=employees.lastname or Employee?$attributes=employer.name).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/pt/19/REST/attributes",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/pt/19/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/pt/19/REST/binary"}},s={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo com entidades relacionadas",id:"exemplo-com-entidades-relacionadas",level:2},{value:"Exemplo com entidade relacionada",id:"exemplo-com-entidade-relacionada",level:2}],m={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Allows selecting the related attribute(s) to get from the dataclass (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Company(1)?$attributes=employees.lastname")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Employee?$attributes=employer.name"),")."),(0,a.kt)("h2",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,a.kt)("p",null,"When you have relation attributes in a dataclass, use ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," to define the path of attributes whose values you want to get for the related entity or entities."),(0,a.kt)("p",null,"You can apply ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," to an entity (",(0,a.kt)("em",{parentName:"p"},"e.g."),", People(1)) or an entity selection (",(0,a.kt)("em",{parentName:"p"},"e.g."),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes"),' is not specified in a query, or if the "*" value is passed, all available attributes are extracted. ',(0,a.kt)("strong",{parentName:"p"},"Related entity")," attributes are extracted with the simple form: an object with property ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," (primary key) and ",(0,a.kt)("inlineCode",{parentName:"p"},"URI"),". ",(0,a.kt)("strong",{parentName:"p"},"Related entities")," attributes are not extracted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," is specified for ",(0,a.kt)("strong",{parentName:"p"},"related entity")," attributes:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity"),": the related entity is returned with simple form (deferred __KEY property (primary key)) and ",(0,a.kt)("inlineCode",{parentName:"li"},"URI"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.*"),": all the attributes of the related entity are returned"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."),": only those attributes of the related entity are returned.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"$attributes")," is specified for ",(0,a.kt)("strong",{parentName:"li"},"related entities")," attributes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.*"),": all the properties of all the related entities are returned"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."),": only those attributes of the related entities are returned.")))),(0,a.kt)("h2",r({},{id:"exemplo-com-entidades-relacionadas"}),"Exemplo com entidades relacionadas"),(0,a.kt)("p",null,'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Company (que tem um atributo de rela\xe7\xe3o "empregados"):'),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n')),(0,a.kt)("p",null,"If you want to get all attributes from employees:"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.*")),(0,a.kt)("p",null,"If you want to get last name and job name attributes from employees:"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname")),(0,a.kt)("h2",r({},{id:"exemplo-com-entidade-relacionada"}),"Exemplo com entidade relacionada"),(0,a.kt)("p",null,'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Employee (que tem v\xe1rios atributos relacionais, incluindo "employer"):'),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.name")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n')),(0,a.kt)("p",null,"Se quiser obter todos os atributos do empregador:"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.*")),(0,a.kt)("p",null,"If you want to get the last names of all employees of the employer:"),(0,a.kt)("p",null," ",(0,a.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.employees.lastname")))}d.isMDXComponent=!0}}]);