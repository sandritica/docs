"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39100],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return o?r.createElement(b,i(i({ref:t},p),{},{components:o})):r.createElement(b,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},39721:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});o(67294);var r=o(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={id:"comboBoxOverview",title:"Combo Box"},s=void 0,l={unversionedId:"FormObjects/comboBoxOverview",id:"version-20-R2/FormObjects/comboBoxOverview",title:"Combo Box",description:"Un combo box es similar a una lista desplegable, excepto que acepta texto introducido desde el teclado y tiene opciones adicionales.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/es/FormObjects/comboBoxOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Casilla a seleccionar",permalink:"/docs/es/FormObjects/checkboxOverview"},next:{title:"Lista desplegable",permalink:"/docs/es/FormObjects/dropdownListOverview"}},c={},p=[{value:"Gesti\xf3n de combo boxes",id:"gesti\xf3n-de-combo-boxes",level:2},{value:"Utilizar un objeto",id:"utilizar-un-objeto",level:3},{value:"Utilizar un array",id:"utilizar-un-array",level:3},{value:"Utilizar una lista de selecci\xf3n",id:"utilizar-una-lista-de-selecci\xf3n",level:3},{value:"Opciones",id:"opciones",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}],d={toc:p};function u(e){var{components:t}=e,i=n(e,["components"]);return(0,r.kt)("wrapper",a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un combo box es similar a una ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/dropdownListOverview#overview"}),"lista desplegable"),", excepto que acepta texto introducido desde el teclado y tiene opciones adicionales."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(7141).Z,width:"173",height:"106"})),(0,r.kt)("p",null,"Fundamentalmente, debe considerar un combo box como un \xe1rea editable que utiliza su objeto, array o una lista de selecci\xf3n como el conjunto de valores por defecto."),(0,r.kt)("h2",a({},{id:"gesti\xf3n-de-combo-boxes"}),"Gesti\xf3n de combo boxes"),(0,r.kt)("p",null,"Utilice el evento ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/Events/onDataChange"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Data Change"))," para gestionar las entradas en el \xe1rea editable, como lo har\xeda con cualquier objeto del formulario de entrada."),(0,r.kt)("p",null,"Un combo box se inicializa exactamente igual que una ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/dropdownListOverview#overview"}),"lista desplegable"),": utilizando un objeto, un array o una lista de selecci\xf3n."),(0,r.kt)("h3",a({},{id:"utilizar-un-objeto"}),"Utilizar un objeto"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta funcionalidad s\xf3lo est\xe1 disponible en proyectos 4D.")),(0,r.kt)("p",null,"Un ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/Concepts/object"}),"objeto")," encapsulando una ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/Concepts/collection"}),"colecci\xf3n")," puede utilizarse como fuente de datos de un combo box. El objeto debe contener las siguientes propiedades:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Propiedad"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Obligatorio - Colecci\xf3n de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:",(0,r.kt)("li",null,"cadenas"),(0,r.kt)("li",null,"numbers"),(0,r.kt)("li",null,"dates"),(0,r.kt)("li",null,"horas"),"Si est\xe1 vac\xedo o no est\xe1 definido, el combo box est\xe1 vac\xedo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"igual que Collection"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Texto introducido por el usuario")))),(0,r.kt)("p",null,"Si el objeto contiene otras propiedades, se ignoran."),(0,r.kt)("p",null,"Cuando el usuario introduce texto en el combo box, la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"currentValue")," del objeto obtiene el texto introducido."),(0,r.kt)("h3",a({},{id:"utilizar-un-array"}),"Utilizar un array"),(0,r.kt)("p",null,"Consulte ",(0,r.kt)("strong",{parentName:"p"},"Utilizaci\xf3n de un array")," en la ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/dropdownListOverview#using-an-array"}),"p\xe1gina de la lista desplegable")," para obtener informaci\xf3n sobre c\xf3mo inicializar el array."),(0,r.kt)("p",null,"Cuando el usuario introduce texto en el combo box, el elemento 0 del array recibe el texto introducido."),(0,r.kt)("h3",a({},{id:"utilizar-una-lista-de-selecci\xf3n"}),"Utilizar una lista de selecci\xf3n"),(0,r.kt)("p",null,"Si desea utilizar un combo box para gestionar los valores de un \xe1rea de entrada (campo listado o variable), 4D le permite referenciar el campo o variable directamente como fuente de datos del objeto formulario. Esto facilita la gesti\xf3n de los campos/variables listados."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si utiliza una lista jer\xe1rquica, s\xf3lo se muestra el primer nivel y se puede seleccionar.")),(0,r.kt)("p",null,"Para asociar un combo box a un campo o variable, basta con introducir el nombre del campo o variable directamente en ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression"}),"Variable o Expresi\xf3n")," del objeto formulario en la Lista de Propiedades."),(0,r.kt)("p",null,"Cuando se ejecuta el formulario, 4D gestiona autom\xe1ticamente el combo box durante la entrada o visualizaci\xf3n: cuando un usuario elige un valor, \xe9ste se guarda en el campo; este valor de campo se muestra en el combo box cuando se visualiza el formulario:"),(0,r.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,r.kt)("strong",{parentName:"p"},"Utilizar una opci\xf3n")," en la ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/dropdownListOverview#using-a-choice-list"}),"p\xe1gina lista desplegable"),"."),(0,r.kt)("h2",a({},{id:"opciones"}),"Opciones"),(0,r.kt)("p",null,"Los objetos de tipo combo box aceptan dos opciones espec\xedficas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/propertiesDataSource#automatic-insertion"}),"Inserci\xf3n autom\xe1tica"),": permite a\xf1adir autom\xe1ticamente un valor a la fuente de datos cuando un usuario introduce un valor que no se encuentra en la lista asociada al combo box."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/FormObjects/propertiesRangeOfValues#excluded-list"}),"Exclusi\xf3n")," (lista de valores excluidos): permite establecer una lista cuyos valores no pueden introducirse en el combo box. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Associating a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesRangeOfValues#required-list"}),"list of required values")," is not available for combo boxes. En una interfaz, si un objeto debe proponer una lista finita de valores requeridos, entonces debe utilizar un objeto ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/dropdownListOverview#overview"}),"lista desplegable"),"."))))),(0,r.kt)("h2",a({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#alpha-format"}),"Formato alfa")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Inferior")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDataSource#choice-list"}),"Lista de opciones")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#date-format"}),"Formato de fecha")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font"}),"Fuente")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font-color"}),"Color de fuente")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font-size"}),"Tama\xf1o de fuente")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesHelp#help-tip"}),"Mensaje de ayuda")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - Cursiva ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#italic"}),"Cursiva")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#time-format"}),"Formato de hora")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top"}),"Arriba")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#underline"}),"Subrayado")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression"}),"Variable o expresi\xf3n")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dimensionado vertical")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")))}u.isMDXComponent=!0},7141:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);