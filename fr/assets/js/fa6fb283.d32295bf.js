"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62316],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(a),c=l,k=p["".concat(d,".").concat(c)]||p[c]||m[c]||r;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45229:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},l.apply(this,arguments)}function r(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const i={id:"data-collect",title:"Collecte des donn\xe9es"},o=void 0,d={unversionedId:"Admin/data-collect",id:"version-20/Admin/data-collect",title:"Collecte des donn\xe9es",description:"Pour nous aider \xe0 am\xe9liorer sans cesse nos produits, nous collectons automatiquement des donn\xe9es concernant les statistiques d'utilisation des applications 4D Server. Les donn\xe9es collect\xe9es sont totalement anonymes et leur transfert n'a aucun impact sur l'exp\xe9rience utilisateur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/fr/Admin/data-collect",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"data-collect",title:"Collecte des donn\xe9es"},sidebar:"docs",previous:{title:"Restitution",permalink:"/docs/fr/Backup/restore"},next:{title:"Extensions",permalink:"/docs/fr/Extensions/overview"}},s={},u=[{value:"Informations collect\xe9es",id:"informations-collect\xe9es",level:2},{value:"Collected at database startup",id:"collected-at-database-startup",level:3},{value:"Collected at web server startup and data collection sending",id:"collected-at-web-server-startup-and-data-collection-sending",level:3},{value:"Collected at regular intervals",id:"collected-at-regular-intervals",level:3},{value:"Collected at data collection sending",id:"collected-at-data-collection-sending",level:3},{value:"Collected at database closure and data collection sending",id:"collected-at-database-closure-and-data-collection-sending",level:3},{value:"Collected every time PHP execute is called",id:"collected-every-time-php-execute-is-called",level:3},{value:"Collected at client connection",id:"collected-at-client-connection",level:3},{value:"O\xf9 sont-elles stock\xe9es et envoy\xe9es ?",id:"o\xf9-sont-elles-stock\xe9es-et-envoy\xe9es-",level:2},{value:"D\xe9sactiver la collecte de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es",id:"d\xe9sactiver-la-collecte-de-donn\xe9es-dans-les-applications-clientserveur-g\xe9n\xe9r\xe9es",level:2}],m={toc:u};function p(t){var{components:e}=t,i=r(t,["components"]);return(0,n.kt)("wrapper",l({},m,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pour nous aider \xe0 am\xe9liorer sans cesse nos produits, nous collectons automatiquement des donn\xe9es concernant les statistiques d'utilisation des applications 4D Server. Les donn\xe9es collect\xe9es sont totalement anonymes et leur transfert n'a aucun impact sur l'exp\xe9rience utilisateur."),(0,n.kt)("p",null,"Cette page explique :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"what information is collected,"),(0,n.kt)("li",{parentName:"ul"},"where information is stored and when it is sent to 4D,"),(0,n.kt)("li",{parentName:"ul"},"comment d\xe9sactiver la collecte automatique de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es.")),(0,n.kt)("h2",l({},{id:"informations-collect\xe9es"}),"Informations collect\xe9es"),(0,n.kt)("p",null,"Les donn\xe9es sont collect\xe9es lors des \xe9v\xe9nements suivants :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"database startup,"),(0,n.kt)("li",{parentName:"ul"},"fermeture de la base de donn\xe9es,"),(0,n.kt)("li",{parentName:"ul"},"web server startup,"),(0,n.kt)("li",{parentName:"ul"},"php execution,"),(0,n.kt)("li",{parentName:"ul"},"client connection,"),(0,n.kt)("li",{parentName:"ul"},"data collection sending.")),(0,n.kt)("p",null,"Some data is also collected at regular intervals."),(0,n.kt)("h3",l({},{id:"collected-at-database-startup"}),"Collected at database startup"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"CPU"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nom, type et vitesse du processeur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"numberOfCores"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre total de c\u0153urs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"memory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Taille de la m\xe9moire (en octets) disponible sur la machine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"system"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Version du syst\xe8me d'exploitation et num\xe9ro de version")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"headless"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application fonctionne en mode headless")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"version"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Num\xe9ro de version de l'application 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"buildNumber"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Num\xe9ro de build de l'application 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"license"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nom commercial et description des licences des produits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isRosetta"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uniqueID"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Unique ID of the 4D Server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text (hashed string)"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Identifiant unique associ\xe9 \xe0 la base de donn\xe9es (",(0,n.kt)("em",{parentName:"td"},"Hachage par roulement polynomial du nom de la base de donn\xe9es"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataFileSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Taille du fichier de donn\xe9es en octets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexesSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Taille des index en octets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Taille du cache en octets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingLegacyNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si l'ancienne couche r\xe9seau est utilis\xe9e pour le serveur d'application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingQUICNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the database uses the QUIC network layer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"encryptedConnections"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if client/server connections are encrypted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"encrypted"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Vrai si le fichier de donn\xe9es est chiffr\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"compiled"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application est compil\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isEngined"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application est fusionn\xe9e avec 4D Volume Desktop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"projectMode"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si l'application est un projet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mobile"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Informations sur les sessions mobiles")))),(0,n.kt)("h3",l({},{id:"collected-at-web-server-startup-and-data-collection-sending"}),"Collected at web server startup and data collection sending"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webServer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'"started":true if the web server is starting or started')))),(0,n.kt)("h3",l({},{id:"collected-at-regular-intervals"}),"Collected at regular intervals"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumNumberOfWebProcesses"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Maximum number of simultaneous web processes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedPhysicalMemory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Maximum use of physical memory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedVirtualMemory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Maximum use of virtual memory")))),(0,n.kt)("h3",l({},{id:"collected-at-data-collection-sending"}),"Collected at data collection sending"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uptime"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Temps \xe9coul\xe9 (en secondes) depuis l'ouverture de la base de donn\xe9es 4D locale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes read from cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes missed from cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of reads in the cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of reads missed in the cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes read in the data file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes written in the data file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of reads in the data file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of writes in the data file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes read in the index file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of bytes written in the index file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of reads in the index file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of writes in the index file")))),(0,n.kt)("h3",l({},{id:"collected-at-database-closure-and-data-collection-sending"}),"Collected at database closure and data collection sending"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverHits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of hits on the web server during the data collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"restHits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of hits on the REST server during the data collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesIn"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Bytes received by the web server during the data collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesOut"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Bytes sent by the web server during the data collection")))),(0,n.kt)("h3",l({},{id:"collected-every-time-php-execute-is-called"}),"Collected every time PHP execute is called"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"phpCall"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number of calls to ",(0,n.kt)("inlineCode",{parentName:"td"},"PHP execute"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"externalPHP"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True if the client performs a call to ",(0,n.kt)("inlineCode",{parentName:"td"},"PHP execute")," and uses its own version of php")))),(0,n.kt)("h3",l({},{id:"collected-at-client-connection"}),"Collected at client connection"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Data"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximum4DClientConnections"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Maximum number of 4D Client connections to the server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"connectionSystems"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Client OS without the build number (in parenthesis) and number of clients using it")))),(0,n.kt)("h2",l({},{id:"o\xf9-sont-elles-stock\xe9es-et-envoy\xe9es-"}),"O\xf9 sont-elles stock\xe9es et envoy\xe9es ?"),(0,n.kt)("p",null,"Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page485.html"}),"active 4D folder"),", i.e.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sous Windows : ",(0,n.kt)("inlineCode",{parentName:"li"},"Users\\[userName]\\AppData\\Roaming\\4D Server")),(0,n.kt)("li",{parentName:"ul"},"sous macOS : ",(0,n.kt)("inlineCode",{parentName:"li"},"/Users/[userName]/Library/ApplicationSupport/4D Server"))),(0,n.kt)("p",null,"Une fois par semaine, le fichier est automatiquement envoy\xe9 par le r\xe9seau \xe0 4D. Le fichier est ensuite supprim\xe9 du dossier 4D actif."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(32756).Z,width:"1261",height:"398"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si le fichier n'a pas pu \xeatre envoy\xe9 pour une raison quelconque, il est n\xe9anmoins supprim\xe9 et aucun message d'erreur n'est affich\xe9 c\xf4t\xe9 4D Server.")),(0,n.kt)("p",null,"Le fichier est envoy\xe9 au serveur \xe0 l'adresse suivante : ",(0,n.kt)("inlineCode",{parentName:"p"},"https://dcollector.4d.com")," (ip : 195.68.52.83)."),(0,n.kt)("h2",l({},{id:"d\xe9sactiver-la-collecte-de-donn\xe9es-dans-les-applications-clientserveur-g\xe9n\xe9r\xe9es"}),"D\xe9sactiver la collecte de donn\xe9es dans les applications client/serveur g\xe9n\xe9r\xe9es"),(0,n.kt)("p",null,"Vous pouvez d\xe9sactiver la collecte automatique de donn\xe9es dans ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/fr/Desktop/building#clientserver-page"}),"les applications client/serveur g\xe9n\xe9r\xe9es"),"."),(0,n.kt)("p",null,"Pour d\xe9sactiver la collecte, passez la valeur ",(0,n.kt)("strong",{parentName:"p"},"False")," \xe0 la cl\xe9 ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ServerDataCollection"))," dans le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"buildApp.4DSettings")," , utilis\xe9 pour construire l'application client/serveur."))}p.isMDXComponent=!0},32756:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"}}]);