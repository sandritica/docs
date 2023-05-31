"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56279],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(b,l(l({ref:a},p),{},{components:t})):r.createElement(b,l({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79543:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});t(67294);var r=t(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"dropdownListOverview",title:"Lista desplegable"},i=void 0,s={unversionedId:"FormObjects/dropdownListOverview",id:"version-19-R8/FormObjects/dropdownListOverview",title:"Lista desplegable",description:"Las listas desplegables son objetos de formulario que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un objeto, array, una lista de selecci\xf3n o una acci\xf3n est\xe1ndar.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/es/19-R8/FormObjects/dropdownListOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FdropdownList_Overview.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"dropdownListOverview",title:"Lista desplegable"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/es/19-R8/FormObjects/comboBoxOverview"},next:{title:"\xc1rea de grupo",permalink:"/docs/es/19-R8/FormObjects/groupBox"}},d={},p=[{value:"Tipos de listas desplegables",id:"tipos-de-listas-desplegables",level:2},{value:"Gesti\xf3n de listas desplegables",id:"gesti\xf3n-de-listas-desplegables",level:2},{value:"Utilizar un objeto",id:"utilizar-un-objeto",level:3},{value:"Utilizar un array",id:"utilizar-un-array",level:3},{value:"Utilizar una lista de selecci\xf3n",id:"utilizar-una-lista-de-selecci\xf3n",level:3},{value:"Valor del elemento seleccionado o Referencia del elemento seleccionado",id:"valor-del-elemento-seleccionado-o-referencia-del-elemento-seleccionado",level:4},{value:"Uso de una lista de selecci\xf3n jer\xe1rquica",id:"uso-de-una-lista-de-selecci\xf3n-jer\xe1rquica",level:3},{value:"Utilizar una acci\xf3n est\xe1ndar",id:"utilizar-una-acci\xf3n-est\xe1ndar",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}],c={toc:p};function u(e){var{components:a}=e,l=o(e,["components"]);return(0,r.kt)("wrapper",n({},c,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las listas desplegables son objetos de formulario que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un objeto, array, una lista de selecci\xf3n o una acci\xf3n est\xe1ndar."),(0,r.kt)("p",null,'En macOS, las listas desplegables tambi\xe9n se denominan a veces "men\xfa emergente". Ambos nombres se refieren a los mismos objetos. Como muestra el siguiente ejemplo, el aspecto de estos objetos puede variar ligeramente seg\xfan la plataforma:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(70989).Z,width:"458",height:"158"})),(0,r.kt)("h2",n({},{id:"tipos-de-listas-desplegables"}),"Tipos de listas desplegables"),(0,r.kt)("p",null,"Puede crear diferentes tipos de listas desplegables con distintas funcionalidades. Para definir un tipo, seleccione los valores apropiados ",(0,r.kt)("strong",{parentName:"p"},"Tipo de expresi\xf3n")," y ",(0,r.kt)("strong",{parentName:"p"},"Tipo de datos")," en la lista Propiedades o utilice su equivalente JSON."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Funcionalidades"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de expresi\xf3n"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Definici\xf3n JSON"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creado sobre una colecci\xf3n"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Numeric, Text, Date o Time"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: object")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"numberFormat: <format>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"textFormat: <format>")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"dateFormat: <format>")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"timeFormat: <format>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Basado en un array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Array"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Numeric, Text, Date o Time"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: arrayNumber")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayText")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayDate")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"arrayTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista de selecci\xf3n guardada como valor"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Crear en una lista de selecci\xf3n (est\xe1ndar)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Valor del elemento seleccionado"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: text")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"saveAs: value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista de selecci\xf3n guardada como referencia"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creadoo sobre una lista de selecci\xf3n. La posici\xf3n del elemento es guardada"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Referencia del elemento seleccionado"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"saveAs: reference"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista de selecci\xf3n jer\xe1rquica"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Puede mostrar contenido jer\xe1rquico"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Lista"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Referencia de la lista"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Acci\xf3n est\xe1ndar"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creado autom\xe1ticamente por la acci\xf3n"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"any")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"toda referencia de lista excepto")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"toda definici\xf3n + ",(0,r.kt)("inlineCode",{parentName:"td"},"action: <action>")," (+ ",(0,r.kt)("inlineCode",{parentName:"td"},"focusable: false")," para acciones que se aplican a otras \xe1reas)")))),(0,r.kt)("h2",n({},{id:"gesti\xf3n-de-listas-desplegables"}),"Gesti\xf3n de listas desplegables"),(0,r.kt)("h3",n({},{id:"utilizar-un-objeto"}),"Utilizar un objeto"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta funcionalidad s\xf3lo est\xe1 disponible en proyectos 4D.")),(0,r.kt)("p",null,"Un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Concepts/object"}),"objeto")," encapsulando una ",(0,r.kt)("a",n({parentName:"p"},{href:"Concepts/dt_collection"}),"colecci\xf3n")," puede utilizarse como fuente de datos de una lista desplegable. El objeto debe contener las siguientes propiedades:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Propiedad"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Obligatorio - Colecci\xf3n de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:",(0,r.kt)("li",null,"cadenas"),(0,r.kt)("li",null,"numbers"),(0,r.kt)("li",null,"dates"),(0,r.kt)("li",null,"horas"),"Si est\xe1 vac\xedo o no est\xe1 definido, la lista desplegable est\xe1 vac\xeda")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\xcdndice del elemento seleccionado actualmente (valor comprendido entre 0 y ",(0,r.kt)("inlineCode",{parentName:"td"},"collection.length-1"),"). Si se establece -1, ",(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")," se muestra como una cadena de marcador de posici\xf3n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"igual que Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Elemento seleccionado actualmente (se utiliza como valor de marcador de posici\xf3n si se define por c\xf3digo)")))),(0,r.kt)("p",null,"Si el objeto contiene otras propiedades, se ignoran."),(0,r.kt)("p",null,"Para inicializar el objeto asociado a la lista desplegable, puede:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;Lista Est\xe1tica&#062;")," en el tema ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource"}),"Fuente de Datos")," de la Lista de Propiedades. Los valores por defecto se cargan en un objeto autom\xe1ticamente.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Ejecutar c\xf3digo que crea el objeto y sus propiedades. Por ejemplo, si "myList" es la variable ',(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#variable-or-expression"}))," asociada a la lista desplegable, puede escribir en el evento de formulario ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Events/onLoad"}),"On Load"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'// Form.myDrop es la fuente de datos del objeto formulario\n\nForm.myDrop:=Nuevo objeto\nForm.myDrop.values:=Nueva colecci\xf3n("manzanas"; "nueces"; "peras"; "naranjas"; "zanahorias")\nForm.myDrop.index:=-1 //currentValue es un marcador de posici\xf3n\nForm.myDrop.currentValue:="Selecciona una fruta" \n')),(0,r.kt)("p",null,"La lista desplegable se muestra con la cadena del marcador de posici\xf3n:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(80425).Z,width:"230",height:"33"})),(0,r.kt)("p",null,"Despu\xe9s de que el usuario seleccione un valor:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(44788).Z,width:"234",height:"116"})),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges"\nForm.myDrop.index //3\n')),(0,r.kt)("h3",n({},{id:"utilizar-un-array"}),"Utilizar un array"),(0,r.kt)("p",null,"Un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Concepts/arrays"}),"array")," es una lista de valores en memoria a la que se hace referencia por el nombre del array. Una lista desplegable puede mostrar un array como una lista de valores cuando se hace clic en ella."),(0,r.kt)("p",null,"Para inicializar el array asociado a la lista desplegable, puede:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;Lista Est\xe1tica&#062;")," en el tema ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource"}),"Fuente de Datos")," de la Lista de Propiedades. Los valores por defecto se cargan en un array autom\xe1ticamente. Puede referirse al array utilizando el nombre de la variable asociada al objeto.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Antes de mostrar el objeto, ejecute el c\xf3digo que asigna valores a los elementos del array. Por ejemplo:"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  ARRAY TEXT(aCities;6) \n  aCities{1}:="Philadelphia" \n  aCities{2}:="Pittsburg" \n  aCities{3}:="Grand Blanc" \n  aCities{4}:="Bad Axe" \n  aCities{5}:="Frostbite Falls" \n  aCities{6}:="Green Bay" \n')),(0,r.kt)("p",null,"En este caso, el nombre de la ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#variable-or-expression"}),"variable")," asociada al objeto en el formulario debe ser ",(0,r.kt)("inlineCode",{parentName:"p"},"aCities"),". Este c\xf3digo podr\xeda colocarse en el m\xe9todo formulario y ejecutarse cuando se ejecute el evento formulario ",(0,r.kt)("inlineCode",{parentName:"p"},"On Load"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY"),". Por ejemplo:")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'   LIST TO ARRAY("Cities";aCities)\n')),(0,r.kt)("p",null,"En este caso tambi\xe9n, el nombre de la ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#variable-or-expression"}),"variable")," asociada al objeto en el formulario debe ser ",(0,r.kt)("inlineCode",{parentName:"p"},"aCities"),". Este c\xf3digo puede ejecutarse en lugar de las sentencias de asignaci\xf3n mostradas anteriormente."),(0,r.kt)("p",null,"Si necesita guardar la elecci\xf3n del usuario en un campo, deber\xe1 utilizar una sentencia de asignaci\xf3n que se ejecute despu\xe9s de aceptar el registro. El c\xf3digo podr\xeda ser as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `nuevo registro\n          aCities:=3 `mostrar un valor por defecto\n       Else `registro existente, mostrar valor almacenado\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `el usuario modifica la selecci\xf3n\n       City:=aCities{aCities} `el campo obtiene un nuevo valor\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n')),(0,r.kt)("p",null,"Debe seleccionar cada evento que pruebe en sus sentencia Case. Los arrays siempre contienen un n\xfamero finito de elementos. La lista de elementos es din\xe1mica y puede ser modificada por un m\xe9todo. Los elementos de un array pueden modificarse, ordenarse y a\xf1adirse."),(0,r.kt)("h3",n({},{id:"utilizar-una-lista-de-selecci\xf3n"}),"Utilizar una lista de selecci\xf3n"),(0,r.kt)("p",null,"Si desea utilizar una lista desplegable para gestionar los valores de un \xe1rea de entrada (campo listado o variable), 4D le permite hacer referencia al campo o variable directamente como ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#variable-or-expression"}),"fuente de datos")," de la lista desplegable. Esto facilita la gesti\xf3n de los campos/variables listados."),(0,r.kt)("p",null,'Por ejemplo, en el caso de un campo "Color" que s\xf3lo puede contener los valores "Blanco", "Azul", "Verde" o "Rojo", es posible crear una lista que contenga estos valores y asociarla a una lista desplegable que haga referencia al campo "Color" 4D. 4D se encarga entonces de gestionar autom\xe1ticamente la entrada y la visualizaci\xf3n del valor actual en el formulario.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si utiliza una lista jer\xe1rquica, s\xf3lo se muestra el primer nivel y se puede seleccionar. If you use a hierarchical list, only the first level is displayed and can be selected.")),(0,r.kt)("p",null,"Para asociar una lista desplegable a un campo o variable, introduzca directamente el nombre del campo o variable como campo ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#variable-or-expression"}),"Variable o Expresi\xf3n")," de la lista desplegable en la Lista de propiedades."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'No es posible utilizar esta funcionalidad con una lista desplegable de objetos o arrays. Si introduce un nombre de campo en el \xe1rea "Variable o expresi\xf3n", deber\xe1 utilizar una lista de selecci\xf3n.')),(0,r.kt)("p",null,"Cuando se ejecuta el formulario, 4D gestiona autom\xe1ticamente la lista desplegable durante la introducci\xf3n o la visualizaci\xf3n: cuando un usuario elige un valor, \xe9ste se guarda en el campo; este valor de campo se muestra en la lista desplegable cuando se visualiza el formulario:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(27249).Z,width:"755",height:"171"})),(0,r.kt)("h4",n({},{id:"valor-del-elemento-seleccionado-o-referencia-del-elemento-seleccionado"}),"Valor del elemento seleccionado o Referencia del elemento seleccionado"),(0,r.kt)("p",null,"Cuando haya asociado una lista desplegable con una lista de opciones y con un campo o una variable, puede definir la propiedad ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource#data-type"}),(0,r.kt)("strong",{parentName:"a"},"Tipo de datos"))," en ",(0,r.kt)("strong",{parentName:"p"},"valor del elemento seleccionado")," o ",(0,r.kt)("strong",{parentName:"p"},"referencia del elemento seleccionado"),". Esta opci\xf3n permite optimizar el tama\xf1o de los datos guardados."),(0,r.kt)("h3",n({},{id:"uso-de-una-lista-de-selecci\xf3n-jer\xe1rquica"}),"Uso de una lista de selecci\xf3n jer\xe1rquica"),(0,r.kt)("p",null,"Una lista desplegable jer\xe1rquica tiene una sublista asociada a cada elemento de la lista. Este es un ejemplo de lista desplegable jer\xe1rquica:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(75907).Z,width:"248",height:"177"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En los formularios, las listas desplegables jer\xe1rquicas est\xe1n limitadas a dos niveles.")),(0,r.kt)("p",null,"Puede asignar la lista de selecci\xf3n jer\xe1rquica al objeto de lista desplegable utilizando el campo ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource#choice-list"}),"Lista de selecci\xf3n")," de la Lista de propiedades."),(0,r.kt)("p",null,"Las listas jer\xe1rquicas desplegables se gestionan utilizando los comandos ",(0,r.kt)("strong",{parentName:"p"},"Listas jer\xe1rquicas")," del Lenguaje 4D. Todos los comandos que soportan la sintaxis ",(0,r.kt)("inlineCode",{parentName:"p"},'(*; "name")')," pueden utilizarse con listas desplegables jer\xe1rquicas, por ejemplo ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page633.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Elemento de lista padre")),"."),(0,r.kt)("h3",n({},{id:"utilizar-una-acci\xf3n-est\xe1ndar"}),"Utilizar una acci\xf3n est\xe1ndar"),(0,r.kt)("p",null,"Puede crear autom\xe1ticamente una lista desplegable utilizando una acci\xf3n est\xe1ndar ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesAction#standard-action"})),". Esta funcionalidad es soportada en los siguientes contextos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Uso de la acci\xf3n est\xe1ndar ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoPage"),". En este caso, 4D mostrar\xe1 autom\xe1ticamente la ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormEditor/forms#form-pages"}),"p\xe1gina del formulario")," que corresponda al n\xfamero del elemento seleccionado. Por ejemplo, si el usuario selecciona el tercer elemento, 4D mostrar\xe1 la tercera p\xe1gina del formulario actual (si existe). En tiempo de ejecuci\xf3n, la lista desplegable muestra por defecto los n\xfameros de p\xe1gina (1, 2...).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Uso de una acci\xf3n est\xe1ndar que muestra una sublista de elementos, por ejemplo ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". Esta funcionalidad requiere que:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"un \xe1rea de texto con estilo (",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/19-R8/FormObjects/writeProAreaOverview"}),"\xe1rea 4D Write Pro")," o ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/19-R8/FormObjects/inputOverview"}),"entrada")," con la propiedad ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/19-R8/FormObjects/propertiesText#multi-style"}),"multiestilo"),") est\xe1 presente en el formulario como objetivo de la acci\xf3n est\xe1ndar."),(0,r.kt)("li",{parentName:"ul"},"la propiedad ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/19-R8/FormObjects/propertiesEntry#focusable"}),"focusable")," no est\xe1 definida en la lista desplegable. En tiempo de ejecuci\xf3n, la lista desplegable mostrar\xe1 una lista autom\xe1tica de valores, por ejemplo, colores de fondo. Puede reemplazar esta lista autom\xe1tica asignando adem\xe1s una lista de selecci\xf3n en la que cada elemento tenga asignada una acci\xf3n est\xe1ndar personalizada.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta funcionalidad no puede utilizarse con una lista desplegable jer\xe1rquica.")),(0,r.kt)("h2",n({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDisplay#alpha-format"}),"Formato alfa")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Inferior")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesTextAndPicture#button-style"}),"Estilo de bot\xf3n")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource#choice-list"}),"Lista de opciones")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource#data-type-expression-type"}),"Tipo de datos (tipo de expresi\xf3n)")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDataSource#data-type-list"}),"Tipo de datos (lista)")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDisplay#date-format"}),"Formato de fecha")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesEntry#focusable"}),"Enfocable")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesText#font"}),"Fuente")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesText#font-color"}),"Color de fuente")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesText#font-size"}),"Tama\xf1o de fuente")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesHelp#help-tip"}),"Mensaje de ayuda")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesText#italic"}),"It\xe1lica")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDisplay#not-rendered"}),"No renderizado")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesAction#standard-action"}),"Acci\xf3n est\xe1ndar")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#save-value"}),"Guardar valor")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDisplay#time-format"}),"Hora Formato")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesCoordinatesAndSizing#top"}),"Arriba")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesText#underline"}),"Subrayado")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesObject#variable-or-expression"}),"Variable o expresi\xf3n")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Tama\xf1o vertical")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")))}u.isMDXComponent=!0},80425:(e,a,t)=>{t.d(a,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},44788:(e,a,t)=>{t.d(a,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAAB0CAYAAACL+K59AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAB7tJREFUeF7tnT9PHEccQPcTuXFj/DFQpEihtHVfwI1LVxaSpYDpUqQwjuRQ2U2uQUKK4sIFJSKRkNwYCwQ2IDd2N9nf7MzezNzsn5uFO4Z7T3oKu7O7d8U9Zny5Y4urqyuFiLdbQkXMQEJFzEBCRcxAL9Tip98QcYG6PbpOhbp//B0RFyChImYgoSJmIKEiZiChImYgoSJmIKEiZmB6qK8fqaIojI/US3dsyndqtXignryPjc1B+1zvv1BvY+NNvn+h7i3yeSMa00LVL2AnznL7yWvzc9QhoQ6NXM4v1Grr8+vjgn/Z4FKbFqrMUDPNTosO9ToCI1RcnGmh6hdtoe49O3D2GfVsGy6Jgxd59BjxQD25b/fLLFg9jt0u1t6Z4ya+XGsb98+vnm/1XFbXHpT75LGD5+Zt25/968SeB2Jf//jrn+h+sWksMVRxEtVkWRm86MuZ143Df/GHx1TXm44/OL7RpuPC/bLtPk5s3G43/YyY5t//nanVn39Rv/7+59SY7JMxOSYcGxCq0cyOOlZvpnRnH+dF3nSM3h97U6ojEO9Nrdhx4fmzbDf9jJhuLNa2SMXhoZa+fVYuI/vG1nRMSqjeOTIjx44Lz59lu+lnxGG6sXZFKqaF+vqF84J1l6zyYu5avjYdk7D0dd/U0tHGjgvPD7erx62X73qGdp9r7GfE4dpYuyIVE2dUedEGS1c7poMJx4IXefSY6evaeOo3jNzH0VaR6bH7j9Rq0oxa6i6f18rrNMTZ/DwQ05RAuyIVE0NFxHlKqIgZSKiIGUioiBlIqIgZSKiIGUioiBlIqIgZSKiIGThTqIi4ON0eXb1QHz9+jIgL1O3RdSpUAFgMhAqQAYQKkAG3JNSxGhUrauPIbAKAB6ECZID0d3x8rE5PT9X5+bm6uLhQl5eXhApwm5D+9vf31eHhofr06ZOOtVeo45H5awfiaGz3VsGNN9SKGVup6+sxZjePJscUxagc1TvVxordV6j6IQGWAOlvZ2dH7e7u6lhPTk70rNoZ6gQ3Mvm5DGllo8yqRAfXdyz2s2yOqqDL/05+IQAsF9Lf1taWjlVmVlkG9wtVwjGzW9EUWYnMvFVfPce82dQoB5n9k1kYYHmQ/tbX19X29rb68OGDXv5+/fq1I1QdjbskbQq1Wq7GQ20Y8649zdHGio63Og9gOZD+nj9/rl69ejVDqDKbtixv61nPi65rrOEaESRWZlZYJtJCNbOhXpaujNQomFFHo2rW82e+7rG6PR2xub4oB3pL7eYZF+AukhhqE0FwHm1jANAGoQJkAKECZMA1hwoANwGhAmQAoQJkAKECZMCcQ+UNJYAUCBUgAxJDNcFtTD4tNPlIXxij3Zb/2k8WleqPJfHVNYA+DAjVxiabEmzsc7uCux2M8dU1gF4Mm1H7xNg2Zj7TywfsAdpZbKgGvroG0M4NhOp+z7REL4vbQxX46hpAMzcQqmw6X0kbjbyx+m8tScl8dQ2gF4mhAsA8IVSADCBUgAwgVIAMIFSADCBUgAwgVIAMIFSADCBUgAxIDNV8Eil6Z7YS7w9oTz5x1HYHuOoPc8uxfPUNIGRAqGVInXdmk01zNzYP95jqWvUxfPUNYIphM6rTX31ntvB2FKINz/tsb0PYfPUNYIprCtX5xowOLfIBe2+/HN8QqoGvvgFMGBCqM+t5EQZjFplN+yyVHfjqG0DFoBk1fme2ErN8rZe51VQ7eZMocge4uke++gYwxaBQmewA5gOhAmQAoQJkwEyhFk//RcQFSKiIGUioiBlIqIgZSKiIGUioiBmYHurml+rjgIbxGzv2WY3VDzU++FHu/aZG5b7RQXWM5uCzd9zm3jczoNTR3kcz5l//aO9Ldezm9Jh9jOLpR7V5ZnaVTJ4PYv4mhiqROTHocGxI1ZgXnXeef1wd7hsJ1kbnX//hnkTvnudEW56nH0vOr38JIN4t00LVYdqoKmXWrMIKQhJ1hJaG4Nxtuf7ZF/XQnh+OmSvVSKBmf/wXBGLe3nyo3rGyPL2OUP3Hdq1mX5a+eLdMC1WHEy593WWrE6DMpjY6fVyPUIPrTy9922dOOZ6ZFe+SiaGW6ugsTcGJzps8Z9/UuM+MKtvOcrn9zaQSWfp6y+vmGRcxR9NDnacdy13Eu24Woer/veP9mxVxubylofr/T5SlLC67M4UKAIuBUAEygFABMoBQATIgg1D5+0wAhAqQAQNCjd91rd8d28LtkuCPdlenynHh9bjbGywfiaFWsbTfbsKdCavgJsfHt+vo2m55wd3eYAlJC9W710xAnzu2hduR69V3h4se2/VLAuBucb2hevvb7tg2IFQDd3uDZSIt1Kalb+87tsW2w6WvDTceqsDd3mBZSAxVqOLy39Rx3uhpu2NbLD4dp72eP1a/QSUPwt3eYAkZECoAzAtCBcgAQgXIgJlCRcTF2SvUmMfHx2p/f1/t7Oyora0ttb6+ri+GiNevNCatSXPS3sXFhe6wM9TT01N1eHiodnd39QW2t7d18Yh4/Upj0po0d3Jy0j/U8/NzPQXLiVK5TMmIeDNKY9KaNCftXV5e6g47Q5Wi5QSpW6ZiuQAi3ozSmKxipTlpr3eocqAoJ4nyj1tEvBltZ7Y722FnqIi4eAkVMQMJFfHWe6X+B35Oyo/lhuY/AAAAAElFTkSuQmCC"},70989:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},27249:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},75907:(e,a,t)=>{t.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);