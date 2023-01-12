"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21541],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var o=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=o.createContext({}),s=function(e){var r=o.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return o.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=t,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(h,l(l({ref:r},c),{},{components:n})):o.createElement(h,l({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});n(67294);var o=n(3905);function t(){return t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t.apply(this,arguments)}function a(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const l={id:"error-handling",title:"Gesti\xf3n de errores"},i=void 0,d={unversionedId:"Concepts/error-handling",id:"version-19-R8/Concepts/error-handling",title:"Gesti\xf3n de errores",description:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/es/Concepts/error-handling",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/Concepts/error-handling.md",tags:[],version:"19-R8",frontMatter:{id:"error-handling",title:"Gesti\xf3n de errores"},sidebar:"docs",previous:{title:"Estructuras repetitivas (bucles)",permalink:"/docs/es/Concepts/looping"},next:{title:"Modos interpretado y compilado",permalink:"/docs/es/Concepts/interpreted-compiled"}},s={},c=[{value:"Error o estado",id:"error-o-estado",level:2},{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores dentro del m\xe9todo",id:"manejo-de-errores-dentro-del-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3}],p={toc:c};function u(e){var{components:r}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",t({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."),(0,o.kt)("p",null,"La gesti\xf3n de errores responde a dos necesidades principales:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"),(0,o.kt)("li",{parentName:"ul"},"detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los di\xe1logos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.")),(0,o.kt)("admonition",t({},{title:"Buenas pr\xe1cticas",type:"tip"}),(0,o.kt)("p",{parentName:"admonition"},"Es muy recomendable instalar un m\xe9todo global de gesti\xf3n de errores en 4D Server, para todo el c\xf3digo que se ejecute en el servidor. Este m\xe9todo evitar\xeda la aparici\xf3n de cajas de di\xe1logo inesperadas en la m\xe1quina del servidor (si se ejecuta con interfaz), y podr\xeda registrar los errores en un archivo espec\xedfico para su posterior an\xe1lisis.")),(0,o.kt)("h2",t({},{id:"error-o-estado"}),"Error o estado"),(0,o.kt)("p",null,"Muchas funciones de clase 4D, como ",(0,o.kt)("inlineCode",{parentName:"p"},"entity.save()")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", devuelven un objeto ",(0,o.kt)("em",{parentName:"p"},"status"),'. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecuci\xf3n, por ejemplo, una contrase\xf1a no v\xe1lida, una entidad bloqueada, etc., que no detienen la ejecuci\xf3n del programa. Esta categor\xeda de errores puede ser manejada por el c\xf3digo habitual.'),(0,o.kt)("p",null,'Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupci\xf3n inesperada. Esta categor\xeda de errores genera excepciones y necesita ser manejada a trav\xe9s de un m\xe9todo de gesti\xf3n de errores.'),(0,o.kt)("h2",t({},{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores"}),"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"),(0,o.kt)("p",null,"In 4D, all errors can be caught and handled by specific project methods, named ",(0,o.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,o.kt)("strong",{parentName:"p"},"error-catching"),") methods."),(0,o.kt)("p",null,"Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below)."),(0,o.kt)("p",null,"To ",(0,o.kt)("em",{parentName:"p"},"install")," an error-handling project method, you just need to call the ",(0,o.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page155.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"ON ERR CALL"))," command with the project method name and (optionnally) scope as parameters. Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo local de gesti\xf3n de errores\n')),(0,o.kt)("p",null,"To stop catching errors for an execution context and give back hand, call ",(0,o.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," with an empty string:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("";ek local) //devuelve el control al proceso local\n')),(0,o.kt)("p",null,"The  ",(0,o.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page704.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"Method called on error"))," command allows you to know the name of the method installed by ",(0,o.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. Es particularmente \xfatil en el contexto de c\xf3digo gen\xe9rico porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de error:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //Si no se puede abrir el documento, se genera un error\n $ref:=Open document("MyDocument")\n  //Reinstalaci\xf3n del m\xe9todo anterior\n ON ERR CALL($methCurrent;ek local)\n\n')),(0,o.kt)("h3",t({},{id:"alcance-y-componentes"}),"Alcance y componentes"),(0,o.kt)("p",null,"Se puede definir un m\xe9todo de gesti\xf3n de errores para diferentes contextos de ejecuci\xf3n:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"para el ",(0,o.kt)("strong",{parentName:"li"},"proceso actual"),"- s\xf3lo se llamar\xe1 a un gestor de errores local para los errores ocurridos en el proceso actual,"),(0,o.kt)("li",{parentName:"ul"},"for the ",(0,o.kt)("strong",{parentName:"li"},"whole application"),"- a global error handler will be called for all errors that occurred in the application execution context,"),(0,o.kt)("li",{parentName:"ul"},"for the ",(0,o.kt)("strong",{parentName:"li"},"components"),"- it will be called in the host for all errors that occurred in the components.")),(0,o.kt)("p",null,"Ejemplos:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method\nON ERR CALL("globalHandler";ek global) //Installs a global error-handling method\nON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components\n')),(0,o.kt)("p",null,'You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.'),(0,o.kt)("p",null,"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. However, only one method can be installed per execution context."),(0,o.kt)("p",null,'When an error occurs, only one method is called, even if several "concurrent" error handlers are installed:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if the error occurs in the current process, the local handler is called and NOT the global handler;"),(0,o.kt)("li",{parentName:"ul"},'if the error occurs in a component and the component has its own error handler, the error handler of the component is called and NOT the "errors from components" handler of the host application.')),(0,o.kt)("h3",t({},{id:"manejo-de-errores-dentro-del-m\xe9todo"}),"Manejo de errores dentro del m\xe9todo"),(0,o.kt)("p",null,"Within a custom error method, you have access to several pieces of information that will help you identifying the error:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"dedicated system variables:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error")," (entero largo): c\xf3digo de error"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error method"),"(texto): nombre del m\xe9todo que ha provocado el error"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error line")," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error formula")," (texto): f\xf3rmula del c\xf3digo 4D (texto bruto) que est\xe1 en el origen del error.")))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"4D automatically maintains a number of variables called ",(0,o.kt)("strong",{parentName:"p"},"system variables"),", meeting different needs. Consulte el ",(0,o.kt)("em",{parentName:"p"},"manual de referencia del lenguaje 4D"),"."),(0,o.kt)("p",null,":::"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"Last errors"))," command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the ",(0,o.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"GET LAST ERROR STACK"))," command that returns the same information as arrays."),(0,o.kt)("li",{parentName:"ul"},"el comando ",(0,o.kt)("inlineCode",{parentName:"li"},"Get call chain")," que devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas a m\xe9todos dentro del proceso actual.")),(0,o.kt)("h4",t({},{id:"ejemplo"}),"Ejemplo"),(0,o.kt)("p",null,"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n')),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'// m\xe9todo proyecto errorMethod\n If(Error#1006) //esto no es una interrupci\xf3n del usuario\n    ALERT("Se ha producido el error "+String(Error)+". El c\xf3digo en cuesti\xf3n es: \\""+Error formula+"\\"")\n End if\n')),(0,o.kt)("h3",t({},{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo"}),"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"),(0,o.kt)("p",null,"Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. La variable sistema ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," puede ser probada en cualquier m\xe9todo, es decir, fuera del m\xe9todo de gesti\xf3n de errores:"),(0,o.kt)("pre",null,(0,o.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\nEnd if\nON ERR CALL("")\n')))}u.isMDXComponent=!0}}]);