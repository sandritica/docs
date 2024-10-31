"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3788],{27322:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var r=n(474848),o=n(28453);const s={id:"sequence-number",title:"Sequence number",slug:"/commands/sequence-number",displayed_sidebar:"docs"},d=void 0,t={id:"commands-legacy/sequence-number",title:"Sequence number",description:"Sequence number {( tabela )} -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sequence-number.md",sourceDirName:"commands-legacy",slug:"/commands/sequence-number",permalink:"/docs/pt/commands/sequence-number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsequence-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sequence-number",title:"Sequence number",slug:"/commands/sequence-number",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAVE RECORD",permalink:"/docs/pt/commands/save-record"},next:{title:"Relations",permalink:"/docs/pt/category/commands/Relations"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Sequence number"})," {( ",(0,r.jsx)(a.em,{children:"tabela"})," )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe2metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tabela"}),(0,r.jsx)(a.td,{children:"Table"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tabela para a qual devolver o n\xfamero de sequ\xeancia, ou tabela padr\xe3o, se omitido"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Resultado"}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"\u2190"}),(0,r.jsx)(a.td,{children:"N\xfamero de sequ\xeancia"})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Sequence number"})," devolve o pr\xf3ximo n\xfamero autom\xe1tico de ",(0,r.jsx)(a.em,{children:"tabela"}),". O n\xfamero de sequ\xeancia \xe9 \xfanico para cada tabela. \xc9 um valor que n\xe3o se repete e \xe9 incrementado (*) para cada novo registro criado pela tabela."]}),"\n",(0,r.jsxs)(a.p,{children:["(*) Por raz\xf5es de otimiza\xe7\xe3o, a incrementa\xe7\xe3o \xe9 iniciada apenas na primeira chamada ao comando ",(0,r.jsx)(a.strong,{children:"Sequence number"}),' ou de uma propriedade que obt\xe9m acesso a sequ\xeancia de n\xfameros (ver abaixo). Al\xe9m disso, a numera\xe7\xe3o pode ser modificada usando o comando [#cmd id="642"/]. Desta forma, o valor retornado n\xe3o deve ser considerado como contagem dos registros criados em ',(0,r.jsx)(a.em,{children:"umaTabela"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Normalmente, a numera\xe7\xe3o come\xe7a em 1. Pode mudar a numera\xe7\xe3o para uma tabela utilizando o comando ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," Se n\xe3o houver um registro atual e a numera\xe7\xe3o tiver sido modificada via o comando ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),", este n\xfamero \xe9 em fato reservado para a cria\xe7\xe3o do novo registro mas s\xf3 vai re ser retornado pela fun\xe7\xe3o ",(0,r.jsx)(a.strong,{children:"Sequence number"})," quando o comando ",(0,r.jsx)(a.a,{href:"/docs/pt/commands/save-record",children:"SAVE RECORD"})," tiver sido chamado."]}),"\n",(0,r.jsxs)(a.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(a.strong,{children:"Sequence number"})," \xe9 \xfatil nos casos abaixos:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"O n\xfamero de sequ\xeancia precisa de um incremento maior que 1"}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"O n\xfamero de sequ\xeancia \xe9 parte de um c\xf3digo, por exemplo um n\xfamero de c\xf3digo parcial."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Para armazenar o n\xfamero de sequ\xeancia com a ajuda de um m\xe9todo, crie um campo de tipo Inteiro longo na tabela e atribua o n\xfamero de sequ\xeancia ao campo."}),"\n",(0,r.jsxs)(a.p,{children:["O n\xfamero de sequ\xeancia devolvido por essa fun\xe7\xe3o para a ",(0,r.jsx)(a.em,{children:"tabela"})," \xe9 o mesmo n\xfamero que o gerado ao selecionar a op\xe7\xe3o ",(0,r.jsx)(a.strong,{children:"Autoincrementar"})," para um campo da ",(0,r.jsx)(a.em,{children:"tabela"})," utilizando o inspetor de estrutura ou ao atribu\xeddo utilizando o s\xedmbolo #N como valor autom\xe1tico para um campo da ",(0,r.jsx)(a.em,{children:"tabela"})," em um formul\xe1rio. Para maior informa\xe7\xe3o sobre a atribui\xe7\xe3o de valores, consulte o Manual de Desenho de 4D."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota"}),": a numera\xe7\xe3o autom\xe1tica tamb\xe9m pode ser atribu\xedda atrav\xe9s do atributo SQL AUTO_INCREMENT."]}),"\n",(0,r.jsxs)(a.p,{children:["Se a numera\xe7\xe3o deve come\xe7ar em um valor diferente de 1, simplesmente adiciona a diferen\xe7a a ",(0,r.jsx)(a.strong,{children:"Sequence number"}),". Por exemplo, se o n\xfamero de sequ\xeancia deve come\xe7ar em 1.000, pode utilizar a seguinte linha de c\xf3digo para atribuir o n\xfamero:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0[Tabela1]NumAuto:=Sequence number([Tabela1])+999\n"})}),"\n",(0,r.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(a.p,{children:"O exemplo a seguir \xe9 parte de um m\xe9todo de formul\xe1rio. Estas linhas de c\xf3digo testam se \xe9 um novo registro (se o n\xfamero de fatura for igual a uma cadeia vazia). Se for um novo registro, o m\xe9todo atribui um n\xfamero de fatura. O n\xfamero de fatura est\xe1 formado por duas partes: o n\xfamero de sequ\xeancia, e o identificador do operador, o qual foi introduzido ao abrir o banco. O n\xfamero de sequ\xeancia \xe9 formatado como uma cadeia de cinco caracteres:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// Se for uma nova fatura, criar um n\xfamero de fatura\n\xa0If([Faturas]NumFatura="")\n\xa0\xa0// O n\xfamero de fatura \xe9 uma cadeia que termina pelo n\xfamero de refer\xeancia do usu\xe1rio.\n\xa0\xa0\xa0\xa0[Faturas]NumFatura:=String(Sequence number;"00000")+[Faturas]Usu\xe1rio\n\xa0End if\n'})}),"\n",(0,r.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/pt/commands/record-number",children:"Record number"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/pt/commands/selected-record-number",children:"Selected record number"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.em,{children:"Sobre N\xfameros de Registros"})]})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>t});var r=n(296540);const o={},s=r.createContext(o);function d(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);