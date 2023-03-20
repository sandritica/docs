"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"interpreted-compiled",title:"Modos interpretado e compilado"},l=void 0,p={unversionedId:"Concepts/interpreted-compiled",id:"version-19-R8/Concepts/interpreted-compiled",title:"Modos interpretado e compilado",description:"4D applications can work in interpreted or compiled mode:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/pt/Concepts/interpreted-compiled",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"interpreted-compiled",title:"Modos interpretado e compilado"},sidebar:"docs",previous:{title:"Gest\xe3o de erros",permalink:"/docs/pt/Concepts/error-handling"},next:{title:"Componentes",permalink:"/docs/pt/Concepts/components"}},s={},d=[{value:"Differences between interpreted and compiled code",id:"differences-between-interpreted-and-compiled-code",level:2},{value:"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete",id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete",level:2},{value:"Using pointers to avoid retyping",id:"using-pointers-to-avoid-retyping",level:2}],c={toc:d};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D applications can work in ",(0,a.kt)("strong",{parentName:"p"},"interpreted")," or ",(0,a.kt)("strong",{parentName:"p"},"compiled")," mode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in interpreted mode, statements are read and translated in machine language at the moment of their execution. You can add or modify the code whenever you need to, the application is automatically updated."),(0,a.kt)("li",{parentName:"ul"},"in compiled mode, all methods are read and translated once, at the compilation step. Posteriormente, a aplica\xe7\xe3o cont\xe9m apenas instru\xe7\xf5es de n\xedvel de montagem, j\xe1 n\xe3o \xe9 poss\xedvel editar o c\xf3digo.")),(0,a.kt)("p",null,"As vantagens da compila\xe7\xe3o s\xe3o:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Velocidade"),": A sua aplica\xe7\xe3o pode correr de 3 a 1.000 vezes mais r\xe1pido."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verifica\xe7\xe3o do c\xf3digo"),": A sua aplica\xe7\xe3o \xe9 digitalizada para verificar a consist\xeancia do c\xf3digo. S\xe3o detectados conflitos tanto l\xf3gicos como sint\xe1cticos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Protec\xe7\xe3o"),": Uma vez compilada a sua aplica\xe7\xe3o, pode apagar o c\xf3digo interpretado. Ent\xe3o, a aplica\xe7\xe3o compilada \xe9 funcionalmente id\xeantico ao original, exceto que a estrutura e m\xe9todos n\xe3o pode ser vista ou modificada, seja de forma deliberada ou por acidente."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stand-alone double-clickable applications"),": compiled applications can also be transformed into stand-alone applications (.EXE files) with their own icon."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Preemptive mode"),": only compiled code can be executed in preemptive processes.")),(0,a.kt)("h2",r({},{id:"differences-between-interpreted-and-compiled-code"}),"Differences between interpreted and compiled code"),(0,a.kt)("p",null,"Although application will work the same way in interpreted and compiled modes, there are some differences to know when you write code that will be compiled. The 4D interpreter is usually more flexible than the compiler."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Compilado"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Interpretado"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"You cannot have a method with the same name as a variable."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"No error is generated, but priority is given to the method")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"All variables must by typed, either through a compiler directive (ex: ",(0,a.kt)("inlineCode",{parentName:"td"},"C_LONGINT"),"), or by the compiler at compilation time."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Variables can be typed on-the-fly (not recommended)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"You cannot change the data type of any variable or array."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Changing the data type of a variable or an array is possible (not recommended)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"You cannot change a one-dimensional array to a two-dimensional array, or change a two-dimensional array to a one-dimensional array."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Poss\xedvel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form."),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A fun\xe7\xe3o ",(0,a.kt)("inlineCode",{parentName:"td"},"Undefined")," retorna sempre False para vari\xe1veis. As vari\xe1veis s\xe3o sempre definidas."),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),'If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Preemptive process properties are ignored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The ",(0,a.kt)("inlineCode",{parentName:"td"},"IDLE")," command is necessary to call 4D in specific loops"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\xc9 sempre poss\xedvel interromper 4D")))),(0,a.kt)("h2",r({},{id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete"}),"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete"),(0,a.kt)("p",null,"As directivas de compila\xe7\xe3o n\xe3o s\xe3o necess\xe1rias para aplica\xe7\xf5es n\xe3o compiladas. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the application project."),(0,a.kt)("p",null,"Because of this flexibility, it is possible that an application can perform differently in interpreted and compiled modes."),(0,a.kt)("p",null,"Por exemplo, se escrever:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"C_LONGINT(MyInt)\n")),(0,a.kt)("p",null,"and elsewhere in the project, you write:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"MyInt:=3.1416\n")),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"MyInt")," is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted ",(0,a.kt)("em",{parentName:"p"},"prior")," to the assignment statement."),(0,a.kt)("p",null,"The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error."),(0,a.kt)("p",null,"The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire project for compiler directives. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. For this reason, it is important to design your project so that your compiler directives are executed prior to any statements containing declared variables."),(0,a.kt)("h2",r({},{id:"using-pointers-to-avoid-retyping"}),"Using pointers to avoid retyping"),(0,a.kt)("p",null,"Uma vari\xe1vel n\xe3o pode ser redigida de novo. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_POINTER($p)\nC_TEXT($name)\nC_LONGINT($age)\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //text target for the pointer\n$p->:="Wesson" //assigns a text value\n\n$p:=->$age  \n// new target of different type for the pointer\n$p->:=55 //assigns a number value\n')),(0,a.kt)("p",null,"Imagine a function that returns the length (number of charaters) of values that can be of any type."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  // Calc_Length (how many characters)\n  // $1 = pointer to flexible variable type, numeric, text, time, boolean C_POINTER($1)\nC_TEXT($result) C_LONGINT($0)\n$result:=String($1->)\n$0:=Length($result)\n")),(0,a.kt)("p",null,"Then this method can be called:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))\n')))}m.isMDXComponent=!0}}]);