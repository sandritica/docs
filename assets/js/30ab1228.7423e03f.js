"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6e3],{513348:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var n=r(474848),t=r(28453);const d={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},a=void 0,o={id:"commands-legacy/verify-password-hash",title:"Verify password hash",description:"Verify password hash ( password ; hash ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/verify-password-hash.md",sourceDirName:"commands-legacy",slug:"/commands/verify-password-hash",permalink:"/docs/commands/verify-password-hash",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"STOP MONITORING ACTIVITY",permalink:"/docs/commands/stop-monitoring-activity"},next:{title:"Transactions",permalink:"/docs/category/commands/Transactions"}},h={},i=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const s={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Verify password hash"})," ( ",(0,n.jsx)(s.em,{children:"password"})," ; ",(0,n.jsx)(s.em,{children:"hash"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"password"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"The user's password.  Only the first 72 characters are used."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hash"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"A password hash."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Function result"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Returns TRUE if the password and hash match, otherwise returns FALSE."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Verify password hash"})," function verifies that the given ",(0,n.jsx)(s.em,{children:"hash"})," matches the given ",(0,n.jsx)(s.em,{children:"password"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["This function compares ",(0,n.jsx)(s.em,{children:"password"})," to a ",(0,n.jsx)(s.em,{children:"hash"})," generated by the ",(0,n.jsx)(s.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})," function."]}),"\n",(0,n.jsx)(s.h5,{id:"error-management",children:"Error management"}),"\n",(0,n.jsxs)(s.p,{children:["The following errors may be returned. You can review an error with the ",(0,n.jsx)(s.a,{href:"/docs/commands/last-errors",children:"Last errors"}),"  and ",(0,n.jsx)(s.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," commands."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Number"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Message"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"850"}),(0,n.jsx)(s.td,{children:"Password-hash: Unsupported algorithm."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"851"}),(0,n.jsx)(s.td,{children:"Password-hash: Consistency check failure."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Reminder:"})," Only bcrypt algorithm is supported. If your hash was not generated using bcrypt, an error is returned."]}),"\n",(0,n.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(s.p,{children:["This example verifies a password hash previously created by ",(0,n.jsx)(s.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})," and stored in a [Users] table with a newly entered password:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Please enter your password")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Good password")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Password error")\n\xa0End if\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," The password is never stored on disk, only the hash. Using a remote 4D application, the hash could be produced on the client side. If instead, you use a JavaScript (or similar) based front end, the best practice for security is to create the hash on the server side. Of course, you should use a TLS encrypted network connection for security, as this requires transferring the password over the network."]}),"\n",(0,n.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var n=r(296540);const t={},d=n.createContext(t);function a(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);