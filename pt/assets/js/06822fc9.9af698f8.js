"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64793],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(a),c=n,N=u["".concat(i,".").concat(c)]||u[c]||p[c]||l;return a?r.createElement(N,o(o({ref:t},s),{},{components:a})):r.createElement(N,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},750247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});a(667294);var r=a(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"data-collect",title:"Recolha de dados"},d=void 0,i={unversionedId:"Admin/data-collect",id:"version-20-R5/Admin/data-collect",title:"Recolha de dados",description:"Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estat\xedsticas de usu\xe1rio nas aplica\xe7\xf5es 4D Server Dados completados s\xe3o an\xf4nimos e dados s\xe3o transferidos sem ter impacto na experi\xeancia de usu\xe1rio. Dados completados s\xe3o an\xf4nimos e dados s\xe3o transferidos sem ter impacto na experi\xeancia de usu\xe1rio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/pt/Admin/data-collect",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"data-collect",title:"Recolha de dados"},sidebar:"docs",previous:{title:"Restaurar um backup",permalink:"/docs/pt/Backup/restore"},next:{title:"Extens\xf5es",permalink:"/docs/pt/Extensions/overview"}},m={},s=[{value:"Informa\xe7\xe3o coletada",id:"informa\xe7\xe3o-coletada",level:2},{value:"Recolhidos no arranque da base de dados",id:"recolhidos-no-arranque-da-base-de-dados",level:3},{value:"Recolhidos no arranque do servidor Web e no envio da recolha de dados",id:"recolhidos-no-arranque-do-servidor-web-e-no-envio-da-recolha-de-dados",level:3},{value:"Recolha a intervalos regulares",id:"recolha-a-intervalos-regulares",level:3},{value:"Recolhido no envio da recolha de dados",id:"recolhido-no-envio-da-recolha-de-dados",level:3},{value:"Recolhidos aquando do encerramento da base de dados e do envio da recolha de dados",id:"recolhidos-aquando-do-encerramento-da-base-de-dados-e-do-envio-da-recolha-de-dados",level:3},{value:"Recolhido sempre que PHP execute \xe9 chamado",id:"recolhido-sempre-que-php-execute-\xe9-chamado",level:3},{value:"Recolhido na liga\xe7\xe3o do cliente",id:"recolhido-na-liga\xe7\xe3o-do-cliente",level:3},{value:"Onde \xe9 armazenado e enviado?",id:"onde-\xe9-armazenado-e-enviado",level:2},{value:"Desativar a cole\xe7\xe3o de dados em aplica\xe7\xf5es cliente/servidor geradas",id:"desativar-a-cole\xe7\xe3o-de-dados-em-aplica\xe7\xf5es-clienteservidor-geradas",level:2}],p={toc:s};function u(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)("wrapper",n({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Para ajudar a tornar os produtos melhores, automaticamente coletamos dados referentes a estat\xedsticas de usu\xe1rio nas aplica\xe7\xf5es 4D Server Dados completados s\xe3o an\xf4nimos e dados s\xe3o transferidos sem ter impacto na experi\xeancia de usu\xe1rio. Dados completados s\xe3o an\xf4nimos e dados s\xe3o transferidos sem ter impacto na experi\xeancia de usu\xe1rio."),(0,r.kt)("p",null,"Esta p\xe1gina explica:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"que informa\xe7\xe3o \xe9 coletada,"),(0,r.kt)("li",{parentName:"ul"},"onde a informa\xe7\xe3o \xe9 armazenada e quando \xe9 enviada a 4D,"),(0,r.kt)("li",{parentName:"ul"},"como desativar a cole\xe7\xe3o de dados autom\xe1tica em aplica\xe7\xf5es cliente/servidor")),(0,r.kt)("h2",n({},{id:"informa\xe7\xe3o-coletada"}),"Informa\xe7\xe3o coletada"),(0,r.kt)("p",null,"Dados s\xe3o coletados durante os eventos abaixo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arranque da base de dados,"),(0,r.kt)("li",{parentName:"ul"},"fechamento de banco de dados,"),(0,r.kt)("li",{parentName:"ul"},"in\xedcio do servidor Web,"),(0,r.kt)("li",{parentName:"ul"},"execu\xe7\xe3o php,"),(0,r.kt)("li",{parentName:"ul"},"liga\xe7\xe3o cliente,"),(0,r.kt)("li",{parentName:"ul"},"envio da recolha de dados.")),(0,r.kt)("p",null,"Alguns dados s\xe3o tamb\xe9m recolhidos a intervalos regulares."),(0,r.kt)("h3",n({},{id:"recolhidos-no-arranque-da-base-de-dados"}),"Recolhidos no arranque da base de dados"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CPU"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nome, tipo, e velocidade do processador")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"numberOfCores"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero total de n\xfacleos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"memory"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Volume de armazenamento de mem\xf3ria (em bytes) dispon\xedvel na m\xe1quina")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"system"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Vers\xe3o do sistema operativo e n\xfamero de constru\xe7\xe3o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"headless"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Verdadeiro se a aplica\xe7\xe3o estiver a correr em modo sem cabe\xe7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"version"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero da vers\xe3o da aplica\xe7\xe3o 4D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"buildNumber"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero da vers\xe3o da aplica\xe7\xe3o 4D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"licen\xe7a"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nome comercial e descri\xe7\xe3o das licen\xe7as do produto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"isRosetta"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True se 4D for emulado atrav\xe9s do Rosetta no macOS, False caso contr\xe1rio (n\xe3o emulado ou no Windows).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"uniqueID"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"ID \xfanico do 4D Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Texto (cadeia de caracteres com hash)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Identifica\xe7\xe3o \xfanica associada \xe0 base de dados (",(0,r.kt)("em",{parentName:"td"},"Polin\xf4mio Rolling hash do nome da base de dados"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"dataFileSize"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tamanho do arquivo de dados em bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"indexesSize"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tamanho do \xedndice em bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cacheSize"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tamanho da cache em bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"usingLegacyNetworkLayer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Verdadeiro se a usar a camada de rede herdada para o servidor de aplica\xe7\xf5es")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"usingQUICNetworkLayer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True se a base de dados utilizar a camada de rede QUIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"encryptedConnections"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True se as liga\xe7\xf5es cliente/servidor forem encriptadas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"encrypted"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True se o arquivo de dados estiver criptografado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"compiled"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Verdadeiro se a aplica\xe7\xe3o for compilada")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"isEngined"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Verdadeiro se a aplica\xe7\xe3o for fundida com o Volume Desktop 4D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"projectMode"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Verdadeiro se a aplica\xe7\xe3o for compilada")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"mobile"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Informa\xe7\xe3o sobre sess\xf5es m\xf3veis")))),(0,r.kt)("h3",n({},{id:"recolhidos-no-arranque-do-servidor-web-e-no-envio-da-recolha-de-dados"}),"Recolhidos no arranque do servidor Web e no envio da recolha de dados"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"webServer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"started":true se o servidor Web estiver a arrancar ou iniciado')))),(0,r.kt)("h3",n({},{id:"recolha-a-intervalos-regulares"}),"Recolha a intervalos regulares"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"maximumNumberOfWebProcesses"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero m\xe1ximo de processos Web simult\xe2neos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"maximumUsedPhysicalMemory"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Utiliza\xe7\xe3o m\xe1xima da mem\xf3ria f\xedsica")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"maximumUsedVirtualMemory"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Utiliza\xe7\xe3o m\xe1xima da mem\xf3ria virtual")))),(0,r.kt)("h3",n({},{id:"recolhido-no-envio-da-recolha-de-dados"}),"Recolhido no envio da recolha de dados"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"uptime"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Tempo decorrido (em segundos) desde que a base de dados 4D local foi aberta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cacheReadBytes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de bytes lidos da cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cacheMissBytes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de bytes perdidos na cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cacheReadCount"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de leituras na cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cacheMissCount"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de leituras falhadas na cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"dataSegment1.diskReadBytes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de bytes lidos no ficheiro de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"dataSegment1.diskWriteBytes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de bytes escritos no ficheiro de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"dataSegment1.diskReadCount"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de leituras no ficheiro de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"dataSegment1.diskWriteCount"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de escritas no ficheiro de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"indexSegment.diskReadBytes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de bytes lidos no ficheiro de \xedndice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"indexSegment.diskWriteBytes"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de bytes escritos no ficheiro de \xedndice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"indexSegment.diskReadCount"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de leituras no ficheiro \xedndice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"indexSegment.diskWriteCount"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de escritas no ficheiro de \xedndice")))),(0,r.kt)("h3",n({},{id:"recolhidos-aquando-do-encerramento-da-base-de-dados-e-do-envio-da-recolha-de-dados"}),"Recolhidos aquando do encerramento da base de dados e do envio da recolha de dados"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"webserverHits"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de acessos ao servidor Web durante a recolha de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"restHits"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de acessos ao servidor REST durante a recolha de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"webserverBytesIn"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Bytes recebidos pelo servidor Web durante a recolha de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"webserverBytesOut"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Bytes enviados pelo servidor Web durante a recolha de dados")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"qodly.webforms"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero de formul\xe1rios web Qodly")))),(0,r.kt)("h3",n({},{id:"recolhido-sempre-que-php-execute-\xe9-chamado"}),"Recolhido sempre que PHP execute \xe9 chamado"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"phpCall"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xf9mero de llamadas a ",(0,r.kt)("inlineCode",{parentName:"td"},"PHP execute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"externalPHP"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True se o cliente efetuar uma chamada para ",(0,r.kt)("inlineCode",{parentName:"td"},"PHP execute")," e utilizar a sua pr\xf3pria vers\xe3o de php")))),(0,r.kt)("h3",n({},{id:"recolhido-na-liga\xe7\xe3o-do-cliente"}),"Recolhido na liga\xe7\xe3o do cliente"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Dados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Notas"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"maximum4DClientConnections"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"N\xfamero m\xe1ximo de liga\xe7\xf5es 4D Client ao servidor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"connectionSystems"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SO do cliente sem o n\xfamero de compila\xe7\xe3o (entre par\xeantesis) e n\xfamero de clientes que o utilizam")))),(0,r.kt)("h2",n({},{id:"onde-\xe9-armazenado-e-enviado"}),"Onde \xe9 armazenado e enviado?"),(0,r.kt)("p",null,"Os dados coletados s\xe3o escritos em um arquivo de texto (formato JSON) por banco de dados quando 4D Servidor abandona. O ficheiro \xe9 armazenado dentro da ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page485.html"}),"pasta 4D ativa"),", ou seja:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"en Windows:\n",(0,r.kt)("inlineCode",{parentName:"li"},"Users\\[userName]\\AppData\\Roaming\\4D Server")),(0,r.kt)("li",{parentName:"ul"},"em macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"/Users/[userName]/Library/ApplicationSupport/4D Server"))),(0,r.kt)("p",null,"Uma vez por semana, o ficheiro \xe9 automaticamente enviado atrav\xe9s da rede para 4D. O arquivo \xe9 ent\xe3o apagado da pasta 4D activa."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(794092).Z,width:"1261",height:"398"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Se o arquivo n\xe3o p\xf4de ser enviado por algum motivo, \xe9, no entanto, apagado e n\xe3o \xe9 exibida nenhuma mensagem de erro no lado do Servidor 4D.")),(0,r.kt)("p",null,"O ficheiro \xe9 enviado para o seguinte endere\xe7o de servidor: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://dcollector.4d.com")," (ip: 195.68.52.83)."),(0,r.kt)("h2",n({},{id:"desativar-a-cole\xe7\xe3o-de-dados-em-aplica\xe7\xf5es-clienteservidor-geradas"}),"Desativar a cole\xe7\xe3o de dados em aplica\xe7\xf5es cliente/servidor geradas"),(0,r.kt)("p",null,"Pode desactivar a recolha autom\xe1tica de dados em ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/Desktop/building#clientserver-page"}),"aplica\xe7\xf5es constru\xeddas cliente/servidor"),"."),(0,r.kt)("p",null,"Para desativar a cole\xe7\xe3o, passe o valor ",(0,r.kt)("strong",{parentName:"p"},"False")," para a chave ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"ServerDataCollection"))," no arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"buildApp.4DSettings"),", utilizado para construir a aplica\xe7\xe3o cliente/servidor."))}u.isMDXComponent=!0},794092:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"}}]);