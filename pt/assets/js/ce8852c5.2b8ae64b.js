"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51245],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var A=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);a&&(A=A.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,A)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,A,r=function(e,a){if(null==e)return{};var t,A,r={},o=Object.keys(e);for(A=0;A<o.length;A++)t=o[A],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)t=o[A],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=A.createContext({}),u=function(e){var a=A.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=u(e.components);return A.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return A.createElement(A.Fragment,{},a)}},d=A.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,l=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?A.createElement(l,n(n({ref:a},p),{},{components:t})):A.createElement(l,n({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,n=new Array(o);n[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var u=2;u<o;u++)n[u]=t[u];return A.createElement.apply(null,n)}return A.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64387:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});t(67294);var A=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var A in t)Object.prototype.hasOwnProperty.call(t,A)&&(e[A]=t[A])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,A,r=function(e,a){if(null==e)return{};var t,A,r={},o=Object.keys(e);for(A=0;A<o.length;A++)t=o[A],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)t=o[A],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const n={id:"restore",title:"Restaurar um backup"},i=void 0,s={unversionedId:"Backup/restore",id:"version-18/Backup/restore",title:"Restaurar um backup",description:"4D allows you to restore entire sets of database data in case of any incidents, regardless of the cause of the incident. Podem ocorrer dois tipos principais de incidentes:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Backup/restore.md",sourceDirName:"Backup",slug:"/Backup/restore",permalink:"/docs/pt/18/Backup/restore",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Frestore.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"restore",title:"Restaurar um backup"},sidebar:"docs",previous:{title:"Arquivo de Log (.journal)",permalink:"/docs/pt/18/Backup/log"},next:{title:"Vis\xe3o Geral",permalink:"/docs/pt/18/Users/overview"}},u={},p=[{value:"Restaurar manualmente o backup (di\xe1logo padr\xe3o)",id:"restaurar-manualmente-o-backup-di\xe1logo-padr\xe3o",level:2},{value:"Restaurar manualmente a c\xf3pia de seguran\xe7a (MSC)",id:"restaurar-manualmente-a-c\xf3pia-de-seguran\xe7a-msc",level:2},{value:"Integra\xe7\xe3o manual do hist\xf3rico",id:"integra\xe7\xe3o-manual-do-hist\xf3rico",level:2}],c={toc:p};function d(e){var{components:a}=e,n=o(e,["components"]);return(0,A.kt)("wrapper",r({},c,n,{components:a,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"4D allows you to restore entire sets of database data in case of any incidents, regardless of the cause of the incident. Podem ocorrer dois tipos principais de incidentes:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"The unexpected stoppage of a database while in use. Esse incidente pode ocorrer por causa de uma falha de energia, erro em um elemento do sistema, etc. In this case, depending on the current state of the data cache at the moment of the incident, the restore of the database can require different operations:"),(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"If the cache was empty, the database opens normally. Todas as altera\xe7\xf5es efectuadas na base de dados foram registadas. Este caso n\xe3o exige nenhuma opera\xe7\xe3o particular"),(0,A.kt)("li",{parentName:"ul"},"Se a cache conter opera\xe7\xf5es, o arquivo de dados est\xe1 intacto mas exige integrar o arquivo de hist\xf3rico atual."),(0,A.kt)("li",{parentName:"ul"},"Se a cache estiver no processo de ser escrita, o arquivo de dados est\xe1 provavelmente danificado. When restoring a backup and integrating the current log file in a encrypted database:"))),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"The loss of database file(s). This incident can occur because of defective sectors on the disk containing the database, a virus, manipulation error, etc. O \xfaltimo backup deve ser restaurado e o arquivo de hist\xf3rico atual deve ser integrado. To find out if a database was damaged following an incident, simply relaunch the database using 4D. O programa realiza um autodiagn\xf3stico e detalha as opera\xe7\xf5es de restaura\xe7\xe3o necess\xe1rias. Em modo autom\xe1tico, essas opera\xe7\xf5es s\xe3o realizadas diretamente sem precisar de ajuda da parte do usu\xe1rio. If a regular backup strategy was put into place, the 4D restore tools will allow you to recover (in most cases) the database in the exact state it was in before the incident."))),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"4D can launch procedures automatically to recover databases following incidents. These mechanisms are managed using two options available on the ",(0,A.kt)("strong",{parentName:"p"},"Backup/Backup & Restore")," page of the Database Settings. For more information, refer to the ",(0,A.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/Backup/settings#automatic-restore"}),"Automatic Restore")," paragraph.",(0,A.kt)("br",{parentName:"p"}),"\n",'If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the database using the "rollback" function in the log file. Essa fun\xe7\xe3o est\xe1 dispon\xedvel na p\xe1gina ',(0,A.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/MSC/rollback"}),"Rollback")," do MSC.")),(0,A.kt)("h2",r({},{id:"restaurar-manualmente-o-backup-di\xe1logo-padr\xe3o"}),"Restaurar manualmente o backup (di\xe1logo padr\xe3o)"),(0,A.kt)("p",null,"Pode restaurar manualmente os conte\xfados de um arquivo gerado pelo m\xf3dulo de c\xf3pia de seguran\xe7a. Uma restaura\xe7\xe3o manual pode ser necess\xe1ria, por exemplo, para restaurar os conte\xfados completos de um arquivo (arquivos projetos e arquivos anexos) ou, para o prop\xf3sito de realizar pesquisas entre os arquivos. A restaura\xe7\xe3o manual pode tamb\xe9m ser realizada junto com a integra\xe7\xe3o do arquivo de hist\xf3rico atual."),(0,A.kt)("p",null,"The manual restore of backups can be carried out either via the standard Open document dialog box, or via the ",(0,A.kt)("a",r({parentName:"p"},{href:"MSC/restore"}),"Restore")," page of the MSC. A restaura\xe7\xe3o atrav\xe9s do MSC oferece mais op\xe7\xf5es e permite pr\xe9-visualizar os conte\xfados dos arquivos. On the other hand, only archives associated with the open database can be restored."),(0,A.kt)("p",null,"To restore a database manually via a standard dialog box:"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("strong",{parentName:"li"},"Content"),": Contents of the backup file. N\xe3o \xe9 obrigat\xf3rio que uma base de dados esteja aberta. OR Execute the ",(0,A.kt)("inlineCode",{parentName:"li"},"RESTORE")," command from a 4D method. Uma caixa de di\xe1logo de abertura de arquivos vai aparecer."),(0,A.kt)("li",{parentName:"ol"},"Selecione um arquivo de backup (.4bk) ou um arquivo de backup de hist\xf3rico (.4bl) para ser restaurado e clique ",(0,A.kt)("strong",{parentName:"li"},"Abrir"),". Aparece um di\xe1logo que permite especificar o local onde os arquivos ser\xe3o restaurados. Como padr\xe3o 4D restaura os arquivos em uma pasta chamada ",(0,A.kt)("em",{parentName:"li"},"Archivename")," (sem extens\xe3o) que fica do lado do arquivo. Pode exibir a rota:")),(0,A.kt)("p",null,(0,A.kt)("img",{src:t(80512).Z,width:"547",height:"242"})),(0,A.kt)("p",null,"You can also click on the ",(0,A.kt)("strong",{parentName:"p"},"Browse...")," button found just under the area in order to open any other archive file from a different location.\n3. The ",(0,A.kt)("strong",{parentName:"p"},"Restore")," button launches the manual restoration of the selected element(s). 4D extrai todos os arquivos de backup do local especificado. Se o arquivo de hist\xf3rico atual ou um arquivo de hist\xf3rico de backup com o mesmo n\xfamero que o arquivo de c\xf3pia de seguran\xe7a for armazenado na mesma pasta, 4D examina seus conte\xfados. Se conter opera\xe7\xf5es n\xe3o presentes no arquivo de dados, o programa vai perguntar se deseja integrar essas opera\xe7\xf5es. A integra\xe7\xe3o \xe9 feita automaticamente se a op\xe7\xe3o ",(0,A.kt)("strong",{parentName:"p"},"Integrar \xfaltimo arquivo de hist\xf3rico...")," for marcada (ver ",(0,A.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/Backup/settings#automatic-restore"}),"Restaura\xe7\xe3o autom\xe1tica"),"). 4.(Optional) Click ",(0,A.kt)("strong",{parentName:"p"},"OK")," to integrate the log file into the restored database. Se a restaura\xe7\xe3o e integra\xe7\xe3o forem realizadas corretamente, 4D exibe uma caixa de di\xe1logo indicando que a opera\xe7\xe3o foi feita com sucesso.\n5. ",(0,A.kt)("strong",{parentName:"p"},"Date and Time"),": Date and time of backup. A pasta de destino \xe9 mostrada. Durante a restaura\xe7\xe3o, 4D coloca todos os arquivos de backup nessa pasta, independente da posi\xe7\xe3o dos arquivos originais no disco quando o backup come\xe7ou. Dessa forma seus arquivos ser\xe3o mais f\xe1ceis de encontrar."),(0,A.kt)("h2",r({},{id:"restaurar-manualmente-a-c\xf3pia-de-seguran\xe7a-msc"}),"Restaurar manualmente a c\xf3pia de seguran\xe7a (MSC)"),(0,A.kt)("p",null,"You can manually restore an archive of the current database using the ",(0,A.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/MSC/restore"}),"Restore page")," of the Maintenance and Security Center (MSC)."),(0,A.kt)("h2",r({},{id:"integra\xe7\xe3o-manual-do-hist\xf3rico"}),"Integra\xe7\xe3o manual do hist\xf3rico"),(0,A.kt)("p",null,"If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see ",(0,A.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/MSC/restore#successive-intergration-of-several-data-log-files"}),"Successive integration of several log files"),"), a warning dialog box appears during the opening of the database when 4D notices that the log file contains more operations than have been carried out in the database."),(0,A.kt)("p",null,(0,A.kt)("img",{src:t(53797).Z,width:"512",height:"242"})),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"Para que esse mecanismo funcione, 4D deve poder acessar o arquivo de hist\xf3rico em seu local atual.")),(0,A.kt)("p",null,"Pode escolher se quer ou n\xe3o integrar o arquivo de hist\xf3rico atual. N\xe3o integrar o arquivo de hist\xf3rico atual permite evitar reproduzir erros feitos nos dados."))}d.isMDXComponent=!0},80512:(e,a,t)=>{t.d(a,{Z:()=>A});const A="data:image/png;base64,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"},53797:(e,a,t)=>{t.d(a,{Z:()=>A});const A="data:image/png;base64,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"}}]);