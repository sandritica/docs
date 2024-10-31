"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91820],{685594:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=a(474848),r=a(28453);const o={id:"paths",title:"Rutas de acceso"},l=void 0,d={id:"Concepts/paths",title:"Rutas de acceso",description:"Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gesti\xf3n de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/es/Concepts/paths",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"paths",title:"Rutas de acceso"},sidebar:"docs",previous:{title:"Identificadores",permalink:"/docs/es/Concepts/identifiers"},next:{title:"Commands",permalink:"/docs/es/category/commands"}},c={},i=[{value:"Rutas de los filesystem",id:"rutas-de-los-filesystem",level:2},{value:"Sintaxis POSIX",id:"sintaxis-posix",level:2},{value:"Sintaxis espec\xedfica de la plataforma",id:"sintaxis-espec\xedfica-de-la-plataforma",level:2},{value:"Windows",id:"windows",level:3},{value:"Rutas de acceso Windows y secuencias de escape",id:"rutas-de-acceso-windows-y-secuencias-de-escape",level:4},{value:"macOS",id:"macos",level:3},{value:"Rutas absolutas y relativas",id:"rutas-absolutas-y-relativas",level:2},{value:"Constructores <code>File</code> y <code>Folder</code>",id:"constructores-file-y-folder",level:3},{value:"Funciones de carpeta <code>.file()</code> y <code>.folder()</code>",id:"funciones-de-carpeta-file-y-folder",level:3},{value:"Ejemplos",id:"ejemplos",level:2}];function t(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gesti\xf3n de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Adem\xe1s, los objetos archivo y carpeta soportan los ",(0,n.jsx)(s.code,{children:"fileSystems"}),", que ofrecen una ruta contextual a las carpetas principales de la aplicaci\xf3n."]}),"\n",(0,n.jsx)(s.h2,{id:"rutas-de-los-filesystem",children:"Rutas de los filesystem"}),"\n",(0,n.jsxs)(s.p,{children:["4D acepta varios ",(0,n.jsx)(s.code,{children:"filesystem"})," que designan las carpetas 4D espec\xedficas con una ubicaci\xf3n variable en macOS y Windows. Una ruta del sistema de archivos se eval\xfaa con respecto al contexto y se devuelve como una ruta absoluta."]}),"\n",(0,n.jsx)(s.p,{children:"Las rutas de los filesystem son \xfatiles por dos razones principales:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Independencia: puede trasladar su soluci\xf3n de un lugar a otro independientemente del sistema operativo, sin tener que preocuparse por las rutas,"}),"\n",(0,n.jsx)(s.li,{children:"Seguridad: ning\xfan c\xf3digo puede acceder a los elementos situados por encima de la ra\xedz del sistema de los file system en el disco (sandboxing)."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Se soportan los siguientes nombres de rutas de filesystem:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"filesystem"}),(0,n.jsx)(s.th,{children:"Designa"}),(0,n.jsx)(s.th,{children:"Ejemplo"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'"/DATA"'}),(0,n.jsx)(s.td,{children:"Carpeta de datos actual"}),(0,n.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Data\\"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'"/LOGS"'}),(0,n.jsx)(s.td,{children:"Carpeta Logs"}),(0,n.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Data\\Logs\\"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'"/PACKAGE"'}),(0,n.jsx)(s.td,{children:"Carpeta ra\xedz del proyecto (con o sin extensi\xf3n 4dbase)"}),(0,n.jsx)(s.td,{children:'"C:\\MyApps\\Students\\"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'"/PROJECT"'}),(0,n.jsx)(s.td,{children:"Carpeta Project"}),(0,n.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Project\\"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'"/RESOURCES"'}),(0,n.jsx)(s.td,{children:"Carpeta de recursos actual del proyecto"}),(0,n.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Resources\\"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:'"/SOURCES"'}),(0,n.jsx)(s.td,{children:"Carpeta de fuentes del proyecto actual"}),(0,n.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Project\\Sources\\"'})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"sintaxis-posix",children:"Sintaxis POSIX"}),"\n",(0,n.jsxs)(s.p,{children:["La sintaxis POSIX es compatible con todas las plataformas. ",(0,n.jsx)(s.strong,{children:"Se recomienda la sintaxis POSIX"})," ya que es la m\xe1s flexible. Se utiliza por defecto (devuelto por las propiedades ",(0,n.jsx)(s.a,{href:"/docs/es/API/FileClass#path",children:"file.path"})," y ",(0,n.jsx)(s.a,{href:"/docs/es/API/FolderClass#path",children:"folder.path"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"Con esta sintaxis:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'las carpetas est\xe1n separadas por "/"'}),"\n",(0,n.jsx)(s.li,{children:'los nombres de ruta absolutos empiezan por "/"'}),"\n",(0,n.jsx)(s.li,{children:'para subir una carpeta en una ruta relativa, utilice "../" delante del nombre de la ruta (por seguridad, no puede subir en el sistema de archivos).'}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In POSIX syntax, you will generally use ",(0,n.jsx)(s.code,{children:"filesystem"})," pathnames with ",(0,n.jsx)(s.a,{href:"/docs/es/commands/file",children:(0,n.jsx)(s.code,{children:"File"})})," and ",(0,n.jsx)(s.a,{href:"/docs/es/commands/folder",children:(0,n.jsx)(s.code,{children:"Folder"})})," commands, for example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'var $pathFile : 4D.File\nvar $pathFolder : 4D.Folder\n$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,n.jsx)(s.h2,{id:"sintaxis-espec\xedfica-de-la-plataforma",children:"Sintaxis espec\xedfica de la plataforma"}),"\n",(0,n.jsxs)(s.p,{children:["La sintaxis espec\xedfica de la plataforma depende del sistema operativo en el que se ejecute el comando. Tenga en cuenta que al crear un objeto archivo o carpeta con esta sintaxis, debe declararlo utilizando la constante ",(0,n.jsx)(s.code,{children:"fk platform path"})," como par\xe1metro."]}),"\n",(0,n.jsx)(s.h3,{id:"windows",children:"Windows"}),"\n",(0,n.jsx)(s.p,{children:"Se soportan los siguientes modelos:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'los separadores de carpetas son ""'}),"\n",(0,n.jsx)(s.li,{children:'el texto contiene ":" y "" como segundo y tercer caracter,'}),"\n",(0,n.jsx)(s.li,{children:'el texto comienza con "\\".'}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Examples with ",(0,n.jsx)(s.a,{href:"/docs/es/commands/folder",children:(0,n.jsx)(s.code,{children:"Folder"})}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,n.jsx)(s.h4,{id:"rutas-de-acceso-windows-y-secuencias-de-escape",children:"Rutas de acceso Windows y secuencias de escape"}),"\n",(0,n.jsxs)(s.p,{children:["El lenguaje 4D permite utilizar ",(0,n.jsx)(s.a,{href:"/docs/es/Concepts/quick-tour#escape-sequences",children:"secuencias de escape"}),". Las secuencias de escape comienzan con una barra invertida ",(0,n.jsx)(s.code,{children:"\\"}),", seguida de un caracter. Por ejemplo, ",(0,n.jsx)(s.code,{children:"\\t"})," es la secuencia de escape para el caracter ",(0,n.jsx)(s.code,{children:"Tab"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Dado que el caracter ",(0,n.jsx)(s.code,{children:"\\"})," tambi\xe9n se utiliza como separador en los nombres de rutas en Windows, es necesario introducir un doble ",(0,n.jsx)(s.code,{children:"\\\\"})," en los nombres de rutas."]}),"\n",(0,n.jsx)(s.h3,{id:"macos",children:"macOS"}),"\n",(0,n.jsx)(s.p,{children:"Se soportan los siguientes modelos (sintaxis HFS+):"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'los separadores de carpetas son ":"'}),"\n",(0,n.jsx)(s.li,{children:'la ruta no debe comenzar con un ":"'}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Examples with ",(0,n.jsx)(s.a,{href:"/docs/es/commands/folder",children:(0,n.jsx)(s.code,{children:"Folder"})}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume debe llamarse Monday\n'})}),"\n",(0,n.jsx)(s.h2,{id:"rutas-absolutas-y-relativas",children:"Rutas absolutas y relativas"}),"\n",(0,n.jsxs)(s.h3,{id:"constructores-file-y-folder",children:["Constructores ",(0,n.jsx)(s.code,{children:"File"})," y ",(0,n.jsx)(s.code,{children:"Folder"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/es/commands/file",children:(0,n.jsx)(s.code,{children:"File"})})," and ",(0,n.jsx)(s.a,{href:"/docs/es/commands/folder",children:(0,n.jsx)(s.code,{children:"Folder"})})," commands only accept ",(0,n.jsx)(s.strong,{children:"absolute pathnames"}),". Las rutas relativas no est\xe1n soportadas y devolver\xe1n errores. Por ejemplo, el siguiente c\xf3digo no es permitido:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'//ERROR\n$ko:=Folder("myFolder").create() //nombre de ruta relativo con constructor\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Si quiere manejar los archivos o las carpetas en varias ubicaciones (carpeta de proyecto, carpetas sistema, etc.), puede utilizar ",(0,n.jsx)(s.code,{children:"filesystems"})," (ver arriba). Por ejemplo, puede escribir:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() //carpeta creada a nivel de la estructura\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //archivo creado en la carpeta de datos\n'})}),"\n",(0,n.jsxs)(s.h3,{id:"funciones-de-carpeta-file-y-folder",children:["Funciones de carpeta ",(0,n.jsx)(s.code,{children:".file()"})," y ",(0,n.jsx)(s.code,{children:".folder()"})]}),"\n",(0,n.jsxs)(s.p,{children:["Funciones de objetos folder tales como ",(0,n.jsx)(s.a,{href:"/docs/es/API/FolderClass#file",children:(0,n.jsx)(s.code,{children:"folder.file()"})})," y ",(0,n.jsx)(s.a,{href:"/docs/es/API/FolderClass#folder-1",children:(0,n.jsx)(s.code,{children:"folder.folder()"})})," esperan rutas POSIX relativas. Por ejemplo:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'var $userImages : 4D.Folder\nvar $ok : Boolean\n  //para referenciar una carpeta "Picture" dentro de la carpeta de documentos del usuario\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //para crear una carpeta en el escritorio\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,n.jsx)(s.p,{children:"Las rutas absolutas no est\xe1n soportadas y devolver\xe1n errores."}),"\n",(0,n.jsx)(s.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,n.jsx)(s.p,{children:"La flexibilidad de las funciones de archivos y de carpetas le ofrecen varias posibilidades para manipular los archivos y las carpetas, como en los siguientes ejemplos:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'var $fold : 4D.Folder\nvar $file : 4D.File\n\n$fold:=Folder(fk desktop folder).folder("archive/jan2019")\n$fold:=Folder("/DATA/archive/jan2019")\n$file:=Folder("/DATA/archive/jan2019").file("total.txt")\n$file:=File("/DATA/info.txt")\n$file:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n$file:=File(fk backup log file)\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>d});var n=a(296540);const r={},o=n.createContext(r);function l(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);