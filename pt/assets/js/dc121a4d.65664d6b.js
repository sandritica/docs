"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51567],{172597:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var s=n(474848),t=n(28453);const r={id:"use-set",title:"USE SET",slug:"/commands/use-set",displayed_sidebar:"docs"},a=void 0,c={id:"commands-legacy/use-set",title:"USE SET",description:"USE SET ( conjunto )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/use-set.md",sourceDirName:"commands-legacy",slug:"/commands/use-set",permalink:"/docs/pt/commands/use-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"use-set",title:"USE SET",slug:"/commands/use-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"UNION",permalink:"/docs/pt/commands/union"},next:{title:"Spell Checker",permalink:"/docs/pt/category/commands/Spell Checker"}},d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"USE SET"})," ( ",(0,s.jsx)(o.em,{children:"conjunto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"conjunto"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome do conjunto a usar"})]})})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["USE SET transforma os registros em ",(0,s.jsx)(o.em,{children:"conjunto"})," na nova sele\xe7\xe3o atual para a tabela para o qual pertence o conjunto"]}),"\n",(0,s.jsxs)(o.p,{children:["Quando cria um conjunto, a posi\xe7\xe3o do registro atual \xe9 lembrada pelo conjunto USE SET recupera esta informa\xe7\xe3o e faz do registro o novo registro atual. Se apagar este registro antes de executar USE SET, 4D seleciona como registro atual o primeiro registro do conjunto. Os comandos de Conjuntos ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/union",children:"UNION"}),", ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/intersection",children:"INTERSECTION"}),", ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/difference",children:"DIFFERENCE"})," e ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/add-to-set",children:"ADD TO SET"})," reinicializam o registro atual. Al\xe9m disso, se voc\xea criar um conjunto que n\xe3o contenha posi\xe7\xe3o do registro atual, USE SET seleciona o primeiro registro no conjunto como sendo o registro atual."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Advert\xeancia"}),": lembre que um conjunto \xe9 a representa\xe7\xe3o de uma sele\xe7\xe3o de registros no momento da cria\xe7\xe3o do conjunto. Se os registros representados pelo conjunto forem modificados, o conjunto poderia n\xe3o ser v\xe1lido. Portanto, um conjunto guardado no disco deve representar um grupo de registros que n\xe3o modifique frequentemente. Muitos eventos podem invalidar a validade de um conjunto, como por exemplo a elimina\xe7\xe3o ou modifica\xe7\xe3o de um registro do conjunto, ou a modifica\xe7\xe3o dos crit\xe9rios de cria\xe7\xe3o do conjunto."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(o.p,{children:["O seguinte exemplo utiliza ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/load-set",children:"LOAD SET"})," para carregar um conjunto de localiza\xe7\xf5es da empresa Acme localizada em Nova Iorque. Depois utiliza USE SET para fazer do conjunto a sele\xe7\xe3o atual:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0LOAD SET([Empresas];"NY Acme";"NYAcmeSt")\xa0// Carregar o conjunto em mem\xf3ria\n\xa0&NBSP;USE SET("NY Acme")\xa0// Modificar a sele\xe7\xe3o atual a NY Acme\n\xa0&NBSP;CLEAR SET("NY Acme")\xa0// Apagar o conjunto da mem\xf3ria\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/clear-set",children:"CLEAR SET"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/load-set",children:"LOAD SET"})]})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>c});var s=n(296540);const t={},r=s.createContext(t);function a(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);