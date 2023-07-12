"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42388],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>m});var n=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=n.createContext({}),d=function(e){var a=n.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(o),m=t,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return o?n.createElement(b,l(l({ref:a},p),{},{components:o})):n.createElement(b,l({ref:a},p))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var d=2;d<r;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},39267:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});o(67294);var n=o(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t.apply(this,arguments)}function r(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}const l={id:"object",title:"Object"},i=void 0,s={unversionedId:"Concepts/object",id:"version-20-R2/Concepts/object",title:"Object",description:'Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos nativos de 4D se basa en el principio cl\xe1sico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notaci\xf3n JSON:',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/es/Concepts/object",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"N\xfamero (Real, Entero largo, Entero)",permalink:"/docs/es/Concepts/number"},next:{title:"Picture",permalink:"/docs/es/Concepts/picture"}},d={},p=[{value:"Instanciaci\xf3n",id:"instanciaci\xf3n",level:2},{value:"comando <code>New object</code>",id:"comando-new-object",level:3},{value:"operador <code>{}</code>",id:"operador-",level:3},{value:"Objeto est\xe1ndar o compartido",id:"objeto-est\xe1ndar-o-compartido",level:3},{value:"Principios de la sintaxis",id:"principios-de-la-sintaxis",level:2},{value:"Propiedades de los objetos",id:"propiedades-de-los-objetos",level:3},{value:"Punteros",id:"punteros",level:3},{value:"Valor Null",id:"valor-null",level:3},{value:"Valor indefinido",id:"valor-indefinido",level:3},{value:"Ejemplos",id:"ejemplos",level:2}],c={toc:p};function u(e){var{components:a}=e,o=r(e,["components"]);return(0,n.kt)("wrapper",t({},c,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos nativos de 4D se basa en el principio cl\xe1sico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notaci\xf3n JSON:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'El nombre de una propiedad es siempre un texto, por ejemplo "Name". Debe seguir ',(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/Concepts/identifiers#object-properties"}),"reglas espec\xedficas"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Un valor de propiedad puede ser del tipo siguiente:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"n\xfamero (Real, Entero, etc.)"),(0,n.kt)("li",{parentName:"ul"},"text"),(0,n.kt)("li",{parentName:"ul"},"null"),(0,n.kt)("li",{parentName:"ul"},"boolean"),(0,n.kt)("li",{parentName:"ul"},"puntero (almacenado como tal, evaluado con el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"JSON Stringify")," o al copiar),"),(0,n.kt)("li",{parentName:"ul"},"fecha (tipo fecha o cadena en formato fecha ISO)"),(0,n.kt)("li",{parentName:"ul"},"objeto(1) (los objetos pueden ser anidados en varios niveles)"),(0,n.kt)("li",{parentName:"ul"},"imagen(2)"),(0,n.kt)("li",{parentName:"ul"},"collection")))),(0,n.kt)("p",null,"(1)Los objetos ORDA como ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/ORDA/dsmapping#entity"}),"entidades")," o las ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/ORDA/dsmapping#entity-selection"}),"selecciones de entidades")," no pueden almacenarse en ",(0,n.kt)("strong",{parentName:"p"},"campos objeto"),"; sin embargo, se soportan completamente en las ",(0,n.kt)("strong",{parentName:"p"},"variables objeto")," en memoria."),(0,n.kt)("p",null,'(2)Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "',"[objeto Imagen]",'".'),(0,n.kt)("admonition",t({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Tenga en cuenta que los nombres de las propiedades distinguen entre may\xfasculas y min\xfasculas.")),(0,n.kt)("p",null,"Las variables, campos o expresiones de tipo Objeto se gestionan mediante la ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/Concepts/object#syntax-basics"}),"notaci\xf3n de objetos")," o los comandos disponibles en el tema ",(0,n.kt)("strong",{parentName:"p"},"Objetos (Lenguaje)"),". Tenga en cuenta que se pueden utilizar comandos espec\xedficos del tema ",(0,n.kt)("strong",{parentName:"p"},"B\xfasquedas"),", como ",(0,n.kt)("inlineCode",{parentName:"p"},"QUERY BY ATTRIBUTE"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"QUERY SELECTION BY ATTRIBUTE"),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"ORDER BY ATTRIBUTE")," para llevar a cabo el procesamiento de los campos objetos."),(0,n.kt)("p",null,"Cada valor de propiedad al que se accede a trav\xe9s de la notaci\xf3n de objeto se considera una expresi\xf3n. Puede utilizar estos valores siempre que se esperen expresiones 4D:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en c\xf3digo 4D, ya sea escrito en los m\xe9todos (editor de c\xf3digo) o externalizado (f\xf3rmulas, archivos de etiquetas procesados por ",(0,n.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," o el servidor web, archivos de exportaci\xf3n, documentos 4D Write Pro...),"),(0,n.kt)("li",{parentName:"ul"},"en las \xe1reas de expresiones del depurador y del explorador de ejecuci\xf3n,"),(0,n.kt)("li",{parentName:"ul"},"en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresi\xf3n, as\xed como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo o color de fuente).")),(0,n.kt)("h2",t({},{id:"instanciaci\xf3n"}),"Instanciaci\xf3n"),(0,n.kt)("p",null,"Los objetos deben haber sido instanciados, de lo contrario intentar leer o modificar sus propiedades generar\xe1 un error de sintaxis."),(0,n.kt)("p",null,"La instanciaci\xf3n de objetos puede realizarse de una de las siguientes maneras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"utilizando el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"New object")),","),(0,n.kt)("li",{parentName:"ul"},"utilizando el operador ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"Varios comandos y funciones 4D devuelven objetos, por ejemplo ",(0,n.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get database measures"))," o ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/API/FileClass#file"}),(0,n.kt)("inlineCode",{parentName:"a"},"Archivo")),". En este caso, no es necesario instanciar expl\xedcitamente el objeto, el lenguaje 4D lo hace por usted."),(0,n.kt)("p",null,":::"),(0,n.kt)("h3",t({},{id:"comando-new-object"}),"comando ",(0,n.kt)("inlineCode",{parentName:"h3"},"New object")),(0,n.kt)("p",null,"El comando ",(0,n.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"New object"))," crea un nuevo objeto vac\xedo o precargado y devuelve su referencia."),(0,n.kt)("p",null,"Ejemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' var $obVar : Object //declaraci\xf3n de una variable 4D de tipo objeto\n $obVar:=New object //instanciaci\xf3n de un objeto y asignaci\xf3n a la variable 4D\n\n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instanciaci\xf3n y asignaci\xf3n de un objeto pre-rellenado\n')),(0,n.kt)("h3",t({},{id:"operador-"}),"operador ",(0,n.kt)("inlineCode",{parentName:"h3"},"{}")),(0,n.kt)("p",null,"El operador ",(0,n.kt)("inlineCode",{parentName:"p"},"{}")," permite crear un ",(0,n.kt)("strong",{parentName:"p"},"objeto literal"),". Un literal de objeto es una lista separada por semicolumnas de cero o m\xe1s pares de nombres de propiedades y valores asociados de un objeto, encerrados entre llaves (",(0,n.kt)("inlineCode",{parentName:"p"},"{}"),"). La sintaxis literal de objeto crea objetos vac\xedos o llenos."),(0,n.kt)("p",null,"Dado que cualquier valor de propiedad se considera una expresi\xf3n, puede crear subobjetos utilizando ",(0,n.kt)("inlineCode",{parentName:"p"},"{}")," en los valores de propiedad.  Tambi\xe9n puede crear y hacer referencia a los ",(0,n.kt)("strong",{parentName:"p"},"literales de colecci\xf3n"),"."),(0,n.kt)("p",null,"Ejemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' var $o ; $o2 ; $o3 : Objeto //declaraci\xf3n de variables objeto\n $o := {} // instanciaci\xf3n de un objeto vac\xedo \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instanciaci\xf3n de un objeto\n        // con propiedades {"a": "foo", "b":42, "c":{}, "d":false})\n\n    // mismas propiedades utilizando variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}\n\n')),(0,n.kt)("p",null,"Puede mezclar las sintaxis ",(0,n.kt)("inlineCode",{parentName:"p"},"New object")," y literal:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'$o:={\\\n    ob1: {age: 42}; \\\n    ob2: New object("message"; "Hello"); \\\n    form1: Formula(return This.ob1.age+10); \\\n    form2 : Formula(ALERT($1)); \\\n    col: [1; 2; 3; 4; 5; 6]\\\n    }\n\n$o.form1() //52\n$o.form2($o.ob2.message) // muestra Hello\n$col:=$o.col[5] //6\n')),(0,n.kt)("h3",t({},{id:"objeto-est\xe1ndar-o-compartido"}),"Objeto est\xe1ndar o compartido"),(0,n.kt)("p",null,"Puede crear dos tipos de objetos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"objetos regulares (no compartidos), utilizando el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"New object"))," o la sintaxis literal de objeto (",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"). Estos objetos pueden ser editados sin ning\xfan control de acceso espec\xedfico, pero no pueden ser compartidos entre procesos."),(0,n.kt)("li",{parentName:"ul"},"objetos compartidos, utilizando el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"New shared object")),". Estos objetos pueden ser compartidos entre procesos, incluidos los hilos apropiativos. El acceso a estos objetos se controla mediante estructuras ",(0,n.kt)("inlineCode",{parentName:"li"},"Use...End use"),". Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/Concepts/shared"}),"Objetos y colecciones compartidos"),".")),(0,n.kt)("h2",t({},{id:"principios-de-la-sintaxis"}),"Principios de la sintaxis"),(0,n.kt)("p",null,"La notaci\xf3n de objetos puede utilizarse para acceder a los valores de las propiedades de objetos a trav\xe9s de una cadena de tokens."),(0,n.kt)("h3",t({},{id:"propiedades-de-los-objetos"}),"Propiedades de los objetos"),(0,n.kt)("p",null,"Con la notaci\xf3n de objetos, se puede acceder a las propiedades de los objetos de dos maneras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'using a "dot" symbol: > object.propertyName')),(0,n.kt)("p",null,"Ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'     employee.name:="Smith"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"using a string within square brackets: > object",'["propertyName"]')),(0,n.kt)("p",null,"Ejemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'     $vName:=employee["name"]\n     //o tambi\xe9n:\n     $property:="name"\n     $vName:=employee[$property]\n\n')),(0,n.kt)("p",null,"Como el valor de una propiedad de objeto puede ser un objeto o una colecci\xf3n, la notaci\xf3n objeto acepta una secuencia de s\xedmbolos para acceder a subpropiedades, por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $vAge:=employee.children[2].age\n")),(0,n.kt)("p",null,"La notaci\xf3n de objetos est\xe1 disponible en cualquier elemento del lenguaje que pueda contener o devolver un objeto, es decir:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"con los ",(0,n.kt)("strong",{parentName:"li"},"Objetos")," mismos (almacenados en variables, campos, propiedades de objetos, arrays de objetos o elementos de colecciones). Ejemplos:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     $age:=$myObjVar.employee.age //variable\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propiedad de un objeto\n     $pop:=$aObjCountries{2}.population //array de objetos\n     $val:=$myCollection[3].subvalue //elemento de colecci\xf3n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"comandos 4D")," que devuelven objetos. Ejemplo:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     $measures:=Get database measures. DB.tables\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"M\xe9todos proyecto")," que devuelven objetos. Ejemplo:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Collections")," Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     myColl.length //tama\xf1o de la colecci\xf3n\n")),(0,n.kt)("h3",t({},{id:"punteros"}),"Punteros"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota preliminar:")," dado que los objetos se pasan siempre por referencia, no suele ser necesario utilizar punteros. Al pasar el objeto, internamente 4D utiliza autom\xe1ticamente un mecanismo similar a un puntero, minimizando la necesidad de memoria y permitiendo modificar el par\xe1metro y devolver las modificaciones. Como resultado, no es necesario utilizar punteros. Sin embargo, en caso de querer utilizar punteros, se puede acceder a los valores de las propiedades mediante punteros."),(0,n.kt)("p",null,'El uso de la notaci\xf3n de objetos con punteros es muy similar al uso de la notaci\xf3n de objetos directamente con objetos, excepto que el s\xedmbolo "punto" debe omitirse.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Acceso directo:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"pointerOnObject->propertyName"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Acceso por nombre:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"pointerOnObject->",'["propertyName"]')))),(0,n.kt)("p",null,"Ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n")),(0,n.kt)("h3",t({},{id:"valor-null"}),"Valor Null"),(0,n.kt)("p",null,"Cuando se utiliza la notaci\xf3n de objetos, se soporta el valor ",(0,n.kt)("strong",{parentName:"p"},"null")," con el comando ",(0,n.kt)("strong",{parentName:"p"},"Null"),". Este comando puede utilizarse para asignar o comparar el valor nulo a propiedades de objetos o a elementos de colecciones, por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," myObject.address.zip:=Null\n If(myColl[2]=Null)\n")),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/Concepts/null-undefined"}),"Null e indefinido"),"."),(0,n.kt)("h3",t({},{id:"valor-indefinido"}),"Valor indefinido"),(0,n.kt)("p",null,"La evaluaci\xf3n de una propiedad de un objeto puede producir a veces un valor indefinido. Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generar\xe1 errores. Esto no ocurre en los siguientes casos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Leer una propiedad de un objeto o valor indefinido devuelve indefinido; asignar un valor indefinido a variables (excepto arrays) tiene el mismo efecto que llamar a ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page89.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," con ellas:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o. es indefinido (no hay error) y la asignaci\xf3n de este valor borra la variable\n      //$val=0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La lectura de la propiedad ",(0,n.kt)("strong",{parentName:"li"},"length")," de una colecci\xf3n indefinida produce 0:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     var $c : Collection //variable creada pero sin colecci\xf3n definida\n     $size:=$c.length //$size = 0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Un valor indefinido pasado como par\xe1metro a un m\xe9todo proyecto se convierte autom\xe1ticamente en 0 o "" seg\xfan el tipo de par\xe1metro declarado.')),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     mymethod($o.a) //Pasar un par\xe1metro indefinido\n\n      //En el m\xe9todo mymethod\n     #Declare ($myText : Text) //El tipo de par\xe1metro es texto\n      // $myText contiene ""\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Una expresi\xf3n de condici\xf3n se convierte autom\xe1ticamente en falsa cuando se eval\xfaa a indefinido con las palabras clave If y Case of:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La asignaci\xf3n de un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor, dependiendo de su tipo:"),(0,n.kt)("li",{parentName:"ul"},"Objeto, colecci\xf3n, puntero: Null"),(0,n.kt)("li",{parentName:"ul"},"Imagen: imagen vac\xeda"),(0,n.kt)("li",{parentName:"ul"},"Booleano: False"),(0,n.kt)("li",{parentName:"ul"},'Cadena: ""'),(0,n.kt)("li",{parentName:"ul"},"N\xfamero: 0"),(0,n.kt)("li",{parentName:"ul"},'Fecha: !00-00-00! Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""'),(0,n.kt)("li",{parentName:"ul"},"Hora: 0 (n\xfamero de ms)"),(0,n.kt)("li",{parentName:"ul"},"Indefinido, Null: sin cambios")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La asignaci\xf3n de un valor indefinido a una propiedad de objeto no existente no hace nada.")),(0,n.kt)("p",null,"Cuando se esperan expresiones de un tipo determinado en su c\xf3digo 4D, puede asegurarse de que tienen el tipo correcto incluso cuando se eval\xfaan como indefinidas, rode\xe1ndolas con el comando de transformaci\xf3n 4D apropiado: ",(0,n.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Num"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Bool"),". Estos comandos devuelven un valor vac\xedo del tipo especificado cuando la expresi\xf3n se eval\xfaa como indefinida. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $myString:=Lowercase(String($o.a.b)) //asegurarse de obtener un valor de cadena aunque sea indefinido\n  //para evitar errores en el c\xf3digo\n")),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/Concepts/null-undefined"}),"Null e indefinido")),(0,n.kt)("h2",t({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("p",null,"La utilizaci\xf3n de la notaci\xf3n de objetos simplifica el c\xf3digo 4D en el manejo de los mismos. Sin embargo, tenga en cuenta que la notaci\xf3n basada en comandos sigue siendo totalmente soportada."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Escritura y lectura de propiedades de objetos (este ejemplo compara la notaci\xf3n de objetos y la notaci\xf3n de comandos):")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'  // Utilizando la notaci\xf3n objeto\n var $myObj : Object //declara un objeto variable 4D \n $myObj:={} //crea un literal de objeto y lo asigna a la variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Utilizando la notaci\xf3n de comando\n var $myObj2 : Object //declara un objeto variable 4D\n OB SET($myObj2; "age";42) //crea un objeto y a\xf1ade la propiedad age\n $age:=OB Get($myObj2; "age") //42\n\n  // Por supuesto, ambas notaciones pueden mezclarse\n var $myObj3 : Object\n OB SET($myObj3; "age";10)\n $age:=$myObj3.age //10\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creaci\xf3n de propiedades y asignaci\xf3n de valores, incluyendo objetos:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //crea la propiedad city y establece su valor como"London"\n $Emp.city:="Paris" //modifica la propiedad city\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //crea la propiedad phone y establece su valor para un objeto\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Obtener un valor en un subobjeto es muy sencillo utilizando la notaci\xf3n de objetos:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Puede acceder a las propiedades como cadenas utilizando el operador ","[ ]")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $Emp["city"]:="Berlin" //modifica la propiedad city\n  //esto puede ser \xfatil para crear propiedades a trav\xe9s de variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // crea 4 propiedades vac\xedas "address1...address4" en el objeto $Emp\n')))}u.isMDXComponent=!0}}]);