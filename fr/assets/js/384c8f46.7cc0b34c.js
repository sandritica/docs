"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,N=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(N,i(i({ref:t},p),{},{components:n})):r.createElement(N,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"number",title:"Num\xe9rique (R\xe9el, Entier, Entier long)"},u=void 0,o={unversionedId:"Concepts/number",id:"version-19-R7/Concepts/number",title:"Num\xe9rique (R\xe9el, Entier, Entier long)",description:"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/Concepts/dt_number.md",sourceDirName:"Concepts",slug:"/Concepts/number",permalink:"/docs/fr/19-R7/Concepts/number",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"number",title:"Num\xe9rique (R\xe9el, Entier, Entier long)"},sidebar:"docs",previous:{title:"Null et Indefinie",permalink:"/docs/fr/19-R7/Concepts/null-undefined"},next:{title:"Object",permalink:"/docs/fr/19-R7/Concepts/object"}},s={},p=[{value:"Constantes litt\xe9rales num\xe9riques",id:"constantes-litt\xe9rales-num\xe9riques",level:2},{value:"Op\xe9rateurs sur les nombres",id:"op\xe9rateurs-sur-les-nombres",level:2},{value:"Priorit\xe9",id:"priorit\xe9",level:3},{value:"Op\xe9rateurs sur les bits",id:"op\xe9rateurs-sur-les-bits",level:2},{value:"Notes",id:"notes",level:4},{value:"Exemples",id:"exemples",level:3}],d={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Num\xe9rique est un terme g\xe9n\xe9rique utilis\xe9 pour :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les champs, variables ou expression de type R\xe9el. Les nombres de type R\xe9el sont compris dans l'intervalle \xb11.7e\xb1308 (13 chiffres significatifs)."),(0,r.kt)("li",{parentName:"ul"},"Les champs, variables ou expression de type Entier long. Les nombres de type Entier long (4 octets) sont compris dans l'intervalle -2^31..(2^31)-1."),(0,r.kt)("li",{parentName:"ul"},"Les champs, variables ou expression de type Entier. Les nombres de type Entier (2 octets) sont compris dans l'intervalle -32 768..32 767.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," Lorsqu'elles sont utilis\xe9es dans le langage 4D, les valeurs des champs de type Entier sont automatiquement converties en Entier long."),(0,r.kt)("p",null,"Vous pouvez assigner tout nombre d'un type num\xe9rique \xe0 un nombre d'un autre type num\xe9rique, 4D effectue automatiquement la conversion, en tronquant ou en arrondissant les valeurs si n\xe9cessaire. Notez cependant que lorsqu'une valeur est situ\xe9e en-dehors de l'intervalle du type de destination, 4D ne pourra la convertir. Vous pouvez m\xe9langer tous les types de num\xe9riques au sein d'une m\xeame expression."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note :")," Dans ce manuel de r\xe9f\xe9rence du langage 4D, quel que soit le type pr\xe9cis des donn\xe9es, les param\xe8tres de type R\xe9el, Entier et Entier long dans les descriptions des commandes sont appel\xe9s num\xe9riques, sauf sp\xe9cification explicite."),(0,r.kt)("h2",a({},{id:"constantes-litt\xe9rales-num\xe9riques"}),"Constantes litt\xe9rales num\xe9riques"),(0,r.kt)("p",null,"Une constante litt\xe9rale num\xe9rique s\u2019\xe9crit comme un nombre r\xe9el. Voici quelques exemples de constantes num\xe9riques :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"27\n123.76\n0.0076\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Le s\xe9parateur d\xe9cimal est par d\xe9faut le point (.), quelle que soit la langue du syst\xe8me. Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" dans la Page M\xe9thodes des Pr\xe9f\xe9rences, vous devez utiliser le s\xe9parateur d\xe9fini dans votre syst\xe8me.')),(0,r.kt)("p",null,"Les nombres n\xe9gatifs s\u2019\xe9crivent pr\xe9c\xe9d\xe9s du signe moins (-). Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"-27\n-123.76\n-0.0076\n")),(0,r.kt)("h2",a({},{id:"op\xe9rateurs-sur-les-nombres"}),"Op\xe9rateurs sur les nombres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Syntaxe"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Retourne"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Addition"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre + Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2 + 3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Soustraction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre - Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3 \u2013 2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Multiplication"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number * Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5 * 2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Division"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number / Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5 / 2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Division enti\xe8re"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre \\ Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5 \\ 2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Modulo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre % Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5 % 2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Exponentiation"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre ^ Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2 ^ 3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Egalit\xe9"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre = Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 = 10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 = 11"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"In\xe9galit\xe9"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre # Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 #11"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 # 10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Sup\xe9rieur \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre > Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"11 > 10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 > 11"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Inf\xe9rieur \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre < Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 < 11"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"11 < 10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Sup\xe9rieur ou \xe9gal \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre >= Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"11 >= 10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 >= 11"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Inf\xe9rieur ou \xe9gal \xe0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Nombre <= Nombre"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10 <= 11"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"11 <= 10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("p",null,"L'op\xe9rateur modulo % divise le premier nombre par le second et retourne le reste de la division enti\xe8re. Voici quelques exemples :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10 % 2 retourne 0 car la division de 10 par 2 ne donne pas de reste."),(0,r.kt)("li",{parentName:"ul"},"10 % 3 retourne 1 car le reste est 1."),(0,r.kt)("li",{parentName:"ul"},"10,5 % 2 retourne 0 car le reste n'est pas un nombre entier.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ATTENTION :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"L'op\xe9rateur modulo % retourne des valeurs significatives avec des nombres appartenant \xe0 la cat\xe9gorie des entiers longs (de \u20132^31 \xe0 +2^31 moins 1). Pour calculer le modulo de nombres qui ne sont pas dans cet intervalle, utilisez la fonction ",(0,r.kt)("inlineCode",{parentName:"li"},"Modulo"),"."),(0,r.kt)("li",{parentName:"ul"},"L'op\xe9rateur division enti\xe8re \\ retourne des valeurs significatives avec des nombres entiers uniquement.")),(0,r.kt)("h3",a({},{id:"priorit\xe9"}),"Priorit\xe9"),(0,r.kt)("p",null,"L'ordre dans lequel une expression est \xe9valu\xe9e s'appelle la priorit\xe9. 4D applique strictement une r\xe8gle de priorit\xe9 de gauche \xe0 droite. L'ordre alg\xe9brique n'est pas appliqu\xe9. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"})," 3+4*5\n")),(0,r.kt)("p",null,"retourne 35 car l'expression est \xe9valu\xe9e comme 3 + 4, qui donne 7, multipli\xe9 par 5, ce qui donne 35."),(0,r.kt)("p",null,"Les parenth\xe8ses doivent \xeatre utilis\xe9es pour forcer l'ordre de calcul en fonction de vos besoins. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"})," 3+(4*5)\n")),(0,r.kt)("p",null,"retourne 23 car l'expression (4 * 5) est \xe9valu\xe9e en premier lieu. Le r\xe9sultat (20) est alors ajout\xe9 \xe0 3, ce qui donne le r\xe9sultat final 23."),(0,r.kt)("p",null,"Des parenth\xe8ses peuvent \xeatre incluses dans d'autres parenth\xe8ses. Assurez-vous qu'il y ait une parenth\xe8se fermante pour chaque parenth\xe8se ouverte. Une parenth\xe8se manquante ou plac\xe9e \xe0 un mauvais endroit peut soit donner un r\xe9sultat erron\xe9, soit renvoyer une expression invalide. De plus, si vous avez l'intention de compiler vos applications, vous devez vous assurer d'une bonne utilisation des parenth\xe8ses. Le compilateur interpr\xe8tera toute parenth\xe8se manquante ou superflue comme une erreur de syntaxe."),(0,r.kt)("h2",a({},{id:"op\xe9rateurs-sur-les-bits"}),"Op\xe9rateurs sur les bits"),(0,r.kt)("p",null,"Les op\xe9rateurs sur les bits s'appliquent \xe0 des expressions ou valeurs de type ",(0,r.kt)("strong",{parentName:"p"},"Entier long"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous passez une valeur de type Entier ou R\xe9el \xe0 un op\xe9rateur sur les bits, 4D la convertit en Entier long avant de calculer le r\xe9sultat de l'expression.")),(0,r.kt)("p",null,"Lorsque vous employez des op\xe9rateurs sur les bits, vous devez consid\xe9rer une valeur de type Entier long comme un tableau de 32 bits. Les bits sont num\xe9rot\xe9s de 0 \xe0 31, de droite \xe0 gauche."),(0,r.kt)("p",null,"Comme un bit peut valoir 0 (z\xe9ro) ou 1, vous pouvez \xe9galement consid\xe9rer une valeur de type Entier long comme une expression dans laquelle vous pouvez stocker 32 valeurs de type Bool\xe9en. Lorsque le bit vaut 1, la valeur est ",(0,r.kt)("strong",{parentName:"p"},"Vrai")," et lorsque le bit vaut 0, la valeur est ",(0,r.kt)("strong",{parentName:"p"},"Faux"),"."),(0,r.kt)("p",null,"Une expression utilisant un op\xe9rateur sur les bits retourne une valeur de type Entier long, \xe0 l'exception de l'op\xe9rateur Tester bit avec lequel l'expression retourn\xe9e est du type Bool\xe9en. Le tableau suivant fournit la liste des op\xe9rateurs sur les bits et leur syntaxe :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9rateur"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Syntaxe"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Retourne"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ET"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"&"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long & E. E. long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"E. long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"OU (inclusif)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"|"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long ","|"," E. long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"E. long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"OU (exclusif)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\\^","|"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long \\^","|"," E. long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"E. long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 gauche"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"<<"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"E. Long << E. Long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long (voir note n\xb01)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 droite"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),">>"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"E. Long >> E. Long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long (voir note n\xb01)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mettre bit \xe0 1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?+"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long ?+ E. E. long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long (voir note n\xb02)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mettre bit \xe0 0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"?-"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long ??"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long (voir note n\xb02)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Tester bit"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"??"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"long & E. E. long"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Bool\xe9en (voir note n\xb02)")))),(0,r.kt)("h4",a({},{id:"notes"}),"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dans les op\xe9rations utilisant ",(0,r.kt)("inlineCode",{parentName:"li"},"D\xe9caler bits \xe0 gauche")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"D\xe9caler bits \xe0 droite"),", le second op\xe9rande indique le nombre de d\xe9calages de bits du premier op\xe9rande \xe0 effectuer dans la valeur retourn\xe9e. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31. Notez qu'un d\xe9calage de 0 retourne une valeur inchang\xe9e et qu'un d\xe9calage de plus de 31 bits retourne 0x00000000 car tous les bits sont perdus. Si vous passez une autre valeur en tant que second op\xe9rande, le r\xe9sultat sera non significatif."),(0,r.kt)("li",{parentName:"ol"},"Dans les op\xe9rations utilisant ",(0,r.kt)("inlineCode",{parentName:"li"},"Mettre bit \xe0 1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Mettre bit \xe0 0")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"Tester bit"),", le second op\xe9rande indique le num\xe9ro du bit sur lequel agir. Par cons\xe9quent, ce second op\xe9rande doit \xeatre compris entre 0 et 31, sinon le r\xe9sultat de l'expression sera non significatif.")),(0,r.kt)("p",null,"Le tableau suivant dresse la liste des op\xe9rateurs sur les bits et de leurs effets :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ET"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Chaque bit retourn\xe9 est le r\xe9sultat de l'op\xe9ration ET logique appliqu\xe9e aux deux bits op\xe9randes. Voici la table du ET logique :",(0,r.kt)("li",null,"1 & 1 --\x3e 1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("li",null,"0 & 1 --\x3e 0"),(0,r.kt)("li",null,"1 & 0 --\x3e 0"),(0,r.kt)("li",null,"0 & 0 --\x3e 0"),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.| |Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.",(0,r.kt)("strong",{parentName:"p"},"Note:")," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.| |Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. |Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. |Bit Test|Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Retourne Faux si, dans le premier op\xe9rande, le bit dont le num\xe9ro est indiqu\xe9 par le second op\xe9rande vaut 0.|"),(0,r.kt)("h3",a({},{id:"exemples"}),"Exemples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Op\xe9ration"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Exemple"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"R\xe9sultat"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ET"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x0000FFFF & 0xFF00FF00"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x0000FF00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"OU (inclusif)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x0000FFFF ","|"," 0xFF00FF00"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0xFF00FFFF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"OU (exclusif)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x0000FFFF \\^","|"," 0xFF00FF00"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0xFF0000FF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 gauche"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x0000FFFF << 8"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x00FFFF00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"D\xe9caler bits \xe0 droite"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x0000FFFF >> 8"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x000000FF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mettre bit \xe0 1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x00000000 ?+ 16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x00010000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mettre bit \xe0 0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x00010000 ?- 16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Tester bit"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0x00010000 ?? 16"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Vrai")))))}m.isMDXComponent=!0}}]);