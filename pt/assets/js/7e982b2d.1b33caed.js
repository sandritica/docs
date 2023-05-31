"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9519],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"catalog",title:"$catalog"},i=void 0,s={unversionedId:"REST/catalog",id:"version-19-R8/REST/catalog",title:"$catalog",description:"O cat\xe1logo descreve todos os dataclasses e atributos dispon\xedveis na datastore.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/REST/$catalog.md",sourceDirName:"REST",slug:"/REST/catalog",permalink:"/docs/pt/19-R8/REST/catalog",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"catalog",title:"$catalog"},sidebar:"docs",previous:{title:"Sobre peti\xe7\xf5es REST",permalink:"/docs/pt/19-R8/REST/REST_requests"},next:{title:"$directory",permalink:"/docs/pt/19-R8/REST/directory"}},p={},d=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Atributo(s)",id:"atributos",level:3},{value:"Chave prim\xe1ria",id:"chave-prim\xe1ria",level:3},{value:"Exemplo",id:"exemplo-2",level:3}],m={toc:d};function u(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"O cat\xe1logo descreve todos os dataclasses e atributos dispon\xedveis na datastore."),(0,n.kt)("h2",r({},{id:"sintaxe-dispon\xedvel"}),"Sintaxe dispon\xedvel"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Exemplo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#catalog"}),(0,n.kt)("strong",{parentName:"a"},"$catalog"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/$catalog")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Devolve uma lista dos valores de refer\xeancia do seu projecto juntamente com dois URIs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#catalogall"}),(0,n.kt)("strong",{parentName:"a"},"$catalog/$all"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/$catalog/$all")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Devolve informa\xe7\xe3o sobre todos os dataclasses do seu projecto e os seus atributos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#catalogdataclass"}),(0,n.kt)("strong",{parentName:"a"},"$catalog/{dataClass}"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/$catalog/Employee")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Retorna informa\xe7\xe3o sobre um dataclass e os seus atributos")))),(0,n.kt)("h2",r({},{id:"catalog"}),"$catalog"),(0,n.kt)("p",null,"Devolve uma lista dos dados do seu projecto juntamente com dois URIs: um para aceder \xe0 informa\xe7\xe3o sobre a sua estrutura e outro para recuperar os dados no dataclass"),(0,n.kt)("h3",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Quando chama ",(0,n.kt)("inlineCode",{parentName:"p"},"$catalog"),", \xe9 devolvida uma lista dos dataclasses juntamente com dois URIs para cada dataclass no datastore do seu projecto."),(0,n.kt)("p",null,"Nesta lista apenas s\xe3o mostrados os dataclasses expostos para a datastore do seu projecto. Para mais informa\xe7\xf5es, consulte por favor ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R8/REST/configuration#exposing-tables-and-fields"}),(0,n.kt)("strong",{parentName:"a"},"sec\xe7\xe3o de tabelas e campos de exposi\xe7\xe3o"))," ."),(0,n.kt)("p",null,"Aqui est\xe1 uma descri\xe7\xe3o das propriedades devolvidas para cada dataclass na datastore do seu projecto:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da dataclass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"uri"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Um URI que lhe permite obter informa\xe7\xf5es sobre o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dataURI"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Uma URI que lhe permite visualizar os dados no dataclass.")))),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/$catalog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n')),(0,n.kt)("h2",r({},{id:"catalogall"}),"$catalog/$all"),(0,n.kt)("p",null,"Devolve informa\xe7\xe3o sobre todos os dataclasses do seu projecto e os seus atributos"),(0,n.kt)("h3",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Chamando ",(0,n.kt)("inlineCode",{parentName:"p"},"$catalog/$all")," pode reciber informa\xe7\xe3o detalhada sobre os atributos de cada uma das classes de dados do modelo ativo de projeto."),(0,n.kt)("p",null,"Para saber mais sobre o que se devolve para cada classe de dados e seus atributos, utilize ",(0,n.kt)("a",r({parentName:"p"},{href:"#catalogdataClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),"."),(0,n.kt)("h3",r({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/$catalog/$all")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n\n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path":\n')),(0,n.kt)("h2",r({},{id:"catalogdataclass"}),"$catalog/{dataClass}"),(0,n.kt)("p",null,"Retorna informa\xe7\xe3o sobre um dataclass e os seus atributos"),(0,n.kt)("h3",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Chamando ",(0,n.kt)("inlineCode",{parentName:"p"},"$catalog/{dataClass}")," para um dataclass espec\xedfico devolver\xe1 a seguinte informa\xe7\xe3o sobre o dataclass e os atributos que este cont\xe9m. Se quiser recuperar essa informa\xe7\xe3o para todas as classes de dados do armaz\xe9m de dados de seu projeto, use ",(0,n.kt)("a",r({parentName:"p"},{href:"#catalogall"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/$all")),"."),(0,n.kt)("p",null,"A informa\xe7\xe3o que recupera diz respeito ao seguinte:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dataclass"),(0,n.kt)("li",{parentName:"ul"},"Atributo(s)"),(0,n.kt)("li",{parentName:"ul"},"M\xe9todo(s), caso exista(m)"),(0,n.kt)("li",{parentName:"ul"},"Chave prim\xe1ria")),(0,n.kt)("h3",r({},{id:"dataclass"}),"DataClass"),(0,n.kt)("p",null,"As seguintes propriedades s\xe3o devolvidas para um dataclass exposto:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"collectionName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome de uma selec\xe7\xe3o de entidade no dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tableNumber"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero da tabela na base de dados 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"scope"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Alcance da classe de dados (lembre que s\xf3 s\xe3o mostradas as classes de dados cujo ",(0,n.kt)("strong",{parentName:"td"},"Alcance")," for p\xfablico)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dataURI"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Um URI para os dados no dataclass")))),(0,n.kt)("h3",r({},{id:"atributos"}),"Atributo(s)"),(0,n.kt)("p",null,"Aqui est\xe3o as propriedades para cada atributo exposto que s\xe3o devolvidas:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"o nome de atributo.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"kind"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tipo de atributo (armazenamento ou relatedEntity).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fieldPos"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Posi\xe7\xe3o do campo na tabela da base de dados).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"scope"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\xc2mbito do atributo (apenas aparecer\xe3o os atributos cujo \xe2mbito seja P\xfablico).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"indexed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Se algum ",(0,n.kt)("strong",{parentName:"td"},"Index Kind")," foi seleccionado, esta propriedade voltar\xe1 a ser verdadeira. Caso contr\xe1rio, esta propriedade n\xe3o aparece.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tipo de atributo (booleano, blob, byte, data, dura\xe7\xe3o, imagem, long, long64, n\xfamero, string, uuid ou palavra) ou a classe de dados para um atributo de rela\xe7\xe3o N->1.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"identifying"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Esta propriedade retorna True se o atributo for a chave prim\xe1ria. Caso contr\xe1rio, esta propriedade n\xe3o aparece.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da rela\xe7\xe3o de um atributo relatedEntity ou relateEntities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"foreignKey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"foreignKey")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"inverseName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"inverseName")))),(0,n.kt)("h3",r({},{id:"chave-prim\xe1ria"}),"Chave prim\xe1ria"),(0,n.kt)("p",null,"O objeto chave devolve o nome do atributo ",(0,n.kt)("strong",{parentName:"p"},"name")," definido como ",(0,n.kt)("strong",{parentName:"p"},"chave prim\xe1ria")," para a classe de dados."),(0,n.kt)("h3",r({},{id:"exemplo-2"}),"Exemplo"),(0,n.kt)("p",null,"Pode recuperar a informa\xe7\xe3o relativa a uma classe de dados espec\xedfica."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/$catalog/Employee")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name:\n')))}u.isMDXComponent=!0}}]);