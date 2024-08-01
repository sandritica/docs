/*! For license information please see bab85dd7.70425e75.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81198],{760870:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var s=t(474848),o=t(28453);const r={id:"vp-set-default-style",title:"VP SET DEFAULT STYLE"},n=void 0,h={id:"ViewPro/commands/vp-set-default-style",title:"VP SET DEFAULT STYLE",description:"VP SET DEFAULT STYLE ( vpAreaName Object { ; sheet : Integer } )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-default-style.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-default-style",permalink:"/docs/pt/ViewPro/commands/vp-set-default-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-default-style.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-default-style",title:"VP SET DEFAULT STYLE"},sidebar:"docs",previous:{title:"VP SET DATE VALUE",permalink:"/docs/pt/ViewPro/commands/vp-set-date-value"},next:{title:"VP SET FIELD",permalink:"/docs/pt/ViewPro/commands/vp-set-field"}},d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const i={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"VP SET DEFAULT STYLE"})," ( ",(0,s.jsx)(i.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(i.em,{children:"styleObj"})," : Object { ; ",(0,s.jsx)(i.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Par\xe2metro"}),(0,s.jsx)(i.th,{children:"Tipo"}),(0,s.jsx)(i.th,{}),(0,s.jsx)(i.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(i.th,{})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"vpAreaName"}),(0,s.jsx)(i.td,{children:"Text"}),(0,s.jsx)(i.td,{children:"->"}),(0,s.jsx)(i.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"styleObj"}),(0,s.jsx)(i.td,{children:"Object"}),(0,s.jsx)(i.td,{children:"->"}),(0,s.jsx)(i.td,{children:"Objecto estilo"}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sheet"}),(0,s.jsx)(i.td,{children:"Integer"}),(0,s.jsx)(i.td,{children:"->"}),(0,s.jsx)(i.td,{children:"\xcdndice da folha (padr\xe3o = folha atual)"}),(0,s.jsx)(i.td,{})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"VP SET DEFAULT STYLE"})," command defines the style in the ",(0,s.jsx)(i.em,{children:"styleObj"})," as the default style for a ",(0,s.jsx)(i.em,{children:"sheet"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Em ",(0,s.jsx)(i.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,s.jsxs)(i.p,{children:["O ",(0,s.jsx)(i.em,{children:"styleObj"})," permite que voc\xea passe um objeto contendo configura\xe7\xf5es de estilo. Voc\xea pode usar uma folha de estilo existente ou criar um estilo. For more information, see the ",(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/configuring#style-objects",children:"Style objects"})," paragraph."]}),"\n",(0,s.jsxs)(i.p,{children:["In the optional ",(0,s.jsx)(i.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the style will be defined. Se omitido, a planilha atual ser\xe1 utilizada por padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual com a seguinte constante:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-4d",children:'$style:=New object\n$style.hAlign:=vk horizontal align left\n$style.font:="12pt papyrus"\n$style.backColor:="#E6E6FA" //cor roxa clara\n \nVP SET DEFAULT STYLE("myDoc";$style)\n'})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(732580).A+"",width:"354",height:"226"})}),"\n",(0,s.jsx)(i.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/commands/vp-font-to-object",children:"VP Font to object"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/commands/vp-get-default-style",children:"VP Get default style"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/commands/vp-set-border",children:"VP SET BORDER"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/docs/pt/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"})]})]})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,i,t)=>{var s=t(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,i,t){var s,r={},a=null,c=null;for(s in void 0!==t&&(a=""+t),void 0!==i.key&&(a=""+i.key),void 0!==i.ref&&(c=i.ref),i)n.call(i,s)&&!d.hasOwnProperty(s)&&(r[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===r[s]&&(r[s]=i[s]);return{$$typeof:o,type:e,key:a,ref:c,props:r,_owner:h.current}}i.Fragment=r,i.jsx=a,i.jsxs=a},474848:(e,i,t)=>{e.exports=t(221020)},732580:(e,i,t)=>{t.d(i,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>h});var s=t(296540);const o={},r=s.createContext(o);function n(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);