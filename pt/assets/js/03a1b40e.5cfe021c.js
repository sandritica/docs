"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35201],{744709:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var d=o(474848),t=o(28453);const c={id:"append-document",title:"Append document",slug:"/commands/append-document",displayed_sidebar:"docs"},s=void 0,r={id:"commands-legacy/append-document",title:"Append document",description:"Append document ( documento {; tipoArquivo} ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-document.md",sourceDirName:"commands-legacy",slug:"/commands/append-document",permalink:"/docs/pt/commands/append-document",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"append-document",title:"Append document",slug:"/commands/append-document",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"System Documents",permalink:"/docs/pt/category/commands/System Documents"},next:{title:"CLOSE DOCUMENT",permalink:"/docs/pt/commands/close-document"}},a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Append document"})," ( ",(0,d.jsx)(n.em,{children:"documento"})," {; ",(0,d.jsx)(n.em,{children:"tipoArquivo"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"documento"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome de documento ou rota de acesso completa ou string vazia para caixa de di\xe1logo de arquivo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoArquivo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:'Lista de tipos de documentos a serem pesquisados, ou "*" para n\xe3o pesquisar os documentos'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfamero de refer\xeancia de documento"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando Append document faz a mesma coisa que ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),": permite abrir um documento em disco."]}),"\n",(0,d.jsxs)(n.p,{children:["A \xfanica diferen\xe7a \xe9 que Append document define a localiza\xe7\xe3o do arquivo ao final do documento enquanto que ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-document",title:"Open document",children:"Open document"})," o faz ao princ\xedpio."]}),"\n",(0,d.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o consulte ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-document",children:"Open document"})," ."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"O exemplo abaixo abre um documento existente chamado Nota, adiciona a string \u201ce at\xe9 logo\u201d seguida por um retorno de carro ao final do documento, e fecha o documento. Se o documento j\xe1 contiver a string \u201cAdeus\u201d, o documento conter\xe1 agora a string \u201cAdeus e at\xe9 logo\u201d, seguido por um retorno de carro:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDocRef : Time\n\xa0vhDocRef:=Append document("Nota.txt")\xa0// Abrir o documento Nota\n\xa0SEND PACKET(vhDocRef;" e at\xe9 logo"+Char(13))\xa0// Adicionar a string\n\xa0CLOSE DOCUMENT(vhDocRef)\xa0// Fechar o documento\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/create-document",children:"Create document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-document",children:"Open document"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var d=o(296540);const t={},c=d.createContext(t);function s(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);