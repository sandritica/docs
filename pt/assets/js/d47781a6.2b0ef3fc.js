/*! For license information please see d47781a6.2b0ef3fc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11293],{127516:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=n(474848),r=n(28453);const d={id:"vp-set-allowed-methods",title:"VP SET ALLOWED METHODS"},i=void 0,o={id:"ViewPro/commands/vp-set-allowed-methods",title:"VP SET ALLOWED METHODS",description:"VP SET ALLOWED METHODS ( methodObj : Object)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-allowed-methods.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-allowed-methods",permalink:"/docs/pt/ViewPro/commands/vp-set-allowed-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-allowed-methods.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-allowed-methods",title:"VP SET ALLOWED METHODS"},sidebar:"docs",previous:{title:"VP SET ACTIVE CELL",permalink:"/docs/pt/ViewPro/commands/vp-set-active-cell"},next:{title:"VP SET BINDING PATH",permalink:"/docs/pt/ViewPro/commands/vp-set-binding-path"}},a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"VP SET ALLOWED METHODS"})," ( ",(0,t.jsx)(s.em,{children:"methodObj"})," : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(s.th,{})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"methodObj"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"M\xe9todos permitidos nas \xe1reas 4D View Pro"}),(0,t.jsx)(s.td,{})]})})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Compatibidade"})}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["For greater flexiblity, it is recommended to use the ",(0,t.jsx)(s.a,{href:"/docs/pt/ViewPro/commands/vp-set-custom-functions",children:(0,t.jsx)(s.code,{children:"VP SET CUSTOM FUNCTIONS"})})," command which allows you to designate 4D formulas that can be called from 4D View Pro areas. As soon as ",(0,t.jsx)(s.code,{children:"VP SET CUSTOM FUNCTIONS"})," is called, ",(0,t.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})," calls are ignored. 4D View Pro also supports 4D's generic ",(0,t.jsx)(s.code,{children:"SET ALLOWED METHODS"})," command if neither ",(0,t.jsx)(s.code,{children:"VP SET CUSTOM FUNCTIONS"})," nor ",(0,t.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})," are called, however using the generic command is not recommended."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})," command designates the project methods that can be called in 4D View Pro formulas. Esse comando se aplica a todas as \xe1reas do 4D View Pro inicializadas ap\xf3s sua chamada durante a sess\xe3o. Ele pode ser chamado v\xe1rias vezes na mesma sess\xe3o para inicializar diferentes configura\xe7\xf5es."]}),"\n",(0,t.jsxs)(s.p,{children:["By default for security reasons, if you do not execute the ",(0,t.jsx)(s.code,{children:"VP SET ALLOWED METHODS"})," command, no method call is allowed in 4D View Pro areas -- except if 4D's generic ",(0,t.jsx)(s.code,{children:"SET ALLOWED METHODS"})," command was used (see compatibility note). A utiliza\xe7\xe3o de um m\xe9todo n\xe3o autorizado numa f\xf3rmula imprime um error #NOME? erro na \xe1rea 4D View Pro."]}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.em,{children:"methodObj"})," parameter, pass an object in which each property is the name of a function to define in the 4D View Pro areas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Propriedade"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<functionName>"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsxs)(s.td,{children:["Defini\xe7\xe3o da fun\xe7\xe3o personalizada. The ",(0,t.jsx)(s.code,{children:"<functionName>"})," property name defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"method"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"(obrigat\xf3rio) Nome do m\xe9todo projeto 4D existente para permitir"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"parameters"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Uma cole\xe7\xe3o de objetos"}),(0,t.jsxs)(s.td,{children:["Cole\xe7\xe3o de par\xe2metros (na ordem em que s\xe3o definidos no m\xe9todo). For more information, please refer to the ",(0,t.jsx)(s.a,{href:"/docs/pt/ViewPro/formulas#parameters",children:"Parameters"})," section."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[ ].name"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsxs)(s.td,{children:["Name of a parameter to display for the ",(0,t.jsx)(s.code,{children:"<functionName>"}),".",(0,t.jsx)(s.strong,{children:"Note"}),": Parameter names must not contain space characters."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[ ].type"}),(0,t.jsx)(s.td,{children:"Number"}),(0,t.jsxs)(s.td,{children:["Tipo do par\xe2metro. Supported types:",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is Boolean"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is collection"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is date"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is Integer"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is object"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is real"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is text"})}),(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Is time"})}),(0,t.jsx)(s.em,{children:"type"})," can be omitted (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). ",(0,t.jsx)(s.br,{})," If ",(0,t.jsx)(s.em,{children:"type"})," is omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object.  If ",(0,t.jsx)(s.em,{children:"type"})," is ",(0,t.jsx)(s.code,{children:"Is object"}),", the object is sent in a ",(0,t.jsx)(s.code,{children:".value"})," property. Consulte a se\xe7\xe3o ",(0,t.jsx)(s.a,{href:"/docs/pt/ViewPro/formulas#parameters",children:"Par\xe2metros"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"resumo"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"Descri\xe7\xe3o da fun\xe7\xe3o a ser exibida no 4D View Pro"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"minParams"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number"}),(0,t.jsx)(s.td,{children:"N\xfamero m\xednimo de par\xe2metros"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"maxParams"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number"}),(0,t.jsx)(s.td,{children:'N\xfamero m\xe1ximo de par\xe2metros. Passar um n\xfamero maior que o comprimento dos par\xe2metros permite declarar par\xe2metros "opcionais" com o tipo padr\xe3o'})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(s.p,{children:"Pretende permitir dois m\xe9todos nas suas \xe1reas 4D View Pro:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'C_OBJECT($allowed)\n$allowed:=New object //parameter for the command\n \n$allowed.Hello:=New object //create a first simple function named "Hello"\n$allowed.Hello.method:="My_Hello_Method" //sets the 4D method\n$allowed.Hello.summary:="Hello prints hello world"\n \n$allowed.Byebye:=New object //create a second function with parameters named "Byebye"\n$allowed.Byebye.method:="My_ByeBye_Method"\n$allowed.Byebye.parameters:=New collection\n$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))\n$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))\n$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))\n$allowed.Byebye.summary:="Byebye prints a custom timestamp"\n$allowed.Byebye.minParams:=3\n$allowed.Byebye.maxParams:=3\n \nVP SET ALLOWED METHODS($allowed)\n'})}),"\n",(0,t.jsx)(s.p,{children:"Depois que esse c\xf3digo \xe9 executado, as fun\xe7\xf5es definidas podem ser usadas nas f\xf3rmulas do 4D View Pro:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(956372).A+"",width:"401",height:"127"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Nas f\xf3rmulas do 4D View Pro, os nomes das fun\xe7\xf5es s\xe3o automaticamente exibidos em letras mai\xfasculas."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/pt/ViewPro/formulas#4d-functions",children:"4D functions"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/ViewPro/commands/vp-set-custom-functions",children:"VP SET CUSTOM FUNCTIONS"})]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,d={},l=null,c=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,t)&&!a.hasOwnProperty(t)&&(d[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===d[t]&&(d[t]=s[t]);return{$$typeof:r,type:e,key:l,ref:c,props:d,_owner:o.current}}s.Fragment=d,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},956372:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(296540);const r={},d=t.createContext(r);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);