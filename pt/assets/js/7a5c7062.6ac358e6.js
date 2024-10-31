"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43770],{774055:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var n=r(474848),o=r(28453);const s={id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},i=void 0,t={id:"commands-legacy/clear-variable",title:"CLEAR VARIABLE",description:"CLEAR VARIABLE ( variavel )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/clear-variable.md",sourceDirName:"commands-legacy",slug:"/commands/clear-variable",permalink:"/docs/pt/commands/clear-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/pt/category/commands/Variables"},next:{title:"LOAD VARIABLES",permalink:"/docs/pt/commands/load-variables"}},d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const a={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"CLEAR VARIABLE"})," ( ",(0,n.jsx)(a.em,{children:"variavel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(a.tbody,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"variavel"}),(0,n.jsx)(a.td,{children:"Variable"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Vari\xe1vel a apagar"})]})})]}),"\n",(0,n.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["CLEAR VARIABLE reinicia ",(0,n.jsx)(a.em,{children:"variavel"})," no valor por padr\xe3o de seu tipo (por exemplo, cadeia vazia para os tipos Alfa e Texto, ",(0,n.jsx)(a.em,{children:"0"})," para as vari\xe1veis num\xe9ricas, nenhum elemento para um array, etc.). A vari\xe1vel continua existindo em mem\xf3ria."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota:"})," Para saber mais sobre os valores de tipos normais, veja o par\xe1grafo ",(0,n.jsx)(a.em,{children:"Valores padr\xe3o"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["A vari\xe1vel que se passa em ",(0,n.jsx)(a.em,{children:"variavel"})," pode ser uma vari\xe1vel local, processo ou interprocesso."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": N\xe3o \xe9 necess\xe1rio apagar as vari\xe1veis processo ao terminar um processo; 4D as apaga automaticamente. De forma similar cada vari\xe1vel local se apaga automaticamente quando o m\xe9todo onde se localiza sua execu\xe7\xe3o completa."]}),"\n",(0,n.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(a.p,{children:["Em um formul\xe1rio, utilize uma lista suspensa (drop down) chamada ",(0,n.jsx)(a.em,{children:"MinhaListaSuspensa"})," cujo \xfanico prop\xf3sito \xe9 a interface do usu\xe1rio. Em outras palavras, utilize este array durante a entrada de dados,mas quando tiver fechado o formul\xe1rio, n\xe3o utilize mais este array. Portanto, durante o evento On Unload, apague o array:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0//asMyDropDown m\xe9todo de objeto lista drop-drop\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0//Initializar o array de uma forma ou outra\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asMyDropDown;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0//N\xe3o precisa mais do array\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asMyDropDown)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,n.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/pt/commands/undefined",children:"Undefined"})})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>t});var n=r(296540);const o={},s=n.createContext(o);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);