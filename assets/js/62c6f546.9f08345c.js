"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72221],{339547:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var n=s(474848),a=s(28453);const d={id:"edit-formula",title:"EDIT FORMULA",slug:"/commands/edit-formula",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/edit-formula",title:"EDIT FORMULA",description:"EDIT FORMULA ( aTable ; formula )",source:"@site/versioned_docs/version-20-R7/commands-legacy/edit-formula.md",sourceDirName:"commands-legacy",slug:"/commands/edit-formula",permalink:"/docs/commands/edit-formula",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fedit-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"edit-formula",title:"EDIT FORMULA",slug:"/commands/edit-formula",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Formulas",permalink:"/docs/category/commands/Formulas"},next:{title:"EXECUTE FORMULA",permalink:"/docs/commands/execute-formula"}},r={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"EDIT FORMULA"})," ( ",(0,n.jsx)(t.em,{children:"aTable"})," ; ",(0,n.jsx)(t.em,{children:"formula"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"aTable"}),(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Table to display by default in the Formula editor"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"formula"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:'Variable containing the formula to display in the Formula editor or "" to display editor only'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u2190"}),(0,n.jsx)(t.td,{children:"Formula validated by the user"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"EDIT FORMULA"})," command displays the Formula editor in order to let the user write or modify a formula. The editor contains the following on opening:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["in the left list, the fields of the table passed in the ",(0,n.jsx)(t.em,{children:"table"})," parameter,"]}),"\n",(0,n.jsxs)(t.li,{children:["in the formula area, the formula contained in the ",(0,n.jsx)(t.em,{children:"formula"})," variable. If you passed an empty string in ",(0,n.jsx)(t.em,{children:"formula"}),", the Formula editor is displayed without a formula."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The user can modify the ",(0,n.jsx)(t.em,{children:"formula"})," displayed and save it. It is also possible to write or load a new formula. Regardless, if the user validates the dialog box, the system variable OK is set to 1 and the ",(0,n.jsx)(t.em,{children:"formula"})," variable contains the formula defined by the user. If the user cancels the formula, the system variable OK is set to 0 and the ",(0,n.jsx)(t.em,{children:"formula"})," variable is left untouched."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["By default, access to methods and commands is restricted for all users (except for the Designer and Administrator). When this mechanism is enabled, you must explicitly designate the elements that can be accessed by the users using the ",(0,n.jsx)(t.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})," command. If ",(0,n.jsx)(t.em,{children:"formula"})," calls methods that were not first \u201cauthorized\u201d in the Formula editor using the ",(0,n.jsx)(t.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})," command, a syntax error is generated and you will not be able to validate the dialog box."]}),"\n",(0,n.jsxs)(t.li,{children:["The formula editor is not associated with any menu bar by default. You need to install a standard ",(0,n.jsx)(t.strong,{children:"Edit"})," menu in the calling process if you want users to be able to benefit from cut/copy/paste shortcuts in the formula editor."]}),"\n",(0,n.jsxs)(t.li,{children:["The virtual structure defined by the ",(0,n.jsx)(t.a,{href:"/docs/commands/set-table-titles",children:(0,n.jsx)(t.code,{children:"SET TABLE TITLES"})})," and ",(0,n.jsx)(t.a,{href:"/docs/commands/set-field-titles",children:(0,n.jsx)(t.code,{children:"SET FIELD TITLES"})})," commands (if any) must not be used in the ",(0,n.jsx)(t.em,{children:"formula"})," variable - nor will it be used by 4D in the returned variable. The virtual structure is only used in the Formula editor dialog box."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Keep in mind that when the dialog box is validated, the command does not execute the ",(0,n.jsx)(t.em,{children:"formula"}),"; it only validates and updates the contents of the variable. If you want to execute the ",(0,n.jsx)(t.em,{children:"formula"}),", you must use the ",(0,n.jsx)(t.a,{href:"/docs/commands/execute-formula",children:"EXECUTE FORMULA"})," command."]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Displaying the Formula editor with the [Employees] table and without a pre-entered formula:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0$myFormula:=""\n\xa0EDIT FORMULA([Employees];$myFormula)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Employees];EXECUTE FORMULA($myFormula))\n\xa0End if\n'})}),"\n",(0,n.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,n.jsx)(t.p,{children:"If the user validates the dialog box, the system variable OK is set to 1. If the user cancels the dialog box, the system variable OK is set to 0."}),"\n",(0,n.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/commands/apply-to-selection",children:"APPLY TO SELECTION"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/commands/execute-formula",children:"EXECUTE FORMULA"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(296540);const a={},d=n.createContext(a);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);