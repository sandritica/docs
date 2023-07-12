"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50707],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>u});var r=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function n(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),d=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},m=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),c=d(o),u=t,v=c["".concat(l,".").concat(u)]||c[u]||p[u]||s;return o?r.createElement(v,i(i({ref:a},m),{},{components:o})):r.createElement(v,i({ref:a},m))}));function u(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=o.length,i=new Array(s);i[0]=c;var n={};for(var l in a)hasOwnProperty.call(a,l)&&(n[l]=a[l]);n.originalType=e,n.mdxType="string"==typeof e?e:t,i[1]=n;for(var d=2;d<s;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},15170:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});o(67294);var r=o(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t.apply(this,arguments)}function s(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}const i={id:"variables",title:"Vari\xe1veis."},n=void 0,l={unversionedId:"Concepts/variables",id:"version-18/Concepts/variables",title:"Vari\xe1veis.",description:"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam os dados permanentemente no disco; as vari\xe1veis armazenam os dados na mem\xf3ria de forma temporal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/pt/18/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"variables",title:"Vari\xe1veis."},sidebar:"docs",previous:{title:"Diferente de",permalink:"/docs/pt/18/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/pt/18/Concepts/arrays"}},d={},m=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Atribui\xe7\xe3o de dados",id:"atribui\xe7\xe3o-de-dados",level:2},{value:"Vari\xe1veis locais, processo e inter-processo",id:"vari\xe1veis-locais-processo-e-inter-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:3},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:3},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:3}],p={toc:m};function c(e){var{components:a}=e,o=s(e,["components"]);return(0,r.kt)("wrapper",t({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. ",(0,r.kt)("strong",{parentName:"p"},"Os campos")," armazenam os dados permanentemente no disco; ",(0,r.kt)("strong",{parentName:"p"},"as vari\xe1veis")," armazenam os dados na mem\xf3ria de forma temporal."),(0,r.kt)("p",null,"Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as vari\xe1veis \xe9 mais ou menos a mesma coisa, tamb\xe9m se lhes d\xe1 nomes e tipos diferentes (ver ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/18/Concepts/data-types"}),"Tipos de dados"),")."),(0,r.kt)("p",null,"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. Nos seus formul\xe1rios, pode exibir vari\xe1veis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relat\xf3rios. Desta forma, vari\xe1veis de \xe1rea edit\xe1veis ou n\xe3o edit\xe1veis atuam tal como os campos, e os mesmos controles incorporados est\xe3o dispon\xedveis ao serem criados. Vari\xe1veis formul\xe1rio podem controlar bot\xf5es, list boxes, ar\xe9as de rolagem, bot\xf5es de imagem, e assim por diante, ou exibir resultados de c\xe1lculos que n\xe3o precisam ser salvos."),(0,r.kt)("h2",t({},{id:"cria\xe7\xe3o-de-vari\xe1veis"}),"Cria\xe7\xe3o de vari\xe1veis"),(0,r.kt)("p",null,'You create variables by declaring them using one of the "Compiler" or "Arrays" theme commands.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"Arrays are a particular type of variables. An array is an ordered series of variables of the same type. Para mais informa\xe7\xf5es, consulte por favor ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/18/Concepts/arrays"}),"Arrays"),"."),(0,r.kt)("p",null,"Por exemplo, se quiser definir uma vari\xe1vel texto, escreva:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_TEXT(myText)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Although it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them as you do with fields. For example, if you want to create a variable that will hold the current date plus 30 days, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate is created and gets the current date plus 30 days\n")),(0,r.kt)("p",null,"Once created, you can use a variable wherever you need it in your database. For example, you might need to store the text variable in a field of same type:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,r.kt)("p",null,"Seguem-se algumas declara\xe7\xf5es de vari\xe1veis b\xe1sicas:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"\n C_BLOB(vxMyBlob) // A vari\xe1vel processo vxMyBlob se declara como uma vari\xe1vel de tipo BLOB\n C_DATE($vdCurDate) // A vari\xe1vel local $vdCurDate se declara como uma vari\xe1vel de tipo Data\n C_LONGINT(vg1;vg2;vg3) // As 3 vari\xe1veis de processo vg1, vg2 y vg3 se declaram como vari\xe1veis de tipo Inteiro longo\n C_OBJECT($vObj) // A vari\xe1vel local $vObj se declara como uma vari\xe1vel de tipo Objeto\n C_COLLECTION($vCol) // A vari\xe1vel local $vCol se declara como uma vari\xe1ve de tipo Cole\xe7\xe3o\n ARRAY LONGINT(alAnArray;10) //A vari\xe1vel do processo alAnArray se declara como um array Inteiro longo de 10 elementos\n")),(0,r.kt)("h2",t({},{id:"atribui\xe7\xe3o-de-dados"}),"Atribui\xe7\xe3o de dados"),(0,r.kt)("p",null,"Os dados podem ser colocados e copiados de vari\xe1veis e arrays. Colocar dados em uma vari\xe1vel \xe9 chamado ",(0,r.kt)("strong",{parentName:"p"},"atribuiindo os dados a uma vari\xe1vel")," e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos."),(0,r.kt)("p",null,"The assignment operator is the primary way to create a variable and to put data into it. Escreve-se o nome da vari\xe1vel que se pretende criar no lado esquerdo do operador de atribui\xe7\xe3o. Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,r.kt)("p",null,"cria a vari\xe1vel ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," e coloca o n\xfamero 3 na mesma. Se o MyNumber j\xe1 existe, ent\xe3o o n\xfamero 3 \xe9 apenas colocado nele."),(0,r.kt)("p",null,"Naturalmente, as vari\xe1veis n\xe3o seriam muito \xfateis se n\xe3o se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribui\xe7\xe3o. Se precisar  colocar o valor do MyNumber num campo chamado ","[Products]","Size, escreva ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," no lado direito do operador de atribui\xe7\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,r.kt)("p",null,"Neste caso, ",(0,r.kt)("em",{parentName:"p"},"[Products]","Tamanho")," seria igual a 3. Este exemplo \xe9 bastante simples, mas ilustra a forma fundamental como os dados s\xe3o transferidos de um local para outro utilizando a l\xedngua."),(0,r.kt)("p",null,"Atribui-se dados a elementos de matriz utilizando chaves ({...}):"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,r.kt)("h2",t({},{id:"vari\xe1veis-locais-processo-e-inter-processo"}),"Vari\xe1veis locais, processo e inter-processo"),(0,r.kt)("p",null,"Pode criar tr\xeas tipos de vari\xe1veis: ",(0,r.kt)("strong",{parentName:"p"},"local"),", ",(0,r.kt)("strong",{parentName:"p"},"processo"),", e ",(0,r.kt)("strong",{parentName:"p"},"interprocesso"),". A diferen\xe7a entre os tr\xeas tipos de elementos \xe9 o seu alcance, ou os objectos para os quais est\xe3o dispon\xedveis."),(0,r.kt)("h3",t({},{id:"vari\xe1veis-locais"}),"Vari\xe1veis locais"),(0,r.kt)("p",null,'Uma vari\xe1vel local \xe9, como o seu nome indica, local para um m\xe9todo - apenas acess\xedvel dentro do m\xe9todo em que foi criada e n\xe3o acess\xedvel fora desse m\xe9todo. Ser local a um m\xe9todo \xe9 formalmente referido como sendo "de \xe2mbito local". As vari\xe1veis locais s\xe3o utilizadas para restringir uma vari\xe1vel de modo a que esta funcione apenas dentro do m\xe9todo.'),(0,r.kt)("p",null,"Poder\xe1 querer utilizar uma vari\xe1vel local para:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evitar conflitos com os nomes de outras vari\xe1veis"),(0,r.kt)("li",{parentName:"ul"},"Utilizar dados temporariamente"),(0,r.kt)("li",{parentName:"ul"},"Reduzir o n\xfamero de vari\xe1veis do processo")),(0,r.kt)("p",null,"O nome de uma vari\xe1vel local come\xe7a sempre com um sinal de d\xf3lar ($) e pode conter at\xe9 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado."),(0,r.kt)("p",null,"When you are working in a database with many methods and variables, you often find that you need to use a variable only within the method on which you are working. Pode criar e utilizar uma vari\xe1vel local no m\xe9todo sem se preocupar se utilizou o mesmo nome de vari\xe1vel noutro lugar."),(0,r.kt)("p",null,"Frequently, in a database, small pieces of information are needed from the user. O comando ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," pode obter esta informa\xe7\xe3o. Apresenta uma caixa de di\xe1logo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informa\xe7\xe3o que o utilizador introduziu. Normalmente n\xe3o precisa de manter esta informa\xe7\xe3o nos seus m\xe9todos durante muito tempo. Esta \xe9 uma forma t\xedpica de utilizar uma vari\xe1vel local. Aqui um exemplo simples:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Por favor insira o seu ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,r.kt)("p",null,"Este m\xe9todo pede simplesmente ao utilizador que introduza uma identifica\xe7\xe3o. Coloca a resposta numa vari\xe1vel local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este m\xe9todo termina, a vari\xe1vel local $vsID \xe9 apagada da mem\xf3ria. Isto \xe9 \xf3timo, porque a vari\xe1vel \xe9 necess\xe1ria apenas uma vez e apenas neste m\xe9todo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," Os par\xe2metros $1, $2... passados para os m\xe9todos s\xe3o vari\xe1veis locais. Para mais informa\xe7\xf5es, consultar ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/pt/18/Concepts/parameters"}),"Par\xe2metros"),"."),(0,r.kt)("h3",t({},{id:"vari\xe1veis-processo"}),"Vari\xe1veis processo"),(0,r.kt)("p",null,"Uma vari\xe1vel de processo s\xf3 est\xe1 dispon\xedvel dentro de um processo. \xc9 acess\xedvel ao m\xe9todo do processo e a qualquer outro m\xe9todo chamado de dentro do processo."),(0,r.kt)("p",null,"Uma vari\xe1vel de processo n\xe3o tem um prefixo antes do seu nome. Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."),(0,r.kt)("p",null,'No modo interpretado, as vari\xe1veis s\xe3o mantidas dinamicamente; s\xe3o criadas e apagadas da mem\xf3ria "on the fly". No modo compilado, todos os processos que cria (processos de usu\xe1rio) partilham a mesma defini\xe7\xe3o de vari\xe1veis de processo, mas cada processo tem um exemplo diferente para cada vari\xe1vel. Por exemplo, a vari\xe1vel myVar \xe9 uma vari\xe1vel no processo P_1 e outra no processo P_2.'),(0,r.kt)("p",null,'Um processo pode "espiar e cutucar" vari\xe1veis de processo de outro processo usando os comandos ',(0,r.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". \xc9 boa pr\xe1tica de programa\xe7\xe3o restringir a utiliza\xe7\xe3o destes comandos \xe0 situa\xe7\xe3o para a qual foram adicionados \xe0 4D:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comunica\xe7\xe3o interprocessada em locais espec\xedficos ou o seu c\xf3digo"),(0,r.kt)("li",{parentName:"ul"},"Gest\xe3o de arrastar e soltar entre processos"),(0,r.kt)("li",{parentName:"ul"},"Em Cliente/Servidor, comunica\xe7\xe3o entre os processos nas m\xe1quinas do cliente e os procedimentos armazenados a correr nas m\xe1quinas do servidor")),(0,r.kt)("p",null,"Para mais informa\xe7\xf5es, ver o cap\xedtulo ",(0,r.kt)("strong",{parentName:"p"},"Processos")," e a descri\xe7\xe3o destes comandos."),(0,r.kt)("h3",t({},{id:"vari\xe1veis-interprocesso"}),"Vari\xe1veis interprocesso"),(0,r.kt)("p",null,"Interprocess variables are available throughout the database and are shared across all cooperative processes. S\xe3o utilizados principalmente para partilhar informa\xe7\xe3o entre processos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"O uso de vari\xe1veis interprocessadas n\xe3o \xe9 recomendado, uma vez que n\xe3o est\xe3o dispon\xedveis a partir de processos preventivos e tendem a tornar o c\xf3digo mais dif\xedcil para manuten\xe7\xe3o.")),(0,r.kt)("p",null,"The name of an interprocess variable always begins with the symbols (",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),") \u2014 a \u201cless than\u201d sign followed by a \u201cgreater than\u201d sign\u2014 followed by 31 characters."),(0,r.kt)("p",null,"Em Cliente/Servidor, cada m\xe1quina (m\xe1quinas Cliente e m\xe1quina Servidor) partilham a mesma defini\xe7\xe3o de vari\xe1veis interprocessadas, mas cada m\xe1quina tem um exemplo diferente para cada vari\xe1vel."))}c.isMDXComponent=!0}}]);