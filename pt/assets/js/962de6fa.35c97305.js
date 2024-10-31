"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44142],{246e3:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var a=n(474848),r=n(28453);const t={id:"drop-position",title:"Drop position",slug:"/commands/drop-position",displayed_sidebar:"docs"},s=void 0,d={id:"commands-legacy/drop-position",title:"Drop position",description:"Drop position {( colNum|posYimagem )} -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/drop-position.md",sourceDirName:"commands-legacy",slug:"/commands/drop-position",permalink:"/docs/pt/commands/drop-position",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrop-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"drop-position",title:"Drop position",slug:"/commands/drop-position",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Drag and Drop",permalink:"/docs/pt/category/commands/Drag and Drop"},next:{title:"SET DRAG ICON",permalink:"/docs/pt/commands/set-drag-icon"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(o){const e={br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...o.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Drop position"})," {( colNum|posYimagem )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Par\xe2metro"}),(0,a.jsx)(e.th,{children:"Tipo"}),(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"colNum|posYimagem"}),(0,a.jsx)(e.td,{children:"Inteiro longo"}),(0,a.jsx)(e.td,{children:"\u2190"}),(0,a.jsx)(e.td,{children:"N\xfamero de coluna de list box (-1 se soltar antes da \xfaltima coluna) ou  posi\xe7\xe3o da coordenada Y da imagem"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Resultado"}),(0,a.jsx)(e.td,{children:"Integer"}),(0,a.jsx)(e.td,{children:"\u2190"}),(0,a.jsx)(e.td,{children:"\u2022 N\xfamero (array/list box) ou \u2022 Posi\xe7\xe3o (lista hier\xe1rquica) ou \u2022 Posi\xe7\xe3o em string (texto/combo box) de item destino ou \u2022 -1 se soltar antes do \xfaltimo elemento do array ou item da lista \u2022 Posi\xe7\xe3o da coordenada X da imagem"})]})]})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,a.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(e.p,{children:"O comando Drop position pode ser utilizado para descobrir a localiza\xe7\xe3o, em um objeto de destino \u201ccomplexo\u201d, onde um objeto foi (arrastado e) soltado."}),"\n",(0,a.jsx)(e.p,{children:"Geralmente, \xe9 utilizado Drop position quando administra um evento arrastar e soltar que se produz em um list box, uma lista hier\xe1rquica, um texto,um campo de imagem ou uma \xe1rea 4D Write Pro."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Se o objeto de destino for um array, o comando retorna um n\xfamero de elemento."}),"\n",(0,a.jsxs)(e.li,{children:["Se o objeto de destino for um list box, o comando retorna um n\xfamero de linha. Neste caso, o comando tamb\xe9m retorna o n\xfamero de coluna onde se soltou no par\xe2metro opcional ",(0,a.jsx)(e.em,{children:"colNum"}),"."]}),"\n",(0,a.jsx)(e.li,{children:"Se o objeto de destino for uma lista hier\xe1rquica, o comando retorna uma posi\xe7\xe3o do elemento."}),"\n",(0,a.jsxs)(e.li,{children:["Se o objeto de destino for uma vari\xe1vel ou um campo tipo texto, ou um combo box, o comando retorna uma posi\xe7\xe3o de caractere ao interior da string.",(0,a.jsx)(e.br,{}),"\nEm todos os casos, o comando pode retornar -1 se o objeto fonte tiver sido soltado al\xe9m do \xfaltimo elemento ou do \xfaltimo elemento do objeto de destino."]}),"\n",(0,a.jsxs)(e.li,{children:["Se o objeto de destino for uma vari\xe1vel ou um campo de tipo imagem, a fun\xe7\xe3o retorna a localiza\xe7\xe3o horizontal do clique e, no par\xe2metro opcional ",(0,a.jsx)(e.em,{children:"posYImagem"}),", a localiza\xe7\xe3o vertical do clique. Os valores retornados s\xe3o expressos em p\xedxels e com rela\xe7\xe3o ao sistema de coordenadas locais."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Se chama Drop position quando processa um evento que n\xe3o for do tipo arrastar e soltar em um array, um list box, um combo box, uma lista hier\xe1rquica, um texto ou uma imagem, ou \xe1rea 4D Write Pro, o comando retorna -1."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Importante:"})," para que um objeto de formul\xe1rio aceite os dados soltados, a propriedade ",(0,a.jsx)(e.strong,{children:"Solt\xe1vel"})," deve estar selecionada. Igualmente, seu m\xe9todo de objeto deve ser ativado pelo evento On Drag Over ou On Drop, para processar estes eventos."]}),"\n",(0,a.jsx)(e.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(e.p,{children:"No exemplo abaixo, uma lista de somas deve ser organizada por m\xeas e por pessoa. A opera\xe7\xe3o \xe9 efetuada arrastando e soltando entre duas list boxes:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(231045).A+"",width:"751",height:"280"})}),"\n",(0,a.jsx)(e.p,{children:"O m\xe9todo de objeto de list box da direita (origem) cont\xe9m o c\xf3digo abaixo:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0If(Form event code=On Begin Drag Over)\xa0//evento deve ser selecionado para o list box\n\xa0\xa0\xa0\xa0var $tomove : Blob\n\xa0\xa0\xa0\xa0var $val : Text\n\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LBPaid";$col;$row)\n\xa0\xa0\xa0\xa0$val:=PaidCol{$row}\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB($val;$tomove)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("mydrag";$tomove)\xa0//utilize uma chave personalizada\n\xa0End if\n'})}),"\n",(0,a.jsx)(e.p,{children:"O m\xe9todo de objeto de list box da esquerda (destino) cont\xe9m o c\xf3digo abaixo:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Drag Over)\xa0//O evento deve ser selecionado para o list box\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $toGet : Blob\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $rownum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$rownum:=Drop position($colnum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("mydrag";$toGet)\xa0//obter dados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Pasteboard data size("mydrag")>0)&($colnum#1))\xa0//Se os dados est\xe3o na \xe1rea de transfer\xeancia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=0\xa0//poder\xedamos aceitar o soltar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=-1\xa0//Recusa o soltar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Drop)\xa0//o evento deve ser selecionado para o list box\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $toGet : Blob\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $rownum;$val : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$rownum:=Drop position($colnum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("mydrag";$toGet)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($toGet;$val)\xa0//obter o valor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Pasteboard data size("mydrag")>0))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($colnum=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\xa0//Adi\xe7\xe3o dos valores soltados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0John{$rownum}:=John{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Mark{$rownum}:=Mark{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($colnum=4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Peter{$rownum}:=Peter{$rownum}+$val\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(PaidCol;Find in array(PaidCol;$val))\xa0//Atualizar listbox de origem\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,a.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"_o_DRAG AND DROP PROPERTIES"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.em,{children:"Arrastar e Soltar"})]})]})}function c(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,a.jsx)(e,{...o,children:(0,a.jsx)(m,{...o})}):m(o)}},231045:(o,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/pict4091260.en-1dd251c85d0af3d5a601963d1fc874f0.png"},28453:(o,e,n)=>{n.d(e,{R:()=>s,x:()=>d});var a=n(296540);const r={},t=a.createContext(r);function s(o){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function d(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:s(o.components),a.createElement(t.Provider,{value:e},o.children)}}}]);