"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37474],{924879:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>t,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(474848),a=n(28453);const s={id:"array-to-collection",title:"ARRAY TO COLLECTION",slug:"/commands/array-to-collection",displayed_sidebar:"docs"},l=void 0,c={id:"commands-legacy/array-to-collection",title:"ARRAY TO COLLECTION",description:"ARRAY TO COLLECTION  ( cole\xe7\xe3lo ; array {; nomProp}{; array2 ; nomProp2 ; ... ; arrayN ; nomPropN} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-to-collection.md",sourceDirName:"commands-legacy",slug:"/commands/array-to-collection",permalink:"/docs/pt/commands/array-to-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"array-to-collection",title:"ARRAY TO COLLECTION",slug:"/commands/array-to-collection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Collections",permalink:"/docs/pt/category/commands/Collections"},next:{title:"COLLECTION TO ARRAY",permalink:"/docs/pt/commands/collection-to-array"}},t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function d(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"ARRAY TO COLLECTION"}),"  ( ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3lo"})," ; ",(0,r.jsx)(o.em,{children:"array"})," {; ",(0,r.jsx)(o.em,{children:"nomProp"}),"}{; ",(0,r.jsx)(o.em,{children:"array2"})," ; ",(0,r.jsx)(o.em,{children:"nomProp2"})," ; ... ; ",(0,r.jsx)(o.em,{children:"arrayN"})," ; ",(0,r.jsx)(o.em,{children:"nomPropN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"cole\xe7\xe3lo"}),(0,r.jsx)(o.td,{children:"Collection"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Cole\xe7\xe3o a receber o array de dados"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"array"}),(0,r.jsx)(o.td,{children:"Array"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Array a copiar para a cole\xe7\xe3o, se nomeProp for passado, array a copiar aos valores da arrayProp na cole\xe7\xe3o"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nomProp"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome de propriedade objeto cujmo valor a preencher com elementos do array"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"ARRAY TO COLLECTION"}),"  [#descv]copia um ou mais ",(0,r.jsx)(o.em,{children:"array"}),"(s) nos elementos ou os valores de ",(0,r.jsx)(o.em,{children:"nomeProp"})," da ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"}),"[#/descv]."]}),"\n",(0,r.jsxs)(o.p,{children:["Este comando pode funcionar com uma ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"})," que cont\xe9m valores ou uma ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"})," que contenha objetos, em cujo caso os par\xe2metros ",(0,r.jsx)(o.em,{children:"nomeProp"})," s\xe3o obligat\xf3rios."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Se omitir o par\xe2metro ",(0,r.jsx)(o.em,{children:"nomeProp"}),", o comando copia todos os elementos de ",(0,r.jsx)(o.em,{children:"array"})," a ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"}),". Se a ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"})," n\xe3o estiver vazia, os elementos existentes s\xe3o substitu\xeddos e s\xe3o agregados novos elementos se o tamanho de ",(0,r.jsx)(o.em,{children:"array"})," for maior que a longitude da ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"}),". Depois de que se executa o comando, a longitude da ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o for"})," id\xeantica ao tamanho de ",(0,r.jsx)(o.em,{children:"array"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Se passar um ou mais par\xe2metros ",(0,r.jsx)(o.em,{children:"nomeProp"}),", o comando cria ou substitui objetos como elementos de ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"}),". Cada objeto se completa com uma propriedade cujo nomee se oferece no par\xe2metro ",(0,r.jsx)(o.em,{children:"nomeProp"}),", e cujo valor \xe9 o elemento de array correspondente. Se a ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o"})," n\xe3o estava vazia, os elementos existentes s\xe3o substituidos e se agregam novos elementos se o tamanho do ",(0,r.jsx)(o.em,{children:"array"})," for maior que a cole\xe7\xe3o. Depois de que se executar o comando, a longitude da ",(0,r.jsx)(o.em,{children:"cole\xe7\xe3o for"})," a mesma que o tamanho do maior array."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Deseja copiar um array de texto em uma cole\xe7\xe3o:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $colFruits : Collection\n\xa0$colFruits:=New collection\n\xa0ARRAY TEXT($artFruits;4)\n\xa0$artFruits{1}:="Orange"\n\xa0$artFruits{2}:="Banana"\n\xa0$artFruits{3}:="Apple"\n\xa0$artFruits{4}:="Grape"\n\xa0ARRAY TO COLLECTION($colFruits;$artFruits)\n\xa0\xa0//$colFruits[0]="Orange"\n\xa0\xa0//$colFruits[1]="Banana"\n\xa0\xa0//...\n'})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser copiar valores de campo em uma cole\xe7\xe3o de objetos por meio de arrays:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0ARRAY TEXT($artCity;0)\n\xa0ARRAY LONGINT($arLZipCode;0)\n\xa0SELECTION TO ARRAY([Customer]City;$artCity)\n\xa0SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)\n\xa0ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")\n\xa0\xa0//$col[0]={"cityName":"Cleveland","Zip":35049}\n\xa0\xa0//$col[1]={"cityName":"Blountsville","Zip":35031}\n\xa0\xa0//...\n'})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser copiar um array de texto em uma cole\xe7\xe3o compartilhada:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0ARRAY TEXT($at;1)\n\xa0\n\xa0APPEND TO ARRAY($at;"Apple")\n\xa0APPEND TO ARRAY($at;"Orange")\n\xa0APPEND TO ARRAY($at;"Grape")\n\xa0\n\xa0var $sharedCol : Collection\n\xa0$sharedCol:=New shared collection\n\xa0\n\xa0Use($sharedCol)\n\xa0\xa0\xa0\xa0ARRAY TO COLLECTION($sharedCol;$at)\n\xa0End use\n'})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/collection-to-array",children:"COLLECTION TO ARRAY"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.em,{children:"Convers\xf5es de Tipo entre cole\xe7\xf5es e arrays 4D"})]})]})}function m(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>c});var r=n(296540);const a={},s=r.createContext(a);function l(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);