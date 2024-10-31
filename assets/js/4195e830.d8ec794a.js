"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15466],{766319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(474848),s=n(28453);const a={id:"export-data",title:"EXPORT DATA",slug:"/commands/export-data",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/export-data",title:"EXPORT DATA",description:"EXPORT DATA ( fileName {; project {; *}} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/export-data.md",sourceDirName:"commands-legacy",slug:"/commands/export-data",permalink:"/docs/commands/export-data",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"export-data",title:"EXPORT DATA",slug:"/commands/export-data",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Import and Export",permalink:"/docs/category/commands/Import and Export"},next:{title:"EXPORT DIF",permalink:"/docs/commands/export-dif"}},l={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"EXPORT DATA"})," ( ",(0,r.jsx)(t.em,{children:"fileName"})," {; ",(0,r.jsx)(t.em,{children:"project"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fileName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Full path name of the export file"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"project"}),(0,r.jsx)(t.td,{children:"Text, Blob"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Contents of the export project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"New contents of the export project (if the * parameter has been passed)"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Displays the export dialog box and updates the project"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"EXPORT DATA"})," command exports data in the ",(0,r.jsx)(t.em,{children:"fileName"})," file.4D can export data in the following formats: Text, Fixed length text, XML, SYLK, DIF, DBF (dBase), and 4D."]}),"\n",(0,r.jsxs)(t.p,{children:["If you pass an empty string in ",(0,r.jsx)(t.em,{children:"fileName"}),", ",(0,r.jsx)(t.strong,{children:"EXPORT DATA"})," displays the standard save file dialog box, allowing the user to define the name, type, and location of the export file. Once the dialog box has been accepted, the ",(0,r.jsx)(t.strong,{children:"Document"})," system variable contains the access path and the name of the file. If the user clicks ",(0,r.jsx)(t.strong,{children:"Cancel"}),", the execution of the command is stopped and the ",(0,r.jsx)(t.strong,{children:"OK"})," system variable is equal to 0."]}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"project"})," parameter lets you use a project to export data. When you pass this parameter, the export is carried out directly, without any user intervention (unless you use the ",(0,r.jsx)(t.em,{children:"*"})," option, see below). If you don\u2019t pass this parameter, the export dialog box is displayed. The user can define the export parameters or load an existing export project."]}),"\n",(0,r.jsxs)(t.p,{children:["An export project contains all the export parameters such as the tables and fields to export, delimiters, etc. In the ",(0,r.jsx)(t.em,{children:"project"})," parameter, you can pass either a Text variable containing XML or a Text variable containing a reference to a pre-existing DOM element, or a BLOB. Projects may have been created by programming (XML format projects only) or by loading parameters that were previously defined in the export dialog box.In the latter case, you have two solutions available:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use the ",(0,r.jsx)(t.strong,{children:"EXPORT DATA"})," command with an empty ",(0,r.jsx)(t.em,{children:"project"})," parameter and the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, then store the resulting ",(0,r.jsx)(t.em,{children:"project"})," parameter in a Text or BLOB type field (see below). This solution allows you to save the project with the data file."]}),"\n",(0,r.jsxs)(t.li,{children:["Save the project to disk, then load it for example by using the ",(0,r.jsx)(t.a,{href:"/docs/commands/dom-parse-xml-source",children:"DOM Parse XML source"})," command, and pass its reference in the ",(0,r.jsx)(t.em,{children:"project"})," parameter"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Compatibility note:"})," Beginning with version 12 of 4D, export projects are encoded in XML. 4D can open export projects generated with previous 4D versions (BLOB format) but any projects created starting with v12 can no longer be opened with v11 or earlier versions. We now recommend that you use Text variables for handling export files."]}),"\n",(0,r.jsxs)(t.p,{children:["The optional parameter ",(0,r.jsx)(t.em,{children:"*"}),", if it is specified, forces the display of the export dialog box with the parameters defined in ",(0,r.jsx)(t.em,{children:"project"}),". This feature allows you to use a predefined project, while still having the possibility to modify one or more of the parameters. Furthermore, the project parameter contains, after closing the export dialog box, the parameters of the \u201cnew\u201d project. You can then store the new project in a Text field, on disk, etc."]}),"\n",(0,r.jsxs)(t.p,{children:["If the export was successful, the ",(0,r.jsx)(t.strong,{children:"OK"})," system variable is set to 1."]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"This example illustrates the use of the EXPORT DATA command to export data in binary format."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This method makes a loop on all the database tables and calls the ExportBinary method:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $ExportPath : Text\n\xa0var $i : Integer\n\xa0$ExportPath:=Select folder("Please select the export folder:")\n\xa0If(Ok=1)\n\xa0\xa0\xa0\xa0For($i;1;Last table number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ExportBinary(Table($i);$ExportPath+Table name($i);True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Here is the code for the ExportBinary method:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $1 : Pointer\xa0//table\n\xa0var $2 : Text\xa0//path of destination file\n\xa0var $3 : Boolean\xa0//export all records\n\xa0var $i : Integer\n\xa0var $ref : Text\n\xa0$ref:=DOM Create XML Ref("settings-import-export")\n\xa0\xa0// Export the table "$1" in \'4D\' binary format, all the records or only the current selection\n\xa0DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)\n\xa0\xa0// Definition of fields to export\n\xa0For($i;1;Last field number($1))\n\xa0\xa0\xa0\xa0If(Is field number valid($1;$i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0EXPORT DATA($2;$ref)\n\xa0If(Ok=0)\n\xa0\xa0\xa0\xa0ALERT("Error during export of table "+Table name($1))\n\xa0End if\n\xa0DOM CLOSE XML($ref)\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"This example creates an empty project and stores the parameters set by the user in the export dialog box there:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $exportParams : Text\n\xa0EXPORT DATA("DocExport.txt";$exportParams;*)\xa0//Display of the export dialog box\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsxs)(t.p,{children:["If the user clicks ",(0,r.jsx)(t.strong,{children:"Cancel"})," in the standard open file dialog box or in the export dialog box, the OK system variable is equal to 0. If the export was successful, the OK system variable is equal to 1."]}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/export-dif",children:"EXPORT DIF"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/export-sylk",children:"EXPORT SYLK"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/import-data",children:"IMPORT DATA"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(296540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);