"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11335],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43023:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var t=n(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"interpreted-compiled",title:"Modos interpretado y compilado"},l=void 0,p={unversionedId:"Concepts/interpreted-compiled",id:"version-20-R2/Concepts/interpreted-compiled",title:"Modos interpretado y compilado",description:"Las aplicaciones 4D pueden funcionar en modo interpretado o compilado:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/es/Concepts/interpreted-compiled",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"interpreted-compiled",title:"Modos interpretado y compilado"},sidebar:"docs",previous:{title:"Gesti\xf3n de errores",permalink:"/docs/es/Concepts/error-handling"},next:{title:"Componentes",permalink:"/docs/es/Concepts/components"}},c={},d=[{value:"Diferencias entre el c\xf3digo interpretado y el compilado",id:"diferencias-entre-el-c\xf3digo-interpretado-y-el-compilado",level:2},{value:"Utilizar las directivas del compilador con el int\xe9rprete",id:"utilizar-las-directivas-del-compilador-con-el-int\xe9rprete",level:2},{value:"Utilizaci\xf3n de punteros para evitar la reescritura",id:"utilizaci\xf3n-de-punteros-para-evitar-la-reescritura",level:2}],s={toc:d};function u(e){var{components:a}=e,n=o(e,["components"]);return(0,t.kt)("wrapper",r({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Las aplicaciones 4D pueden funcionar en modo ",(0,t.kt)("strong",{parentName:"p"},"interpretado")," o ",(0,t.kt)("strong",{parentName:"p"},"compilado"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"en modo interpretado, las declaraciones se leen y se traducen en lenguaje m\xe1quina en el momento de su ejecuci\xf3n. Puede a\xf1adir o modificar el c\xf3digo siempre que lo necesite, la aplicaci\xf3n se actualiza autom\xe1ticamente."),(0,t.kt)("li",{parentName:"ul"},"en modo compilado, todos los m\xe9todos se leen y traducen una vez, en el paso de compilaci\xf3n. Despu\xe9s, la aplicaci\xf3n s\xf3lo contiene instrucciones a nivel de ensamblaje, ya no es posible editar el c\xf3digo.")),(0,t.kt)("p",null,"Las ventajas de la compilaci\xf3n son:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Velocidad"),": su base aplicaci\xf3n se ejecuta de 3 a 1.000 veces m\xe1s r\xe1pido."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Verificaci\xf3n del c\xf3digo"),": su aplicaci\xf3n se analiza para comprobar la consistencia del c\xf3digo. Se detectan tanto los conflictos l\xf3gicos como los sint\xe1cticos."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Protecci\xf3n:"),": una vez compilada su aplicaci\xf3n, puede eliminar el c\xf3digo interpretado. Entonces, la aplicaci\xf3n compilada es funcionalmente id\xe9ntica a la original, excepto que la estructura y los m\xe9todos no pueden ser vistos o modificados, deliberada o inadvertidamente."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Aplicaciones independientes con doble clic"),": las aplicaciones compiladas tambi\xe9n pueden transformarse en aplicaciones aut\xf3nomas con su propio icono."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Modo apropiativo"),": s\xf3lo se puede ejecutar c\xf3digo compilado en procesos apropiativos.")),(0,t.kt)("h2",r({},{id:"diferencias-entre-el-c\xf3digo-interpretado-y-el-compilado"}),"Diferencias entre el c\xf3digo interpretado y el compilado"),(0,t.kt)("p",null,"Aunque la aplicaci\xf3n funcionar\xe1 de la misma manera en modo interpretado y compilado, hay algunas diferencias que hay que conocer cuando se escribe c\xf3digo que ser\xe1 compilado. El int\xe9rprete de 4D suele ser m\xe1s flexible que el compilador."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Compilado"),(0,t.kt)("th",r({parentName:"tr"},{align:null}),"Interpretado"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"No se puede tener un m\xe9todo con el mismo nombre que una variable."),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"No se genera ning\xfan error, pero se da prioridad al m\xe9todo")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Todas las variables deben estar digitadas, ya sea mediante una declaraci\xf3n (utilizando las palabras claves ",(0,t.kt)("inlineCode",{parentName:"td"},"var"),", ",(0,t.kt)("inlineCode",{parentName:"td"},"#Declare"),", o ",(0,t.kt)("inlineCode",{parentName:"td"},"Function"),"), o por el compilador en tiempo de compilaci\xf3n."),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Las variables se pueden escribir sobre la marcha (no se recomienda)")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"No se puede cambiar el tipo de datos de ninguna variable o array."),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Es posible cambiar el tipo de datos de una variable o un array (no se recomienda)")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"No se puede cambiar un array unidimensional a uno bidimensional, ni cambiar un array bidimensional a uno unidimensional."),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Posible")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Aunque el compilador escribir\xe1 la variable por usted, debe especificar el tipo de datos de una variable mediante declaraciones en las que el tipo de datos sea ambiguo, como en un formulario."),(0,t.kt)("td",r({parentName:"tr"},{align:null}))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"La funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"td"},"Undefined")," siempre devuelve False para las variables. Las variables siempre est\xe1n definidas."),(0,t.kt)("td",r({parentName:"tr"},{align:null}))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),'Si has marcado la propiedad "Puede ser ejecutado en procesos apropiativos" para el m\xe9todo, el c\xf3digo no debe llamar a ning\xfan comando hilo no seguro u otros m\xe9todos hilo no seguro.'),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Se ignoran las propiedades de los procesos preventivos")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"El comando ",(0,t.kt)("inlineCode",{parentName:"td"},"IDLE")," es necesario para llamar a 4D en bucles espec\xedficos"),(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Siempre es posible interrumpir 4D")))),(0,t.kt)("h2",r({},{id:"utilizar-las-directivas-del-compilador-con-el-int\xe9rprete"}),"Utilizar las directivas del compilador con el int\xe9rprete"),(0,t.kt)("p",null,"Las aplicaciones no compiladas no requieren directivas del compilador. El int\xe9rprete digita autom\xe1ticamente cada variable en funci\xf3n de c\xf3mo se utilice en cada declaraci\xf3n, y una variable puede volver a escribirse libremente en el proyecto de aplicaci\xf3n."),(0,t.kt)("p",null,"Debido a esta flexibilidad, es posible que una aplicaci\xf3n tenga un rendimiento diferente en modo interpretado y compilado."),(0,t.kt)("p",null,"Por ejemplo, si se escribe:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var MyInt : Integer\n")),(0,t.kt)("p",null,"y en otra parte del proyecto, escribe:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"MyInt:=3.1416\n")),(0,t.kt)("p",null,"En este ejemplo, ",(0,t.kt)("inlineCode",{parentName:"p"},"MyInt")," se asigna el mismo valor (3) tanto en el modo interpretado como en el compilado, siempre que la directiva del compilador se interprete ",(0,t.kt)("em",{parentName:"p"},"antes")," de la declaraci\xf3n de asignaci\xf3n."),(0,t.kt)("p",null,"El int\xe9rprete 4D utiliza directivas de compilador para escribir las variables. Cuando el int\xe9rprete encuentra una directiva de compilador, escribe la variable seg\xfan la directiva. Si una declaraci\xf3n posterior intenta asignar un valor incorrecto (por ejemplo, asignar un valor alfanum\xe9rico a una variable num\xe9rica) la asignaci\xf3n no tendr\xe1 lugar y generar\xe1 un error."),(0,t.kt)("p",null,"El orden en el que aparecen las dos declaraciones es irrelevante para el compilador, porque primero busca en todo el proyecto para las directivas del compilador. El int\xe9rprete, sin embargo, no es sistem\xe1tico. Interpreta las declaraciones en el orden de ejecuci\xf3n. Ese orden, por supuesto, puede cambiar de una sesi\xf3n a otra, dependiendo de lo que haga el usuario. Por esta raz\xf3n, es importante dise\xf1ar su proyecto de manera que las directivas del compilador se ejecuten antes de cualquier declaraci\xf3n que contenga las variables declaradas."),(0,t.kt)("h2",r({},{id:"utilizaci\xf3n-de-punteros-para-evitar-la-reescritura"}),"Utilizaci\xf3n de punteros para evitar la reescritura"),(0,t.kt)("p",null,"Una variable no se puede volver a escribir. Sin embargo, es posible utilizar un puntero para referirse a variables de diferentes tipos de datos. Por ejemplo, el siguiente c\xf3digo est\xe1 permitido tanto en modo interpretado como compilado:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $p : Pointer\nvar $name : Text\nvar $age : Integer\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //texto objetivo para el puntero\n$p->:="Wesson" //asigna un valor texto\n\n$p:=->$age  \n// nuevo objetivo de tipo diferente para el puntero\n$p->:=55 //asigna un valor num\xe9rico\n')),(0,t.kt)("p",null,"Imagine una funci\xf3n que devuelve la longitud (n\xfamero de caracteres) de valores de todo tipo."),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // Calc_Length (cu\xe1ntos caracteres)\n  // $vp = puntero a variable de tipo flexible, num\xe9rico, texto, tiempo, booleano\n\n#DECLARE($vp : Pointer) -> $length : Integer\nvar $result : Text  \n$result:=String($vp->)\n$length:=Length($result)\n")),(0,t.kt)("p",null,"Entonces se puede llamar a este m\xe9todo:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n')))}u.isMDXComponent=!0}}]);