"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9701],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var o=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),c=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=c(e.components);return o.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=t,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?o.createElement(b,r(r({ref:a},d),{},{components:n})):o.createElement(b,r({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99826:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});n(67294);var o=n(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t.apply(this,arguments)}function l(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const r={id:"components",title:"Componentes"},s=void 0,i={unversionedId:"Concepts/components",id:"version-18/Concepts/components",title:"Componentes",description:"Un componente 4D es un conjunto de m\xe9todos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes bases. Por ejemplo, puede desarrollar un componente 4D de correo electr\xf3nico que gestione todos los aspectos del env\xedo, la recepci\xf3n y el almacenamiento de correos electr\xf3nicos en bases 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/components.md",sourceDirName:"Concepts",slug:"/Concepts/components",permalink:"/docs/es/18/Concepts/components",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcomponents.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"components",title:"Componentes"},sidebar:"docs",previous:{title:"Modos interpretado y compilado",permalink:"/docs/es/18/Concepts/interpreted-compiled"},next:{title:"Plug-ins",permalink:"/docs/es/18/Concepts/plug-ins"}},c={},d=[{value:"Definiciones",id:"definiciones",level:2},{value:"Protecci\xf3n de los componentes: compilaci\xf3n",id:"protecci\xf3n-de-los-componentes-compilaci\xf3n",level:3},{value:"Compartir m\xe9todos proyecto",id:"compartir-m\xe9todos-proyecto",level:2},{value:"Paso de variables",id:"paso-de-variables",level:2},{value:"Acceso a las tablas de la base local",id:"acceso-a-las-tablas-de-la-base-local",level:2},{value:"Alcance de los comandos del lenguaje",id:"alcance-de-los-comandos-del-lenguaje",level:2},{value:"Comandos no utilizables",id:"comandos-no-utilizables",level:3},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Utilizaci\xf3n de formularios",id:"utilizaci\xf3n-de-formularios",level:2},{value:"Uso de tablas y campos",id:"uso-de-tablas-y-campos",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Utilizaci\xf3n de recursos",id:"utilizaci\xf3n-de-recursos",level:2},{value:"Ayuda en l\xednea para los componentes",id:"ayuda-en-l\xednea-para-los-componentes",level:2}],p={toc:d};function u(e){var{components:a}=e,r=l(e,["components"]);return(0,o.kt)("wrapper",t({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un componente 4D es un conjunto de m\xe9todos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes bases. Por ejemplo, puede desarrollar un componente 4D de correo electr\xf3nico que gestione todos los aspectos del env\xedo, la recepci\xf3n y el almacenamiento de correos electr\xf3nicos en bases 4D."),(0,o.kt)("p",null,"La creaci\xf3n e instalaci\xf3n de componentes 4D se realiza directamente desde 4D. B\xe1sicamente, los componentes se gestionan como ",(0,o.kt)("a",t({parentName:"p"},{href:"/docs/es/18/Concepts/plug-ins"}),"plug-ins")," seg\xfan los siguientes principios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un componente consiste en un archivo de estructura cl\xe1sica (compilado o no) con la arquitectura est\xe1ndar o en forma de paquete (ver Extensi\xf3n .4dbase)."),(0,o.kt)("li",{parentName:"ul"},'Para instalar un componente en una base, basta con copiarlo en la carpeta "Componentes" de la base, situada junto al archivo de estructura o junto a la aplicaci\xf3n 4D ejecutable.'),(0,o.kt)("li",{parentName:"ul"},"Un componente puede llamar a la mayor\xeda de los elementos de 4D: m\xe9todos proyecto, formularios proyecto, barras de men\xfa, listas de selecci\xf3n, im\xe1genes de la librer\xeda, etc. No puede llamar a los m\xe9todos base ni a los triggers."),(0,o.kt)("li",{parentName:"ul"},"No se pueden utilizar tablas o archivos de datos est\xe1ndar en los componentes 4D. Sin embargo, un componente puede crear y/o utilizar tablas, campos y archivos de datos utilizando mecanismos de bases externas. Se trata de bases 4D independientes con las que se trabaja utilizando comandos SQL.")),(0,o.kt)("h2",t({},{id:"definiciones"}),"Definiciones"),(0,o.kt)("p",null,"Los mecanismos de gesti\xf3n de componentes en 4D requieren la aplicaci\xf3n de los siguientes t\xe9rminos y conceptos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base matriz"),": base de datos 4D utilizada para desarrollar el componente. La base matriz es una base est\xe1ndar sin atributos espec\xedficos. Una base matricial forma un \xfanico componente. La base matriz debe copiarse, compilada o no, en la carpeta Components de la aplicaci\xf3n 4D o en la base que utilizar\xe1 el componente (base local)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base local"),": base en la que se instala y utiliza un componente."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Componente"),": base matricial, compilada o no, copiada en la carpeta Components de la aplicaci\xf3n 4D o de la base local y cuyo contenido se utiliza en las bases locales.")),(0,o.kt)("p",null,'Hay que tener en cuenta que una base puede ser a la vez "matriz" y "local", es decir, que una base matriz puede utilizar a su vez uno o varios componentes. Sin embargo, un componente no puede utilizar "subcomponentes" por s\xed mismo.'),(0,o.kt)("h3",t({},{id:"protecci\xf3n-de-los-componentes-compilaci\xf3n"}),"Protecci\xf3n de los componentes: compilaci\xf3n"),(0,o.kt)("p",null,"Por defecto, todos los m\xe9todos proyecto de una base matriz instalada como componente son potencialmente visibles desde la base local. En particular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los m\xe9todos proyecto compartido se encuentran en la P\xe1gina M\xe9todos del Explorador y pueden ser llamados en los m\xe9todos de la base local. Su contenido puede ser seleccionado y copiado en el \xe1rea de vista previa del Explorador. Tambi\xe9n se pueden ver en el depurador. Sin embargo, no es posible abrirlos en el editor de m\xe9todos ni modificarlos."),(0,o.kt)("li",{parentName:"ul"},"Los otros m\xe9todos proyecto de la base matriz no aparecen en el Explorador, pero tambi\xe9n pueden verse en el depurador de la base local.")),(0,o.kt)("p",null,"Para proteger eficazmente los m\xe9todos proyecto de un componente, basta con compilar la base matriz y entregarla en forma de archivo .4dc (base compilada que no contiene el c\xf3digo interpretado). Cuando se instala una base matricial compilada como componente:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los m\xe9todos proyecto compartidos se muestran en la P\xe1gina M\xe9todos del Explorador y pueden ser llamados en los m\xe9todos de la base local. Sin embargo, su contenido no aparecer\xe1 en el \xe1rea de vista previa ni en el depurador."),(0,o.kt)("li",{parentName:"ul"},"Los otros m\xe9todos proyecto de la base matriz nunca aparecer\xe1n.")),(0,o.kt)("h2",t({},{id:"compartir-m\xe9todos-proyecto"}),"Compartir m\xe9todos proyecto"),(0,o.kt)("p",null,"Todos los m\xe9todos proyecto de una base matricial son por definici\xf3n incluidos en el componente (la base es el componente), lo que significa que pueden ser llamados y ejecutados por el componente."),(0,o.kt)("p",null,"Por otro lado, por defecto estos m\xe9todos proyecto no ser\xe1n visibles, ni podr\xe1n ser llamados por la base local. En la base matriz, debe designar expl\xedcitamente los m\xe9todos que desea compartir con la base local. Estos m\xe9todos proyecto se pueden llamar en el c\xf3digo de la base local (pero no se pueden modificar en el editor de m\xe9todos de la base local). Estos m\xe9todos forman los ",(0,o.kt)("strong",{parentName:"p"},"puntos de entrada")," en el componente."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota:")," por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar m\xe9todos proyecto que pertenezcan a la base local. En algunos casos, puede ser necesario permitir que un componente acceda a los m\xe9todos proyecto de su base local. Para ello, debe designar expl\xedcitamente los m\xe9todos proyecto de la base local que desea hacer accesibles a los componentes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(39592).Z,width:"592",height:"146"})),(0,o.kt)("h2",t({},{id:"paso-de-variables"}),"Paso de variables"),(0,o.kt)("p",null,"Las variables locales, proceso e interproceso no se comparten entre los componentes y las bases locales. La \xfanica forma de acceder a las variables del componente desde la base local y viceversa es utilizando punteros."),(0,o.kt)("p",null,"Ejemplo utilizando un array:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"//In the host database: ARRAY INTEGER(MyArray;10)\n     AMethod(->MyArray)\n\n//In the component, the AMethod project method contains:\n     APPEND TO ARRAY($1->;2)\n")),(0,o.kt)("p",null,"Ejemplos utilizando variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_TEXT(myvariable)\n component_method1(->myvariable)\n C_POINTER($p)\n $p:=component_method2(...)\n")),(0,o.kt)("p",null,"Cuando se utilizan punteros para que los componentes y la base local se comuniquen, hay que tener en cuenta las siguientes particularidades:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"El comando ",(0,o.kt)("inlineCode",{parentName:"p"},"Get pointer")," no devolver\xe1 un puntero a una variable de la base local si se llama desde un componente y viceversa.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"La arquitectura de componentes permite la coexistencia, dentro de la misma base interpretada, de componentes interpretados y compilados (a la inversa, en una base compilada s\xf3lo pueden utilizarse componentes compilados). Para utilizar punteros en este caso, debe respetar el siguiente principio: el int\xe9rprete puede desanclar un puntero construido en modo compilado; sin embargo, en modo compilado, no puede desanclar un puntero construido en modo interpretado. In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Si el componente C define la variable ",(0,o.kt)("inlineCode",{parentName:"p"},"myCvar"),", el componente I puede acceder al valor de esta variable utilizando el puntero ",(0,o.kt)("inlineCode",{parentName:"p"},"->myCvar"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Si el componente C define la variable ",(0,o.kt)("inlineCode",{parentName:"p"},"myIvar"),", el componente C no puede acceder a esta variable utilizando el puntero ",(0,o.kt)("inlineCode",{parentName:"p"},"->myIvar"),". Esta sintaxis provoca un error de ejecuci\xf3n.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"La comparaci\xf3n de punteros utilizando el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"RESOLVE POINTER")," no se recomienda con los componentes, ya que el principio de partici\xf3n de variables permite la coexistencia de variables con el mismo nombre pero con contenidos radicalmente diferentes en un componente y en la base local (u otro componente). El tipo de la variable puede incluso ser diferente en ambos contextos. Si los punteros ",(0,o.kt)("inlineCode",{parentName:"p"},"myptr1")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"myptr2")," apuntan cada uno a una variable, la siguiente comparaci\xf3n producir\xe1 un resultado incorrecto:"))),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)\n     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)\n     If(vVarName1=vVarName2)\n      //Esta prueba devuelve True aunque las variables sean diferentes\n")),(0,o.kt)("p",null,"En este caso, es necesario utilizar la comparaci\xf3n de punteros:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"     If(myptr1=myptr2) //Esta prueba devuelve False\n")),(0,o.kt)("h2",t({},{id:"acceso-a-las-tablas-de-la-base-local"}),"Acceso a las tablas de la base local"),(0,o.kt)("p",null,"Aunque los componentes no pueden utilizar tablas, los punteros pueden permitir que las bases locales y los componentes se comuniquen entre s\xed. Por ejemplo, este es un m\xe9todo que podr\xeda ser llamado desde un componente:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// llamar a un m\xe9todo componente\nmethCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")\n')),(0,o.kt)("p",null,"Dentro del componente, el c\xf3digo del m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"methCreateRec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"C_POINTER($1) //Puntero en una tabla de la base local\nC_POINTER($2) //Indicador en un campo de la base local\nC_TEXT($3) // Valor a insertar\n\n$tablepointer:=$1\n$fieldpointer:=$2\nCREATE RECORD($tablepointer->)\n\n$fieldpointer->:=$3\nSAVE RECORD($tablepointer->)\n")),(0,o.kt)("h2",t({},{id:"alcance-de-los-comandos-del-lenguaje"}),"Alcance de los comandos del lenguaje"),(0,o.kt)("p",null,"A excepci\xf3n de los ",(0,o.kt)("a",t({parentName:"p"},{href:"#comandos-inutilizables"}),"comandos no utilizables"),", un componente puede utilizar cualquier comando del lenguaje 4D."),(0,o.kt)("p",null,"Cuando se llaman comandos desde un componente, se ejecutan en el contexto del componente, excepto el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD"),' que utiliza el contexto del m\xe9todo especificado por el comando. Tambi\xe9n hay que tener en cuenta que los comandos de lectura del tema "Usuarios y grupos" se pueden utilizar desde un componente, pero leer\xe1n los usuarios y grupos de la base local (un componente no tiene sus propios usuarios y grupos).'),(0,o.kt)("p",null,"Los comandos ",(0,o.kt)("inlineCode",{parentName:"p"},"SET DATABASE PARAMETER")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"Get database parameter")," son una excepci\xf3n: su alcance es global a la base. Cuando estos comandos se llaman desde un componente, se aplican a la base local."),(0,o.kt)("p",null,"Adem\xe1s, se han especificado medidas espec\xedficas para los comandos ",(0,o.kt)("inlineCode",{parentName:"p"},"Structure file")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"Get 4D folder")," cuando se utilizan en el marco de los componentes."),(0,o.kt)("p",null,"El comando ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPONENT LIST")," puede utilizarse para obtener la lista de componentes que carga la base local."),(0,o.kt)("h3",t({},{id:"comandos-no-utilizables"}),"Comandos no utilizables"),(0,o.kt)("p",null,'Los siguientes comandos no son compatibles para su uso dentro de un componente porque modifican el archivo de estructura - que est\xe1 abierto en s\xf3lo lectura. Su ejecuci\xf3n en un componente generar\xe1 el error -10511, "El comando NomComando no puede ser llamado desde un componente":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ON EVENT CALL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Method called on event")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SET PICTURE TO LIBRARY")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REMOVE PICTURE FROM LIBRARY")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SAVE LIST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ARRAY TO LIST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EDIT FORM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CREATE USER FORM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DELETE USER FORM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CHANGE PASSWORD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EDIT ACCESS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Set group properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Set user properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DELETE USER")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CHANGE LICENSES")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BLOB TO USERS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SET PLUGIN ACCESS"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notas:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El comando ",(0,o.kt)("inlineCode",{parentName:"li"},"Current form table")," devuelve ",(0,o.kt)("inlineCode",{parentName:"li"},"Nil")," cuando se llama en el contexto de un formulario proyecto. Por consiguiente, no puede utilizarse en un componente."),(0,o.kt)("li",{parentName:"ul"},"Los comandos SQL de definici\xf3n de datos (",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE TABLE"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"DROP TABLE"),", etc.) no pueden utilizarse en la base del componente. Sin embargo, se soportan con bases de datos externas (ver el comando SQL ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE"),").")),(0,o.kt)("h2",t({},{id:"gesti\xf3n-de-errores"}),"Gesti\xf3n de errores"),(0,o.kt)("p",null,"Un ",(0,o.kt)("a",t({parentName:"p"},{href:"/docs/es/18/Concepts/error-handling"}),"m\xe9todo de gesti\xf3n de errores")," instalado por el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," s\xf3lo se aplica a la base en ejecuci\xf3n. En el caso de un error generado por un componente, no se llama al m\xe9todo de gesti\xf3n de errores ",(0,o.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," de la base local, y viceversa."),(0,o.kt)("h2",t({},{id:"utilizaci\xf3n-de-formularios"}),"Utilizaci\xf3n de formularios"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'S\xf3lo los "formularios de proyecto" (formularios que no est\xe1n asociados a ninguna tabla espec\xedfica) pueden utilizarse en un componente. Only \u201cproject forms\u201d (forms that are not associated with any specific table) can be used in a component.'),(0,o.kt)("li",{parentName:"ul"},"Un componente puede llamar a formularios tabla de la base local. Tenga en cuenta que en este caso es necesario utilizar punteros en lugar de nombres de tablas entre par\xe9ntesis [] para especificar los formularios en el c\xf3digo del componente.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota:")," si un componente utiliza el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD RECORD"),", se mostrar\xe1 el formulario de entrada actual de la base local, en el contexto de \xe9sta. Por consiguiente, si el formulario incluye variables, el componente no tendr\xe1 acceso a ellas."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Puede publicar formularios de componentes como subformularios en las bases locales. Esto significa que puede, m\xe1s concretamente, desarrollar componentes que ofrezcan objetos gr\xe1ficos. Por ejemplo, los Widgets que ofrece 4D se basan en el uso de subformularios en los componentes.")),(0,o.kt)("h2",t({},{id:"uso-de-tablas-y-campos"}),"Uso de tablas y campos"),(0,o.kt)("p",null,"Un componente no puede utilizar las tablas y campos definidos en la estructura 4D de la base matriz. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos seg\xfan sus necesidades. Puede crear y gestionar bases externas utilizando SQL. However, you can create and use external databases, and then use their tables and fields according to your needs. Utilizar una base externa significa designar temporalmente esta base como base actual, es decir, como la base de destino para las consultas SQL ejecutadas por 4D. Las bases externas se crean con el comando SQL ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE"),"."),(0,o.kt)("h3",t({},{id:"ejemplo"}),"Ejemplo"),(0,o.kt)("p",null,"El siguiente c\xf3digo se incluye en un componente y realiza tres acciones b\xe1sicas con una base de datos externa:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creaci\xf3n de la base de datos externa si a\xfan no existe,"),(0,o.kt)("li",{parentName:"ul"},"a\xf1ade datos a la base de datos externa,"),(0,o.kt)("li",{parentName:"ul"},"lectura de datos desde la base de datos externa.")),(0,o.kt)("p",null,"Creaci\xf3n de la base de datos externa:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) almacena los datos en un directorio autorizado\n Begin SQL\n        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];\n        USE DATABASE DATAFILE :[<>MyDatabase];\n        CREATE TABLE IF NOT EXISTS KEEPIT\n        (\n        ID INT32 PRIMARY KEY,\n        kind VARCHAR,\n        name VARCHAR,\n        code TEXT,\n        sort_order INT32\n        );\n\n        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n')),(0,o.kt)("p",null,"Escritura en la base de datos externa:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $Ptr_1:=$2 // recupera datos de la base local a trav\xe9s de punteros\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n Begin SQL\n\n        USE DATABASE DATAFILE :[<>MyDatabase];\n\n        INSERT INTO KEEPIT\n        (ID, kind, name, code, sort_order)\n        VALUES\n        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);\n\n        USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,o.kt)("p",null,"Lectura en una base de datos externa:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $Ptr_1:=$2 // accede a los datos de la base local a trav\xe9s de punteros\n $Ptr_2:=$3\n $Ptr_3:=$4\n $Ptr_4:=$5\n $Ptr_5:=$6\n\n Begin SQL\n\n    USE DATABASE DATAFILE :[<>MyDatabase];\n\n    SELECT ALL ID, kind, name, code, sort_order\n    FROM KEEPIT\n    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;\n\n    USE DATABASE SQL_INTERNAL;\n\n End SQL\n")),(0,o.kt)("h2",t({},{id:"utilizaci\xf3n-de-recursos"}),"Utilizaci\xf3n de recursos"),(0,o.kt)("p",null,"Los componentes pueden utilizar recursos. De acuerdo con el principio de gesti\xf3n de recursos, si el componente es de arquitectura .4dbase (arquitectura recomendada), la carpeta Resources debe colocarse dentro de esta carpeta."),(0,o.kt)("p",null,"Los mecanismos autom\xe1ticos son operacionales: los archivos XLIFF encontrados en la carpeta Resources de un componente ser\xe1n cargados por este componente."),(0,o.kt)("p",null,'En una base de datos local que contiene uno o m\xe1s componentes, cada componente, as\xed como las bases de datos locales, tiene su propia "cadena de recursos." Los recursos est\xe1n divididos entre las diferentes bases de datos: no es posible acceder a los recursos del componente A desde el componente B o la base de datos local.'),(0,o.kt)("h2",t({},{id:"ayuda-en-l\xednea-para-los-componentes"}),"Ayuda en l\xednea para los componentes"),(0,o.kt)("p",null,"Se ha implementado un mecanismo espec\xedfico para que los desarrolladores puedan a\xf1adir ayuda en l\xednea a sus componentes. El principio es el mismo que el previsto para las bases de datos 4D:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La ayuda del componente debe suministrarse como un archivo con el sufijo .htm, .html o (s\xf3lo en Windows) .chm,"),(0,o.kt)("li",{parentName:"ul"},"El archivo de ayuda debe colocarse junto al archivo de estructura del componente y tener el mismo nombre que el archivo de estructura,"),(0,o.kt)("li",{parentName:"ul"},'Este archivo se carga autom\xe1ticamente en el men\xfa de ayuda de la aplicaci\xf3n con el t\xedtulo "Ayuda para..." seguido del nombre del archivo de ayuda.')))}u.isMDXComponent=!0},39592:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png"}}]);