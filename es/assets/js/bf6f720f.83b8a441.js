"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"compute",title:"$compute"},i=void 0,p={unversionedId:"REST/compute",id:"version-19-R7/REST/compute",title:"$compute",description:"C\xe1lculo de atributos espec\xedficos (e., Employee/salary/?$compute=sum) o en el caso de un atributo Objeto (por ejemplo, Employee/objectAtt.property1/?$compute=sum)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/es/19-R7/REST/compute",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/REST/$compute.md",tags:[],version:"19-R7",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/es/19-R7/REST/binary"},next:{title:"$distinct",permalink:"/docs/es/19-R7/REST/distinct"}},u={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],s={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"C\xe1lculo de atributos espec\xedficos (",(0,r.kt)("em",{parentName:"p"},"e."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee/salary/?$compute=sum)")," o en el caso de un atributo Objeto (",(0,r.kt)("em",{parentName:"p"},"por ejemplo"),", Employee/objectAtt.property1/?$compute=sum)"),(0,r.kt)("h2",a({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"Este par\xe1metro le permite realizar c\xe1lculos sobre sus datos."),(0,r.kt)("p",null,"Si desea realizar un c\xe1lculo sobre un atributo, escriba lo siguiente:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,"Si desea pasar un atributo Objeto, debe pasar una de sus propiedades. Por ejemplo:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAtt.property1/?$compute=$all")),(0,r.kt)("p",null,"Puede utilizar cualquiera de las siguientes palabras claves:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Palabras clave"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"$all"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Un objeto JSON que define todas las funciones del atributo (promedio, recuento, m\xednimo, m\xe1ximo y suma para los atributos de tipo Number y count, m\xednimo y m\xe1ximo para los atributos de tipo String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"average"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtener la media de un atributo num\xe9rico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"count"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtener el n\xfamero total en la colecci\xf3n o en la clase de datos (en ambos casos hay que especificar un atributo)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"min"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtener el valor m\xednimo de un atributo num\xe9rico o el valor m\xe1s bajo en un atributo de tipo String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"max"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtener el valor m\xe1ximo de un atributo num\xe9rico o el valor m\xe1s alto en un atributo de tipo String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"sum"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obtener la suma de un atributo num\xe9rico")))),(0,r.kt)("h2",a({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"Si desea obtener todos los c\xe1lculos de un atributo de tipo N\xfamero, puede escribir:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n')),(0,r.kt)("p",null,"Si desea obtener todos los c\xe1lculos de un atributo de tipo String, puede escribir:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/firstName/?$compute=$all")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n')),(0,r.kt)("p",null,"Si desea obtener un c\xe1lculo con un atributo, escriba lo siguiente:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=sum")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Respuesta"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"235000")),(0,r.kt)("p",null,"Si desea realizar un c\xe1lculo con un atributo Objeto, escriba lo siguiente:"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAttribute.property1/?$compute=sum")),(0,r.kt)("p",null,"Respuesta:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"45")))}m.isMDXComponent=!0}}]);