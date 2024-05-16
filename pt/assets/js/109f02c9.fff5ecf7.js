"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28955],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"privileges",title:"Privil\xe9gios"},o=void 0,s={unversionedId:"ORDA/privileges",id:"version-20-R5/ORDA/privileges",title:"Privil\xe9gios",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/pt/ORDA/privileges",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"privileges",title:"Privil\xe9gios"},sidebar:"docs",previous:{title:"Remote datastores",permalink:"/docs/pt/ORDA/datastores"},next:{title:"Client/Server Optimization",permalink:"/docs/pt/ORDA/client-server-optimization"}},d={},p=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Resources",id:"resources",level:2},{value:"Ac\xe7\xf5es de autoriza\xe7\xe3o",id:"ac\xe7\xf5es-de-autoriza\xe7\xe3o",level:2},{value:"Privil\xe9gios e roles",id:"privil\xe9gios-e-roles",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"archivo <code>roles.json</code>",id:"archivo-rolesjson",level:2},{value:"Archivo <code>Roles_Errors.json</code>",id:"archivo-roles_errorsjson",level:3},{value:"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o",id:"inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o",level:2}],u={toc:p};function c(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."),(0,n.kt)("h2",r({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,n.kt)("p",null,"The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources."),(0,n.kt)("p",null,"When web users or REST users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/SessionClass#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},"session.setPrivileges()"))," function."),(0,n.kt)("p",null,"Cada solicitud de usuario enviada dentro de la sesi\xf3n se eval\xfaa en funci\xf3n de los privilegios definidos en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," del proyecto."),(0,n.kt)("p",null,"If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"schema",src:a(423616).Z,width:"960",height:"540"})),(0,n.kt)("h2",r({},{id:"resources"}),"Resources"),(0,n.kt)("p",null,"You can assign specific permission actions to the following exposed resources in your project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"o armazenamento de dados"),(0,n.kt)("li",{parentName:"ul"},"uma classe de dados"),(0,n.kt)("li",{parentName:"ul"},"um atributo (inclusive calculado e aliases)"),(0,n.kt)("li",{parentName:"ul"},"uma fun\xe7\xe3o de classe de modelo de dados")),(0,n.kt)("p",null,"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A permission action defined at the datastore level is automatically assigned to all dataclasses."),(0,n.kt)("li",{parentName:"ul"},"Uma a\xe7\xe3o de permiss\xe3o definida ao n\xedvel da classe de dados substitui a defini\xe7\xe3o do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s)."),(0,n.kt)("li",{parentName:"ul"},'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.')),(0,n.kt)("admonition",r({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Permissions control access to datastore objects. Si desea filtrar los datos le\xeddos seg\xfan alg\xfan criterio, puede considerar ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/entities#restricting-entity-selections"}),"restringir las selecciones de entidades")," que puede ser m\xe1s apropiado en este caso.")),(0,n.kt)("h2",r({},{id:"ac\xe7\xf5es-de-autoriza\xe7\xe3o"}),"Ac\xe7\xf5es de autoriza\xe7\xe3o"),(0,n.kt)("p",null,"As a\xe7\xf5es dispon\xedveis est\xe3o relacionadas com o recurso alvo."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Ac\xe7\xf5es"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"armaz\xe9m de dados"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"dataclass"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"atributo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"fun\xe7\xe3o de modelo de dados"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"create")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Criar entidade em qualquer classe de dados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Criar entidade nesta classe de dados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"read")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ler atributos em qualquer dataclass"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ler atributos nesta classe de dados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Leia o conte\xfado desse atributo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"update")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atualizar atributos em qualquer classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atualiza os atributos nesta classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atualiza o conte\xfado deste atributo (ignorado para atributos alias)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"drop")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Eliminar dados em qualquer classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Eliminar dados nesta classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Delete a not null value for this attribute (except for alias and computed attribute)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"execute")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Execute any function on the project (datastore, dataclass, entity selection, entity)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executa qualquer fun\xe7\xe3o na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executar esta fun\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"describe")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Todas as classes de dados est\xe3o dispon\xedveis na /rest/$catalog API"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Esta dataclass est\xe1 dispon\xedvel na API /rest/$catalog"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Esse atributo est\xe1 dispon\xedvel na API /rest/$catalog."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Esta fun\xe7\xe3o de classe de dados est\xe1 dispon\xedvel na API /rest/$catalog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"promote")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Associa um determinado privil\xe9gio durante a execu\xe7\xe3o da fun\xe7\xe3o. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias."),(0,n.kt)("li",{parentName:"ul"},"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."),(0,n.kt)("li",{parentName:"ul"},"Valores por defecto: en la implementaci\xf3n actual, solo ",(0,n.kt)("em",{parentName:"li"},"Null")," est\xe1 disponible como valor por defecto.")),(0,n.kt)("p",null,"A defini\xe7\xe3o das permiss\xf5es deve ser coerente, nomeadamente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"los permisos ",(0,n.kt)("strong",{parentName:"li"},"update")," y ",(0,n.kt)("strong",{parentName:"li"},"drop")," tambi\xe9n necesitan el permiso ",(0,n.kt)("strong",{parentName:"li"},"read")," (pero ",(0,n.kt)("strong",{parentName:"li"},"create")," no lo necesita)"),(0,n.kt)("li",{parentName:"ul"},"el permiso ",(0,n.kt)("strong",{parentName:"li"},"promote")," tambi\xe9n necesita el permiso ",(0,n.kt)("strong",{parentName:"li"},"describe"),".")),(0,n.kt)("h2",r({},{id:"privil\xe9gios-e-roles"}),"Privil\xe9gios e roles"),(0,n.kt)("p",null,"Un ","*","*","privilegio ","*","*"," es la capacidad t\xe9cnica de ejecutar ","*","*","acciones ","*","*"," en ","*","*","recursos ","*","*",", mientras que un ",(0,n.kt)("strong",{parentName:"p"},"rol"),' es un privilegio publicado para ser utilizado por un administrador. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).'),(0,n.kt)("p",null,'A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados v\xe1rios privil\xe9gios a uma a\xe7\xe3o. Um privil\xe9gio pode incluir outros privil\xe9gios.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Usted ",(0,n.kt)("strong",{parentName:"p"},"crea")," privilegios y/o roles en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," (ver abajo). ",(0,n.kt)("strong",{parentName:"p"},"Configura")," su alcance asign\xe1ndolos a acci\xf3n(es) de permiso aplicadas a recurso(s).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You ",(0,n.kt)("strong",{parentName:"p"},"allow")," privileges and/or roles to every user session using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/SessionClass#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},".setPrivileges()"))," function of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," class."))),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Para permitir uma fun\xe7\xe3o em uma sess\xe3o:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n')),(0,n.kt)("h2",r({},{id:"archivo-rolesjson"}),"archivo ",(0,n.kt)("inlineCode",{parentName:"h2"},"roles.json")),(0,n.kt)("p",null,"El archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," describe todos los par\xe1metros de seguridad del proyecto."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"En un contexto que no sea ",(0,n.kt)("em",{parentName:"p"},"Qodly")," (nube), debe crear este archivo en la siguiente ubicaci\xf3n: ",(0,n.kt)("inlineCode",{parentName:"p"},"<project folder>/Project/Sources/"),". Ver la secci\xf3n ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Project/architecture#sources"}),"Arquitectura"),".")),(0,n.kt)("p",null,"La sintaxis del archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," es la siguiente:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nome da propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"privilege")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios definidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].privilege"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome do privil\xe9gio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].includes"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de nomes de privil\xe9gios inclu\xeddos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"role")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de roles definidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].role"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da role")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de nomes de privil\xe9gios inclu\xeddos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"permissions"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de ac\xe7\xf5es permitidas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"allowed"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Colecci\xf3n de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"permission")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de permiss\xf5es permitidas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].applyTo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Targeted ",(0,n.kt)("a",r({parentName:"td"},{href:"#resources"}),"resource")," name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tipo de ",(0,n.kt)("a",r({parentName:"td"},{href:"#resources"}),"Recurso"),': "datastore", "dataclass", "attribute", "method"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].read"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].create"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].update"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].drop"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].describe"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].execute"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].promote"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"forceLogin"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True para habilitar el ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/REST/authUsers#force-login-mode"}),'modo "forceLogin"'))))),(0,n.kt)("admonition",r({},{title:"Reminder",type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},'O nome do privil\xe9gio "WebAdmin" est\xe1 reservado \xe0 aplica\xe7\xe3o. N\xe3o se recomenda a utiliza\xe7\xe3o deste nome para privil\xe9gios personalizados.'),(0,n.kt)("li",{parentName:"ul"},"los nombres de ",(0,n.kt)("inlineCode",{parentName:"li"},"privileges")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"roles")," son insensibles a may\xfasculas y min\xfasculas."))),(0,n.kt)("h3",r({},{id:"archivo-roles_errorsjson"}),"Archivo ",(0,n.kt)("inlineCode",{parentName:"h3"},"Roles_Errors.json")),(0,n.kt)("p",null,"El archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," es analizado por 4D al inicio. You need to restart the application if you want modifications in this file to be taken into account."),(0,n.kt)("p",null,"En caso de error(es) al analizar el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json"),", 4D carga el proyecto pero desactiva la protecci\xf3n de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. An error file named ",(0,n.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," is generated in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Project/architecture#logs"}),(0,n.kt)("inlineCode",{parentName:"a"},"Logs")," folder of the project")," and describes the error line(s). Este archivo se elimina autom\xe1ticamente cuando el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," deja de contener errores."),(0,n.kt)("p",null,"Se recomienda comprobar al inicio si existe un archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," en la carpeta ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Project/architecture#logs"}),"Logs"),", lo que significa que se ha producido un error de an\xe1lisis y que los accesos no estar\xe1n limitados. Pode escrever, por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',title:'"/Sources/DatabaseMethods/onStartup.4dm"'}),'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if\n')),(0,n.kt)("h2",r({},{id:"inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o"}),"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o"),(0,n.kt)("p",null,"Por defecto, si no se definen par\xe1metros espec\xedficos en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json"),", los accesos no est\xe1n limitados. This configuration allows you to develop the application without having to worry about accesses."),(0,n.kt)("p",null,"However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. Para bloquear todos los privilegios en todos los recursos, coloque el siguiente archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," en la carpeta de su proyecto (incluye ejemplos de m\xe9todos):"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json",metastring:'title="/Project/Sources/roles.json"',title:'"/Project/Sources/roles.json"'}),'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n')))}c.isMDXComponent=!0},423616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"}}]);