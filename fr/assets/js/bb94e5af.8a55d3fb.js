"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=a(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||u;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var a=2;a<u;a++)o[a]=n[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"develop-plug-ins",title:"D\xe9veloppement de Plug-ins"},l=void 0,s={unversionedId:"Extensions/develop-plug-ins",id:"version-20/Extensions/develop-plug-ins",title:"D\xe9veloppement de Plug-ins",description:"Pourquoi un plug-in ?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/fr/20/Extensions/develop-plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"develop-plug-ins",title:"D\xe9veloppement de Plug-ins"},sidebar:"docs",previous:{title:"D\xe9veloppement de composants",permalink:"/docs/fr/20/Extensions/develop-components"},next:{title:"Web Applications",permalink:"/docs/fr/20/category/web-applications"}},a={},p=[{value:"Pourquoi un plug-in ?",id:"pourquoi-un-plug-in-",level:2},{value:"Qu&#39;est-ce qu&#39;un plug-in et \xe0 quoi sert-il ?",id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-",level:2},{value:"Note importante",id:"note-importante",level:3},{value:"Comment cr\xe9er un plug-in ?",id:"comment-cr\xe9er-un-plug-in-",level:2},{value:"Partager des plug-ins",id:"partager-des-plug-ins",level:2}],c={toc:p};function d(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"pourquoi-un-plug-in-"}),"Pourquoi un plug-in ?"),(0,r.kt)("p",null,"Bien que 4D propose des centaines de m\xe9thodes int\xe9gr\xe9es permettant de manipuler des objets et des enregistrements, et d'impl\xe9menter une interface utilisateur, une utilisation ou des fonctionnalit\xe9s sp\xe9ciales (parfois d\xe9pendantes de la plate-forme) peuvent \xeatre n\xe9cessaires : l'une peut n\xe9cessiter ODBC sous Windows, une autre peut n\xe9cessiter des services Apple sous macOS, et un autre peut souhaiter impl\xe9menter des outils statistiques sp\xe9cifiques, une connexion \xe0 un r\xe9seau social, une plateforme de paiement, un acc\xe8s \xe0 un fichier sur le r\xe9seau, une interface utilisateur sp\xe9ciale ou une structure d'image priv\xe9e."),(0,r.kt)("p",null,"Il est \xe9vident que couvrir tous les domaines des syst\xe8mes d'exploitation macOS et Windows au moyen de commandes 4D m\xe8nerait certainement \xe0 un produit contenant des milliers de commandes et, dans le m\xeame temps, la plupart des utilisateurs n'auraient pas besoin d'un si grand ensemble de fonctionnalit\xe9s. De plus, la cr\xe9ation d'un outil aussi complet rendrait l'environnement 4D incroyablement complexe et demanderait des mois d'\xe9tude \xe0 la plupart des utilisateurs avant de pouvoir obtenir des r\xe9sultats utiles."),(0,r.kt)("p",null,"La nature modulaire de l'environnement 4D permet la cr\xe9ation d'applications de base, mais n'exclut pas le d\xe9veloppement de syst\xe8mes extr\xeamement complexes. L'architecture du plug-in 4D ouvre l'environnement 4D \xe0 tout type d'application ou d'utilisateur. Les plug-ins 4D multiplient la puissance et la productivit\xe9 de cette application ou de l'utilisateur."),(0,r.kt)("h2",i({},{id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-"}),"Qu'est-ce qu'un plug-in et \xe0 quoi sert-il ?"),(0,r.kt)("p",null,"Un plug-in est un morceau de code que 4D lance au d\xe9marrage. Il ajoute des fonctionnalit\xe9s \xe0 4D et augmente ainsi sa capacit\xe9."),(0,r.kt)("p",null,"Habituellement, un plug-in fait des choses :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Que 4D ne peut pas effectuer (c'est-\xe0-dire une technologie de plate-forme sp\xe9cifique),"),(0,r.kt)("li",{parentName:"ul"},"Qui sera tr\xe8s difficile \xe0 \xe9crire en utilisant uniquement 4D,"),(0,r.kt)("li",{parentName:"ul"},"Qui sont uniquement disponibles en tant que point d'entr\xe9e de plug-in")),(0,r.kt)("p",null,"Un plug-in contient g\xe9n\xe9ralement un ensemble de routines donn\xe9es au d\xe9veloppeur 4D. Il peut g\xe9rer une zone externe et ex\xe9cuter un processus externe."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une ",(0,r.kt)("strong",{parentName:"li"},"routine de plug-in")," est une routine \xe9crite en langage natif (g\xe9n\xe9ralement C ou C ++) qui d\xe9clenche une action."),(0,r.kt)("li",{parentName:"ul"},"Une ",(0,r.kt)("strong",{parentName:"li"},"zone externe")," est une partie d'un formulaire pouvant presque tout afficher et interagir avec l'utilisateur si n\xe9cessaire."),(0,r.kt)("li",{parentName:"ul"},"Un ",(0,r.kt)("strong",{parentName:"li"},"processus externe")," est un processus qui s'ex\xe9cute seul, g\xe9n\xe9ralement en boucle, et qui fait quasiment tout ce qu'il souhaite. Tout le code de process appartient au plug-in, 4D est simplement pr\xe9sent pour recevoir/envoyer des \xe9v\xe9nements au process.")),(0,r.kt)("h3",i({},{id:"note-importante"}),"Note importante"),(0,r.kt)("p",null,"Un plug-in peut \xeatre tr\xe8s simple, avec une seule routine effectuant une tr\xe8s petite t\xe2che, ou tr\xe8s complexe, impliquant une centaine de routines et de domaines. Cependant, chaque d\xe9veloppeur de plug-in doit se rappeler qu'un plug-in est un \"\xe9chantillon\" de code. C'est le plug-in qui s'ex\xe9cute dans 4D, et non l'inverse. En tant que morceau de code, c'est l'h\xf4te de 4D; ce n'est pas une application autonome. Il partage le temps CPU et la m\xe9moire avec 4D et d'autres plug-ins. Il doit donc s'agir d'un code poli, qui utilise exactement ce qui est n\xe9cessaire \xe0 son fonctionnement. Par exemple, dans les longues boucles, un plug-in doit appeler ",(0,r.kt)("inlineCode",{parentName:"p"},"PA_Yield ()")," pour donner du temps au planificateur 4D, \xe0 moins que sa t\xe2che ne soit critique aussi bien pour lui que pour l'application."),(0,r.kt)("h2",i({},{id:"comment-cr\xe9er-un-plug-in-"}),"Comment cr\xe9er un plug-in ?"),(0,r.kt)("p",null,"Sur GitHub, 4D fournit un ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/4d/4D-Plugin-SDK"}),(0,r.kt)("strong",{parentName:"a"},"plug-in SDK"))," open source, contenant le plug-in API 4D et l'assistant de plug-in 4D :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"le ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"}),(0,r.kt)("strong",{parentName:"a"},"Plugin API de 4D")),", \xe9crit en C, ajoute plus de 400 fonctions qui vous aident \xe0 cr\xe9er facilement vos propres plug-ins pour ajouter de nouvelles fonctionnalit\xe9s \xe0 votre application 4D. Les fonctions du plug-in API de 4D g\xe8rent toutes les interactions entre l'application 4D et votre plug-in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),(0,r.kt)("strong",{parentName:"a"},"L'assistant de plug-in 4D"))," est un outil essentiel qui simplifie la t\xe2che de d\xe9veloppement des plug-ins 4D. Il \xe9crit le code dont 4D a besoin pour interagir correctement avec un plug-in et le charger, afin de vous concentrer sur votre propre code.")),(0,r.kt)("h2",i({},{id:"partager-des-plug-ins"}),"Partager des plug-ins"),(0,r.kt)("p",null,"Nous vous encourageons \xe0 soutenir la communaut\xe9 des d\xe9veloppeurs 4D en partageant vos plug-ins, notamment sur la ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/topics/4d-plugin"}),"plateforme GitHub"),". Afin d'\xeatre correctement r\xe9f\xe9renc\xe9, nous vous recommandons d'utiliser la rubrique ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"4d-plugin")),"."))}d.isMDXComponent=!0}}]);