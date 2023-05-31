"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26817],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(o),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},34550:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});o(67294);var n=o(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const a={id:"collection",title:"Collection"},i=void 0,c={unversionedId:"Concepts/collection",id:"version-18/Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/pt/18/Concepts/collection",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Par\xe2metros",permalink:"/docs/pt/18/Concepts/boolean"},next:{title:"Date",permalink:"/docs/pt/18/Concepts/date"}},s={},p=[{value:"Inicializa\xe7\xe3o",id:"inicializa\xe7\xe3o",level:2},{value:"Cole\xe7\xe3o regular ou partilhada",id:"cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"Collection methods",id:"collection-methods",level:2},{value:"par\xe2metro caminoPropriedade",id:"par\xe2metro-caminopropriedade",level:3}],m={toc:p};function u(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)("wrapper",r({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null)."),(0,n.kt)("p",null,"To manage Collection type variables you must use object notation (see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/Concepts/object#syntax-basics"}),"Syntax basics"),")."),(0,n.kt)("p",null,"Para acessar a um elemento de cole\xe7\xe3o, \xe9 necess\xe1rio passar o n\xfamero do elemento dentro de par\xeanteses rectos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,n.kt)("p",null,"You can pass any valid 4D expression which returns a positive integer in expression. Exemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Aten\xe7\xe3o:")," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."),(0,n.kt)("p",null,"You can assign a value to a collection element or get a collection element value using object notation:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,n.kt)("p",null,"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,n.kt)("h2",r({},{id:"inicializa\xe7\xe3o"}),"Inicializa\xe7\xe3o"),(0,n.kt)("p",null,"Collections must have been initialized, for example using the ",(0,n.kt)("inlineCode",{parentName:"p"},"New collection")," command, otherwise trying to read or modify their elements will generate a syntax error."),(0,n.kt)("p",null,"Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," C_COLLECTION($colVar) //creation of collection type 4D variable\n $colVar:=New collection //initialization of the collection and assignment to the 4D variable\n")),(0,n.kt)("h3",r({},{id:"cole\xe7\xe3o-regular-ou-partilhada"}),"Cole\xe7\xe3o regular ou partilhada"),(0,n.kt)("p",null,"Pode criar dois tipos de cole\xe7\xf5es:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"regular (non-shared) collections, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"New collection")," command. Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."),(0,n.kt)("li",{parentName:"ul"},"shared collections, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"New shared collection")," command. Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,n.kt)("inlineCode",{parentName:"li"},"Use...End use")," structures. For more information, refer to the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/18/Concepts/shared"}),"Shared objects and collections")," section.")),(0,n.kt)("h2",r({},{id:"collection-methods"}),"Collection methods"),(0,n.kt)("p",null,"4D collection references benefit from special methods (sometimes named ",(0,n.kt)("em",{parentName:"p"},"member functions"),"). Thanks to object notation, these methods can be applied to collection references using the following syntax:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"{$result:=}myCollection.memberFunction( {params} )")),(0,n.kt)("p",null,"Note that, even if it does not have parameters, a member function must be called with () parenthesis, otherwise a syntax error is generated."),(0,n.kt)("p",null,"Por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n")),(0,n.kt)("p",null,"Some methods return the original collection after modification, so that you can run the calls in a sequence:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,n.kt)("h3",r({},{id:"par\xe2metro-caminopropriedade"}),"par\xe2metro caminoPropriedade"),(0,n.kt)("p",null,"Several methods accept a ",(0,n.kt)("em",{parentName:"p"},"propertyPath")," as parameter. Este par\xe2metro significa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'um nome de objeto propriedade por exemplo "Sobrenome"'),(0,n.kt)("li",{parentName:"ul"},'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning:"),' When using methods and propertyPath parameters, you cannot use ".", "',"[ ]",'", or spaces in property names since it will prevent 4D from correctly parsing the path:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n')))}u.isMDXComponent=!0}}]);