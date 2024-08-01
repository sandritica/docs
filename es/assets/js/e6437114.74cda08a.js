/*! For license information please see e6437114.74cda08a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41510],{894189:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=s(474848),t=s(28453);const r={id:"vp-paste-from-object",title:"VP PASTE FROM OBJECT"},d=void 0,i={id:"ViewPro/commands/vp-paste-from-object",title:"VP PASTE FROM OBJECT",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-paste-from-object.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-paste-from-object",permalink:"/docs/es/20-R5/ViewPro/commands/vp-paste-from-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-paste-from-object.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-paste-from-object",title:"VP PASTE FROM OBJECT"},sidebar:"docs",previous:{title:"P",permalink:"/docs/es/20-R5/commands/P"},next:{title:"VP PRINT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-print"}},c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.details,{children:[(0,o.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Lanzamiento"}),(0,o.jsx)(n.th,{children:"Modificaciones"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"19 R4"}),(0,o.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP PASTE FROM OBJECT"})," ( ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,o.jsx)(n.em,{children:"dataObject"})," : Object {; ",(0,o.jsx)(n.em,{children:"options"})," : Longint} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objeto de rango de celda"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"dataObject"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objeto que contiene los datos a pegar"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsx)(n.td,{children:"Longint"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Especifica lo que se pega"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP PASTE FROM OBJECT"})," command pastes the contents, style and formulas stored in ",(0,o.jsx)(n.em,{children:"dataObject"})," to the ",(0,o.jsx)(n.em,{children:"rangeObj"})," object."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"rangeObj"})," pase el objeto rango de celdas donde se pegar\xe1n los valores, el formato y/o las celdas de la f\xf3rmula. Si ",(0,o.jsx)(n.em,{children:"rangeObj"})," se refiere a m\xe1s de una celda, s\xf3lo se utiliza la primera."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"dataObject"}),", pase el objeto que contiene los datos de la celda, el formato y las f\xf3rmulas a pegar."]}),"\n",(0,o.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"options"}),", puede especificar qu\xe9 pegar en el rango de celdas. Valores posibles:"]}),"\n",(0,o.jsxs)(n.p,{children:["|Constant|Description|\n|---|---|---|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options all"}),"|Pastes all data objects, including values, formatting, and formulas.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options formatting"}),"|Pastes only the formatting.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options formulas"}),"|Pastes only the formulas.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options formulas and formatting"}),"|Pastes formulas and formatting.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options values"}),"|Pastes only values.|\n|",(0,o.jsx)(n.code,{children:"vk clipboard options value and formatting"}),"|Pastes values and formatting.|"]}),"\n",(0,o.jsxs)(n.p,{children:["Se tienen en cuenta las opciones de pegado definidas en las ",(0,o.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-workbook-options",children:"opciones del libro de trabajo"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.em,{children:"options"})," refers to a paste option not present in the copied object (e.g. formulas), the command does nothing."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Ver el ejemplo de ",(0,o.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"})]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-move-cells",children:"VP MOVE CELLS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-workbook-options",children:"VP Get workbook options"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var o=s(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var o,r={},a=null,l=null;for(o in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:t,type:e,key:a,ref:l,props:r,_owner:i.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var o=s(296540);const t={},r=o.createContext(t);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);