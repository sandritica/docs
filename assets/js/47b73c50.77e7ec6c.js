"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86584],{251861:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(474848),i=r(28453);const t={id:"zip-read-archive",title:"ZIP Read archive",displayed_sidebar:"docs"},d=void 0,c={id:"commands/zip-read-archive",title:"ZIP Read archive",description:"ZIP Read archive ( zipFile Text }) : 4D.ZipArchive",source:"@site/versioned_docs/version-20-R7/commands/zip-read-archive.md",sourceDirName:"commands",slug:"/commands/zip-read-archive",permalink:"/docs/commands/zip-read-archive",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-read-archive.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"zip-read-archive",title:"ZIP Read archive",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ZIP Create archive",permalink:"/docs/commands/zip-create-archive"},next:{title:"Form Events",permalink:"/docs/category/commands/Form Events"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,s.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zipFile"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Zip archive file"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"ZIP archive password if any"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"4D.ZipArchive"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Archive object"})]})]})]}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ZIP Read archive"})," command retrieves the contents of ",(0,s.jsx)(n.em,{children:"zipFile"})," and returns it as a ",(0,s.jsx)(n.code,{children:"4D.ZipArchive"})," object."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as ",(0,s.jsx)(n.a,{href:"/docs/API/Document#copyto",children:"file.copyTo()"})," or ",(0,s.jsx)(n.a,{href:"/docs/API/Directory#copyto",children:"folder.copyTo()"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Pass a ",(0,s.jsx)(n.code,{children:"4D.File"})," object referencing the compressed ZIP archive in the ",(0,s.jsx)(n.em,{children:"zipFile"})," parameter. The target archive file will be opened until the ",(0,s.jsx)(n.code,{children:"ZIP Read archive"})," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"zipFile"})," is password protected, you need to use the optional ",(0,s.jsx)(n.em,{children:"password"})," parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Archive object"})}),"\n",(0,s.jsxs)(n.p,{children:["The returned ",(0,s.jsx)(n.code,{children:"4D.ZipArchive"})," object contains a single ",(0,s.jsx)(n.a,{href:"/docs/API/ZipArchiveClass#root",children:(0,s.jsx)(n.code,{children:"root"})})," property whose value is a ",(0,s.jsx)(n.code,{children:"4D.ZipFolder"})," object. This folder describes the whole contents of the ZIP archive."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"To retrieve and view the contents of a ZIP file object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,s.jsx)(n.p,{children:"To retrieve the list of the files and folders in the archive:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,s.jsx)(n.p,{children:"To read the contents of a file without extracting it from the root folder:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"To extract from the root folder:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //extract a file\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extract all files\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,s.jsx)(n.a,{href:"/docs/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,s.jsx)(n.a,{href:"/docs/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/zip-create-archive",children:(0,s.jsx)(n.code,{children:"ZIP Create archive"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(296540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);