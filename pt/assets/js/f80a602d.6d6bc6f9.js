"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75568],{547158:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>i});var s=n(474848),t=n(28453);const d={id:"php-set-option",title:"PHP SET OPTION",slug:"/commands/php-set-option",displayed_sidebar:"docs"},r=void 0,a={id:"commands-legacy/php-set-option",title:"PHP SET OPTION",description:"PHP SET OPTION ( op\xe7ao ; valor {; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-set-option.md",sourceDirName:"commands-legacy",slug:"/commands/php-set-option",permalink:"/docs/pt/commands/php-set-option",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"php-set-option",title:"PHP SET OPTION",slug:"/commands/php-set-option",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PHP GET OPTION",permalink:"/docs/pt/commands/php-get-option"},next:{title:"Pasteboard",permalink:"/docs/pt/category/commands/Pasteboard"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"PHP SET OPTION"})," ( ",(0,s.jsx)(o.em,{children:"op\xe7ao"})," ; ",(0,s.jsx)(o.em,{children:"valor"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"op\xe7ao"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Op\xe7\xe3o a ser estabelecida"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"valor"}),(0,s.jsx)(o.td,{children:"Boolean"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Novo valor da op\xe7\xe3o"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se passado: modifica\xe7\xe3o apenas se aplica \xe0 pr\xf3xima chamada"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(o.admonition,{title:"Compatibilidade",type:"info",children:(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"PHP est\xe1 obsoleto em 4D"}),". Recomenda-se usar a classe ",(0,s.jsx)(o.a,{href:"/docs/pt/API/SystemWorkerClass",children:(0,s.jsx)(o.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando PHP SET OPTION se utiliza para definir op\xe7\xf5es espec\xedficas antes de chamar o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/php-execute",children:"PHP Execute"}),". O escopo deste comando \xe9 o processo atual."]}),"\n",(0,s.jsxs)(o.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(o.em,{children:"op\xe7\xe3o"}),' uma constante do tema "',(0,s.jsx)(o.em,{children:"PHP"}),'" para designar a op\xe7\xe3o a modificar e no par\xe2metro ',(0,s.jsx)(o.em,{children:"valor"}),", o novo valor da op\xe7\xe3o. Esta \xe9 uma descri\xe7\xe3o das op\xe7\xf5es:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Constante"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Valor"}),(0,s.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"PHP raw result"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"2"}),(0,s.jsxs)(o.td,{children:["Defini\xe7\xe3o do modo de processamento dos cabe\xe7alhos HTTP devolvidos por PHP no resultado da execu\xe7\xe3o quando este resultado for do tipo Texto (quando o resultado for do tipo BLOB, os cabe\xe7alhos s\xe3o mantidos sempre).",(0,s.jsx)(o.br,{}),"Valores poss\xedveis: Booleano: False (valor padr\xe3o = eliminar os cabe\xe7alhos HTTP do resultado. True = conservar os cabe\xe7alhos HTTP."]})]})})]}),"\n",(0,s.jsxs)(o.p,{children:["Como padr\xe3o, PHP SET OPTION define a op\xe7\xe3o para todas as chamadas a ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/php-execute",children:"PHP Execute"})," posteriores do processo. Se quiser definir para a pr\xf3xima chamada unicamente passe o par\xe2metro estrela (",(0,s.jsx)(o.em,{children:"*"}),")."]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/php-execute",children:"PHP Execute"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/php-get-option",children:"PHP GET OPTION"})]})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var s=n(296540);const t={},d=s.createContext(t);function r(e){const o=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:o},e.children)}}}]);