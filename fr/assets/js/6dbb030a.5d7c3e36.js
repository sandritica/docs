"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46079],{197603:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=r(474848),t=r(28453);const a={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/verify-password-hash",title:"Verify password hash",description:"Verify password hash ( motDePasse ; hash ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/verify-password-hash.md",sourceDirName:"commands-legacy",slug:"/commands/verify-password-hash",permalink:"/docs/fr/commands/verify-password-hash",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"STOP MONITORING ACTIVITY",permalink:"/docs/fr/commands/stop-monitoring-activity"},next:{title:"Transactions",permalink:"/docs/fr/category/commands/Transactions"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function h(e){const s={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Verify password hash"})," ( ",(0,n.jsx)(s.em,{children:"motDePasse"})," ; ",(0,n.jsx)(s.em,{children:"hash"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param\xe8tre"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"motDePasse"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Mot de passe utilisateur (seuls les 72 premiers caract\xe8res sont utilis\xe9s)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hash"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Hash du mot de passe"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"R\xe9sultat"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Vrai si motDePasse et hash correspondent, Faux sinon"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["La fonction ",(0,n.jsx)(s.strong,{children:"Verify password hash"})," v\xe9rifie que l'empreinte cryptographique ",(0,n.jsx)(s.em,{children:"hash"})," correspond bien au ",(0,n.jsx)(s.em,{children:"motDePasse"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Cette fonction compare ",(0,n.jsx)(s.em,{children:"motDePasse"})," \xe0 un ",(0,n.jsx)(s.em,{children:"hash"})," g\xe9n\xe9r\xe9 par la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/generate-password-hash",children:"Generate password hash"}),"."]}),"\n",(0,n.jsx)(s.h5,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,n.jsxs)(s.p,{children:["Les erreurs suivantes peuvent \xeatre retourn\xe9es. Vous pouvez r\xe9cup\xe9rer et analyser les erreurs \xe0 l'aide des commandes ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/last-errors",children:"Last errors"}),"  et ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Num\xe9ro"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Message"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"850"}),(0,n.jsx)(s.td,{children:"Password-hash: Algorithme inconnu"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"851"}),(0,n.jsx)(s.td,{children:"Password-hash: Echec lors des v\xe9rifications de coh\xe9rence"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Rappel :"})," Seul l'algorithme bcrypt est pris en charge. Si votre hash n'as pas \xe9t\xe9 g\xe9n\xe9r\xe9 \xe0 l'aide du bcrypt, une erreur est retourn\xe9e."]}),"\n",(0,n.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsxs)(s.p,{children:["Cet exemple compare un hash de mot de passe cr\xe9\xe9 par la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/generate-password-hash",children:"Generate password hash"})," et stock\xe9 dans la table [Users] avec un mot de passe qui vient d'\xeatre saisi :"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Veuillez saisir votre mot de passe.")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Mot de passe correct")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Mot de passe invalide")\n\xa0End if\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note :"})," Le mot de passe n'est jamais stock\xe9 sur disque, seule son empreinte cryptographique est conserv\xe9e. Lors de l'utilisation d'une application 4D distante, il est possible de g\xe9n\xe9rer le hash c\xf4t\xe9 client. Si vous utilisez une application cliente JavaScript (ou similaire), les bonnes pratiques en mati\xe8re de s\xe9curit\xe9 recommandent que le hash soit cr\xe9\xe9 c\xf4t\xe9 serveur. Bien entendu, dans ce cas par s\xe9curit\xe9 vous devez utiliser une connexion r\xe9seau crypt\xe9e avec TLS car le mot de passe est alors transf\xe9r\xe9 par le r\xe9seau."]}),"\n",(0,n.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/fr/commands/generate-password-hash",children:"Generate password hash"})})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>d});var n=r(296540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);