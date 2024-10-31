"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27863],{985589:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=r(474848),s=r(28453);const d={id:"xml-decode",title:"XML DECODE",slug:"/commands/xml-decode",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/xml-decode",title:"XML DECODE",description:"XML DECODE ( valor XML ; objeto4D )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/xml-decode.md",sourceDirName:"commands-legacy",slug:"/commands/xml-decode",permalink:"/docs/es/commands/xml-decode",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fxml-decode.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"xml-decode",title:"XML DECODE",slug:"/commands/xml-decode",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"XML",permalink:"/docs/es/category/commands/XML"},next:{title:"XML GET ERROR",permalink:"/docs/es/commands/xml-get-error"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",double:"double",em:"em",h4:"h4",p:"p",pre:"pre",price:"price",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"XML DECODE"})," ( valor XML ; ",(0,t.jsx)(n.em,{children:"objeto4D"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor XML"}),(0,t.jsx)(n.td,{children:"Texto"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor de tipo texto proveniente de una estructura XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto4D"}),(0,t.jsx)(n.td,{children:"Field, Variable"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Variable o campo 4D que recibe el valor XML convertido"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"XML DECODE"})," convierte un valor guardado como una cadena XML en un valor 4D. La conversi\xf3n se efect\xfaa autom\xe1ticamente en funci\xf3n de las siguientes reglas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Valor"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Ejemplos"})}),(0,t.jsx)(n.th,{children:"Conversi\xf3n en sistema ingl\xe9s"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"num\xe9rico"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.price,{children:"8,5"}),(0,t.jsx)(n.price,{children:"8.5"})]}),(0,t.jsx)(n.td,{children:"Real: 8.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Booleano"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.double,{children:"1"})," ",(0,t.jsx)(n.double,{children:"0"})," o ",(0,t.jsx)(n.double,{children:"true"})," ",(0,t.jsx)(n.double,{children:"false"})]}),(0,t.jsx)(n.td,{children:"Booleano: True/False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BLOB"}),(0,t.jsx)(n.td,{children:"Decodificaci\xf3n Base64"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Im\xe1genes"}),(0,t.jsx)(n.td,{children:"Decodificaci\xf3n Base64 + comando BLOB to picture"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fechas"}),(0,t.jsx)(n.td,{children:"2009-10-25T01:03:20+01:00"}),(0,t.jsx)(n.td,{children:"!10/25/2009! -> Supresi\xf3n de la parte hora y de la zona horaria"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Horas"}),(0,t.jsx)(n.td,{children:"2009-10-25T01:03:20+01:00"}),(0,t.jsxs)(n.td,{children:["?01:03:20? -> Supresi\xf3n de la parte fecha. ",(0,t.jsx)(n.em,{children:"Atenci\xf3n"}),': la zona horaria se tiene en cuenta si es diferente de la hora local. Por ejemplo: "2009-10-25T01:03:20+05:00" se decodificar\xe1 ?21:03:20? en UTC+1 hora local']})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si el tipo de par\xe1metro ",(0,t.jsx)(n.em,{children:"4Dvar"})," no est\xe1 definido, el tipo texto se utiliza por defecto."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Importaci\xf3n de datos desde un documento XML en el cual los valores se guardan como atributos.",(0,t.jsx)(n.br,{}),"\nEjemplo del documento XML:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<CD Date="2003-01-01T00:00:00Z" Description="This double CD reissued by EMI in 1995 combines 4 Stabat mater hymns. One by Rossini interpreted by the Berlin Symphony Orchestra, directed by Karl Forster. Followed by a work of Verdi, by the Philharmonic Orchestra, directed by Carlo Maria Giulini. On the second CD, you will find Francis Poulenc interpreted by R\xe9gine Crespin. This compilation ends with a little-known version, that of the Polish composer Karol Szymanowski. Polish National Radio Symphony Orchestra directed by Antoni Wit" Double="true" Duration="7246" Type="Sacred music" CD_ID="5" Performer="Various" Price="8.5" Title="4 Stabat mater"/>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Repeat\n\xa0\xa0\xa0\xa0MyEvent:=SAX Get XML node(DocRef)\n\xa0\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(MyEvent=XML Start Element)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrAttrNames;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrAttrValues;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAX GET XML ELEMENT(DocRef;vName;vPrefix;arrAttrNames;arrAttrValues)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vName="CD")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([CD])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($i;1;Size of array(arrAttrNames))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$attrName:=arrAttrNames{$i}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="CD_ID")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]CD_ID)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Title")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CD]Work:=arrAttrValues{$i}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Price")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Price)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Date")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Date entered)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Duration")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Total_duration)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($attrName="Double")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0XML DECODE(arrAttrValues{$i};[CD]Double_CD)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0End case\n\xa0Until(MyEvent=XML End Document)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/base64-decode",children:"BASE64 DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/base64-encode",children:"BASE64 ENCODE"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(296540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);