"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48281],{522890:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var t=r(474848),s=r(28453);const a={id:"sequence-number",title:"Sequence number",slug:"/commands/sequence-number",displayed_sidebar:"docs"},i=void 0,u={id:"commands-legacy/sequence-number",title:"Sequence number",description:"Sequence number {( laTable )} -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sequence-number.md",sourceDirName:"commands-legacy",slug:"/commands/sequence-number",permalink:"/docs/fr/commands/sequence-number",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsequence-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sequence-number",title:"Sequence number",slug:"/commands/sequence-number",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SAVE RECORD",permalink:"/docs/fr/commands/save-record"},next:{title:"Relations",permalink:"/docs/fr/category/commands/Relations"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sequence number"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )} -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table \xe0 num\xe9roter automatiquement ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro automatique"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sequence number"})," retourne le prochain num\xe9ro automatique de ",(0,t.jsx)(n.em,{children:"laTable"}),". Ce num\xe9ro est unique pour chaque table. C'est une valeur qui ne se r\xe9p\xe8te pas et qui est incr\xe9ment\xe9e \xe0 chaque enregistrement nouvellement cr\xe9\xe9 dans la table(*)."]}),"\n",(0,t.jsxs)(n.p,{children:["(*) Pour des raisons d'optimisation, la num\xe9rotation automatique est activ\xe9e uniquement au premier appel de la commande ",(0,t.jsx)(n.strong,{children:"Sequence number"})," ou d'une des fonctions qui y acc\xe8dent (cf. ci-dessous). De plus, le compteur peut \xeatre r\xe9initialis\xe9 via ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),". Par cons\xe9quent, la valeur retourn\xe9e ne correspond pas n\xe9cessairement au nombre d'enregistrements ayant \xe9t\xe9 cr\xe9\xe9s dans ",(0,t.jsx)(n.em,{children:"laTable"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, la num\xe9rotation commence \xe0 1 ; vous pouvez toutefois modifier la num\xe9rotation automatique des enregistrements de ",(0,t.jsx)(n.em,{children:"laTable"})," \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," S'il n'y a pas d'enregistrement courant et que la num\xe9rotation a \xe9t\xe9 modifi\xe9e via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),", le num\xe9ro est bien r\xe9serv\xe9 pour la prochaine cr\xe9ation d'enregistrement mais ne sera retourn\xe9 par la fonction ",(0,t.jsx)(n.strong,{children:"Sequence number"})," que lorsque la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})," sera effectivement appel\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Le num\xe9ro retourn\xe9 par cette fonction pour ",(0,t.jsx)(n.em,{children:"laTable"})," est identique \xe0 celui g\xe9n\xe9r\xe9 si vous avez coch\xe9 l'option ",(0,t.jsx)(n.strong,{children:"Incr\xe9mentation auto"})," dans l'Inspecteur de Structure pour un champ de ",(0,t.jsx)(n.em,{children:"laTable"})," ou si vous fixez #N comme valeur par d\xe9faut pour un champ de ",(0,t.jsx)(n.em,{children:"laTable"})," dans un formulaire (r\xe9f\xe9rez-vous au manuel ",(0,t.jsx)(n.em,{children:"Mode D\xe9veloppement"})," de 4D)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," L'incr\xe9mentation automatique peut \xe9galement \xeatre d\xe9finie via l'attribut SQL AUTO_INCREMENT."]}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Sequence number"})," est utile dans les cas suivants :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si la num\xe9rotation doit s'incr\xe9menter d'un nombre sup\xe9rieur \xe0 1"}),"\n",(0,t.jsx)(n.li,{children:"Si le num\xe9ro doit reprendre une partie d'un code"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Pour stocker ce num\xe9ro \xe0 l'aide d'une m\xe9thode, il faut cr\xe9er un champ de type Entier long dans la table et y affecter la num\xe9rotation automatique.",(0,t.jsx)(n.br,{}),"\nSi la num\xe9rotation doit d\xe9buter \xe0 une valeur diff\xe9rente de 1, ajoutez simplement la diff\xe9rence \xe0 la fonction ",(0,t.jsx)(n.strong,{children:"Sequence number"}),". Par exemple, si le num\xe9ro doit commencer \xe0 1000, vous pouvez utiliser la ligne de code suivante pour affecter le num\xe9ro :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0[Table1]NumAuto:=Sequence number([Table1])+999\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant fait partie d'une m\xe9thode formulaire. Ces lignes de code testent s'il s'agit d'un nouvel enregistrement (si le num\xe9ro de facture est \xe9gal \xe0 une cha\xeene vide). Si l'enregistrement est nouveau, un num\xe9ro est affect\xe9 \xe0 la facture. Ce num\xe9ro de facture est construit avec deux informations : le num\xe9ro unique et le num\xe9ro de r\xe9f\xe9rence de l'utilisateur, qui \xe9tait saisi \xe0 l'ouverture de la base. Le num\xe9ro unique est format\xe9 en tant que cha\xeene avec une longueur de cinq caract\xe8res :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If([Factures]NumFacture=\"\")\xa0// S'il s'agit d'une nouvelle facture, cr\xe9er un num\xe9ro de facture\n\xa0\xa0// Le num\xe9ro de facture est une cha\xeene qui se termine par le num\xe9ro de r\xe9f\xe9rence de l'utilisateur\n\xa0\xa0\xa0\xa0[Factures]NumFacture:=String(Numerotation automatique;\"00000\")+[Factures]Utilisateur\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/record-number",children:"Record number"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/selected-record-number",children:"Selected record number"})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>u});var t=r(296540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);