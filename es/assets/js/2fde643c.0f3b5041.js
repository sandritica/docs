"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37396],{603905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>m});var n=o(667294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},u=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return o?n.createElement(f,t(t({ref:a},u),{},{components:o})):n.createElement(f,t({ref:a},u))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=o.length,t=new Array(s);t[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,t[1]=i;for(var l=2;l<s;l++)t[l]=o[l];return n.createElement.apply(null,t)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},240949:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>u});o(667294);var n=o(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function s(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const t={id:"overview",title:"Presentaci\xf3n del control de acceso"},i=void 0,c={unversionedId:"Users/overview",id:"version-20-R5/Users/overview",title:"Presentaci\xf3n del control de acceso",description:"Si diferentes personas utilizan una aplicaci\xf3n, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades seg\xfan de los usuarios conectados. Tambi\xe9n es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/es/Users/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"overview",title:"Presentaci\xf3n del control de acceso"},sidebar:"docs",previous:{title:"Access Rights",permalink:"/docs/es/category/access-rights"},next:{title:"Gesti\xf3n de usuarios y grupos 4D",permalink:"/docs/es/Users/editing"}},l={},u=[{value:"Control de acceso en las aplicaciones multiusuario",id:"control-de-acceso-en-las-aplicaciones-multiusuario",level:2},{value:"Control de acceso en las aplicaciones monopuesto",id:"control-de-acceso-en-las-aplicaciones-monopuesto",level:2},{value:"Identificaci\xf3n del usuario",id:"identificaci\xf3n-del-usuario",level:3},{value:"Protecci\xf3n del acceso",id:"protecci\xf3n-del-acceso",level:3},{value:"Privilegios",id:"privilegios",level:4},{value:"Cifrado de datos",id:"cifrado-de-datos",level:4}],d={toc:u};function p(e){var{components:a}=e,o=s(e,["components"]);return(0,n.kt)("wrapper",r({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Si diferentes personas utilizan una aplicaci\xf3n, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades seg\xfan de los usuarios conectados. Tambi\xe9n es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto."),(0,n.kt)("p",null,"La estrategia de control de acceso 4D depende de la configuraci\xf3n de su despliegue:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en las aplicaciones multiusuario, puede confiar en los usuarios y grupos 4D,"),(0,n.kt)("li",{parentName:"ul"},"in single-user applications, user access is controlled through the system session, using commands such as ",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Current system user")),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Consulte la documentaci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"Gu\xeda de seguridad de 4D")," para una visi\xf3n de conjunto de las funciones de seguridad de 4D.")),(0,n.kt)("h2",r({},{id:"control-de-acceso-en-las-aplicaciones-multiusuario"}),"Control de acceso en las aplicaciones multiusuario"),(0,n.kt)("p",null,"Las aplicaciones multiusuario se despliegan con 4D Server. Incluyen aplicaciones cliente-servidor, web o REST."),(0,n.kt)("p",null,"En las aplicaciones multiusuario, el control de acceso se realiza a trav\xe9s de ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Users/editing"}),"usuarios y grupos 4D"),". Puede crear usuarios, asignar contrase\xf1as, crear grupos de acceso con diferentes niveles de privilegios en la aplicaci\xf3n."),(0,n.kt)("p",null,"Inicie el sistema de control de acceso por contrase\xf1a 4D con 4D Server, ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Users/editing#designer-and-administrator"})," asignando una contrase\xf1a al usuario Dise\xf1ador"),". Hasta que no le asigne una contrase\xf1a al Dise\xf1ador, todos los accesos a la aplicaci\xf3n se hacen con los derechos de acceso del Dise\xf1ador, incluso si ha ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Users/editing"}),"configurado usuarios y grupos")," (cuando se abre la aplicaci\xf3n, no se requiere  Se puede abrir cualquier parte de la aplicaci\xf3n."),(0,n.kt)("p",null,"Cuando se asigna una contrase\xf1a al Dise\xf1ador, todos los privilegios de acceso entran en vigor. Para conectarse a la aplicaci\xf3n o a un ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Users/editing#assigning-group-access"}),"servidor con acceso protegido"),", los usuarios remotos deben introducir un nombre de usuario/contrase\xf1a."),(0,n.kt)("p",null,"Para desactivar el sistema de acceso por contrase\xf1a, basta con eliminar la contrase\xf1a del Dise\xf1ador."),(0,n.kt)("h2",r({},{id:"control-de-acceso-en-las-aplicaciones-monopuesto"}),"Control de acceso en las aplicaciones monopuesto"),(0,n.kt)("p",null,"Las aplicaciones monopuesto son aplicaciones de escritorio, desplegadas con 4D o fusionadas con 4D Volume License. En las aplicaciones monopuesto todos los usuarios que abren la aplicaci\xf3n son los ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Users/editing#designer-and-administrator"}),"Dise\xf1adores"),', tienen todos los privilegios y su nombre es "Dise\xf1ador". El control de acceso no se basa en los usuarios y los grupos de 4D, sino en las ',(0,n.kt)("strong",{parentName:"p"},"sesiones usuario"),"."),(0,n.kt)("h3",r({},{id:"identificaci\xf3n-del-usuario"}),"Identificaci\xf3n del usuario"),(0,n.kt)("p",null,"To identify the current user in a 4D single-user application, you can rely on the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Current system user"))," command, which returns the user who opened the system session. Por lo tanto, la autenticaci\xf3n de los usuarios se delega al sistema operativo."),(0,n.kt)("p",null,"A continuaci\xf3n, puede permitir o denegar el acceso dentro de su aplicaci\xf3n utilizando un c\xf3digo como:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If(Current system user = $user) //you can store users in a database table\n    // give access to some features\nEnd if\n")),(0,n.kt)("p",null,'If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the ',(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"SET USER ALIAS"))," command, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"SET USER ALIAS(Current system user)\n")),(0,n.kt)("h3",r({},{id:"protecci\xf3n-del-acceso"}),"Protecci\xf3n del acceso"),(0,n.kt)("h4",r({},{id:"privilegios"}),"Privilegios"),(0,n.kt)("p",null,"En una m\xe1quina compartida por varios usuarios, puede instalar la aplicaci\xf3n 4D en una carpeta y dar privilegios de acceso usuario apropiados a la carpeta a nivel del sistema operativo."),(0,n.kt)("h4",r({},{id:"cifrado-de-datos"}),"Cifrado de datos"),(0,n.kt)("p",null,"Si desea proteger el acceso a los datos de la aplicaci\xf3n, se recomienda ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/MSC/encrypt"}),"encriptar los datos")," y proveer la clave de encriptaci\xf3n al usuario o usuarios autorizados."))}p.isMDXComponent=!0}}]);