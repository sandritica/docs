"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return r?a.createElement(b,n(n({ref:t},l),{},{components:r})):a.createElement(b,n({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,n[1]=p;for(var c=2;c<s;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});r(67294);var a=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const n={id:"inputOverview",title:"Entrada"},p=void 0,i={unversionedId:"FormObjects/inputOverview",id:"version-19-R8/FormObjects/inputOverview",title:"Entrada",description:"Las entradas le permiten a\xf1adir expresiones editables o no editables como campos y variables de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/es/FormObjects/inputOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"inputOverview",title:"Entrada"},sidebar:"docs",previous:{title:"\xc1rea de grupo",permalink:"/docs/es/FormObjects/groupBox"},next:{title:"Lista jer\xe1rquica",permalink:"/docs/es/FormObjects/listOverview"}},c={},l=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2},{value:"Alternativas",id:"alternativas",level:2}],d={toc:l};function m(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Las entradas le permiten a\xf1adir expresiones editables o no editables como ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/Concepts/identifiers#fields"}),"campos")," y ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/Concepts/variables"}),"variables")," de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(78536).Z,width:"279",height:"175"})),(0,a.kt)("p",null,"Las entradas pueden contener ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"expresiones asignables o no asignables"),"."),(0,a.kt)("p",null,"Adem\xe1s, las entradas pueden ser ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#enterable"}),"editables o no editables"),". Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable s\xf3lo puede mostrar valores, pero no puede ser editada por el usuario."),(0,a.kt)("p",null,"Puedes gestionar los datos con los ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/Concepts/methods"}),"m\xe9todos")," objeto o formulario."),(0,a.kt)("h3",o({},{id:"ejemplo-json"}),"Ejemplo JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'    "miTexto": {\n        "tipo": "input", //define el tipo de objeto\n        "spellcheck": true, //activa la verificaci\xf3n ortogr\xe1fica\n        "left": 60, //posici\xf3n izquierda en el formulario  \n        "top": 160, //posici\xf3n superior en el formulario \n        "width": 100, //ancho del objeto\n        "height": 20 //altura del objeto\n        }\n')),(0,a.kt)("h2",o({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Hist\xf3rico"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Modificaciones"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"v19 R7"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Soporte de la propiedad Radio de esquina"))))),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#allow-font-color-picker"}),"Permitir selector de fuente/color")," -",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#alpha-format"}),"Formato Alfa")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#auto-spellcheck"}),"Revisi\xf3n ortogr\xe1fica autom\xe1tica")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Prueba cuando es falso/texto cuando es verdadero")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de l\xednea de borde")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Fondo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDataSource#choice-list"}),"Lista de selecci\xf3n")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#context-menu"}),"Men\xfa contextual")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#corner-radius"}),"Radio de esquina")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#date-format"}),"Formato de fecha")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesRangeOfValues#default-value"}),"Valor por defecto")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAction#draggable"}),"Arrastrable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAction#droppable"}),"Abandonable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#enterable"}),"Ingresable")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#entry-filter"}),"Filtro de entrada")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesRangeOfValues#excluded-list"}),"Lista de excluidos")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#fill-color"}),"Color de relleno")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font"}),"Fuente")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font-color"}),"Color de fuente")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#font-size"}),"Tama\xf1o de fuente")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Ocultar rect\xe1ngulo de enfoque")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#horizontal-alignment"}),"Alineaci\xf3n horizontal")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Barra de desplazamiento horizontal")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#italic"}),"It\xe1lica")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#multiline"}),"Multil\xednea")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#multi-style"}),"Multiestilo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#number-format"}),"Formato de n\xfamero")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#object-name"}),"Nombre de objeto")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#orientation"}),"Orientaci\xf3n")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#picture-format"}),"Formato de imagen")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#placeholder"}),"Marcador de posici\xf3n")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesPrint#print-frame"}),"Imprimir marco")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesRangeOfValues#required-list"}),"Lista requerida")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesEntry#selection-always-visible"}),"Selecci\xf3n siempre visible")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#store-with-default-style-tags"}),"Almacenar con etiquetas de estilo por defecto")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#text-when-false-text-when-true"}),"Texto cuando es falso/Texto cuando es verdadero")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#time-format"}),"Formato de tiempo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesText#underline"}),"Subrayado")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression"}),"Variable o expresi\xf3n")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Barra de desplazamiento vertical")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Tama\xf1o vertical")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/FormObjects/propertiesDisplay#wordwrap"}),"Ajustar texto")),(0,a.kt)("hr",null),(0,a.kt)("h2",o({},{id:"alternativas"}),"Alternativas"),(0,a.kt)("p",null,"Tambi\xe9n puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, m\xe1s concretamente:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Puede mostrar e introducir datos de los campos de la base directamente en las columnas ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/FormObjects/listboxOverview"}),"de tipo List box"),"."),(0,a.kt)("li",{parentName:"ul"},"Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/FormObjects/dropdownListOverview"}),"Men\xfas desplegables/Listas desplegables")," y ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/FormObjects/comboBoxOverview"}),"Combo Box"),"."),(0,a.kt)("li",{parentName:"ul"},"Puede representar una expresi\xf3n booleana como una ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/FormObjects/checkboxOverview"}),"casilla de selecci\xf3n")," o como un objeto ",(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/FormObjects/radiobuttonOverview"}),"bot\xf3n radio"),".")))}m.isMDXComponent=!0},78536:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"}}]);