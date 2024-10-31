"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50744],{653915:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>t,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var a=n(474848),s=n(28453);const d={id:"accept",title:"ACCEPT",slug:"/commands/accept",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/accept",title:"ACCEPT",description:"ACCEPT",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/accept.md",sourceDirName:"commands-legacy",slug:"/commands/accept",permalink:"/docs/pt/commands/accept",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faccept.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"accept",title:"ACCEPT",slug:"/commands/accept",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Data Entry",permalink:"/docs/pt/category/commands/Data Entry"},next:{title:"ADD RECORD",permalink:"/docs/pt/commands/add-record"}},r={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Modo Headless",id:"modo-headless",level:5},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"ACCEPT"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(o.table,{children:(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,a.jsx)(o.th,{})]})})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"O comando ACCEPT \xe9 utilizado em m\xe9todos de objeto ou de formul\xe1rio (ou em subrotinas) para:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["aceitar um registro ou novo sub-registro ou modificado, para o qual a entrada de dados for inicializada utilizando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/add-record",title:"ADD RECORD",children:"ADD RECORD"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-record",title:"MODIFY RECORD",children:"MODIFY RECORD"}),", ",(0,a.jsx)(o.em,{children:"ADD SUBRECORD"}),", ou ",(0,a.jsx)(o.em,{children:"MODIFY SUBRECORD"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["aceitar um formul\xe1rio mostrado pelo comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/dialog",title:"DIALOG",children:"DIALOG"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["sair de um formul\xe1rio que mostra uma sele\xe7\xe3o de registros, utilizando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"ACCEPT realiza a mesma a\xe7\xe3o que se um usu\xe1rio tivesse pressionado a tecla Intro. Depois de que o formul\xe1rio \xe9 aceito, a vari\xe1vel sistema OK toma o valor 1."}),"\n",(0,a.jsx)(o.p,{children:"ACCEPT \xe9 executado com frequ\xeancia como resultado da sele\xe7\xe3o de um comando de menu. ACCEPT \xe9 igualmente utilizado no m\xe9todo de objeto de um bot\xe3o \u201csem a\xe7\xe3o\u201d."}),"\n",(0,a.jsxs)(o.p,{children:["Este comando tamb\xe9m pode ser utilizado no m\xe9todo de caixa de fechamento opcional de uma janela criada pelo comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/open-window",title:"Open window",children:"Open window"}),". Se houver uma caixa de controle de menu numa janela, se puder chamar a ACCEPT ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/cancel",title:"CANCEL",children:"CANCEL"}),", no m\xe9todo a executar, quando fizer duplo clique sobre a caixa de controle de menu ou for selecionado o comando de menu ",(0,a.jsx)(o.strong,{children:"Fechar"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"N\xe3o \xe9 poss\xedvel concatenar v\xe1rios ACCEPT. A execu\xe7\xe3o consecutiva de dois comandos ACCEPT em um m\xe9todo ter\xe1 o mesmo resultado que a execu\xe7\xe3o de um s\xf3 comando."}),"\n",(0,a.jsx)(o.h5,{id:"modo-headless",children:"Modo Headless"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"O comando ACCEPT"})," \xe9 permitido no modo headless (computador sem perif\xe9ricos), no contexto de \xe1reas offscreen criadas por ",(0,a.jsx)(o.em,{children:"VP Run offscreen area"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/wa-run-offscreen-area",children:"WA Run offscreen area"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})})]})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>c});var a=n(296540);const s={},d=a.createContext(s);function t(e){const o=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);