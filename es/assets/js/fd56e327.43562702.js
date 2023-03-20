"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9877],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?t.createElement(k,r(r({ref:a},d),{},{components:n})):t.createElement(k,r({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8862:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});n(67294);var t=n(3905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={id:"datastores",title:"Utilizar un almac\xe9n de datos remoto"},i=void 0,l={unversionedId:"ORDA/datastores",id:"version-19/ORDA/datastores",title:"Utilizar un almac\xe9n de datos remoto",description:"Un datastore expuesto en una aplicaci\xf3n 4D se puede acceder simult\xe1neamente a trav\xe9s de diferentes clientes:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/es/19/ORDA/datastores",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"datastores",title:"Utilizar un almac\xe9n de datos remoto"},sidebar:"docs",previous:{title:"Trabajar con los datos",permalink:"/docs/es/19/ORDA/entities"},next:{title:"Glosario",permalink:"/docs/es/19/ORDA/glossary"}},c={},d=[{value:"Apertura de las sesiones",id:"apertura-de-las-sesiones",level:2},{value:"Visualizaci\xf3n de las sesiones",id:"visualizaci\xf3n-de-las-sesiones",level:2},{value:"Bloqueo y transacciones",id:"bloqueo-y-transacciones",level:2},{value:"Cierre de las sesiones",id:"cierre-de-las-sesiones",level:2}],u={toc:d};function p(e){var{components:a}=e,r=s(e,["components"]);return(0,t.kt)("wrapper",o({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Un ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/19/ORDA/dsmapping#datastore"}),"datastore")," expuesto en una aplicaci\xf3n 4D se puede acceder simult\xe1neamente a trav\xe9s de diferentes clientes:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Las aplicaciones 4D remotas que utilizan ORDA para acceder al almac\xe9n de datos principal con el comando ",(0,t.kt)("inlineCode",{parentName:"li"},"ds"),". Tenga en cuenta que la aplicaci\xf3n 4D remota puede seguir accediendo a la base de datos en modo cl\xe1sico. Estos accesos son gestionados por el ",(0,t.kt)("strong",{parentName:"li"},"servidor de aplicaciones"),"."),(0,t.kt)("li",{parentName:"ul"},"Otras aplicaciones 4D (4D remote, 4D Server) abriendo una sesi\xf3n en el datastore remoto a trav\xe9s del comando ",(0,t.kt)("inlineCode",{parentName:"li"},"Open datastore"),". Estos accesos son gestionados por el ",(0,t.kt)("strong",{parentName:"li"},"servidor HTTP REST"),"."),(0,t.kt)("li",{parentName:"ul"},"Las peticiones 4D for iOS para actualizar las aplicaciones iOS. Estos accesos son gestionados por el ",(0,t.kt)("strong",{parentName:"li"},"servidor HTTP"),".")),(0,t.kt)("p",null,"Cuando se trabaja con un datastore remoto referenciado a trav\xe9s de llamadas al comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Open datastore"),", la conexi\xf3n entre los procesos que efect\xfaan la petici\xf3n y el datastore remoto se gestiona a trav\xe9s de sesiones."),(0,t.kt)("h2",o({},{id:"apertura-de-las-sesiones"}),"Apertura de las sesiones"),(0,t.kt)("p",null,"Cuando una aplicaci\xf3n 4D (",(0,t.kt)("em",{parentName:"p"},"es decir")," un proceso) abre un datastore externo mediante el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Open datastore"),", se crea una sesi\xf3n en el datastore remoto para gestionar la conexi\xf3n. Esta sesi\xf3n se identifica utilizando un ID de sesi\xf3n interno que se asocia al ",(0,t.kt)("inlineCode",{parentName:"p"},"localID")," en la aplicaci\xf3n 4D. Esta sesi\xf3n gestiona autom\xe1ticamente el acceso a los datos, a las selecciones de entidades o a las entidades."),(0,t.kt)("p",null,"El ",(0,t.kt)("inlineCode",{parentName:"p"},"localID")," es local a la m\xe1quina que se conecta al datastore remoto, lo que significa:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Si otros procesos de la misma aplicaci\xf3n necesitan acceder al mismo datastore remoto, pueden utilizar el mismo ",(0,t.kt)("inlineCode",{parentName:"li"},"localID")," y, de este modo, compartir la misma sesi\xf3n."),(0,t.kt)("li",{parentName:"ul"},"Si otro proceso de la misma aplicaci\xf3n abre el mismo datastore remoto pero con otro ",(0,t.kt)("inlineCode",{parentName:"li"},"localID"),", crear\xe1 una nueva sesi\xf3n en el datastore remoto."),(0,t.kt)("li",{parentName:"ul"},"Si otra m\xe1quina se conecta al mismo datastore remoto con el mismo ",(0,t.kt)("inlineCode",{parentName:"li"},"localID"),", crear\xe1 otra sesi\xf3n con otra cookie.")),(0,t.kt)("p",null,"Estos principios se ilustran en los gr\xe1ficos siguientes:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(73628).Z,width:"962",height:"719"})),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Para las sesiones abiertas por peticiones REST, consulte ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/19/REST/authUsers"}),"Usuarios y sesiones"),".")),(0,t.kt)("h2",o({},{id:"visualizaci\xf3n-de-las-sesiones"}),"Visualizaci\xf3n de las sesiones"),(0,t.kt)("p",null,"Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administraci\xf3n de 4D Server:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'nombre: "REST Handler: \\<process name',">",'"'),(0,t.kt)("li",{parentName:"ul"},"tipo: tipo Worker Server HTTP"),(0,t.kt)("li",{parentName:"ul"},"sesi\xf3n: el nombre de la sesi\xf3n es el nombre de usuario que se pasa al comando Open datastore.")),(0,t.kt)("p",null,"En el siguiente ejemplo, se est\xe1n ejecutando dos procesos para la misma sesi\xf3n:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(70641).Z,width:"1402",height:"708"})),(0,t.kt)("h2",o({},{id:"bloqueo-y-transacciones"}),"Bloqueo y transacciones"),(0,t.kt)("p",null,"Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesi\xf3n (ver ",(0,t.kt)("a",o({parentName:"li"},{href:"/docs/es/19/ORDA/entities#entity-locking"}),"Bloqueo de entidades"),"). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria."),(0,t.kt)("li",{parentName:"ul"},"Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almac\xe9n de datos remoto mediante las funciones ",(0,t.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()")," y ",(0,t.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()"),". No afectan a otros almacenes de datos."),(0,t.kt)("li",{parentName:"ul"},"Los comandos cl\xe1sicos del lenguaje 4D (",(0,t.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") s\xf3lo se aplican al datastore principal (devuelto por ",(0,t.kt)("inlineCode",{parentName:"li"},"ds"),"). Si una entidad de un datastore remoto es retenida por una transacci\xf3n en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesi\xf3n."),(0,t.kt)("li",{parentName:"ul"},"Los bloqueos en las entidades son eliminados y las transacciones son anuladas:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"cuando el proceso es eliminado."),(0,t.kt)("li",{parentName:"ul"},"cuando la sesi\xf3n se cierra en el servidor"),(0,t.kt)("li",{parentName:"ul"},"cuando la sesi\xf3n es terminada desde la ventana de administraci\xf3n del servidor.")))),(0,t.kt)("h2",o({},{id:"cierre-de-las-sesiones"}),"Cierre de las sesiones"),(0,t.kt)("p",null,"4D cierra autom\xe1ticamente una sesi\xf3n cuando no hay actividad durante el tiempo de espera. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el par\xe1metro ",(0,t.kt)("inlineCode",{parentName:"p"},"connectionInfo")," del comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Open datastore"),"."),(0,t.kt)("p",null,"Si se env\xeda una solicitud al almac\xe9n de datos remoto despu\xe9s de haber cerrado la sesi\xf3n, \xe9sta se vuelve a crear autom\xe1ticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesi\xf3n en cuanto a bloqueos y transacciones (ver arriba)."))}p.isMDXComponent=!0},70641:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},73628:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);