"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2243],{251965:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=n(474848),o=n(28453);const a={id:"on-web-legacy-close-session-database-method",title:"On Web Legacy Close Session database method",slug:"/commands/on-web-legacy-close-session-database-method",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/on-web-legacy-close-session-database-method",title:"On Web Legacy Close Session database method",description:"On Web Legacy Close Session database method",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-web-legacy-close-session-database-method.md",sourceDirName:"commands-legacy",slug:"/commands/on-web-legacy-close-session-database-method",permalink:"/docs/fr/commands/on-web-legacy-close-session-database-method",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-web-legacy-close-session-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"on-web-legacy-close-session-database-method",title:"On Web Legacy Close Session database method",slug:"/commands/on-web-legacy-close-session-database-method",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"On Web Connection database method",permalink:"/docs/fr/commands/on-web-connection-database-method"},next:{title:"Date and Time",permalink:"/docs/fr/category/commands/Date and Time"}},r={},l=[{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(s.table,{children:(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Ne requiert pas de param\xe8tre"}),(0,t.jsx)(s.th,{})]})})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(s.h4,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,t.jsxs)(s.p,{children:["Cette m\xe9thode base peut \xeatre utilis\xe9e uniquement avec d'",(0,t.jsx)(s.strong,{children:"anciennes sessions Web"}),", disponibles dans les bases de donn\xe9es converties \xe0 partir de versions ant\xe9rieures \xe0 4D v18 R6. Elle n'est jamais appel\xe9e lorsque le mode ",(0,t.jsx)(s.strong,{children:"sessions Web extensibles"})," est activ\xe9 (recommand\xe9 sous 4D v18 R6 et versions plus r\xe9centes). Pour plus d'informations, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Gestion des sessions Web"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:""}),"\n",(0,t.jsxs)(s.p,{children:["La ",(0,t.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})," est appel\xe9e par le serveur Web de 4D \xe0 chaque fois qu\u2019une session Web est sur le point d\u2019\xeatre referm\xe9e. Une session peut \xeatre referm\xe9e dans les cas suivants :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["lorsque le nombre maximum de sessions simultan\xe9es est atteint (100 par d\xe9faut, modifiable via la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-set-option",children:"WEB SET OPTION"}),"), et que 4D a besoin d\u2019en cr\xe9er de nouvelles (4D d\xe9truit automatiquement le process de la session inactive la plus ancienne),"]}),"\n",(0,t.jsxs)(s.li,{children:["lorsque la p\xe9riode maximale d\u2019inactivit\xe9 du process de la session est atteinte (480 minutes par d\xe9faut, modifiable via la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-set-option",children:"WEB SET OPTION"}),"),"]}),"\n",(0,t.jsxs)(s.li,{children:["lorsque la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-legacy-close-session",children:"WEB LEGACY CLOSE SESSION"})," est appel\xe9e."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Au moment de l\u2019appel de la m\xe9thode base, le contexte de la session (variables et s\xe9lections g\xe9n\xe9r\xe9es par l\u2019utilisateur) est toujours valide. Ce principe vous permet donc de stocker les donn\xe9es relatives \xe0 la session afin de pouvoir les r\xe9utiliser par la suite, en particulier via la ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/qr-set-destination",children:"QR SET DESTINATION"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Dans le contexte d'une session 4D Mobile (pouvant g\xe9n\xe9rer plusieurs process), la ",(0,t.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})," est appel\xe9e pour chaque process Web referm\xe9, vous permettant de sauvegarder tout type de donn\xe9e (variable, s\xe9lection, etc.) g\xe9n\xe9r\xe9e par le process de session 4D Mobile."]}),"\n",(0,t.jsxs)(s.p,{children:["Un exemple d\u2019utilisation de la ",(0,t.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})," est fourni dans la section ",(0,t.jsx)(s.em,{children:"Gestion des sessions Web"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Gestion des sessions Web"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-legacy-close-session",children:"WEB LEGACY CLOSE SESSION"})]})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var t=n(296540);const o={},a=t.createContext(o);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);