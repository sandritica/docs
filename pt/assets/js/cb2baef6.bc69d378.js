"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78543],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,v=c["".concat(l,".").concat(u)]||c[u]||m[u]||n;return t?r.createElement(v,i(i({ref:a},s),{},{components:t})):r.createElement(v,i({ref:a},s))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=c;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<n;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20348:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"interpreted-compiled",title:"Modos interpretado e compilado"},d=void 0,l={unversionedId:"Concepts/interpreted-compiled",id:"version-20/Concepts/interpreted-compiled",title:"Modos interpretado e compilado",description:"As aplica\xe7\xf5es 4D podem funcionar no modo interpretado ou compilado:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/pt/20/Concepts/interpreted-compiled",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"interpreted-compiled",title:"Modos interpretado e compilado"},sidebar:"docs",previous:{title:"Gest\xe3o de erros",permalink:"/docs/pt/20/Concepts/error-handling"},next:{title:"Componentes",permalink:"/docs/pt/20/Concepts/components"}},p={},s=[{value:"Diferen\xe7as entre c\xf3digo interpretado e compilado",id:"diferen\xe7as-entre-c\xf3digo-interpretado-e-compilado",level:2},{value:"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete",id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete",level:2},{value:"Utilizar ponteiros para evitar redigitar",id:"utilizar-ponteiros-para-evitar-redigitar",level:2}],m={toc:s};function c(e){var{components:a}=e,t=n(e,["components"]);return(0,r.kt)("wrapper",o({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As aplica\xe7\xf5es 4D podem funcionar no modo ",(0,r.kt)("strong",{parentName:"p"},"interpretado")," ou ",(0,r.kt)("strong",{parentName:"p"},"compilado"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no modo interpretado, as declara\xe7\xf5es s\xe3o lidas e traduzidas em linguagem de m\xe1quina no momento da sua execu\xe7\xe3o. Pode adicionar ou modificar o c\xf3digo sempre que precisar, a aplica\xe7\xe3o \xe9 actualizada automaticamente."),(0,r.kt)("li",{parentName:"ul"},"no modo compilado, todos os m\xe9todos s\xe3o lidos e traduzidos uma vez, na etapa de compila\xe7\xe3o. Posteriormente, a aplica\xe7\xe3o cont\xe9m apenas instru\xe7\xf5es de n\xedvel de montagem, j\xe1 n\xe3o \xe9 poss\xedvel editar o c\xf3digo.")),(0,r.kt)("p",null,"As vantagens da compila\xe7\xe3o s\xe3o:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Velocidade"),": seu banco de dados \xe9 executa de 3 a 1.000 vezes mais r\xe1pido."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Verifica\xe7\xe3o de c\xf3digo"),": sua aplica\xe7\xe3o de banco de dados se analisa para comprovar a coer\xeancia do c\xf3digo. S\xe3o detectados conflitos tanto l\xf3gicos como sint\xe1cticos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prote\xe7\xe3o:"),": quando seu banco de dados for compilado, pode eliminar o c\xf3digo interpretado. Ent\xe3o, o banco de dados compilado \xe9 funcionalmente id\xeantico ao original, exceto que a estrutura e m\xe9todos n\xe3o pode ser vista ou modificada, seja de forma deliberada ou por acidente."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Aplica\xe7\xf5es aut\xf4nomas com duplo clique"),": as aplica\xe7\xf5es compiladas tamb\xe9m podem se transformar em aplica\xe7\xf5es independentes com seu pr\xf3prio \xedcone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modo preemptivo"),": s\xf3 codigo compilado pode ser executado em processos preemptivos.")),(0,r.kt)("h2",o({},{id:"diferen\xe7as-entre-c\xf3digo-interpretado-e-compilado"}),"Diferen\xe7as entre c\xf3digo interpretado e compilado"),(0,r.kt)("p",null,"Apesar de aplica\xe7\xf5es funcionarem da mesma forma em modo compilado e interpretado, h\xe1 diferen\xe7as quando escrever c\xf3digo que ser\xe1 compilado. O 4D interpreter \xe9 mais flex\xedvel que o compilador."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Compilado"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Interpretado"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"N\xe3o pode ter um m\xe9todo com o mesmo nome que uma vari\xe1vel."),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Nenhum erro \xe9 gerado, mas prioridade \xe9 dada ao m\xe9todo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Todas as vari\xe1veis t\xeam de ser tipadas, quer atrav\xe9s de uma declara\xe7\xe3o (utilizando as palavras-chave ",(0,r.kt)("inlineCode",{parentName:"td"},"var"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"#Declare"),", ou ",(0,r.kt)("inlineCode",{parentName:"td"},"Function"),"), quer pelo compilador durante a compila\xe7\xe3o."),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"As vari\xe1veis podem ser digitadas no momento (mas n\xe3o \xe9 recomendado)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"N\xe3o \xe9 poss\xedvel alterar o tipo de dados de qualquer vari\xe1vel ou array."),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\xc9 poss\xedvel alterar o tipo de dados de uma vari\xe1vel ou de um array (n\xe3o recomendado)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"N\xe3o \xe9 poss\xedvel mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional."),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Poss\xedvel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Embora o compilador v\xe1 digitar a vari\xe1vel por voc\xea, deve especificar o tipo de dados de uma vari\xe1vel utilizando declara\xe7\xf5es quando o tipo de dados \xe9 amb\xedguo, como num formul\xe1rio."),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"A fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"td"},"Undefined")," retorna sempre False para vari\xe1veis. As vari\xe1veis s\xe3o sempre definidas."),(0,r.kt)("td",o({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),'Se tiver marcado a propriedade "Pode ser executado em processos preemptivos" para o m\xe9todo, o c\xf3digo n\xe3o deve chamar quaisquer comandos thread-unsafe ou outros m\xe9todos thread-unsafe.'),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"As propriedades do processo preemptivo s\xe3o ignoradas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"O comando ",(0,r.kt)("inlineCode",{parentName:"td"},"IDLE")," \xe9 necess\xe1rio para chamar 4D em loops espec\xedficos"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"\xc9 sempre poss\xedvel interromper 4D")))),(0,r.kt)("h2",o({},{id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete"}),"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete"),(0,r.kt)("p",null,"Os bancos n\xe3o compilados n\xe3o exigem diretivas de compilador. O int\xe9rprete digita automaticamente cada vari\xe1vel em fun\xe7\xe3o de como \xe9 utilizada em cada declara\xe7\xe3o, e uma vari\xe1vel pode voltar a ser escrita livremente em todo o banco de dados"),(0,r.kt)("p",null,"Por causa da flexibilidade, \xe9 poss\xedvel que um banco de dado possa atuar diretamente em modos interpretado e compilado."),(0,r.kt)("p",null,"Por exemplo, se escrever:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var MyInt : Integer\n")),(0,r.kt)("p",null,"e noutra parte do projecto, escreve-se:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"MyInt:=3.1416\n")),(0,r.kt)("p",null,"Neste exemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyInt")," \xe9 atribu\xeddo ao mesmo valor (3) nos modos interpretado e compilado, desde que a diretiva do compilador seja interpretada ",(0,r.kt)("em",{parentName:"p"},"antes")," da instru\xe7\xe3o de atribui\xe7\xe3o."),(0,r.kt)("p",null,"O interpretador 4D usa as diretivas do compilador para digitar vari\xe1veis. Quando o int\xe9rprete encontra uma diretiva do compilador, digita a vari\xe1vel de acordo com a diretiva. Se uma express\xe3o subsequente tentar atribuir um valor incorreto (por exemplo, atribuir um valor alfanum\xe9rico a uma vari\xe1vel num\xe9rica), a atribui\xe7\xe3o n\xe3o ser\xe1 efectuada e gerar\xe1 um erro."),(0,r.kt)("p",null,"A ordem na qual as duas declara\xe7\xf5es aparecem \xe9 irrelevante para o compilador porque primeiro escaneia o banco inteiro por diretivas de compilador. O int\xe9rprete, por\xe9m, n\xe3o \xe9 sistem\xe1tico. Interpreta as instru\xe7\xf5es pela ordem em que s\xe3o executadas. Esta ordem, como \xe9 \xf3bvio, pode mudar de sess\xe3o para sess\xe3o, dependendo do que o utilizador faz. Por isso, \xe9 importante projetar seu banco de dados de forma que as diretivas de compilador sejam executadas antes de qualquer declara\xe7\xf5es que contenham vari\xe1veis declaradas."),(0,r.kt)("h2",o({},{id:"utilizar-ponteiros-para-evitar-redigitar"}),"Utilizar ponteiros para evitar redigitar"),(0,r.kt)("p",null,"Uma vari\xe1vel n\xe3o pode ser redigida de novo. No entanto, \xe9 poss\xedvel utilizar um ponteiro para fazer refer\xeancia a vari\xe1veis de diferentes tipos de dados. Por exemplo, o seguinte c\xf3digo \xe9 permitido nos modos interpretado e compilado:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $p : Pointer\nvar $name : Text\nvar $age : Integer\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //alvo de texto para o ponteiro\n$p->:="Wesson" //atribui um valor de texto\n\n$p:=->$age  \n//novo alvo de tipo diferente para o ponteiro\n$p->:=55 //atribui um valor num\xe9rico\n')),(0,r.kt)("p",null,"Imagine uma fun\xe7\xe3o que devolve o comprimento (n\xfamero de caracteres) de valores que podem ser de qualquer tipo."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"  // Calc_Length (quantos caracteres)\n  // $vp = ponteiro para um tipo de vari\xe1vel flex\xedvel, num\xe9rica, texto, tempo, booleana\n\n#DECLARE($vp : Pointer) -> $length : Integer\nvar $result : Text  \n$result:=String($vp->)\n$length:=Length($result)\n")),(0,r.kt)("p",null,"Em seguida, este m\xe9todo pode ser chamado:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))\n')))}c.isMDXComponent=!0}}]);