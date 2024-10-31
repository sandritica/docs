"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8184],{785503:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(474848),o=r(28453);const a={id:"web-get-body-part",title:"WEB GET BODY PART",slug:"/commands/web-get-body-part",displayed_sidebar:"docs"},i=void 0,s={id:"commands-legacy/web-get-body-part",title:"WEB GET BODY PART",description:"WEB GET BODY PART ( parte ; contenido ; nombre ; tipoMime ; nomArchivo )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-body-part.md",sourceDirName:"commands-legacy",slug:"/commands/web-get-body-part",permalink:"/docs/es/commands/web-get-body-part",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-body-part.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-get-body-part",title:"WEB GET BODY PART",slug:"/commands/web-get-body-part",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Web Server",permalink:"/docs/es/category/commands/Web Server"},next:{title:"WEB Get body part count",permalink:"/docs/es/commands/web-get-body-part-count"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET BODY PART"})," ( ",(0,t.jsx)(n.em,{children:"parte"})," ; ",(0,t.jsx)(n.em,{children:"contenido"})," ; ",(0,t.jsx)(n.em,{children:"nombre"})," ; ",(0,t.jsx)(n.em,{children:"tipoMime"})," ; ",(0,t.jsx)(n.em,{children:"nomArchivo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parte"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de parte"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"contenido"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Contenido de la parte"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:'Nombre de la variable "input"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tipoMime"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Tipo mime del archivo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomArchivo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombre del archivo enviado"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WEB GET BODY PART"}),' llamado en el contexto de un proceso web, permite analizar la parte "body" de una petici\xf3n multi-part.']}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"parte"}),", pase el n\xfamero de la parte a analizar. Puede obtener el n\xfamero total de partes con el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/web-get-body-part-count",children:"WEB Get body part count"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"contenido"})," recibe el contenido de la parte. Cuando las partes a recuperar son archivos, debe pasar un par\xe1metro de tipo BLOB. En el caso de variables TEXTO enviadas en un formulario web, puede pasar un par\xe1metro de tipo texto."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"nombre"})," recupera el nombre de la variable del campo input HTTP."]}),"\n",(0,t.jsxs)(n.p,{children:["Los par\xe1metros ",(0,t.jsx)(n.em,{children:"tipoMime"})," y ",(0,t.jsx)(n.em,{children:"nomArchivo"})," reciben el tipo Mime y el nombre del archivo original, si lo hay. nomArchivo solo se recibe cuando el archivo se envio como ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.input,{type:"file"})}),".",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"tipoMime"})," y ",(0,t.jsx)(n.em,{children:"nomArchivo"})," son opcionales pero deben pasarse juntos."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": en el contexto de una petici\xf3n multi-part, el primer de array del comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/web-get-variables",children:"WEB GET VARIABLES"})," devuelve todas las partes del formulario, en el mismo orden que el comando ",(0,t.jsx)(n.strong,{children:"WEB GET BODY PART"}),". Puede utilizarlo para obtener directamente la posici\xf3n de una parte de un formulario."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"En este ejemplo, un formulario web permite descargar en el servidor HTTP varias im\xe1genes desde un navegador y mostrarlas en la p\xe1gina. Este es el formulario web:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(528614).A+"",width:"502",height:"251"})}),"\n",(0,t.jsx)(n.p,{children:"Este es el c\xf3digo para la parte  de la p\xe1gina:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-HTML",children:'<body>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <form enctype="multipart/form-data" action="/4DACTION/GetFile/" method="post">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Localice las im\xe1genes a cargar: <br>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Imagen 1: <input name="file1" type="file"><br>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Imagen 2: <input name="file2" type="file"><br>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <input type="submit">\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 </form>\xa0\xa0\xa0 \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <hr/>\n\xa0\xa0\xa0 \x3c!--4DSCRIPT/galleryInit--\x3e\n\xa0\xa0\xa0 \x3c!--4Dloop aFileNames--\x3e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 <img src="/photos/\x3c!--4Dvar aFileNames{aFileNames}--\x3e"/>\n\xa0\xa0\xa0 \x3c!--4Dendloop--\x3e\n</body>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Dos m\xe9todos 4D son llamados por la p\xe1gina:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"galleryInit al cargar (etiqueta 4DSCRIPT), muestra las im\xe1genes presentes en la carpeta de destino."}),"\n",(0,t.jsx)(n.li,{children:"GetFile al enviar los datos (4DACTION URL del formulario multi-part), procesa el env\xedo."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Este es el c\xf3digo del m\xe9todo galleryInit:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vDestinationFolder : Text\n\xa0ARRAY TEXT(aFileNames;0)\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\xa0//Carpeta "WebFolder/photos"\n\xa0DOCUMENT LIST($vDestinationFolder;aFileNames)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Este es el c\xf3digo del m\xe9todo GetFile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPartName;$vPartMimeType;$vPartFileName;$vDestinationFolder : Text\n\xa0var $vPartContentBlob : Blob\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\n\xa0For($i;1;WEB Get body part count)\xa0//para cada parte\n\xa0\xa0\xa0\xa0WEB GET BODY PART($i;$vPartContentBlob;$vPartName;$vPartMimeType;$vPartFileName)\n\xa0\xa0\xa0\xa0If($vPartFileName#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vDestinationFolder+$vPartFileName;$vPartContentBlob)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0WEB SEND HTTP REDIRECT("/")\xa0// volver a la p\xe1gina\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/web-get-body-part-count",children:"WEB Get body part count"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/web-get-variables",children:"WEB GET VARIABLES"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},528614:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/pict864606.es-04c06c4824adf2a44d0217ef37bc8d20.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(296540);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);