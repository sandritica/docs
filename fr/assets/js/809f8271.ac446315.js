"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=i,f=d["".concat(o,".").concat(c)]||d[c]||m[c]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={id:"listOverview",title:"Liste hi\xe9rarchique"},l=void 0,o={unversionedId:"FormObjects/listOverview",id:"version-19-R7/FormObjects/listOverview",title:"Liste hi\xe9rarchique",description:"Les listes hi\xe9rarchiques sont des objets de formulaire permettant d'afficher des donn\xe9es sous forme de listes comportant un ou plusieurs niveaux qu'il est possible de d\xe9ployer ou de contracter.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/FormObjects/list_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/listOverview",permalink:"/docs/fr/19-R7/FormObjects/listOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"listOverview",title:"Liste hi\xe9rarchique"},sidebar:"docs",previous:{title:"Zone de saisie",permalink:"/docs/fr/19-R7/FormObjects/inputOverview"},next:{title:"List Box",permalink:"/docs/fr/19-R7/FormObjects/listboxOverview"}},u={},p=[{value:"Sources de donn\xe9es de liste hi\xe9rarchique",id:"sources-de-donn\xe9es-de-liste-hi\xe9rarchique",level:2},{value:"RefListe et nom d&#39;objet",id:"refliste-et-nom-dobjet",level:2},{value:"Prise en compte du @",id:"prise-en-compte-du-",level:3},{value:"Commandes g\xe9n\xe9riques utilisables avec les listes hi\xe9rarchiques",id:"commandes-g\xe9n\xe9riques-utilisables-avec-les-listes-hi\xe9rarchiques",level:2},{value:"Priorit\xe9 des commandes de propri\xe9t\xe9",id:"priorit\xe9-des-commandes-de-propri\xe9t\xe9",level:2},{value:"Gestion des \xe9l\xe9ments par position ou par r\xe9f\xe9rence",id:"gestion-des-\xe9l\xe9ments-par-position-ou-par-r\xe9f\xe9rence",level:2},{value:"Exploiter les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments (r\xe9fEl\xe9ment)",id:"exploiter-les-num\xe9ros-de-r\xe9f\xe9rence-des-\xe9l\xe9ments-r\xe9fel\xe9ment",level:3},{value:"Quand avez-vous besoin de num\xe9ros de r\xe9f\xe9rence uniques ?",id:"quand-avez-vous-besoin-de-num\xe9ros-de-r\xe9f\xe9rence-uniques-",level:3},{value:"\xc9l\xe9ment modifiable",id:"\xe9l\xe9ment-modifiable",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}],m={toc:p};function d(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)("wrapper",i({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Les listes hi\xe9rarchiques sont des objets de formulaire permettant d'afficher des donn\xe9es sous forme de listes comportant un ou plusieurs niveaux qu'il est possible de d\xe9ployer ou de contracter."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(64581).Z,width:"168",height:"162"})),(0,n.kt)("p",null,"Le cas \xe9ch\xe9ant, l'ic\xf4ne d\xe9ployer/contract\xe9e est automatiquement affich\xe9e \xe0 gauche de l'\xe9l\xe9ment. Les listes hi\xe9rarchiques prennent en charge un nombre illimit\xe9 de sous-niveaux."),(0,n.kt)("h2",i({},{id:"sources-de-donn\xe9es-de-liste-hi\xe9rarchique"}),"Sources de donn\xe9es de liste hi\xe9rarchique"),(0,n.kt)("p",null,"Le contenu d'un objet formulaire liste hi\xe9rarchique peut \xeatre initialis\xe9 de l'une des mani\xe8res suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Associer une ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/fr/19-R7/FormObjects/propertiesDataSource#choice-list"}),"\xe9num\xe9ration")," \xe0 l'objet. L'\xe9num\xe9ration doit avoir \xe9t\xe9 d\xe9finie dans l'\xe9diteur de listes en mode D\xe9veloppement."),(0,n.kt)("li",{parentName:"ul"},"Assignez directement une r\xe9f\xe9rence de liste hi\xe9rarchique \xe0 la ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#variable-or-expression"}),"variable ou \xe0 l'expression")," associ\xe9e \xe0 l'objet formulaire.")),(0,n.kt)("p",null,"Dans les deux cas, vous g\xe9rez une liste hi\xe9rarchique lors de l'ex\xe9cution via sa r\xe9f\xe9rence ",(0,n.kt)("em",{parentName:"p"},"ListRef"),", \xe0 l'aide des commandes de ",(0,n.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html"}),"liste hi\xe9rarchique")," du langage 4D."),(0,n.kt)("h2",i({},{id:"refliste-et-nom-dobjet"}),"RefListe et nom d'objet"),(0,n.kt)("p",null,"Une liste hi\xe9rarchique est \xe0 la fois un ",(0,n.kt)("strong",{parentName:"p"},"objet de langage")," existant en m\xe9moire et un ",(0,n.kt)("strong",{parentName:"p"},"objet de formulaire"),"."),(0,n.kt)("p",null,"L'",(0,n.kt)("strong",{parentName:"p"},"objet de langage")," est r\xe9f\xe9renc\xe9 de mani\xe8re unique par un identifiant interne, de type Entier long, d\xe9sign\xe9 par ",(0,n.kt)("em",{parentName:"p"},"RefListe")," dans ce manuel. Cet identifiant est retourn\xe9 par les commandes permettant de cr\xe9er des listes ",(0,n.kt)("inlineCode",{parentName:"p"},"New list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Copy list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Load list"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BLOB to list"),". Il n\u2019existe qu\u2019une seule instance en m\xe9moire de l\u2019objet de langage et toute modification effectu\xe9e sur cet objet est imm\xe9diatement r\xe9percut\xe9e dans tous les endroits o\xf9 il est utilis\xe9."),(0,n.kt)("p",null,"L'",(0,n.kt)("strong",{parentName:"p"},"objet de formulaire")," n'est pas n\xe9cessairement unique : il peut exister plusieurs repr\xe9sentations d\u2019une m\xeame liste hi\xe9rarchique dans un m\xeame formulaire ou dans des formulaires diff\xe9rents. Comme pour les autres objets de formulaire, vous d\xe9signez l'objet dans le langage via la syntaxe (*;\"NomListe\", etc.)."),(0,n.kt)("p",null,"Vous connectez l'\"objet de langage\" liste hi\xe9rarchique avec l'\"objet de formulaire\" liste hi\xe9rarchique par l'interm\xe9diaire de la variable contenant la valeur de l'identifiant unique RefListe. Par exemple, si vous avez associ\xe9 la ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#variable-or-expression"}),"variable")," mylist \xe0 l'objet de formulaire, vous \xe9crivez :"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),"mylist:=New list\n")),(0,n.kt)("p",null,"Chaque repr\xe9sentation de liste dispose de caract\xe9ristiques propres et partage des caract\xe9ristiques communes avec l\u2019ensemble des repr\xe9sentations. Les caract\xe9ristiques propres \xe0 chaque repr\xe9sentation de liste sont les suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La s\xe9lection,"),(0,n.kt)("li",{parentName:"ul"},"L\u2019\xe9tat d\xe9ploy\xe9/contract\xe9 des \xe9l\xe9ments,"),(0,n.kt)("li",{parentName:"ul"},"La position du curseur de d\xe9filement.")),(0,n.kt)("p",null,"Les autres caract\xe9ristiques (police, style, filtre de saisie, couleur, contenu de la liste, ic\xf4nes, etc.) sont communes \xe0 toutes les repr\xe9sentations et ne peuvent pas \xeatre modifi\xe9es s\xe9par\xe9ment. Par cons\xe9quent, lorsque vous utilisez des commandes se basant sur la configuration d\xe9ploy\xe9/contract\xe9 ou l'\xe9l\xe9ment courant, par exemple ",(0,n.kt)("inlineCode",{parentName:"p"},"Count list items")," (lorsque le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," final n\u2019est pas pass\xe9), il importe de pouvoir d\xe9signer sans ambigu\xeft\xe9 la repr\xe9sentation \xe0 utiliser."),(0,n.kt)("p",null,"Vous devez utiliser l'identifiant de type ",(0,n.kt)("inlineCode",{parentName:"p"},"RefListe")," avec les commandes du langage lorsque vous souhaitez d\xe9signer la liste hi\xe9rarchique r\xe9sidant en m\xe9moire. Par ailleurs, si vous souhaitez d\xe9signer la repr\xe9sentation au niveau du formulaire d'un objet Liste hi\xe9rarchique, vous devez utiliser le nom de l'objet (type cha\xeene) dans la commande, via la syntaxe (*;\"NomListe\"...)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Dans le cas des commandes d\xe9finissant des propri\xe9t\xe9s, la syntaxe bas\xe9e sur le nom d\u2019objet ne signifie pas que seul l\u2019objet de formulaire d\xe9sign\xe9 sera modifi\xe9 par la commande, mais que l\u2019action de la commande sera bas\xe9e sur l\u2019\xe9tat de cet objet. Les caract\xe9risques communes des listes hi\xe9rarchiques sont toujours modifi\xe9es dans toutes les repr\xe9sentations. Par exemple, si vous passez l\u2019instruction :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"... vous indiquez que vous souhaitez modifier la police d\u2019un \xe9l\xe9ment de la liste hi\xe9rarchique associ\xe9e \xe0 l\u2019objet de formulaire ",(0,n.kt)("em",{parentName:"p"},"mylist1"),". La commande tiendra compte de l\u2019\xe9l\xe9ment courant de l\u2019objet ",(0,n.kt)("em",{parentName:"p"},"mylist1")," pour d\xe9finir l\u2019\xe9l\xe9ment \xe0 modifier, mais cette modification sera report\xe9e dans toutes les repr\xe9sentations de la liste dans tous les process.")),(0,n.kt)("h3",i({},{id:"prise-en-compte-du-"}),"Prise en compte du @"),(0,n.kt)("p",null,"Comme pour les autres commandes de gestion des propri\xe9t\xe9 d\u2019objets, il est possible d\u2019utiliser le caract\xe8re \u201c@\u201d dans le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"NomListe"),". En principe, cette syntaxe permet de d\xe9signer un ensemble d\u2019objets dans le formulaire. Toutefois, dans le contexte des commandes de liste hi\xe9rarchique, ce principe n\u2019est pas applicable dans tous les cas. Cette syntaxe aura deux effets diff\xe9rents en fonction du type de commande :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Pour les commandes fixant des propri\xe9t\xe9s, cette syntaxe d\xe9signe tous les objets dont le nom correspond (fonctionnement standard). Par exemple, le param\xe8tre "LH@" d\xe9signe tous les objets de type liste hi\xe9rarchique dont le nom d\xe9bute par \u201cLH\u201d'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DELETE FROM LIST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"INSERT IN LIST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SELECT LIST ITEMS BY POSITION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM FONT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM ICON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM PARAMETER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SET LIST ITEM PROPERTIES")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pour les commandes r\xe9cup\xe9rant des propri\xe9t\xe9s, cette syntaxe d\xe9signe le premier objet dont le nom correspond. Ces commandes sont :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Count list items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Find in list")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Get list item font")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM ICON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM PARAMETER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM PROPERTIES")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"List item parent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"List item position")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Selected list items"))))),(0,n.kt)("h2",i({},{id:"commandes-g\xe9n\xe9riques-utilisables-avec-les-listes-hi\xe9rarchiques"}),"Commandes g\xe9n\xe9riques utilisables avec les listes hi\xe9rarchiques"),(0,n.kt)("p",null,"Il est possible de modifier l\u2019apparence d\u2019une liste hi\xe9rarchique dans un formulaire \xe0 l\u2019aide de plusieurs commandes 4D g\xe9n\xe9riques. Vous devez passer \xe0 ces commandes soit le nom d\u2019objet de la liste hi\xe9rarchique (en utilisant le param\xe8tre *), soit son nom de variable (contenant la valeur RefListe) :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT STYLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FONT SIZE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET COLOR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET FILTER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET ENTERABLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET SCROLLBAR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET SCROLL POSITION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT SET RGB COLORS"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rappel : A l'exception de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET SCROLL POSITION"),", ces commandes modifient toutes les repr\xe9sentations d'une m\xeame liste, m\xeame si vous d\xe9signez une liste via son nom d'objet.")),(0,n.kt)("h2",i({},{id:"priorit\xe9-des-commandes-de-propri\xe9t\xe9"}),"Priorit\xe9 des commandes de propri\xe9t\xe9"),(0,n.kt)("p",null,"Certaines propri\xe9t\xe9s d\u2019une liste hi\xe9rarchique (par exemple l\u2019attribut ",(0,n.kt)("strong",{parentName:"p"},"saisissable")," ou la couleur) peuvent \xeatre d\xe9finies de trois mani\xe8res : via la Liste des propri\xe9t\xe9s en mode D\xe9veloppement, via une commande du th\xe8me \u201cPropri\xe9t\xe9s des objets\u201d ou via une commande du th\xe8me \u201cListe hi\xe9rarchique\u201d. Lorsque ces trois moyens sont utilis\xe9s pour d\xe9finir les propri\xe9t\xe9s d\u2019une liste, l\u2019ordre de priorit\xe9 suivant est appliqu\xe9 :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Commandes du th\xe8me \u201cListe hi\xe9rarchique\u201d"),(0,n.kt)("li",{parentName:"ol"},"Commandes g\xe9n\xe9rique de propri\xe9t\xe9 d'objet"),(0,n.kt)("li",{parentName:"ol"},"Propri\xe9t\xe9 formulaire")),(0,n.kt)("p",null,"Ce principe est appliqu\xe9 quel que soit l\u2019ordre d\u2019appel des commandes. Si une propri\xe9t\xe9 d\u2019\xe9l\xe9ment est modifi\xe9e individuellement via une commande de liste hi\xe9rarchique, la commande de propri\xe9t\xe9 d\u2019objet \xe9quivalente sera sans effet sur cet \xe9l\xe9ment m\xeame si elle est appel\xe9e ult\xe9rieurement. Par exemple, si vous modifiez la couleur d\u2019un \xe9l\xe9ment via la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"SET LIST ITEM PROPERTIES"),", la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET COLOR")," n\u2019aura aucun effet sur cet \xe9l\xe9ment."),(0,n.kt)("h2",i({},{id:"gestion-des-\xe9l\xe9ments-par-position-ou-par-r\xe9f\xe9rence"}),"Gestion des \xe9l\xe9ments par position ou par r\xe9f\xe9rence"),(0,n.kt)("p",null,"Vous pouvez g\xe9n\xe9ralement travailler de deux mani\xe8res avec le contenu des listes hi\xe9rarchiques : par position ou par r\xe9f\xe9rence."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lorsque vous travaillez par position, 4D se base sur la position relative des \xe9l\xe9ments dans la liste affich\xe9e \xe0 l'\xe9cran pour les identifier. Le r\xe9sultat sera diff\xe9rent selon que certains \xe9l\xe9ments hi\xe9rarchiques sont d\xe9ploy\xe9s ou non. A noter qu'en cas de multi-repr\xe9sentation, chaque objet de formulaire comporte sa propre configuration d'\xe9l\xe9ments contract\xe9s/d\xe9ploy\xe9s."),(0,n.kt)("li",{parentName:"ul"},"Lorsque vous travaillez par r\xe9f\xe9rence, 4D se base sur le num\xe9ro unique ",(0,n.kt)("em",{parentName:"li"},"r\xe9fEl\xe9ment")," des \xe9l\xe9ments de la liste. Chaque \xe9l\xe9ment peut \xeatre ainsi d\xe9sign\xe9, quelle que soit sa position ou son affichage dans la liste hi\xe9rarchique.")),(0,n.kt)("h3",i({},{id:"exploiter-les-num\xe9ros-de-r\xe9f\xe9rence-des-\xe9l\xe9ments-r\xe9fel\xe9ment"}),"Exploiter les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments (r\xe9fEl\xe9ment)"),(0,n.kt)("p",null,"Chaque \xe9l\xe9ment d'une liste hi\xe9rarchique dispose d'un num\xe9ro de r\xe9f\xe9rence (",(0,n.kt)("em",{parentName:"p"},"r\xe9fEl\xe9ment"),") de type Entier long. Cette valeur est destin\xe9e uniquement \xe0 votre propre usage : 4D ne fait que la maintenir."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Attention : Vous pouvez utiliser comme num\xe9ro de r\xe9f\xe9rence toute valeur de type entier long, sauf la valeur 0. En effet, pour la plupart des commandes de ce th\xe8me, la valeur 0 permet de d\xe9signer le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste.")),(0,n.kt)("p",null,"Voici quelques astuces quant \xe0 l'utilisation du num\xe9ro de r\xe9f\xe9rence unique :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vous n'avez pas besoin d'identifier chaque \xe9l\xe9ment de fa\xe7on unique (niveau d\xe9butant)."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Premier exemple : vous construisez par programmation un syst\xe8me d'onglets, par exemple, un carnet d'adresses. Comme le syst\xe8me vous retournera le num\xe9ro de l'onglet s\xe9lectionn\xe9, vous n'aurez probablement pas besoin de davantage d'informations. Dans ce cas, ne vous pr\xe9occupez pas des num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments : passez n'importe quelle valeur (hormis 0) dans le param\xe8tre ",(0,n.kt)("em",{parentName:"li"},"r\xe9fEl\xe9ment"),". Notez que pour un syst\xe8me de carnet d'adresses, vous pouvez pr\xe9d\xe9finir une liste A, B,..., Z en mode D\xe9veloppement. Vous pouvez \xe9galement la cr\xe9er par programmation afin d'\xe9liminer les lettres pour lesquelles il n'y a pas d'enregistrement."),(0,n.kt)("li",{parentName:"ul"},"Deuxi\xe8me exemple : en travaillant avec une base, vous construisez progressivement une liste de mots-cl\xe9s. Vous pouvez sauvegarder la liste \xe0 la fin de chaque session, en utilisant les commandes ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE LIST")," ou ",(0,n.kt)("inlineCode",{parentName:"li"},"LIST TO BLOB"),", et la recharger au d\xe9but de chaque session, \xe0 l'aide des commandes ",(0,n.kt)("inlineCode",{parentName:"li"},"Load list")," ou ",(0,n.kt)("inlineCode",{parentName:"li"},"BLOB to list"),". Vous pouvez afficher cette liste dans une palette flottante ; lorsque l'utilisateur clique sur un mot-cl\xe9 de la liste, l'\xe9l\xe9ment choisi est ins\xe9r\xe9 dans la zone saisissable s\xe9lectionn\xe9e du process de premier plan. En tout \xe9tat de cause, l'important est que vous ne traitez que l'\xe9l\xe9ment s\xe9lectionn\xe9 (par clic ou glisser-d\xe9poser), car la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"Selected list items"),"vous retourne la position de l'\xe9l\xe9ment que vous devez traiter. En utilisant cette valeur de position, vous obtenez le libell\xe9 de l'\xe9l\xe9ment gr\xe2ce \xe0 la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"GET LIST ITEM"),". Ici aussi, vous n'avez pas besoin d'identifier de fa\xe7on unique chaque \xe9l\xe9ment ; vous pouvez passer n'importe quelle valeur (hormis 0) dans le param\xe8tre ",(0,n.kt)("em",{parentName:"li"},"r\xe9fEl\xe9ment"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Identifiez les \xe9l\xe9ments de la liste (niveau interm\xe9diaire).",(0,n.kt)("br",{parentName:"p"}),"\n","Utilisez le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment pour stocker l'information n\xe9cessaire lorsque vous devez agir sur un \xe9l\xe9ment ; ce point est d\xe9taill\xe9 dans l'exemple de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST"),". Dans cet exemple, nous utilisons les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments pour stocker des num\xe9ros d'enregistrements. Cependant, nous devons pouvoir \xe9tablir une distinction entre les \xe9l\xe9ments qui correspondent aux enregistrements ","[D\xe9partements]"," et ceux qui correspondent aux enregistrements ","[Employ\xe9s]",".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Identifiez tous les \xe9l\xe9ments de la liste individuellement (niveau avanc\xe9).",(0,n.kt)("br",{parentName:"p"}),"\n","Programmez une gestion \xe9labor\xe9e des listes hi\xe9rarchiques dans lesquelles vous devez absolument pouvoir identifier chaque \xe9l\xe9ment individuellement \xe0 tous les niveaux de la liste. Un moyen simple d'impl\xe9menter ce fonctionnement est de maintenir un compteur personnel. Supposons que vous cr\xe9ez une liste ",(0,n.kt)("em",{parentName:"p"},"hlList")," \xe0 l'aide de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST"),". A ce stade, vous initialisez un compteur ",(0,n.kt)("em",{parentName:"p"},"vlhCounter")," \xe0 1. A chaque fois que vous appelez ",(0,n.kt)("inlineCode",{parentName:"p"},"APPEND TO LIST")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT IN LIST"),", vous incr\xe9mentez ce compteur ",(0,n.kt)("inlineCode",{parentName:"p"},"(vlhCounter:=vlhCounter+1)"),", et vous passez le compteur comme num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment. L'astuce consiste \xe0 ne pas d\xe9cr\xe9menter le compteur lorsque vous d\xe9truisez des \xe9l\xe9ments \u2014 le compteur ne peut qu'augmenter. En proc\xe9dant ainsi, vous garantissez l'unicit\xe9 des num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments. Puisque ces nombres sont du type Entier long, vous pouvez ajouter ou ins\xe9rer plus de deux milliards d'\xe9l\xe9ments dans une liste qui a \xe9t\xe9 r\xe9initialis\xe9e ... (cependant si vous travaillez avec un si grand nombre d'\xe9l\xe9ments, cela signifie g\xe9n\xe9ralement que vous devriez utiliser un tableau plut\xf4t qu'une liste.)"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous exploitez les Op\xe9rateurs sur les bits, vous pouvez \xe9galement utiliser les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments pour stocker des informations qui peuvent \xeatre log\xe9es dans un Entier long, c'est-\xe0-dire 2 Entiers, des valeurs de 4 octets ou encore 32 Bool\xe9ens.")),(0,n.kt)("h3",i({},{id:"quand-avez-vous-besoin-de-num\xe9ros-de-r\xe9f\xe9rence-uniques-"}),"Quand avez-vous besoin de num\xe9ros de r\xe9f\xe9rence uniques ?"),(0,n.kt)("p",null,"Dans la plupart des cas, lorsque vous utilisez des listes hi\xe9rarchiques pour des besoins d'interface utilisateur, pour lesquels seul l'\xe9l\xe9ment s\xe9lectionn\xe9 (par un clic ou par glisser-d\xe9poser) est important, vous n'avez pas besoin d'utiliser les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments. Les commandes ",(0,n.kt)("inlineCode",{parentName:"p"},"Selected list items")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"GET LIST ITEM"),"vous fournissent toutes les informations n\xe9cessaires \xe0 la gestion de l'\xe9l\xe9ment s\xe9lectionn\xe9. De plus, des commandes telles que ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT IN LIST")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE FROM LIST"),' vous permettent de manipuler la liste de mani\xe8re "relative" \xe0 l\'\xe9l\xe9ment s\xe9lectionn\xe9.'),(0,n.kt)("p",null,"En pratique, vous devez vous pr\xe9occuper des num\xe9ros de r\xe9f\xe9rence d'\xe9l\xe9ments lorsque vous voulez acc\xe9der directement par programmation \xe0 n'importe quel \xe9l\xe9ment de la liste, et pas n\xe9cessairement \xe0 l'\xe9l\xe9ment couramment s\xe9lectionn\xe9."),(0,n.kt)("h2",i({},{id:"\xe9l\xe9ment-modifiable"}),"\xc9l\xe9ment modifiable"),(0,n.kt)("p",null,"Vous pouvez choisir si les \xe9l\xe9ments de la liste hi\xe9rarchique peuvent \xeatre modifi\xe9s par l'utilisateur \xe0 l'aide du raccourci ",(0,n.kt)("strong",{parentName:"p"},"Alt + clic")," (Windows)/ ",(0,n.kt)("strong",{parentName:"p"},"Option + clic")," (macOS), ou en effectuant un clic long sur le texte de l'\xe9l\xe9ment."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quelle que soit la source de donn\xe9es de la liste hi\xe9rarchique, vous pouvez contr\xf4ler l'ensemble de l'objet avec la propri\xe9t\xe9 ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesEntry#enterable"}),"Saisissable"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"En outre, si vous remplissez la liste hi\xe9rarchique \xe0 l'aide d'une liste cr\xe9\xe9e dans l'\xe9diteur de listes, vous contr\xf4lez si un \xe9l\xe9ment d'une liste hi\xe9rarchique est modifiable \xe0 l'aide de l'option ",(0,n.kt)("strong",{parentName:"p"},"\xc9l\xe9ment modifiable")," dans l'\xe9diteur de listes. Pour plus d'informations, consultez ",(0,n.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Definir-les-proprietes-des-enumerations.300-4575487.fr.html"}),"D\xe9finir les propri\xe9t\xe9s des \xe9num\xe9rations "),"."))),(0,n.kt)("h2",i({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesAction#draggable-and-droppable"}),"Draggable")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesAction#draggable-and-droppable"}),"Droppable")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesEntry#entry-filter"}),"Entry Filter")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"}),"Fill Color")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesText#font"}),"Font")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Hide focus rectangle")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Horizontal Scroll Bar")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesAction#multi-selectable"}),"Multi-selectable")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Vertical Scroll Bar")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}d.isMDXComponent=!0},64581:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);