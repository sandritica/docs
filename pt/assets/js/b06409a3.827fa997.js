"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21409],{603905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>N});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=m(n),N=r,k=s["".concat(d,".").concat(N)]||s[N]||u[N]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},794317:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={id:"overview",title:"Eventos formul\xe1rio"},i=void 0,d={unversionedId:"Events/overview",id:"version-20-R5/Events/overview",title:"Eventos formul\xe1rio",description:"Eventos de formul\xe1rio s\xe3o eventos que podem levar \xe0 execu\xe7\xe3o do m\xe9todo de formul\xe1rio e/ou m\xe9todo(s) de objeto de formul\xe1rio. Os eventos de formul\xe1rio permitem que voc\xea controle o fluxo do aplicativo e escreva c\xf3digos que s\xe3o executados somente quando ocorre um evento espec\xedfico.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/pt/Events/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"overview",title:"Eventos formul\xe1rio"},sidebar:"docs",previous:{title:"\xc1rea Web",permalink:"/docs/pt/FormObjects/propertiesWebArea"},next:{title:"On Activate",permalink:"/docs/pt/Events/onActivate"}},m={},p=[{value:"Objecto evento",id:"objecto-evento",level:2},{value:"Eventos e m\xe9todos",id:"eventos-e-m\xe9todos",level:2},{value:"Tabela de chamadas",id:"tabela-de-chamadas",level:2}],u={toc:p};function s(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Eventos de formul\xe1rio s\xe3o eventos que podem levar \xe0 execu\xe7\xe3o do m\xe9todo de formul\xe1rio e/ou m\xe9todo(s) de objeto de formul\xe1rio. Os eventos de formul\xe1rio permitem que voc\xea controle o fluxo do aplicativo e escreva c\xf3digos que s\xe3o executados somente quando ocorre um evento espec\xedfico."),(0,a.kt)("p",null,"En su c\xf3digo, se controlan los eventos mediante el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event"),", que devuelve el evento disparado. Por exemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//c\xf3digo de um bot\xe3o\nIf(FORM Event.code=On Clicked) \n// fa\xe7a algo quando o bot\xe3o for clicado\nEnd if\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cada formul\xe1rio e cada objeto ativo no formul\xe1rio podem ouvir um conjunto predefinido de eventos, mas somente os eventos que voc\xea ativou no n\xedvel do formul\xe1rio e/ou em cada n\xedvel de objeto ocorrer\xe3o de fato.")),(0,a.kt)("h2",r({},{id:"objecto-evento"}),"Objecto evento"),(0,a.kt)("p",null,"Cada evento es devuelto como un objeto por el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event"),". Por padr\xe3o, ele cont\xe9m as seguintes propriedades:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"objectName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Name of the object triggering the event - Not included if the event is triggered by the form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"inteiro longo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Numeric value of the form event. Also returned by the ",(0,a.kt)("inlineCode",{parentName:"td"},"Form event code")," command")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Name of the form event (e.g. "On After Edit")')))),(0,a.kt)("p",null,"Propriedades adicionais s\xe3o retornadas quando o evento ocorre em objetos espec\xedficos. Em particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/listboxOverview#supported-form-events"}),"list boxes")," and ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/listboxOverview#supported-form-events-1"}),"list box columns")," return ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/listboxOverview#additional-properties"}),"additional properties")," such as ",(0,a.kt)("inlineCode",{parentName:"li"},"columnName")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"isRowSelected"),"."),(0,a.kt)("li",{parentName:"ul"},"Las ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/viewProAreaOverview"}),"\xe1reas de View Pro")," devuelven por ejemplo las propiedades ",(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," o ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," en el objeto evento ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/Events/onAfterEdit"}),"On After Edit"),".")),(0,a.kt)("h2",r({},{id:"eventos-e-m\xe9todos"}),"Eventos e m\xe9todos"),(0,a.kt)("p",null,"Quando um evento formul\xe1rio ocorre, 4D executa as seguintes a\xe7\xf5es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Primeiro, ele pesquisa os objetos do formul\xe1rio e chama o m\xe9todo de objeto para qualquer objeto (envolvido no evento) cuja propriedade de evento de objeto correspondente tenha sido selecionada."),(0,a.kt)("li",{parentName:"ul"},"Em segundo lugar, ele chama o m\xe9todo de formul\xe1rio se a propriedade de evento de formul\xe1rio correspondente tiver sido selecionada.")),(0,a.kt)("p",null,"N\xe3o presuma que os m\xe9todos do objeto, se houver, ser\xe3o chamados em uma ordem espec\xedfica. A regra geral \xe9 que os m\xe9todos de objeto sejam sempre chamados antes do m\xe9todo de formul\xe1rio. Se um objeto for um subformul\xe1rio, os m\xe9todos de objeto do formul\xe1rio de lista do subformul\xe1rio ser\xe3o chamados e, em seguida, o m\xe9todo de formul\xe1rio do formul\xe1rio de lista ser\xe1 chamado. 4D ent\xe3o continua a chamar os m\xe9todos objeto do formul\xe1rio pai. Em outras palavras, quando um objeto \xe9 um subformul\xe1rio, 4D usa a mesma regra pr\xe1tica para o objeto e os m\xe9todos do formul\xe1rio dentro do objeto do subformul\xe1rio."),(0,a.kt)("p",null,"Excepto en los eventos ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onLoad"}),"En carga")," y ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onUnload"}),"En descarga")," (ver m\xe1s abajo), si la propiedad del evento formulario no est\xe1 seleccionada para un evento determinado, esto no impide las llamadas a los m\xe9todos objetos cuya misma propiedad de eve Em outras palavras, ativar ou desativar um evento no n\xedvel do formul\xe1rio n\xe3o tem efeito sobre as propriedades do evento do objeto."),(0,a.kt)("p",null,"O n\xfamero de objetos envolvidos em um evento depende da natureza do evento."),(0,a.kt)("h2",r({},{id:"tabela-de-chamadas"}),"Tabela de chamadas"),(0,a.kt)("p",null,"A tabela seguinte resume a forma como os m\xe9todos objeto e formul\xe1rio s\xe3o chamados para cada tipo de evento:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Evento"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"M\xe9todos objecto"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"M\xe9todo formul\xe1rio"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Que objectos"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Load"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Unload"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Validate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Clicked"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Double Clicked"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Before Keystroke"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Keystroke"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Edit"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Getting Focus"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Losing Focus"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Activate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Deactivate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Outside Call"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Page Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Begin Drag Over"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Drop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Drag Over"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Enter"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Move"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Leave"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Up"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Menu Selected"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Bound variable change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Data Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Plug in Area"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Header"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Break"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Footer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Close Box"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Display Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Open Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum, excepto List boxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Close Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum, excepto List boxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Selection Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Load Record"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Timer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Scroll"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Before Data Entry"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Column Moved"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Row Moved"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Column Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box e Area 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Header Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box e Area 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Footer Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Sort"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Long Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Bot\xe3o)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Alternative Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (bot\xe3o e List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Expand"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Hier. lista e list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Collapse"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Hier. lista e list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Delete Action"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Hier. lista e list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Resource Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Begin URL Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Loading Error"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Filtering"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On End URL Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Open External Link"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Window Opening Denied"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Range Changed"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Ready"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Row Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")))),(0,a.kt)("p",null,"Lembre-se sempre de que, para qualquer evento, o m\xe9todo de um formul\xe1rio ou de um objeto \xe9 chamado se a propriedade de evento correspondente estiver selecionada para o formul\xe1rio ou para os objetos. A vantagem de desativar os eventos no ambiente Design (usando a Lista de propriedades do editor de formul\xe1rios) \xe9 que voc\xea pode reduzir o n\xfamero de chamadas para m\xe9todos e, portanto, otimizar significativamente a velocidade de execu\xe7\xe3o dos formul\xe1rios."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ATENCI\xd3N: los eventos ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onLoad"}),"On Load")," y ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onUnload"}),"On Unload")," se generan para los objetos si est\xe1n activados a la vez para los objetos y para el formulario al que pertenecen los objetos. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.")))}s.isMDXComponent=!0}}]);