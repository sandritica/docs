"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(n),m=l,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var o=2;o<s;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>p});n(67294);var a=n(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const r={id:"classFunctions",title:"Appeler des fonctions de classe ORDA"},i=void 0,u={unversionedId:"REST/classFunctions",id:"version-20-R2/REST/classFunctions",title:"Appeler des fonctions de classe ORDA",description:"Vous pouvez appeler les fonctions de classe de mod\xe8les de donn\xe9es d\xe9finies pour le mod\xe8le de donn\xe9es ORDA via vos requ\xeates REST, afin de b\xe9n\xe9ficier de l'API de l'application 4D cibl\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/fr/REST/classFunctions",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"classFunctions",title:"Appeler des fonctions de classe ORDA"},sidebar:"docs",previous:{title:"Manipulation des donn\xe9es",permalink:"/docs/fr/REST/manData"},next:{title:"A propos des requ\xeates REST",permalink:"/docs/fr/REST/REST_requests"}},o={},p=[{value:"Appeler des fonctions",id:"appeler-des-fonctions",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Param\xe8tre de valeur scalaire",id:"param\xe8tre-de-valeur-scalaire",level:3},{value:"Param\xe8tre d&#39;entit\xe9",id:"param\xe8tre-dentit\xe9",level:3},{value:"Param\xe8tre d&#39;entit\xe9 associ\xe9",id:"param\xe8tre-dentit\xe9-associ\xe9",level:4},{value:"Param\xe8tre de s\xe9lection d&#39;entit\xe9",id:"param\xe8tre-de-s\xe9lection-dentit\xe9",level:3},{value:"Exemples de requ\xeates",id:"exemples-de-requ\xeates",level:2},{value:"Utiliser une fonction de classe de datastore",id:"utiliser-une-fonction-de-classe-de-datastore",level:3},{value:"R\xe9sultat",id:"r\xe9sultat",level:4},{value:"Utiliser une fonction de classe de dataclass",id:"utiliser-une-fonction-de-classe-de-dataclass",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-1",level:4},{value:"Utiliser une fonction de classe d&#39;une entit\xe9",id:"utiliser-une-fonction-de-classe-dune-entit\xe9",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-2",level:4},{value:"Utiliser une fonction de classe d&#39;une s\xe9lection d&#39;entit\xe9",id:"utiliser-une-fonction-de-classe-dune-s\xe9lection-dentit\xe9",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-3",level:4},{value:"Utiliser une fonction de classe de s\xe9lection d&#39;entit\xe9 et un ensemble d&#39;entit\xe9",id:"utiliser-une-fonction-de-classe-de-s\xe9lection-dentit\xe9-et-un-ensemble-dentit\xe9",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-4",level:4},{value:"Utiliser une fonction de classe de s\xe9lection d&#39;entit\xe9 et un &quot;orderBy&quot;",id:"utiliser-une-fonction-de-classe-de-s\xe9lection-dentit\xe9-et-un-orderby",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-5",level:4},{value:"Utiliser une entit\xe9 \xe0 cr\xe9er sur le serveur",id:"utiliser-une-entit\xe9-\xe0-cr\xe9er-sur-le-serveur",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-6",level:4},{value:"Utiliser une entit\xe9 \xe0 mettre \xe0 jour sur le serveur",id:"utiliser-une-entit\xe9-\xe0-mettre-\xe0-jour-sur-le-serveur",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-7",level:4},{value:"Cr\xe9er une entit\xe9 avec une entit\xe9 li\xe9e",id:"cr\xe9er-une-entit\xe9-avec-une-entit\xe9-li\xe9e",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-8",level:4},{value:"Mettre \xe0 jour une entit\xe9 avec une entit\xe9 li\xe9e",id:"mettre-\xe0-jour-une-entit\xe9-avec-une-entit\xe9-li\xe9e",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-9",level:4},{value:"Recevoir une s\xe9lection d&#39;entit\xe9 comme param\xe8tre",id:"recevoir-une-s\xe9lection-dentit\xe9-comme-param\xe8tre",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-10",level:4},{value:"Utiliser une s\xe9lection d&#39;entit\xe9 mise \xe0 jour sur le client",id:"utiliser-une-s\xe9lection-dentit\xe9-mise-\xe0-jour-sur-le-client",level:3}],d={toc:p};function c(e){var{components:t}=e,r=s(e,["components"]);return(0,a.kt)("wrapper",l({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vous pouvez appeler les ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/ORDA/ordaClasses"}),"fonctions de classe de mod\xe8les de donn\xe9es")," d\xe9finies pour le mod\xe8le de donn\xe9es ORDA via vos requ\xeates REST, afin de b\xe9n\xe9ficier de l'API de l'application 4D cibl\xe9e."),(0,a.kt)("p",null,"Les fonctions sont simplement appel\xe9es dans les requ\xeates POST sur l'interface ORDA appropri\xe9e, sans (). Par exemple, si vous avez d\xe9fini une fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"getCity()")," dans la dataclass City, vous pouvez l'appeler \xe0 l'aide de la requ\xeate suivante :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,a.kt)("p",null,"avec des donn\xe9es contenues dans le corps de la requ\xeate POST : ",(0,a.kt)("inlineCode",{parentName:"p"},'["Paris"]')),(0,a.kt)("p",null,"Dans le langage 4D, cet appel \xe9quivaut \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'$city:=ds.City.getCity("Aguada")\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Seules les fonctions contenant le mot-cl\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"exposed")," peuvent \xeatre directement appel\xe9es \xe0 partir de requ\xeates REST. Voir la section ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Fonctions expos\xe9es vs non expos\xe9es"),".")),(0,a.kt)("h2",l({},{id:"appeler-des-fonctions"}),"Appeler des fonctions"),(0,a.kt)("p",null,"Les fonctions doivent toujours \xeatre appel\xe9es \xe0 l'aide des requ\xeates ",(0,a.kt)("strong",{parentName:"p"},"POST")," (une requ\xeate GET recevra une erreur)."),(0,a.kt)("p",null,"Les fonctions sont appel\xe9es sur l'objet correspondant au datastore du serveur."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Fonction de classe"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Syntaxe"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/fr/ORDA/ordaClasses#datastore-class"}),"datastore class")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/$catalog/DataStoreClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/fr/ORDA/ordaClasses#dataclass-class"}),"dataclass class")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/DataClassClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/fr/ORDA/ordaClasses#entityselection-class"}),"entitySelection class")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$filter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null})),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("a",l({parentName:"td"},{href:"/docs/fr/ORDA/ordaClasses#entity-class"}),"entity class")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}(key)/EntityClassFunction/"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}/Function")," peut \xeatre utilis\xe9 pour appeler une fonction de dataclass ou de s\xe9lection d'entit\xe9 (",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}")," retourne toutes les entit\xe9s de la DataClass en tant que s\xe9lection d'entit\xe9).",(0,a.kt)("br",{parentName:"p"}),"\n","La fonction est d'abord recherch\xe9e dans la classe de s\xe9lection d'entit\xe9. Si elle n'est pas trouv\xe9e, elle est recherch\xe9e dans la dataclass. En d'autres termes, si une fonction portant le m\xeame nom est d\xe9finie \xe0 la fois dans la classe DataClass et la classe EntitySelection, la fonction de classe de dataclass ne sera jamais ex\xe9cut\xe9e.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All 4D code called from REST requests ",(0,a.kt)("strong",{parentName:"p"},"must be thread-safe")," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"}),(0,a.kt)("em",{parentName:"a"},"Use preemptive process")," setting value")," is ignored by the REST Server).")),(0,a.kt)("h2",l({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("p",null,"Vous pouvez envoyer des param\xe8tres aux fonctions d\xe9finies dans les classes utilisateurs ORDA. C\xf4t\xe9 serveur, ils seront re\xe7us dans les fonctions de classe dans les param\xe8tres normaux $1, $2, etc."),(0,a.kt)("p",null,"Les r\xe8gles suivantes s'appliquent :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les param\xe8tres doivent \xeatre pass\xe9s dans le ",(0,a.kt)("strong",{parentName:"li"},"corps de la requ\xeate POST")),(0,a.kt)("li",{parentName:"ul"},"Les param\xe8tres doivent \xeatre inclus dans une collection (format JSON)"),(0,a.kt)("li",{parentName:"ul"},"Tous les types de donn\xe9es scalaires pris en charge dans les collections JSON peuvent \xeatre pass\xe9s en tant que param\xe8tres."),(0,a.kt)("li",{parentName:"ul"},"La s\xe9lection d'entit\xe9 et l'entit\xe9 peuvent \xeatre pass\xe9es en tant que param\xe8tres. L'objet JSON doit contenir des attributs sp\xe9cifiques utilis\xe9s par le serveur REST pour affecter des donn\xe9es aux objets ORDA correspondants : ",(0,a.kt)("strong",{parentName:"li"},"DATACLASS, "),"ENTITY, ",(0,a.kt)("strong",{parentName:"li"},"ENTITIES, "),"DATASET.")),(0,a.kt)("p",null,"Voir ",(0,a.kt)("a",l({parentName:"p"},{href:"#request-receiving-an-entity-as-parameter"}),"cet exemple")," et ",(0,a.kt)("a",l({parentName:"p"},{href:"#request-receiving-an-entity-selection-as-parameter"}),"cet exemple"),"."),(0,a.kt)("h3",l({},{id:"param\xe8tre-de-valeur-scalaire"}),"Param\xe8tre de valeur scalaire"),(0,a.kt)("p",null,"Le(s) param\xe8tre(s) doivent simplement \xeatre incluse dans une collection d\xe9finie dans le corps. For example, with a  dataclass function ",(0,a.kt)("inlineCode",{parentName:"p"},"getCities()")," receiving text parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/City/getCities")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parma\xe8tres dans le corps :")," ",'["Aguada","Paris"]'),(0,a.kt)("p",null,'Tous les types de donn\xe9es JSON sont pris en charge dans les param\xe8tres, y compris les pointeurs JSON. Les dates peuvent \xeatre pass\xe9es sous forme de cha\xeenes au format de date ISO 8601 (par exemple, "2020-08-22T22:00:000Z").'),(0,a.kt)("h3",l({},{id:"param\xe8tre-dentit\xe9"}),"Param\xe8tre d'entit\xe9"),(0,a.kt)("p",null,"Les entit\xe9s pass\xe9es en param\xe8tres sont r\xe9f\xe9renc\xe9es sur le serveur via leur cl\xe9 (c'est-\xe0-dire la propri\xe9t\xe9 __KEY). Si le param\xe8tre cl\xe9 est omis dans une requ\xeate, une nouvelle entit\xe9 est charg\xe9e en m\xe9moire du serveur. Vous pouvez \xe9galement transmettre des valeurs pour tous les attributs de l'entit\xe9. Ces valeurs seront automatiquement utilis\xe9es pour l'entit\xe9 trait\xe9e sur le serveur."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si la requ\xeate envoie des valeurs d'attribut modifi\xe9es pour une entit\xe9 existante sur le serveur, la fonction de mod\xe8le de donn\xe9es ORDA appel\xe9e sera automatiquement ex\xe9cut\xe9e sur le serveur avec des valeurs modifi\xe9es. Cette fonctionnalit\xe9 vous permet, par exemple, de v\xe9rifier le r\xe9sultat d'une op\xe9ration sur une entit\xe9, apr\xe8s avoir appliqu\xe9 toutes les r\xe8gles m\xe9tier, depuis l'application cliente. Vous pouvez alors d\xe9cider de sauvegarder ou non l'entit\xe9 sur le serveur.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Propri\xe9t\xe9s"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Attributs de l'entit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mixte"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Optionnelle - Valeurs \xe0 modifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"__DATACLASS"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Obligatoire - Indique la Dataclass de l'entit\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"__ENTITY"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Obligatoire - Vrai pour indiquer au serveur que le param\xe8tre est une entit\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"__KEY"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mixte (type identique \xe0 celui de la cl\xe9 primaire)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Optionnel - cl\xe9 primaire de l'entit\xe9")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si __KEY n'est pas fourni, une nouvelle entit\xe9 est cr\xe9\xe9e sur le serveur avec les attributs donn\xe9s."),(0,a.kt)("li",{parentName:"ul"},"Si __KEY est fourni, l'entit\xe9 correspondant \xe0 _KEY est charg\xe9e sur le serveur avec les attributs donn\xe9s")),(0,a.kt)("p",null,"Voir les exemple de ",(0,a.kt)("a",l({parentName:"p"},{href:"#creating-an-entity"}),"cr\xe9ation")," ou de ",(0,a.kt)("a",l({parentName:"p"},{href:"#updating-an-entity"}),"mise \xe0 jour")," des entit\xe9s."),(0,a.kt)("h4",l({},{id:"param\xe8tre-dentit\xe9-associ\xe9"}),"Param\xe8tre d'entit\xe9 associ\xe9"),(0,a.kt)("p",null,"M\xeames propri\xe9t\xe9s que pour un ",(0,a.kt)("a",l({parentName:"p"},{href:"#entity-parameter"}),"param\xe8tre d'entit\xe9"),". De plus, l'entit\xe9 associ\xe9e doit exister et est r\xe9f\xe9renc\xe9e par __KEY, qui contient sa cl\xe9 primaire."),(0,a.kt)("p",null,"Reportez-vous aux exemples de ",(0,a.kt)("a",l({parentName:"p"},{href:"#creating-an-entity-with-a-related-entity"}),"cr\xe9ation")," ou de ",(0,a.kt)("a",l({parentName:"p"},{href:"#updating-an-entity-with-a-related-entity"}),"mise \xe0 jour")," des entit\xe9s avec des entit\xe9s associ\xe9es."),(0,a.kt)("h3",l({},{id:"param\xe8tre-de-s\xe9lection-dentit\xe9"}),"Param\xe8tre de s\xe9lection d'entit\xe9"),(0,a.kt)("p",null,"La s\xe9lection d'entit\xe9 doit avoir \xe9t\xe9 d\xe9finie au pr\xe9alable \xe0 l'aide de ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/fr/REST/method#methodentityset"}),"$method=entityset"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si la requ\xeate envoie une s\xe9lection d'entit\xe9 modifi\xe9e au serveur, la fonction de mod\xe8le de donn\xe9es ORDA appel\xe9e sera automatiquement ex\xe9cut\xe9e sur le serveur avec la s\xe9lection d'entit\xe9 modifi\xe9e.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Propri\xe9t\xe9s"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Attributs de l'entit\xe9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mixte"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Optionnelle - Valeurs \xe0 modifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"__DATASET"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Obligatoire - entitySetID (UUID) de la s\xe9lection d'entit\xe9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"__ENTITIES"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Obligatoire - Vrai pour indiquer au serveur que le param\xe8tre est une s\xe9lection d'entit\xe9")))),(0,a.kt)("p",null,"Reportez-vous aux exemples de ",(0,a.kt)("a",l({parentName:"p"},{href:"#receiving-an-entity-selection-as-parameter"}),"r\xe9ception d'une s\xe9lection d'entit\xe9"),"."),(0,a.kt)("h2",l({},{id:"exemples-de-requ\xeates"}),"Exemples de requ\xeates"),(0,a.kt)("p",null,"Cette base de donn\xe9es est expos\xe9e comme un datastore distant sur localhost (port 8111) :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(57287).Z,width:"882",height:"599"})),(0,a.kt)("h3",l({},{id:"utiliser-une-fonction-de-classe-de-datastore"}),"Utiliser une fonction de classe de datastore"),(0,a.kt)("p",null,"La classe de ",(0,a.kt)("inlineCode",{parentName:"p"},"DataStore")," US_Cities fournit une API :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n')),(0,a.kt)("p",null,"Vous pouvez lancer cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/getName")),(0,a.kt)("h4",l({},{id:"r\xe9sultat"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n"result": "US cities and zip codes manager" \n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-fonction-de-classe-de-dataclass"}),"Utiliser une fonction de classe de dataclass"),(0,a.kt)("p",null,"La classe de Dataclass ",(0,a.kt)("inlineCode",{parentName:"p"},"City")," fournit une API qui retourne une entit\xe9 de ville \xe0 partir du nom pass\xe9 en param\xe8tre :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// City class\n\nClass extends DataClass\n\nexposed Function getCity()\n    var $0 : cs.CityEntity\n    var $1,$nameParam : text\n    $nameParam:=$1\n    $0:=This.query("name = :1";$nameParam).first()\n')),(0,a.kt)("p",null,"Vous pouvez lancer cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City/getCity")),(0,a.kt)("p",null,"Requ\xeate : ",'["Paris"]'),(0,a.kt)("h4",l({},{id:"r\xe9sultat-1"}),"R\xe9sultat"),(0,a.kt)("p",null,"Le r\xe9sultat est une entit\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Paris",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-fonction-de-classe-dune-entit\xe9"}),"Utiliser une fonction de classe d'une entit\xe9"),(0,a.kt)("p",null,"La classe d'entit\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"CityEntity")," fournit une API :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,a.kt)("p",null,"Vous pouvez lancer cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City(2)/getPopulation")),(0,a.kt)("h4",l({},{id:"r\xe9sultat-2"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "result": 48814\n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-fonction-de-classe-dune-s\xe9lection-dentit\xe9"}),"Utiliser une fonction de classe d'une s\xe9lection d'entit\xe9"),(0,a.kt)("p",null,"La classe de s\xe9lection d'entit\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"CityEntity")," fournit une API :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,a.kt)("p",null,"Vous pouvez lancer cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"')),(0,a.kt)("h4",l({},{id:"r\xe9sultat-3"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "result": 87256\n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-fonction-de-classe-de-s\xe9lection-dentit\xe9-et-un-ensemble-dentit\xe9"}),"Utiliser une fonction de classe de s\xe9lection d'entit\xe9 et un ensemble d'entit\xe9"),(0,a.kt)("p",null,"La classe ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," a une fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgeAverage")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage\n    C_LONGINT($sum;$0)\n    C_OBJECT($s)\n\n    $sum:=0\n    For each ($s;This)\n        $sum:=$sum+$s.age()\n    End for each \n    $0:=$sum/This.length\n")),(0,a.kt)("p",null,"Une fois que vous avez cr\xe9\xe9 un ensemble d'entit\xe9, vous pouvez lancer cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532")),(0,a.kt)("h4",l({},{id:"r\xe9sultat-4"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "result": 34\n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-fonction-de-classe-de-s\xe9lection-dentit\xe9-et-un-orderby"}),'Utiliser une fonction de classe de s\xe9lection d\'entit\xe9 et un "orderBy"'),(0,a.kt)("p",null,"La classe ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," a une fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"getLastSummary")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary\n    C_TEXT($0)\n    C_OBJECT($last)\n\n    $last:=This.last()\n    $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n')),(0,a.kt)("p",null,"Vous pouvez lancer cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"')),(0,a.kt)("h4",l({},{id:"r\xe9sultat-5"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "result": "Wilbert - Bull is ... 21" \n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-entit\xe9-\xe0-cr\xe9er-sur-le-serveur"}),"Utiliser une entit\xe9 \xe0 cr\xe9er sur le serveur"),(0,a.kt)("p",null,"La classe de Dataclass ",(0,a.kt)("inlineCode",{parentName:"p"},"Students")," poss\xe8de la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"pushData()")," qui re\xe7oit une entit\xe9 contenant les donn\xe9es du client. La m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"checkData()")," effectue quelques contr\xf4les. Si elles sont valides, l'entit\xe9 est sauvegard\xe9e et retourn\xe9e."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// Students Class\n\nClass extends DataClass\n\nexposed Function pushData\n    var $1, $entity, $status, $0 : Object\n\n    $entity:=$1\n\n    $status:=checkData($entity) // $status est un objet avec une propri\xe9t\xe9 bool\xe9enne "success"\n\n    $0:=$status\n\n    If ($status.success)\n        $status:=$entity.save()\n       If ($status.success)\n           $0:=$entity\n      End if \n    End if\n\n')),(0,a.kt)("p",null,"Lancez cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Corps de la requ\xeate :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n')),(0,a.kt)("p",null,"Si aucune ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," n'est donn\xe9e, une nouvelle entit\xe9 Students est charg\xe9e sur le serveur ",(0,a.kt)("strong",{parentName:"p"},"avec les attributs du client"),". Parce que la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"pushData()")," ex\xe9cute une action ",(0,a.kt)("inlineCode",{parentName:"p"},"save()"),", la nouvelle entit\xe9 est cr\xe9\xe9e."),(0,a.kt)("h4",l({},{id:"r\xe9sultat-6"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-entit\xe9-\xe0-mettre-\xe0-jour-sur-le-serveur"}),"Utiliser une entit\xe9 \xe0 mettre \xe0 jour sur le serveur"),(0,a.kt)("p",null,"Description semblable \xe0 la pr\xe9c\xe9dente, avec l'attribut _KEY"),(0,a.kt)("p",null,"Lancez cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST:"),(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Corps de la requ\xeate :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n')),(0,a.kt)("p",null,"Si aucune ",(0,a.kt)("inlineCode",{parentName:"p"},"__KEY")," n'est donn\xe9e, l'entit\xe9 Students est charg\xe9e avec la cl\xe9 primaire 55 ",(0,a.kt)("strong",{parentName:"p"},"avec la valeur lastname re\xe7ue par le client"),". Parce que la fonction ex\xe9cute une action ",(0,a.kt)("inlineCode",{parentName:"p"},"save()"),", la nouvelle entit\xe9 est mise \xe0 jour."),(0,a.kt)("h4",l({},{id:"r\xe9sultat-7"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n')),(0,a.kt)("h3",l({},{id:"cr\xe9er-une-entit\xe9-avec-une-entit\xe9-li\xe9e"}),"Cr\xe9er une entit\xe9 avec une entit\xe9 li\xe9e"),(0,a.kt)("p",null,"Dans cet exemple, nous cr\xe9ons une nouvelle entit\xe9 Students avec l'entit\xe9 Schools ayant la cl\xe9 primaire 2."),(0,a.kt)("p",null,"Lancez cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST:"),(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,a.kt)("p",null,"Corps de la requ\xeate :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n')),(0,a.kt)("h4",l({},{id:"r\xe9sultat-8"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n')),(0,a.kt)("h3",l({},{id:"mettre-\xe0-jour-une-entit\xe9-avec-une-entit\xe9-li\xe9e"}),"Mettre \xe0 jour une entit\xe9 avec une entit\xe9 li\xe9e"),(0,a.kt)("p",null,"Dans cet exemple, nous associons une \xe9cole existante \xe0 l'entit\xe9 Students. La classe ",(0,a.kt)("inlineCode",{parentName:"p"},"StudentsEntity")," poss\xe8de une API :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n    var $1, $school , $0, $status : Object\n\n        //$1 is a Schools entity\n    $school:=$1\n        //Associe l\'entit\xe9 reli\xe9e "school" \xe0 l\'entit\xe9 courante "Students"\n    This.school:=$school\n\n    $status:=This.save()\n\n    $0:=$status\n')),(0,a.kt)("p",null,"You run this request, called on a Students entity : ",(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students(1)/putToSchool")," Body of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n')),(0,a.kt)("h4",l({},{id:"r\xe9sultat-9"}),"R\xe9sultat"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "result": {\n        "success": true\n    }\n}\n')),(0,a.kt)("h3",l({},{id:"recevoir-une-s\xe9lection-dentit\xe9-comme-param\xe8tre"}),"Recevoir une s\xe9lection d'entit\xe9 comme param\xe8tre"),(0,a.kt)("p",null,"Dans la classe de Dataclass ",(0,a.kt)("inlineCode",{parentName:"p"},"Students"),", la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"setFinalExam()")," met \xe0 jour une s\xe9lection d'entit\xe9 re\xe7ue ($1). Elle met \xe0 jour l'attribut ",(0,a.kt)("em",{parentName:"p"},"finalExam")," avec la valeur re\xe7ue ($2). Elle retourne les cl\xe9s primaires des entit\xe9s mises \xe0 jour."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Boucle sur la s\xe9lection d'entit\xe9\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n")),(0,a.kt)("p",null,"Un ensemble d'entit\xe9 est d'abord cr\xe9\xe9 avec cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset')),(0,a.kt)("p",null,"Vous pouvez ensuite ex\xe9cuter cette requ\xeate :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/setFinalExam")),(0,a.kt)("p",null,"Corps de la requ\xeate :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n')),(0,a.kt)("h4",l({},{id:"r\xe9sultat-10"}),"R\xe9sultat"),(0,a.kt)("p",null,"Les entit\xe9s ayant les cl\xe9s primaires sont 1 et 2 ont \xe9t\xe9 mises \xe0 jour."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'{\n    "result": [\n        1,\n        2\n    ]\n}\n')),(0,a.kt)("h3",l({},{id:"utiliser-une-s\xe9lection-dentit\xe9-mise-\xe0-jour-sur-le-client"}),"Utiliser une s\xe9lection d'entit\xe9 mise \xe0 jour sur le client"),(0,a.kt)("p",null,"A l'aide de la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"getAgeAverage()")," ",(0,a.kt)("a",l({parentName:"p"},{href:"#using-an-entityselection-class-function-and-an-entityset"}),"d\xe9finie ci-dessus"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent est une entit\xe9 "student" \xe0 traiter\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// Nous avons ajout\xe9 une entit\xe9 \xe0 la s\xe9lection d\'entit\xe9 $students sur le client\n$students.add($newStudent) \n\n// Nous appelons une fonction sur la classe StudentsSelection qui retourne l\'\xe2ge moyen des \xe9tudiants de la s\xe9lection d\'entit\xe9\n// La fonction est utilis\xe9e sur le serveur sur la s\xe9lection d\'entit\xe9 $students mise \xe0 jour, qui inclut l\'\xe9tudiant ajout\xe9 par le client\n$ageAverage:=$students.getAgeAverage()\n')))}c.isMDXComponent=!0},57287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"}}]);