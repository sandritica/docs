"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"privileges",title:"Privilegios"},s=void 0,o={unversionedId:"ORDA/privileges",id:"version-19-R8/ORDA/privileges",title:"Privilegios",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/es/19-R8/ORDA/privileges",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"privileges",title:"Privilegios"},sidebar:"docs",previous:{title:"Utilizar un almac\xe9n de datos remoto",permalink:"/docs/es/19-R8/ORDA/datastores"},next:{title:"Glosario",permalink:"/docs/es/19-R8/ORDA/glossary"}},d={},p=[{value:"Generalidades",id:"generalidades",level:2},{value:"Resources",id:"resources",level:2},{value:"Permission actions",id:"permission-actions",level:2},{value:"Privileges and Roles",id:"privileges-and-roles",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"archivo <code>roles.json</code>",id:"archivo-rolesjson",level:2},{value:"Archivo <code>Roles_Errors.json</code>",id:"archivo-roles_errorsjson",level:3},{value:"Inicializaci\xf3n de privilegios para el despliegue",id:"inicializaci\xf3n-de-privilegios-para-el-despliegue",level:2}],u={toc:p};function c(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."),(0,n.kt)("h2",r({},{id:"generalidades"}),"Generalidades"),(0,n.kt)("p",null,"La arquitectura de seguridad ORDA se basa en los conceptos de privilegios, acciones de permiso (read, create, etc.) y recursos."),(0,n.kt)("p",null,"Cuando los usuarios se registran, su sesi\xf3n se carga autom\xe1ticamente con los privilegios asociados. Los privilegios se asignan a la sesi\xf3n utilizando la funci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/API/SessionClass#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},"session.setPrivileges()")),"."),(0,n.kt)("p",null,"Cada solicitud de usuario enviada dentro de la sesi\xf3n se eval\xfaa en funci\xf3n de los privilegios definidos en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," del proyecto."),(0,n.kt)("p",null,"Si un usuario intenta ejecutar una acci\xf3n y no tiene los derechos de acceso adecuados, se genera un error de privilegio o, en el caso de que falte el permiso de Lectura en los atributos, no se env\xedan."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(61647).Z,width:"960",height:"540"})),(0,n.kt)("h2",r({},{id:"resources"}),"Resources"),(0,n.kt)("p",null,"Puede asignar acciones de permiso espec\xedficas a los siguientes recursos expuestos en su proyecto:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el almac\xe9n de datos"),(0,n.kt)("li",{parentName:"ul"},"una clase de datos"),(0,n.kt)("li",{parentName:"ul"},"un atributo (incluidos los calculados y los alias)"),(0,n.kt)("li",{parentName:"ul"},"a data model class function")),(0,n.kt)("p",null,"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Una acci\xf3n de permiso definida a nivel de almac\xe9n de datos se asigna autom\xe1ticamente a todas las clases de datos."),(0,n.kt)("li",{parentName:"ul"},"A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s)."),(0,n.kt)("li",{parentName:"ul"},'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.')),(0,n.kt)("h2",r({},{id:"permission-actions"}),"Permission actions"),(0,n.kt)("p",null,"Las acciones disponibles est\xe1n relacionadas con el recurso de destino."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Acciones"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"almac\xe9n de datos"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"dataclass"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"atributo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"data model function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"create")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Create entity in any dataclass"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Create entity in this dataclass"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"read")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Read attributes in any dataclass"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Leer atributos en esta clase de datos"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lea el contenido de este atributo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"update")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Actualizar atributos en cualquier clase de datos."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Actualiza los atributos de esta clase de datos."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Actualiza el contenido de este atributo (ignorado para atributos alias)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"drop")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Borrar datos en cualquier clase de datos."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Borrar los datos de esta clase de datos."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Eliminar un valor no nulo para este atributo (excepto para alias y atributo calculado)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"execute")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ejecutar toda funci\xf3n en el proyecto (almac\xe9n de datos, clase de datos, selecci\xf3n de entidades, entidad)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ejecuta cualquier funci\xf3n en la clase de datos. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ejecutar esta funci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"describe")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Todas las clases de datos est\xe1n disponibles en /rest/$catalog API"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass is available in the /rest/$catalog API"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Este atributo est\xe1 disponible en la API /rest/$catalog."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass function is available in the /rest/$catalog API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"promote")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Asocia un privilegio determinado durante la ejecuci\xf3n de la funci\xf3n. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An alias can be read even if there is no permissions on the attributes upon which it is built."),(0,n.kt)("li",{parentName:"ul"},"Se puede acceder a un atributo calculado aunque no haya permisos en los atributos sobre los que se crea."),(0,n.kt)("li",{parentName:"ul"},"Default values: in the current implementation, only ",(0,n.kt)("em",{parentName:"li"},"Null")," is available as default value.")),(0,n.kt)("p",null,"Setting permissions requires to be consistent, in particular:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"los permisos ",(0,n.kt)("strong",{parentName:"li"},"update")," y ",(0,n.kt)("strong",{parentName:"li"},"drop")," tambi\xe9n necesitan el permiso ",(0,n.kt)("strong",{parentName:"li"},"read")," (pero ",(0,n.kt)("strong",{parentName:"li"},"create")," no lo necesita)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"promote")," permission also need ",(0,n.kt)("strong",{parentName:"li"},"describe")," permission.")),(0,n.kt)("h2",r({},{id:"privileges-and-roles"}),"Privileges and Roles"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"privilege")," is the technical ability to run ",(0,n.kt)("strong",{parentName:"p"},"actions")," on ",(0,n.kt)("strong",{parentName:"p"},"resources"),", while a ",(0,n.kt)("strong",{parentName:"p"},"role"),' is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).'),(0,n.kt)("p",null,'A privilege or a role can be associated to several "action + resource" combinations. Se pueden asociar varios privilegios a una acci\xf3n. A privilege can include other privileges.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Usted ",(0,n.kt)("strong",{parentName:"p"},"crea")," privilegios y/o roles en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," (ver abajo). You ",(0,n.kt)("strong",{parentName:"p"},"configure")," their scope by assigning them to permission action(s) applied to resource(s).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You ",(0,n.kt)("strong",{parentName:"p"},"allow")," privileges and/or roles to every user session using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/API/SessionClass#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},".setPrivileges()"))," function of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," class."))),(0,n.kt)("h3",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"To allow a role in a session:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Est\xe1 autentificado como Invitado"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Est\xe1 autentificado como "+$user.role\n        End if\n    End if\n\n\n')),(0,n.kt)("h2",r({},{id:"archivo-rolesjson"}),"archivo ",(0,n.kt)("inlineCode",{parentName:"h2"},"roles.json")),(0,n.kt)("p",null,"El archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," describe todos los par\xe1metros de seguridad del proyecto."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"En un contexto que no sea ",(0,n.kt)("em",{parentName:"p"},"Qodly")," (nube), debe crear este archivo en la siguiente ubicaci\xf3n: ",(0,n.kt)("inlineCode",{parentName:"p"},"<project folder>/Project/Sources/"),". Ver la secci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/Project/architecture#sources"}),"Arquitectura"),".")),(0,n.kt)("p",null,"La sintaxis del archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," es la siguiente:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nombre de propiedad"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Obligatorio"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"privilege")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios definidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].privilege"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del privilegio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].includes"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de nombres de privilegios incluidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"role")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de roles definidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].role"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del rol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de nombres de privilegios incluidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"permissions"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de acciones permitidas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"allowed"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"permission")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de permisos permitidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].applyTo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Targeted ",(0,n.kt)("a",r({parentName:"td"},{href:"#resources"}),"resource")," name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tipo de ",(0,n.kt)("a",r({parentName:"td"},{href:"#resources"}),"Recurso"),': "datastore", "dataclass", "attribute", "method"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].read"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].create"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].update"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].drop"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].describe"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].execute"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].promote"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de cadenas"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privilegios")))),(0,n.kt)("admonition",r({},{title:"Recordatorio",type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},'El nombre de privilegio "WebAdmin" est\xe1 reservado a la aplicaci\xf3n. No se recomienda utilizar este nombre para los privilegios personalizados.'),(0,n.kt)("li",{parentName:"ul"},"los nombres de ",(0,n.kt)("inlineCode",{parentName:"li"},"privileges")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"roles")," son insensibles a may\xfasculas y min\xfasculas."))),(0,n.kt)("h3",r({},{id:"archivo-roles_errorsjson"}),"Archivo ",(0,n.kt)("inlineCode",{parentName:"h3"},"Roles_Errors.json")),(0,n.kt)("p",null,"El archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," es analizado por 4D al inicio. Debe reiniciar la aplicaci\xf3n si desea que se tengan en cuenta las modificaciones en este archivo."),(0,n.kt)("p",null,"En caso de error(es) al analizar el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json"),", 4D carga el proyecto pero desactiva la protecci\xf3n de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. Se genera un archivo de error llamado ",(0,n.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," en la carpeta ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/Project/architecture#logs"}),(0,n.kt)("inlineCode",{parentName:"a"},"Logs")," del proyecto")," y describe la(s) l\xednea(s) de error. Este archivo se elimina autom\xe1ticamente cuando el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," deja de contener errores."),(0,n.kt)("p",null,"Se recomienda comprobar al inicio si existe un archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," en la carpeta ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19-R8/Project/architecture#logs"}),"Logs"),", lo que significa que se ha producido un error de an\xe1lisis y que los accesos no estar\xe1n limitados. Puede escribir, por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',title:'"/Sources/DatabaseMethods/onStartup.4dm"'}),'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // puede evitar que el proyecto se abra\n ALERT("El archivo roles.json est\xe1 malformado o contiene inconsistencias, la aplicaci\xf3n se cerrar\xe1.")\n QUIT 4D\nEnd if \n')),(0,n.kt)("h2",r({},{id:"inicializaci\xf3n-de-privilegios-para-el-despliegue"}),"Inicializaci\xf3n de privilegios para el despliegue"),(0,n.kt)("p",null,"Por defecto, si no se definen par\xe1metros espec\xedficos en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json"),", los accesos no est\xe1n limitados. Esta configuraci\xf3n le permite desarrollar la aplicaci\xf3n sin tener que preocuparse por los accesos."),(0,n.kt)("p",null,"Sin embargo, cuando la aplicaci\xf3n est\xe1 a punto de desplegarse, una buena pr\xe1ctica es bloquear todos los privilegios y, a continuaci\xf3n, configurar el archivo para que s\xf3lo abra las partes controladas a las sesiones autorizadas. Para bloquear todos los privilegios en todos los recursos, coloque el siguiente archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," en la carpeta de su proyecto (incluye ejemplos de m\xe9todos):"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json",metastring:'title="/Project/Sources/roles.json"',title:'"/Project/Sources/roles.json"'}),'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n')))}c.isMDXComponent=!0},61647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"}}]);