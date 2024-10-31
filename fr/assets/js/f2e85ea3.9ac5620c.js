"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4018],{727218:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=s(474848),r=s(28453);const i={id:"refresh-license",title:"Refresh license",slug:"/commands/refresh-license",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/refresh-license",title:"Refresh license",description:"Refresh license -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/refresh-license.md",sourceDirName:"commands-legacy",slug:"/commands/refresh-license",permalink:"/docs/fr/commands/refresh-license",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frefresh-license.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"refresh-license",title:"Refresh license",slug:"/commands/refresh-license",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"License usage",permalink:"/docs/fr/commands/license-usage"},next:{title:"List Box",permalink:"/docs/fr/category/commands/List Box"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){const n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Refresh license"})," -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objet statut"})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Refresh license"})," met \xe0 jour la licence 4D Server courante. Elle vous connecte \xe0 la base cliente de 4D et active automatiquement les nouvelles licences ou les mises \xe0 jour (",(0,t.jsx)(n.em,{children:"ex:"})," suite \xe0 l'achat de nouveaux clients)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Objet retourn\xe9"})}),"\n",(0,t.jsxs)(n.p,{children:["L'objet retourn\xe9 par ",(0,t.jsx)(n.strong,{children:"Refresh license"})," contient les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsx)(n.td,{children:"Vrai si l'actualisation est r\xe9ussie, sinon Faux."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{children:"num\xe9rique"}),(0,t.jsx)(n.td,{children:"Code du statut"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{children:"texte"}),(0,t.jsx)(n.td,{children:"Description du statut"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tips"}),(0,t.jsx)(n.td,{children:"texte"}),(0,t.jsx)(n.td,{children:"Suggestions pour r\xe9soudre l'erreur."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," : Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,t.jsx)(n.strong,{children:"Refresh license"})," ne fait rien."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez mettre \xe0 jour votre licence et recevoir un message \xe0 la fin de l'op\xe9ration :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode \xe0 ex\xe9cuter sur le serveur\n\xa0var $res : Object\n\xa0$res:=Refresh license\n\xa0If($res.success)\n\xa0\xa0\xa0\xa0ALERT("Mise \xe0 jour r\xe9ussie")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT($res.statusText)\n\xa0End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(296540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);