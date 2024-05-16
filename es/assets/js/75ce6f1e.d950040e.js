"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1127],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},849533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"time",title:"Hora"},i=void 0,p={unversionedId:"Concepts/time",id:"version-20-R5/Concepts/time",title:"Hora",description:"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 0000 y 596,00000.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/es/Concepts/time",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"time",title:"Hora"},sidebar:"docs",previous:{title:"Cadena",permalink:"/docs/es/Concepts/string"},next:{title:"Variant",permalink:"/docs/es/Concepts/variant"}},s={},u=[{value:"Constantes literales de tipo hora",id:"constantes-literales-de-tipo-hora",level:2},{value:"Operadores de horas",id:"operadores-de-horas",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:3},{value:"Ejemplo 2",id:"ejemplo-2",level:3}],d={toc:u};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Las variables, campos o expresiones de tipo Hora pueden estar comprendidas entre 00:00:00 y 596,000:00:00."),(0,a.kt)("p",null,"Las horas est\xe1n en formato de 24 horas."),(0,a.kt)("p",null,"Un valor de tiempo puede ser tratado como un n\xfamero. El n\xfamero devuelto de una hora es el n\xfamero de segundos desde la medianoche (00:00:00) que representa esa hora."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nota:")," en el manual de ",(0,a.kt)("em",{parentName:"p"},"referencia del lenguaje 4D"),", los par\xe1metros de tipo Hora en las descripciones de los comandos se llaman Hora, excepto cuando se indique lo contrario."),(0,a.kt)("h2",r({},{id:"constantes-literales-de-tipo-hora"}),"Constantes literales de tipo hora"),(0,a.kt)("p",null,"Una constante hora est\xe1 rodeada de signos de interrogaci\xf3n (?...?)."),(0,a.kt)("p",null,"Una constante hora se ordena hora:minuto:segundo, con dos puntos (:) para separar cada parte. Las horas se especifican en formato de 24 horas."),(0,a.kt)("p",null,"Estos son algunos ejemplos de constantes de tipo hora:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"?00:00:00? ` midnight\n?09:30:00? ` 9:30 am\n?13:01:59? ` 1 pm, 1 minute, and 59 seconds\n")),(0,a.kt)("p",null,"Una hora nula se escribe ?00:00:00?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consejo:")," el Editor de c\xf3digo incluye un acceso directo para introducir una hora null. To type a null time, enter the question mark (?) character and press Enter."),(0,a.kt)("h2",r({},{id:"operadores-de-horas"}),"Operadores de horas"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Operaci\xf3n"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Devuelve"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora + Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? + ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?03:05:07?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora \u2013 Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? \u2013 ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:01:01?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora + N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? + 65"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"7449")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora \u2013 N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? \u2013 65"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"7319")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Multiplicaci\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora ","*"," N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ","*"," 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"14768")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora / N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? / 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3692")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n entera"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora \\ N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? \\ 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3692")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora % Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?20:10:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00? ?20:10:00? % ?04:20:00?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:50:00?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora % N\xfamero"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?02:03:04? ?02:03:04? % 2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Hora = Hora"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"?01:02:03? ?01:02:03? = ?01:02:03?"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"True")))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"        ||||?01:02:03? = ?01:02:04? |False|\n")),(0,a.kt)("p",null,"|Inequality\t|Time # Time\t|Boolean\t|?01:02:03? # ?01:02:04?\t|True|\n||||?01:02:03? # ?01:02:03?\t|False|\n|Greater than\t|Time > Time\t|Boolean\t|?01:02:04? > ?01:02:03?\t|True|\n||||\t\t?01:02:03? > ?01:02:03?\t|False|\n|Less than\t|Time < Time\t|Boolean\t|?01:02:03? < ?01:02:04?\t|True|\n||||\t?01:02:03? < ?01:02:03?\t|False|\n|Greater than or equal to\t|Time >= Time\t|Boolean\t|?01:02:03? >=?01:02:03?\t|True|\n||||?01:02:03? >=?01:02:04?\t|False|\n|Less than or equal to\t|Time <= Time\t|Boolean\t|?01:02:03? <=?01:02:03?|\tTrue|\n||||?01:02:04? <=?01:02:03?\t|False|"),(0,a.kt)("h3",r({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,a.kt)("p",null,"Para obtener una expresi\xf3n de tipo hora a partir de una expresi\xf3n que combina una expresi\xf3n de hora con un n\xfamero, utilice los comandos ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"Time string"),"."),(0,a.kt)("p",null,"Puede combinar expresiones de los tipos hora y n\xfamero utilizando las funciones ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," o ",(0,a.kt)("inlineCode",{parentName:"p"},"Current time"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"    //The following line assigns to $vlSeconds the number of seconds   \n    //that will be elapsed between midnight and one hour from now\n$vlSeconds:=Current time+3600\n    //The following line assigns to $vHSoon the time it will be in one hour\n$vhSoon:=Time(Current time+3600)\n")),(0,a.kt)("p",null,"La segunda l\xednea podr\xeda escribirse de forma m\xe1s sencilla:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // La siguiente l\xednea asigna a $vHSoon la hora que ser\xe1 en una hora\n $vhSoon:=Current time+?01:00:00?\n")),(0,a.kt)("h3",r({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,a.kt)("p",null,"El operador Modulo puede utilizarse, m\xe1s concretamente, para sumar tiempos que tengan en cuenta el formato de 24 horas:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$t1:=?23:00:00? // It is 23:00 hours\n  // We want to add 2 and a half hours\n$t2:=$t1 +?02:30:00? // With a simple addition, $t2 is ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 is ?01:30:00? and it is 1:30 hour the next morning\n")))}m.isMDXComponent=!0}}]);