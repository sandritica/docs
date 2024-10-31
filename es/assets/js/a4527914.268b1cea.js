"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51618],{419109:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(474848),r=n(28453);const a={id:"blob-to-users",title:"BLOB TO USERS",slug:"/commands/blob-to-users",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/blob-to-users",title:"BLOB TO USERS",description:"BLOB TO USERS ( usuarios )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-users.md",sourceDirName:"commands-legacy",slug:"/commands/blob-to-users",permalink:"/docs/es/commands/blob-to-users",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-users.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-to-users",title:"BLOB TO USERS",slug:"/commands/blob-to-users",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Users and Groups",permalink:"/docs/es/category/commands/Users and Groups"},next:{title:"CHANGE CURRENT USER",permalink:"/docs/es/commands/change-current-user"}},t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const s={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"BLOB TO USERS"})," ( ",(0,o.jsx)(s.em,{children:"usuarios"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"usuarios"}),(0,o.jsx)(s.td,{children:"Blob"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"BLOB (encriptado) contiene las cuentas de usuarios creadas y guardadas por el Administrador"})]})})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando BLOB TO USERS remplaza las cuentas usuarios y los grupos presentes en el BLOB ",(0,o.jsx)(s.em,{children:"usuarios"})," en la base actual. El BLOB ",(0,o.jsx)(s.em,{children:"usuarios"})," est\xe1 encriptado y debe haber sido creado utilizando el comando ",(0,o.jsx)(s.a,{href:"/docs/es/commands/users-to-blob",children:"USERS TO BLOB"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"S\xf3lo el Administrador o el Dise\xf1ador de la base pueden ejecutar este comando. Si otro usuario intenta ejecutarlo, el comando no hace nada y se genera un error de privilegio (-9949)."}),"\n",(0,o.jsx)(s.p,{children:"Los efectos de este comando son diferentes dependiendo de si se ejecuta desde una base proyecto o una base binaria:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Base proyecto"})}),"\n",(0,o.jsx)(s.p,{children:'Este comando se usa por compatibilidad, para mover los usuarios y grupos previamente guardados de un archivo BLOB al archivo directorio.json de la base. Todos los usuarios y grupos ya definidos en el archivo directorio.json son reemplazados por los contenidos BLOB de los usuarios, excepto el "Dise\xf1ador" y el "Administrador".'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Base binaria"})}),"\n",(0,o.jsxs)(s.p,{children:["Este comando hace que se remplacen todas las cuentas y grupos creados por el Administrador de la base. Si el BLOB ",(0,o.jsx)(s.em,{children:"usuarios"})," contiene datos v\xe1lidos, el comando realiza las siguientes operaciones:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"todos los usuarios y grupos definidos en la base cuyos n\xfameros de referencia son negativos (grupos y usuarios creados por el administrador) se eliminan de la estructura,"}),"\n",(0,o.jsxs)(s.li,{children:["todos los usuarios y grupos que se encuentran en el BLOB ",(0,o.jsx)(s.em,{children:"usuarios"})," se a\xf1aden a la estructura."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota de compatibilidad:"})," los archivos de usuarios y grupos (extensi\xf3n .4UG) creados por el comando de men\xfa ",(0,o.jsx)(s.strong,{children:"Guardar Grupos..."})," en versiones de 4D anteriores pueden cargarse en 4D utilizando la siguiente secuencia (las versiones 4D muy antiguas pueden requerir el uso de versiones intermedias):"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0DOCUMENT TO BLOB(mydoc;blob)\n\xa0BLOB TO USERS(blob)\n"})}),"\n",(0,o.jsx)(s.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(s.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,o.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/es/commands/users-to-blob",children:"USERS TO BLOB"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var o=n(296540);const r={},a=o.createContext(r);function i(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);