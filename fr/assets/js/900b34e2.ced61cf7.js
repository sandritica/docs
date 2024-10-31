"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95234],{311144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=s(474848),l=s(28453);const t={id:"blob-properties",title:"BLOB PROPERTIES",slug:"/commands/blob-properties",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/blob-properties",title:"BLOB PROPERTIES",description:"BLOB PROPERTIES ( blob ; compress\xe9 {; tailleD\xe9compress\xe9e {; tailleCourante}} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-properties.md",sourceDirName:"commands-legacy",slug:"/commands/blob-properties",permalink:"/docs/fr/commands/blob-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-properties",title:"BLOB PROPERTIES",slug:"/commands/blob-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/fr/category/commands/BLOB"},next:{title:"BLOB size",permalink:"/docs/fr/commands/blob-size"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB PROPERTIES"})," ( ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"compress\xe9"})," {; ",(0,r.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"})," {; ",(0,r.jsx)(n.em,{children:"tailleCourante"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB sur lequel vous voulez obtenir des informations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compress\xe9"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"0 = pas de compression, 1 = interne compact, 2 = interne rapide, -1 = GZIP compact, -2 = GZIP rapide"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tailleD\xe9compress\xe9e"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Taille du BLOB d\xe9compress\xe9 en octets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tailleCourante"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Taille courante du BLOB en octets"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB PROPERTIES"})," retourne des informations sur le BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"compress\xe9"})," retourne une valeur indiquant si et comment le BLOB est compress\xe9. Vous pouvez comparer cette valeur aux constantes suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"BLOB"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Compact compression mode"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Compression interne la plus compacte (au d\xe9triment de la vitesse \xe0 laquelle la compression et la d\xe9compression sont effectu\xe9es). M\xe9thode par d\xe9faut."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fast compression mode"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Compression/d\xe9compression interne la plus rapide au d\xe9triment du taux de compression (une fois compress\xe9, le BLOB prend plus de place)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GZIP best compression mode"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"Compression GZIP la plus compacte (au d\xe9triment de la vitesse \xe0 laquelle la compression et la d\xe9compression sont effectu\xe9es)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GZIP fast compression mode"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-2"}),(0,r.jsx)(n.td,{children:"Compression/d\xe9compression GZIP la plus rapide (au d\xe9triment du taux de compression)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is not compressed"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Pas de compression"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Quel que soit l'\xe9tat de compression du BLOB, le param\xe8tre ",(0,r.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"})," retourne la taille du BLOB non compress\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"tailleCourante"})," retourne la taille courante du BLOB. Si le BLOB est compress\xe9, ",(0,r.jsx)(n.em,{children:"tailleCourante"})," sera inf\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"}),". Si le BLOB n'est pas compress\xe9, ",(0,r.jsx)(n.em,{children:"tailleCourante"})," sera \xe9gal \xe0 ",(0,r.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["R\xe9f\xe9rez-vous aux exemples des commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/compress-blob",children:"COMPRESS BLOB"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Lorsqu'un BLOB est compress\xe9, la m\xe9thode projet suivante vous permet de conna\xeetre le taux de place gagn\xe9e en compressant le BLOB :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet Place gagn\xe9e par compression\n\xa0\xa0// Place gagn\xe9e par compression (Pointeur {; Pointeur } ) -> Entier long\n\xa0\xa0// Place gagn\xe9e par compression ( -> BLOB {; -> octetsGagn\xe9s } ) -> Pourcentage\n\xa0\n\xa0var $1;$2 : Pointer\n\xa0var $0;$vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante : Integer\n\xa0\n\xa0BLOB PROPERTIES($1->;$vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante)\n\xa0If($vlTailleD\xe9compress\xe9e=0)\n\xa0\xa0\xa0\xa0$0:=0\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->:=0\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=100-(($vlTailleCourante/$vlTailleD\xe9compress\xe9e)*100)\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->:=$vlTailleD\xe9compress\xe9e-$vlTailleCourante\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Lorsque cette m\xe9thode est plac\xe9e dans votre application, vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0COMPRESS BLOB(vxBlob)\n\xa0$vlPourcent:=Place gagn\xe9e par compression(->vxBlob;->vlTailleBlob)\n\xa0ALERT("La compression permet de gagner "+String(vlTailleBlob)+" octets, donc "+Chaine($vlPourcent;"#0%")+" d\'espace.")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/compress-blob",children:"COMPRESS BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(296540);const l={},t=r.createContext(l);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);