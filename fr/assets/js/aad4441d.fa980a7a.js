"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43750],{384781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"data-file-encryption-status",title:"Data file encryption status",slug:"/commands/data-file-encryption-status",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/data-file-encryption-status",title:"Data file encryption status",description:"Data file encryption status ( cheminStructure , cheminDonn\xe9es ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/data-file-encryption-status.md",sourceDirName:"commands-legacy",slug:"/commands/data-file-encryption-status",permalink:"/docs/fr/commands/data-file-encryption-status",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdata-file-encryption-status.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"data-file-encryption-status",title:"Data file encryption status",slug:"/commands/data-file-encryption-status",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Data Security",permalink:"/docs/fr/category/commands/Data Security"},next:{title:"Decrypt data BLOB",permalink:"/docs/fr/commands/decrypt-data-blob"}},a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data file encryption status"})," ( cheminStructure , cheminDonn\xe9es ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminStructure"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Chemin d'acc\xe8s du fichier de structure \xe0 v\xe9rifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminDonn\xe9es"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Chemin d'acc\xe8s du fichier de donn\xe9es 4D \xe0 v\xe9rifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Informations sur le chiffrement du fichier de donn\xe9es et de chaque table"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Data file encryption status"})," retourne un objet qui fournit le statut de chiffrement du fichier de donn\xe9es indiqu\xe9 par les param\xe8tres ",(0,s.jsx)(n.em,{children:"cheminStructure"})," et ",(0,s.jsx)(n.em,{children:"cheminDonn\xe9es"}),". Le statut de chiffrement de chaque table est \xe9galement fourni."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre cheminDonn\xe9es indique un fichier de donn\xe9es 4D (.4dd) qui doit correspondre au fichier de structure d\xe9fini par le param\xe8tre ",(0,s.jsx)(n.em,{children:"cheminStructure"}),". Vous pouvez indiquer le fichier de structure courant mais le fichier de donn\xe9es doit \xeatre diff\xe9rent du fichier courant (ouvert)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Utilisez la m\xe9thode ",(0,s.jsx)(n.em,{children:"ds.encryptionStatus( )"})," pour d\xe9terminer le statut de chiffrement du fichier de donn\xe9es courant."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,s.jsx)(n.p,{children:"L'objet retourn\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isEncrypted"}),(0,s.jsx)(n.td,{children:"Bool\xe9en"}),(0,s.jsx)(n.td,{children:"Vrai si le fichier de donn\xe9es est chiffr\xe9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"keyProvided"}),(0,s.jsx)(n.td,{children:"Bool\xe9en"}),(0,s.jsx)(n.td,{children:"Vrai si la cl\xe9 de chiffrement correspondant au fichier de donn\xe9es chiffr\xe9 est dans le trousseau 4D(*)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tables"}),(0,s.jsx)(n.td,{children:"Objet"}),(0,s.jsxs)(n.td,{children:["Objet contenant autant de propri\xe9t\xe9s que de tables ",(0,s.jsx)(n.em,{children:"chiffrables"})," ou ",(0,s.jsx)(n.em,{children:"chiffr\xe9es"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["<",(0,s.jsx)(n.em,{children:"table name"}),">"]}),(0,s.jsx)(n.td,{children:"Objet"}),(0,s.jsx)(n.td,{children:"Table chiffrable ou chiffr\xe9e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Texte"}),(0,s.jsx)(n.td,{children:"Nom de la table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"num"}),(0,s.jsx)(n.td,{children:"Num\xe9rique"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isEncryptable"}),(0,s.jsx)(n.td,{children:"Bool\xe9en"}),(0,s.jsx)(n.td,{children:"Vrai si la table est dite chiffrable dans le fichier de structure"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isEncrypted"}),(0,s.jsx)(n.td,{children:"Bool\xe9en"}),(0,s.jsx)(n.td,{children:"Vrai si les enregistrements de la table sont chiffr\xe9s dans le fichier de donn\xe9es"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"(*) La cl\xe9 de chiffrement peut avoir d\xe9j\xe0 \xe9t\xe9 fournie :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["pr\xe9c\xe9demment :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"avant l'ouverture de ce fichier de donn\xe9es, sur un appareil connect\xe9,"}),"\n",(0,s.jsxs)(n.li,{children:["via la commande ",(0,s.jsx)(n.em,{children:"ds.provideDataKey( )"})," \xe0 l'ouverture de ce fichier de donn\xe9es,"]}),"\n",(0,s.jsxs)(n.li,{children:["apr\xe8s l'ouverture du fichier de donn\xe9es, via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/discover-data-key",children:"Discover data key"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/register-data-key",children:"Register data key"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez connaitre le statut de chiffrement d'un fichier de donn\xe9es correspondant au fichier de structure courant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0\n\xa0$status:=Data file encryption status(Structure file;"D:\\\\Invoices\\\\Data_2019\\\\Invoices.4dd")\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Not($status.isEncrypted))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le fichier de donn\xe9es n\'est pas chiffr\xe9")\n\xa0\xa0\xa0\xa0:($status.isEncrypted&(Not($status.keyProvided))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le fichier de donn\xe9es est chiffr\xe9 et la cl\xe9 de chiffrement n\'est pas dans le trousseau. Vous n\'aurez pas acc\xe8s aux donn\xe9es chiffr\xe9es.")\n\xa0\xa0\xa0\xa0:($status.isEncrypted&$status.keyProvided)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le fichier de donn\xe9es est chiffr\xe9 et la cl\xe9 de chiffrement est dans le trousseau. Vous aurez acc\xe8s aux donn\xe9es chiffr\xe9es.")\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/encrypt-data-file",children:"Encrypt data file"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);