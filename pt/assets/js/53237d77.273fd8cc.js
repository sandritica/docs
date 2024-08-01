/*! For license information please see 53237d77.273fd8cc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29657],{242007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const o={id:"vp-get-spans",title:"VP Get spans"},a=void 0,d={id:"ViewPro/commands/vp-get-spans",title:"VP Get spans",description:"VP Get spans ( rangeObj Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-spans.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-spans",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-spans",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-spans.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-spans",title:"VP Get spans"},sidebar:"docs",previous:{title:"VP Get show print lines",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-show-print-lines"},next:{title:"VP Get stylesheets",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-stylesheet"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get spans"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto intervalo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objeto de c\xe9lulas fundidas no intervalo definido"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.code,{children:"VP Get spans"})," recupera os intervalos de c\xe9lulas no ",(0,s.jsx)(n.em,{children:"rangeObj"})," designado."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo de c\xe9lulas fusionadas que queira recuperar. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," does not contain a cell span, an empty range is returned."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser centrar o texto das c\xe9lulas fusionadas neste documento:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(659206).A+"",width:"678",height:"170"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// Search for all cell spans \n$range:=VP Get spans(VP All("ViewProArea"))\n \n//center text\n$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)\nVP SET CELL STYLE($range;$style)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,o={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,s)&&!i.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:l,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},659206:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cmd_vpGetSpans-60a3f93621cbbd596f1162f143d29894.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(296540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);