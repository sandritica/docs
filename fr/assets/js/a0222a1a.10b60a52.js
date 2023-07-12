"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(r),b=a,c=m["".concat(u,".").concat(b)]||m[b]||d[b]||l;return r?n.createElement(c,p(p({ref:t},s),{},{components:r})):n.createElement(c,p({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<l;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"webServerObject",title:"Objet Serveur Web"},i=void 0,u={unversionedId:"WebServer/webServerObject",id:"version-20/WebServer/webServerObject",title:"Objet Serveur Web",description:"Un projet 4D peut d\xe9marrer et surveiller un serveur Web pour l'application principale (h\xf4te) ainsi que chaque composant h\xe9berg\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/fr/20/WebServer/webServerObject",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"webServerObject",title:"Objet Serveur Web"},sidebar:"docs",previous:{title:"Administration",permalink:"/docs/fr/20/WebServer/webServerAdmin"},next:{title:"D\xe9veloppement Web",permalink:"/docs/fr/20/WebServer/gettingStarted"}},o={},s=[{value:"Instancier un objet serveur web",id:"instancier-un-objet-serveur-web",level:2},{value:"Fonctions du serveur web",id:"fonctions-du-serveur-web",level:2},{value:"Propri\xe9t\xe9s du serveur web",id:"propri\xe9t\xe9s-du-serveur-web",level:2},{value:"Port\xe9e des commandes 4D Web",id:"port\xe9e-des-commandes-4d-web",level:2}],d={toc:s};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un projet 4D peut d\xe9marrer et surveiller un serveur Web pour l'application principale (h\xf4te) ainsi que chaque composant h\xe9berg\xe9."),(0,n.kt)("p",null,"Par exemple, si vous avez install\xe9 deux composants dans votre application principale, vous pouvez d\xe9marrer et contr\xf4ler jusqu'\xe0 trois serveurs Web ind\xe9pendants \xe0 partir de votre application :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"un serveur web pour l'application h\xf4te,"),(0,n.kt)("li",{parentName:"ul"},"un serveur web pour le composant n\xb01,"),(0,n.kt)("li",{parentName:"ul"},"un serveur web pour le composant n\xb02.")),(0,n.kt)("p",null,"En dehors de la m\xe9moire, il n'y a pas de limite au nombre de composants et donc, de serveurs Web, pouvant \xeatre rattach\xe9s \xe0 un seul projet d'application 4D."),(0,n.kt)("p",null,"Chaque serveur web 4D, y compris le serveur web de l'application principale, est expos\xe9 comme un ",(0,n.kt)("strong",{parentName:"p"},"objet")," sp\xe9cifique de la classe ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.WebServer"),". Une fois instanci\xe9, un objet serveur Web peut \xeatre g\xe9r\xe9 depuis l'application courante ou depuis n'importe quel composant \xe0 l'aide d'un ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass"}),"grand nombre de propri\xe9t\xe9s et de fonctions"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"commandes WEB")," h\xe9rit\xe9es du langage 4D sont prises en charge mais ne peuvent pas s\xe9lectionner le serveur Web auquel elles s'appliquent (voir ci-dessous).")),(0,n.kt)("p",null,"Chaque serveur web (application h\xf4te ou composant) peut \xeatre utilis\xe9 dans son propre contexte, notamment :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"les appels vers la m\xe9thode base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," et ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection")),(0,n.kt)("li",{parentName:"ul"},"le traitement des balises 4D et les appels de m\xe9thodes,"),(0,n.kt)("li",{parentName:"ul"},"sessions web et gestion du protocole TLS.")),(0,n.kt)("p",null,"Cela vous permet de d\xe9velopper des composants ind\xe9pendants et des fonctionnalit\xe9s qui accompagnent leurs propres interfaces Web."),(0,n.kt)("h2",a({},{id:"instancier-un-objet-serveur-web"}),"Instancier un objet serveur web"),(0,n.kt)("p",null,"L'objet serveur Web de l'application h\xf4te (serveur Web par d\xe9faut) est automatiquement charg\xe9 par 4D au d\xe9marrage. Ainsi, si vous \xe9crivez dans un projet nouvellement cr\xe9\xe9 :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$nbSrv:=WEB Server list.length   \n//la valeur de $nbSrv est 1\n")),(0,n.kt)("p",null,"Pour instancier un objet serveur web, appelez la commande ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass#web-server"}),(0,n.kt)("inlineCode",{parentName:"a"},"WEB Server"))," :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"    //cr\xe9er une variable objet de la classe 4D.WebServer\nvar webServer : 4D.WebServer \n    //appeler le serveur Web depuis le contexte courant\nwebServer:=WEB Server  \n\n    //\xe9quivalent \xe0\nwebServer:=WEB Server(Web server database)\n")),(0,n.kt)("p",null,"Si l'application utilise des composants et que vous souhaitez appeler :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"le serveur Web de l'application h\xf4te \xe0 partir d'un composant ou"),(0,n.kt)("li",{parentName:"ul"},"le serveur qui a re\xe7u la requ\xeate (quel que soit le serveur)")),(0,n.kt)("p",null,"vous pouvez \xe9galement utiliser :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var webServer : 4D.WebServer \n    //appler le serveur web h\xf4te depuis un composant  \nwebServer:=WEB Server(Web server host database)  \n    //appeler le serveur web cible\nwebServer:=WEB Server(Web server receiving request)  \n")),(0,n.kt)("h2",a({},{id:"fonctions-du-serveur-web"}),"Fonctions du serveur web"),(0,n.kt)("p",null,"Un ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass#web-server-object"}),"objet de classe Web server")," contient les fonctions suivantes :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Fonctions"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Valeur retourn\xe9e"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/fr/20/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"start()"))),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"settings (objet)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"status (object)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"D\xe9marre le serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/fr/20/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"stop()"))),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Stoppe le serveur web")))),(0,n.kt)("p",null,"Pour d\xe9marrer et arr\xeater un serveur Web, il suffit d'appeler les fonctions ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"start()"))," et ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass#stop"}),(0,n.kt)("inlineCode",{parentName:"a"},"stop()"))," de l'objet serveur Web :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"var $status : Object\n    //pour d\xe9marrer un serveur web avec les param\xe8tres par d\xe9faut\n$status:=webServer.start()\n    //pour d\xe9marrer un serveur web avec des param\xe8tres personnalis\xe9s   \n    //objet $settings contenant des propri\xe9t\xe9s du serveur web\nwebServer.start($settings)\n\n    //pour stopper le serveur web\n$status:=webServer.stop()\n")),(0,n.kt)("h2",a({},{id:"propri\xe9t\xe9s-du-serveur-web"}),"Propri\xe9t\xe9s du serveur web"),(0,n.kt)("p",null,"Un objet serveur Web contient ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass#web-server-object"}),"diverses propri\xe9t\xe9s")," qui configurent le serveur Web."),(0,n.kt)("p",null,"Ces propri\xe9t\xe9s sont d\xe9finies :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"de la fonction ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},".start()"))," (sauf pour les propri\xe9t\xe9s en lecture seule, voir ci-dessous),"),(0,n.kt)("li",{parentName:"ol"},"si elles ne sont pas utilis\xe9es, \xe0 l'aide de la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET OPTION")," (applications h\xf4tes uniquement),"),(0,n.kt)("li",{parentName:"ol"},"si elles ne sont pas utilis\xe9es, dans les param\xe8tres de l'application h\xf4te ou du composant.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si le serveur Web n'est pas d\xe9marr\xe9, les propri\xe9t\xe9s contiennent les valeurs qui seront utilis\xe9es au prochain d\xe9marrage du serveur Web."),(0,n.kt)("li",{parentName:"ul"},"Si le serveur Web est d\xe9marr\xe9, les propri\xe9t\xe9s contiennent les valeurs r\xe9elles utilis\xe9es par le serveur Web (les param\xe8tres par d\xe9faut peuvent avoir \xe9t\xe9 remplac\xe9s par le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"li"},"settings")," de la fonction ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},".start()")),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"isRunning"),", ",(0,n.kt)("em",{parentName:"p"},"name"),", ",(0,n.kt)("em",{parentName:"p"},"openSSLVersion")," et ",(0,n.kt)("em",{parentName:"p"},"perfectForwardSecrecy")," sont des propri\xe9t\xe9s en lecture seule qui ne peuvent pas \xeatre pr\xe9d\xe9finies dans le param\xe8tre objet ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," pour la fonction ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/WebServerClass#start"}),(0,n.kt)("inlineCode",{parentName:"a"},"start()")),".")),(0,n.kt)("h2",a({},{id:"port\xe9e-des-commandes-4d-web"}),"Port\xe9e des commandes 4D Web"),(0,n.kt)("p",null,"Le langage 4D contient ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"plusieurs commandes")," permettant de contr\xf4ler le serveur Web. Cependant, ces commandes sont destin\xe9es \xe0 fonctionner avec un seul serveur Web (par d\xe9faut). Lorsque vous utilisez ces commandes dans le contexte d'objets serveur Web, assurez-vous que leur port\xe9e est appropri\xe9e."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Command"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Port\xe9e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"SET DATABASE PARAMETER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB CLOSE SESSION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET BODY PART")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get body part count")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get Current Session ID")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP BODY")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP HEADER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET OPTION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get server info")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET SESSION EXPIRATION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Get session process count")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET STATISTICS")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB GET VARIABLES")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Is secured connection")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Is server running")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND HTTP REDIRECT")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND RAW DATA")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET HOME PAGE")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET HTTP HEADER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET OPTION")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SET ROOT FOLDER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB START SERVER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB STOP SERVER")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Application h\xf4te du serveur web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB Validate digest")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Serveur Web ayant re\xe7u la requ\xeate")))))}m.isMDXComponent=!0}}]);