"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12832],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),s=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(i,".").concat(k)]||u[k]||p[k]||l;return a?r.createElement(c,o(o({ref:e},m),{},{components:a})):r.createElement(c,o({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:n,o[1]=d;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90363:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"architecture",title:"Arquitetura de um projeto 4D"},d=void 0,i={unversionedId:"Project/architecture",id:"version-18/Project/architecture",title:"Arquitetura de um projeto 4D",description:"Um projeto 4D \xe9 feito de v\xe1rias pastas e arquivos, armazenados dentro de uma \xfanica pasta pai do banco de dados (pasta pacote). Por exemplo:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/pt/18/Project/architecture",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"architecture",title:"Arquitetura de um projeto 4D"},sidebar:"docs",previous:{title:"Criar um projeto 4D",permalink:"/docs/pt/18/Project/creating"},next:{title:"Desenvolver um projeto",permalink:"/docs/pt/18/Project/developing"}},s={},m=[{value:"Project folder",id:"project-folder",level:2},{value:"Arquivo <em>nomBase</em>.4DProject",id:"arquivo-nombase4dproject",level:3},{value:"Sources folder",id:"sources-folder",level:3},{value:"DatabaseMethods folder",id:"databasemethods-folder",level:4},{value:"Methods folder",id:"methods-folder",level:4},{value:"Classes folder",id:"classes-folder",level:4},{value:"Pasta Forms",id:"pasta-forms",level:4},{value:"TableForms folder",id:"tableforms-folder",level:4},{value:"Triggers folder",id:"triggers-folder",level:4},{value:"Pasta Trash",id:"pasta-trash",level:3},{value:"DerivedData folder",id:"deriveddata-folder",level:3},{value:"Resources folder",id:"resources-folder",level:2},{value:"Pasta Data",id:"pasta-data",level:2},{value:"Settings folder",id:"settings-folder",level:3},{value:"Pasta Logs",id:"pasta-logs",level:3},{value:"Settings folder",id:"settings-folder-1",level:2},{value:"userPreferences.<em>userName</em> folder",id:"userpreferencesusername-folder",level:2},{value:"Components folder",id:"components-folder",level:2},{value:"Plugins folder",id:"plugins-folder",level:2}],p={toc:m};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um projeto 4D \xe9 feito de v\xe1rias pastas e arquivos, armazenados dentro de uma \xfanica pasta pai do banco de dados (pasta pacote). Por exemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MyProject",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Componentes"),(0,r.kt)("li",{parentName:"ul"},"Dados",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Logs"),(0,r.kt)("li",{parentName:"ul"},"Settings"))),(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Plugins"),(0,r.kt)("li",{parentName:"ul"},"Project",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DerivedData"),(0,r.kt)("li",{parentName:"ul"},"Sources"),(0,r.kt)("li",{parentName:"ul"},"Trash"))),(0,r.kt)("li",{parentName:"ul"},"Resources"),(0,r.kt)("li",{parentName:"ul"},"Settings"),(0,r.kt)("li",{parentName:"ul"},"userPreferences.username"),(0,r.kt)("li",{parentName:"ul"},"WebFolder")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on ',(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,r.kt)("h2",n({},{id:"project-folder"}),"Project folder"),(0,r.kt)("p",null,"The Project folder typically contains the following hierarchy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arquivo ",(0,r.kt)("em",{parentName:"li"},"nomBase"),".4DProject"),(0,r.kt)("li",{parentName:"ul"},"Sources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Classes"),(0,r.kt)("li",{parentName:"ul"},"DatabaseMethods"),(0,r.kt)("li",{parentName:"ul"},"M\xe9todos"),(0,r.kt)("li",{parentName:"ul"},"Formul\xe1rios"),(0,r.kt)("li",{parentName:"ul"},"TableForms"),(0,r.kt)("li",{parentName:"ul"},"Triggers"))),(0,r.kt)("li",{parentName:"ul"},"DerivedData"),(0,r.kt)("li",{parentName:"ul"},"Trash (if any)")),(0,r.kt)("h3",n({},{id:"arquivo-nombase4dproject"}),"Arquivo ",(0,r.kt)("em",{parentName:"h3"},"nomBase"),".4DProject"),(0,r.kt)("p",null,"Project development file, used to designate and launch the project. This file can be opened by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4D Developer"),(0,r.kt)("li",{parentName:"ul"},"4D Server (apenas leitura, ver ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/Project/developing"}),"Desenvolver um projeto"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusu\xe1rios se gerencia atrav\xe9s das ferramentas de controle de vers\xe3o. 4D Server can open .4DProject files for testing purposes."),(0,r.kt)("h3",n({},{id:"sources-folder"}),"Sources folder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"catalog.4DCatalog"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Table and field definitions"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"folders.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Explorer folder definitions"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"menus.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Menu definitions"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Structure")," database settings. They are not taken into account if ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder-1"}),"user settings"))," or ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",n({parentName:"em"},{href:"#settings-folder"}),"user settings for data"))," are defined. ",(0,r.kt)("strong",{parentName:"td"},"Warning"),": In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use ",(0,r.kt)("em",{parentName:"td"},"user settings")," or ",(0,r.kt)("em",{parentName:"td"},"user settings for data")," to define custom settings."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"tips.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dicas definidas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"lists.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Listas definidas"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"filters.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Defined filters"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS style sheets"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mac css style sheets (from converted binary database)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Windows css style sheets (from converted binary database)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CSS")))),(0,r.kt)("h4",n({},{id:"databasemethods-folder"}),"DatabaseMethods folder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"databaseMethodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos de banco definidos na database. One file per database method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"methods-folder"}),"Methods folder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"methodName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos de projeto definidos na database. One file per method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"classes-folder"}),"Classes folder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"className"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"pasta-forms"}),"Pasta Forms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Project form description"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Project form method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Project form static picture"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object methods. One file per object method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"tableforms-folder"}),"TableForms folder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input table form description (n is the table number)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input table form static pictures"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input table form method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Input/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Input form object methods. One file per object method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output table form description (n is the table number)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,r.kt)("em",{parentName:"td"},"pictureName")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output table form static pictures"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output table form method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"n"),"/Output/",(0,r.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,r.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Output form object methods. One file per object method"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("h4",n({},{id:"triggers-folder"}),"Triggers folder"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"table_",(0,r.kt)("em",{parentName:"td"},"n"),".4dm"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todos trigger definidos na database. One trigger file per table (n is the table number)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"text")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools."),(0,r.kt)("h3",n({},{id:"pasta-trash"}),"Pasta Trash"),(0,r.kt)("p",null,"The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"M\xe9todos"),(0,r.kt)("li",{parentName:"ul"},"Formul\xe1rios"),(0,r.kt)("li",{parentName:"ul"},"TableForms")),(0,r.kt)("p",null,'Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the ',(0,r.kt)("a",n({parentName:"p"},{href:"#sources"}),"Sources")," folder."),(0,r.kt)("h3",n({},{id:"deriveddata-folder"}),"DerivedData folder"),(0,r.kt)("p",null,"The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder."),(0,r.kt)("h2",n({},{id:"resources-folder"}),"Resources folder"),(0,r.kt)("p",null,"A pasta Resources cont\xe9m todos os arquivos e pastas de recursos personalizados do banco de dados. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the ",(0,r.kt)("em",{parentName:"p"},"4D Server Reference Manual"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Arquivos e pastas dos recursos do banco de dados"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"v\xe1rios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Images/Library/",(0,r.kt)("em",{parentName:"td"},"item")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"picture")))),(0,r.kt)("p",null,"(*) only if the project was exported from a .4db binary database."),(0,r.kt)("h2",n({},{id:"pasta-data"}),"Pasta Data"),(0,r.kt)("p",null,"The data folder contains the data file and all files and folders relating to the data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.4dd(*)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the ",(0,r.kt)("em",{parentName:"td"},"Open data file")," dialog box will then appear so that you can select the data file to use or create a new one"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.journal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user\u2019s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created. It is generated by default when a database is created."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"binary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"data.match"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"(internal) UUID matching table number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("p",null,"(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location."),(0,r.kt)("h3",n({},{id:"settings-folder"}),"Settings folder"),(0,r.kt)("p",null,"Esta pasta cont\xe9m ",(0,r.kt)("strong",{parentName:"p"},"arquivos de configura\xe7\xe3o de dados")," utilizados para a administra\xe7\xe3o do banco de dados."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estes par\xe2metros t\xeam prioridade sobre os ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"#settings-folder-1"}),"arquivos de propriedades usu\xe1rio"))," e os arquivos de ",(0,r.kt)("strong",{parentName:"p"},"propriedades estrutura"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros de c\xf3pia de seguran\xe7a do banco de dados, utilizados para definir as ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/Backup/settings"}),"op\xe7\xf5es de c\xf3pia de seguran\xe7a"),") quando o banco de dados for lan\xe7ado com este arquivo de dados. Keys concerning backup configuration are described in the ",(0,r.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Propriedades personalizadas de o banco de dados para este arquivo de dados"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o de os grupos e usu\xe1rios de 4D e seus direitos de acesso quando o banco for lan\xe7ado com este arquivo de dados."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")))),(0,r.kt)("h3",n({},{id:"pasta-logs"}),"Pasta Logs"),(0,r.kt)("p",null,"The Logs folder contains all log files used by the project. Log files include, in particular:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"database conversion,"),(0,r.kt)("li",{parentName:"ul"},"web server requests,"),(0,r.kt)("li",{parentName:"ul"},"backup/restore activities journal (",(0,r.kt)("em",{parentName:"li"},"Backup Journal","[","xxx].txt"),", see ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/Backup/backup#backup-journal"}),"Backup journal"),")"),(0,r.kt)("li",{parentName:"ul"},"depura\xe7\xe3o de comandos,"),(0,r.kt)("li",{parentName:"ul"},"4D Server requests (generated on client machines and on the server).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Uma pasta Logs adicional est\xe1 dispon\xedvel na pasta de prefer\xeancias do usu\xe1rio do sistema (pasta 4D ativa, ver ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html"}),"Obter pasta 4D")," comando) para os arquivos de registro de manuten\xe7\xe3o e nos casos em que a pasta de dados for de apenas leitura.")),(0,r.kt)("h2",n({},{id:"settings-folder-1"}),"Settings folder"),(0,r.kt)("p",null,"Esta pasta cont\xe9m ",(0,r.kt)("strong",{parentName:"p"},"arquivos de propriedades usu\xe1rio")," utilizados para a administra\xe7\xe3o do banco de dados. Os arquivos s\xe3o adicionados \xe0 pasta se for necess\xe1rio."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Se existir um arquivo de propriedades de dados ",(0,r.kt)("a",n({parentName:"p"},{href:"#settings-folder"}),"em uma pasta de dados "),", da pasta Dados, tem prioridade sobre o arquivo de propriedades do usu\xe1rio.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"directory.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o dos grupos e usu\xe1rios de 4D para o banco de dados, assim como seus direitos de acesso"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Build settings file, created automatically when using the application builder dialog box or the ",(0,r.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")," command"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Database backup settings, used to set the ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/pt/18/Backup/settings"}),"backup options"),") when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the ",(0,r.kt)("em",{parentName:"td"},"backup journal"),". Keys concerning backup configuration are described in the ",(0,r.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Build settings file, created automatically when using the application builder dialog box or the ",(0,r.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")," command"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h2",n({},{id:"userpreferencesusername-folder"}),"userPreferences.",(0,r.kt)("em",{parentName:"h2"},"userName")," folder"),(0,r.kt)("p",null,"Esta pasta cont\xe9m arquivos que memorizam as configura\xe7\xf5es do usu\xe1rio, por exemplo, o ponto de ruptura ou as posi\xe7\xf5es das janelas. You can just ignore this folder. It contains for example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Conte\xfados"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Formato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodPreferences.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Current user method editor preferences"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"methodWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Current user window positions for methods"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"formWindowPositions.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Current user window positions for forms"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"workspace.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"List of opened windows; on macOS, order of tab windows"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"debuggerCatches.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Caught calls to commands"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"recentTables.json"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Ordered list of tables"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preferences.4DPreferences"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Rota de dados atual e posi\xe7\xf5es da janela principal"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"XML")))),(0,r.kt)("h2",n({},{id:"components-folder"}),"Components folder"),(0,r.kt)("p",null,"Esta carpeta cont\xe9m os componentes que devem estar dispon\xedveis unicamente no banco de dados projeto. It must be stored at the same level as the Project folder."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A project database can be used itself as a component:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"for development: put an alias of the .4dproject file in the Components folder of the host database."),(0,r.kt)("li",{parentName:"ul"},"para o lan\xe7amento: crie o componente (ver ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/18/Project/building"}),"Criar um pacote projeto"),") e ponha o arquivo .4dz resultante em uma pasta .4dbase na pasta Componentes do banco de dados local."))),(0,r.kt)("h2",n({},{id:"plugins-folder"}),"Plugins folder"),(0,r.kt)("p",null,"This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder."))}u.isMDXComponent=!0}}]);