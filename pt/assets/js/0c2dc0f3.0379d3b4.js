"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59982],{964515:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=s(474848),r=s(28453);const d={id:"set-menu-item-style",title:"SET MENU ITEM STYLE",slug:"/commands/set-menu-item-style",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/set-menu-item-style",title:"SET MENU ITEM STYLE",description:"SET MENU ITEM STYLE ( menu ; menuItem ; itemEstilo {; processo} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item-style.md",sourceDirName:"commands-legacy",slug:"/commands/set-menu-item-style",permalink:"/docs/pt/commands/set-menu-item-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-menu-item-style",title:"SET MENU ITEM STYLE",slug:"/commands/set-menu-item-style",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET MENU ITEM SHORTCUT",permalink:"/docs/pt/commands/set-menu-item-shortcut"},next:{title:"Messages",permalink:"/docs/pt/category/commands/Messages"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU ITEM STYLE"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"menuItem"})," ; ",(0,t.jsx)(n.em,{children:"itemEstilo"})," {; ",(0,t.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuItem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para \xfaltimo item adicionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"itemEstilo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Novo estilo de item de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"processo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de refer\xeancia de processo"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SET MENU ITEM STYLE cambia o estilo da fonte da linha de menu cujo n\xfamero ou refer\xeancia de menu se passa em ",(0,t.jsx)(n.em,{children:"menu"})," e cujo n\xfamero de elemento se passa em ",(0,t.jsx)(n.em,{children:"menuItem"})," de acordo ao estilo de fonte passado em ",(0,t.jsx)(n.em,{children:"itemEstilo"}),". Pode passar -1 em ",(0,t.jsx)(n.em,{children:"menuItem"})," para indicar o \xfaltimo elemento adicionado a ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se omite o par\xe2metro ",(0,t.jsx)(n.em,{children:"processo"}),", SET MENU ITEM STYLE se aplica a barra de menus do processo atual. Do contr\xe1rio, SET MENU ITEM STYLE se aplica a barra de menus do processo atual cujo n\xfamero de refer\xeancia se passa em ",(0,t.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,t.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,t.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,t.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e se ignorar\xe1."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"itemEstilo"})," pode definir o estilo do elemento. Passe uma combina\xe7\xe3o (um ou uma soma) das seguintes constantes predefinidas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plain"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bold"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Italic"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Underline"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-menu-item-style",children:"Get menu item style"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(296540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);