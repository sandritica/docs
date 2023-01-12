"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"privileges",title:"Privileges"},s=void 0,o={unversionedId:"ORDA/privileges",id:"version-19-R8/ORDA/privileges",title:"Privileges",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/fr/ORDA/privileges",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/ORDA/privileges.md",tags:[],version:"19-R8",frontMatter:{id:"privileges",title:"Privileges"},sidebar:"docs",previous:{title:"Utiliser un datastore distant",permalink:"/docs/fr/ORDA/datastores"},next:{title:"Glossaire",permalink:"/docs/fr/ORDA/glossary"}},p={},d=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Ressources",id:"ressources",level:2},{value:"Permission actions",id:"permission-actions",level:2},{value:"Privileges and Roles",id:"privileges-and-roles",level:2},{value:"Exemple",id:"exemple",level:3},{value:"<code>roles.json</code> file",id:"rolesjson-file",level:2},{value:"<code>Roles_Errors.json</code> file",id:"roles_errorsjson-file",level:3},{value:"Initializing privileges for deployment",id:"initializing-privileges-for-deployment",level:2}],u={toc:d};function c(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."),(0,a.kt)("h2",r({},{id:"vue-densemble"}),"Vue d\u2019ensemble"),(0,a.kt)("p",null,"The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources."),(0,a.kt)("p",null,"When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"session.setPrivileges()"))," function."),(0,a.kt)("p",null,"Every user request sent within the session is evaluated against privileges defined in the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file."),(0,a.kt)("p",null,"If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91590).Z,width:"960",height:"540"})),(0,a.kt)("h2",r({},{id:"ressources"}),"Ressources"),(0,a.kt)("p",null,"You can assign specific permission actions to the following exposed resources in your project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the datastore"),(0,a.kt)("li",{parentName:"ul"},"a dataclass"),(0,a.kt)("li",{parentName:"ul"},"an attribute (including computed and alias)"),(0,a.kt)("li",{parentName:"ul"},"a data model class function")),(0,a.kt)("p",null,"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A permission action defined at the datastore level is automatically assigned to all dataclasses."),(0,a.kt)("li",{parentName:"ul"},"A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s)."),(0,a.kt)("li",{parentName:"ul"},'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.')),(0,a.kt)("h2",r({},{id:"permission-actions"}),"Permission actions"),(0,a.kt)("p",null,"Available actions are related to target resource."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Actions"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"datastore"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"dataclass"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"attribute"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"data model function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"create")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Create entity in any dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Create entity in this dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"read")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Read attributes in any dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Read attributes in this dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Read this attribute content"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"update")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Update attributes in any dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Update attributes in this dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Update this attribute content (ignored for alias attributes)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"drop")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Delete data in any dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Delete data in this dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Delete a not null value for this attribute (except for alias and computed attribute)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"execute")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Execute any function on the project (datastore, dataclass, entity selection, entity)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Execute this function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"describe")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"All the dataclasses are available in the /rest/$catalog API"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass is available in the /rest/$catalog API"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This attribute is available in the /rest/$catalog API."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"This dataclass function is available in the /rest/$catalog API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"promote")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An alias can be read even if there is no permissions on the attributes upon which it is built."),(0,a.kt)("li",{parentName:"ul"},"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."),(0,a.kt)("li",{parentName:"ul"},"Default values: in the current implementation, only ",(0,a.kt)("em",{parentName:"li"},"Null")," is available as default value.")),(0,a.kt)("p",null,"Setting permissions requires to be consistent, in particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"update")," and ",(0,a.kt)("strong",{parentName:"li"},"drop")," permissions also need ",(0,a.kt)("strong",{parentName:"li"},"read")," permission (but ",(0,a.kt)("strong",{parentName:"li"},"create")," does not need it)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"promote")," permission also need ",(0,a.kt)("strong",{parentName:"li"},"describe")," permission.")),(0,a.kt)("h2",r({},{id:"privileges-and-roles"}),"Privileges and Roles"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"privilege")," is the technical ability to run ",(0,a.kt)("strong",{parentName:"p"},"actions")," on ",(0,a.kt)("strong",{parentName:"p"},"resources"),", while a ",(0,a.kt)("strong",{parentName:"p"},"role"),' is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).'),(0,a.kt)("p",null,'A privilege or a role can be associated to several "action + resource" combinations. Several privileges can be associated to an action. A privilege can include other privileges.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You ",(0,a.kt)("strong",{parentName:"p"},"create")," privileges and/or roles in the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file (see below). You ",(0,a.kt)("strong",{parentName:"p"},"configure")," their scope by assigning them to permission action(s) applied to resource(s).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You ",(0,a.kt)("strong",{parentName:"p"},"allow")," privileges and/or roles to every user session using the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},".setPrivileges()"))," function of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," class."))),(0,a.kt)("h3",r({},{id:"exemple"}),"Exemple"),(0,a.kt)("p",null,"To allow a role in a session:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n')),(0,a.kt)("h2",r({},{id:"rolesjson-file"}),(0,a.kt)("inlineCode",{parentName:"h2"},"roles.json")," file"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file describes the whole security settings for the project."),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"In a context other than ",(0,a.kt)("em",{parentName:"p"},"Qodly")," (cloud), you have to create this file at the following location: ",(0,a.kt)("inlineCode",{parentName:"p"},"<project folder>/Project/Sources/"),". See ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Project/architecture#sources"}),"Architecture")," section.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file syntax is the following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Nom de propri\xe9t\xe9"),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Obligatoire"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection of ",(0,a.kt)("inlineCode",{parentName:"td"},"privilege")," objects"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of defined privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].privilege"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom de privil\xe8ge")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].includes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of included privilege names")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection of ",(0,a.kt)("inlineCode",{parentName:"td"},"role")," objects"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of defined roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].role"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Role name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of included privilege names")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"permissions"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of allowed actions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"allowed"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection of ",(0,a.kt)("inlineCode",{parentName:"td"},"permission")," objects"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of allowed permissions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].applyTo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Targeted ",(0,a.kt)("a",r({parentName:"td"},{href:"#resources"}),"resource")," name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#resources"}),"Resource"),' type: "datastore", "dataclass", "attribute", "method"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].read"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].create"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].update"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].drop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].describe"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].execute"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].promote"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"List of privileges")))),(0,a.kt)("admonition",r({},{title:"Reminder",type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"privileges")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"roles")," names are case insensitive."))),(0,a.kt)("h3",r({},{id:"roles_errorsjson-file"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Roles_Errors.json")," file"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file is parsed by 4D at startup. You need to restart the application if you want modifications in this file to be taken into account."),(0,a.kt)("p",null,"In case of error(s) when parsing the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," is generated in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Project/architecture#logs"}),(0,a.kt)("inlineCode",{parentName:"a"},"Logs")," folder of the project")," and describes the error line(s). This file is automatically deleted when the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file no longer contains error(s)."),(0,a.kt)("p",null,"It is recommended to check at startup if a ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," file exists in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Project/architecture#logs"}),"Logs folder"),", which means that there was a parsing error and that accesses will not limited. You can write for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',title:'"/Sources/DatabaseMethods/onStartup.4dm"'}),'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if \n')),(0,a.kt)("h2",r({},{id:"initializing-privileges-for-deployment"}),"Initializing privileges for deployment"),(0,a.kt)("p",null,"By default, if no specific parameters are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses."),(0,a.kt)("p",null,"However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file in your project folder (it includes examples of methods):"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json",metastring:'title="/Project/Sources/roles.json"',title:'"/Project/Sources/roles.json"'}),'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n')))}c.isMDXComponent=!0},91590:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"}}]);