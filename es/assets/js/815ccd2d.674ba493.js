"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39609],{740115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var a=n(474848),s=n(28453);const o={id:"on-backup-shutdown-database-method",title:"On Backup Shutdown database method",slug:"/commands/on-backup-shutdown-database-method",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/on-backup-shutdown-database-method",title:"On Backup Shutdown database method",description:"$1 -> On Backup Shutdown database method",source:"@site/versioned_docs/version-20-R7/commands-legacy/on-backup-shutdown-database-method.md",sourceDirName:"commands-legacy",slug:"/commands/on-backup-shutdown-database-method",permalink:"/docs/es/commands/on-backup-shutdown-database-method",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-backup-shutdown-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"on-backup-shutdown-database-method",title:"On Backup Shutdown database method",slug:"/commands/on-backup-shutdown-database-method",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Database Methods",permalink:"/docs/es/category/commands/Database Methods"},next:{title:"On Backup Startup database method",permalink:"/docs/es/commands/on-backup-startup-database-method"}},c={},i=[];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"$1 -> On Backup Shutdown database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"$1"}),(0,a.jsx)(t.td,{children:"Longint"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"0 = backup executed correctly; other value = error, interrupted by user or code returned by On Backup Startup"})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,a.jsx)(t.h4,{id:""}),"\n",(0,a.jsxs)(t.p,{children:["The On Backup Shutdown database method is called every time a database backup ends. The reasons for the stoppage of a backup can be the end of the copy, user interruption or an error.",(0,a.jsx)(t.br,{}),"\nThis concerns all 4D environments: 4D (all modes), 4D Server as well as 4D applications compiled and merged with 4D Volume Desktop."]}),"\n",(0,a.jsxs)(t.p,{children:["The On Backup Shutdown database method allows verifying that the backup was executed correctly. It receives, in the ",(0,a.jsx)(t.em,{children:"$1"})," parameter, a value representing the status of the backup once completed:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If the backup was executed correctly, ",(0,a.jsx)(t.em,{children:"$1"})," equals 0."]}),"\n",(0,a.jsxs)(t.li,{children:["If the backup was interrupted by the user or following an error, ",(0,a.jsx)(t.em,{children:"$1"})," is different from 0.\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If the backup was stopped by the ",(0,a.jsx)(t.em,{children:"On Backup Startup Database Method"})," (",(0,a.jsx)(t.em,{children:"$0"})," # 0), ",(0,a.jsx)(t.em,{children:"$1"})," gets the value actually returned in the ",(0,a.jsx)(t.em,{children:"$0"})," parameter. This allows you to implement a customized error management system."]}),"\n",(0,a.jsxs)(t.li,{children:["If the backup was stopped due to an error, the error code is returned in ",(0,a.jsx)(t.em,{children:"$1"}),".",(0,a.jsx)(t.br,{}),"\nIn any case, you can get information about the error using the ",(0,a.jsx)(t.a,{href:"backup-info.md",children:"BACKUP INFO"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": You must declare the ",(0,a.jsx)(t.em,{children:"$1"})," parameter (longint) in the database method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0var $1 : Integer\n"})}),"\n",(0,a.jsxs)(t.p,{children:["It is important to note that in the case of an error during backup (disk full, support unavailable, etc.), the information related to the error is only displayed in the 4D Server monitor or in the MSC, and copied into the backup log. No alert dialog box appears and the ",(0,a.jsx)(t.em,{children:"error"})," variable is not modified. If you want to be able to notify the administrator that an error has occurred, particularly in the context of an application running in client/server mode, you will need to use the ",(0,a.jsx)(t.strong,{children:"On Backup Shutdown database method"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(296540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);