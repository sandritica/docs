"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=l,N=c["".concat(d,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={id:"data-collect",title:"Recopilaci\xf3n de datos"},o=void 0,d={unversionedId:"Admin/data-collect",id:"version-20/Admin/data-collect",title:"Recopilaci\xf3n de datos",description:"Para que nuestros productos sean siempre mejores, recogemos autom\xe1ticamente los datos relativos a las estad\xedsticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente an\xf3nimos y se transfieren sin afectar la experiencia del usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/es/Admin/data-collect",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"data-collect",title:"Recopilaci\xf3n de datos"},sidebar:"docs",previous:{title:"Restaurar",permalink:"/docs/es/Backup/restore"},next:{title:"Extensiones",permalink:"/docs/es/Extensions/overview"}},m={},s=[{value:"Informaci\xf3n recopilada",id:"informaci\xf3n-recopilada",level:2},{value:"Collected at database startup",id:"collected-at-database-startup",level:3},{value:"Collected at web server startup and data collection sending",id:"collected-at-web-server-startup-and-data-collection-sending",level:3},{value:"Collected at regular intervals",id:"collected-at-regular-intervals",level:3},{value:"Collected at data collection sending",id:"collected-at-data-collection-sending",level:3},{value:"Collected at database closure and data collection sending",id:"collected-at-database-closure-and-data-collection-sending",level:3},{value:"Collected every time PHP execute is called",id:"collected-every-time-php-execute-is-called",level:3},{value:"Collected at client connection",id:"collected-at-client-connection",level:3},{value:"\xbfD\xf3nde se almacena y env\xeda?",id:"d\xf3nde-se-almacena-y-env\xeda",level:2},{value:"Desactivar la recopilaci\xf3n de datos en las aplicaciones cliente/servidor integradas",id:"desactivar-la-recopilaci\xf3n-de-datos-en-las-aplicaciones-clienteservidor-integradas",level:2}],p={toc:s};function c(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",l({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Para que nuestros productos sean siempre mejores, recogemos autom\xe1ticamente los datos relativos a las estad\xedsticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente an\xf3nimos y se transfieren sin afectar la experiencia del usuario."),(0,n.kt)("p",null,"Esta p\xe1gina explica:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"what information is collected,"),(0,n.kt)("li",{parentName:"ul"},"where information is stored and when it is sent to 4D,"),(0,n.kt)("li",{parentName:"ul"},"c\xf3mo desactivar la recopilaci\xf3n autom\xe1tica de datos en las aplicaciones integradas cliente/servidor.")),(0,n.kt)("h2",l({},{id:"informaci\xf3n-recopilada"}),"Informaci\xf3n recopilada"),(0,n.kt)("p",null,"Los datos se recogen durante los siguientes eventos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"database startup,"),(0,n.kt)("li",{parentName:"ul"},"cierre de base de datos,"),(0,n.kt)("li",{parentName:"ul"},"web server startup,"),(0,n.kt)("li",{parentName:"ul"},"php execution,"),(0,n.kt)("li",{parentName:"ul"},"client connection,"),(0,n.kt)("li",{parentName:"ul"},"data collection sending.")),(0,n.kt)("p",null,"Some data is also collected at regular intervals."),(0,n.kt)("h3",l({},{id:"collected-at-database-startup"}),"Collected at database startup"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"CPU"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre, tipo y velocidad del procesador")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"numberOfCores"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero total de n\xfacleos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"memory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Volumen de almacenamiento de memoria (en bytes) disponible en la m\xe1quina")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"system"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Versi\xf3n del sistema operativo y n\xfamero de build")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"headless"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n se ejecuta en modo sin interfaz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"version"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de versi\xf3n de la aplicaci\xf3n 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"buildNumber"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de build de la aplicaci\xf3n 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"license"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre comercial y descripci\xf3n de las licencias de los productos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isRosetta"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uniqueID"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Unique ID of the 4D Server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text (hashed string)"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Identificador \xfanico asociado a la base de datos (",(0,n.kt)("em",{parentName:"td"},"Polinomio Rolling hash del nombre de la base"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataFileSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tama\xf1o del archivo de datos en bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexesSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tama\xf1o del \xedndice en bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tama\xf1o de cach\xe9 en bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingLegacyNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si se utiliza la capa de red heredada para el servidor de aplicaciones")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingQUICNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la base utiliza la capa de red QUIC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"encryptedConnections"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if client/server connections are encrypted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"encrypted"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si el archivo de datos est\xe1 encriptado")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"compiled"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n est\xe1 compilada")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isEngined"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n se fusiona con 4D Volume Desktop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"projectMode"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n es un proyecto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mobile"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Informaci\xf3n sobre sesiones m\xf3viles")))),(0,n.kt)("h3",l({},{id:"collected-at-web-server-startup-and-data-collection-sending"}),"Collected at web server startup and data collection sending"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webServer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'"started":true if the web server is starting or started')))),(0,n.kt)("h3",l({},{id:"collected-at-regular-intervals"}),"Collected at regular intervals"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumNumberOfWebProcesses"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero m\xe1ximo de procesos web simult\xe1neos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedPhysicalMemory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Uso m\xe1ximo de la memoria f\xedsica")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedVirtualMemory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Uso m\xe1ximo de la memoria virtual")))),(0,n.kt)("h3",l({},{id:"collected-at-data-collection-sending"}),"Collected at data collection sending"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uptime"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tiempo transcurrido (en segundos) desde que se abri\xf3 la base 4D local")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes le\xeddos de la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes perdidos de la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas en la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas perdidas en la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes le\xeddos en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes escritos en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de escrituras en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes read in the index file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes written in the index file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of reads in the index file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of writes in the index file")))),(0,n.kt)("h3",l({},{id:"collected-at-database-closure-and-data-collection-sending"}),"Collected at database closure and data collection sending"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverHits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of hits on the web server during the data collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"restHits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of hits on the REST server during the data collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesIn"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Bytes received by the web server during the data collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesOut"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Bytes sent by the web server during the data collection")))),(0,n.kt)("h3",l({},{id:"collected-every-time-php-execute-is-called"}),"Collected every time PHP execute is called"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"phpCall"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of calls to ",(0,n.kt)("inlineCode",{parentName:"td"},"PHP execute"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"externalPHP"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the client performs a call to ",(0,n.kt)("inlineCode",{parentName:"td"},"PHP execute")," and uses its own version of php")))),(0,n.kt)("h3",l({},{id:"collected-at-client-connection"}),"Collected at client connection"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximum4DClientConnections"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Maximum number of 4D Client connections to the server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"connectionSystems"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Client OS without the build number (in parenthesis) and number of clients using it")))),(0,n.kt)("h2",l({},{id:"d\xf3nde-se-almacena-y-env\xeda"}),"\xbfD\xf3nde se almacena y env\xeda?"),(0,n.kt)("p",null,"Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page485.html"}),"active 4D folder"),", i.e.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en Windows: ",(0,n.kt)("inlineCode",{parentName:"li"},"Users\\[userName]\\AppData\\Roaming\\4D Server")),(0,n.kt)("li",{parentName:"ul"},"en macOS: ",(0,n.kt)("inlineCode",{parentName:"li"},"/Users/[userName]/Library/ApplicationSupport/4D Server"))),(0,n.kt)("p",null,"Una vez a la semana, el archivo se env\xeda autom\xe1ticamente por la red a 4D. A continuaci\xf3n, el archivo se elimina de la carpeta activa de 4D."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(44175).Z,width:"1261",height:"398"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si el archivo no ha podido ser enviado por alguna raz\xf3n, no obstante se elimina y no se muestra ning\xfan mensaje de error del lado de 4D Server.")),(0,n.kt)("p",null,"El archivo se env\xeda a la siguiente direcci\xf3n del servidor: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://dcollector.4d.com")," (ip: 195.68.52.83)."),(0,n.kt)("h2",l({},{id:"desactivar-la-recopilaci\xf3n-de-datos-en-las-aplicaciones-clienteservidor-integradas"}),"Desactivar la recopilaci\xf3n de datos en las aplicaciones cliente/servidor integradas"),(0,n.kt)("p",null,"Puede desactivar la recolecci\xf3n autom\xe1tica de datos en ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/Desktop/building#clientserver-page"}),"aplicaciones integradas cliente/servidor"),"."),(0,n.kt)("p",null,"Para desactivar la colecci\xf3n, pasar el valor ",(0,n.kt)("strong",{parentName:"p"},"False")," a la llave ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ServerDataCollection"))," en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"buildApp. Archivo Dsettings"),", utilizado para crear la aplicaci\xf3n cliente/servidor."))}c.isMDXComponent=!0},44175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"}}]);