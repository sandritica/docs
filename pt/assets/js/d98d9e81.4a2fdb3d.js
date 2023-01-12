"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55052],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(a),g=r,N=m["".concat(d,".").concat(g)]||m[g]||s[g]||l;return a?n.createElement(N,o(o({ref:e},u),{},{components:a})):n.createElement(N,o({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69370:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"number",title:"Number (Real, Longint, Integer)"},i=void 0,d={unversionedId:"Concepts/number",id:"version-19-R7/Concepts/number",title:"Number (Real, Longint, Integer)",description:"N\xfamero \xe9 um termo gen\xe9rico que significa:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/Concepts/dt_number.md",sourceDirName:"Concepts",slug:"/Concepts/number",permalink:"/docs/pt/19-R7/Concepts/number",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Concepts/dt_number.md",tags:[],version:"19-R7",frontMatter:{id:"number",title:"Number (Real, Longint, Integer)"},sidebar:"docs",previous:{title:"Null e indefinido",permalink:"/docs/pt/19-R7/Concepts/null-undefined"},next:{title:"Objeto",permalink:"/docs/pt/19-R7/Concepts/object"}},p={},u=[{value:"N\xfameros literais",id:"n\xfameros-literais",level:2},{value:"Operadores de n\xfameros",id:"operadores-de-n\xfameros",level:2},{value:"Preced\xeancia",id:"preced\xeancia",level:3},{value:"Operadores Bitwise",id:"operadores-bitwise",level:2},{value:"Notas",id:"notas",level:4},{value:"Exemplos",id:"exemplos",level:3}],s={toc:u};function m(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"N\xfamero \xe9 um termo gen\xe9rico que significa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Campo real, vari\xe1vel ou express\xe3o. O intervalo para o tipo de dados Real \xe9 de \xb11,7e\xb1308 (13 d\xedgitos significativos)."),(0,n.kt)("li",{parentName:"ul"},"Campo Inteiro Longo, vari\xe1vel ou express\xe3o. O intervalo para o tipo de dados Long Integer (4-byte Integer) \xe9 -2^31...(2^31)-1."),(0,n.kt)("li",{parentName:"ul"},"Campo inteiro, array ou express\xe3o. O intervalo para o tipo de dados Integer (Inteiro 2 bytes) \xe9 -32.768...32.767(2^15...(2^25)-1).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," Valores de campo inteiro s\xe3o automaticamente convertidos em inteiros longos quando usados na linguagem 4D."),(0,n.kt)("p",null,"Pode atribuir qualquer tipo de dados Number a outro; 4D faz a convers\xe3o, truncagem ou arredondamento, se necess\xe1rio. No entanto, quando os valores estiverem fora do intervalo, a convers\xe3o n\xe3o retornar\xe1 um valor v\xe1lido. Pode misturar tipos de dados num\xe9ricos em express\xf5es."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," No manual de Refer\xeancia de Idioma 4D, n\xe3o importa o tipo de dado real, a Real, Inteiro, e par\xe2metros longos de n\xfameros inteiros nas descri\xe7\xf5es de comandos s\xe3o indicados como n\xfamero, exceto quando marcados de outra forma."),(0,n.kt)("h2",r({},{id:"n\xfameros-literais"}),"N\xfameros literais"),(0,n.kt)("p",null,"Uma constante literal num\xe9rica \xe9 escrita como um n\xfamero real. Aqui est\xe3o alguns exemplos de constantes num\xe9ricas:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"27\n123.76\n0.0076\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'O separador decimal padr\xe3o \xe9 um ponto (.), independente do idioma do sistema. Se voc\xea marcou a op\xe7\xe3o "Usar configura\xe7\xf5es regionais do sistema" na P\xe1gina de M\xe9todos das Prefer\xeancias, voc\xea deve usar o separador definido no seu sistema.')),(0,n.kt)("p",null,"N\xfameros negativos s\xe3o especificados com o sinal de menos (-). Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"-27\n-123.76\n-0.0076\n")),(0,n.kt)("h2",r({},{id:"operadores-de-n\xfameros"}),"Operadores de n\xfameros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adi\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero + N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2 + 3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Subtra\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero - N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"3 \u2013 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Multiplica\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero * N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 * 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divis\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero / N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 / 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2.5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divis\xe3o inteira"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero \\ N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 \\ 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"M\xf3dulo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero % N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"5 % 2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Exponencia\xe7\xe3o"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero ^ N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"2 ^ 3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Igual"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero = N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 = 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 = 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Desigualdade"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero # N\xfamero"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 #11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 # 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maior que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number >= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 > 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 > 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number <= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 < 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 < 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maior ou igual a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number >= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 >= 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 >= 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Menor que ou igual a"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number <= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"10 <= 11"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"11 <= 10"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,"O operador do m\xf3dulo % divide o primeiro n\xfamero pelo segundo n\xfamero e devolve um n\xfamero inteiro restante. Aqui est\xe3o alguns exemplos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"10 % 2 retorna 0 porque 10 \xe9 dividido uniformemente por 2."),(0,n.kt)("li",{parentName:"ul"},"10 % 3 devolve 1 porque o resto \xe9 1."),(0,n.kt)("li",{parentName:"ul"},"10,5% 2 devolve 0 porque o resto n\xe3o \xe9 um n\xfamero inteiro.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AVISO:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O operador do m\xf3dulo % devolve valores significativos com n\xfameros que se encontram na gama do Long Integer (de menos 2^31 a 2^31 menos um). Para calcular o modulo com n\xfameros fora deste intervalo, utilizar o comando ",(0,n.kt)("inlineCode",{parentName:"li"},"Mod")," ."),(0,n.kt)("li",{parentName:"ul"},"O operador da divis\xe3o de longint retorna valores significativos apenas com n\xfameros inteiros.")),(0,n.kt)("h3",r({},{id:"preced\xeancia"}),"Preced\xeancia"),(0,n.kt)("p",null,"A ordem pela qual uma express\xe3o \xe9 avaliada \xe9 chamada preced\xeancia. 4D tem uma estrita preced\xeancia da esquerda para a direita, na qual a ordem alg\xe9brica n\xe3o \xe9 observada. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," 3+4*5\n")),(0,n.kt)("p",null,"retorna 35, porque a express\xe3o \xe9 avaliada como 3 + 4, produzindo 7, que \xe9 depois multiplicada por 5, com o resultado final de 35."),(0,n.kt)("p",null,"Para anular a preced\xeancia da esquerda para a direita, DEVE usar par\xeanteses. Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," 3+(4*5)\n")),(0,n.kt)("p",null,"retorna 23 porque a express\xe3o (4 * 5) \xe9 avaliada em primeiro lugar, por causa dos par\xeanteses. O resultado \xe9 20, que \xe9 depois adicionado a 3 para o resultado final de 23."),(0,n.kt)("p",null,"Os par\xeanteses podem ser aninhados dentro de outros conjuntos de par\xeanteses. Certifique-se de que cada par\xeantese esquerdo tem um par\xeantese direito correspondente para assegurar uma avalia\xe7\xe3o adequada das express\xf5es. A falta ou utiliza\xe7\xe3o incorrecta de par\xeanteses pode causar resultados inesperados ou express\xf5es inv\xe1lidas. Al\xe9m disso, se pretende compilar as suas candidaturas, deve ter par\xeanteses correspondentes - o compilador detecta um par\xeantese em falta como um erro de sintaxe."),(0,n.kt)("h2",r({},{id:"operadores-bitwise"}),"Operadores Bitwise"),(0,n.kt)("p",null,"Os operadores bitwise operam em ",(0,n.kt)("strong",{parentName:"p"},"Long Integer")," express\xf5es ou valores."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Se passar um valor Inteiro ou Real a um operador bitwise, 4D avalia o valor como um valor Long Integer antes de calcular a express\xe3o que utiliza o operador bitwise.")),(0,n.kt)("p",null,"Ao utilizar os operadores bitwise, deve pensar num valor Long Integer como um array de 32 bits. Os bits s\xe3o numerados de 0 a 31, da direita para a esquerda."),(0,n.kt)("p",null,"J\xe1 que cada bit pode ser igual a 0 ou 1, tamb\xe9m se pode pensar num valor Long Integer como um valor onde se pode armazenar 32 valores booleanos. Um bit igual a 1 significa ",(0,n.kt)("strong",{parentName:"p"},"True")," e um bit igual a 0 significa ",(0,n.kt)("strong",{parentName:"p"},"False"),"."),(0,n.kt)("p",null,"Uma express\xe3o que utilizar um operador Bitwise retorna um valor Long Integer, exceto para o operador Bit Test, onde a express\xe3o retorna um valor Booleano. A tabela a seguir lista os operadores bitwise e sua sintaxe:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operator"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise AND"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"&"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long & Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise OR (inclusive)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"|"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ","|"," Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise OR (exclusivo)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\\^","|"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long \\^","|"," E. long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Left Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<<"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long << Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Right Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),">>"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long >> Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Set"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?+"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ?+ Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Clear"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"?-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ?- Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long (ver nota 2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Test"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"??"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Long ?? Long"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean (ver nota 2)")))),(0,n.kt)("h4",r({},{id:"notas"}),"Notas"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Para as opera\xe7\xf5es ",(0,n.kt)("inlineCode",{parentName:"li"},"Left Bit Shift")," e ",(0,n.kt)("inlineCode",{parentName:"li"},"Right Bit Shift")," , o segundo operador indica o n\xfamero de posi\xe7\xf5es pelas quais os bits do primeiro operador ser\xe3o deslocados no valor resultante. Portanto, este segundo operador deve estar entre 0 e 31. Note-se, no entanto, que o deslocamento por 0 retorna um valor inalterado e o deslocamento por mais de 31 bits retorna 0x00000000 porque todos os bits s\xe3o perdidos. Se passar outro valor como segundo operando, o resultado n\xe3o \xe9 significativo."),(0,n.kt)("li",{parentName:"ol"},"Para o conjunto de bits `",(0,n.kt)("inlineCode",{parentName:"li"},", "),"Bit Clear",(0,n.kt)("inlineCode",{parentName:"li"},"e"),"Bit Test` opera\xe7\xf5es , o segundo operando indica o n\xfamero do bit sobre o qual se deve agir. Portanto, este segundo operador deve situar-se entre 0 e 31; caso contr\xe1rio, o resultado da express\xe3o n\xe3o \xe9 significativo.")),(0,n.kt)("p",null,"O quadro seguinte lista os operadores bitwise e os seus efeitos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise AND"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cada bit resultante \xe9 o E l\xf3gico dos bits nos dois operandos. Aqui est\xe1 a tabela l\xf3gica AND:",(0,n.kt)("li",null,"1 & 1 --\x3e 1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"0 & 1 --\x3e 0"),(0,n.kt)("li",null,"1 & 0 --\x3e 0"),(0,n.kt)("li",null,"0 & 0 --\x3e 0"),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."),(0,n.kt)("td",r({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.| |Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.",(0,n.kt)("strong",{parentName:"p"},"Note:")," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.| |Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. |Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. |Bit Test|Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Retorna Falso se, no primeiro operando, o bit cujo n\xfamero \xe9 indicado pelo segundo operando for igual a 0.|"),(0,n.kt)("h3",r({},{id:"exemplos"}),"Exemplos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Exemplo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Resultados"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise AND"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF & 0xFF00FF00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise OR (inclusive)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF ","|"," 0xFF00FF00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0xFF00FFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bitwise OR (exclusivo)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF \\^","|"," 0xFF00FF00"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0xFF0000FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Left Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF << 8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00FFFF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Right Bit Shift"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x0000FFFF >> 8"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x000000FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Set"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00000000 ?+ 16"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Clear"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000 ?- 16"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bit Test"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0x00010000 ?? 16"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")))))}m.isMDXComponent=!0}}]);