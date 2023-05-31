"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"identifiers",title:"Identificadores"},s=void 0,i={unversionedId:"Concepts/identifiers",id:"version-18/Concepts/identifiers",title:"Identificadores",description:"This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/pt/18/Concepts/identifiers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"identifiers",title:"Identificadores"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/pt/18/Concepts/plug-ins"},next:{title:"Vis\xe3o Geral",permalink:"/docs/pt/18/Project/overview"}},p={},c=[{value:"Regras b\xe1sicas",id:"regras-b\xe1sicas",level:2},{value:"Additional rules for object property and ORDA names",id:"additional-rules-for-object-property-and-orda-names",level:3},{value:"Additional rules for SQL",id:"additional-rules-for-sql",level:3},{value:"Tabelas",id:"tabelas",level:2},{value:"Campos",id:"campos",level:2},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:2},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Arrays interprocesso",id:"arrays-interprocesso",level:3},{value:"Arrays proceso",id:"arrays-proceso",level:3},{value:"Arrays locais",id:"arrays-locais",level:3},{value:"Elementos de arrays",id:"elementos-de-arrays",level:3},{value:"Elements of two-dimensional arrays",id:"elements-of-two-dimensional-arrays",level:3},{value:"Atributos de objetos",id:"atributos-de-objetos",level:2},{value:"Formul\xe1rios",id:"formul\xe1rios",level:2},{value:"Objectos de formul\xe1rio",id:"objectos-de-formul\xe1rio",level:2},{value:"M\xe9todos projeto",id:"m\xe9todos-projeto",level:2},{value:"Comandos de plug-in",id:"comandos-de-plug-in",level:2},{value:"Conjuntos",id:"conjuntos",level:2},{value:"Conjuntos interprocesso",id:"conjuntos-interprocesso",level:3},{value:"Conjuntos process",id:"conjuntos-process",level:3},{value:"Conjuntos clientes",id:"conjuntos-clientes",level:3},{value:"Sele\xe7\xf5es tempor\xe1rias",id:"sele\xe7\xf5es-tempor\xe1rias",level:2},{value:"Interprocess Named Selections",id:"interprocess-named-selections",level:3},{value:"Process Named Selections",id:"process-named-selections",level:3},{value:"Processos",id:"processos",level:2},{value:"Processos globais",id:"processos-globais",level:3},{value:"Processos locais",id:"processos-locais",level:3},{value:"Summary of Naming Conventions",id:"summary-of-naming-conventions",level:2},{value:"Resolving Naming Conflicts",id:"resolving-naming-conflicts",level:2}],d={toc:c};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.)."),(0,n.kt)("h2",r({},{id:"regras-b\xe1sicas"}),"Regras b\xe1sicas"),(0,n.kt)("p",null,"The following rules apply for all 4D frameworks."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Um nome deve come\xe7ar por um caractere alfab\xe9tico, um subscrito ou um sinal de d\xf3lar ("$") (lembre que um sinal de d\xf3lar pode denotar um elemento local, ver abaixo).'),(0,n.kt)("li",{parentName:"ul"},'Depois disso, o nome pode incluir caracteres alfab\xe9ticos, num\xe9ricos, o caractere espa\xe7o e o caractere de sublinhado/tra\xe7o baixo ("_") .'),(0,n.kt)("li",{parentName:"ul"},'Pontos (".") and brackets ("',"[ ]",'") are not allowed in table, field, method, or variable names.'),(0,n.kt)("li",{parentName:"ul"},"Commas, slashes, quotation marks, and colons are not allowed."),(0,n.kt)("li",{parentName:"ul"},"Characters reserved for use as operators, such as * and +, are not allowed."),(0,n.kt)("li",{parentName:"ul"},"Do not use reserved names, i.e. 4D command names (",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (If, For, etc.), and constants."),(0,n.kt)("li",{parentName:"ul"},"Any trailing spaces are ignored.")),(0,n.kt)("h3",r({},{id:"additional-rules-for-object-property-and-orda-names"}),"Additional rules for object property and ORDA names"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Space characters are not allowed."),(0,n.kt)("li",{parentName:"ul"},'Pontos (".") and brackets ("',"[ ]",'") are not allowed.'),(0,n.kt)("li",{parentName:"ul"},"Names are case sensitive.")),(0,n.kt)("h3",r({},{id:"additional-rules-for-sql"}),"Additional rules for SQL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted"),(0,n.kt)("li",{parentName:"ul"},"Names must not include any SQL keywords (command, attribute, etc.).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),' The "SQL" area of the Inspector in the Structure editor automatically indicates any unauthorized characters in the name of a table or field.'),(0,n.kt)("h2",r({},{id:"tabelas"}),"Tabelas"),(0,n.kt)("p",null,"You designate a table by placing its name between brackets: ","[...]",". A table name can contain up to 31 characters."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'DEFAULT TABLE([Orders])\nFORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n')),(0,n.kt)("h2",r({},{id:"campos"}),"Campos"),(0,n.kt)("p",null,"You designate a field by first specifying the table to which it belongs. The field name immediately follows the table name. A field name can contain up to 31 characters."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n')),(0,n.kt)("h2",r({},{id:"vari\xe1veis-interprocesso"}),"Vari\xe1veis interprocesso"),(0,n.kt)("p",null,"You designate an interprocess variable by preceding the name of the variable with the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"The name of an interprocess variable can be up to 31 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'<>vlProcessID:=Current process\n<>vsKey:=Char(KeyCode)\nIf(<>vtName#"")\n')),(0,n.kt)("h2",r({},{id:"vari\xe1veis-processo"}),"Vari\xe1veis processo"),(0,n.kt)("p",null,"Designa-se uma vari\xe1vel de processo utilizando o seu nome (que n\xe3o pode come\xe7ar com os s\xedmbolos ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," nem com o s\xedmbolo do d\xf3lar $). Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'<>vrGrandTotal:=Sum([Accounts]Amount)\nIf(bValidate=1)\nvsCurrentName:=""\n')),(0,n.kt)("h2",r({},{id:"vari\xe1veis-locais"}),"Vari\xe1veis locais"),(0,n.kt)("p",null,"Uma vari\xe1vel local \xe9 determinada colocando um sinal de d\xf3lar ($) antes do nome da vari\xe1vel. A local variable name can contain up to 31 characters, not including the dollar sign."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'For($vlRecord;1;100)\nIf($vsTempVar="No")\n$vsMyString:="Hello there"\n')),(0,n.kt)("h2",r({},{id:"arrays"}),"Arrays"),(0,n.kt)("p",null,"You designate an array by using its name, which is the name you pass to an array declaration (such as ARRAY LONGINT) when you create the array. Arrays are variables, and from the scope point of view, like variables, there are three different types of arrays:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arrays interprocesso,"),(0,n.kt)("li",{parentName:"ul"},"Arrays processo,"),(0,n.kt)("li",{parentName:"ul"},"Arrays locais.")),(0,n.kt)("h3",r({},{id:"arrays-interprocesso"}),"Arrays interprocesso"),(0,n.kt)("p",null,"The name of an interprocess array is preceded by the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"An interprocess array name can contain up to 31 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY TEXT(<>atSubjects;Records in table([Topics]))\nSORT ARRAY(<>asKeywords;>)\nARRAY INTEGER(<>aiBigArray;10000)\n")),(0,n.kt)("h3",r({},{id:"arrays-proceso"}),"Arrays proceso"),(0,n.kt)("p",null,"Designa-se uma vari\xe1vel de processo utilizando o seu nome (que n\xe3o pode come\xe7ar com os s\xedmbolos ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," nem com o s\xedmbolo do d\xf3lar $). A process array name can contain up to 31 characters."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY TEXT(atSubjects;Records in table([Topics]))\nSORT ARRAY(asKeywords;>)\nARRAY INTEGER(aiBigArray;10000)\n")),(0,n.kt)("h3",r({},{id:"arrays-locais"}),"Arrays locais"),(0,n.kt)("p",null,"O nome de um array local vai precedido do sinal de d\xf3lar ($). A local array name can contain up to 31 characters, not including the dollar sign."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"ARRAY TEXT($atSubjects;Records in table([Topics]))\nSORT ARRAY($asKeywords;>)\nARRAY INTEGER($aiBigArray;10000)\n")),(0,n.kt)("h3",r({},{id:"elementos-de-arrays"}),"Elementos de arrays"),(0,n.kt)("p",null,'You reference an element of an interprocess, process or local array by using the curly braces("{ }"). The element referenced is denoted by a numeric expression.'),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' If(<>asKeywords{1}="Stop")\n<>atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}\n\n //Direcionar um elemento de um array processo If(asKeywords{1}="Stop")\natSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{Size of array(aiBigArray)}\n\n //Direcionar um elemento de um array local If($asKeywords{1}="Stop")\n$atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{Size of array($aiBigArray)}\n')),(0,n.kt)("h3",r({},{id:"elements-of-two-dimensional-arrays"}),"Elements of two-dimensional arrays"),(0,n.kt)("p",null,"You reference an element of a two-dimensional array by using the curly braces ({\u2026}) duas vezes. The element referenced is denoted by two numeric expressions in two sets of curly braces."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //Addressing an element of a two-dimensional interprocess array\nIf(<>asKeywords{$vlNextRow}{1}="Stop")\n<>atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}\n\n //Addressing an element of a two-dimensional process array\nIf(asKeywords{$vlNextRow}{1}="Stop")\natSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}\n\n //Addressing an element of a two-dimensional local array\nIf($asKeywords{$vlNextRow}{1}="Stop")\n$atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}\n')),(0,n.kt)("h2",r({},{id:"atributos-de-objetos"}),"Atributos de objetos"),(0,n.kt)("p",null,'When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. An attribute name can contain up to 255 characters and is case sensitive.'),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Additional rules apply to object attribute names (they must conform to the ECMAScript specification). For more information, see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/Concepts/object#object-property-identifiers"}),"Object property identifiers"),"."),(0,n.kt)("h2",r({},{id:"formul\xe1rios"}),"Formul\xe1rios"),(0,n.kt)("p",null,"You designate a form by using a string expression that represents its name. A form name can contain up to 31 characters."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'FORM SET INPUT([People];"Input")\nFORM SET OUTPUT([People];"Output")\nDIALOG([Storage];"Note box"+String($vlStage))\n')),(0,n.kt)("h2",r({},{id:"objectos-de-formul\xe1rio"}),"Objectos de formul\xe1rio"),(0,n.kt)("p",null,"You designate a form object by passing its name as a string, preceded by the * parameter. A form object name can contain up to 255 characters."),(0,n.kt)("p",null,"Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'OBJECT SET FONT(*;"Binfo";"Times")\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands."),(0,n.kt)("h2",r({},{id:"m\xe9todos-projeto"}),"M\xe9todos projeto"),(0,n.kt)("p",null,"You designate a project method (procedure or function) by using its name. A method name can contain up to 31 characters."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," A project method that does not return a result is also called a procedure. A project method that returns a result is also called a function."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If(New client)\nDELETE DUPLICATED VALUES APPLY TO SELECTION([Employees];INCREASE SALARIES)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dica:")," \xe9 uma boa t\xe9cnica de programa\xe7\xe3o adotar a mesma conven\xe7\xe3o de nomenclatura que a utilizada por 4D para os m\xe9todos integrados. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," When you call a method, you just type its name. However, some 4D built-in commands, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),", as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. Exemplo:"),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' // Este comando espera um m\xe9todo (fun\xe7\xe3o) ou f\xf3rmula QUERY BY FORMULA([aTable];Special query)\n // Este comando espera um m\xe9todo (procedimento) ou declara\xe7\xe3o APPLY TO SELECTION([Employees];INCREASE SALARIES)\n //Mas este comando espera um nome de m\xe9todo ON EVENT CALL("HANDLE EVENTS")\n')),(0,n.kt)("p",null,"Project methods can accept parameters (arguments). Os par\xe2metros se passam ao m\xe9todo entre par\xeantesis, depois do nome do m\xe9todo. Cada par\xe2metro est\xe1 separado do pr\xf3ximo por um ponto e v\xedrgula (;). Os par\xe2metros est\xe3o dispon\xedveis dentro do m\xe9todo chamado como vari\xe1veis locais numeradas sequencialmente: $1, $2,..., $n. Al\xe9m disso, podem ser endere\xe7ados m\xfaltiplos par\xe2metros consecutivos (e \xfaltimos) com a sintaxe ${n}onde n, express\xe3o num\xe9rica, \xe9 o n\xfamero do par\xe2metro."),(0,n.kt)("p",null,"Dentro de uma fun\xe7\xe3o, a vari\xe1vel local $0 cont\xe9m o valor a devolver."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //Dentro de DROP SPACES $1 \xe9 um ponteiro ao campo [People]Name DROP SPACES(->[People]Name)\n\n //Dentro de Calc creator:\n //- $1 \xe9 num\xe9rico e igual a 1\n //- $2 \xe9 num\xe9rico e igual a 5\n //- $3 \xe9 texto ou string e igual a "Nice"\n //- O valor do resultado se atribui a $0\n$vsResult:=Calc creator(1;5; "Nice")\n\n //Dentro de Dump:\n //- os tres par\xe2metros s\xe3o texto ou string\n //- Se pode direcionar como $1, $2 ou $3\n //- Tamb\xe9m podem ser direcionados como, por exemplo, ${$vlParam} onde $vlParam \xe9 1, 2 ou 3\n //- O valor resultante se atribui a $0\nvtClone:=Dump("is";"the";"it")\n')),(0,n.kt)("h2",r({},{id:"comandos-de-plug-in"}),"Comandos de plug-in"),(0,n.kt)("p",null,"You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$error:=SMTP_From($smtp_id;"henry@gmail.com")\n')),(0,n.kt)("h2",r({},{id:"conjuntos"}),"Conjuntos"),(0,n.kt)("p",null,"From the scope point of view, there are two types of sets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conjuntos interprocesso"),(0,n.kt)("li",{parentName:"ul"},"Conjuntos process")),(0,n.kt)("p",null,"4D Server also includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conjuntos clientes")),(0,n.kt)("h3",r({},{id:"conjuntos-interprocesso"}),"Conjuntos interprocesso"),(0,n.kt)("p",null,"A set is an interprocess set if the name of the set is preceded by the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"An interprocess set name can contain up to 255 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("h3",r({},{id:"conjuntos-process"}),"Conjuntos process"),(0,n.kt)("p",null,"Para designar um conjunto processo se utilizar uma express\xe3o de tipo string que represente seu nome (que n\xe3o pode come\xe7ar com os s\xedmbolos ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," ou o sinal de d\xf3lar $). A set name can contain up to 255 characters."),(0,n.kt)("h3",r({},{id:"conjuntos-clientes"}),"Conjuntos clientes"),(0,n.kt)("p",null,"O nome de um conjunto cliente deve ser precedido do sinal de d\xf3lar ($). A client set name can contain up to 255 characters, not including the dollar sign."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //Conjuntos interprocesso USE SET("<>Deleted Records")\nCREATE SET([Customers];"<>Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Conjuntos processo USE SET("Deleted Records")\nCREATE SET([Customers];"Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //conjuntos clientes USE SET("$Deleted Records")\nCREATE SET([Customers];"$Customer Orders")\nIf(Records in set("$Selection"+String($i))>0)\n')),(0,n.kt)("h2",r({},{id:"sele\xe7\xf5es-tempor\xe1rias"}),"Sele\xe7\xf5es tempor\xe1rias"),(0,n.kt)("p",null,"From the scope point of view, there are two types of named selections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interprocess named selections"),(0,n.kt)("li",{parentName:"ul"},"Process named selections.")),(0,n.kt)("h3",r({},{id:"interprocess-named-selections"}),"Interprocess Named Selections"),(0,n.kt)("p",null,"A named selection is an interprocess named selection if its name is preceded by the symbols (",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign."),(0,n.kt)("p",null,"An interprocess named selection name can contain up to 255 characters, not including the ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," symbols."),(0,n.kt)("h3",r({},{id:"process-named-selections"}),"Process Named Selections"),(0,n.kt)("p",null,"Para designar uma sele\xe7\xe3o nomeada se utiliza uma express\xe3o de tipo string que represente seu nome (que n\xe3o pode come\xe7ar com os s\xedmbolos ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," ou o sinal de d\xf3lar $). A named selection name can contain up to 255 characters."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //Interprocess Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n //Process Named Selection\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n')),(0,n.kt)("h2",r({},{id:"processos"}),"Processos"),(0,n.kt)("p",null,"In the single-user version, or in Client/Server on the Client side, there are two types of processes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Processos globais"),(0,n.kt)("li",{parentName:"ul"},"Processos locais.")),(0,n.kt)("h3",r({},{id:"processos-globais"}),"Processos globais"),(0,n.kt)("p",null,"Pode determinar um processo global usando uma express\xe3o string que represente seu nome (que n\xe3o pode come\xe7ar com o sinal de d\xf3lar $). A process name can contain up to 255 characters."),(0,n.kt)("h3",r({},{id:"processos-locais"}),"Processos locais"),(0,n.kt)("p",null,"Pode determinar um processo local se o nome do processo for precedido pelo sinal de d\xf3lar ($). The process name can contain up to 255 characters, not including the dollar sign."),(0,n.kt)("p",null,"Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //Iniciar processo global "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Iniciar processo local "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\n')),(0,n.kt)("h2",r({},{id:"summary-of-naming-conventions"}),"Summary of Naming Conventions"),(0,n.kt)("p",null,"The following table summarizes 4D naming conventions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Identifier"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Max. Largura"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Exemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tabela"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[Invoices]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"[Employees]","Last Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Interprocess Variable/Array"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>")," + 31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>vlNextProcessID"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Vari\xe1vel/Array processo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"vsCurrentName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Vari\xe1vel/Array local"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$ + 31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$vlLocalCounter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Propriedades de objetos"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$o.myAttribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Formul\xe1rio"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"My Custom Web Input"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objecto de formul\xe1rio"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"MyButton"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M\xe9todos proyecto"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M_ADD_CUSTOMERS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rotina Plug-in"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"31"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PDF SET ROTATION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Interprocess Set"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>")," + 255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"<>Records to be Archived"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Conjunto process"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Current selected records"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Client Set"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$ + 255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"$Previous Subjects"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sele\xe7\xe3o nomeada"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"Employees A to Z"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Interprocess Named Selection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<>")," + 255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"<>Employees Z to A"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Processo local"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$ + 255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"$Follow Events"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Processo global"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"',(0,n.kt)("em",{parentName:"td"},"P_INVOICES_MODULE"),'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sem\xe1foro"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"255"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"mysemaphore"')))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller."),(0,n.kt)("h2",r({},{id:"resolving-naming-conflicts"}),"Resolving Naming Conflicts"),(0,n.kt)("p",null,"Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system."),(0,n.kt)("p",null,"4D identifies names used in procedures in the following order:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Campos"),(0,n.kt)("li",{parentName:"ol"},"Comandos"),(0,n.kt)("li",{parentName:"ol"},"P\xe1gina M\xe9todos"),(0,n.kt)("li",{parentName:"ol"},"Comandos de plug-in"),(0,n.kt)("li",{parentName:"ol"},"Constantes predefinidas"),(0,n.kt)("li",{parentName:"ol"},"Variables.")),(0,n.kt)("p",null,"For example, 4D has a built-in command called ",(0,n.kt)("inlineCode",{parentName:"p"},"Date"),". If you named a method ",(0,n.kt)("em",{parentName:"p"},"Date"),", 4D would recognize it as the built-in ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," command, and not as your method. This would prevent you from calling your method. If, however, you named a field \u201cDate\u201d, 4D would try to use your field instead of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," command."))}m.isMDXComponent=!0}}]);