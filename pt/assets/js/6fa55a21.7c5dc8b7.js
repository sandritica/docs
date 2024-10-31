"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9440],{578546:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(474848),t=n(28453);const s={id:"trigger-event",title:"Trigger event",slug:"/commands/trigger-event",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/trigger-event",title:"Trigger event",description:"Trigger event  -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-event.md",sourceDirName:"commands-legacy",slug:"/commands/trigger-event",permalink:"/docs/pt/commands/trigger-event",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"trigger-event",title:"Trigger event",slug:"/commands/trigger-event",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Triggers",permalink:"/docs/pt/category/commands/Triggers"},next:{title:"Trigger level",permalink:"/docs/pt/commands/trigger-level"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Trigger event"}),"  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"0 = Fora de um ciclo de execu\xe7\xe3o de trigger; 1 = Guardar um novo registro; 2 = Guardar um registro existente; 3 = Apagar um registro."})]})})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["Quando chamado de dentro de um trigger, o comando ",(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.a,{href:"/docs/pt/commands/trigger-event",children:"Trigger event"})})," retorna um valor num\xe9rico que indica o tipo do evento do banco, em outras palavras, a raz\xe3o pela qual \xe9 chamado o trigger."]}),"\n",(0,a.jsxs)(r.p,{children:["As seguintes constantes pr\xe9-definidas s\xe3o oferecidas pelo 4D no tema ",(0,a.jsx)(r.em,{children:"Trigger Events"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Constante"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{children:"Valor"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"On Deleting Record Event"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"3"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"On Saving Existing Record Event"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"2"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"On Saving New Record Event"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"1"})]})]})]}),"\n",(0,a.jsxs)(r.p,{children:["Dentro de um trigger, se realizar opera\xe7\xf5es de banco de dados sobre v\xe1rios registros, pode encontrar condi\xe7\xf5es (geralmente registros bloqueados) que impedem ao trigger executar corretamente as opera\xe7\xf5es para as quais for chamado. Um exemplo desta situa\xe7\xe3o \xe9 a atualiza\xe7\xe3o de v\xe1rios registros na tabela [Produtos] quando se adiciona um registro a tabela [Faturas]. Neste ponto, deve parar as opera\xe7\xf5es do banco e devolver um erro de maneira que o processo chamante saiba que a peti\xe7\xe3o n\xe3o pode ser realizada. O processo chamante deve ent\xe3o poder cancelar, durante a transa\xe7\xe3o, as opera\xe7\xf5es incompletas realizadas pelo trigger. Quando isso acontece, voc\xea precisa saber, de dentro do trigger, se voc\xea estiver em uma transa\xe7\xe3o antes mesmo de tentar fazer algo. Para fazer isto, utilize o comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/in-transaction",children:"In transaction"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Em 4D n\xe3o h\xe1 limite, al\xe9m da quantidade da mem\xf3ria dispon\xedvel, para a chamada de triggers em cascada. Para otimizar a execu\xe7\xe3o de um trigger, pode escrever o c\xf3digo de seus triggers dependendo n\xe3o apenas do evento do banco, mas tamb\xe9m do n\xedvel da chamada quando os triggers s\xe3o chamados em cascada. Por exemplo, durante o evento de banco deletion para a tabela [Faturas], pode n\xe3o realizar a atualiza\xe7\xe3o do campo [Clientes] Vendas brutas se a elimina\xe7\xe3o do registro da tabela [Faturas] \xe9 parte da elimina\xe7\xe3o em cascada de faturas relacionadas com o registro na tabela [Clientes] que est\xe1 sendo eliminado. Para fazer isto, utilize os comandos ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/trigger-level",children:"Trigger level"})," e ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(r.p,{children:["Utilize o comando ",(0,a.jsx)(r.strong,{children:"Trigger event"})," para estruturar seus triggers desta maneira:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Trigger da tabela [qualquerTabela]\n\xa0var $0 : Integer\n\xa0$0:=0\xa0// Tenha certeza que a peti\xe7\xe3o do banco ser\xe1 concedida\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving New Record Event)\n\xa0\xa0// Executar as a\xe7\xf5es apropriadas para guardar um novo registro\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving Existing Record Event)\n\xa0\xa0// Executar as a\xe7\xf5es apropriadas para guardar um registro existente\n\xa0\xa0\xa0\xa0:(Trigger event=On Deleting Record Event)\n\xa0\xa0// Executar as a\xe7\xf5es apropriadas para a elimina\xe7\xe3o de um registro\n\xa0End case\n"})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/commands/in-transaction",children:"In transaction"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/trigger-level",children:"Trigger level"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Triggers"})]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var a=n(296540);const t={},s=a.createContext(t);function o(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);