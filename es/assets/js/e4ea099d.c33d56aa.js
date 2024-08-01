/*! For license information please see e4ea099d.c33d56aa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49012],{962791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=n(474848),r=n(28453);const l={id:"vp-get-stylesheets",title:"VP Get stylesheet"},o=void 0,d={id:"ViewPro/commands/vp-get-stylesheets",title:"VP Get stylesheet",description:"VP Get stylesheet ( vpAreaName Text { ; sheet Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-stylesheets",permalink:"/docs/es/ViewPro/commands/vp-get-stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheet.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-stylesheets",title:"VP Get stylesheet"},sidebar:"docs",previous:{title:"VP Get stylesheets",permalink:"/docs/es/ViewPro/commands/vp-get-stylesheet"},next:{title:"VP Get column attributes",permalink:"/docs/es/ViewPro/commands/vp-get-table-column-attributes"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get stylesheet"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe1metros"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descripci\xf3n"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"styleName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Nombre del estilo"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Objeto hoja de estilo"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get stylesheet"})," command returns the ",(0,s.jsx)(t.em,{children:"styleName"})," style sheet object containing the property values which have been defined."]}),"\n",(0,s.jsxs)(t.p,{children:["En ",(0,s.jsx)(t.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,s.jsxs)(t.p,{children:["En ",(0,s.jsx)(t.em,{children:"styleName"}),", pase el nombre de la hoja de estilo a obtener."]}),"\n",(0,s.jsxs)(t.p,{children:["Puede definir d\xf3nde obtener la hoja de estilo en el par\xe1metro opcional ",(0,s.jsx)(t.em,{children:"sheet"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0) o con las siguientes constantes:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(t.p,{children:"El c\xf3digo siguiente:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["... devolver\xe1 el objeto estilo ",(0,s.jsx)(t.em,{children:"GreenDashDotStyle"})," de la hoja actual:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"{\nbackColor:green,\nborderBottom:{color:green,style:10},\nborderLeft:{color:green,style:10},\nborderRight:{color:green,style:10},\nborderTop:{color:green,style:10}\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/es/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/es/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/es/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/es/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var s=n(296540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,l={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,s)&&!i.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:a,props:l,_owner:d.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(296540);const r={},l=s.createContext(r);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);