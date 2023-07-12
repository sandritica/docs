"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=s,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});n(67294);var a=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const l={id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},i=void 0,o={unversionedId:"REST/classFunctions",id:"version-20/REST/classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA",description:"You can call data model class functions defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/pt/20/REST/classFunctions",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},sidebar:"docs",previous:{title:"Manipula\xe7\xe3o de dados",permalink:"/docs/pt/20/REST/manData"},next:{title:"Sobre peti\xe7\xf5es REST",permalink:"/docs/pt/20/REST/REST_requests"}},d={},u=[{value:"Chamadas fun\xe7\xf5es",id:"chamadas-fun\xe7\xf5es",level:2},{value:"Par\xe2metros",id:"par\xe2metros",level:2},{value:"Par\xe2metro de valor escalar",id:"par\xe2metro-de-valor-escalar",level:3},{value:"Par\xe2metro da entidade",id:"par\xe2metro-da-entidade",level:3},{value:"Related entity parameter",id:"related-entity-parameter",level:4},{value:"Entity selection parameter",id:"entity-selection-parameter",level:3},{value:"Request examples",id:"request-examples",level:2},{value:"Using a datastore class function",id:"using-a-datastore-class-function",level:3},{value:"Resultados",id:"resultados",level:4},{value:"Using a dataclass class function",id:"using-a-dataclass-class-function",level:3},{value:"Resultados",id:"resultados-1",level:4},{value:"Using an entity class function",id:"using-an-entity-class-function",level:3},{value:"Resultados",id:"resultados-2",level:4},{value:"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade",id:"usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade",level:3},{value:"Resultados",id:"resultados-3",level:4},{value:"Using an entitySelection class function and an entitySet",id:"using-an-entityselection-class-function-and-an-entityset",level:3},{value:"Resultados",id:"resultados-4",level:4},{value:"Using an entitySelection class function and an orderBy",id:"using-an-entityselection-class-function-and-an-orderby",level:3},{value:"Resultados",id:"resultados-5",level:4},{value:"Utilizar uma entidade a ser criada no servidor",id:"utilizar-uma-entidade-a-ser-criada-no-servidor",level:3},{value:"Resultados",id:"resultados-6",level:4},{value:"Utilizar uma entidade a atualizar no servidor",id:"utilizar-uma-entidade-a-atualizar-no-servidor",level:3},{value:"Resultados",id:"resultados-7",level:4},{value:"Cria\xe7\xe3o de uma entidade com uma entidade relacionada",id:"cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"resultados-8",level:4},{value:"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada",id:"atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"resultados-9",level:4},{value:"Receber uma sele\xe7\xe3o de entidade como par\xe2metro",id:"receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro",level:3},{value:"Resultados",id:"resultados-10",level:4},{value:"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente",id:"utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente",level:3}],p={toc:u};function c(e){var{components:t}=e,l=r(e,["components"]);return(0,a.kt)("wrapper",s({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can call ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/ORDA/ordaClasses"}),"data model class functions")," defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application."),(0,a.kt)("p",null,"Functions are simply called in POST requests on the appropriate ORDA interface, without (). For example, if you have defined a ",(0,a.kt)("inlineCode",{parentName:"p"},"getCity()")," function in the City dataclass class, you could call it using the following request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,a.kt)("p",null,"with data in the body of the POST request: ",(0,a.kt)("inlineCode",{parentName:"p"},'["Aguada"]')),(0,a.kt)("p",null,"Na linguagem 4D, esta chamada \xe9 equivalente a:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'$city:=ds. City.getCity("Aguada")\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only functions with the ",(0,a.kt)("inlineCode",{parentName:"p"},"exposed")," keyword can be directly called from REST requests. See ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Exposed vs non-exposed functions")," section.")),(0,a.kt)("h2",s({},{id:"chamadas-fun\xe7\xf5es"}),"Chamadas fun\xe7\xf5es"),(0,a.kt)("p",null,"Functions must always be called using REST ",(0,a.kt)("strong",{parentName:"p"},"POST")," requests (a GET request will receive an error)."),(0,a.kt)("p",null,"Functions are called on the corresponding object on the server datastore."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Fun\xe7\xe3o de classe"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Sintaxe"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/pt/20/ORDA/ordaClasses#datastore-class"}),"datastore class")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/$catalog/DataStoreClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/pt/20/ORDA/ordaClasses#dataclass-class"}),"dataclass class")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/DataClassClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/pt/20/ORDA/ordaClasses#entityselection-class"}),"entitySelection class")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$filter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/pt/20/ORDA/ordaClasses#entity-class"}),"entity class")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}(key)/EntityClassFunction/"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}/Function")," can be used to call either a dataclass or an entity selection function (",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}")," returns all entities of the DataClass as an entity selection). The function is searched in the entity selection class first. Se n\xe3o for encontrado, \xe9 procurado na dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All 4D code called from REST requests ",(0,a.kt)("strong",{parentName:"p"},"must be thread-safe")," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"}),(0,a.kt)("em",{parentName:"a"},"Use preemptive process")," setting value")," is ignored by the REST Server).")),(0,a.kt)("h2",s({},{id:"par\xe2metros"}),"Par\xe2metros"),(0,a.kt)("p",null,"You can send parameters to functions defined in ORDA user classes. On the server side, they will be received in the class functions in regular $1, $2, etc. parameters."),(0,a.kt)("p",null,"As regras abaixo s\xe3o v\xe1lidas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parameters must be passed in the ",(0,a.kt)("strong",{parentName:"li"},"body of the POST request")),(0,a.kt)("li",{parentName:"ul"},"Parameters must be enclosed within a collection (JSON format)"),(0,a.kt)("li",{parentName:"ul"},"All scalar data types supported in JSON collections can be passed as parameters."),(0,a.kt)("li",{parentName:"ul"},"Entity and entity selection can be passed as parameters. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: ",(0,a.kt)("strong",{parentName:"li"},"DATACLASS,"),"ENTITY, ",(0,a.kt)("strong",{parentName:"li"},"ENTITIES,"),"DATASET.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",s({parentName:"p"},{href:"#request-receiving-an-entity-as-parameter"}),"this example")," and ",(0,a.kt)("a",s({parentName:"p"},{href:"#request-receiving-an-entity-selection-as-parameter"}),"this example"),"."),(0,a.kt)("h3",s({},{id:"par\xe2metro-de-valor-escalar"}),"Par\xe2metro de valor escalar"),(0,a.kt)("p",null,"Parameter(s) must simply be enclosed in a collection defined in the body. For example, with a  dataclass function ",(0,a.kt)("inlineCode",{parentName:"p"},"getCities()")," receiving text parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCities")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters in body:")," ",'["Aguada","Paris"]'),(0,a.kt)("p",null,'All JSON data types are supported in parameters, including JSON pointers. Dates can be passed as strings in ISO 8601 date format (e.g. "2020-08-22T22:00:000Z").'),(0,a.kt)("h3",s({},{id:"par\xe2metro-da-entidade"}),"Par\xe2metro da entidade"),(0,a.kt)("p",null,"Entities passed in parameters are referenced on the server through their key (",(0,a.kt)("em",{parentName:"p"},"i.e.")," __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory  the server. You can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Propriedades"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Atributos da entidade"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"misto"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Opcional - Valores a modificar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"__DATACLASS"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Mandatory - Indicates the Dataclass of the entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"__ENTITY"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Mandatory - True to indicate to the server that the parameter is an entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"__KEY"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"misto (do mesmo tipo que a chave prim\xe1ria)"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Facultativo - Chave prim\xe1ria da entidade")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If __KEY is not provided, a new entity is created on the server with the given attributes."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("strong",{parentName:"li"},"KEY is provided, the entity corresponding to"),"KEY is loaded on the server with the given attributes")),(0,a.kt)("p",null,"See examples for ",(0,a.kt)("a",s({parentName:"p"},{href:"#creating-an-entity"}),"creating")," or ",(0,a.kt)("a",s({parentName:"p"},{href:"#updating-an-entity"}),"updating")," entities."),(0,a.kt)("h4",s({},{id:"related-entity-parameter"}),"Related entity parameter"),(0,a.kt)("p",null,"Same properties as for an ",(0,a.kt)("a",s({parentName:"p"},{href:"#entity-parameter"}),"entity parameter"),". In addition, the related entity must exist and is referenced by __KEY containing its primary key."),(0,a.kt)("p",null,"See examples for ",(0,a.kt)("a",s({parentName:"p"},{href:"#creating-an-entity-with-a-related-entity"}),"creating")," or ",(0,a.kt)("a",s({parentName:"p"},{href:"#updating-an-entity-with-a-related-entity"}),"updating")," entities with related entities."),(0,a.kt)("h3",s({},{id:"entity-selection-parameter"}),"Entity selection parameter"),(0,a.kt)("p",null,"The entity selection must have been defined beforehand using ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/REST/method#methodentityset"}),"$method=entityset"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Propriedades"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Atributos da entidade"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"misto"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Opcional - Valores a modificar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"__DATASET"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Mandatory - entitySetID (UUID) of the entity selection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"__ENTITIES"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Mandatory - True to indicate to the server that the parameter is an entity selection")))),(0,a.kt)("p",null,"See example for ",(0,a.kt)("a",s({parentName:"p"},{href:"#receiving-an-entity-selection-as-parameter"}),"receiving an entity selection"),"."),(0,a.kt)("h2",s({},{id:"request-examples"}),"Request examples"),(0,a.kt)("p",null,"This database is exposed as a remote datastore on localhost (port 8111):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(52363).Z,width:"882",height:"599"})),(0,a.kt)("h3",s({},{id:"using-a-datastore-class-function"}),"Using a datastore class function"),(0,a.kt)("p",null,"The US_Cities ",(0,a.kt)("inlineCode",{parentName:"p"},"DataStore")," class provides an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'// DataStore class Class extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n')),(0,a.kt)("p",null,"You can then run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/getName")),(0,a.kt)("h4",s({},{id:"resultados"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n"result": "US cities and zip codes manager" \n}\n')),(0,a.kt)("h3",s({},{id:"using-a-dataclass-class-function"}),"Using a dataclass class function"),(0,a.kt)("p",null,"The Dataclass class ",(0,a.kt)("inlineCode",{parentName:"p"},"City")," provides an API that returns a city entity from a name passed in parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'// City class Class extends DataClass\n\nexposed Function getCity()\n var $0 : cs. CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n')),(0,a.kt)("p",null,"You can then run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City/getCity")),(0,a.kt)("p",null,"Body of the request: ",'["Aguada"]'),(0,a.kt)("h4",s({},{id:"resultados-1"}),"Resultados"),(0,a.kt)("p",null,"Le r\xe9sultat est une entit\xe9:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n')),(0,a.kt)("h3",s({},{id:"using-an-entity-class-function"}),"Using an entity class function"),(0,a.kt)("p",null,"The Entity class ",(0,a.kt)("inlineCode",{parentName:"p"},"CityEntity")," provides an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'// CityEntity class Class extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,a.kt)("p",null,"You can then run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City(2)/getPopulation")),(0,a.kt)("h4",s({},{id:"resultados-2"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "result": 48814\n}\n')),(0,a.kt)("h3",s({},{id:"usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade"}),"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade"),(0,a.kt)("p",null,"The EntitySelection class ",(0,a.kt)("inlineCode",{parentName:"p"},"CitySelection")," provides an API:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'// CitySelection class Class extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,a.kt)("p",null,"You can then run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"')),(0,a.kt)("h4",s({},{id:"resultados-3"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "result": 87256\n}\n')),(0,a.kt)("h3",s({},{id:"using-an-entityselection-class-function-and-an-entityset"}),"Using an entitySelection class function and an entitySet"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," class has a ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgeAverage")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"// StudentsSelection Class Class extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n")),(0,a.kt)("p",null,"Once you have created an entityset, you can run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532")),(0,a.kt)("h4",s({},{id:"resultados-4"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "result": 34\n}\n')),(0,a.kt)("h3",s({},{id:"using-an-entityselection-class-function-and-an-orderby"}),"Using an entitySelection class function and an orderBy"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," class has a ",(0,a.kt)("inlineCode",{parentName:"p"},"getLastSummary")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'// StudentsSelection Class Class extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n')),(0,a.kt)("p",null,"You can then run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"')),(0,a.kt)("h4",s({},{id:"resultados-5"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "result": "Wilbert - Bull is ... 21" \n}\n')),(0,a.kt)("h3",s({},{id:"utilizar-uma-entidade-a-ser-criada-no-servidor"}),"Utilizar uma entidade a ser criada no servidor"),(0,a.kt)("p",null,"The Dataclass class ",(0,a.kt)("inlineCode",{parentName:"p"},"Students")," has the function ",(0,a.kt)("inlineCode",{parentName:"p"},"pushData()")," receiving an entity containing data from the client. O m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"checkData()")," executa alguns controlos. If they are OK, the entity is saved and returned."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"// Students Class Class extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status is an object with a success boolean property\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n")),(0,a.kt)("p",null,"You run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Corpo do pedido:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n')),(0,a.kt)("p",null,"Since no ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," is given, a new Students entity is loaded on the server ",(0,a.kt)("strong",{parentName:"p"},"with the attributes received from the client"),". Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"pushData()")," function runs a ",(0,a.kt)("inlineCode",{parentName:"p"},"save()")," action, the new entity is created."),(0,a.kt)("h4",s({},{id:"resultados-6"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n')),(0,a.kt)("h3",s({},{id:"utilizar-uma-entidade-a-atualizar-no-servidor"}),"Utilizar uma entidade a atualizar no servidor"),(0,a.kt)("p",null,"O mesmo que acima, mas com um atributo __KEY"),(0,a.kt)("p",null,"You run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST:"),(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Corpo do pedido:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n')),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," is given, the Students entity with primary key 55 is loaded ",(0,a.kt)("strong",{parentName:"p"},"with the lastname value received from the client"),". Because the function runs a ",(0,a.kt)("inlineCode",{parentName:"p"},"save()")," action, the entity is updated."),(0,a.kt)("h4",s({},{id:"resultados-7"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n')),(0,a.kt)("h3",s({},{id:"cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada"}),"Cria\xe7\xe3o de uma entidade com uma entidade relacionada"),(0,a.kt)("p",null,"In this example, we create a new Students entity with the Schools entity having primary key 2."),(0,a.kt)("p",null,"You run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST:"),(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Corpo do pedido:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n')),(0,a.kt)("h4",s({},{id:"resultados-8"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n')),(0,a.kt)("h3",s({},{id:"atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada"}),"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada"),(0,a.kt)("p",null,"In this example, we associate an existing school to a Students entity. A classe ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentEntity")," tem um API:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"// StudentsEntity class Class extends Entity\n\nexposed Function putToSchool()\n var $1, $school , $0, $status : Object\n\n  //$1 is a Schools entity\n $school:=$1\n  //Associate the related entity school to the current Students entity\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n")),(0,a.kt)("p",null,"You run this request, called on a Students entity : ",(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students(1)/putToSchool")," Body of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n')),(0,a.kt)("h4",s({},{id:"resultados-9"}),"Resultados"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "result": {\n        "success": true\n    }\n}\n')),(0,a.kt)("h3",s({},{id:"receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro"}),"Receber uma sele\xe7\xe3o de entidade como par\xe2metro"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Students")," Dataclass class, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setFinalExam()")," function updates a received entity selection ($1). It actually updates the ",(0,a.kt)("em",{parentName:"p"},"finalExam")," attribute with the received value ($2). It returns the primary keys of the updated entities."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"// Students class Class extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n")),(0,a.kt)("p",null,"An entity set is first created with this request:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset')),(0,a.kt)("p",null,"Then you can run this request:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/setFinalExam")),(0,a.kt)("p",null,"Corpo do pedido:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n')),(0,a.kt)("h4",s({},{id:"resultados-10"}),"Resultados"),(0,a.kt)("p",null,"The entities with primary keys 1 and 2 have been updated."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'{\n    "result": [\n        1,\n        2\n    ]\n}\n')),(0,a.kt)("h3",s({},{id:"utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente"}),"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgeAverage()")," function ",(0,a.kt)("a",s({parentName:"p"},{href:"#using-an-entityselection-class-function-and-an-entityset"}),"defined above"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS. Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent) \n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n')))}c.isMDXComponent=!0},52363:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"}}]);