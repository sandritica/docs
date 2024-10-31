"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57150],{297746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(474848),o=t(28453);const r={id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/set-timer",title:"SET TIMER",description:"SET TIMER ( tickCount )",source:"@site/versioned_docs/version-20-R7/commands-legacy/set-timer.md",sourceDirName:"commands-legacy",slug:"/commands/set-timer",permalink:"/docs/commands/set-timer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Right click",permalink:"/docs/commands/right-click"},next:{title:"Forms",permalink:"/docs/category/commands/Forms"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET TIMER"})," ( ",(0,s.jsx)(n.em,{children:"tickCount"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tickCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tickcount or -1=Trigger as soon as possible"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SET TIMER"})," command activates the On Timer form event and sets, for the current form and process, the number of ticks elapsed between each On Timer form event."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For more information about this form event, please refer to the description of the command ",(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If this command is called in a context in which it is not displaying a form, it will have no effect."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the ",(0,s.jsx)(n.strong,{children:"SET TIMER"})," command is executed in the context of a subform (form method of the subform), the On Timer event is generated in the subform and not at the parent form level."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass -1 in the ",(0,s.jsx)(n.em,{children:"tickCount"}),' parameter, the command will activate the On Timer form event "as soon as possible", in other words, as soon as the 4D application hands over control to the event manager. More particularly, this means that you can make sure that a form is completely displayed before beginning processing (application fluidity).']}),"\n",(0,s.jsxs)(n.p,{children:["To procedurally disable the triggering of the On Timer form event, call ",(0,s.jsx)(n.strong,{children:"SET TIMER"})," again and pass 0 in ",(0,s.jsx)(n.em,{children:"tickCount"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s imagine that you want, when a form is displayed on screen, the computer to beep every three seconds. To do so, write the following form method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0SET TIMER(60*3)\n\xa0End if\n\xa0\n\xa0If(Form event code=On Timer)\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/redraw",children:"REDRAW"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);