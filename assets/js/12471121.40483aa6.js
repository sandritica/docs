"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20528],{342346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(474848),s=t(28453);const i={id:"idle",title:"IDLE",slug:"/commands/idle",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/idle",title:"IDLE",description:"IDLE",source:"@site/versioned_docs/version-20-R7/commands-legacy/idle.md",sourceDirName:"commands-legacy",slug:"/commands/idle",permalink:"/docs/commands/idle",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fidle.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"idle",title:"IDLE",slug:"/commands/idle",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Compile project",permalink:"/docs/commands/compile-project"},next:{title:"Data Entry",permalink:"/docs/category/commands/Data Entry"}},r={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"IDLE"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Does not require any parameters"}),(0,o.jsx)(n.th,{})]})})}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The IDLE command is designed only for use with the compiler. This command is only used in compiled databases in which user-defined methods are written so that no calls are made back to the 4D engine. For example, if a method has a For loop in which no 4D commands are executed, the loop could not be interrupted by a process installed with ",(0,o.jsx)(n.a,{href:"/docs/commands/on-event-call",children:"ON EVENT CALL"}),", nor could a user switch to another application. In this case, you should insert IDLE to allow 4D to trap events. If you do not want any interruptions, omit IDLE."]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"In the following example, the loop would never terminate in a compiled database without the call to IDLE:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Do Something Project Method\n\xa0ON EVENT CALL("EVENT METHOD")\n\xa0\u25cavbWeStop:=False\n\xa0MESSAGE("Processing..."+Char(13)+"Type any key to interrupt...")\n\xa0Repeat\n\xa0\xa0// Do some processing that doesn\u2019t involve a 4D command\n\xa0\xa0\xa0\xa0IDLE\n\xa0Until(\u25cavbWeStop)\n\xa0ON EVENT CALL("")\n'})}),"\n",(0,o.jsx)(n.p,{children:"with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// EVENT METHOD Project Method\n\xa0If(Undefined(KeyCode))\n\xa0\xa0\xa0\xa0KeyCode:=0\n\xa0End if\n\xa0If(KeyCode#0)\n\xa0\xa0\xa0\xa0CONFIRM("Do you really want to stop this operation?")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u25cavbWeStop:=True\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Compiler Commands"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/on-event-call",children:"ON EVENT CALL"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var o=t(296540);const s={},i=o.createContext(s);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);