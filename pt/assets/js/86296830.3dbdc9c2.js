"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51573],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(k,o(o({ref:e},p),{},{components:a})):r.createElement(k,o({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37346:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"architecture",title:"Arquitetura de um projeto 4D"},i=void 0,s={unversionedId:"Project/architecture",id:"version-19/Project/architecture",title:"Arquitetura de um projeto 4D",description:"A 4D project is made of several folders and files, stored within a single project root folder (package folder). Por exemplo:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/pt/19/Project/architecture",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"architecture",title:"Arquitetura de um projeto 4D"},sidebar:"docs",previous:{title:"Trabalhar com um projecto",permalink:"/docs/pt/19/Project/creating"},next:{title:"Documentar um projecto",permalink:"/docs/pt/19/Project/documentation"}},d={},p=[{value:"Pasta Project",id:"pasta-project",level:2},{value:"Ficheiro <em>nomApplication</em>.4DProject",id:"ficheiro-nomapplication4dproject",level:3},{value:"Pasta Sources",id:"pasta-sources",level:3},{value:"Pasta DatabaseMethods",id:"pasta-databasemethods",level:4},{value:"Pasta Methods",id:"pasta-methods",level:4},{value:"Pasta Classes",id:"pasta-classes",level:4},{value:"Pasta Forms",id:"pasta-forms",level:4},{value:"Pasta TableForms",id:"pasta-tableforms",level:4},{value:"Pasta Triggers",id:"pasta-triggers",level:4},{value:"Pasta Trash",id:"pasta-trash",level:3},{value:"DerivedData folder",id:"deriveddata-folder",level:3},{value:"Pasta Libraries",id:"pasta-libraries",level:2},{value:"Pasta Resources",id:"pasta-resources",level:2},{value:"Pasta Data",id:"pasta-data",level:2},{value:"Settings folder",id:"settings-folder",level:3},{value:"Pasta Logs",id:"pasta-logs",level:3},{value:"Settings folder",id:"settings-folder-1",level:2},{value:"userPreferences.<em>userName</em> folder",id:"userpreferencesusername-folder",level:2},{value:"Pasta Components",id:"pasta-components",level:2},{value:"Pasta Plugins",id:"pasta-plugins",level:2},{value:"Pasta Documentation",id:"pasta-documentation",level:2},{value:"WebFolder",id:"webfolder",level:2}],m={toc:p};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A 4D project is made of several folders and files, stored within a single project root folder (package folder). Por exemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MyPackage (",(0,r.kt)("em",{parentName:"li"},"project root folder"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Componentes"),(0,r.kt)("li",{parentName:"ul"},"Dados",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Logs"),(0,r.kt)("li",{parentName:"ul"},"Settings"))),(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Plugins"),(0,r.kt)("li",{parentName:"ul"},"Project",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DerivedData"),(0,r.kt)("li",{parentName:"ul"},"Sources"),(0,r.kt)("li",{parentName:"ul"},"Trash"))),(0,r.kt)("li",{parentName:"ul"},"Resources"),(0,r.kt)("li",{parentName:"ul"},"Settings"),(0,r.kt)("li",{parentName:"ul"},"userPreferences.username"),(0,r.kt)("li",{parentName:"ul"},"WebFolder")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on ',(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,r.kt)("h2",n({},{id:"pasta-project"}),"Pasta Project"),(0,r.kt)("p",null,"The Project folder typically contains the following hierarchy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ficheiro ",(0,r.kt)("em",{parentName:"li"},"nomApplication"),".4DProject"),(0,r.kt)("li",{parentName:"ul"},"Sources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Classes"),(0,r.kt)("li",{parentName:"ul"},"DatabaseMethods"),(0,r.kt)("li",{parentName:"ul"},"P\xe1gina M\xe9todos"),(0,r.kt)("li",{parentName:"ul"},"Formul\xe1rios"),(0,r.kt)("li",{parentName:"ul"},"TableForms"),(0,r.kt)("li",{parentName:"ul"},"Triggers"))),(0,r.kt)("li",{parentName:"ul"},"DerivedData"),(0,r.kt)("li",{parentName:"ul"},"Trash (se houver)")),(0,r.kt)("h3",n({},{id:"ficheiro-nomapplication4dproject"}),"Ficheiro ",(0,r.kt)("em",{parentName:"h3"},"nomApplication"),".4DProject"),(0,r.kt)("p",null,"Project development file, used to designate and launch the project. Esse arquivo pode ser aberto por:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4D"),(0,r.kt)("li",{parentName:"ul"},"4D Server (apenas leitura, ver ",(0,r.kt)("a",n({parentName:"li"},{href:"developing.md"}),"Desenvolver um projeto"),")")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Nota:")," nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusu\xe1rios se gerencia atrav\xe9s das ferramentas de controle de vers\xe3o. 4D Server can open .4DProject files for testing purposes.")),(0,r.kt)("h3",n({},{id:"pasta-sources"}),"Pasta Sources"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"catalog.4DCatalog"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Defini\xe7\xf5es de tabelas e campos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"folders.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Defini\xe7\xf5es de pasta do Explorer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"menus.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Menu definitions"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propriedades de la base ",(0,r.kt)("em",{parentName:"td"},"Structure"),". They are not taken into account if ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder-1"}),"user settings"))," or ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder"}),"user settings for data"))," are defined.",(0,r.kt)("strong",{parentName:"td"},"Warning"),": In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use ",(0,r.kt)("em",{parentName:"td"},"user settings")," or ",(0,r.kt)("em",{parentName:"td"},"user settings for data")," to define custom settings."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"tips.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dicas definidas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"lists.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Listas definidas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"filters.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Filtros definidos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Folhas de estilo CSS"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mac css style sheets (from converted binary database)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Windows css style sheets (from converted binary database)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")))),(0,r.kt)("h4",n({},{id:"pasta-databasemethods"}),"Pasta DatabaseMethods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"databaseMethodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos de projeto definidos na database. Um ficheiro por m\xe9todo base de dados"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"pasta-methods"}),"Pasta Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"methodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos de banco definidos na database. One file per database method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"pasta-classes"}),"Pasta Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"className"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"pasta-forms"}),"Pasta Forms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o do formul\xe1rio projeto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo formul\xe1rio projecto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Imagem est\xe1tica do formul\xe1rio projeto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos objecto. One file per object method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"pasta-tableforms"}),"Pasta TableForms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input table form description (n is the table number)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input table form static pictures"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input table form method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input form object methods. One file per object method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output table form description (n is the table number)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output table form static pictures"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output table form method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output form object methods. One file per object method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"pasta-triggers"}),"Pasta Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"table_",(0,r.kt)("em",{parentName:"td"},"n"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos trigger definidos na database. One trigger file per table (n is the table number)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The .4dm file extension is a text-based file format, containing the code of a 4D method. \xc9 compat\xedvel com as ferramentas de controlo da vers\xe3o."),(0,r.kt)("h3",n({},{id:"pasta-trash"}),"Pasta Trash"),(0,r.kt)("p",null,"The Trash folder contains methods and forms that were deleted from the project (if any). Pode conter as seguintes pastas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"P\xe1gina M\xe9todos"),(0,r.kt)("li",{parentName:"ul"},"Formul\xe1rios"),(0,r.kt)("li",{parentName:"ul"},"TableForms")),(0,r.kt)("p",null,'Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the ',(0,r.kt)("a",n({parentName:"p"},{href:"#sources"}),"Sources")," folder."),(0,r.kt)("h3",n({},{id:"deriveddata-folder"}),"DerivedData folder"),(0,r.kt)("p",null,"The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. Voc\xea pode ignorar essa pasta."),(0,r.kt)("h2",n({},{id:"pasta-libraries"}),"Pasta Libraries"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta pasta \xe9 utilizada apenas no macOS.")),(0,r.kt)("p",null,"The Librairies folder contains the file resulting from a compilation with the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/Project/compiler#silicon-compiler"}),"Silicon compiler")," on macOS."),(0,r.kt)("h2",n({},{id:"pasta-resources"}),"Pasta Resources"),(0,r.kt)("p",null,"A pasta Resources cont\xe9m todos os arquivos e pastas de recursos personalizados do projeto. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the ",(0,r.kt)("em",{parentName:"p"},"4D Server Reference Manual"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Arquivos e pastas dos recursos do banco de dados"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"v\xe1rios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images/Library/",(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Pictures from the Picture Library as separate files(*). Os nomes destes itens tornam-se nomes de ficheiros. If a duplicate exists, a number is added to the name."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")))),(0,r.kt)("p",null,"(*) only if the project was exported from a .4db binary database."),(0,r.kt)("h2",n({},{id:"pasta-data"}),"Pasta Data"),(0,r.kt)("p",null,"The data folder contains the data file and all files and folders relating to the data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.4dd(*)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the ",(0,r.kt)("em",{parentName:"td"},"Open data file")," dialog box will then appear so that you can select the data file to use or create a new one"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.journal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Criado apenas quando a base de dados utiliza um ficheiro de registo. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user\u2019s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. It is generated by default when a database is created."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.match"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"(interno) UUID correspondente ao n\xfamero da tabela"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("p",null,"(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location."),(0,r.kt)("h3",n({},{id:"settings-folder"}),"Settings folder"),(0,r.kt)("p",null,"Se existir um arquivo de propriedades de dados ",(0,r.kt)("a",n({parentName:"p"},{href:"#settings-folder"}),"em uma pasta de dados "),", da pasta Dados, tem prioridade sobre o arquivo de propriedades do usu\xe1rio."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These settings take priority over ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#settings-folder-1"}),"user settings files"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#sources-folder"}),"structure settings"))," files.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o de os grupos e usu\xe1rios de 4D e seus direitos de acesso quando o banco for lan\xe7ado com este arquivo de dados."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros de c\xf3pia de seguran\xe7a do banco de dados, utilizados para definir as ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/19/Backup/settings"}),"op\xe7\xf5es de c\xf3pia de seguran\xe7a"),") quando o banco de dados for lan\xe7ado com este arquivo de dados. Keys concerning backup configuration are described in the ",(0,r.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propriedades personalizadas de o banco de dados para este arquivo de dados."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h3",n({},{id:"pasta-logs"}),"Pasta Logs"),(0,r.kt)("p",null,"The Logs folder contains all log files used by the project. Os ficheiros de registo incluem, em particular:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"convers\xe3o da base de dados,"),(0,r.kt)("li",{parentName:"ul"},"pedidos do servidor Web,"),(0,r.kt)("li",{parentName:"ul"},"backup/restore activities journal (",(0,r.kt)("em",{parentName:"li"},"Backup Journal","[","xxx].txt"),", see ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/Backup/backup#backup-journal"}),"Backup journal"),")"),(0,r.kt)("li",{parentName:"ul"},"depura\xe7\xe3o de comandos,"),(0,r.kt)("li",{parentName:"ul"},"4D Server requests (generated on client machines and on the server).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An additional Logs folder is available in the system user preferences folder (active 4D folder, see ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html"}),"Get 4D folder")," command) for maintenance log files and in cases where data folder is read-only.")),(0,r.kt)("h2",n({},{id:"settings-folder-1"}),"Settings folder"),(0,r.kt)("p",null,"Esta pasta cont\xe9m ",(0,r.kt)("strong",{parentName:"p"},"arquivos de configura\xe7\xe3o de dados")," utilizados para a administra\xe7\xe3o do banco de dados."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These settings take priority over ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#sources-folder"}),"structure settings"))," files. However, if a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#settings-folder"}),"user settings file for data"))," exists, it takes priority over user settings file.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o dos grupos e usu\xe1rios de 4D para o banco de dados, assim como seus direitos de acesso"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Database backup settings, used to set the ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/19/Backup/settings"}),"backup options"),") when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the ",(0,r.kt)("em",{parentName:"td"},"backup journal"),". Keys concerning backup configuration are described in the ",(0,r.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Build settings file, created automatically when using the application builder dialog box or the ",(0,r.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")," command"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h2",n({},{id:"userpreferencesusername-folder"}),"userPreferences.",(0,r.kt)("em",{parentName:"h2"},"userName")," folder"),(0,r.kt)("p",null,"Esta pasta cont\xe9m arquivos que memorizam as configura\xe7\xf5es do usu\xe1rio, por exemplo, o ponto de ruptura ou as posi\xe7\xf5es das janelas. You can just ignore this folder. Cont\xe9m, por exemplo:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodPreferences.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Prefer\xeancias do editor dos m\xe9todos do usu\xe1rio atual"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Posi\xe7\xe3o da janela do usu\xe1rio atual para os m\xe9todos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"formWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Posi\xe7\xe3o da janela do usu\xe1rio atual para os formul\xe1rios"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"workspace.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"List of opened windows; on macOS, order of tab windows"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"debuggerCatches.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Chamadas aos comandos"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"recentTables.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista ordenada de tabelas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preferences.4DPreferences"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Rota de dados atual e posi\xe7\xf5es da janela principal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CompilerIntermediateFiles"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Intermediate files resulting from Apple Silicon compilation"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Folder")))),(0,r.kt)("h2",n({},{id:"pasta-components"}),"Pasta Components"),(0,r.kt)("p",null,"Esta carpeta cont\xe9m os componentes que devem estar dispon\xedveis unicamente no banco de dados projeto. It must be stored at the same level as the Project folder."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An application project can be used itself as a component:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"for development: put an alias of the .4dproject file in the Components folder of the host project."),(0,r.kt)("li",{parentName:"ul"},"for deployment: ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/Desktop/building#build-component"}),"build the component")," and put the resulting .4dz file in a .4dbase folder in the Components folder of the host application."))),(0,r.kt)("h2",n({},{id:"pasta-plugins"}),"Pasta Plugins"),(0,r.kt)("p",null,"This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder."),(0,r.kt)("h2",n({},{id:"pasta-documentation"}),"Pasta Documentation"),(0,r.kt)("p",null,"This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer."),(0,r.kt)("p",null,"For more information, refer to ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/Project/documentation"}),"Documenting a project"),"."),(0,r.kt)("h2",n({},{id:"webfolder"}),"WebFolder"),(0,r.kt)("p",null,"Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time. It is automatically created when the Web server is launched for the first time."))}u.isMDXComponent=!0}}]);