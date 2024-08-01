/*! For license information please see 9c549c40.a5a821da.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95712],{178768:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var i=r(474848),s=r(28453);const o={id:"vp-print",title:"VP PRINT"},d=void 0,t={id:"ViewPro/commands/vp-print",title:"VP PRINT",description:"VP PRINT ( vpAreaName Integer } )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-print.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-print",permalink:"/docs/es/20-R5/ViewPro/commands/vp-print",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-print.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-print",title:"VP PRINT"},sidebar:"docs",previous:{title:"VP PASTE FROM OBJECT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-paste-from-object"},next:{title:"R",permalink:"/docs/es/20-R5/commands/R"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP PRINT"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text  { ; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"VP PRINT"})," abre una ventana de di\xe1logo de impresi\xf3n para imprimir ",(0,i.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase el \xe1rea 4D View Pro a imprimir en ",(0,i.jsx)(n.em,{children:"vpAreaName"}),". El comando abrir\xe1 la ventana de di\xe1logo de impresi\xf3n del sistema donde se puede definir la impresora y las propiedades de la p\xe1gina."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Las propiedades definidas en la ventana de di\xe1logo de impresi\xf3n son para el papel de la impresora, no son las propiedades de impresi\xf3n para el \xe1rea 4D View Pro. Las propiedades de impresi\xf3n para \xe1reas 4D View Pro se definen utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"}),". Se recomienda encarecidamente que las propiedades de la impresora y del \xe1rea 4D View Pro coincidan, de lo contrario el documento impreso podr\xeda no corresponder a sus expectativas."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica a imprimir (la numeraci\xf3n comienza en 0). Si se omite, la hoja actual se utiliza por defecto. Puedes seleccionar expl\xedcitamente la hoja de c\xe1lculo actual o todo el libro de trabajo con las siguientes constantes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Las \xe1reas 4D View Pro s\xf3lo pueden imprimirse con el comando ",(0,i.jsx)(n.code,{children:"VP PRINT"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Los comandos del tema de lenguaje 4D ",(0,i.jsx)(n.strong,{children:"Impresi\xf3n"})," no son compatibles con ",(0,i.jsx)(n.code,{children:"VP PRINT"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Este comando est\xe1 destinado a la impresi\xf3n individual por parte del usuario final. Para trabajos de impresi\xf3n automatizados, se aconseja exportar el \xe1rea de 4D View Pro como PDF con el m\xe9todo ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"El c\xf3digo siguiente:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' VP PRINT("myVPArea")\n'})}),"\n",(0,i.jsx)(n.p,{children:"... abrir\xe1 una ventana de di\xe1logo de impresi\xf3n:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(924196).A+"",width:"747",height:"660"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var i=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var i,o={},c=null,l=null;for(i in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,i)&&!a.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:t.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},924196:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/cmd_vpPrint-2d4304e96d5c2169b69457627cd893fc.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var i=r(296540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);