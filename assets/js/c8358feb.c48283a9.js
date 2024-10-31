"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58617],{133489:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=s(474848),t=s(28453);const l={id:"new-shared-collection",title:"New shared collection",displayed_sidebar:"docs"},c=void 0,r={id:"commands/new-shared-collection",title:"New shared collection",description:"New shared collection {( ...value Collection",source:"@site/versioned_docs/version-20-R7/commands/new-shared-collection.md",sourceDirName:"commands",slug:"/commands/new-shared-collection",permalink:"/docs/commands/new-shared-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-shared-collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"new-shared-collection",title:"New shared collection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New collection",permalink:"/docs/commands/new-collection"},next:{title:"Communications",permalink:"/docs/category/commands/Communications"}},i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"New shared collection"})," {( ",(0,o.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"value"}),(0,o.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Shared object, Shared collection"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Shared collection's value(s)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"New shared collection"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"New shared collection"})," command  creates a new empty or prefilled shared collection and returns its reference. Collections can be handled using properties and functions of the ",(0,o.jsx)(n.a,{href:"/docs/API/CollectionClass",children:"Collection class API"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Adding an element to this collection using the assignment operator must be surrounded by the ",(0,o.jsx)(n.a,{href:"/docs/Concepts/shared#useend-use",children:(0,o.jsx)(n.code,{children:"Use...End use"})})," structure, otherwise an error is generated (this is not necessary when adding elements using functions such as ",(0,o.jsx)(n.a,{href:"/docs/API/CollectionClass#push",children:(0,o.jsx)(n.code,{children:"push()"})})," or ",(0,o.jsx)(n.a,{href:"/docs/API/CollectionClass#map",children:(0,o.jsx)(n.code,{children:"map()"})})," because they automatically trigger an internal ",(0,o.jsx)(n.em,{children:"Use...End use"}),"). Reading an element without a ",(0,o.jsx)(n.em,{children:"Use...End use"})," structure is, however, possible."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For more information on shared collections, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/Concepts/shared",children:"Shared objects and collections"})," page."]})}),"\n",(0,o.jsxs)(n.p,{children:["If you do not pass any parameters, ",(0,o.jsx)(n.code,{children:"New shared collection"})," creates an empty shared collection and returns its reference."]}),"\n",(0,o.jsx)(n.p,{children:"You must assign the returned reference to a 4D variable of the Collection type."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Keep in mind that ",(0,o.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,o.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Optionally, you can prefill the new shared collection by passing one or several ",(0,o.jsx)(n.em,{children:"value"}),"(s) as parameter(s). Otherwise, you can add or modify elements subsequently through object notation assignment (see example)."]}),"\n",(0,o.jsxs)(n.p,{children:["If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a ",(0,o.jsx)(n.strong,{children:"null"})," value."]}),"\n",(0,o.jsx)(n.p,{children:"You can pass any number of values of the following supported types:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"number (real, longint...). Number values are always stored as reals."}),"\n",(0,o.jsx)(n.li,{children:"text"}),"\n",(0,o.jsx)(n.li,{children:"boolean"}),"\n",(0,o.jsx)(n.li,{children:"date"}),"\n",(0,o.jsx)(n.li,{children:"time (stored as number of milliseconds - real)"}),"\n",(0,o.jsx)(n.li,{children:"null"}),"\n",(0,o.jsx)(n.li,{children:"shared object"}),"\n",(0,o.jsx)(n.li,{children:"shared collection"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared."})}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $mySharedCol:=New shared collection("alpha";"omega")\n Use($mySharedCol)\n    $mySharedCol[1]:="beta"\n End use\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/new-collection",children:"New collection"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/new-shared-object",children:"New shared object"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Shared objects and shared collections"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var o=s(296540);const t={},l=o.createContext(t);function c(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);