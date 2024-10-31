"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21836],{123749:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>i});var o=r(474848),a=r(28453);const s={id:"current-form-name",title:"Current form name",slug:"/commands/current-form-name",displayed_sidebar:"docs"},l=void 0,t={id:"commands-legacy/current-form-name",title:"Current form name",description:"Current form name  -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/current-form-name.md",sourceDirName:"commands-legacy",slug:"/commands/current-form-name",permalink:"/docs/es/commands/current-form-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-form-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"current-form-name",title:"Current form name",slug:"/commands/current-form-name",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Forms",permalink:"/docs/es/category/commands/Forms"},next:{title:"Form",permalink:"/docs/es/commands/form"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Current form name"}),"  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre del formulario de proyecto actual o formulario tabla actual en el proceso"})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"Current form name"})," devuelve el nombre del formulario actual definido para el proceso. El formulario actual puede ser un formulario proyecto o un formulario tabla."]}),"\n",(0,o.jsxs)(n.p,{children:["Por defecto, si no se ha llamado al comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-load",children:"FORM LOAD"})," en el proceso actual, el formulario actual es el que est\xe1 siendo visualizado o impreso. Si ha llamado al comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-load",children:"FORM LOAD"})," en el proceso, el formulario actual es el definido para este comando y permanece as\xed hasta que llame a ",(0,o.jsx)(n.a,{href:"/docs/es/commands/form-unload",children:"FORM UNLOAD"})," (o ",(0,o.jsx)(n.a,{href:"/docs/es/commands/close-printing-job",children:"CLOSE PRINTING JOB"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"El comando devuelve:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"el nombre del formulario, o"}),"\n",(0,o.jsx)(n.li,{children:"el nombre del archivo sin la extensi\xf3n si el formulario actual es creado por un archivo .json, o"}),"\n",(0,o.jsx)(n.li,{children:'el atributo "nombre" si el formulario actual es creado por un objeto, o'}),"\n",(0,o.jsx)(n.li,{children:"una cadena vac\xeda si no hay una forma actual definida para el proceso."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"En un formulario de entrada, ponga el siguiente c\xf3digo en un b\xf3ton:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $FormName : Text\n\xa0$win:=Open form window([Members];"Input";Plain form window)\n\xa0DIALOG([Members];"Input")\n\xa0$FormName:=Current form name\n\xa0\xa0// $FormName = "Input"\n\xa0FORM LOAD([Members];"Drag")\n\xa0$FormName:=Current form name\n\xa0\xa0// $FormName = "Drag"\n\xa0\xa0//...\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Usted quiere obtener el formulario actual si \xe9ste es un formulario proyecto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0$PointerTable:=Current form table\n\xa0If(Nil($PointerTable))\xa0// este es un formulario proyecto\n\xa0\xa0\xa0\xa0$FormName:=Current form name\n\xa0\xa0\xa0\xa0...\xa0// procesamiento\n\xa0End if\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/form-load",children:"FORM LOAD"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var o=r(296540);const a={},s=o.createContext(a);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);