"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73452],{592987:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(474848),t=n(28453);const s={id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/set-timer",title:"SET TIMER",description:"SET TIMER ( ticCont )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-timer.md",sourceDirName:"commands-legacy",slug:"/commands/set-timer",permalink:"/docs/pt/commands/set-timer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Right click",permalink:"/docs/pt/commands/right-click"},next:{title:"Forms",permalink:"/docs/pt/category/commands/Forms"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"SET TIMER"})," ( ",(0,r.jsx)(o.em,{children:"ticCont"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"ticCont"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"N\xfamero de tics"})]})})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"O comando SET TIMER permite ativar o evento de formul\xe1rio On Timer e fixar, para o processo e formul\xe1rio atual, o n\xfamero de tics (1 tic = 1/60 de segundo) entre cada evento de formul\xe1rio On Timer."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," para maior informa\xe7\xe3o sobre este evento de formul\xe1rio, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/form-event",title:"Form event",children:"Form event"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Este comando n\xe3o ter\xe1 efeito se for chamado num contexto no qual n\xe3o \xe9 mostrado um formul\xe1rio."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," quando o comando SET TIMER ser\xe1 executado no contexto de um sub-formul\xe1rio (m\xe9todo de formul\xe1rio do sub-formul\xe1rio), \xe9 gerado o evento On Timer no sub-formul\xe1rio e n\xe3o ao n\xedvel do formul\xe1rio pai."]}),"\n",(0,r.jsxs)(o.p,{children:["Se passa -1 no par\xe2metro ",(0,r.jsx)(o.em,{children:"ticCont"}),', o comando ativar\xe1 o evento de formul\xe1rio On Timer "logo que seja poss\xedvel", em outras palavras, assim que aplica\xe7\xe3o 4D tome o controle do administrador de eventos. Este principio permite assegurar que um formul\xe1rio \xe9 mostrado completamente antes de iniciar um processo (fluidez da aplica\xe7\xe3o).']}),"\n",(0,r.jsxs)(o.p,{children:["Para desativar por programa\xe7\xe3o o disparador do evento de formul\xe1rio On Timer, chame novamente a SET TIMER e passe 0 em ",(0,r.jsx)(o.em,{children:"ticCont"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Imaginemos que voc\xea queira, quando um formul\xe1rio aparece em tela, que o computador fa\xe7a um bipe a cada tr\xeas segundos. Pra fazer isso, escreva o seguinte m\xe9todo de formul\xe1rio:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0If(FORM Event=On Load)\n\xa0\xa0\xa0\xa0SET TIMER(60*3)\n\xa0End if\n\xa0\n\xa0If(Form event code=On Timer)\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n"})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/redraw",children:"REDRAW"})]})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>i});var r=n(296540);const t={},s=r.createContext(t);function d(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);