"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36360],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>m});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(o),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return o?t.createElement(f,r(r({ref:n},p),{},{components:o})):t.createElement(f,r({ref:n},p))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=o[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},97746:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});o(67294);var t=o(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const r={id:"collection",title:"Collection"},c=void 0,i={unversionedId:"Concepts/collection",id:"version-19-R7/Concepts/collection",title:"Collection",description:"Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, n\xfamero, fecha, objeto, booleano, colecci\xf3n o null).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/es/19-R7/Concepts/collection",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Concepts/dt_collection.md",tags:[],version:"19-R7",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/es/19-R7/Concepts/boolean"},next:{title:"Fecha",permalink:"/docs/es/19-R7/Concepts/date"}},s={},p=[{value:"Inicializaci\xf3n",id:"inicializaci\xf3n",level:2},{value:"Colecci\xf3n est\xe1ndar o compartida",id:"colecci\xf3n-est\xe1ndar-o-compartida",level:3},{value:"Funciones de colecci\xf3n",id:"funciones-de-colecci\xf3n",level:2},{value:"par\xe1metro rutaPropiedad",id:"par\xe1metro-rutapropiedad",level:3}],d={toc:p};function u(e){var{components:n}=e,o=l(e,["components"]);return(0,t.kt)("wrapper",a({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, n\xfamero, fecha, objeto, booleano, colecci\xf3n o null)."),(0,t.kt)("p",null,"Para manipular las variables de tipo Colecci\xf3n, debe utilizar la notaci\xf3n objeto (ver ",(0,t.kt)("a",a({parentName:"p"},{href:"Conceptos/dt_object.md#sintaxis-b%C3%A1sica"}),"Sintaxis-b\xe1sica"),")."),(0,t.kt)("p",null,"Para acceder a un elemento de la colecci\xf3n, hay que pasar el n\xfamero del elemento entre corchetes:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,t.kt)("p",null,"Puede pasar toda expresi\xf3n 4D v\xe1lida que devuelva un entero positivo en ",(0,t.kt)("em",{parentName:"p"},"expresi\xf3n"),". Ejemplos:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //acceso al 6\xba elemento de la colecci\xf3n\n myCollection[$var]\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atenci\xf3n:")," los elementos de la colecci\xf3n est\xe1n numerados desde 0."),(0,t.kt)("p",null,"Puede asignar un valor a un elemento de la colecci\xf3n u obtener el valor de un elemento de colecci\xf3n:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,t.kt)("p",null,"Si se asigna un \xedndice de elemento que sobrepasa el \xfaltimo elemento existente de la colecci\xf3n, la colecci\xf3n se redimensiona autom\xe1ticamente y a todos los nuevos elementos intermedios se les asigna un valor nulo:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,t.kt)("h2",a({},{id:"inicializaci\xf3n"}),"Inicializaci\xf3n"),(0,t.kt)("p",null,"Las colecciones deben haber sido inicializadas, por ejemplo utilizando el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"New collection"),", de lo contrario al intentar leer o modificar sus elementos se generar\xe1 un error de sintaxis."),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"})," var $colVar : Collection //creaci\xf3n de una variable 4D de tipo colecci\xf3n\n $colVar:=New collection //inicializaci\xf3n de la colecci\xf3n y asignaci\xf3n a la variable 4D\n")),(0,t.kt)("h3",a({},{id:"colecci\xf3n-est\xe1ndar-o-compartida"}),"Colecci\xf3n est\xe1ndar o compartida"),(0,t.kt)("p",null,"Puede crear dos tipos de colecciones:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"colecciones est\xe1ndar (no compartidas), utilizando el comando ",(0,t.kt)("a",a({parentName:"li"},{href:"/docs/es/19-R7/API/CollectionClass#new-collection"}),(0,t.kt)("inlineCode",{parentName:"a"},"New collection")),". Estas colecciones pueden ser editadas sin ning\xfan control de acceso espec\xedfico, pero no pueden ser compartidas entre procesos."),(0,t.kt)("li",{parentName:"ul"},"colecciones compartidas, utilizando el comando ",(0,t.kt)("a",a({parentName:"li"},{href:"/docs/es/19-R7/API/CollectionClass#new-shared-collection"}),(0,t.kt)("inlineCode",{parentName:"a"},"New shared collection")),". Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos.")),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19-R7/Concepts/shared"}),"Objetos y colecciones compartidos"),"."),(0,t.kt)("h2",a({},{id:"funciones-de-colecci\xf3n"}),"Funciones de colecci\xf3n"),(0,t.kt)("p",null,"Las referencias a colecciones 4D se benefician de funciones de clase espec\xedficas (a veces llamados ",(0,t.kt)("em",{parentName:"p"},"funciones m\xe9todos"),"). Las funciones de colecci\xf3n se listan en la secci\xf3n ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/es/19-R7/API/CollectionClass"}),"Class API Reference"),"."),(0,t.kt)("p",null,"Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //copia de $col a $newCol\n$col.push(10;100) //a\xf1ade de 10 y 100 a la colecci\xf3n\n")),(0,t.kt)("p",null,"Ciertas funciones devuelven la colecci\xf3n original despu\xe9s de la modificaci\xf3n, para que pueda ejecutar las llamadas en una secuencia:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,t.kt)("h3",a({},{id:"par\xe1metro-rutapropiedad"}),"par\xe1metro rutaPropiedad"),(0,t.kt)("p",null,"Varias funciones aceptan una ",(0,t.kt)("em",{parentName:"p"},"propertyPath")," como par\xe1metro. Este par\xe1metro significa:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'o bien un nombre de propiedad del objeto, por ejemplo "apellido"'),(0,t.kt)("li",{parentName:"ul"},'o una ruta de propiedades del objeto, es decir, una secuencia jer\xe1rquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Atenci\xf3n:"),' cuando se utilizan funciones y par\xe1metros propertyPath, no se puede utilizar ".", "',"[ ]",'", o espacios en los nombres de las propiedades ya que impedir\xe1 que 4D analice correctamente la ruta:'),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //error\n')))}u.isMDXComponent=!0}}]);