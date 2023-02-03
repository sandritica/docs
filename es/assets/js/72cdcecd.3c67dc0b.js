"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57716],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=s,E=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?t.createElement(E,o(o({ref:n},c),{},{components:a})):t.createElement(E,o({ref:n},c))}));function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51123:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});a(67294);var t=a(3905);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s.apply(this,arguments)}function r(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const o={id:"branching",title:"Estructuras condicionales"},l=void 0,i={unversionedId:"Concepts/branching",id:"version-19/Concepts/branching",title:"Estructuras condicionales",description:"Una estructura de ramificaci\xf3n permite que los m\xe9todos prueben una condici\xf3n y tomen caminos alternativos, en funci\xf3n del resultado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/cf_branching.md",sourceDirName:"Concepts",slug:"/Concepts/branching",permalink:"/docs/es/19/Concepts/branching",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcf_branching.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"branching",title:"Estructuras condicionales"},sidebar:"docs",previous:{title:"Condiciones y bucles",permalink:"/docs/es/19/Concepts/control-flow"},next:{title:"Estructuras repetitivas (bucles)",permalink:"/docs/es/19/Concepts/looping"}},u={},c=[{value:"If...Else...End if",id:"ifelseend-if",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Case of... Else...End case",id:"case-of-elseend-case",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3}],p={toc:c};function d(e){var{components:n}=e,a=r(e,["components"]);return(0,t.kt)("wrapper",s({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Una estructura de ramificaci\xf3n permite que los m\xe9todos prueben una condici\xf3n y tomen caminos alternativos, en funci\xf3n del resultado."),(0,t.kt)("h2",s({},{id:"ifelseend-if"}),"If...Else...End if"),(0,t.kt)("p",null,"La sintaxis de la estructura condicional ",(0,t.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," es:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    statement(s)\n Else\n    statement(s)\n End if\n")),(0,t.kt)("p",null,"Tenga en cuenta que la parte ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," es opcional; puede escribir:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    statement(s)\n End if\n")),(0,t.kt)("p",null,"La estructura ",(0,t.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," permite a su m\xe9todo elegir entre dos acciones, dependiendo de si una prueba (una expresi\xf3n booleana) es TRUE o FALSE. Cuando la expresi\xf3n booleana es TRUE, se ejecutan las sentencias que siguen inmediatamente a la prueba. Si la expresi\xf3n booleana es FALSE, se ejecutan las instrucciones que siguen a la l\xednea Else. El ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," es opcional; si se omite Else, la ejecuci\xf3n contin\xfaa con la primera instrucci\xf3n (si la hay) que sigue al ",(0,t.kt)("inlineCode",{parentName:"p"},"End if"),"."),(0,t.kt)("p",null,"Tenga en cuenta que la expresi\xf3n booleana siempre se eval\xfaa completamente. Considere en particular la siguiente prueba:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," If(MethodA & MethodB)\n    ...\n End if\n")),(0,t.kt)("p",null,"La expresi\xf3n es TRUE s\xf3lo si los dos m\xe9todos son TRUE. Sin embargo, incluso si ",(0,t.kt)("em",{parentName:"p"},"MethodA")," devuelve FALSE, 4D seguir\xe1 evaluando ",(0,t.kt)("em",{parentName:"p"},"MethodB"),", lo que supone una p\xe9rdida de tiempo in\xfatil. En este caso, es m\xe1s interesante utilizar una estructura como:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," If(MethodA)\n    If(MethodB)\n       ...\n    End if\n End if\n")),(0,t.kt)("p",null,"El resultado es similar y ",(0,t.kt)("em",{parentName:"p"},"MethodB")," se eval\xfaa s\xf3lo si es necesario."),(0,t.kt)("h3",s({},{id:"ejemplo"}),"Ejemplo"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"}),'  // Ask the user to enter a name\n $Find:=Request(Type a name)\n If(OK=1)\n    QUERY([People];[People]LastName=$Find)\n Else\n    ALERT("You did not enter a name.")\n End if\n End if \n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Consejo:")," la ramificaci\xf3n puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicaci\xf3n especializada, nada le impide escribir:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n Else\n    statement(s)\n End if\n")),(0,t.kt)("p",null,"o:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," If(Boolean_Expression)\n    statement(s)\n Else\n End if\n")),(0,t.kt)("h2",s({},{id:"case-of-elseend-case"}),"Case of... Else...End case"),(0,t.kt)("p",null,"The formal syntax of the ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... Else...End case")," control flow structure is:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       .\n       .\n       .\n\n    :(Boolean_Expression)\n       statement(s)\n    Else\n       statement(s)\n End case\n")),(0,t.kt)("p",null,"Tenga en cuenta que la parte ",(0,t.kt)("inlineCode",{parentName:"p"},"Else")," es opcional; puede escribir:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n       statement(s)\n    :(Boolean_Expression)\n       statement(s)\n       .\n       .\n       .\n\n    :(Boolean_Expression)\n       statement(s)\n End case\n")),(0,t.kt)("p",null,"As with the ",(0,t.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," structure, the ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... Else...End case")," structure also lets your method choose between alternative actions. Unlike the ",(0,t.kt)("inlineCode",{parentName:"p"},"If...Else...End")," if structure, the ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... Else...End case")," structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE."),(0,t.kt)("p",null,"Cada expresi\xf3n booleana va precedida de dos puntos (",(0,t.kt)("inlineCode",{parentName:"p"},":"),"). Esta combinaci\xf3n de los dos puntos y la expresi\xf3n booleana se llama un caso. Por ejemplo, la siguiente l\xednea es un caso:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"}),":(bValidate=1)\n")),(0,t.kt)("p",null,"S\xf3lo se ejecutar\xe1n las instrucciones que sigan al primer caso TRUE (y hasta el siguiente). Si ninguno de los casos es TRUE, no se ejecutar\xe1 ninguna de las instrucciones (si no se incluye la parte ",(0,t.kt)("inlineCode",{parentName:"p"},"Else"),")."),(0,t.kt)("p",null,"Puede incluir una instrucci\xf3n Else despu\xe9s del \xfaltimo caso. Si todos los casos son FALSE, se ejecutar\xe1n las instrucciones siguientes al ",(0,t.kt)("inlineCode",{parentName:"p"},"Else"),"."),(0,t.kt)("h3",s({},{id:"ejemplo-1"}),"Ejemplo"),(0,t.kt)("p",null,"Este ejemplo comprueba una variable num\xe9rica y muestra un cuadro de alerta con una palabra:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' Case of\n    :((vResult=1) & (vCondition#2)) //this case will be detected first\n       ... //statement(s)\n    :(vResult=1)\n       ... //Si es 1, mostrar una alerta\n    :(vResult=2) //Probar si el n\xfamero es 2\n       ALERT("Two.") Case of\n    :(vResult=1) //Probar si el n\xfamero es 1\n       ALERT("One.") //Si es 1, mostrar una alerta\n    :(vResult=2) //Probar si el n\xfamero es 2\n       ALERT("Two.") //Si es 2, mostrar una alerta\n    :(vResult=3) //Probar si el n\xfamero es 3\n       ALERT("Three.") //Si es 3, mostrar una alerta\n    Else //Si no es 1, 2 o 3, mostrar una alerta\n       ALERT("It was not one, two, or three.")\n //statement(s)\n End case //Si es 3, mostrar una alerta\n    Else //Si no es 1, 2 o 3, mostrar una alerta\n       ALERT("It was not one, two, or three.")\n //statement(s)\n End case\n')),(0,t.kt)("p",null,"Para comparar, aqu\xed est\xe1 la versi\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"If...Else...End if")," del mismo m\xe9todo:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' If(vResult=1) //Probar si el n\xfamero es 1\n    ALERT("One.") If(vResult=1) //Probar si el n\xfamero es 1\n    ALERT("One.") If(vResult=1) //Probar si el n\xfamero es 1\n    ALERT("One.") //Si es 1, mostrar una alerta\n Else\n    If(vResult=2) //Probar si el n\xfamero es 2\n       ALERT("Two.") //Si es 2, mostrar una alerta\n    Else\n       If(vResult=3) //Probar si el n\xfamero es 3\n          ALERT("Three.") //Si es 3, mostrar una alerta\n    Else //Si no es 1, 2 o 3, mostrar una alerta\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si es 2, mostrar una alerta\n    Else\n       If(vResult=3) //Probar si el n\xfamero es 3\n          ALERT("Three.") //Si es 3, mostrar una alerta\n    Else //Si no es 1, 2 o 3, mostrar una alerta\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if //Si es 2, mostrar una alerta\n    Else\n       If(vResult=3) //Probar si el n\xfamero es 3\n          ALERT("Three.") //Si es 3, mostrar una alerta\n    Else //Si no es 1, 2 o 3, mostrar una alerta\n       ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,t.kt)("p",null,"Remember that with a ",(0,t.kt)("inlineCode",{parentName:"p"},"Case of... Else...End case")," structure, only the first TRUE case is executed. Aunque dos o m\xe1s casos sean TRUE, s\xf3lo se ejecutar\xe1n las instrucciones que siguen al primer caso TRUE."),(0,t.kt)("p",null,"En consecuencia, cuando quiera implementar pruebas jer\xe1rquicas, debe asegurarse de que las declaraciones de condici\xf3n que est\xe1n m\xe1s abajo en el esquema jer\xe1rquico aparezcan primero en la secuencia de pruebas. Por ejemplo, si se quiere procesar el caso simple (vResult=1) y el caso complejo (vResult=1) & (vCondition#2) y se estructura el m\xe9todo de la siguiente manera: Por ejemplo, el siguiente c\xf3digo nunca ver\xe1 detectada su \xfaltima condici\xf3n:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(vResult=1) //Test if the number is 1\n       ALERT("One.") //If it is 1, display an alert\n    :(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    :(vResult=3) //Test if the number is 3\n       ALERT("Three.") //If it is 3, display an alert\n    Else //If it is not 1, 2, or 3, display an alert\n       ALERT("It was not one, two, or three.")\n End case\n')),(0,t.kt)("p",null,'En el c\xf3digo anterior, la presencia de la segunda condici\xf3n no se detecta, ya que la prueba "vResult=1" ramifica el c\xf3digo antes de cualquier otra prueba. Para que el c\xf3digo funcione correctamente, puedes escribirlo as\xed:'),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' If(vResult=1) //Test if the number is 1\n    ALERT("One.") //If it is 1, display an alert\n Else\n    If(vResult=2) //Test if the number is 2\n       ALERT("Two.") //If it is 2, display an alert\n    Else\n       If(vResult=3) //Test if the number is 3\n          ALERT("Three.") //If it is 3, display an alert\n       Else //If it is not 1, 2, or 3, display an alert\n          ALERT("It was not one, two, or three.")\n       End if\n    End if\n End if\n')),(0,t.kt)("p",null,"Adem\xe1s, si quiere implementar pruebas jer\xe1rquicas, puede considerar el uso de c\xf3digo jer\xe1rquico."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Consejo:")," la ramificaci\xf3n puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicaci\xf3n especializada, nada le impide escribir:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n    :(Boolean_Expression)\n      ...\n\n    :(Boolean_Expression)\n       statement(s)\n    Else\n       statement(s)\n End case\n")),(0,t.kt)("p",null,"o:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," Case of\n    :(Boolean_Expression)\n    :(Boolean_Expression)\n       statement(s)\n       ...\n\n    :(Boolean_Expression)\n       statement(s)\n    Else\n End case\n")),(0,t.kt)("p",null,"o:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-4d"})," Case of\n    Else\n       statement(s)\n End case\n")))}d.isMDXComponent=!0}}]);