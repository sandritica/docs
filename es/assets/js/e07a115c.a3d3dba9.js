"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25846],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},661491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"ZipArchiveClass",title:"ZIPArchive"},o=void 0,p={unversionedId:"API/ZipArchiveClass",id:"version-20-R5/API/ZipArchiveClass",title:"ZIPArchive",description:'A 4D ZIP archive is a File or Folder object containing one or more files or folders, which are compressed to be smaller than their original size. Estos archivos se crean con una extensi\xf3n ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a trav\xe9s de medios que pueden tener limitaciones de tama\xf1o (por ejemplo, el correo electr\xf3nico o la red).',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/es/API/ZipArchiveClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebSocketServer",permalink:"/docs/es/API/WebSocketServerClass"},next:{title:"ZIPFile",permalink:"/docs/es/API/ZipFileClass"}},s={},d=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"Resumen",id:"resumen",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:"Ejemplo",id:"ejemplo-6",level:4},{value:".root",id:"root",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4}],c={toc:d};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A 4D ZIP archive is a ",(0,n.kt)("inlineCode",{parentName:"p"},"File")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder"),' object containing one or more files or folders, which are compressed to be smaller than their original size. Estos archivos se crean con una extensi\xf3n ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a trav\xe9s de medios que pueden tener limitaciones de tama\xf1o (por ejemplo, el correo electr\xf3nico o la red).'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You create a 4D ZIP archive with the ",(0,n.kt)("a",r({parentName:"li"},{href:"#zip-create-archive"}),"ZIP Create archive")," command."),(0,n.kt)("li",{parentName:"ul"},"4D ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/API/ZipFileClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," and ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/API/ZipFolderClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," instances are available through the ",(0,n.kt)("a",r({parentName:"li"},{href:"#root"}),(0,n.kt)("inlineCode",{parentName:"a"},"root"))," property (",(0,n.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") of the object returned by ",(0,n.kt)("a",r({parentName:"li"},{href:"#zip-read-archive"}),"ZIP Read archive")," command.")),(0,n.kt)("h3",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Para recuperar y ver el contenido de un objeto ZIP file:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // guardar la carpeta principal del zip\n$zipFile:=$zipFolder.files()[0] //leer la primera carpeta comprimida\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n')),(0,n.kt)("h3",r({},{id:"resumen"}),"Resumen"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#root"}),(0,n.kt)("strong",{parentName:"a"},".root")," : 4D.ZipFolder"),(0,n.kt)("br",null),"a virtual folder providing access to the contents of the ZIP archive")))),(0,n.kt)("h2",r({},{id:"zip-create-archive"}),"ZIP Create archive"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression xy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},".level")," property")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,n.kt)("em",{parentName:"p"},"fileToZip")," : 4D.File ; ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,n.kt)("em",{parentName:"p"},"folderToZip")," : 4D.Folder ; ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File { ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Integer }) : Object",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,n.kt)("em",{parentName:"p"},"zipStructure")," : Object ; ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fileToZip"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto archivo o carpeta a comprimir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"folderToZip"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto archivo o carpeta a comprimir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"zipStructure"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto archivo o carpeta a comprimir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"destinationFile"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Archivo de destino del archivo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"folderToZip")," option: ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto estado")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," command creates a compressed ZIP archive object and returns the status of the operation."),(0,n.kt)("p",null,"Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer par\xe1metro:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"fileToZip"),": You simply pass a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," to compress.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"folderToZip"),": You pass a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder")," to compress. In this case, the ",(0,n.kt)("em",{parentName:"p"},"options")," parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," constant in the ",(0,n.kt)("em",{parentName:"p"},"options")," parameter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"zipStructure"),": You pass an object describing the ZIP archive object. Las siguientes propiedades est\xe1n disponibles para definir la estructura:"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"compression"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": Deflate compression (default)"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": LZMA compression"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": XZ compression"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": No compression"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"level"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nivel de compresi\xf3n. Valores posibles: 1 a 10. Un valor m\xe1s bajo producir\xe1 un archivo m\xe1s grande, mientras que un valor m\xe1s alto producir\xe1 un archivo m\xe1s peque\xf1o. Sin embargo, el nivel de compresi\xf3n influye en el rendimiento. Default values if omitted: ",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"encryption"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"The encryption to use if a password is set:",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": AES encryption using 128-bit key."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": AES encryption using 192-bit key."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": AES encryption using 256-bit key (default if password is set)."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": Data is not encrypted (default if no password is set)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"contrase\xf1a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Una contrase\xf1a a utilizar si se requiere encriptaci\xf3n.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hist\xf3rico"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"a collection of ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.File")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.Folder")," objects or"),(0,n.kt)("li",null,"a collection of objects with the following properties:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Property"),(0,n.kt)("td",null,"Type"),(0,n.kt)("td",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"source"),(0,n.kt)("td",null,"4D.File or 4D.Folder"),(0,n.kt)("td",null,"File or Folder")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"destination"),(0,n.kt)("td",null,"Text"),(0,n.kt)("td",null,"(optional) - Specify a relative filepath to change the organization of the contents of the archive")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,"number"),(0,n.kt)("td",null,"(optional) - ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Ignore invisible files")," or 0 to compress all of the file"))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"retrollamada"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Function"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Una f\xf3rmula de retrollamada que recibir\xe1 la progresi\xf3n de la compresi\xf3n (0 - 100) en $1.")))),(0,n.kt)("p",null,"In the ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," parameter, pass a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File"),' object describing the ZIP archive to create (name, location, etc.). Se aconseja utilizar la extensi\xf3n ".zip" si quiere que el archivo ZIP sea procesado autom\xe1ticamente por cualquier software.'),(0,n.kt)("p",null,"Once an archive is created, you can use the ",(0,n.kt)("a",r({parentName:"p"},{href:"#zip-read-archive"}),"ZIP Read archive")," command to access it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Status object")),(0,n.kt)("p",null,"El objeto status devuelto contiene las siguientes propiedades:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"statusText"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Error message (if any):",(0,n.kt)("li",null,"Cannot open ZIP archive"),(0,n.kt)("li",null,"Cannot create ZIP archive"),(0,n.kt)("li",null,"Password is required for encryption"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"status"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"C\xf3digo de estado")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True si el archivo se ha creado con \xe9xito, si no, false")))),(0,n.kt)("h4",r({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,n.kt)("p",null,"Para comprimir un archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n')),(0,n.kt)("h4",r({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,n.kt)("p",null,"To compress a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder")," without the folder itself:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n')),(0,n.kt)("h4",r({},{id:"ejemplo-3"}),"Ejemplo 3"),(0,n.kt)("p",null,"Para comprimir una estructura de archivo ZIP con una contrase\xf1a y una barra de progreso:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //we use the 4D Progress component\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"myFormulaCompressingMethod"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n")),(0,n.kt)("h4",r({},{id:"ejemplo-4"}),"Ejemplo 4"),(0,n.kt)("p",null,"You want to pass a collection of folders and files to compress to the ",(0,n.kt)("em",{parentName:"p"},"zipStructure")," object:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n')),(0,n.kt)("h4",r({},{id:"ejemplo-5"}),"Ejemplo 5"),(0,n.kt)("p",null,"Desea utilizar un algoritmo de compresi\xf3n alternativo con un alto nivel de compresi\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //por defecto es 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n')),(0,n.kt)("h2",r({},{id:"zip-read-archive"}),"ZIP Read archive"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"18"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ZIP Read archive")," ( ",(0,n.kt)("em",{parentName:"p"},"zipFile")," : 4D.File { ; ",(0,n.kt)("em",{parentName:"p"},"password")," : Text }) : 4D.ZipArchive"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"zIPFile"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Archivos Zip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"contrase\xf1a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Contrase\xf1a del archivo ZIP, si la hay")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.ZipArchive"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto archivo")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," command retrieves the contents of ",(0,n.kt)("em",{parentName:"p"},"zipFile")," and returns it as a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," object."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Este comando no descomprime el archivo ZIP, s\xf3lo ofrece una vista de su contenido. To extract the contents of an archive, you need to use methods such as ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/API/Document#copyto"}),"file.copyTo()")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/API/Directory#copyto"}),"folder.copyTo()"),".")),(0,n.kt)("p",null,"Pass a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," object referencing the compressed ZIP archive in the ",(0,n.kt)("em",{parentName:"p"},"zipFile")," parameter. The target archive file will be opened until the ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."),(0,n.kt)("p",null,"If the ",(0,n.kt)("em",{parentName:"p"},"zipFile")," is password protected, you need to use the optional ",(0,n.kt)("em",{parentName:"p"},"password")," parameter to provide a password. Si se requiere una contrase\xf1a pero no se pasa al intentar leer el contenido del archivo, se genera un error."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Objeto archivo")),(0,n.kt)("p",null,"The returned ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," object contains a single ",(0,n.kt)("a",r({parentName:"p"},{href:"#root"}),(0,n.kt)("inlineCode",{parentName:"a"},"root"))," property whose value is a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.ZipFolder")," object. Esta carpeta describe todo el contenido del archivo ZIP."),(0,n.kt)("h4",r({},{id:"ejemplo-6"}),"Ejemplo"),(0,n.kt)("p",null,"Para recuperar y ver el contenido de un objeto ZIP file:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n')),(0,n.kt)("p",null,"Para recuperar la lista de los archivos y carpetas del archivo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n")),(0,n.kt)("p",null,"Para leer el contenido de un archivo sin extraerlo de la carpeta root:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n')),(0,n.kt)("p",null,"Para extraer desde la carpeta root:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //extract a file\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extract all files\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n')),(0,n.kt)("h2",r({},{id:"root"}),".root"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".root")," : 4D.ZipFolder"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".root")," property contains a virtual folder providing access to the contents of the ZIP archive."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," folder and its contents can be manipulated with the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/API/ZipFileClass"}),"ZipFile")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/API/ZipFolderClass"}),"ZipFolder")," functions and properties."),(0,n.kt)("p",null,"Esta propiedad es de ",(0,n.kt)("strong",{parentName:"p"},"solo lectura"),"."))}m.isMDXComponent=!0}}]);