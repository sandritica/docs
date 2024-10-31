"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67054],{914627:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var r=n(474848),s=n(28453);const o={id:"subtotal",title:"Subtotal",slug:"/commands/subtotal",displayed_sidebar:"docs"},l=void 0,t={id:"commands-legacy/subtotal",title:"Subtotal",description:"Subtotal ( valores {; saltoPag} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/subtotal.md",sourceDirName:"commands-legacy",slug:"/commands/subtotal",permalink:"/docs/es/commands/subtotal",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsubtotal.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"subtotal",title:"Subtotal",slug:"/commands/subtotal",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET PRINTABLE MARGIN",permalink:"/docs/es/commands/set-printable-margin"},next:{title:"Process (Communications)",permalink:"/docs/es/category/commands/Process (Communications)"}},i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Activaci\xf3n de niveles de ruptura en los formularios de informes",id:"activaci\xf3n-de-niveles-de-ruptura-en-los-formularios-de-informes",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Subtotal"})," ( ",(0,r.jsx)(a.em,{children:"valores"})," {; ",(0,r.jsx)(a.em,{children:"saltoPag"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"valores"}),(0,r.jsx)(a.td,{children:"Field"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Campo o variable num\xe9rica donde quiere devolver el subtotal"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"saltoPag"}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Nivel de ruptura para el cual efectuar un salto de p\xe1gina"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Resultado"}),(0,r.jsx)(a.td,{children:"Real"}),(0,r.jsx)(a.td,{children:"\u2190"}),(0,r.jsx)(a.td,{children:"Subtotal de valores"})]})]})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["Subtotal devuelve el subtotal de ",(0,r.jsx)(a.em,{children:"valores"})," para el nivel de ruptura actual o anterior. Subtotal s\xf3lo funciona cuando una selecci\xf3n ordenada se imprime con ",(0,r.jsx)(a.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"})," o utilizando Imprimir en el entorno Dise\xf1o. El par\xe1metro ",(0,r.jsx)(a.em,{children:"valores"})," debe ser de tipo real, entero, o entero largo. Usted debe asignar el resultado de la funci\xf3n Subtotal a una variable ubicada en el \xe1rea de ruptura del formulario."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Advertencia:"})," ",(0,r.jsx)(a.strong,{children:"debe"})," ejecutar los comandos ",(0,r.jsx)(a.a,{href:"/docs/es/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"})," y ",(0,r.jsx)(a.a,{href:"/docs/es/commands/accumulate",title:"ACCUMULATE",children:"ACCUMULATE"})," antes de cada informe de formulario para el cual quiera hacer proceso de ruptura y calcular subtotales. Ver la discusi\xf3n al final de la descripci\xf3n de este comando."]}),"\n",(0,r.jsxs)(a.p,{children:["El segundo par\xe1metro (opcional) de la funci\xf3n Subtotal se utiliza para provocar saltos de p\xe1gina durante la impresi\xf3n. Si ",(0,r.jsx)(a.em,{children:"saltoPag"})," es 0, Subtotal no genera ning\xfan salto de p\xe1gina. Si ",(0,r.jsx)(a.em,{children:"saltoPag"})," es igual a 1, Subtotal genera un salto de p\xe1gina para cada nivel de ruptura 1. Si ",(0,r.jsx)(a.em,{children:"saltoPag"})," es igual a 2, Subtotal genera un salto de p\xe1gina para cada nivel de ruptura 1 y 2, etc."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Consejo:"})," si ejecuta Subtotal desde un formulario de salida mostrado en pantalla, se generar\xe1 un error, disparando un bucle infinito de actualizaciones entre el formulario y la ventana de error. Para salir de este bucle, presione Alt+May\xfas (Windows) u Opci\xf3n-May\xfas (Macintosh) y haga clic en el bot\xf3n Abortar en la ventana de error (probablemente tenga que hacer esto varias veces). Esto detiene temporalmente las actualizaciones de la ventana del formulario. Seleccione otro formulario de salida de manera que el error no se repita. Regrese al entorno Dise\xf1o y a\xedsle la llamada a Subtotal para una prueba Form event=On Printing Break si tiene la intenci\xf3n de utilizar el mismo formulario de salida para la visualizaci\xf3n y la impresi\xf3n."]}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(a.p,{children:["El siguiente ejemplo es un m\xe9todo de objeto en un \xe1rea de ruptura de un formulario (B0, el \xe1rea situada sobre el marcador B0). La variable vSalario est\xe1 ubicada en el \xe1rea de ruptura. La variable toma el valor del subtotal del campo Salario para este nivel de ruptura. El tratamiento de ruptura debe haber sido activado de antemano utilizando los comandos ",(0,r.jsx)(a.a,{href:"/docs/es/commands/accumulate",title:"ACCUMULATE",children:"ACCUMULATE"})," y ",(0,r.jsx)(a.a,{href:"/docs/es/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vSalario:=Subtotal([Empleados]Salario)\n\xa0End case\n"})}),"\n",(0,r.jsx)(a.p,{children:"Para mayor informaci\xf3n sobre dise\xf1o de formulario con \xe1reas de encabezado y de ruptura, consulte el manual de Dise\xf1o."}),"\n",(0,r.jsx)(a.h4,{id:"activaci\xf3n-de-niveles-de-ruptura-en-los-formularios-de-informes",children:"Activaci\xf3n de niveles de ruptura en los formularios de informes"}),"\n",(0,r.jsx)(a.p,{children:"Para poder generar informes con rupturas, debe activar el tratamiento de rupturas llamando los comandos BREAK LEVEL y ACCUMULATE."}),"\n",(0,r.jsx)(a.p,{children:"Debe ejecutar ambos comandos antes de imprimir un informe de formulario. La funci\xf3n Subtotal es necesaria para mostrar los valores en un formulario. Debe ordenar al menos el n\xfamero de niveles de rupturas que necesite."}),"\n",(0,r.jsx)(a.p,{children:"Cuando utilice BREAK LEVEL y ACCUMULATE, el proceso de imprimir un informe es generalmente como este:"}),"\n",(0,r.jsx)(a.p,{children:"1. Seleccione los registros a imprimir."}),"\n",(0,r.jsxs)(a.p,{children:["2. Ordene los registros utilizando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/order-by",title:"ORDER BY",children:"ORDER BY"}),". Ordene el mismo n\xfamero de niveles como rupturas."]}),"\n",(0,r.jsx)(a.p,{children:"3. Ejecute BREAK LEVEL y ACCUMULATE."}),"\n",(0,r.jsxs)(a.p,{children:["4. Imprima el informe utilizando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"La funci\xf3n Subtotal es necesaria para mostrar valores en un formulario."}),"\n",(0,r.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/accumulate",children:"ACCUMULATE"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/break-level",children:"BREAK LEVEL"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/level",children:"Level"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"})]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>t});var r=n(296540);const s={},o=r.createContext(s);function l(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);