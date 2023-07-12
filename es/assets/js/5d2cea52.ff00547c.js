"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12064],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),i=function(e){var a=o.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=i(e.components);return o.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=i(t),m=n,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||s;return t?o.createElement(b,l(l({ref:a},c),{},{components:t})):o.createElement(b,l({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=p;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var i=2;i<s;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},73505:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});t(67294);var o=t(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"dsmapping",title:"Objeto del modelo de datos"},r=void 0,d={unversionedId:"ORDA/dsmapping",id:"version-20-R2/ORDA/dsmapping",title:"Objeto del modelo de datos",description:"La tecnolog\xeda ORDA se basa en un mapeo autom\xe1tico de una estructura de base subyacente. Tambi\xe9n ofrece acceso a los datos a trav\xe9s de los objetos selecci\xf3n de entidades (entity selection) y entidad (entity). Como resultado, ORDA expone toda la base de datos como un conjunto de objetos del modelo de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/ORDA/dsMapping.md",sourceDirName:"ORDA",slug:"/ORDA/dsmapping",permalink:"/docs/es/ORDA/dsmapping",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FdsMapping.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"dsmapping",title:"Objeto del modelo de datos"},sidebar:"docs",previous:{title:"ORDA",permalink:"/docs/es/ORDA/overview"},next:{title:"Clases del modelo de datos",permalink:"/docs/es/ORDA/ordaClasses"}},i={},c=[{value:"Mapeo de la estructura",id:"mapeo-de-la-estructura",level:2},{value:"Reglas generales",id:"reglas-generales",level:3},{value:"Normas de control de acceso remoto",id:"normas-de-control-de-acceso-remoto",level:3},{value:"Actualizaci\xf3n del modelo de datos",id:"actualizaci\xf3n-del-modelo-de-datos",level:3},{value:"Definiciones de los objetos",id:"definiciones-de-los-objetos",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Atributo",id:"atributo",level:3},{value:"Atributos de almacenamiento y relacionales",id:"atributos-de-almacenamiento-y-relacionales",level:4},{value:"Atributos calculados",id:"atributos-calculados",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Entity selections ordenadas o no ordenadas",id:"entity-selections-ordenadas-o-no-ordenadas",level:4}],u={toc:c};function p(e){var{components:a}=e,l=s(e,["components"]);return(0,o.kt)("wrapper",n({},u,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"La tecnolog\xeda ORDA se basa en un mapeo autom\xe1tico de una estructura de base subyacente. Tambi\xe9n ofrece acceso a los datos a trav\xe9s de los objetos selecci\xf3n de entidades (entity selection) y entidad (entity). Como resultado, ORDA expone toda la base de datos como un conjunto de objetos del modelo de datos."),(0,o.kt)("h2",n({},{id:"mapeo-de-la-estructura"}),"Mapeo de la estructura"),(0,o.kt)("p",null,"Cuando se llama a un datastore utilizando el comando ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/API/DataStoreClass#ds"}),(0,o.kt)("inlineCode",{parentName:"a"},"ds"))," o ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/API/DataStoreClass#open-datastore"}),(0,o.kt)("inlineCode",{parentName:"a"},"Open datastore")),", 4D referencia autom\xe1ticamente las tablas y los campos de la estructura 4D correspondiente como propiedades del objeto ",(0,o.kt)("a",n({parentName:"p"},{href:"#datastore"}),"datastore")," devuelto:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las tablas correspondientes a las dataclasses."),(0,o.kt)("li",{parentName:"ul"},"Los campos corresponden a los atributos de almacenamiento."),(0,o.kt)("li",{parentName:"ul"},"Las relaciones se mapean a los atributos de relaci\xf3n: los nombres de relaci\xf3n, definidos en el editor de estructura, se utilizan como nombres de atributo de relaci\xf3n.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(94632).Z,width:"961",height:"480"})),(0,o.kt)("h3",n({},{id:"reglas-generales"}),"Reglas generales"),(0,o.kt)("p",null,"Se aplican las siguientes reglas para todas las conversiones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los nombres de tabla, campo y relaci\xf3n se mapean a los nombres de propiedad de objeto. Aseg\xfarese de que dichos nombres cumplen con las reglas generales de denominaci\xf3n de objetos, como se explica en la secci\xf3n ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/es/Concepts/identifiers"}),"Convenciones de denominaci\xf3n de objetos"),"."),(0,o.kt)("li",{parentName:"ul"},"Un datastore s\xf3lo hace referencia a las tablas con una sola llave primaria. Las siguientes tablas no est\xe1n referenciadas:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tablas sin llave primaria"),(0,o.kt)("li",{parentName:"ul"},"Tablas con llaves primarias compuestas."))),(0,o.kt)("li",{parentName:"ul"},"Los campos BLOB est\xe1n disponibles autom\xe1ticamente como atributos del tipo ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/es/Concepts/blob#blob-types"}),"objeto Blob"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ORDA mapping does not take into account:  "),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},'the "Invisible" option for tables or fields, - the virtual structure defined through ',(0,o.kt)("inlineCode",{parentName:"li"},"SET TABLE TITLES")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"SET FIELD TITLES"),', - the "Manual" or "Automatic" property of relations.'))),(0,o.kt)("h3",n({},{id:"normas-de-control-de-acceso-remoto"}),"Normas de control de acceso remoto"),(0,o.kt)("p",null,"Cuando se accede a un datastore remoto a trav\xe9s del comando ",(0,o.kt)("inlineCode",{parentName:"p"},"Abrir datastore")," o ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/gettingStarted"}),"peticiones REST"),", s\xf3lo las tablas y los campos con la propiedad ",(0,o.kt)("strong",{parentName:"p"},"Exponer como recurso REST")," est\xe1n disponibles de forma remota."),(0,o.kt)("p",null,"Esta opci\xf3n debe seleccionarse al nivel de la estructura 4D para cada tabla y cada campo que desee exponer como dataclass y atributo en el datastore:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(78438).Z,width:"279",height:"362"})),(0,o.kt)("h3",n({},{id:"actualizaci\xf3n-del-modelo-de-datos"}),"Actualizaci\xf3n del modelo de datos"),(0,o.kt)("p",null,"Toda modificaci\xf3n aplicada a la estructura de la base invalida la capa actual del modelo ORDA. Estas modificaciones incluyen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"la adici\xf3n o la eliminaci\xf3n de una tabla, de un campo, o de una relaci\xf3n"),(0,o.kt)("li",{parentName:"ul"},"el cambio de nombre de una tabla, de un campo o de una relaci\xf3n"),(0,o.kt)("li",{parentName:"ul"},"la modificaci\xf3n de una propiedad principal de un campo (tipo, \xfanico, \xedndice, autoincremento, valor null)")),(0,o.kt)("p",null,"Cuando la capa actual del modelo ORDA ha sido invalidada, es autom\xe1ticamente recargada y actualizada en llamadas posteriores del datastore local ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," en 4D y 4D Server. Tenga en cuenta que las referencias existentes a objetos ORDA, tales como entidades o selecciones de entidades, seguir\xe1n utilizando el modelo a partir del cual se han creado, hasta que se regeneren."),(0,o.kt)("p",null,"Sin embargo, la capa actualizada del modelo ORDA no est\xe1 disponible autom\xe1ticamente en los siguientes contextos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"una aplicaci\xf3n 4D remota conectada a 4D Server -- la aplicaci\xf3n remota debe reconectarse al servidor."),(0,o.kt)("li",{parentName:"ul"},"un datastore remoto abierto mediante ",(0,o.kt)("inlineCode",{parentName:"li"},"Open datastore")," o a trav\xe9s de ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/es/REST/gettingStarted"}),"llamadas REST")," -- debe abrirse una nueva sesi\xf3n.")),(0,o.kt)("h2",n({},{id:"definiciones-de-los-objetos"}),"Definiciones de los objetos"),(0,o.kt)("h3",n({},{id:"datastore"}),"Datastore"),(0,o.kt)("p",null,"El datastore es el objeto de interfaz de una base de datos. Crea una representaci\xf3n de toda la base como objeto. Un datastore est\xe1 formado por un ",(0,o.kt)("strong",{parentName:"p"},"modelo")," y ",(0,o.kt)("strong",{parentName:"p"},"datos"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El modelo contiene y describe todas las dataclasses que componen el datastore. Es independiente de la propia base de datos subyacente."),(0,o.kt)("li",{parentName:"ul"},"Los datos se refieren a la informaci\xf3n que se va a utilizar y almacenar en este modelo. Por ejemplo, los nombres, direcciones y fechas de nacimiento de los empleados son datos con los que se puede trabajar en un datastore.")),(0,o.kt)("p",null,"Cuando se maneja a trav\xe9s del c\xf3digo, el datastore es un objeto cuyas propiedades son todas las ",(0,o.kt)("a",n({parentName:"p"},{href:"#dataclass"}),"dataclasses")," que se han expuesto espec\xedficamente."),(0,o.kt)("p",null,"4D le permite gestionar los siguientes datastores:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"el datastore local, basado en la base 4D actual, devuelta por el comando ",(0,o.kt)("inlineCode",{parentName:"li"},"ds")," (el datastore principal)."),(0,o.kt)("li",{parentName:"ul"},"uno o m\xe1s datastores remotos expuestos como recursos REST en las bases 4D remotas, devueltos por el comando ",(0,o.kt)("inlineCode",{parentName:"li"},"Open datastore"),".")),(0,o.kt)("p",null,"Un datastore hace referencia s\xf3lo a una base de datos local o remota."),(0,o.kt)("p",null,"El objeto datastore en s\xed no puede ser copiado como un objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$mydatastore:=OB Copy(ds) //devuelve null\n")),(0,o.kt)("p",null,"Las propiedades del datastore son sin embargo enumerables:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contiene los nombres de todas las dataclasses\n")),(0,o.kt)("p",null,"El datastore principal (por defecto) siempre est\xe1 disponible a trav\xe9s del comando ",(0,o.kt)("inlineCode",{parentName:"p"},"ds"),", pero el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," permite hacer referencia a todo datastore remoto."),(0,o.kt)("h3",n({},{id:"dataclass"}),"Dataclass"),(0,o.kt)("p",null,"Una dataclass es el equivalente de una tabla. Se utiliza como modelo de objetos y hace referencia a todos los campos como atributos, incluidos los atributos relacionales (atributos construidos a partir de relaciones entre las dataclasses). Los atributos relacionales pueden utilizarse en las peticiones como cualquier otro atributo."),(0,o.kt)("p",null,"Todas las dataclasses de un proyecto 4D est\xe1n disponibles como propiedad del datastore ",(0,o.kt)("inlineCode",{parentName:"p"},"ds"),". Para los datastores remotos a los que se accede a trav\xe9s de ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," o ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/gettingStarted"}),"peticiones REST"),", se debe seleccionar la opci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Exponer como recurso REST")," al nivel de la estructura 4D para cada tabla expuesta que se desee exponer como dataclass en el datastore."),(0,o.kt)("p",null,"Por ejemplo, considere la siguiente tabla en la estructura 4D:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(26378).Z,width:"137",height:"188"})),(0,o.kt)("p",null,"La tabla ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," est\xe1 disponible autom\xe1ticamente como dataclass en el datastore ",(0,o.kt)("inlineCode",{parentName:"p"},"ds"),". Puede escribir:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $compClass : cs.Empresa //declara una variable objeto $compClass de la clase Company \n$compClass:=ds.Company //asigna la referencia de la dataclass Company a $compClass\n")),(0,o.kt)("p",null,"Un objeto dataclass puede contener:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"attributes"),(0,o.kt)("li",{parentName:"ul"},"atributos relacionales")),(0,o.kt)("p",null,"La dataclass ofrece una abstracci\xf3n de la base de datos f\xedsica y permite manejar un modelo de datos conceptual. El dataclass es el \xfanico medio para consultar al datastore. Una consulta se hace desde una \xfanica dataclass. Las consultas se crean en torno a los atributos y a los nombres de atributos relacionales de las dataclasses. As\xed pues, los atributos relacionales son el medio para implicar varias tablas vinculadas en una consulta."),(0,o.kt)("p",null,"El objeto dataclass mismo no puede copiarse como un objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$mydataclass:=OB Copy(ds.Employee) //devuelve null\n")),(0,o.kt)("p",null,"Las propiedades de la dataclass son sin embargo enumerables:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-code4d"}),"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contiene los nombres de todos los atributos de dataclass\n")),(0,o.kt)("h3",n({},{id:"atributo"}),"Atributo"),(0,o.kt)("p",null,"Las propiedades de dataclass son objetos atributo que describen los campos o relaciones subyacentes. Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $nameAttribute:=ds.Company.name ///referencia a un atributo de clase\n $revenuesAttribute:=ds.Company["revenues"] //forma alternativa\n')),(0,o.kt)("p",null,"Este c\xf3digo asigna a ",(0,o.kt)("inlineCode",{parentName:"p"},"$nameAttribute")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"$revenuesAttribute")," las referencias a los atributos name y revenues de la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Company"),". Esta sintaxis NO devuelve los valores mantenidos dentro del atributo, sino que devuelve referencias a los propios atributos. Para manejar los valores, es necesario pasar por ",(0,o.kt)("a",n({parentName:"p"},{href:"#entity"}),"Entidades"),"."),(0,o.kt)("p",null,"Todos los campos elegibles de una tabla est\xe1n disponibles como atributos de su ",(0,o.kt)("a",n({parentName:"p"},{href:"#dataclass"}),"dataclass")," padre. Para los datastores remotos a los que se accede a trav\xe9s de ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," o ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/gettingStarted"}),"peticiones REST"),", se debe seleccionar la opci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Exponer como recurso REST")," al nivel de la estructura 4D para cada campo que se desee exponer como atributo de dataclass."),(0,o.kt)("h4",n({},{id:"atributos-de-almacenamiento-y-relacionales"}),"Atributos de almacenamiento y relacionales"),(0,o.kt)("p",null,"Los atributos de la Dataclass son de varios tipos: almacenamiento, relatedEntity y relatedEntities. Los atributos escalares (",(0,o.kt)("em",{parentName:"p"},"es decir"),", ofrecen un \xfanico valor) soportan todos los tipos de datos est\xe1ndar 4D (entero, texto, objeto, etc.)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un ",(0,o.kt)("strong",{parentName:"li"},"atributo de almacenamiento")," equivale a un campo en la base de datos 4D y puede indexarse. Los valores asignados a un atributo de almacenamiento se almacenan como parte de la entidad cuando se guarda. Cuando se accede a un atributo de almacenamiento, su valor procede directamente del datastore. Los atributos de almacenamiento son el bloque de construcci\xf3n m\xe1s b\xe1sico de una entidad y se definen por nombre y tipo de datos."),(0,o.kt)("li",{parentName:"ul"},"Un ",(0,o.kt)("strong",{parentName:"li"},"atributo relacional"),' ofrece acceso a otras entidades. Los atributos relacionales pueden dar como resultado una entidad \xfanica (o ninguna entidad), o una selecci\xf3n de entidades (de 0 a N entidades). Los atributos relacionales se basan en las relaciones "cl\xe1sicas" en la estructura relacional para ofrecer acceso directo a una entidad o a entidades relacionadas. Los atributos relacionales est\xe1n disponibles directamente en ORDA utilizando sus nombres.')),(0,o.kt)("p",null,"Por ejemplo, considere la siguiente estructura de base de datos parcial y las propiedades relacionales:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(70263).Z,width:"690",height:"533"})),(0,o.kt)("p",null,"Todos los atributos de almacenamiento estar\xe1n disponibles autom\xe1ticamente:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'en la dataclass Project: "ID", "name", y "companyID"'),(0,o.kt)("li",{parentName:"ul"},'en la dataclasss Company: "ID", "name" y "discount"')),(0,o.kt)("p",null,"Adem\xe1s, los siguientes atributos relacionales tambi\xe9n estar\xe1n disponibles autom\xe1ticamente:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"en la dataclass Project: el atributo ",(0,o.kt)("strong",{parentName:"li"},"theClient"),', del tipo "relatedEntity"; hay como m\xe1ximo una Empresa para cada Proyecto (el cliente)'),(0,o.kt)("li",{parentName:"ul"},"en la dataclass Company: el atributo ",(0,o.kt)("strong",{parentName:"li"},"companyProjects"),', del tipo "relatedEntities"; para cada empresa existe un cierto n\xfamero de proyectos relacionados.',(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"La propiedad Manual o Autom\xe1tica de una relaci\xf3n de base de datos no tiene efecto en ORDA.")))),(0,o.kt)("p",null,"Todos los atributos de la dataclass se exponen como propiedades de la dataclass:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(71919).Z,width:"1049",height:"288"})),(0,o.kt)("p",null,"Tenga en cuenta que estos objetos describen los atributos, pero no dan acceso a los datos. La lectura o escritura de los datos se realiza a trav\xe9s de los ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/ORDA/entities#using-entity-attributes"}),"objetos entidad"),"."),(0,o.kt)("h4",n({},{id:"atributos-calculados"}),"Atributos calculados"),(0,o.kt)("p",null,"Los ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/ORDA/ordaClasses#computed-attributes"}),"atributos calculados")," se declaran utilizando una funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"get <attributeName>")," en la ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/ORDA/ordaClasses#entity-class"}),"definici\xf3n de la clase Entity"),". Su valor no se guarda, sino que se eval\xfaa cada vez que se accede a ellos. No pertenecen a la estructura subyacente de la base, sino que se construyen sobre ella y pueden utilizarse como cualquier atributo del modelo de datos."),(0,o.kt)("h3",n({},{id:"entity"}),"Entity"),(0,o.kt)("p",null,"Una entidad es el equivalente a un registro. En realidad es un objeto que hace referencia a un registro de la base de datos. Puede verse como una instancia de una ",(0,o.kt)("a",n({parentName:"p"},{href:"#dataclass"}),"dataclass"),", como un registro de la tabla correspondiente a la dataclass. Sin embargo, una entidad tambi\xe9n contiene datos correlacionados a la base de datos relacionados con el datastore."),(0,o.kt)("p",null,"La finalidad de la entidad es gestionar los datos (crear, actualizar, eliminar). Cuando se obtiene una referencia de entidad mediante una selecci\xf3n de entidad, tambi\xe9n conserva informaci\xf3n sobre la selecci\xf3n de entidad que permite la iteraci\xf3n a trav\xe9s de la selecci\xf3n."),(0,o.kt)("p",null,"El objeto entidad en s\xed no puede ser copiado como un objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $myentity:=OB Copy(ds.Employee.get(1)) //devuelve null\n")),(0,o.kt)("p",null,"Sin embargo, las propiedades de la entidad son enumerables:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contiene los nombres de todos los atributos de la entidad\n")),(0,o.kt)("h3",n({},{id:"entity-selection"}),"Entity selection"),(0,o.kt)("p",null,"Una selecci\xf3n de entidades es un objeto que contiene una o varias referencias a entidades pertenecientes a la misma dataclass. Suele crearse como resultado de una consulta o devolverse a partir de un atributo relacional. Una entity selection puede contener 0, 1 o X entidades de la dataclass -- donde X puede representar el n\xfamero total de entidades contenidas en la dataclass."),(0,o.kt)("p",null,"Ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $e : cs.EmployeeSelection //declara una variable objeto $e del tipo de clase EmployeeSelection\n$e:=ds.Employee.all() //asigna la referencia de la selecci\xf3n de entidad resultante a la variable $e\n")),(0,o.kt)("p",null,'Las entity selections pueden estar "ordenadas" o "sin ordenar" (',(0,o.kt)("a",n({parentName:"p"},{href:"#ordered-or-unordered-entity-selection"}),"ver abajo"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Las entity selections tambi\xe9n pueden ser "compartibles" o "no compartibles", dependiendo de ',(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/ORDA/entities#shareable-or-alterable-entity-selections"}),"c\xf3mo se hayan creado"),".")),(0,o.kt)("p",null,"El objeto selecci\xf3n de entidades en s\xed no puede ser copiado como un objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $myentitysel:=OB Copy(ds.Employee.all()) //devuelve null\n")),(0,o.kt)("p",null,"Las propiedades de las selecciones de entidades son sin embargo enumerables:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contiene los nombres de las propiedades de la selecci\xf3n de entidades\n  //("length", 00", "01"...)\n')),(0,o.kt)("h4",n({},{id:"entity-selections-ordenadas-o-no-ordenadas"}),"Entity selections ordenadas o no ordenadas"),(0,o.kt)("p",null,"Por razones de optimizaci\xf3n, por defecto, 4D ORDA normalmente crea selecciones de entidades no ordenadas, excepto cuando utiliza el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy( )"),' o utiliza opciones espec\xedficas. En esta documentaci\xf3n, a menos que se especifique, "selecci\xf3n de entidades" suele referirse a una "selecci\xf3n de entidades no ordenada".'),(0,o.kt)("p",null,"Las selecciones de entidades ordenadas s\xf3lo se crean cuando es necesario o cuando se solicitan espec\xedficamente mediante opciones, es decir, en los siguientes casos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"resultado de un ",(0,o.kt)("inlineCode",{parentName:"li"},"orderBy()")," sobre una selecci\xf3n (de cualquier tipo) o de un ",(0,o.kt)("inlineCode",{parentName:"li"},"orderBy()")," sobre una dataclass"),(0,o.kt)("li",{parentName:"ul"},"resultado del m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"newSelection()")," con la opci\xf3n ",(0,o.kt)("inlineCode",{parentName:"li"},"dk keep ordered"))),(0,o.kt)("p",null,"Las selecciones de entidades desordenadas se crean en los siguientes casos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"resultado de un ",(0,o.kt)("inlineCode",{parentName:"li"},"query()")," est\xe1ndar sobre una selecci\xf3n (de cualquier tipo) o de un ",(0,o.kt)("inlineCode",{parentName:"li"},"query()")," sobre una dataclass,"),(0,o.kt)("li",{parentName:"ul"},"resultado del m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"newSelection()")," sin opci\xf3n,"),(0,o.kt)("li",{parentName:"ul"},"resultado de uno de los m\xe9todos de comparaci\xf3n, sean cuales sean los tipos de selecci\xf3n de entrada: ",(0,o.kt)("inlineCode",{parentName:"li"},"or()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"and()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"minus()"),".",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Las siguientes selecciones de entidades son siempre ",(0,o.kt)("strong",{parentName:"p"},"ordenadas"),":"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"selecciones de entidades devueltas por 4D Server a un cliente remoto"),(0,o.kt)("li",{parentName:"ul"},"selecciones de entidades basadas en datastores remotos."))))),(0,o.kt)("p",null,"Tenga en cuenta que cuando una selecci\xf3n de entidades ordenada se convierte en una selecci\xf3n de entidades no ordenada, se elimina toda referencia de entidad repetida."))}p.isMDXComponent=!0},78438:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},26378:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},71919:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},94632:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},70263:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"}}]);