"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89159],{706926:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var r=n(474848),s=n(28453);const i={id:"spell-add-to-user-dictionary",title:"SPELL ADD TO USER DICTIONARY",slug:"/commands/spell-add-to-user-dictionary",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/spell-add-to-user-dictionary",title:"SPELL ADD TO USER DICTIONARY",description:"SPELL ADD TO USER DICTIONARY ( palabras )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/spell-add-to-user-dictionary.md",sourceDirName:"commands-legacy",slug:"/commands/spell-add-to-user-dictionary",permalink:"/docs/es/commands/spell-add-to-user-dictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-add-to-user-dictionary.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"spell-add-to-user-dictionary",title:"SPELL ADD TO USER DICTIONARY",slug:"/commands/spell-add-to-user-dictionary",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Spell Checker",permalink:"/docs/es/category/commands/Spell Checker"},next:{title:"SPELL CHECK TEXT",permalink:"/docs/es/commands/spell-check-text"}},c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const a={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SPELL ADD TO USER DICTIONARY"})," ( ",(0,r.jsx)(a.em,{children:"palabras"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"palabras"}),(0,r.jsx)(a.td,{children:"Text, Text array"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Palabra o lista de palabras para agregar al diccionario del usuario"})]})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["El comando ",(0,r.jsx)(a.strong,{children:"SPELL ADD TO USER DICTIONARY"})," a\xf1ade una o m\xe1s palabras al diccionario usuario actual."]}),"\n",(0,r.jsxs)(a.p,{children:["El diccionario usuario es un dicccionario que contiene palabras a\xf1adidas por el usuario al diccionario actual. Este diccionario es un archivo llamado ",(0,r.jsx)(a.em,{children:"UserDictionaryxxx.dic"})," (donde ",(0,r.jsx)(a.em,{children:"xxx"})," representa el ID del diccionario actual) que se crea autom\xe1ticamente en la carpeta 4D actual. Hay un diccionario usuario por cada diccionario actual utilizado."]}),"\n",(0,r.jsxs)(a.p,{children:["Puede pasar en ",(0,r.jsx)(a.em,{children:"palabras"})," una cadena texto o un array texto con las palabras a a\xf1adir al diccionario usuario. Si una de las palabras ya est\xe1 en el diccionario, es ignorada por el comando."]}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(a.p,{children:"Adici\xf3n de nombres propios al diccionario de usuario:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTwords;0)\n\xa0APPEND TO ARRAY($arrTwords;"4D")\n\xa0APPEND TO ARRAY($arrTwords;"Wakanda")\n\xa0APPEND TO ARRAY($arrTwords;"Clichy")\n\xa0SPELL ADD TO USER DICTIONARY($arrTwords)\n'})}),"\n",(0,r.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"/docs/es/commands/spell-check-text",children:"SPELL CHECK TEXT"})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>o});var r=n(296540);const s={},i=r.createContext(s);function d(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);