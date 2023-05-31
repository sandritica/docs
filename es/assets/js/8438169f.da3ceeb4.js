"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8795],{3905:(e,a,r)=>{r.d(a,{Zo:()=>s,kt:()=>u});var t=r(67294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=t.createContext({}),c=function(e){var a=t.useContext(A),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},s=function(e){var a=c(e.components);return t.createElement(A.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,A=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,m=d["".concat(A,".").concat(u)]||d[u]||p[u]||n;return r?t.createElement(m,i(i({ref:a},s),{},{components:r})):t.createElement(m,i({ref:a},s))}));function u(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var A in a)hasOwnProperty.call(a,A)&&(l[A]=a[A]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18422:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>A,toc:()=>s});r(67294);var t=r(3905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function n(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"creating",title:"Trabajar con un proyecto"},l=void 0,A={unversionedId:"GettingStarted/creating",id:"version-19-R8/GettingStarted/creating",title:"Trabajar con un proyecto",description:"Los proyectos 4D se crean y desarrollan utilizando la aplicaci\xf3n 4D, que ofrece un completo Entorno de Desarrollo Integrado (IDE). 4D Server tambi\xe9n puede crear nuevos proyectos vac\xedos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/GettingStarted/creating.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/creating",permalink:"/docs/es/19-R8/GettingStarted/creating",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20GettingStarted%2Fcreating.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"creating",title:"Trabajar con un proyecto"},sidebar:"docs",previous:{title:"Instalaci\xf3n",permalink:"/docs/es/19-R8/GettingStarted/installation"},next:{title:"Notas del lanzamiento",permalink:"/docs/es/19-R8/Notes/updates"}},c={},s=[{value:"Crear un proyecto",id:"crear-un-proyecto",level:2},{value:"Abrir un proyecto",id:"abrir-un-proyecto",level:2},{value:"Opciones",id:"opciones",level:3},{value:"Atajos de apertura de los proyectos",id:"atajos-de-apertura-de-los-proyectos",level:2},{value:"Abrir un proyecto con un archivo 4DLink",id:"abrir-un-proyecto-con-un-archivo-4dlink",level:3},{value:"Sobre 4DLink Files",id:"sobre-4dlink-files",level:2},{value:"Guardado de archivos",id:"guardado-de-archivos",level:2}],p={toc:s};function d(e){var{components:a}=e,i=n(e,["components"]);return(0,t.kt)("wrapper",o({},p,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Los proyectos 4D se crean y desarrollan utilizando la aplicaci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"4D"),", que ofrece un completo Entorno de Desarrollo Integrado (IDE). ",(0,t.kt)("strong",{parentName:"p"},"4D Server")," tambi\xe9n puede crear nuevos proyectos vac\xedos."),(0,t.kt)("p",null,"El desarrollo multiusuario se gestiona a trav\xe9s de herramientas est\xe1ndar del repositorio de ",(0,t.kt)("strong",{parentName:"p"},"control de fuentes")," (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones."),(0,t.kt)("h2",o({},{id:"crear-un-proyecto"}),"Crear un proyecto"),(0,t.kt)("p",null,"Se pueden crear nuevos proyectos de aplicaciones 4D desde ",(0,t.kt)("strong",{parentName:"p"},"4D")," o ",(0,t.kt)("strong",{parentName:"p"},"4D Server"),". En cualquier caso, los archivos del proyecto se almacenan en la m\xe1quina local."),(0,t.kt)("p",null,"Para crear un nuevo proyecto:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Lance 4D o 4D Server.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Haga una de las siguientes cosas:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Seleccione ",(0,t.kt)("strong",{parentName:"li"},"Nuevo > Proyecto")," desde el men\xfa ",(0,t.kt)("strong",{parentName:"li"},"Archivo"),": ",(0,t.kt)("img",{src:r(30150).Z,width:"558",height:"199"})),(0,t.kt)("li",{parentName:"ul"},"(S\xf3lo 4D) Seleccione ",(0,t.kt)("strong",{parentName:"li"},"Proyecto...")," en el bot\xf3n de la barra de herramientas ",(0,t.kt)("strong",{parentName:"li"},"Nuevo"),":",(0,t.kt)("p",null,(0,t.kt)("img",{src:r(42392).Z,width:"176",height:"230"})),"Aparece un di\xe1logo est\xe1ndar ",(0,t.kt)("strong",{parentName:"li"},"Guardar")," para que pueda elegir el nombre y la ubicaci\xf3n de la carpeta principal del proyecto 4D."))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Introduzca el nombre de su carpeta de proyecto y haga clic en ",(0,t.kt)("strong",{parentName:"p"},"Guardar"),". Este nombre se utilizar\xe1:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"como nombre de la carpeta del proyecto,"),(0,t.kt)("li",{parentName:"ul"},"como nombre del archivo .4DProject en el primer nivel de la ",(0,t.kt)("a",o({parentName:"li"},{href:"/docs/es/19-R8/Project/architecture#project-folder"}),'carpeta "Project"'),".")),(0,t.kt)("p",{parentName:"li"},"Puedes elegir cualquier nombre permitido por su sistema operativo. Sin embargo, si su proyecto est\xe1 destinado a funcionar en otros sistemas o a ser guardado a trav\xe9s de una herramienta de control de fuente, debe tener en cuenta sus recomendaciones de denominaci\xf3n espec\xedficas."))),(0,t.kt)("p",null,"Al validar el di\xe1logo ",(0,t.kt)("strong",{parentName:"p"},"Guardar"),", 4D cierra el proyecto actual (si lo hay), crea una carpeta de proyecto en la ubicaci\xf3n indicada y coloca en ella todos los archivos necesarios para el proyecto. Para m\xe1s informaci\xf3n, consulte ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R8/Project/architecture"}),"Arquitectura de un proyecto 4D"),"."),(0,t.kt)("p",null,"A continuaci\xf3n, puede empezar a desarrollar su proyecto."),(0,t.kt)("h2",o({},{id:"abrir-un-proyecto"}),"Abrir un proyecto"),(0,t.kt)("p",null,"Para abrir un proyecto existente desde 4D:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Haga una de las siguientes cosas:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Seleccione ",(0,t.kt)("strong",{parentName:"li"},"Abrir/Proyecto local...")," desde el men\xfa ",(0,t.kt)("strong",{parentName:"li"},"Archivo")," o del bot\xf3n",(0,t.kt)("strong",{parentName:"li"},"Abrir")," de la barra de herramientas."),(0,t.kt)("li",{parentName:"ul"},"Seleccione ",(0,t.kt)("strong",{parentName:"li"},"Abrir un proyecto de aplicaci\xf3n local")," en el di\xe1logo del Asistente de Bienvenida")))),(0,t.kt)("p",null,"Aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos."),(0,t.kt)("ol",o({},{start:2}),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Seleccione el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4dproject")," del proyecto (situado dentro de la carpeta ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/es/19-R8/Project/architecture#project-folder"}),'"Project" del proyecto'),") y haga clic en ",(0,t.kt)("strong",{parentName:"p"},"Abrir"),"."),(0,t.kt)("p",{parentName:"li"},"Por defecto, el proyecto se abre con su archivo de datos actual. Se sugieren otros tipos de archivos:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Archivos de proyectos empaquetados"),": extensi\xf3n ",(0,t.kt)("inlineCode",{parentName:"li"},".4dz")," - proyectos de despliegue"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Archivos de acceso directo"),": extensi\xf3n ",(0,t.kt)("inlineCode",{parentName:"li"},".4DLink")," - almacenan los par\xe1metros adicionales necesarios para abrir proyectos o aplicaciones (direcciones, identificadores, etc.)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Archivos binarios"),": extensi\xf3n ",(0,t.kt)("inlineCode",{parentName:"li"},".4db")," o ",(0,t.kt)("inlineCode",{parentName:"li"},".4dc")," - formatos de base de datos 4D heredados")))),(0,t.kt)("h3",o({},{id:"opciones"}),"Opciones"),(0,t.kt)("p",null,"Adem\xe1s de las opciones sistema est\xe1ndar, la caja de di\xe1logo ",(0,t.kt)("em",{parentName:"p"},"Abrir")," de 4D ofrece dos men\xfas con opciones espec\xedficas disponibles utilizando el bot\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Abrir")," y el men\xfa ",(0,t.kt)("strong",{parentName:"p"},"Archivo de datos"),"."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Abrir")," - modo de apertura del proyecto:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Interpretado")," o ",(0,t.kt)("strong",{parentName:"li"},"Compilado"),": estas opciones est\xe1n disponibles cuando el proyecto seleccionado contiene ",(0,t.kt)("a",o({parentName:"li"},{href:"/docs/es/19-R8/Concepts/interpreted-compiled"}),"c\xf3digo interpretado y compilado"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("a",o({parentName:"strong"},{href:"/docs/es/19-R8/MSC/overview"}),"Centro de seguridad y de mantenimiento")),": apertura en modo seguro que permite el acceso a los proyectos da\xf1ados para realizar las reparaciones necesarias."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Archivo de datos")," - especifica el archivo de datos a utilizar con el proyecto. Por defecto, est\xe1 seleccionada la opci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Archivo de datos actual"),"."))),(0,t.kt)("h2",o({},{id:"atajos-de-apertura-de-los-proyectos"}),"Atajos de apertura de los proyectos"),(0,t.kt)("p",null,"4D ofrece varias formas de abrir proyectos directamente y evitar el di\xe1logo de apertura:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"mediante las opciones de men\xfa:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Barra de men\xfas")," - ",(0,t.kt)("strong",{parentName:"li"},"Archivo")," > ",(0,t.kt)("strong",{parentName:"li"},"Abrir proyectos recientes / {project name}")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Barra de herramientas 4D")," - Seleccione el proyecto en el men\xfa asociado al bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Abrir")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"v\xeda las preferencias:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Fije la preferencia general ",(0,t.kt)("strong",{parentName:"li"},"Al inicio")," en ",(0,t.kt)("strong",{parentName:"li"},"Abrir el \xfaltimo proyecto utilizado"),"."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"utilizando un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4DLink"),"."))),(0,t.kt)("h3",o({},{id:"abrir-un-proyecto-con-un-archivo-4dlink"}),"Abrir un proyecto con un archivo 4DLink"),(0,t.kt)("p",null,"Puede utilizar un archivo ",(0,t.kt)("a",o({parentName:"p"},{href:"#about-4DLink-files"}),(0,t.kt)("inlineCode",{parentName:"a"},".4DLink"))," para lanzar la aplicaci\xf3n 4D y abrir el proyecto 4D objetivo. Hay dos maneras de hacer esto:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"haga doble clic o arrastre y suelte el archivo ",(0,t.kt)("inlineCode",{parentName:"li"},".4DLink")," en la aplicaci\xf3n 4D"),(0,t.kt)("li",{parentName:"ul"},"vaya a ",(0,t.kt)("strong",{parentName:"li"},"Archivo")," > ",(0,t.kt)("strong",{parentName:"li"},"Abrir los proyectos recientes")," y seleccione un proyecto")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"open-recent-projects",src:r(41555).Z,width:"500",height:"225"})),(0,t.kt)("p",null,'Un archivo .4DLink de tipo "proyecto remoto" puede copiarse y utilizarse en varias m\xe1quinas.'),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Tambi\xe9n es posible seleccionar un archivo 4DLink en la caja de di\xe1logo de apertura de 4D y 4D Server (abriendo s\xf3lo el proyecto local).")),(0,t.kt)("h2",o({},{id:"sobre-4dlink-files"}),"Sobre 4DLink Files"),(0,t.kt)("p",null,"Los archivos con la extensi\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},".4DLink")," son archivos XML que contienen par\xe1metros destinados a automatizar y a simplificar la apertura de proyectos 4D locales o remotos."),(0,t.kt)("p",null,"Los archivos ",(0,t.kt)("inlineCode",{parentName:"p"},".4DLink")," pueden guardar la direcci\xf3n de un proyecto 4D, as\xed como sus identificadores de conexi\xf3n y el modo de apertura, lo que permite ahorrar tiempo al abrir los proyectos."),(0,t.kt)("p",null,"4D genera autom\xe1ticamente un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4DLink")," cuando se abre un proyecto local por primera vez o cuando se conecta a un servidor por primera vez. El archivo se almacena en la carpeta de preferencias locales en la siguiente ubicaci\xf3n:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Windows 7 y superior: C:|Users\\NuserName\\NappData\\Roaming\\4D\\Favorites vXX\\"),(0,t.kt)("li",{parentName:"ul"},"OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/")),(0,t.kt)("p",null,'XX representa el n\xfamero de versi\xf3n de la aplicaci\xf3n. Por ejemplo, "Favoritos v19" para 4D v19.'),(0,t.kt)("p",null,"Esa carpeta est\xe1 dividida en dos subcarpetas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"la carpeta ",(0,t.kt)("strong",{parentName:"li"},"Local")," contiene los archivos ",(0,t.kt)("inlineCode",{parentName:"li"},".4DLink")," que pueden utilizarse para abrir proyectos locales"),(0,t.kt)("li",{parentName:"ul"},"la carpeta ",(0,t.kt)("strong",{parentName:"li"},"Remote")," contiene los archivos ",(0,t.kt)("inlineCode",{parentName:"li"},".4DLink")," de proyectos remotos recientes")),(0,t.kt)("p",null,"Los archivos ",(0,t.kt)("inlineCode",{parentName:"p"},".4DLink")," tambi\xe9n pueden crearse con un editor XML."),(0,t.kt)("p",null,"4D ofrece un DTD que describe las llaves XML que pueden utilizarse para crear un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4DLink"),". Este DTD se llama database_link.dtd y se encuentra en la subcarpeta \\Resources\\DTD de la aplicaci\xf3n 4D."),(0,t.kt)("h2",o({},{id:"guardado-de-archivos"}),"Guardado de archivos"),(0,t.kt)("p",null,"Cuando trabaja en un proyecto en 4D, puede utilizar los editores integrados de 4D para crear, modificar o guardar elementos de la estructura, los m\xe9todos, los formularios, etc. Las modificaciones se guardan en el disco cuando se selecciona una opci\xf3n de men\xfa ",(0,t.kt)("strong",{parentName:"p"},"Guardar"),", o cuando la ventana del editor pierde o recupera el foco."),(0,t.kt)("p",null,"Dado que los editores utilizan archivos en el disco, podr\xedan producirse conflictos si se modifica el mismo archivo o incluso se borra desde diferentes ubicaciones. Por ejemplo, si se edita el mismo m\xe9todo en una ventana del Editor de C\xf3digo ",(0,t.kt)("em",{parentName:"p"},"y")," en un editor de texto, al guardar ambas modificaciones se producir\xe1 un conflicto."),(0,t.kt)("p",null,"El marco de desarrollo 4D incluye un gestor de acceso a los archivos para controlar los accesos simult\xe1neos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"if an open file is read-only at the OS level, a locked icon is displayed in the editor: ",(0,t.kt)("img",{src:r(45367).Z,width:"22",height:"31"})),(0,t.kt)("li",{parentName:"ul"},"si un archivo abierto se edita simult\xe1neamente desde diferentes ubicaciones, 4D muestra un di\xe1logo de alerta al intentar guardar los cambios:")),(0,t.kt)("p",null,(0,t.kt)("img",{src:r(97491).Z,width:"352",height:"185"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"S\xed"),": ignorar los cambios del editor y volver a cargar la versi\xf3n modificada"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"No"),": guardar los cambios y sobrescribir la otra versi\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Cancelar"),": no guardar")),(0,t.kt)("p",null,"Esta funcionalidad est\xe1 activa para todos los editores 4D integrados (Estructura, Formulario, M\xe9todo, Par\xe1metros y Caja de herramientas)."))}d.isMDXComponent=!0},41555:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/4Dlinkfiles-96f51627e9276395742d3cb918b30a6b.png"},45367:(e,a,r)=>{r.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAIAAABs2aqkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAE1SURBVEhL7ZQ9DoMwDEZ7ScaOPQMTDEhcgw1xAK7BIcoBUNmRaF9iKwk/EVLbAVV9U2x//uJEkMv4Mae1aNs2TdOrhQWhFiIsLPq+z/M8y7Ku6x4WFoQkKalow8ICadM08zw/AwhJUlLRBm/BwGxIwzRNdV3fLCwISVKKnchbcGzGZlvaiqK4W1gQkqSEQKVLvAWXx+FRsznNkmRBSJISAkmu8BZJkiAFFpqyxPKOv4XnSxbDMFRVheIQZIil02EsKJRlSU12i4EAGWLpdBgLPp7DfgEZYul0GAsmVEmATK5BAEnpdJzHwv1gIbsWuz+bsXC/+SG7v7yxcI+NCiPEHh5jAdS2T14IJQTIRB+iFryulIFRV/dCSFKqu4+wWggMyVG5MLlLgZBk7OGEhcV7/IjFOL4AhB3iYxYMqdEAAAAASUVORK5CYII="},97491:(e,a,r)=>{r.d(a,{Z:()=>t});const t="data:image/png;base64,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"},30150:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/projectCreate1-2b4b8620d716caed56f0b5edbc72d0e9.png"},42392:(e,a,r)=>{r.d(a,{Z:()=>t});const t="data:image/png;base64,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"}}]);