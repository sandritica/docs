/*! For license information please see 4c227cd5.d0ed10de.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83835],{168063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=n(474848),s=n(28453);const l={id:"vp-export-to-blob",title:"VP EXPORT TO BLOB"},d=void 0,o={id:"ViewPro/commands/vp-export-to-blob",title:"VP EXPORT TO BLOB",description:"VP EXPORT TO BLOB ( vpAreaName Object )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-export-to-blob.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-export-to-blob",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-export-to-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-blob.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-export-to-blob",title:"VP EXPORT TO BLOB"},sidebar:"docs",previous:{title:"VP EXPORT DOCUMENT",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-export-document"},next:{title:"VP Export to object",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-export-to-object"}},i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP EXPORT TO BLOB"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"paramObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paramObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Op\xe7\xf5es de exporta\xe7\xe3o"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP EXPORT TO BLOB"})," command exports the ",(0,r.jsx)(t.em,{children:"vpAreaName"})," 4D View Pro document in a 4D.Blob according to the ",(0,r.jsx)(t.em,{children:"paramObj"})," options. The exported blob is available through the export callback. A exporta\xe7\xe3o e importa\xe7\xe3o de \xe1reas do 4D View Pro como blobs \xe9 r\xe1pida e eficiente em termos de mem\xf3ria."]}),"\n",(0,r.jsxs)(t.p,{children:["Em ",(0,r.jsx)(t.em,{children:"paramObj"}),", voc\xea pode passar v\xe1rias propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Propriedade"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"formula"}),(0,r.jsx)(t.td,{children:"4D. Function"}),(0,r.jsxs)(t.td,{children:["(obrigat\xf3rio) M\xe9todo de retorno de chamada a ser lan\xe7ado quando a exporta\xe7\xe3o estiver conclu\xedda. Veja ",(0,r.jsx)(t.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passando um m\xe9todo de callback (f\xf3rmula)"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeAutoMergedCells"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se deve incluir as c\xe9lulas mescladas automaticamente ao salvar; padr\xe3o=falso."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeBindingSource"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se deve incluir a fonte de vincula\xe7\xe3o ao salvar, padr\xe3o = true."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeCalcModelCache"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se deve incluir os dados extras de c\xe1lculo. Pode afetar a velocidade de abertura do arquivo; padr\xe3o=false."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeEmptyRegionCells"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se devem ser inclu\xeddas c\xe9lulas vazias (c\xe9lulas sem dados ou apenas com estilo) fora do intervalo de dados usado, default=true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeFormulas"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se a f\xf3rmula deve ser inclu\xedda ao salvar, padr\xe3o = true."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeStyles"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se deve incluir o estilo ao salvar, padr\xe3o=true."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"includeUnusedNames"}),(0,r.jsx)(t.td,{children:"Par\xe2metros"}),(0,r.jsx)(t.td,{children:"Se deve incluir o nome personalizado n\xe3o utilizado ao salvar, padr\xe3o=true."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"|saveAsView|Boolean|Whether to apply the format string to exporting value when saving, default=false.|"}),"\n",(0,r.jsx)(t.p,{children:"Os seguintes par\xe2metros podem ser usados no m\xe9todo de retorno de chamada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Par\xe2metro"}),(0,r.jsx)(t.th,{style:{textAlign:"left"}}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Tipo"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"param1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"O nome do objeto 4D View Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"param2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"4D.blob"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"O blob exportado"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"param3"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Uma refer\xeancia ao par\xe2metro ",(0,r.jsx)(t.em,{children:"paramObj"})," do comando"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"param4"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Um objeto devolvido pelo m\xe9todo com uma mensagem de estado"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:".success"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"True se a exporta\xe7\xe3o for bem sucedida, False caso contr\xe1rio."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:".errorCode"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"C\xf3digo de erro."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Mensagem de erro."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(t.p,{children:["O comando ",(0,r.jsx)(t.code,{children:"VP EXPORT TO BLOB"})," \xe9 ass\xedncrono. Voc\xea deve criar um m\xe9todo de retorno de chamada (denominado ",(0,r.jsx)(t.em,{children:"VPBlobCallback"})," em nosso exemplo) para usar os resultados da exporta\xe7\xe3o."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'//Exportar o documento VP\nVP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"//M\xe9todo VPBlobCallback\n#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)\nvar $myEntity : cs.myTableEntity\n\nIf ($status.success)\n   // Save the document in a table\n   $myEntity:=ds.myTable.new()\n   $myEntity.blob:=$data\n   $myEntity.save()\nEnd if\n\n"})}),"\n",(0,r.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-import-from-blob",children:"VP IMPORT FROM BLOB"})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,l={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:c,props:l,_owner:o.current}}t.Fragment=l,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(296540);const s={},l=r.createContext(s);function d(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);