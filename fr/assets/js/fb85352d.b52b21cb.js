"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<s;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"paths",title:"Chemins d'acc\xe8s"},i=void 0,o={unversionedId:"Concepts/paths",id:"version-19-R8/Concepts/paths",title:"Chemins d'acc\xe8s",description:"Les fonctions, propri\xe9t\xe9s et commandes des classes File et Folder vous permettent de manipuler les fichiers et les dossiers comme des objets. Cela rend la gestion des fichiers et dossiers flexible et puissante. Par exemple, pour cr\xe9er un nouveau fichier dans le dossier Documents de l'utilisateur courant, vous pouvez \xe9crire :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/fr/Concepts/paths",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/Concepts/paths.md",tags:[],version:"19-R8",frontMatter:{id:"paths",title:"Chemins d'acc\xe8s"},sidebar:"docs",previous:{title:"Identifiants",permalink:"/docs/fr/Concepts/identifiers"},next:{title:"Que signifie ORDA ?",permalink:"/docs/fr/ORDA/overview"}},d={},p=[{value:"Chemins des filesystem",id:"chemins-des-filesystem",level:2},{value:"Syntaxe POSIX",id:"syntaxe-posix",level:2},{value:"Syntaxe sp\xe9cifique \xe0 la plate-forme",id:"syntaxe-sp\xe9cifique-\xe0-la-plate-forme",level:2},{value:"Windows",id:"windows",level:3},{value:"Saisie de chemins Windows et s\xe9quences d&#39;\xe9chappement",id:"saisie-de-chemins-windows-et-s\xe9quences-d\xe9chappement",level:4},{value:"macOS",id:"macos",level:3},{value:"Chemins absolus et relatifs",id:"chemins-absolus-et-relatifs",level:2},{value:"Constructeurs <code>File</code> et <code>Folder</code>",id:"constructeurs-file-et-folder",level:3},{value:"<code>.file()</code> and <code>.folder()</code> folder functions",id:"file-and-folder-folder-functions",level:3},{value:"Exemples",id:"exemples",level:2}],u={toc:p};function c(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Les fonctions, propri\xe9t\xe9s et commandes des classes File et Folder vous permettent de manipuler les fichiers et les dossiers comme des objets. Cela rend la gestion des fichiers et dossiers flexible et puissante. Par exemple, pour cr\xe9er un nouveau fichier dans le dossier Documents de l'utilisateur courant, vous pouvez \xe9crire :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n')),(0,r.kt)("p",null,"De plus, les objets fichier et dossier prennent en charge les ",(0,r.kt)("inlineCode",{parentName:"p"},"fileSystems"),", fournissant un chemin contextuel aux principaux dossiers de l'application."),(0,r.kt)("h2",a({},{id:"chemins-des-filesystem"}),"Chemins des filesystem"),(0,r.kt)("p",null,"4D accepte plusieurs chemins de ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem")," qui d\xe9signent des dossiers 4D sp\xe9cifiques avec un emplacement variable sur macOS et Windows. Les chemins des filesystem sont utiles pour deux raisons principales :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ind\xe9pendance : Vous pouvez d\xe9placer votre solution d'un emplacement \xe0 un autre, ind\xe9pendamment du syst\xe8me d'exploitation, sans vous pr\xe9occuper des chemins,"),(0,r.kt)("li",{parentName:"ul"},"S\xe9curit\xe9 : Aucun code ne peut acc\xe9der aux \xe9l\xe9ments situ\xe9s au-dessus de la racine des filesystem sur disque (sandboxing).")),(0,r.kt)("p",null,"Les filesystem suivants sont pris en charge :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"filesystem"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9signe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"/DATA"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dossier data courant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"/LOGS"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dossier Logs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"/PACKAGE"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dossier de la base de donn\xe9es (avec ou sans extension 4dbase)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"/PROJECT"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dossier Project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"/RESOURCES"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dossier des ressources de la base")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"/SOURCES"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dossier des ressources du projet")))),(0,r.kt)("h2",a({},{id:"syntaxe-posix"}),"Syntaxe POSIX"),(0,r.kt)("p",null,"La syntaxe POSIX est prise en charge sur toutes les plates-formes. ",(0,r.kt)("strong",{parentName:"p"},"La syntaxe POSIX est recommand\xe9e")," car elle est la plus flexible. Elle est utilis\xe9e par d\xe9faut (retourn\xe9e par les propri\xe9t\xe9s ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FileClass#path"}),"file.path")," et ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#path"}),"folder.path"),")."),(0,r.kt)("p",null,"Avec cette syntaxe :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'les dossiers sont s\xe9par\xe9s par "/"'),(0,r.kt)("li",{parentName:"ul"},'les chemins absolus commencent par un "/"'),(0,r.kt)("li",{parentName:"ul"},'pour remonter d\'un dossier dans un chemin relatif, utilisez "../" devant le nom du chemin (par s\xe9curit\xe9, vous ne pouvez pas remonter au-dessus du filesystem).')),(0,r.kt)("p",null,"Dans la syntaxe POSIX, vous utiliserez g\xe9n\xe9ralement les chemins ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem")," avec les commandes ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FileClass#file"}),(0,r.kt)("inlineCode",{parentName:"a"},"File"))," et ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder")),", par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n')),(0,r.kt)("h2",a({},{id:"syntaxe-sp\xe9cifique-\xe0-la-plate-forme"}),"Syntaxe sp\xe9cifique \xe0 la plate-forme"),(0,r.kt)("p",null,"La syntaxe sp\xe9cifique \xe0 la plate-forme d\xe9pend du syst\xe8me d'exploitation sur lequel la commande est ex\xe9cut\xe9e. Notez que lorsque vous cr\xe9ez un objet fichier ou dossier avec cette syntaxe, vous devez le d\xe9clarer en utilisant la constante ",(0,r.kt)("inlineCode",{parentName:"p"},"fk platform path")," comme param\xe8tre."),(0,r.kt)("h3",a({},{id:"windows"}),"Windows"),(0,r.kt)("p",null,"Les mod\xe8les suivants sont pris en charge :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'les s\xe9parateurs de dossiers sont "\\"'),(0,r.kt)("li",{parentName:"ul"},'the text contains ":" and "\\" as the second and third character,'),(0,r.kt)("li",{parentName:"ul"},'le texte commence par "\\".')),(0,r.kt)("p",null,"Exemples avec ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n')),(0,r.kt)("h4",a({},{id:"saisie-de-chemins-windows-et-s\xe9quences-d\xe9chappement"}),"Saisie de chemins Windows et s\xe9quences d'\xe9chappement"),(0,r.kt)("p",null,"L'",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/code-editor/write-class-method"}),"\xe9diteur de code 4D")," permet l'utilisation de s\xe9quences d'\xe9chappement. Une s\xe9quence d\u2019\xe9chappement est une suite de caract\xe8res permettant de remplacer un caract\xe8re \u201csp\xe9cial\u201d. La s\xe9quence d\xe9bute par le caract\xe8re barre oblique invers\xe9e (antislash) ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),", suivi d\u2019un caract\xe8re. Par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t")," est la s\xe9quence d'\xe9chappement pour le caract\xe8re ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab"),"."),(0,r.kt)("p",null,"Le caract\xe8re ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," est \xe9galement utilis\xe9 comme s\xe9parateur dans les noms de chemin sous Windows. En g\xe9n\xe9ral, 4D interpr\xe8te correctement les chemins Windows saisis dans l'\xe9diteur de code en rempla\xe7ant les barres obliques simples ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," par des barres obliques doubles ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\`. Par exemple,"),"C:\\Folder",(0,r.kt)("inlineCode",{parentName:"p"},"deviendra"),"C:","\\","Folder`."),(0,r.kt)("p",null,"Toutefois, si vous \xe9crivez ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\MyDocuments\\New"),", 4D affichera ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\\\MyDocuments\\New"),". Dans ce cas, le deuxi\xe8me ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," est interpr\xe9t\xe9 \xe0 tort comme ",(0,r.kt)("inlineCode",{parentName:"p"},"\\N")," (une s\xe9quence d'\xe9chappement existante). Vous devez donc saisir un double ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\")," lorsque vous souhaitez ins\xe9rer une barre oblique invers\xe9e devant un caract\xe8re utilis\xe9 dans l'une des s\xe9quences d'\xe9chappement reconnues par 4D."),(0,r.kt)("p",null,"Les s\xe9quences d'\xe9chappement suivantes sont reconnues par 4D :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"S\xe9quence d\u2019\xe9chappement"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Caract\xe8re remplac\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\\n")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"LF (Retour ligne)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\\t")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HT (Tabulation)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\\r")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"CR (Retour chariot)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"`",(0,r.kt)("inlineCode",{parentName:"td"},"\\\\")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"``","`"," (Backslash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'\\"')),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'"')," (Guillemets)")))),(0,r.kt)("h3",a({},{id:"macos"}),"macOS"),(0,r.kt)("p",null,"Les r\xe8gles suivantes s'appliquent (syntaxe HFS+) :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'les s\xe9parateurs de dossiers sont ":"'),(0,r.kt)("li",{parentName:"ul"},'le chemin ne doit pas commencer par un ":"')),(0,r.kt)("p",null,"Exemples avec ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume doit s\'appeler Monday\n')),(0,r.kt)("h2",a({},{id:"chemins-absolus-et-relatifs"}),"Chemins absolus et relatifs"),(0,r.kt)("h3",a({},{id:"constructeurs-file-et-folder"}),"Constructeurs ",(0,r.kt)("inlineCode",{parentName:"h3"},"File")," et ",(0,r.kt)("inlineCode",{parentName:"h3"},"Folder")),(0,r.kt)("p",null,"Les commandes ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FileClass#file"}),(0,r.kt)("inlineCode",{parentName:"a"},"File"))," et ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))," n'acceptent que les ",(0,r.kt)("strong",{parentName:"p"},"chemins absolus"),". Les chemins relatifs ne sont pas pris en charge et provoqueront des erreurs. Par exemple, le code suivant n'est pas autoris\xe9 :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'    //ERROR\n$ko:=Folder("myFolder").create() //nom de chemin relatif avec constructeur\n')),(0,r.kt)("p",null,"Si vous souhaitez g\xe9rer des fichiers ou des dossiers situ\xe9s \xe0 diff\xe9rents endroits (dossier de projet, dossiers syst\xe8me, etc.), vous pouvez utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystems")," (voir ci-dessus). Par exemple, vous pouvez \xe9crire :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$okFolder:=Folder("/PACKAGE/myFolder").create() //dossier cr\xe9\xe9 au niveau de la structure\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //fichier cr\xe9\xe9 dans le dossier data\n')),(0,r.kt)("h3",a({},{id:"file-and-folder-folder-functions"}),(0,r.kt)("inlineCode",{parentName:"h3"},".file()")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},".folder()")," folder functions"),(0,r.kt)("p",null,"Les fonctions des objets dossier telles que ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#file"}),(0,r.kt)("inlineCode",{parentName:"a"},"folder.file()"))," et ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/API/FolderClass#folder-1"}),(0,r.kt)("inlineCode",{parentName:"a"},"folder.folder()"))," attendent des noms de chemin POSIX relatifs. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'  //pour r\xe9f\xe9rencer un dossier "Picture" dans le dossier des documents de l\'utilisateur\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //pour cr\xe9er un dossier sur le bureau\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n')),(0,r.kt)("p",null,"Les chemins absolus ne sont pas pris en charge et provoqueront des erreurs."),(0,r.kt)("h2",a({},{id:"exemples"}),"Exemples"),(0,r.kt)("p",null,"La flexibilit\xe9 des fonctions de fichiers et de dossiers vous offre diverses possibilit\xe9s de manipulation des fichiers et des dossiers, comme dans les exemples suivants :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'$f:=Folder(fk desktop folder).folder("archive/jan2019")\n\n$f2:=Folder("/DATA/archive/jan2019").file("total.txt")\n\n$f3:=Folder("/DATA/archive/jan2019")\n\n$f4:=File("/DATA/info.txt")\n\n$f5:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n\n$f6:=File(fk backup log file)\n')))}c.isMDXComponent=!0}}]);