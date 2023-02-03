"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63875],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||p[k]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11852:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"architecture",title:"Architecture of a 4D project"},i=void 0,d={unversionedId:"Project/architecture",id:"version-18/Project/architecture",title:"Architecture of a 4D project",description:"A 4D project is made of several folders and files, stored within a single parent database folder (package folder). For example:",source:"@site/versioned_docs/version-18/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/18/Project/architecture",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"architecture",title:"Architecture of a 4D project"},sidebar:"docs",previous:{title:"Creating a 4D project",permalink:"/docs/18/Project/creating"},next:{title:"Developing a project",permalink:"/docs/18/Project/developing"}},s={},m=[{value:"Project folder",id:"project-folder",level:2},{value:"<em>databaseName</em>.4DProject file",id:"databasename4dproject-file",level:3},{value:"Sources folder",id:"sources-folder",level:3},{value:"DatabaseMethods folder",id:"databasemethods-folder",level:4},{value:"Methods folder",id:"methods-folder",level:4},{value:"Classes folder",id:"classes-folder",level:4},{value:"Forms folder",id:"forms-folder",level:4},{value:"TableForms folder",id:"tableforms-folder",level:4},{value:"Triggers folder",id:"triggers-folder",level:4},{value:"Trash folder",id:"trash-folder",level:3},{value:"DerivedData folder",id:"deriveddata-folder",level:3},{value:"Resources folder",id:"resources-folder",level:2},{value:"Data folder",id:"data-folder",level:2},{value:"Settings folder",id:"settings-folder",level:3},{value:"Logs folder",id:"logs-folder",level:3},{value:"Settings folder",id:"settings-folder-1",level:2},{value:"userPreferences.<em>userName</em> folder",id:"userpreferencesusername-folder",level:2},{value:"Components folder",id:"components-folder",level:2},{value:"Plugins folder",id:"plugins-folder",level:2}],p={toc:m};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A 4D project is made of several folders and files, stored within a single parent database folder (package folder). For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MyProject",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Components"),(0,n.kt)("li",{parentName:"ul"},"Data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Logs"),(0,n.kt)("li",{parentName:"ul"},"Settings"))),(0,n.kt)("li",{parentName:"ul"},"Documentation"),(0,n.kt)("li",{parentName:"ul"},"Plugins"),(0,n.kt)("li",{parentName:"ul"},"Project",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DerivedData"),(0,n.kt)("li",{parentName:"ul"},"Sources"),(0,n.kt)("li",{parentName:"ul"},"Trash"))),(0,n.kt)("li",{parentName:"ul"},"Resources"),(0,n.kt)("li",{parentName:"ul"},"Settings"),(0,n.kt)("li",{parentName:"ul"},"userPreferences.username"),(0,n.kt)("li",{parentName:"ul"},"WebFolder")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on ',(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),".")),(0,n.kt)("h2",r({},{id:"project-folder"}),"Project folder"),(0,n.kt)("p",null,"The Project folder typically contains the following hierarchy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"databaseName"),".4DProject file"),(0,n.kt)("li",{parentName:"ul"},"Sources",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Classes"),(0,n.kt)("li",{parentName:"ul"},"DatabaseMethods"),(0,n.kt)("li",{parentName:"ul"},"Methods"),(0,n.kt)("li",{parentName:"ul"},"Forms"),(0,n.kt)("li",{parentName:"ul"},"TableForms"),(0,n.kt)("li",{parentName:"ul"},"Triggers"))),(0,n.kt)("li",{parentName:"ul"},"DerivedData"),(0,n.kt)("li",{parentName:"ul"},"Trash (if any)")),(0,n.kt)("h3",r({},{id:"databasename4dproject-file"}),(0,n.kt)("em",{parentName:"h3"},"databaseName"),".4DProject file"),(0,n.kt)("p",null,"Project development file, used to designate and launch the project. This file can be opened by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4D Developer"),(0,n.kt)("li",{parentName:"ul"},"4D Server (read-only, see ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/18/Project/developing"}),"Developing a project"),")")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In 4D projects, development is done with 4D Developer and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes."),(0,n.kt)("h3",r({},{id:"sources-folder"}),"Sources folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"catalog.4DCatalog"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Table and field definitions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"folders.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Explorer folder definitions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"menus.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menu definitions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Structure")," database settings. They are not taken into account if ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("a",r({parentName:"em"},{href:"#settings-folder-1"}),"user settings"))," or ",(0,n.kt)("em",{parentName:"td"},(0,n.kt)("a",r({parentName:"em"},{href:"#settings-folder"}),"user settings for data"))," are defined. ",(0,n.kt)("strong",{parentName:"td"},"Warning"),": In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use ",(0,n.kt)("em",{parentName:"td"},"user settings")," or ",(0,n.kt)("em",{parentName:"td"},"user settings for data")," to define custom settings."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"tips.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Defined tips"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"lists.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Defined lists"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"filters.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Defined filters"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"styleSheets.css"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CSS style sheets"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CSS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"styleSheets_mac.css"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mac css style sheets (from converted binary database)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CSS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"styleSheets_windows.css"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Windows css style sheets (from converted binary database)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CSS")))),(0,n.kt)("h4",r({},{id:"databasemethods-folder"}),"DatabaseMethods folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"databaseMethodName"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Database methods defined in the database. One file per database method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")))),(0,n.kt)("h4",r({},{id:"methods-folder"}),"Methods folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"methodName"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Project methods defined in the database. One file per method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")))),(0,n.kt)("h4",r({},{id:"classes-folder"}),"Classes folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"className"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")))),(0,n.kt)("h4",r({},{id:"forms-folder"}),"Forms folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Project form description"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Project form method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,n.kt)("em",{parentName:"td"},"pictureName")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Project form static picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,n.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object methods. One file per object method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")))),(0,n.kt)("h4",r({},{id:"tableforms-folder"}),"TableForms folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Input/",(0,n.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Input table form description (n is the table number)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Input/",(0,n.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,n.kt)("em",{parentName:"td"},"pictureName")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Input table form static pictures"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Input/",(0,n.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Input table form method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Input/",(0,n.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,n.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Input form object methods. One file per object method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Output/",(0,n.kt)("em",{parentName:"td"},"formName"),"/form.4DForm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Output table form description (n is the table number)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Output/",(0,n.kt)("em",{parentName:"td"},"formName"),"/Images/",(0,n.kt)("em",{parentName:"td"},"pictureName")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Output table form static pictures"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"picture")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Output/",(0,n.kt)("em",{parentName:"td"},"formName"),"/method.4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Output table form method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n"),"/Output/",(0,n.kt)("em",{parentName:"td"},"formName"),"/ObjectMethods/",(0,n.kt)("em",{parentName:"td"},"objectName"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Output form object methods. One file per object method"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")))),(0,n.kt)("h4",r({},{id:"triggers-folder"}),"Triggers folder"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"table_",(0,n.kt)("em",{parentName:"td"},"n"),".4dm"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Trigger methods defined in the database. One trigger file per table (n is the table number)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nThe .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools."),(0,n.kt)("h3",r({},{id:"trash-folder"}),"Trash folder"),(0,n.kt)("p",null,"The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Methods"),(0,n.kt)("li",{parentName:"ul"},"Forms"),(0,n.kt)("li",{parentName:"ul"},"TableForms")),(0,n.kt)("p",null,'Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the ',(0,n.kt)("a",r({parentName:"p"},{href:"#sources"}),"Sources")," folder."),(0,n.kt)("h3",r({},{id:"deriveddata-folder"}),"DerivedData folder"),(0,n.kt)("p",null,"The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder."),(0,n.kt)("h2",r({},{id:"resources-folder"}),"Resources folder"),(0,n.kt)("p",null,"The Resources folder contains any custom database resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the ",(0,n.kt)("em",{parentName:"p"},"4D Server Reference Manual"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"item")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Database resource files and folders"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"various")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Images/Library/",(0,n.kt)("em",{parentName:"td"},"item")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"picture")))),(0,n.kt)("p",null,"(*) only if the project was exported from a .4db binary database."),(0,n.kt)("h2",r({},{id:"data-folder"}),"Data folder"),(0,n.kt)("p",null,"The data folder contains the data file and all files and folders relating to the data."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"data.4dd(*)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the ",(0,n.kt)("em",{parentName:"td"},"Open data file")," dialog box will then appear so that you can select the data file to use or create a new one"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"binary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"data.journal"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user\u2019s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"binary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"data.match"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"(internal) UUID matching table number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")))),(0,n.kt)("p",null,"(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location."),(0,n.kt)("h3",r({},{id:"settings-folder"}),"Settings folder"),(0,n.kt)("p",null,"This folder contains ",(0,n.kt)("strong",{parentName:"p"},"user settings files for data")," used for database administration."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These settings take priority over ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",r({parentName:"strong"},{href:"#settings-folder-1"}),"user settings files"))," and ",(0,n.kt)("strong",{parentName:"p"},"structure settings")," files.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Database backup settings, used to set the ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/18/Backup/settings"}),"backup options"),") when the database is run with this data file. Keys concerning backup configuration are described in the ",(0,n.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"settings.4DSettings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Custom database settings for this data file"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"directory.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Description of 4D groups, users, and their access rights when the database is run with this data file."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")))),(0,n.kt)("h3",r({},{id:"logs-folder"}),"Logs folder"),(0,n.kt)("p",null,"The Logs folder contains all log files used by the project. Log files include, in particular:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"database conversion,"),(0,n.kt)("li",{parentName:"ul"},"web server requests,"),(0,n.kt)("li",{parentName:"ul"},"backup/restore activities journal (",(0,n.kt)("em",{parentName:"li"},"Backup Journal","[","xxx].txt"),", see ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/18/Backup/backup#backup-journal"}),"Backup journal"),")"),(0,n.kt)("li",{parentName:"ul"},"command debugging,"),(0,n.kt)("li",{parentName:"ul"},"4D Server requests (generated on client machines and on the server).")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"An additional Logs folder is available in the system user preferences folder (active 4D folder, see ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html"}),"Get 4D folder")," command) for maintenance log files and in cases where data folder is read-only.")),(0,n.kt)("h2",r({},{id:"settings-folder-1"}),"Settings folder"),(0,n.kt)("p",null,"This folder contains ",(0,n.kt)("strong",{parentName:"p"},"user settings files")," used for database administration. File are added to the folder when necessary."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If a data settings file exists in a Settings folder ",(0,n.kt)("a",r({parentName:"p"},{href:"#settings-folder"}),"in the data folder"),", it takes priority over user settings file.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"directory.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Description of 4D groups and users for the database, as well as their access rights"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Build settings file, created automatically when using the application builder dialog box or the ",(0,n.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")," command"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Backup.4DSettings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Database backup settings, used to set the ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/18/Backup/settings"}),"backup options"),") when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the ",(0,n.kt)("em",{parentName:"td"},"backup journal"),". Keys concerning backup configuration are described in the ",(0,n.kt)("em",{parentName:"td"},"4D XML Keys Backup")," manual."),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BuildApp.4DSettings"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Build settings file, created automatically when using the application builder dialog box or the ",(0,n.kt)("inlineCode",{parentName:"td"},"BUILD APPLICATION")," command"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")))),(0,n.kt)("h2",r({},{id:"userpreferencesusername-folder"}),"userPreferences.",(0,n.kt)("em",{parentName:"h2"},"userName")," folder"),(0,n.kt)("p",null,"This folder contains files that memorize user configurations, e.g. break point or window positions. You can just ignore this folder. It contains for example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Contents"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"methodPreferences.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current user method editor preferences"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"methodWindowPositions.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current user window positions for methods"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"formWindowPositions.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current user window positions for forms"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"workspace.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"List of opened windows; on macOS, order of tab windows"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"debuggerCatches.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Caught calls to commands"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"recentTables.json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ordered list of tables"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"JSON")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"preferences.4DPreferences"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Current data path and main window positions"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"XML")))),(0,n.kt)("h2",r({},{id:"components-folder"}),"Components folder"),(0,n.kt)("p",null,"This folder contains the components to be available in the project database only. It must be stored at the same level as the Project folder."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A project database can be used itself as a component:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"for development: put an alias of the .4dproject file in the Components folder of the host database."),(0,n.kt)("li",{parentName:"ul"},"for deployment: build the component (see ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/18/Project/building"}),"Building a project package"),") and put the resulting .4dz file in a .4dbase folder in the Components folder of the host database."))),(0,n.kt)("h2",r({},{id:"plugins-folder"}),"Plugins folder"),(0,n.kt)("p",null,"This folder contains the plug-ins to be available in the project database only. It must be stored at the same level as the Project folder."))}u.isMDXComponent=!0}}]);