"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,y=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});a(67294);var n=a(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={id:"manData",title:"Manipulating Data"},o=void 0,s={unversionedId:"REST/manData",id:"version-19/REST/manData",title:"Manipulating Data",description:"All exposed dataclasses, attributes and functions can be accessed through REST. Dataclass, attribute, and function names are case-sensitive; however, the data for queries is not.",source:"@site/versioned_docs/version-19/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/19/REST/manData",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"manData",title:"Manipulating Data"},sidebar:"docs",previous:{title:"Getting Server Information",permalink:"/docs/19/REST/genInfo"},next:{title:"Calling ORDA class functions",permalink:"/docs/19/REST/classFunctions"}},p={},u=[{value:"Querying data",id:"querying-data",level:2},{value:"Adding, modifying, and deleting entities",id:"adding-modifying-and-deleting-entities",level:2},{value:"Navigating data",id:"navigating-data",level:2},{value:"Creating and managing entity set",id:"creating-and-managing-entity-set",level:2},{value:"Calculating data",id:"calculating-data",level:2},{value:"Calling Data model class functions",id:"calling-data-model-class-functions",level:2},{value:"Selecting Attributes to get",id:"selecting-attributes-to-get",level:2},{value:"Examples",id:"examples",level:3},{value:"Dataclass Example",id:"dataclass-example",level:4},{value:"Entity Example",id:"entity-example",level:4},{value:"Entity Set Example",id:"entity-set-example",level:4},{value:"Viewing an image attribute",id:"viewing-an-image-attribute",level:2},{value:"Saving a BLOB attribute to disk",id:"saving-a-blob-attribute-to-disk",level:2},{value:"Retrieving only one entity",id:"retrieving-only-one-entity",level:2}],m={toc:u};function d(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",i({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/configuration#exposing-tables-and-fields"}),"exposed dataclasses, attributes")," and ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/classFunctions"}),"functions")," can be accessed through REST. Dataclass, attribute, and function names are case-sensitive; however, the data for queries is not."),(0,n.kt)("h2",i({},{id:"querying-data"}),"Querying data"),(0,n.kt)("p",null,"To query data directly, you can do so using the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter")),' function. For example, to find a person named "Smith", you could write:'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"')),(0,n.kt)("h2",i({},{id:"adding-modifying-and-deleting-entities"}),"Adding, modifying, and deleting entities"),(0,n.kt)("p",null,"With the REST API, you can perform all the manipulations to data as you can in 4D."),(0,n.kt)("p",null,"To add and modify entities, you can call ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/method#methodupdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=update")),". If you want to delete one or more entities, you can use ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/method#methoddelete"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=delete")),"."),(0,n.kt)("p",null,"Besides retrieving a single entity in a dataclass using ",(0,n.kt)("a",i({parentName:"p"},{href:"%7BdataClass%7D_%7Bkey%7D.html"}),"{dataClass}({key})"),", you can also write a ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/classFunctions#function-calls"}),"class function")," that returns an entity selection (or a collection)."),(0,n.kt)("p",null,"Before returning a selection, you can also sort it by using ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/orderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$orderby"))," one one or more attributes (even relation attributes)."),(0,n.kt)("h2",i({},{id:"navigating-data"}),"Navigating data"),(0,n.kt)("p",null,"Add the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/skip"}),(0,n.kt)("inlineCode",{parentName:"a"},"$skip"))," (to define with which entity to start) and ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities."),(0,n.kt)("h2",i({},{id:"creating-and-managing-entity-set"}),"Creating and managing entity set"),(0,n.kt)("p",null,"An entity set (aka ",(0,n.kt)("em",{parentName:"p"},"entity selection"),") is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application."),(0,n.kt)("p",null,"To create an entity set, call ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/method#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," in your REST request. As a measure of security, you can also use ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/savedfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," and/or ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," when you call ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter"))," and/or ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/orderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$orderby"))," so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before."),(0,n.kt)("p",null,"To access the entity set, you must use ",(0,n.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}"),", for example:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF")),(0,n.kt)("p",null,"By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/timeout"}),(0,n.kt)("inlineCode",{parentName:"a"},"$timeout")),". The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it."),(0,n.kt)("p",null,"If you want to remove an entity set from 4D Server's cache, you can use ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),"."),(0,n.kt)("p",null,"If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set."),(0,n.kt)("p",null,"If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it."),(0,n.kt)("p",null,"Using ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/entityset#entitysetentitysetidoperatorothercollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}?$logicOperator... &$otherCollection")),", you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two."),(0,n.kt)("p",null,"A new selection of entities is returned; however, you can also create a new entity set by calling ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/method#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," at the end of the REST request."),(0,n.kt)("h2",i({},{id:"calculating-data"}),"Calculating data"),(0,n.kt)("p",null,"By using ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/compute"}),(0,n.kt)("inlineCode",{parentName:"a"},"$compute")),", you can compute the ",(0,n.kt)("strong",{parentName:"p"},"average"),", ",(0,n.kt)("strong",{parentName:"p"},"count"),", ",(0,n.kt)("strong",{parentName:"p"},"min"),", ",(0,n.kt)("strong",{parentName:"p"},"max"),", or ",(0,n.kt)("strong",{parentName:"p"},"sum")," for a specific attribute in a dataclass. You can also compute all values with the $all keyword. "),(0,n.kt)("p",null,"For example, to get the highest salary:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=max")),(0,n.kt)("p",null,"To compute all values and return a JSON object:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=$all")),(0,n.kt)("h2",i({},{id:"calling-data-model-class-functions"}),"Calling Data model class functions"),(0,n.kt)("p",null,"You can call ORDA Data Model ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/classFunctions"}),"user class functions")," through POST requests, so that you can benefit from the exposed API of the targeted application. For example, if you have defined a ",(0,n.kt)("inlineCode",{parentName:"p"},"getCity()")," function in the City dataclass class, you could call it using the following request:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,n.kt)("p",null,"with data in the body of the request: ",(0,n.kt)("inlineCode",{parentName:"p"},'["Paris"]')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Calls to 4D project methods that are exposed as REST Service are still supported but are deprecated. ")),(0,n.kt)("h2",i({},{id:"selecting-attributes-to-get"}),"Selecting Attributes to get"),(0,n.kt)("p",null,"You can always define which attributes to return in the REST response after an initial request by passing their path in the request (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)/name,revenues/"),")"),(0,n.kt)("p",null,"You can apply this filter in the following ways:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Syntax"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Dataclass"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"/People/firstName,lastName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Collection of entities"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),'{dataClass}/{att1,att2...}/?$filter="{filter}"'),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"/People/firstName,lastName/?$filter=\"lastName='a@'\"")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Specific entity"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"{dataClass}({ID})/{att1,att2...}"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"/People(1)/firstName,lastName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"{dataClass}:{attribute}(value)/{att1,att2...}/"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"/People:firstName(Larry)/firstName,lastName/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Entity selection"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61")))),(0,n.kt)("p",null,"The attributes must be delimited by a comma, ",(0,n.kt)("em",{parentName:"p"},"i.e."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"/Employee/firstName,lastName,salary"),". Storage or relation attributes can be passed. "),(0,n.kt)("h3",i({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities."),(0,n.kt)("p",null,"You can apply this technique to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dataclasses (all or a collection of entities in a dataclass)"),(0,n.kt)("li",{parentName:"ul"},"Specific entities"),(0,n.kt)("li",{parentName:"ul"},"Entity sets")),(0,n.kt)("h4",i({},{id:"dataclass-example"}),"Dataclass Example"),(0,n.kt)("p",null,"The following requests returns only the first name and last name from the People dataclass (either the entire dataclass or a selection of entities based on the search defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"$filter"),")."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,n.kt)("h4",i({},{id:"entity-example"}),"Entity Example"),(0,n.kt)("p",null,"The following request returns only the first name and last name attributes from a specific entity in the People dataclass:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/firstName,lastName/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n')),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n \n}\n')),(0,n.kt)("h4",i({},{id:"entity-set-example"}),"Entity Set Example"),(0,n.kt)("p",null,"Once you have ",(0,n.kt)("a",i({parentName:"p"},{href:"#creating-and-managing-entity-set"}),"created an entity set"),", you can filter the information in it by defining which attributes to return:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer")),(0,n.kt)("h2",i({},{id:"viewing-an-image-attribute"}),"Viewing an image attribute"),(0,n.kt)("p",null,"If you want to view an image attribute in its entirety, write the following:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,n.kt)("p",null,"For more information about the image formats, refer to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/imageformat"}),(0,n.kt)("inlineCode",{parentName:"a"},"$imageformat")),". For more information about the version parameter, refer to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/19/REST/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,n.kt)("h2",i({},{id:"saving-a-blob-attribute-to-disk"}),"Saving a BLOB attribute to disk"),(0,n.kt)("p",null,"If you want to save a BLOB stored in your dataclass, you can write the following:"),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")),(0,n.kt)("h2",i({},{id:"retrieving-only-one-entity"}),"Retrieving only one entity"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("a",i({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),(0,n.kt)("inlineCode",{parentName:"a"},"{dataClass}:{attribute}(value)"))," syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the dataclass's primary key. For example, you can write:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company:companyCode("Acme001")')))}d.isMDXComponent=!0}}]);