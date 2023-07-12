"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=s,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});a(67294);var n=a(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const r={id:"datastores",title:"Utiliser un datastore distant"},o=void 0,l={unversionedId:"ORDA/datastores",id:"version-20/ORDA/datastores",title:"Utiliser un datastore distant",description:"Un datastore expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/fr/20/ORDA/datastores",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"datastores",title:"Utiliser un datastore distant"},sidebar:"docs",previous:{title:"Travailler avec des donn\xe9es",permalink:"/docs/fr/20/ORDA/entities"},next:{title:"Privileges",permalink:"/docs/fr/20/ORDA/privileges"}},u={},p=[{value:"Ouverture des sessions",id:"ouverture-des-sessions",level:2},{value:"Visionnage des sessions",id:"visionnage-des-sessions",level:3},{value:"Verrouillage et transactions",id:"verrouillage-et-transactions",level:3},{value:"Fermeture des sessions",id:"fermeture-des-sessions",level:3},{value:"Optimisation client/serveur",id:"optimisation-clientserveur",level:2},{value:"Contexte",id:"contexte",level:3},{value:"Exemple",id:"exemple",level:4},{value:"R\xe9utiliser la propri\xe9t\xe9 context",id:"r\xe9utiliser-la-propri\xe9t\xe9-context",level:4},{value:"Listbox bas\xe9e sur une s\xe9lection d&#39;entit\xe9s",id:"listbox-bas\xe9e-sur-une-s\xe9lection-dentit\xe9s",level:4},{value:"Preconfiguring contexts",id:"preconfiguring-contexts",level:4},{value:"ORDA cache",id:"orda-cache",level:3}],c={toc:p};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",s({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping#datastore"}),"datastore")," expos\xe9 sur une application 4D Server est accessible simultan\xe9ment via diff\xe9rents clients :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les applications 4D distantes utilisant ORDA pour acc\xe9der au datastore principal \xe0 l\u2019aide de la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),". A noter que l'application 4D distante peut toujours acc\xe9der \xe0 la base de donn\xe9es en mode classique. Ces acc\xe8s sont g\xe9r\xe9s par le ",(0,n.kt)("strong",{parentName:"li"},"serveur d'applications 4D"),"."),(0,n.kt)("li",{parentName:"ul"},"D'autres applications 4D (4D Remote, 4D Server) ouvrant une session sur le datastore distant via la commande ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataStoreClass#open-datastore"}),(0,n.kt)("inlineCode",{parentName:"a"},"Open datastore")),". Ces acc\xe8s sont transmis par le ",(0,n.kt)("strong",{parentName:"li"},"serveur HTTP REST"),"."),(0,n.kt)("li",{parentName:"ul"},"Les requ\xeates ",(0,n.kt)("a",s({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"4D for iOS ou 4D for Android")," pour la mise \xe0 jour des applications mobiles. Ces acc\xe8s sont remis par le ",(0,n.kt)("strong",{parentName:"li"},"serveur HTTP"),".")),(0,n.kt)("h2",s({},{id:"ouverture-des-sessions"}),"Ouverture des sessions"),(0,n.kt)("p",null,"Lorsque vous travaillez avec un datastore distant r\xe9f\xe9renc\xe9 par des appels \xe0 la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),", la connexion entre les process qui effectuent la requ\xeate et le datastore distant est g\xe9r\xe9e par des sessions."),(0,n.kt)("p",null,"Une session est cr\xe9\xe9e sur le datastore distant pour g\xe9rer la connexion. Cette session est identifi\xe9e \xe0 l'aide d'un ID de session interne, associ\xe9 au ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," de l'application 4D. Cette session g\xe8re automatiquement l'acc\xe8s aux donn\xe9es, aux s\xe9lections d'entit\xe9s ou aux entit\xe9s."),(0,n.kt)("p",null,"Le ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," est local \xe0 la machine qui se connecte au datastore distant, ce qui signifie :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Que si d'autres process de la m\xeame application doivent acc\xe9der au m\xeame datastore distant, ils peuvent utiliser le m\xeame ",(0,n.kt)("inlineCode",{parentName:"li"},"localID")," et partager alors la m\xeame session."),(0,n.kt)("li",{parentName:"ul"},"Que si un autre process de la m\xeame application ouvre le m\xeame datastore distant, mais avec un autre ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", il cr\xe9era une nouvelle session sur le datastore distant."),(0,n.kt)("li",{parentName:"ul"},"Que si un autre poste se connecte au m\xeame datastore distant avec le m\xeame ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", il cr\xe9era une autre session avec un autre cookie.")),(0,n.kt)("p",null,"Ces principes sont illustr\xe9s dans les graphiques suivants :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(86131).Z,width:"962",height:"719"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour les sessions ouvertes par des requ\xeates REST, veuillez consulter la page ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/REST/authUsers"}),"Utilisateurs et sessions"),".")),(0,n.kt)("h3",s({},{id:"visionnage-des-sessions"}),"Visionnage des sessions"),(0,n.kt)("p",null,"Les process qui g\xe8rent les sessions d'acc\xe8s aux datastore apparaissent dans la fen\xeatre d'administration de 4D Server :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'name: "REST Handler: \\<process name',">",'"'),(0,n.kt)("li",{parentName:"ul"},"type : type Worker Server HTTP"),(0,n.kt)("li",{parentName:"ul"},"session : le nom de session est le nom d'utilisateur pass\xe9 \xe0 la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore"),".")),(0,n.kt)("p",null,"Dans l'exemple suivant, deux process sont en cours d'ex\xe9cution pour la m\xeame session :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9428).Z,width:"1402",height:"708"})),(0,n.kt)("h3",s({},{id:"verrouillage-et-transactions"}),"Verrouillage et transactions"),(0,n.kt)("p",null,"Les fonctionnalit\xe9s ORDA relatives au verrouillage d'entit\xe9 et aux transactions sont g\xe9r\xe9es au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si un process verrouille une entit\xe9 \xe0 partir d'un datastore distant, l'entit\xe9 est verrouill\xe9e pour tous les autres process, m\xeame lorsque ces process partagent la m\xeame session (voir ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/ORDA/entities#entity-locking"}),"Verrouillage d'entit\xe9s"),"). Si plusieurs entit\xe9s pointant vers le m\xeame enregistrement ont \xe9t\xe9 verrouill\xe9es dans un process, elles doivent toutes \xeatre d\xe9verrouill\xe9es dans le process pour supprimer le verrou. Si un verrou a \xe9t\xe9 mis sur une entit\xe9, il est supprim\xe9 lorsqu'il n'existe plus de r\xe9f\xe9rence \xe0 cette entit\xe9 en m\xe9moire."),(0,n.kt)("li",{parentName:"ul"},"Les transactions peuvent \xeatre lanc\xe9es, valid\xe9es ou annul\xe9es s\xe9par\xe9ment sur chaque datastore distant \xe0 l'aide des m\xe9thodes ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction( )"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction( )"),", et ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction( )"),". Elles n\u2019ont pas d\u2019incidences sur les autres datastore."),(0,n.kt)("li",{parentName:"ul"},"Les commandes classiques du langage 4D (",(0,n.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") s'appliquent uniquement au datastore principal (renvoy\xe9 par ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),"). Si une entit\xe9 d'un datastore distant est verrouill\xe9e par une transaction dans un process, les autres process ne peuvent pas la mettre \xe0 jour, m\xeame si ces process partagent la m\xeame session."),(0,n.kt)("li",{parentName:"ul"},"Les verrous sur les entit\xe9s sont supprim\xe9s et les transactions sont annul\xe9es :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"quand le processus est tu\xe9."),(0,n.kt)("li",{parentName:"ul"},"quand la session est ferm\xe9e sur le serveur"),(0,n.kt)("li",{parentName:"ul"},"lorsque la session est arr\xeat\xe9e \xe0 partir de la fen\xeatre d\u2019administration du serveur.")))),(0,n.kt)("h3",s({},{id:"fermeture-des-sessions"}),"Fermeture des sessions"),(0,n.kt)("p",null,"Une session est automatiquement ferm\xe9e par 4D lorsqu'il n'y a pas eu d'activit\xe9 durant son timeout. Le timeout par d\xe9faut est de 60 mn mais cette valeur peut \xeatre param\xe9tr\xe9e \xe0 l'aide du param\xe8tre ",(0,n.kt)("em",{parentName:"p"},"connectionInfo")," de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"."),(0,n.kt)("p",null,"Si une demande est envoy\xe9e au datastore distant apr\xe8s la fermeture de la session, elle est automatiquement recr\xe9\xe9e si possible (licence disponible, serveur non arr\xeat\xe9, etc.). A noter cependant que le contexte de la session des verrous et des transactions est perdu (voir ci-dessus)."),(0,n.kt)("h2",s({},{id:"optimisation-clientserveur"}),"Optimisation client/serveur"),(0,n.kt)("p",null,"4D optimise automatiquement les requ\xeates ORDA qui utilisent des entity selections ou qui chargent des entit\xe9s dans des configurations client/serveur (datastore accessible \xe0 distance \xe0 l'aide de ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," ou de ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"). Ces optimisations acc\xe9l\xe8rent l'ex\xe9cution de votre application 4D en r\xe9duisant drastiquement le volume d'informations transmises sur le r\xe9seau. Elles incluent :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"le ",(0,n.kt)("strong",{parentName:"li"},"contexte d'optimisation")),(0,n.kt)("li",{parentName:"ul"},"le ",(0,n.kt)("strong",{parentName:"li"},"cache ORDA"))),(0,n.kt)("h3",s({},{id:"contexte"}),"Contexte"),(0,n.kt)("p",null,"Le contexte d'optimisation est fond\xe9 sur ce qui suit :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lorsqu'un client demande une s\xe9lection d'entit\xe9 au serveur, 4D \"apprend\" automatiquement attributs de la s\xe9lection d'entit\xe9 sont r\xe9ellement utilis\xe9s c\xf4t\xe9 client lors de l'ex\xe9cution du code, et g\xe9n\xe8re un \"contexte d'optimisation\" correspondant. Ce contexte est reli\xe9 \xe0 la s\xe9lection d'entit\xe9 et stocke les attributs utilis\xe9s. Il sera mis \xe0 jour dynamiquement si d'autres attributs sont utilis\xe9s par la suite. Les m\xe9thodes et fonctions suivantes d\xe9clenchent la phase d'apprentissage :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#create-entity-selection"}),(0,n.kt)("inlineCode",{parentName:"a"},"Create entity selection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#fromcollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Les requ\xeates ult\xe9rieures envoy\xe9es au serveur sur la m\xeame s\xe9lection d'entit\xe9 r\xe9utilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs n\xe9cessaires depuis le serveur, ce qui acc\xe9l\xe8re le traitement. Par exemple, dans une ",(0,n.kt)("a",s({parentName:"p"},{href:"#entity-selection-based-list-box"}),"list box de type entity selection"),", la phase d'apprentissage a lieu pendant l'affichage de la premi\xe8re ligne. L'affichage des lignes suivantes est optimis\xe9. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine \xe0 l'entity selection retourn\xe9e :"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#and"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#minus"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#or"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#orderBy"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#drop"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Un contexte d'optimisation existant peut \xeatre pass\xe9 en tant que propri\xe9t\xe9 \xe0 une autre s\xe9lection d'entit\xe9 de la m\xeame dataclass, ce qui permet d'\xe9viter la phase d'apprentissage et d'acc\xe9l\xe9rer l'application (voir ",(0,n.kt)("a",s({parentName:"p"},{href:"#reusing-the-context-property"}),"Utilisation de la propri\xe9t\xe9 context")," ci-dessous).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Vous pouvez cr\xe9er des contextes d'optimisation manuellement \xe0 l'aide de la fonction ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," (voir ",(0,n.kt)("a",s({parentName:"p"},{href:"#preconfiguring-contexts"}),"Pr\xe9configuration des contextes"),")."))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(11919).Z,width:"3439",height:"2018"})),(0,n.kt)("h4",s({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Consid\xe9rons le code suivant :"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer renvoie \xe0 la table Company \n End for each\n')),(0,n.kt)("p",null,"Gr\xe2ce \xe0 l'optimisation, cette requ\xeate r\xe9cup\xe9rera uniquement les donn\xe9es des attributs utilis\xe9s (pr\xe9nom, nom, employeur, employeur.name) dans ",(0,n.kt)("em",{parentName:"p"},"$sel")," \xe0 partir de la deuxi\xe8me it\xe9ration de la boucle."),(0,n.kt)("h4",s({},{id:"r\xe9utiliser-la-propri\xe9t\xe9-context"}),"R\xe9utiliser la propri\xe9t\xe9 context"),(0,n.kt)("p",null,"Vous pouvez tirer un meilleur parti de l'optimisation en utilisant la propri\xe9t\xe9 ",(0,n.kt)("strong",{parentName:"p"},"context"),". Cette propri\xe9t\xe9 r\xe9f\xe9rence un contexte d'optimisation \"appris\" pour une s\xe9lection d'entit\xe9s. Elle peut \xeatre pass\xe9e comme param\xe8tre aux fonctions ORDA qui retournent de nouvelles s\xe9lections d'entit\xe9s, afin que les s\xe9lections d'entit\xe9s demandent directement au serveur les attributs utilis\xe9s, sans passer par la phase d'apprentissage."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement cr\xe9er des contextes \xe0 l'aide de la fonction ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()")),".")),(0,n.kt)("p",null,"All ORDA functions that handle entity selections support the ",(0,n.kt)("strong",{parentName:"p"},"context")," property (for example ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," or ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. Il est toutefois important de garder \xe0 l'esprit qu'un contexte est automatiquement mis \xe0 jour lorsque de nouveaux attributs sont utilis\xe9s dans d'autres parties du code. Si le m\xeame contexte est r\xe9utilis\xe9 dans diff\xe9rents codes, il risque d'\xeatre surcharg\xe9 et de perdre en efficacit\xe9."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))," function).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemple avec ",(0,n.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n')),(0,n.kt)("h4",s({},{id:"listbox-bas\xe9e-sur-une-s\xe9lection-dentit\xe9s"}),"Listbox bas\xe9e sur une s\xe9lection d'entit\xe9s"),(0,n.kt)("p",null,"L'optimisation d'une s\xe9lection d'entit\xe9s s'applique automatiquement aux listbox bas\xe9es sur une s\xe9lection d'entit\xe9s dans les configurations client/serveur, au moment d'afficher et de d\xe9rouler le contenu d'une listbox : seuls les attributs affich\xe9s dans la listbox sont demand\xe9s depuis le serveur."),(0,n.kt)("p",null,"Un contexte sp\xe9cifique nomm\xe9 \"mode page\" est \xe9galement propos\xe9 lorsque l'entit\xe9 courante de la s\xe9lection est charg\xe9e \xe0 l'aide de l'expression ",(0,n.kt)("strong",{parentName:"p"},"\xe9l\xe9ment courant")," de la listbox (voir ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-types"}),"List box de type collection ou entity selection"),"). Cette fonctionnalit\xe9 vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas pr\xe9cis, notamment si la \"page\" requiert des attributs suppl\xe9mentaires. A noter que seule l'utilisation de l'expression ",(0,n.kt)("strong",{parentName:"p"},"\xc9l\xe9ment courant")," permettra de cr\xe9er/utiliser le contexte de la page (l'acc\xe8s via ",(0,n.kt)("inlineCode",{parentName:"p"},"entitySelection[index]")," modifiera le contexte de la s\xe9lection d'entit\xe9)."),(0,n.kt)("p",null,"Subsequent requests to server sent by entity browsing functions will also support this optimization. The following functions automatically associate the optimization context of the source entity to the returned entity:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntityClass#next"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntityClass#first"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntityClass#last"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntityClass#previous"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,n.kt)("p",null,"Par exemple, le code suivant charge l'entit\xe9 s\xe9lectionn\xe9e et permet de naviguer dans la s\xe9lection d'entit\xe9s. Les entit\xe9s sont charg\xe9es dans un contexte s\xe9par\xe9 et le contexte initial de la listbox demeure inchang\xe9 :"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //expression de l'\xe9l\xe9ment courant \n  //... faire quelque chose\n $myEntity:=$myEntity.next() //charge la prochaine entit\xe9 \xe0 l'aide du m\xeame contexte\n")),(0,n.kt)("h4",s({},{id:"preconfiguring-contexts"}),"Preconfiguring contexts"),(0,n.kt)("p",null,"An optimization context should be defined for every feature or algorithm of your application, in order to have the best performances. For example, a context can be used for queries on customers, another context for queries on products, etc."),(0,n.kt)("p",null,"If you want to deliver final applications with the highest level of optimization, you can preconfigure your contexts and thus save learning phases by following these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Design your algorithms."),(0,n.kt)("li",{parentName:"ol"},"Run your application and let the automatic learning mechanism fill the optimization contexts."),(0,n.kt)("li",{parentName:"ol"},"Call the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataStoreClass#getremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," or ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataStoreClass#getallremotecontexts"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," function to collect  contexts. You can use the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntitySelectionClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," and ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/EntityClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," functions to analyse how your algorithms use attributes."),(0,n.kt)("li",{parentName:"ol"},"In the final step, call the ",(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function to build contexts at application startup and ",(0,n.kt)("a",s({parentName:"li"},{href:"#reusing-the-context-property"}),"use them")," in your algorithms.")),(0,n.kt)("h3",s({},{id:"orda-cache"}),"ORDA cache"),(0,n.kt)("p",null,"For optimization reasons, data requested from the server via ORDA is loaded in the ORDA remote cache (which is different from the 4D cache). The ORDA cache is organized by dataclass, and expires after 30 seconds."),(0,n.kt)("p",null,"The data contained in the cache is considered as expired when the timeout is reached. Any access to expired data will send a request to the server. Expired data remains in the cache until space is needed."),(0,n.kt)("p",null,"By default, the ORDA cache is transparently handled by 4D. However, you can control its contents using the following ORDA class functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"/docs/fr/20/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}d.isMDXComponent=!0},11919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},9428:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},86131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);