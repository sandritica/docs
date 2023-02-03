"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92613],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),m=u,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function m(e,r){var t=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var o=t.length,s=new Array(o);s[0]=c;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:u,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},75907:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});t(67294);var n=t(3905);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}const s={id:"basics",title:"Principes de base"},a=void 0,i={unversionedId:"Debugging/basics",id:"version-19-R8/Debugging/basics",title:"Principes de base",description:"Les erreurs sont courantes. Il serait inhabituel d'\xe9crire un nombre important de lignes de code sans g\xe9n\xe9rer aucune erreur. \xc0 l'inverse, traiter et/ou corriger des erreurs est \xe9galement normal !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/fr/Debugging/basics",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"basics",title:"Principes de base"},sidebar:"docs",previous:{title:"Balises de transformation",permalink:"/docs/fr/Tags/tags"},next:{title:"D\xe9bogueur",permalink:"/docs/fr/Debugging/debugger"}},l={},p=[{value:"Types d&#39;erreurs",id:"types-derreurs",level:2},{value:"Erreurs de saisie",id:"erreurs-de-saisie",level:3},{value:"Erreurs de syntaxe",id:"erreurs-de-syntaxe",level:3},{value:"Erreurs dans l&#39;Environnement",id:"erreurs-dans-lenvironnement",level:3},{value:"Erreurs de conception ou de logique",id:"erreurs-de-conception-ou-de-logique",level:3},{value:"Erreurs d&#39;ex\xe9cution",id:"erreurs-dex\xe9cution",level:3},{value:"Fen\xeatre d&#39;erreur de syntaxe",id:"fen\xeatre-derreur-de-syntaxe",level:2},{value:"D\xe9bogueur",id:"d\xe9bogueur",level:2},{value:"Ruptures/sauts",id:"rupturessauts",level:2}],d={toc:p};function c(e){var{components:r}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",u({},d,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Les erreurs sont courantes. Il serait inhabituel d'\xe9crire un nombre important de lignes de code sans g\xe9n\xe9rer aucune erreur. \xc0 l'inverse, traiter et/ou corriger des erreurs est \xe9galement normal !"),(0,n.kt)("p",null,"L'environnement de d\xe9veloppement 4D fournit plusieurs outils de d\xe9bogage pour tous les types d'erreurs."),(0,n.kt)("h2",u({},{id:"types-derreurs"}),"Types d'erreurs"),(0,n.kt)("h3",u({},{id:"erreurs-de-saisie"}),"Erreurs de saisie"),(0,n.kt)("p",null,"Les fautes de frappe sont d\xe9tect\xe9es par l'\xe9diteur de m\xe9thode. Elles sont affich\xe9es en rouge et des informations compl\xe9mentaires sont fournies en bas de la fen\xeatre. Voici une erreur de frappe :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"break-point",src:t(40368).Z,width:"1824",height:"980"})),(0,n.kt)("p",null,"Ces erreurs de frappe provoquent g\xe9n\xe9ralement des erreurs de syntaxe (dans l'image ci-dessus, le nom de la table est inconnu). Vous obtenez la description de l'erreur lorsque vous validez la ligne de code. Lorsque cela se produit, corrigez l'erreur de frappe et tapez Entr\xe9e pour valider la correction."),(0,n.kt)("h3",u({},{id:"erreurs-de-syntaxe"}),"Erreurs de syntaxe"),(0,n.kt)("p",null,"Certaines erreurs ne peuvent \xeatre d\xe9tect\xe9es que lorsque vous ex\xe9cutez la m\xe9thode. La ",(0,n.kt)("a",u({parentName:"p"},{href:"#syntax-error-window"}),"fen\xeatre d'erreur de syntaxe")," appara\xeet lorsqu'une erreur se produit pendant l'ex\xe9cution du code. Par exemple :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:t(23350).Z,width:"642",height:"552"})),(0,n.kt)("p",null,"Agrandissez la zone ",(0,n.kt)("strong",{parentName:"p"},"D\xe9tails")," pour afficher la derni\xe8re erreur et son num\xe9ro."),(0,n.kt)("h3",u({},{id:"erreurs-dans-lenvironnement"}),"Erreurs dans l'Environnement"),(0,n.kt)("p",null,"Il peut arriver que la m\xe9moire soit insuffisante pour cr\xe9er une BLOB. Ou, lorsque vous acc\xe9dez \xe0 un document sur le disque, il se peut que ce document n'existe pas ou qu'il soit d\xe9j\xe0 ouvert par une autre application. Ces erreurs dans l'Environnementa ne sont pas directement dues \xe0 votre code ou \xe0 la fa\xe7on dont vous l'avez \xe9crit. La plupart du temps, ces erreurs sont faciles \xe0 traiter avec une ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/Concepts/error-handling"}),"m\xe9thode de capture d'erreur")," install\xe9e \xe0 l'aide de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),"."),(0,n.kt)("h3",u({},{id:"erreurs-de-conception-ou-de-logique"}),"Erreurs de conception ou de logique"),(0,n.kt)("p",null,"Ce sont g\xe9n\xe9ralement les types d'erreurs les plus difficiles \xe0 trouver. \xc0 l'exception des erreurs de frappe, tous les types d'erreurs \xe9num\xe9r\xe9s ci-dessus sont, dans une certaine mesure, couverts par l'expression \"erreur de conception ou de logique\". Utilisez le ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/Debugging/debugger"}),"d\xe9bogueur")," pour les d\xe9tecter. Par exemple :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Une ",(0,n.kt)("em",{parentName:"li"},"erreur de syntaxe")," peut se produire lorsque vous essayez d'utiliser une variable qui n'est pas encore initialis\xe9e."),(0,n.kt)("li",{parentName:"ul"},"Une ",(0,n.kt)("em",{parentName:"li"},"erreur au niveau de l'Environnement")," peut se produire lorsque vous essayez d'ouvrir un document, parce que le nom de ce document est re\xe7u par une sous-routine qui n'a pas obtenu la bonne valeur comme param\xe8tre.")),(0,n.kt)("p",null,"Les erreurs de conception ou de logique comprennent \xe9galement des situations telles que :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Un enregistrement n'est pas correctement mis \xe0 jour parce que, en appelant ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE RECORD"),", vous avez oubli\xe9 de tester d'abord si l'enregistrement \xe9tait verrouill\xe9 ou non."),(0,n.kt)("li",{parentName:"ul"},"Une m\xe9thode ne fait pas exactement ce que vous attendez, car la pr\xe9sence d'un param\xe8tre facultatif n'est pas test\xe9e.")),(0,n.kt)("p",null,"Parfois, le morceau de code qui affiche l'erreur peut \xeatre diff\xe9rent du code qui est en fait \xe0 l'origine du probl\xe8me."),(0,n.kt)("h3",u({},{id:"erreurs-dex\xe9cution"}),"Erreurs d'ex\xe9cution"),(0,n.kt)("p",null,"En mode Application, vous pouvez obtenir des erreurs que vous ne voyez pas en mode interpr\xe9t\xe9. Voici un exemple :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"runtime-error",src:t(66334).Z,width:"662",height:"472"})),(0,n.kt)("p",null,"Pour trouver rapidement l'origine du probl\xe8me, rouvrez la version interpr\xe9t\xe9e du fichier de structure, ouvrez la m\xe9thode et allez \xe0 la ligne correspondante."),(0,n.kt)("h2",u({},{id:"fen\xeatre-derreur-de-syntaxe"}),"Fen\xeatre d'erreur de syntaxe"),(0,n.kt)("p",null,"La fen\xeatre d'erreur de syntaxe appara\xeet automatiquement lorsque l'ex\xe9cution d'une m\xe9thode est interrompue. Cela peut se produire lorsque :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"une erreur emp\xeache la poursuite de l'ex\xe9cution du code"),(0,n.kt)("li",{parentName:"ul"},"la m\xe9thode produit une fausse assertion (voir la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"ASSERT"),")")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syntax-error",src:t(23350).Z,width:"642",height:"552"})),(0,n.kt)("p",null,"La zone de texte sup\xe9rieure affiche un message d\xe9crivant l'erreur. La zone de texte inf\xe9rieure montre la ligne qui \xe9tait en cours d'ex\xe9cution lorsque l'erreur s'est produite ; la zone o\xf9 l'erreur s'est produite est mise en \xe9vidence. La section D\xe9tails d\xe9velopp\xe9e contient la \"pile\" des erreurs li\xe9es au processus."),(0,n.kt)("p",null,"La fen\xeatre d'erreur de syntaxe propose plusieurs options :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Modifier")," : arr\xeate l'ex\xe9cution de toutes les m\xe9thodes. 4D bascule en mode D\xe9veloppement et la m\xe9thode comportant l'erreur s'ouvre dans l'\xe9diteur de code, ce qui vous permet de la corriger. Utilisez cette option lorsque vous reconnaissez imm\xe9diatement l'erreur et que vous pouvez la corriger sans autre forme de proc\xe8s.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Trace")," : Acc\xe8de au mode Trace/Debugger. La fen\xeatre du ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/fr/Debugging/debugger"}),"d\xe9bogueur")," s'affiche. Si la ligne en cours n'a \xe9t\xe9 ex\xe9cut\xe9e que partiellement, vous devrez peut-\xeatre cliquer plusieurs fois sur le bouton ",(0,n.kt)("strong",{parentName:"p"},"Trace"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Continuer")," : L'ex\xe9cution se poursuit. La ligne contenant l'erreur peut \xeatre partiellement ex\xe9cut\xe9e, selon l'endroit o\xf9 se trouve l'erreur. Continuez avec prudence : l'erreur peut emp\xeacher le reste de votre m\xe9thode de s'ex\xe9cuter correctement. Nous vous recommandons de cliquer sur ",(0,n.kt)("strong",{parentName:"p"},"Continuer")," uniquement si l'erreur se trouve dans un appel trivial (tel que ",(0,n.kt)("inlineCode",{parentName:"p"},"SET WINDOW TITLE"),") qui n'emp\xeache pas d'ex\xe9cuter et de tester le reste de votre code."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Astuce : pour ignorer une erreur qui se r\xe9p\xe8te (par exemple, dans les boucles), vous pouvez transformer le bouton ",(0,n.kt)("strong",{parentName:"p"},"Continuer")," en bouton ",(0,n.kt)("strong",{parentName:"p"},"Ignorer"),". Maintenez la touche ",(0,n.kt)("strong",{parentName:"p"},"Alt")," (Windows) ou ",(0,n.kt)("strong",{parentName:"p"},"Option")," (macOS) enfonc\xe9e et cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"p"},"Continuer")," la premi\xe8re fois qu'il appara\xeet. L'\xe9tiquette du bouton devient ",(0,n.kt)("strong",{parentName:"p"},"Ignorer")," si la bo\xeete de dialogue est appel\xe9e \xe0 nouveau pour la m\xeame erreur.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Abandonner")," : Stoppe l'ex\xe9cution de la m\xe9thode et revient \xe0 l'\xe9tat ant\xe9rieur au d\xe9but de l'ex\xe9cution de la m\xe9thode :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Si une m\xe9thode formulaire ou m\xe9thode objet s'ex\xe9cute en r\xe9ponse \xe0 un \xe9v\xe9nement, elle est arr\xeat\xe9e et vous revenez au formulaire."),(0,n.kt)("li",{parentName:"ul"},"Si la m\xe9thode est ex\xe9cut\xe9e \xe0 partir de l'environnement de l'application, vous revenez \xe0 cet environnement."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copier")," : Copie les informations de d\xe9bogage dans le presse-papiers. L'info d\xe9crit l'environnement interne de l'erreur (num\xe9ro, composant interne, etc.). Elles sont format\xe9es sous forme de texte tabul\xe9.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enregistrer...")," : Enregistre le contenu de la fen\xeatre d'erreur syntaxique et de la cha\xeene d'appel dans un fichier ",(0,n.kt)("inlineCode",{parentName:"p"},".txt"),"."))),(0,n.kt)("h2",u({},{id:"d\xe9bogueur"}),"D\xe9bogueur"),(0,n.kt)("p",null,"Une erreur courante des d\xe9butants en mati\xe8re de d\xe9tection des erreurs consiste \xe0 cliquer sur ",(0,n.kt)("strong",{parentName:"p"},"Abandonner")," dans la fen\xeatre d'erreur de syntaxe, \xe0 revenir \xe0 l'\xe9diteur de code et \xe0 essayer de comprendre ce qui se passe en regardant le code. Ne faites pas \xe7a ! Vous \xe9conomiserez beaucoup de temps et d'\xe9nergie en utilisant toujours le ",(0,n.kt)("strong",{parentName:"p"},"D\xe9bogueur"),"."),(0,n.kt)("p",null,"Le d\xe9bogueur vous permet d'avancer lentement dans les m\xe9thodes. Il affiche toutes les informations dont vous avez besoin pour comprendre pourquoi une erreur s'est produite. Une fois que vous avez ces informations, vous savez comment corriger l'erreur."),(0,n.kt)("p",null,"Une autre raison d'utiliser le d\xe9bogueur est le d\xe9veloppement du code. Il peut arriver que vous \xe9criviez un algorithme plus complexe que d'habitude. Malgr\xe9 tous les sentiments d'accomplissement, vous ne pouvez pas \xeatre totalement s\xfbr que votre codage est 100% correct. Au lieu de l'ex\xe9cuter \"\xe0 l'aveugle\", vous pouvez utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," au d\xe9but de votre code, puis l'ex\xe9cuter pas \xe0 pas pour garder un \u0153il sur ce qui se passe."),(0,n.kt)("h2",u({},{id:"rupturessauts"}),"Ruptures/sauts"),(0,n.kt)("p",null,"Dans le processus de d\xe9bogage, vous pouvez avoir besoin de sauter le tra\xe7age de certaines parties du code jusqu'\xe0 une certaine ligne. Ou bien, vous pouvez vouloir tracer le code lorsqu'une expression donn\xe9e a une certaine valeur (par exemple \"$myVar > 1000\"), ou chaque fois qu'une commande 4D sp\xe9cifique est appel\xe9e."),(0,n.kt)("p",null,"Ces besoins sont couverts par les fonctions ",(0,n.kt)("strong",{parentName:"p"},"points d'arr\xeat")," et ",(0,n.kt)("strong",{parentName:"p"},"points d'arr\xeat sur commande"),". Ils peuvent \xeatre configur\xe9s \xe0 partir de l'\xe9diteur de code, du d\xe9bogueur ou de l'explorateur d'ex\xe9cution."))}c.isMDXComponent=!0},66334:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},23350:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},40368:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"}}]);