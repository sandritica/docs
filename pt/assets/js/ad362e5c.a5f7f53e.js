"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93868],{334697:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var a=n(474848),o=n(28453);const t={id:"append-to-array",title:"APPEND TO ARRAY",slug:"/commands/append-to-array",displayed_sidebar:"docs"},s=void 0,d={id:"commands-legacy/append-to-array",title:"APPEND TO ARRAY",description:"APPEND TO ARRAY ( array ; valor )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-to-array.md",sourceDirName:"commands-legacy",slug:"/commands/append-to-array",permalink:"/docs/pt/commands/append-to-array",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"append-to-array",title:"APPEND TO ARRAY",slug:"/commands/append-to-array",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/pt/category/commands/Arrays"},next:{title:"ARRAY BLOB",permalink:"/docs/pt/commands/array-blob"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"APPEND TO ARRAY"})," ( ",(0,a.jsx)(r.em,{children:"array"})," ; ",(0,a.jsx)(r.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"array"}),(0,a.jsx)(r.td,{children:"Array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array ao qual o elemento ser\xe1 anexado"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"valor"}),(0,a.jsx)(r.td,{children:"Expression"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Valor a acrescentar"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O comando APPEND TO ARRAY adiciona um novo elemento ao fim do array e atribui valor ao elemento. Em modo interpretado, se ",(0,a.jsx)(r.em,{children:"array"})," n\xe3o existe, o comando o cria com com respeito ao tipo de ",(0,a.jsx)(r.em,{children:"valor"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Esse comando trabalha com todos os tipos de array: alfanum\xe9rico, num\xe9rico, booleano, data, apontador e imagem."}),"\n",(0,a.jsxs)(r.p,{children:["O tipo de ",(0,a.jsx)(r.em,{children:"valor"}),' deve combinar com o tipo de array, caso contr\xe1rio, ser\xe1 gerado um erro de sintaxe 54 "Os tipos de argumento s\xe3o incompat\xedveis". Os seguintes valores, contudo, ser\xe3o aceitos:',(0,a.jsx)(r.br,{}),"\n\u2022 um ",(0,a.jsx)(r.em,{children:"array"})," alfanum\xe9rico (Texto ou Alfa) aceita qualquer valor de tipo alfanum\xe9rico ou texto.",(0,a.jsx)(r.br,{}),"\n\u2022 um ",(0,a.jsx)(r.em,{children:"array de"})," num\xe9rico (Inteiro, Inteiro largo ou Real) aceita qualquer valor de tipo Inteiro, Inteiro Largo, Real ou Hora."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(r.p,{children:"O seguinte c\xf3digo:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0INSERT IN ARRAY($meuarray;Size of array($meuarray)+1)\n\xa0$meuarray{Size of array($meuarray)}:=$meuvalor\n"})}),"\n",(0,a.jsx)(r.p,{children:"... pode ser substitu\xeddo por:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0APPEND TO ARRAY($meuarray;$meuvalor)\n"})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/insert-in-array",children:"INSERT IN ARRAY"})]})]})}function m(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var a=n(296540);const o={},t=a.createContext(o);function s(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);