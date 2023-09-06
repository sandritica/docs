"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"privileges",title:"Privil\xe9gios"},o=void 0,s={unversionedId:"ORDA/privileges",id:"version-20-R2/ORDA/privileges",title:"Privil\xe9gios",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/pt/ORDA/privileges",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"privileges",title:"Privil\xe9gios"},sidebar:"docs",previous:{title:"Utilizar um datastore remoto",permalink:"/docs/pt/ORDA/datastores"},next:{title:"Glossary",permalink:"/docs/pt/ORDA/glossary"}},d={},p=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Resources",id:"resources",level:2},{value:"Ac\xe7\xf5es de autoriza\xe7\xe3o",id:"ac\xe7\xf5es-de-autoriza\xe7\xe3o",level:2},{value:"Privileges and Roles",id:"privileges-and-roles",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"ficheiro <code>roles.json</code>",id:"ficheiro-rolesjson",level:2},{value:"ficheiro <code>Roles_Errors.json</code>",id:"ficheiro-roles_errorsjson",level:3},{value:"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o",id:"inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o",level:2}],u={toc:p};function m(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."),(0,n.kt)("h2",r({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,n.kt)("p",null,"The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources."),(0,n.kt)("p",null,"When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/SessionClass#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},"session.setPrivileges()"))," function."),(0,n.kt)("p",null,"Every user request sent within the session is evaluated against privileges defined in the project's ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file."),(0,n.kt)("p",null,"If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"esquema",src:a(40194).Z,width:"960",height:"540"})),(0,n.kt)("h2",r({},{id:"resources"}),"Resources"),(0,n.kt)("p",null,"You can assign specific permission actions to the following exposed resources in your project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"o armazenamento de dados"),(0,n.kt)("li",{parentName:"ul"},"uma classe de dados"),(0,n.kt)("li",{parentName:"ul"},"um atributo (inclusive calculado e aliases)"),(0,n.kt)("li",{parentName:"ul"},"uma fun\xe7\xe3o de classe de modelo de dados")),(0,n.kt)("p",null,"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A permission action defined at the datastore level is automatically assigned to all dataclasses."),(0,n.kt)("li",{parentName:"ul"},"Uma a\xe7\xe3o de permiss\xe3o definida ao n\xedvel da classe de dados substitui a defini\xe7\xe3o do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s)."),(0,n.kt)("li",{parentName:"ul"},'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.')),(0,n.kt)("h2",r({},{id:"ac\xe7\xf5es-de-autoriza\xe7\xe3o"}),"Ac\xe7\xf5es de autoriza\xe7\xe3o"),(0,n.kt)("p",null,"As a\xe7\xf5es dispon\xedveis est\xe3o relacionadas com o recurso alvo."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Ac\xe7\xf5es"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"armaz\xe9m de dados"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"dataclass"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"atributo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"fun\xe7\xe3o de modelo de dados"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"create")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Criar entidade em qualquer classe de dados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Criar entidade nesta classe de dados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"read")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ler atributos em qualquer dataclass"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ler atributos nesta classe de dados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Leia o conte\xfado desse atributo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"update")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atualizar atributos em qualquer classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atualiza os atributos nesta classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atualiza o conte\xfado deste atributo (ignorado para atributos alias)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"drop")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Eliminar dados em qualquer classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Eliminar dados nesta classe de dados."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Delete a not null value for this attribute (except for alias and computed attribute)."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"execute")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Execute any function on the project (datastore, dataclass, entity selection, entity)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executa qualquer fun\xe7\xe3o na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executar esta fun\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"describe")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Todas as classes de dados est\xe3o dispon\xedveis na /rest/$catalog API"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass is available in the /rest/$catalog API"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"This attribute is available in the /rest/$catalog API."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Esta fun\xe7\xe3o de classe de dados est\xe1 dispon\xedvel na API /rest/$catalog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"promote")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias."),(0,n.kt)("li",{parentName:"ul"},"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."),(0,n.kt)("li",{parentName:"ul"},"Default values: in the current implementation, only ",(0,n.kt)("em",{parentName:"li"},"Null")," is available as default value.")),(0,n.kt)("p",null,"A defini\xe7\xe3o das permiss\xf5es deve ser coerente, nomeadamente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"update")," and ",(0,n.kt)("strong",{parentName:"li"},"drop")," permissions also need ",(0,n.kt)("strong",{parentName:"li"},"read")," permission (but ",(0,n.kt)("strong",{parentName:"li"},"create")," does not need it)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"promote")," permission also need ",(0,n.kt)("strong",{parentName:"li"},"describe")," permission.")),(0,n.kt)("h2",r({},{id:"privileges-and-roles"}),"Privileges and Roles"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"privilege")," is the technical ability to run ",(0,n.kt)("strong",{parentName:"p"},"actions")," on ",(0,n.kt)("strong",{parentName:"p"},"resources"),", while a ",(0,n.kt)("strong",{parentName:"p"},"role"),' is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).'),(0,n.kt)("p",null,'A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados v\xe1rios privil\xe9gios a uma a\xe7\xe3o. Um privil\xe9gio pode incluir outros privil\xe9gios.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You ",(0,n.kt)("strong",{parentName:"p"},"create")," privileges and/or roles in the ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file (see below). You ",(0,n.kt)("strong",{parentName:"p"},"configure")," their scope by assigning them to permission action(s) applied to resource(s).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You ",(0,n.kt)("strong",{parentName:"p"},"allow")," privileges and/or roles to every user session using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/SessionClass#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},".setPrivileges()"))," function of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," class."))),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"To allow a role in a session:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs. UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds. Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n')),(0,n.kt)("h2",r({},{id:"ficheiro-rolesjson"}),"ficheiro ",(0,n.kt)("inlineCode",{parentName:"h2"},"roles.json")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file describes the whole security settings for the project."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"In a context other than ",(0,n.kt)("em",{parentName:"p"},"Qodly")," (cloud), you have to create this file at the following location: ",(0,n.kt)("inlineCode",{parentName:"p"},"<project folder>/Project/Sources/"),". See ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Project/architecture#sources"}),"Architecture")," section.")),(0,n.kt)("p",null,"A sintaxe do ficheiro ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," \xe9 a seguinte:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Nome da propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de objectos ",(0,n.kt)("inlineCode",{parentName:"td"},"privilege")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios definidos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].privilege"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome do privil\xe9gio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].includes"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de nomes de privil\xe9gios inclu\xeddos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de objetos ",(0,n.kt)("inlineCode",{parentName:"td"},"role")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"List of defined roles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].role"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Role name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].privileges"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de nomes de privil\xe9gios inclu\xeddos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"permissions"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de ac\xe7\xf5es permitidas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"allowed"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de objectos ",(0,n.kt)("inlineCode",{parentName:"td"},"permission")),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de permiss\xf5es permitidas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].applyTo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Targeted ",(0,n.kt)("a",r({parentName:"td"},{href:"#resources"}),"resource")," name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#resources"}),"Resource"),' type: "datastore", "dataclass", "attribute", "method"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].read"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].create"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].update"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].drop"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].describe"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].execute"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[","].promote"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de strings"),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lista de privil\xe9gios")))),(0,n.kt)("admonition",r({},{title:"Lembrete",type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},'O nome do privil\xe9gio "WebAdmin" est\xe1 reservado \xe0 aplica\xe7\xe3o. N\xe3o se recomenda a utiliza\xe7\xe3o deste nome para privil\xe9gios personalizados.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"privileges")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"roles")," names are case insensitive."))),(0,n.kt)("h3",r({},{id:"ficheiro-roles_errorsjson"}),"ficheiro ",(0,n.kt)("inlineCode",{parentName:"h3"},"Roles_Errors.json")),(0,n.kt)("p",null,"O arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," \xe9 analisado por 4D na inicializa\xe7\xe3o. You need to restart the application if you want modifications in this file to be taken into account."),(0,n.kt)("p",null,"In case of error(s) when parsing the ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named ",(0,n.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," is generated in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Project/architecture#logs"}),(0,n.kt)("inlineCode",{parentName:"a"},"Logs")," folder of the project")," and describes the error line(s). This file is automatically deleted when the ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file no longer contains error(s)."),(0,n.kt)("p",null,"It is recommended to check at startup if a ",(0,n.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," file exists in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Project/architecture#logs"}),"Logs folder"),", which means that there was a parsing error and that accesses will not limited. Pode escrever, por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',title:'"/Sources/DatabaseMethods/onStartup.4dm"'}),'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\n End if \n')),(0,n.kt)("h2",r({},{id:"inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o"}),"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o"),(0,n.kt)("p",null,"By default, if no specific parameters are defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses."),(0,n.kt)("p",null,"However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following ",(0,n.kt)("inlineCode",{parentName:"p"},"roles.json")," file in your project folder (it includes examples of methods):"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json",metastring:'title="/Project/Sources/roles.json"',title:'"/Project/Sources/roles.json"'}),'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n')))}m.isMDXComponent=!0},40194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"}}]);