"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69563],{395078:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>t});var r=i(474848),a=i(28453);const c={id:"write-picture-file",title:"WRITE PICTURE FILE",slug:"/commands/write-picture-file",displayed_sidebar:"docs"},o=void 0,s={id:"commands-legacy/write-picture-file",title:"WRITE PICTURE FILE",description:"WRITE PICTURE FILE ( nomArchivo ; imagen {; codec} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/write-picture-file.md",sourceDirName:"commands-legacy",slug:"/commands/write-picture-file",permalink:"/docs/es/commands/write-picture-file",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwrite-picture-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"write-picture-file",title:"WRITE PICTURE FILE",slug:"/commands/write-picture-file",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"TRANSFORM PICTURE",permalink:"/docs/es/commands/transform-picture"},next:{title:"Printing",permalink:"/docs/es/category/commands/Printing"}},d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WRITE PICTURE FILE"})," ( ",(0,r.jsx)(n.em,{children:"nomArchivo"})," ; ",(0,r.jsx)(n.em,{children:"imagen"})," {; ",(0,r.jsx)(n.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomArchivo"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre o ruta de acceso completo del archivo a escribir, o cadena vac\xeda"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"imagen"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo o variable imagen a escribir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codec"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Identificaci\xf3n de codec de imagen"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando WRITE PICTURE FILE permite guardar en un archivo en el disco la imagen pasada en el par\xe1metro ",(0,r.jsx)(n.em,{children:"imagen,"})," en el formato definido por ",(0,r.jsx)(n.em,{children:"codec"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede pasar en ",(0,r.jsx)(n.em,{children:"nomArchivo"})," la ruta de acceso completa del archivo a crear, o \xfanicamente el nombre del archivo. Si solo pasa el nombre del archivo, el archivo ser\xe1 ubicado junto al archivo de estructura de la base."]}),"\n",(0,r.jsx)(n.p,{children:"Tiene que indicarse la extensi\xf3n del archivo."}),"\n",(0,r.jsxs)(n.p,{children:['Si pasa una cadena vac\xeda ("") en ',(0,r.jsx)(n.em,{children:"nomArchivo"}),", aparece la caja de di\xe1logo est\xe1ndar de registro, permitiendo al usuario indicar el nombre, ubicaci\xf3n y formato del archivo a crear. Si se ha asociado un nombre por defecto al campo Imagen, se suministra en la caja de di\xe1logo (ver el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-picture-file-name",children:"SET PICTURE FILE NAME"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"imagen"})," la variable o campo imagen que contiene la imagen a almacenar en el disco."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"codec"}),' permite definir el formato en el cual la imagen se guardar\xe1. Un codec puede ser una extensi\xf3n (por ejemplo ".gif") o un tipo Mime (por ejemplo "image/jpg").',(0,r.jsx)(n.br,{}),"\nPuede obtener una lista de codecs disponibles a trav\xe9s del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si se omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"codec"}),", el comando intentar\xe1 determinar el ",(0,r.jsx)(n.em,{children:"codec"})," basado en la extensi\xf3n del nombre del archivo pasado en el par\xe1metro ",(0,r.jsx)(n.em,{children:"nomArchivo"}),". Por ejemplo, si pasa la instrucci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0WRITE PICTURE FILE("c:\\folder\\photo.jpg";myphoto)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["... el comando utilizar\xe1 el codec JPEG para guardar la imagen.",(0,r.jsx)(n.br,{}),"\nSi la extensi\xf3n utilizada no corresponde a ning\xfan codec disponible, el archivo no se guarda y la variable sistema OK toma el valor 0. Si no pasa un ",(0,r.jsx)(n.em,{children:"codec"})," o un archivo de extensi\xf3n, el archivo imagen se guarda en formato PICT."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," si el formato de escritura de ",(0,r.jsx)(n.em,{children:"imagen"})," (indicado v\xeda la extensi\xf3n del ",(0,r.jsx)(n.em,{children:"nomArchivo"})," o el par\xe1metro ",(0,r.jsx)(n.em,{children:"codec"}),') es igual a su tipo original y si ninguna operaci\xf3n de transformaci\xf3n se ha aplicado, la imagen se escribe "tal cual", sin ninguna modificaci\xf3n.']}),"\n",(0,r.jsx)(n.p,{children:"Si la ejecuci\xf3n del comando es correcta, la variable sistema Document contiene la ruta de acceso completa al archivo creado y la variable sistema OK toma el valor 1. De lo contrario, OK toma el valor 0."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Im\xe1genes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/read-picture-file",children:"READ PICTURE FILE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-picture-file-name",children:"SET PICTURE FILE NAME"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var r=i(296540);const a={},c=r.createContext(a);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);