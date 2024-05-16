"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91787],{603905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(667294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=d(t),u=l,b=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return t?n.createElement(b,i(i({ref:a},m),{},{components:t})):n.createElement(b,i({ref:a},m))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=p;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},286070:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});t(667294);var n=t(603905);function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const i={id:"global-stamp",title:"Utilizando el sello global"},r=void 0,s={unversionedId:"ORDA/global-stamp",id:"version-20-R5/ORDA/global-stamp",title:"Utilizando el sello global",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ORDA/global-stamp.md",sourceDirName:"ORDA",slug:"/ORDA/global-stamp",permalink:"/docs/es/ORDA/global-stamp",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglobal-stamp.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"global-stamp",title:"Utilizando el sello global"},sidebar:"docs",previous:{title:"Trabajar con los datos",permalink:"/docs/es/ORDA/entities"},next:{title:"Bases de datos remotas",permalink:"/docs/es/ORDA/datastores"}},d={},m=[{value:"Generalidades",id:"generalidades",level:2},{value:"Configuraci\xf3n del seguimiento de cambios en los datos",id:"configuraci\xf3n-del-seguimiento-de-cambios-en-los-datos",level:2},{value:"Requisitos de estructura",id:"requisitos-de-estructura",level:3},{value:"Uso del Editor de estructuras",id:"uso-del-editor-de-estructuras",level:3},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:m};function p(e){var{components:a}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",l({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"generalidades"}),"Generalidades"),(0,n.kt)("p",null,"4D gestiona autom\xe1ticamente un ",(0,n.kt)("strong",{parentName:"p"},"sello de modificaci\xf3n global")," interno, \xfatil para manejar implementaciones de seguimiento de cambios de datos, por ejemplo para monitorear la actividad, realizar copias de seguridad, ejecutar sincronizaciones incrementales"),(0,n.kt)("p",null,"El sello de modificaci\xf3n global es un n\xfamero, siempre mantenido por 4D, incluso en caso de restauraci\xf3n de la base de datos, importaci\xf3n, etc. Note however that the stamp can be modified using the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setglobalstamp"}),(0,n.kt)("inlineCode",{parentName:"a"},".setGlobalStamp()"))," function."),(0,n.kt)("p",null,"Una vez ",(0,n.kt)("a",l({parentName:"p"},{href:"#configuring-data-change-tracking"}),"configurado y habilitado el seguimiento de cambios de datos"),", las siguientes acciones son ejecutadas autom\xe1ticamente por 4D en cada modificaci\xf3n de registro (a\xf1adir, modificar, borrar):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'El valor actual del sello de modificaci\xf3n global se guarda en el atributo especial "',(0,n.kt)("strong",{parentName:"p"},'GlobalStamp" de la entidad implicada.\nEn caso de eliminaci\xf3n, una nueva entidad tambi\xe9n se a\xf1ade a la tabla `'),'DeletedRecords` con informaci\xf3n sobre la entidad eliminada y el valor actual del sello de modificaci\xf3n global se guarda en el atributo "__Stamp".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Se incrementa el valor del sello de modificaci\xf3n global."))),(0,n.kt)("p",null,"Este mecanismo permite identificar las entidades que han sido modificadas, a\xf1adidas o suprimidas desde un momento dado, y aplicar las medidas oportunas (ver el ejemplo)."),(0,n.kt)("admonition",l({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"No confunda el ",(0,n.kt)("strong",{parentName:"p"},"sello de modificaci\xf3n global")," con el ",(0,n.kt)("strong",{parentName:"p"},"sello de entidad")," interna, utilizado para la ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/ORDA/entities#automatic-optimistic-lock"}),"funcionalidad bloqueo optimista"),".")),(0,n.kt)("h2",l({},{id:"configuraci\xf3n-del-seguimiento-de-cambios-en-los-datos"}),"Configuraci\xf3n del seguimiento de cambios en los datos"),(0,n.kt)("p",null,"By default, the global modification stamp is not created (the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/API/DataStoreClass#getglobalstamp"}),(0,n.kt)("inlineCode",{parentName:"a"},".getGlobalStamp()"))," function returns 0. Para habilitar el seguimiento de cambios en los datos, debe a\xf1adir campos especiales y una tabla a su estructura. Puede utilizar el men\xfa contextual del Editor de estructura para crear autom\xe1ticamente todos los elementos necesarios."),(0,n.kt)("h3",l({},{id:"requisitos-de-estructura"}),"Requisitos de estructura"),(0,n.kt)("p",null,"Para habilitar el seguimiento de cambios de datos, la estructura de la aplicaci\xf3n debe contener al menos una tabla con un campo ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp"),"."),(0,n.kt)("p",null,"Adem\xe1s, para garantizar el correcto funcionamiento de la funcionalidad, se requieren las siguientes condiciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El campo ",(0,n.kt)("inlineCode",{parentName:"li"},"__GlobalStamp")," debe ser del tipo ",(0,n.kt)("em",{parentName:"li"},"Entero 64 bits"),", con las propiedades ",(0,n.kt)("em",{parentName:"li"},"\xedndice autom\xe1tico"),", ",(0,n.kt)("em",{parentName:"li"},"Exponer como recurso REST")," e ",(0,n.kt)("em",{parentName:"li"},"Invisible")," seleccionadas."),(0,n.kt)("li",{parentName:"ul"},"Debe a\xf1adirse una tabla ",(0,n.kt)("inlineCode",{parentName:"li"},"__DeletedRecords"),", con los siguientes campos:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__PrimaryKey"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Llave primaria de la entidad eliminada")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__Stamp"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Entero 64 bits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Sello global justo antes de la eliminaci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__TableName"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de la tabla de entidades eliminada")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"__TableNumber"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Entero largo"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de la tabla de entidades eliminada")))),(0,n.kt)("p",null,"S\xf3lo puede realizar un seguimiento de los cambios de los datos de las tablas que tengan el campo ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp"),"."),(0,n.kt)("admonition",l({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"En el lenguaje 4D, el valor del campo ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp")," debe manejarse a trav\xe9s de una variable de tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"Real"),".")),(0,n.kt)("h3",l({},{id:"uso-del-editor-de-estructuras"}),"Uso del Editor de estructuras"),(0,n.kt)("p",null,"El editor de estructura 4D le permite activar o desactivar el seguimiento de cambios de datos mediante un \xfanico elemento de men\xfa."),(0,n.kt)("p",null,"Para activar el seguimiento de cambios en los datos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Seleccione la(s) tabla(s) para las cuales desea habilitar el seguimiento de cambios de datos."),(0,n.kt)("li",{parentName:"ol"},"Haga clic derecho en una tabla seleccionada y seleccione ",(0,n.kt)("strong",{parentName:"li"},"Enable data change tracking")," en el men\xfa contextual."),(0,n.kt)("li",{parentName:"ol"},"Aparece una caja de di\xe1logo de confirmaci\xf3n. Presione ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("p",null,"4D realiza entonces los siguientes cambios:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se a\xf1ade un campo preconfigurado ",(0,n.kt)("inlineCode",{parentName:"li"},"__GlobalStamp")," a la(s) tabla(s)."),(0,n.kt)("li",{parentName:"ul"},"Si no existe ya, se a\xf1ade a la estructura una tabla ",(0,n.kt)("inlineCode",{parentName:"li"},"__DeletedRecords"),".")),(0,n.kt)("p",null,"Para desactivar el seguimiento de cambios de datos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Seleccione la tabla o tablas para las que desea eliminar el seguimiento de cambios de datos."),(0,n.kt)("li",{parentName:"ol"},"Haga clic derecho en una tabla seleccionada y seleccione ",(0,n.kt)("strong",{parentName:"li"},"Disable data change tracking")," en el men\xfa contextual."),(0,n.kt)("li",{parentName:"ol"},"Aparece una caja de di\xe1logo de confirmaci\xf3n. Presione ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("p",null,"4D elimina entonces el campo ",(0,n.kt)("inlineCode",{parentName:"p"},"__GlobalStamp")," de la(s) tabla(s). Tenga en cuenta que si desea eliminar la tabla ",(0,n.kt)("inlineCode",{parentName:"p"},"__DeletedRecords"),", deber\xe1 hacerlo manualmente."),(0,n.kt)("h2",l({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $oldStamp : Real\nvar $tableName : Text\nvar $modifiedEmps : cs.EmployeeSelection\nvar $deletedEmpsInfo : cs.__DeletedRecordsSelection\n\n$tableName:="Employee"\n$oldStamp:=... //load the previous stamp value  \n    //from which you want to compare the current stamp\n\nIf ($oldStamp # ds.getGlobalStamp())\n        //get all new or modified entities\n    $modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)\n        //get all deleted entities\n    $deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\\\n    $oldStamp; $tableName)\nEnd if\n')))}p.isMDXComponent=!0}}]);