/*! For license information please see cd3a0a2f.45ec6c3d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25663],{814604:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=o(474848),n=o(28453);const t={id:"propertiesAction",title:"Acci\xf3n"},i=void 0,a={id:"FormObjects/propertiesAction",title:"Acci\xf3n",description:"---",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormObjects/properties_Action.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesAction",permalink:"/docs/es/FormObjects/propertiesAction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Action.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"propertiesAction",title:"Acci\xf3n"},sidebar:"docs",previous:{title:"Lista de propiedades JSON del objeto formulario",permalink:"/docs/es/FormObjects/propertiesReference"},next:{title:"Animaci\xf3n",permalink:"/docs/es/FormObjects/propertiesAnimation"}},d={},c=[{value:"Arrastrable",id:"arrastrable",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Soltable",id:"soltable",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objetos soportados",id:"objetos-soportados-1",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n-1",level:4},{value:"Ejecutar m\xe9todo objeto",id:"ejecutar-m\xe9todo-objeto",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Objetos soportados",id:"objetos-soportados-2",level:4},{value:"M\xe9todo",id:"m\xe9todo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Objetos soportados",id:"objetos-soportados-3",level:4},{value:"L\xedneas desplazables",id:"l\xedneas-desplazables",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-4",level:4},{value:"Objetos soportados",id:"objetos-soportados-4",level:4},{value:"Multi-seleccionable",id:"multi-seleccionable",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-5",level:4},{value:"Objetos soportados",id:"objetos-soportados-5",level:4},{value:"Ordenable",id:"ordenable",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-6",level:4},{value:"Objetos soportados",id:"objetos-soportados-6",level:4},{value:"Acci\xf3n est\xe1ndar",id:"acci\xf3n-est\xe1ndar",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-7",level:4},{value:"Objetos soportados",id:"objetos-soportados-7",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"arrastrable",children:"Arrastrable"}),"\n",(0,r.jsx)(s.p,{children:"Controle si el usuario puede arrastrar el objeto y c\xf3mo. Por defecto, no se permite ninguna operaci\xf3n de arrastre."}),"\n",(0,r.jsx)(s.p,{children:"Hay dos modos de arrastrar disponibles:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Personalizado"}),": en este modo, toda operaci\xf3n de arrastrar realizada en el objeto dispara el evento formulario ",(0,r.jsx)(s.code,{children:"On Begin Drag"})," en el contexto del objeto. A continuaci\xf3n, gestiona la acci\xf3n arrastrar utilizando un m\xe9todo.",(0,r.jsx)(s.br,{}),"\nEn el modo personalizado, b\xe1sicamente toda la operaci\xf3n de arrastrar y soltar es realizada por el programador. Este modo le permite implementar cualquier interfaz basada en la funci\xf3n de arrastrar y soltar, incluidas las interfaces que no necesariamente transportan datos, sino que pueden realizar cualquier acci\xf3n como abrir archivos o activar un c\xe1lculo. Este modo se basa en una combinaci\xf3n de propiedades, eventos y comandos espec\xedficos del tema ",(0,r.jsx)(s.code,{children:"Portapapeles"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Autom\xe1tico"}),": en este modo, 4D ",(0,r.jsx)(s.strong,{children:"copia"})," el texto o las im\xe1genes directamente desde el objeto formulario. Puede utilizarse en la misma \xe1rea 4D, entre dos \xe1reas 4D o entre 4D y otra aplicaci\xf3n. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.img,{src:o(913329).A+"",width:"421",height:"63"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.img,{src:o(408247).A+"",width:"421",height:"27"}),"\nIn this mode, the ",(0,r.jsx)(s.code,{children:"On Begin Drag"}),' form event is NOT generated. Si quiere "forzar" el uso del arrastre personalizado mientras est\xe1 activado el arrastre autom\xe1tico, mantenga presionada la tecla ',(0,r.jsx)(s.strong,{children:"Alt"})," (Windows) o ",(0,r.jsx)(s.strong,{children:"Opci\xf3n"})," (macOS) durante la acci\xf3n. Esta opci\xf3n no est\xe1 disponible para las im\xe1genes."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html",children:"Arrastrar y soltar"})," en el manual ",(0,r.jsx)(s.em,{children:"Lenguaje 4D"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"dragging"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:'"none" (por defecto), "custom", "automatic" (excluyendo list box)'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"\xc1reas 4D Write Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"#droppable",children:"Droppable"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"soltable",children:"Soltable"}),"\n",(0,r.jsx)(s.p,{children:"Controla si el objeto puede ser el destino de una operaci\xf3n de arrastrar y soltar y c\xf3mo hacerlo."}),"\n",(0,r.jsx)(s.p,{children:"Hay dos modos de soltar disponibles:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Personalizado"}),": en este modo, cualquier operaci\xf3n de soltar realizada en el objeto activa los eventos formulario ",(0,r.jsx)(s.code,{children:"On Drag Over"})," y ",(0,r.jsx)(s.code,{children:"On Drop"})," en el contexto del objeto. A continuaci\xf3n, gestiona la acci\xf3n soltar utilizando un m\xe9todo.",(0,r.jsx)(s.br,{}),"\nEn el modo personalizado, b\xe1sicamente toda la operaci\xf3n de arrastrar y soltar es realizada por el programador. Este modo le permite implementar cualquier interfaz basada en la funci\xf3n de arrastrar y soltar, incluidas las interfaces que no necesariamente transportan datos, sino que pueden realizar cualquier acci\xf3n como abrir archivos o activar un c\xe1lculo. Este modo se basa en una combinaci\xf3n de propiedades, eventos y comandos espec\xedficos del tema ",(0,r.jsx)(s.code,{children:"Portapapeles"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Autom\xe1tico"}),": en este modo, 4D gestiona autom\xe1ticamente, si es posible, la inserci\xf3n de los datos arrastrados de tipo texto o imagen que se sueltan sobre el objeto (los datos se pegan en el objeto). Los eventos ",(0,r.jsx)(s.code,{children:"On Drag Over"})," y ",(0,r.jsx)(s.code,{children:"On Drop"})," NO se generan. Por otra parte, se generan los eventos ",(0,r.jsx)(s.code,{children:"On After Edit"})," (durante el soltar) y ",(0,r.jsx)(s.code,{children:"On Data Change"})," (cuando el objeto pierde el foco)."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html",children:"Arrastrar y soltar"})," en el manual ",(0,r.jsx)(s.em,{children:"Lenguaje 4D"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"dropping"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:'"none" (por defecto), "custom", "automatic" (excluyendo list box)'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-1",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"\xc1reas 4D Write Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n-1",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"#draggable",children:"Draggable"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"ejecutar-m\xe9todo-objeto",children:"Ejecutar m\xe9todo objeto"}),"\n",(0,r.jsxs)(s.p,{children:["Cuando esta opci\xf3n est\xe1 activada, el m\xe9todo objeto se ejecuta con el evento ",(0,r.jsx)(s.code,{children:"On Data Change"})," ",(0,r.jsx)(s.em,{children:"en el mismo momento"})," en que el usuario cambia el valor del indicador. Cuando la opci\xf3n est\xe1 desactivada, el m\xe9todo se ejecuta ",(0,r.jsx)(s.em,{children:"tras"})," la modificaci\xf3n."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"continuousExecution"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-2",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/stepper",children:"Stepper"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"m\xe9todo",children:"M\xe9todo"}),"\n",(0,r.jsx)(s.p,{children:'Referencia de un m\xe9todo adjunto al objeto. Los m\xe9todos de objeto generalmente "gestionan" el objeto mientras el formulario se muestra o se imprime. No llame a un m\xe9todo objeto, 4D lo llama autom\xe1ticamente cuando un evento implica el objeto al que el m\xe9todo objeto est\xe1 asociado.'}),"\n",(0,r.jsx)(s.p,{children:"Se soportan varios tipos de referencias de m\xe9todos:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["una ruta de archivo de m\xe9todo objeto est\xe1ndar, es decir, que utilice el siguiente patr\xf3n:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"ObjectMethods/objectName.4dm"}),(0,r.jsx)(s.br,{}),"\n... where ",(0,r.jsx)(s.code,{children:"objectName"})," is the actual ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"object name"}),'. Este tipo de referencia indica que el archivo del m\xe9todo se encuentra en la ubicaci\xf3n por defecto ("sources/forms/',(0,r.jsx)(s.em,{children:"formName"}),'/ObjectMethods/"). En este caso, 4D maneja autom\xe1ticamente el m\xe9todo objeto cuando se ejecutan operaciones en el objeto formulario (renombrar, duplicar, copiar/pegar...)']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,r.jsx)(s.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"../../CustomMethods/myMethod.4dm"}),"\nYou can also use a filesystem:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"/RESOURCES/Buttons/bOK.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"method"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:"Ruta de archivo est\xe1ndar o personalizada del m\xe9todo objeto o nombre del m\xe9todo proyecto"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-3",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Button"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormEditor/forms",children:"Forms"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/ruler",children:"Ruler"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/spinner",children:"Spinner"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/splitters",children:"Splitter"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/stepper",children:"Stepper"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/subformOverview",children:"Subform"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/tabControl",children:"Tab control"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"l\xedneas-desplazables",children:"L\xedneas desplazables"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"List boxes de tipo array"})}),"\n",(0,r.jsxs)(s.p,{children:["Autoriza el desplazamiento de l\xedneas durante la ejecuci\xf3n. Esta opci\xf3n est\xe1 seleccionada por defecto. No est\xe1 disponible para los ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#selection-list-boxes",children:"list box de tipo selecci\xf3n"})," ni para los ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesHierarchy#hierarchical-list-box",children:"list box en modo jer\xe1rquico"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-4",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"movableRows"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-4",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#overview",children:"List Box"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"multi-seleccionable",children:"Multi-seleccionable"}),"\n",(0,r.jsxs)(s.p,{children:["Permite la selecci\xf3n de m\xfaltiples registros/opciones en una ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview",children:"lista jer\xe1rquica"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-5",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"selectionMode"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:'"multiple", "single", "none"'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-5",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview",children:"Hierarchical List"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"ordenable",children:"Ordenable"}),"\n",(0,r.jsxs)(s.p,{children:["Permite ordenar los datos de las columnas haciendo clic en un encabezado ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"listbox"}),". Esta opci\xf3n est\xe1 seleccionada por defecto. Los arrays de tipo imagen (columnas) no pueden ordenarse utilizando esta funci\xf3n."]}),"\n",(0,r.jsx)(s.p,{children:"En los list box basados en una selecci\xf3n de registros, s\xf3lo est\xe1 disponible la funci\xf3n de ordenaci\xf3n est\xe1ndar:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Cuando la fuente de datos es ",(0,r.jsx)(s.em,{children:"Selecci\xf3n actual"}),","]}),"\n",(0,r.jsx)(s.li,{children:"Con columnas asociadas a campos (de tipo Alfa, N\xfamero, Fecha, Hora o Booleano)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"En otros casos (list box basados en selecciones temporales, columnas asociadas a expresiones), la funci\xf3n de ordenaci\xf3n est\xe1ndar no est\xe1 disponible. Una ordenaci\xf3n est\xe1ndar del list box cambia el orden de la selecci\xf3n actual en la base de datos. Sin embargo, los registros resaltados y el registro actual no se modifican. Una ordenaci\xf3n est\xe1ndar sincroniza todas las columnas del list box, incluidas las columnas calculadas."}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-6",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sortable"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-6",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"acci\xf3n-est\xe1ndar",children:"Acci\xf3n est\xe1ndar"}),"\n",(0,r.jsxs)(s.p,{children:["Typical activities to be performed by active objects (",(0,r.jsx)(s.em,{children:"e.g."}),", letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) han sido predefinidas por 4D como acciones est\xe1ndar. Se describen con detalle en la secci\xf3n ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"Acciones est\xe1ndar"})," de la ",(0,r.jsx)(s.em,{children:"manual de Dise\xf1o"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Puede asignar al mismo tiempo una acci\xf3n est\xe1ndar y un m\xe9todo proyecto de un objeto. En este caso, la acci\xf3n est\xe1ndar suele ejecutarse despu\xe9s del m\xe9todo y 4D utiliza esta acci\xf3n para activar/desactivar el objeto seg\xfan el contexto actual. Cuando se desactiva un objeto, no se puede ejecutar el m\xe9todo proyecto asociado."}),"\n",(0,r.jsxs)(s.p,{children:["Tambi\xe9n puede definir esta propiedad utilizando el comando ",(0,r.jsx)(s.code,{children:"OBJECT SET ACTION"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-7",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"action"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsxs)(s.td,{children:["El nombre de una ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html",children:"acci\xf3n est\xe1ndar v\xe1lida"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-7",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Button"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Drop-down List"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Picture Pop-up Menu"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/tabControl",children:"Tab control"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,o)=>{var r=o(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,o){var r,t={},c=null,l=null;for(r in void 0!==o&&(c=""+o),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,r)&&!d.hasOwnProperty(r)&&(t[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===t[r]&&(t[r]=s[r]);return{$$typeof:n,type:e,key:c,ref:l,props:t,_owner:a.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},474848:(e,s,o)=>{e.exports=o(221020)},913329:(e,s,o)=>{o.d(s,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAA/CAIAAADPOkBoAAADZElEQVR42u3csW7TQBwH4BjxBiCYmGHuyGt06Bt06TtUWVgRCxMPQxkoAxIzXelE1YrSFwhGFpY520ma5u6c3PepipKLk1wq99f/+eyrrn9+nwEU4FHuDgAkIu+AUsg7oBTyDiiFvANK8Th3B1Y4+/gpdxdI4fDo+ObqIncvQna/PdDdtaaed7XPX77m7gJxzeenubswyu6304Jdawfyrvb23YeDk/OUn/jt/evcX7ogd7eXubuwTL375e4CGwp2LcfvgFI8KO+ePn+1ZmNKSjO2rqqq3F1gC8K8q9Oq+zN7cH5tK/76Kbb1XBOUsN8Gjt9d/39F7fWmF9hmL/TWJ+mgBKvnK+rYaiKvm19BCA5GW/9VY++8joOT8zqV2lmL4H67Tbt9d4Puw260tRv0nwL2z7rzs0E2dR/2n0r8HQZDcNBYCAIlGMi7JXXcdkV9c4DA6uN3rezH49ohbb9MW/9NDFqhWPc433ia5djggbwlDGChWBuefzdW692rBkxWMI7loFoPirJufVcXd2PH9bpPde8Hd7ZSHvYHs03L2JbB/WDjfmHYbhbnt00pqqpaLBa5e0EozLt+KrUtaz61ZPuVn7WOfhgFLcFZJksal7wnPJDImyDXz0IUddi5Cm1qdmB9lPn89O728uzNi5QfOvEVO0hss0qtiTxV3nRMPe8Oj45zd4GiNf9uN355E3m/f/3I/T34q5rmWSYwBU+evdzshUFZp8rLa5fWN4ZctrXEfFPlqS2yM18BKdSRl/0KJeQdJCLyspN3kI7Iy0veQQrVP7MJLL1RLPMVEFF3ZtZ8RXbqO4ilmZNtajoj2SmQdxCFE1AmSN5BFN2FM5R4EyHvYPtUdtNkvgJiqau5dsmA5rZdNKXbLhyTUd9BLN1QG2t3XW1K6juIpYmzm6uLpoJrU69pqW/Vd4nJO4gliLN+rrWBmLunpZB3EMtYnHVnaQfXQFbxReL4HcSyZEn3xbjcvd5n8g5iMR0xNcazEEswDzs4VzsTiwmp7yCWwbATbRmZC4fUmvOQZ73JirbRX2UkxrOQTRtwir40jGeBUsg7yExxl4y8A0rh+B1kMHYeMlGZCQJKYTwLlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1QCnkHlELeAaWQd0Ap5B1Qij9Ru9BheP253gAAAABJRU5ErkJggg=="},408247:(e,s,o)=>{o.d(s,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAAbCAIAAABTBwdIAAAB/ElEQVR42u3cwU3DMBSAYYLYAAQjwD49dIOOUWUCxJ1hgAPiwALlzKmoSBULlEiVrPQ5dt008bPj/zsljhMe6OnZTkKqzXp1AQAFuNQOAAAiod4BKAX1DkAprrQD8Hl9edMOATHM5ovfny/tKCTSbwJEaiVd7xrvH5/aIWBcdb3UDsGJ9MuanVqp17vG49OzdggY0d/2WzsEH9IvX3Zqcf8OQCn617ubu4fAxpiqqtINACUj/RJ3sJ4V1WqzXjUtmzNeSD7zdKNJo91u528Z/EcAe6TfZMj7d6I89a5W6hO9cIzJUET6xXTkeYWZoLXrlyiCnaXNPst15RDN0NceAMW26WP6i9HS7LZzy3SwDwFtpN9kBD2fFbWpvWsfivwLdGZhJ1cWAr2RfnmR9c4zjxvWqBcHANuR+3eG+v04s6awx8nwi7BqQD+k3zSEvm+c5nSs806KBysIDIj0y06f9+9cc72T5oDRJoyuRGSwRQSkX1KC5nf7F/Hau52H2ttiY5Dpob2a2Le4eopt0dkemU230f7ayBjpNwEH9c6uSqYl8JCnv+v0k9jZIFrEY35Po+eaQCfSL3f8/yyAUqT+fZS6Xib+/QwAuUi63s3mC+0QUDSG24mp0nzRBFB3fXuvHQIGkNP3jQEtCX5iHmfieQWAUlDvAJSCegegFP8tyFk+nAzT1QAAAABJRU5ErkJggg=="},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>a});var r=o(296540);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);