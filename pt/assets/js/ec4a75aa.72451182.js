"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=o,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||n;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});r(67294);var a=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"filter",title:"$filter"},i=void 0,p={unversionedId:"REST/filter",id:"version-19/REST/filter",title:"$filter",description:"Allows to query the data in a dataclass or method (e.g., $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/pt/19/REST/filter",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/pt/19/REST/expand"},next:{title:"$imageformat",permalink:"/docs/pt/19/REST/imageformat"}},s={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Utilizar um filtro simples",id:"utilizar-um-filtro-simples",level:3},{value:"Utilizar um filtro complexo",id:"utilizar-um-filtro-complexo",level:3},{value:"Utilizar a propriedade params",id:"utilizar-a-propriedade-params",level:3},{value:"Atributo",id:"atributo",level:2},{value:"Comparador",id:"comparador",level:2},{value:"Exemplos",id:"exemplos",level:2}],u={toc:m};function d(e){var{components:t}=e,r=n(e,["components"]);return(0,a.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Allows to query the data in a dataclass or method ",(0,a.kt)("em",{parentName:"p"},"(e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter=\"firstName!='' AND salary>30000\""),")"),(0,a.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,a.kt)("p",null,"Este par\xe2metro permite-lhe definir o filtro para a sua dataclass ou m\xe9todo."),(0,a.kt)("h3",o({},{id:"utilizar-um-filtro-simples"}),"Utilizar um filtro simples"),(0,a.kt)("p",null,"Um filtro \xe9 composto pelos seguintes elementos:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value}")),(0,a.kt)("p",null,"Por exemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john"')," onde ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," \xe9 o ",(0,a.kt)("strong",{parentName:"p"},"atributo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," \xe9 o comparador *",(0,a.kt)("strong",{parentName:"p"},"* e ",(0,a.kt)("inlineCode",{parentName:"strong"},"john")," \xe9 o "),"valor **."),(0,a.kt)("h3",o({},{id:"utilizar-um-filtro-complexo"}),"Utilizar um filtro complexo"),(0,a.kt)("p",null,"Um filtro mais complexo \xe9 composto pelos seguintes elementos, que juntam duas consultas:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}")),(0,a.kt)("p",null,"Por exemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john AND salary>20000"')," onde ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"salary")," s\xe3o atributos da classe de dados Employee."),(0,a.kt)("h3",o({},{id:"utilizar-a-propriedade-params"}),"Utilizar a propriedade params"),(0,a.kt)("p",null,"Tamb\xe9m pode usar a propriedade params de 4D."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='",'["{value1}","{value2}"]',"\"'")),(0,a.kt)("p",null,"Por exemplo: ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'')," onde firstName e salary s\xe3o os atributos da classe de dados Employee."),(0,a.kt)("p",null,"For more information regarding how to query data in 4D, refer to the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html"}),"dataClass.query()")," documentation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When inserting quotes (') or double quotes (\"), you must escape them using using their character code:"),(0,a.kt)("li",null,"Aspas ('): \\u0027"),(0,a.kt)("li",null,"Quotes ('): \\u0027 Double quotes (\"): \\u0022"),(0,a.kt)("p",{parentName:"blockquote"},"Por exemplo, pode escrever o seguinte ao passar um valor com uma aspa ao utilizar a propriedade ",(0,a.kt)("em",{parentName:"p"},"params"),":",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'')),(0,a.kt)("p",{parentName:"blockquote"},"If you pass the value directly, you can write the following: ",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'))),(0,a.kt)("h2",o({},{id:"atributo"}),"Atributo"),(0,a.kt)("p",null,"If the attribute is in the same dataclass, you can just pass it directly (",(0,a.kt)("em",{parentName:"p"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName"),"). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (",(0,a.kt)("em",{parentName:"p"},"e.g."),", employer.name). The attribute name is case-sensitive (",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," is not equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"FirstName"),")."),(0,a.kt)("p",null,'Tamb\xe9m \xe9 poss\xedvel consultar atributos do tipo Object utilizando a nota\xe7\xe3o de ponto. For example, if you have an attribute whose name is "objAttribute" with the following structure:'),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n')),(0,a.kt)("p",null,"\xc9 poss\xedvel pesquisar no objeto escrevendo o seguinte:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"')),(0,a.kt)("h2",o({},{id:"comparador"}),"Comparador"),(0,a.kt)("p",null,"O comparador deve ser um dos seguintes valores:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Comparador"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"="),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\xe9 igual a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"diferente de")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"maior que")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),">="),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"maior ou igual a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"menor que")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"menor que ou igual a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"begin"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"come\xe7a com")))),(0,a.kt)("h2",o({},{id:"exemplos"}),"Exemplos"),(0,a.kt)("p",null,'No exemplo seguinte, procuramos todos os empregados cujo apelido come\xe7a por "j":'),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),' GET  /rest/Employee?$filter="lastName begin j"\n')),(0,a.kt)("p",null,"Nesse exemplo pesquisamos na classe de dados Empregado todos os empregados cujo sal\xe1rio seja superior a  20.000 e que n\xe3o trabalhem para uma empresa chamada Acme:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n')),(0,a.kt)("p",null,"Neste exemplo, buscamos na classe de dados Person todas as pessoas cuja propriedade n\xfamero no atributo anotherobj de tipo Object for maior que 50:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n')))}d.isMDXComponent=!0}}]);