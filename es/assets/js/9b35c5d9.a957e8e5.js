/*! For license information please see 9b35c5d9.a957e8e5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1091],{436678:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var d=s(474848),t=s(28453);const r={id:"date",title:"Fecha"},i=void 0,a={id:"Concepts/date",title:"Fecha",description:"Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/es/Concepts/date",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"date",title:"Fecha"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/es/Concepts/collection"},next:{title:"Null e indefinido",permalink:"/docs/es/Concepts/null-undefined"}},c={},o=[{value:"Constantes literales de tipo fecha",id:"constantes-literales-de-tipo-fecha",level:2},{value:"Operadores de fechas",id:"operadores-de-fechas",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767."}),"\n",(0,d.jsx)(n.p,{children:"Aunque el modo de representaci\xf3n de fechas por C_DATE permite trabajar con fechas hasta el a\xf1o 32 767, ciertas operaciones que pasan por el sistema imponen un l\xedmite inferior."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," en el manual de Referencia del Lenguaje 4D, los par\xe1metros de tipo Fecha en las descripciones de los comandos se denominan Fecha, salvo que se indique lo contrario."]}),"\n",(0,d.jsx)(n.h2,{id:"constantes-literales-de-tipo-fecha",children:"Constantes literales de tipo fecha"}),"\n",(0,d.jsx)(n.p,{children:"Una constante literal de tipo fecha est\xe1 rodeada de signos de exclamaci\xf3n (!...!). Una fecha debe estar estructurada utilizando el formato ISO (!AAAA-MM-DD!). Estos son algunos ejemplos de constantes de fechas:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Una fecha null es especificada por ",(0,d.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Consejo:"})," el Editor de c\xf3digo incluye un acceso directo para introducir una fecha null. Para escribir una fecha null, introduzca el signo de exclamaci\xf3n (!) y presione Intro."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Por razones de compatibilidad, 4D acepta entradas de fecha utilizando el formato del sistema con a\xf1os de dos d\xedgitos, como !12/04/98!. Se asume que un a\xf1o de dos d\xedgitos se encuentra en el siglo XX o en el XXI seg\xfan sea mayor o menor de 30, a menos que esta configuraci\xf3n por defecto se haya cambiado utilizando el comando ",(0,d.jsx)(n.code,{children:"SET DEFAULT CENTURY"}),"."]}),"\n",(0,d.jsx)(n.li,{children:'Si ha marcado la opci\xf3n "Utilizar la configuraci\xf3n regional del sistema" ( ver P\xe1gina M\xe9todos), debe utilizar el formato de fecha definido en su sistema. Generalmente, en un entorno estadounidense, las fechas se introducen en la forma mes/d\xeda/a\xf1o, con una barra "/" que separa los valores.'}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"operadores-de-fechas",children:"Operadores de fechas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Operaci\xf3n"}),(0,d.jsx)(n.th,{children:"Sintaxis"}),(0,d.jsx)(n.th,{children:"Devuelve"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Diferencia"}),(0,d.jsx)(n.td,{children:"Fecha \u2013 Fecha"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,d.jsx)(n.td,{children:"19"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Adici\xf3n"}),(0,d.jsx)(n.td,{children:"Fecha + N\xfamero"}),(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:"!2017-01-20! + 9"}),(0,d.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resta"}),(0,d.jsx)(n.td,{children:"Fecha - N\xfamero"}),(0,d.jsx)(n.td,{children:"Fecha"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - 9"}),(0,d.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Igual"}),(0,d.jsx)(n.td,{children:"Fecha = Fecha"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01! =!2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! !2017-01-01! =!2017-01-01!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Desigualdad"}),(0,d.jsx)(n.td,{children:"Fecha # Fecha"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! # !2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! !2017-01-20! # !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Mayor que"}),(0,d.jsx)(n.td,{children:"Date > Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! > !2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Menor que"}),(0,d.jsx)(n.td,{children:"Date < Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01! < !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Mayor o igual que"}),(0,d.jsx)(n.td,{children:"Date >= Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! >=!2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Menor o igual que"}),(0,d.jsx)(n.td,{children:"Date <= Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01! <= !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,d.jsx)(n.td,{children:"False"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var d=s(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var d,r={},o=null,l=null;for(d in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,d)&&!c.hasOwnProperty(d)&&(r[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===r[d]&&(r[d]=n[d]);return{$$typeof:t,type:e,key:o,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var d=s(296540);const t={},r=d.createContext(t);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);