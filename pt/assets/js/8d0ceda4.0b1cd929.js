/*! For license information please see 8d0ceda4.0b1cd929.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40652],{57911:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(474848),t=o(28453);const r={id:"overview",title:"Fun\xe7\xf5es e comandos de classe"},a=void 0,c={id:"API/overview",title:"Fun\xe7\xf5es e comandos de classe",description:"As fun\xe7\xf5es e propriedades da classe 4D est\xe3o dispon\xedveis atrav\xe9s de objectos de inst\xe2ncia de classe. Esta se\xe7\xe3o descreve a API da classe 4D incorporada, bem como os comandos de constru\xe7\xe3o associados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/pt/API/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"overview",title:"Fun\xe7\xf5es e comandos de classe"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/pt/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/pt/API/BlobClass"}},i={},d=[{value:"Conven\xe7\xf5es de escrita",id:"conven\xe7\xf5es-de-escrita",level:2}];function l(e){const s={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"As fun\xe7\xf5es e propriedades da classe 4D est\xe3o dispon\xedveis atrav\xe9s de objectos de inst\xe2ncia de classe. Esta se\xe7\xe3o descreve a API da classe 4D incorporada, bem como os comandos de constru\xe7\xe3o associados."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["functions must be called on instances with the ",(0,n.jsx)(s.code,{children:"()"})," operator. Por exemplo, ",(0,n.jsx)(s.code,{children:"collection.sort()"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["properties are accessed without parentheses, for example ",(0,n.jsx)(s.code,{children:"file.creationTime"}),". You can also use the [] syntax, for example ",(0,n.jsx)(s.code,{children:'file["creationTime"]'}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["comandos podem ser chamados de forma independente, com ou sem par\xe2metros. Por exemplo, ",(0,n.jsx)(s.code,{children:"Folder(fk database folder)"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"conven\xe7\xf5es-de-escrita",children:"Conven\xe7\xf5es de escrita"}),"\n",(0,n.jsx)(s.p,{children:"As seguintes conven\xe7\xf5es s\xe3o utilizadas na sintaxe da fun\xe7\xe3o:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.code,{children:"{ }"})," characters (braces) indicate optional parameters. For example, ",(0,n.jsx)(s.code,{children:".delete( { option : Integer } )"})," means that the ",(0,n.jsx)(s.em,{children:"option"})," parameter may be omitted when calling the function."]}),"\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.code,{children:"{ ; ...param }"})," notation indicates an unlimited number of parameters. For example, ",(0,n.jsx)(s.code,{children:".concat( value : any { ;...valueN } ) : Collection"})," means that an unlimited number of values of any type can be passed to the function."]}),"\n",(0,n.jsxs)(s.li,{children:["the ",(0,n.jsx)(s.code,{children:"any"})," keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...)."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,s,o)=>{var n=o(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,o){var n,r={},d=null,l=null;for(n in void 0!==o&&(d=""+o),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)a.call(s,n)&&!i.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:t,type:e,key:d,ref:l,props:r,_owner:c.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},474848:(e,s,o)=>{e.exports=o(221020)},28453:(e,s,o)=>{o.d(s,{R:()=>a,x:()=>c});var n=o(296540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);