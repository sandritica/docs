"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(n),N=l,k=s["".concat(o,".").concat(N)]||s[N]||m[N]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});n(67294);var a=n(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const i={id:"null-undefined",title:"Null and Undefined"},d=void 0,o={unversionedId:"Concepts/null-undefined",id:"version-20-R2/Concepts/null-undefined",title:"Null and Undefined",description:"Null and Undefined are data types that handle cases where the value of an expression is not known.",source:"@site/versioned_docs/version-20-R2/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"null-undefined",title:"Null and Undefined"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/Concepts/date"},next:{title:"Number (Real, Longint, Integer)",permalink:"/docs/Concepts/number"}},u={},p=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Null operators",id:"null-operators",level:2},{value:"Undefined operators",id:"undefined-operators",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function s(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Null and Undefined are data types that handle cases where the value of an expression is not known.  "),(0,a.kt)("h2",l({},{id:"null"}),"Null"),(0,a.kt)("p",null,"Null is a special data type with only one possible value: ",(0,a.kt)("strong",{parentName:"p"},"null"),". This value is returned by an expression that does not contain any value."),(0,a.kt)("p",null,"In the 4D language and for object field attributes, null values are managed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," function. This function can be used with the following expressions for setting or comparing the null value:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"object attributes"),(0,a.kt)("li",{parentName:"ul"},"collection elements"),(0,a.kt)("li",{parentName:"ul"},"variables of the object, collection, pointer, picture, or variant type.")),(0,a.kt)("h2",l({},{id:"undefined"}),"Undefined"),(0,a.kt)("p",null,"Undefined is not actually a data type. It denotes a variable that has not yet been defined. A function (a project method that returns a result) can return an undefined value if, within the method, the function result ($0) is assigned an undefined expression (an expression calculated with at least one undefined variable). A field cannot be undefined (the ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," command always returns False for a field). A variant variable has ",(0,a.kt)("strong",{parentName:"p"},"undefined")," as default value."),(0,a.kt)("h2",l({},{id:"null-operators"}),"Null operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Operation"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntax"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Returns"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Equality"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"scalar value")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Inequality"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Null ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"scalar value")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.nullProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"scalar values")," are values of type string, Date, Time, Boolean, number, or Blob. When declared, their ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/Concepts/data-types#default-values"}),"default value")," is neither undefined nor null. Other types (Pointer, Picture, Object, Collection) have undefined or null default value. Ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n')),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Comparisons with Greater than (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Less than (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Greater than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), and Less than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") operators are not supported with Null values and return an error.")),(0,a.kt)("h2",l({},{id:"undefined-operators"}),"Undefined operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Operation"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntax"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Returns"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Equality"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," c.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," ",(0,a.kt)("em",{parentName:"td"},"other values")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"=")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Inequality"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Undefined"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.undefinedProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," Null"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," b.nullProp"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," ",(0,a.kt)("em",{parentName:"td"},"other values")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"#")," 42"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Greater than"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">"),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Less than"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Greater than or equal to"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},">=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},">="),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Less than or equal to"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Undefined ",(0,a.kt)("inlineCode",{parentName:"td"},"<=")," string, Date, Time, Boolean, number"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"a.undefinedProp ",(0,a.kt)("inlineCode",{parentName:"td"},"<="),' "abc"'),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"other values")," are expressions of any type with a value neither Undefined nor Null. "),(0,a.kt)("admonition",l({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Comparisons of Undefined values with Pointer, Picture, Blob, Object, Collection, Undefined or Null values using Greater than (",(0,a.kt)("inlineCode",{parentName:"p"},">"),"), Less than (",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"), Greater than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},">="),"), and Less than or equal to (",(0,a.kt)("inlineCode",{parentName:"p"},"<="),") operators are not supported and return an error.")),(0,a.kt)("h2",l({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Here are the different results of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Undefined")," command as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Null")," command with object properties, depending on the context:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n')),(0,a.kt)("p",null,"Examples of comparison results with undefined and null values:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n')))}s.isMDXComponent=!0}}]);