"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78627],{51590:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=s(474848),d=s(28453);const r={id:"method-set-comments",title:"METHOD SET COMMENTS",slug:"/commands/method-set-comments",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/method-set-comments",title:"METHOD SET COMMENTS",description:"METHOD SET COMMENTS ( chemin ; commentaires {; *} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-comments.md",sourceDirName:"commands-legacy",slug:"/commands/method-set-comments",permalink:"/docs/fr/commands/method-set-comments",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-comments.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"method-set-comments",title:"METHOD SET COMMENTS",slug:"/commands/method-set-comments",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"METHOD SET CODE",permalink:"/docs/fr/commands/method-set-code"},next:{title:"Drag and Drop",permalink:"/docs/fr/category/commands/Drag and Drop"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"METHOD SET COMMENTS"})," ( ",(0,t.jsx)(n.em,{children:"chemin"})," ; ",(0,t.jsx)(n.em,{children:"commentaires"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"chemin"}),(0,t.jsx)(n.td,{children:"Text, Text array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Texte ou Tableau texte contenant un ou plusieurs chemin(s) de m\xe9thode(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"commentaires"}),(0,t.jsx)(n.td,{children:"Text, Text array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Documentation de(s) m\xe9thode(s) d\xe9sign\xe9e(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"METHOD SET COMMENTS"})," remplace la documentation de la ou des m\xe9thode(s) d\xe9sign\xe9e(s) par le param\xe8tre ",(0,t.jsx)(n.em,{children:"chemin"})," par ceux d\xe9finis dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"commentaires"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"La documentation modifi\xe9e par cette commande est affich\xe9e dans l\u2019Explorateur de 4D (\xe0 ne pas confondre avec les lignes de commentaires dans le code). Ils contiennent du texte styl\xe9. Elle contient :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"du texte markdown dans les bases projet,"}),"\n",(0,t.jsx)(n.li,{children:"du texte styl\xe9 dans les bases binaires."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cette documentation peut \xeatre g\xe9n\xe9r\xe9e pour les m\xe9thodes de type trigger, m\xe9thodes projet, m\xe9thodes formulaire, m\xe9thodes base ou les classes."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les formulaires et les m\xe9thodes formulaire partagent la m\xeame documentation."]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser deux types de syntaxes, bas\xe9es soit sur des tableaux texte, soit sur des variables texte :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var vTchemin : Text\xa0// variables texte\n\xa0var vTcommentaires : Text\n\xa0METHOD SET COMMENTS(vTchemin;vTcommentaires)\xa0// documentation d\u2019une seule m\xe9thode\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabChemins;0)\xa0// tableaux texte\n\xa0ARRAY TEXT(tabCommentaires;0)\n\xa0METHOD SET COMMENTS(tabChemins;tabCommentaires)\xa0// documentation\xa0de plusieurs m\xe9thodes\n"})}),"\n",(0,t.jsx)(n.p,{children:"Il n\u2019est pas possible de mixer les deux syntaxes."}),"\n",(0,t.jsx)(n.p,{children:"Si un chemin d\u2019acc\xe8s pass\xe9 est invalide, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez ex\xe9cuter cette commande depuis un composant, mais dans ce cas vous devez passer le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," car l\u2019acc\xe8s en \xe9criture au code du composant n\u2019est pas possible. Si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," dans ce contexte, l\u2019erreur -9763 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Ajout d\u2019une date de modification \xe0 une documentation de trigger existante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0METHOD GET COMMENTS("[trigger]/Table1";$comments)\n\xa0$comments:="Modif :"+String(Date du jour)+"\\r"+$comments\n\xa0METHOD SET COMMENTS("[trigger]/Table1";$comments)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/method-get-comments",children:"METHOD GET COMMENTS"})})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(296540);const d={},r=t.createContext(d);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);