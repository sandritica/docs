"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76332],{603905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(667294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(b,s(s({ref:a},c),{},{components:t})):r.createElement(b,s({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},887631:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(667294);var r=t(603905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const s={id:"webServer",slug:"overview",title:"Servidor Web"},i=void 0,l={unversionedId:"WebServer/webServer",id:"version-20-R5/WebServer/webServer",title:"Servidor Web",description:"4D en modo local y remoto y 4D Server incluyen un motor de servidor web (tambi\xe9n conocido como servidor http) que le permite dise\xf1ar y publicar poderosas aplicaciones web que pueden aprovechar al m\xe1ximo sus bases de datos 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/WebServer/webServer.md",sourceDirName:"WebServer",slug:"/WebServer/overview",permalink:"/docs/es/WebServer/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"webServer",slug:"overview",title:"Servidor Web"},sidebar:"docs",previous:{title:"Web Applications",permalink:"/docs/es/category/web-applications"},next:{title:"Configuraci\xf3n",permalink:"/docs/es/WebServer/webServerConfig"}},p={},c=[{value:"F\xe1cil de supervisar",id:"f\xe1cil-de-supervisar",level:2},{value:"Listo para usar",id:"listo-para-usar",level:2},{value:"Seguridad",id:"seguridad",level:2},{value:"Sesiones usuario",id:"sesiones-usuario",level:2},{value:"Punto de acceso para las peticiones REST",id:"punto-de-acceso-para-las-peticiones-rest",level:2},{value:"Extensi\xf3n de los par\xe1metros",id:"extensi\xf3n-de-los-par\xe1metros",level:2},{value:"Plantillas y URLs",id:"plantillas-y-urls",level:2},{value:"M\xe9todos base dedicados",id:"m\xe9todos-base-dedicados",level:2}],d={toc:c};function u(e){var{components:a}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D en modo local y remoto y 4D Server incluyen un motor de servidor web (tambi\xe9n conocido como servidor http) que le permite dise\xf1ar y publicar poderosas aplicaciones web que pueden aprovechar al m\xe1ximo sus bases de datos 4D."),(0,r.kt)("h2",n({},{id:"f\xe1cil-de-supervisar"}),"F\xe1cil de supervisar"),(0,r.kt)("p",null,"Puede iniciar o detener la publicaci\xf3n de la aplicaci\xf3n web en cualquier momento. Para ello, basta con seleccionar un comando del men\xfa o ejecutar una sola l\xednea de c\xf3digo."),(0,r.kt)("p",null,"Supervisar el servidor web 4D es f\xe1cil y se puede hacer utilizando la ventana de administraci\xf3n de 4D Server o a trav\xe9s de ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/webServerAdmin#administration-urls"})," URLs especiales"),"."),(0,r.kt)("h2",n({},{id:"listo-para-usar"}),"Listo para usar"),(0,r.kt)("p",null,"El servidor web 4D crea autom\xe1ticamente una carpeta ra\xedz y una p\xe1gina de inicio por defecto, disponibles inmediatamente."),(0,r.kt)("h2",n({},{id:"seguridad"}),"Seguridad"),(0,r.kt)("p",null,"La seguridad de los datos est\xe1 presente en todas las etapas de las implementaciones del servidor web 4D. Los niveles de seguridad son escalables y la configuraci\xf3n por defecto suele seleccionar las opciones m\xe1s seguras. La seguridad del servidor web 4D se basa en los elementos siguientes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Extended support of the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/Admin/tls"}),(0,r.kt)("strong",{parentName:"a"},"TLS Protocol (HTTPS)")),",")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Authentication"),": flexible and customizable ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/authentication"}),"authentication features")," based upon built-it settings as well as fallback database methods (",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/authentication#on-web-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," for the web server and ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,r.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))," for the REST server),")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Control de los contenidos expuestos"),": s\xf3lo los elementos que exponga expl\xedcitamente pueden estar disponibles desde peticiones web directaso peticiones REST. Debe declarar:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/WebServer/templates#allowing-project-methods"}),"Los m\xe9todos proyecto")," expuestos a trav\xe9s de peticiones HTTP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Las funciones ORDA")," expuestas a trav\xe9s de peticiones REST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/REST/configuration#exposing-tables-and-fields"}),"Tablas y campos")," que no quiere que est\xe9n disponibles para las peticiones REST."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sandboxing")," mediante la definici\xf3n de una ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#root-folder"}),"carpeta HTML ra\xedz")," por defecto,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Control del uso de los recursos del servidor")," (por ejemplo, v\xeda la opci\xf3n ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#maximum-concurrent-web-processes"}),"m\xe1ximo de procesos web concurrentes"),")."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,r.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"Gu\xeda de seguridad de 4D"),".")),(0,r.kt)("h2",n({},{id:"sesiones-usuario"}),"Sesiones usuario"),(0,r.kt)("p",null,"El servidor web 4D incluye completas funcionalidades autom\xe1ticas para gestionar f\xe1cilmente las ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/sessions"}),"sesiones web")," (sesiones de usuario) basadas en cookies."),(0,r.kt)("h2",n({},{id:"punto-de-acceso-para-las-peticiones-rest"}),"Punto de acceso para las peticiones REST"),(0,r.kt)("p",null,"El servidor web 4D permite acceder a los datos almacenados en sus aplicaciones 4D a trav\xe9s de peticiones REST. Las peticiones REST ofrecen acceso directo a cualquier operaci\xf3n de la base de datos, como a\xf1adir, leer, editar, ordenar o buscar datos."),(0,r.kt)("p",null,"Las peticiones REST se detallan en la secci\xf3n ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/gettingStarted"}),"Servidor REST"),"."),(0,r.kt)("h2",n({},{id:"extensi\xf3n-de-los-par\xe1metros"}),"Extensi\xf3n de los par\xe1metros"),(0,r.kt)("p",null,"La configuraci\xf3n del servidor web 4D se define a trav\xe9s de un amplio conjunto de ajustes a nivel de aplicaci\xf3n que tambi\xe9n pueden personalizarse para la sesi\xf3n utilizando las propiedades del objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"webServer")," o el comando ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB SET OPTION"),"."),(0,r.kt)("h2",n({},{id:"plantillas-y-urls"}),"Plantillas y URLs"),(0,r.kt)("p",null,"El servidor web 4D soporta el acceso a los datos almacenados en sus aplicaciones 4D a trav\xe9s de p\xe1ginas de plantillas y URLs espec\xedficas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Las p\xe1ginas de plantillas contienen ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/templates"}),"etiquetas especiales")," que inician el procesamiento del servidor web en el momento en que se env\xedan a los navegadores.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/httpRequests"}),"Las URLs espec\xedficas")," permiten llamar a 4D para ejecutar cualquier acci\xf3n; estas URLs tambi\xe9n pueden utilizarse como acciones de formulario para activar el procesamiento cuando el usuario publica formularios HTML."))),(0,r.kt)("h2",n({},{id:"m\xe9todos-base-dedicados"}),"M\xe9todos base dedicados"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", as\xed como tambi\xe9n los m\xe9todos base",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," son los puntos de entrada de las peticiones en el servidor web; se pueden utilizar para evaluar y enrutar todo tipo de petici\xf3n."))}u.isMDXComponent=!0}}]);