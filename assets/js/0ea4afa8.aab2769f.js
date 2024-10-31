"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52523],{396885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=n(474848),s=n(28453);const i={id:"set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",slug:"/commands/set-table-cache-priority",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",description:"SET TABLE CACHE PRIORITY ( aTable ; priority )",source:"@site/versioned_docs/version-20-R7/commands-legacy/set-table-cache-priority.md",sourceDirName:"commands-legacy",slug:"/commands/set-table-cache-priority",permalink:"/docs/commands/set-table-cache-priority",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",slug:"/commands/set-table-cache-priority",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET INDEX CACHE PRIORITY",permalink:"/docs/commands/set-index-cache-priority"},next:{title:"Collections",permalink:"/docs/category/commands/Collections"}},a={},o=[{value:"Expert mode",id:"expert-mode",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SET TABLE CACHE PRIORITY"})," ( ",(0,r.jsx)(t.em,{children:"aTable"})," ; ",(0,r.jsx)(t.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table whose scalar data priority value has to be set for the session"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"priority"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Cache priority value for scalar values in the table"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"expert-mode",children:"Expert mode"}),"\n",(0,r.jsx)(t.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"SET TABLE CACHE PRIORITY"})," command sets a specific ",(0,r.jsx)(t.em,{children:"priority"})," to the data related to ",(0,r.jsx)(t.em,{children:"aTable"})," in cache for all processes in the current session. This command should be called in the ",(0,r.jsx)(t.strong,{children:"On Startup"})," or ",(0,r.jsx)(t.strong,{children:"On Server Startup"})," database method."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,r.jsxs)(t.p,{children:["This command handles priority for data in scalar fields only (date, number, or string types). Priority for fields of binary type (Blobs, texts, pictures, and objects) is handled by the ",(0,r.jsx)(t.a,{href:"/docs/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"})," command."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"priority"}),' parameter, pass one of the following constants from the "',(0,r.jsx)(t.em,{children:"Cache Management"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cache priority low"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cache priority very low"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cache priority normal"}),(0,r.jsx)(t.td,{children:"Sets the cache priority to its default value"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cache priority high"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cache priority very high"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"In the , you want to set a high priority for the [Customer] scalar data:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0SET TABLE CACHE PRIORITY([Customer];Cache priority very high)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(296540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);