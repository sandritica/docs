"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=s,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},99475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});r(67294);var n=r(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const o={id:"client-server",title:"Page Client/Serveur"},a=void 0,l={unversionedId:"settings/client-server",id:"version-19-R7/settings/client-server",title:"Page Client/Serveur",description:"Les pages Client-serveur regroupent les propri\xe9t\xe9s li\xe9es \xe0 l'utilisation de la base de donn\xe9es en mode client-serveur. Bien entendu, ces propri\xe9t\xe9s ne sont prises en compte que lorsque la base de donn\xe9es est utilis\xe9e en mode distant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/fr/19-R7/settings/client-server",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/settings/client-server.md",tags:[],version:"19-R7",frontMatter:{id:"client-server",title:"Page Client/Serveur"},sidebar:"docs",previous:{title:"Page Sauvegarde",permalink:"/docs/fr/19-R7/settings/backup"},next:{title:"Page Web",permalink:"/docs/fr/19-R7/settings/web"}},u={},d=[{value:"Page Options r\xe9seau",id:"page-options-r\xe9seau",level:2},{value:"R\xe9seau",id:"r\xe9seau",level:3},{value:"Publier la base au d\xe9marrage",id:"publier-la-base-au-d\xe9marrage",level:4},{value:"Nom de publication",id:"nom-de-publication",level:4},{value:"Num\xe9ro de port",id:"num\xe9ro-de-port",level:4},{value:"4D Server et num\xe9ros de port",id:"4d-server-et-num\xe9ros-de-port",level:4},{value:"Authentification de l&#39;utilisateur aupr\xe8s du serveur de domaine",id:"authentification-de-lutilisateur-aupr\xe8s-du-serveur-de-domaine",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"D\xe9lai avant d\xe9connexion Client-Serveur",id:"d\xe9lai-avant-d\xe9connexion-client-serveur",level:4},{value:"Communication client-serveur",id:"communication-client-serveur",level:3},{value:"Inscrire les clients au d\xe9marrage pour Ex\xe9cuter sur client",id:"inscrire-les-clients-au-d\xe9marrage-pour-ex\xe9cuter-sur-client",level:4},{value:"Crypter les communications Client-Serveur",id:"crypter-les-communications-client-serveur",level:4},{value:"Mise \xe0 jour du dossier Resources en cours de session",id:"mise-\xe0-jour-du-dossier-resources-en-cours-de-session",level:4},{value:"Page Configuration IP",id:"page-configuration-ip",level:2},{value:"Table de configuration Autoriser-Refuser",id:"table-de-configuration-autoriser-refuser",level:3}],c={toc:d};function p(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",s({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Les pages Client-serveur regroupent les propri\xe9t\xe9s li\xe9es \xe0 l'utilisation de la base de donn\xe9es en mode client-serveur. Bien entendu, ces propri\xe9t\xe9s ne sont prises en compte que lorsque la base de donn\xe9es est utilis\xe9e en mode distant."),(0,n.kt)("h2",s({},{id:"page-options-r\xe9seau"}),"Page Options r\xe9seau"),(0,n.kt)("h3",s({},{id:"r\xe9seau"}),"R\xe9seau"),(0,n.kt)("h4",s({},{id:"publier-la-base-au-d\xe9marrage"}),"Publier la base au d\xe9marrage"),(0,n.kt)("p",null,"Cette option vous permet d'indiquer si la base de donn\xe9es 4D Server appara\xeetra ou non dans la liste des bases de donn\xe9es publi\xe9es."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lorsque cette option est coch\xe9e (par d\xe9faut), la base de donn\xe9es est rendue publique et appara\xeet dans la liste des bases de donn\xe9es publi\xe9es (onglet ",(0,n.kt)("strong",{parentName:"li"},"Disponible"),")."),(0,n.kt)("li",{parentName:"ul"},"Lorsque l'option n'est pas coch\xe9e, la base de donn\xe9es n'est pas rendue publique et n'appara\xeet pas dans la liste des bases de donn\xe9es publi\xe9es. Pour se connecter, les utilisateurs doivent saisir manuellement l'adresse de la base de donn\xe9es dans l'onglet ",(0,n.kt)("strong",{parentName:"li"},"Personnalis\xe9")," de la bo\xeete de dialogue de connexion.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous modifiez ce param\xe8tre, vous devez red\xe9marrer la base du serveur pour qu'il soit pris en compte.")),(0,n.kt)("h4",s({},{id:"nom-de-publication"}),"Nom de publication"),(0,n.kt)("p",null,"Cette option vous permet de modifier le nom de publication d'une base de donn\xe9es 4D Server, c'est-\xe0-dire le nom affich\xe9 dans l'onglet dynamique ",(0,n.kt)("strong",{parentName:"p"},"Disponible")," de la bo\xeete de dialogue de connexion (voir la section ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.en.html"}),"Connexion \xe0 une base de donn\xe9es 4D Server"),"). Par d\xe9faut, 4D Server utilise le nom du fichier de projet. Vous pouvez saisir le nom personnalis\xe9 de votre choix."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ce param\xe8tre n'est pas pris en compte dans les applications client-serveur personnalis\xe9es. En th\xe9orie, l'application client se connecte directement \xe0 l'application serveur, sans passer par la bo\xeete de dialogue de connexion. Toutefois, en cas d'erreur, cette bo\xeete de dialogue peut appara\xeetre ; dans ce cas, le nom de publication de l'application serveur correspond au nom du projet compil\xe9.")),(0,n.kt)("h4",s({},{id:"num\xe9ro-de-port"}),"Num\xe9ro de port"),(0,n.kt)("p",null,"Cette option vous permet de modifier le num\xe9ro du port TCP sur lequel 4D Server publie la base de donn\xe9es. Cette information est stock\xe9e dans le projet et sur chaque machine cliente. Par d\xe9faut, le num\xe9ro de port TCP utilis\xe9 par 4D Server et 4D en mode distant est 19813."),(0,n.kt)("p",null,"La personnalisation de cette valeur est n\xe9cessaire lorsque vous souhaitez utiliser plusieurs applications 4D sur la m\xeame machine ; dans ce cas, vous devez sp\xe9cifier un num\xe9ro de port diff\xe9rent pour chaque application. Lorsque vous modifiez cette valeur depuis 4D Server ou 4D, elle est automatiquement pass\xe9e \xe0 toutes les machines 4D connect\xe9es \xe0 la base de donn\xe9es."),(0,n.kt)("p",null,"Pour mettre \xe0 jour les autres machines clientes qui ne sont pas connect\xe9es, il suffit de saisir le nouveau num\xe9ro de port (pr\xe9c\xe9d\xe9 de deux points) apr\xe8s l'adresse IP de la machine serveur dans l'onglet ",(0,n.kt)("strong",{parentName:"p"},"Personnalis\xe9")," de la bo\xeete de dialogue de connexion lors de la prochaine connexion. Par exemple, si le nouveau num\xe9ro de port est 19888 :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(12962).Z,width:"466",height:"488"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Seules les bases de donn\xe9es publi\xe9es sur le m\xeame port que celui d\xe9fini dans 4D client sont visibles sur la page de publication dynamique TCP/IP.")),(0,n.kt)("h4",s({},{id:"4d-server-et-num\xe9ros-de-port"}),"4D Server et num\xe9ros de port"),(0,n.kt)("p",null,"4D Server utilise trois ports TCP pour les communications entre les serveurs internes et les clients :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SQL Server"),' : 19812 par d\xe9faut (peut \xeatre modifi\xe9 via la page "SQL/Configuration" des Pr\xe9f\xe9rences).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Serveur d'application"),' : 19813 par d\xe9faut (peut \xeatre modifi\xe9 via la page "Client-Serveur/Configuration" des Pr\xe9f\xe9rences, voir ci-dessus).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Serveur DB4D")," (serveur de base de donn\xe9es) : 19814 par d\xe9faut. This port number cannot be modified directly but it always consists of the application server port number + 1.\\\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\\\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.")),(0,n.kt)("h4",s({},{id:"authentification-de-lutilisateur-aupr\xe8s-du-serveur-de-domaine"}),"Authentification de l'utilisateur aupr\xe8s du serveur de domaine"),(0,n.kt)("p",null,"Cette option vous permet de mettre en \u0153uvre des fonctionnalit\xe9s SSO (",(0,n.kt)("em",{parentName:"p"},"Single Sign On"),") dans votre base de donn\xe9es 4D Server sous Windows. Lorsque vous cochez cette option, 4D se connecte de mani\xe8re transparente \xe0 l'Active directory du serveur de domaine Windows et obtient les tokens d'authentification disponibles. Cette option est d\xe9crite dans la section ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) sur Windows"),"."),(0,n.kt)("h4",s({},{id:"service-principal-name"}),"Service Principal Name"),(0,n.kt)("p",null,"Lorsque l'authentification unique (SSO) est activ\xe9e (voir ci-dessus), vous devez remplir ce champ si vous souhaitez utiliser Kerberos comme protocole d'authentification. Cette option est d\xe9crite dans la section ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) sur Windows"),"."),(0,n.kt)("h4",s({},{id:"d\xe9lai-avant-d\xe9connexion-client-serveur"}),"D\xe9lai avant d\xe9connexion Client-Serveur"),(0,n.kt)("p",null,"Ce dispositif permet de d\xe9finir le timeout (p\xe9riode d'inactivit\xe9 au-del\xe0 de laquelle la connexion est ferm\xe9e) entre 4D Server et les machines clientes qui s'y connectent. L'option \"Illimit\xe9\" supprime le timeout. Lorsque cette option est s\xe9lectionn\xe9e, le contr\xf4le de l'activit\xe9 du client est \xe9limin\xe9."),(0,n.kt)("p",null,"Lorsqu'un d\xe9lai d'attente est s\xe9lectionn\xe9, le serveur ferme la connexion d'un client s'il ne re\xe7oit aucune demande de ce dernier pendant le d\xe9lai sp\xe9cifi\xe9."),(0,n.kt)("h3",s({},{id:"communication-client-serveur"}),"Communication client-serveur"),(0,n.kt)("h4",s({},{id:"inscrire-les-clients-au-d\xe9marrage-pour-ex\xe9cuter-sur-client"}),"Inscrire les clients au d\xe9marrage pour Ex\xe9cuter sur client"),(0,n.kt)("p",null,"Lorsque cette option est coch\xe9e, toutes les machines distantes 4D se connectant \xe0 la base de donn\xe9es peuvent ex\xe9cuter des m\xe9thodes \xe0 distance. Ce m\xe9canisme est d\xe9taill\xe9 dans la section ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html"}),"Proc\xe9dures stock\xe9es sur les machines clientes"),"."),(0,n.kt)("h4",s({},{id:"crypter-les-communications-client-serveur"}),"Crypter les communications Client-Serveur"),(0,n.kt)("p",null,"Cette option permet d'activer le mode s\xe9curis\xe9 pour les communications entre la machine serveur et les machines distantes 4D. Cette option est d\xe9taill\xe9e dans la section ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html"}),"Crypter les connexions Client-Serveur"),"."),(0,n.kt)("h4",s({},{id:"mise-\xe0-jour-du-dossier-resources-en-cours-de-session"}),"Mise \xe0 jour du dossier Resources en cours de session"),(0,n.kt)("p",null,"Ce param\xe8tre permet de d\xe9finir globalement le mode de mise \xe0 jour de l'instance locale du dossier ",(0,n.kt)("strong",{parentName:"p"},"Resources")," sur les machines 4D connect\xe9es lorsque le dossier ",(0,n.kt)("strong",{parentName:"p"},"Resources")," de la base de donn\xe9es est modifi\xe9 en cours de session (le dossier ",(0,n.kt)("strong",{parentName:"p"},"Ressources")," est automatiquement synchronis\xe9 sur la machine distante \xe0 chaque ouverture de session). Trois param\xe8tres sont disponibles :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Jamais")," : Le dossier ",(0,n.kt)("strong",{parentName:"li"},"Resources")," local n'est pas mis \xe0 jour pendant la session. La notification envoy\xe9e par le serveur est ignor\xe9e. Le dossier ",(0,n.kt)("strong",{parentName:"li"},"Resources")," local peut \xeatre mis \xe0 jour manuellement \xe0 l'aide de la commande ",(0,n.kt)("strong",{parentName:"li"},"Update Local Resources")," du menu d'action (voir ",(0,n.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html"}),"Utilisation de l'explorateur de ressources"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Toujours")," : La synchronisation du dossier local ",(0,n.kt)("strong",{parentName:"li"},"Resources")," est automatiquement effectu\xe9e pendant la session chaque fois qu'une notification est envoy\xe9e par le serveur."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Demander")," : Lorsque la notification est envoy\xe9e par le serveur, une bo\xeete de dialogue est affich\xe9e sur les postes clients, indiquant la modification. The user can then accept or refuse the synchronization of the local ",(0,n.kt)("strong",{parentName:"li"},"Resources")," folder.\\\nThe ",(0,n.kt)("strong",{parentName:"li"},"Resources")," folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Des m\xe9canismes automatiques ou manuels permettent de notifier chaque client lorsque le contenu de ce dossier a \xe9t\xe9 modifi\xe9. Pour plus d'informations, reportez-vous \xe0 la section ",(0,n.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Gestion-du-dossier-Resources.300-5422466.fe.html"}),"Gestion du dossier Resources"),".")),(0,n.kt)("h2",s({},{id:"page-configuration-ip"}),"Page Configuration IP"),(0,n.kt)("h3",s({},{id:"table-de-configuration-autoriser-refuser"}),"Table de configuration Autoriser-Refuser"),(0,n.kt)("p",null,"Cette table vous permet de d\xe9finir des r\xe8gles de contr\xf4le d\u2019acc\xe8s \xe0 la base en fonction de l\u2019adresse IP des postes 4D distants. Cette option permet de renforcer la s\xe9curit\xe9 par exemple pour des applications strat\xe9giques."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cette table de configuration ne contr\xf4le pas les connexions Web.")),(0,n.kt)("p",null,"Le fonctionnement de la table de configuration est le suivant :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La colonne \u201cAutoriser-Refuser\u201d permet de s\xe9lectionner le type de r\xe8gle \xe0 appliquer (Autoriser ou Refuser) \xe0 l\u2019aide d\u2019un pop up menu. Pour ajouter une r\xe8gle d\u2019adresses, cliquez sur le bouton Ajouter. Une nouvelle ligne appara\xeet dans la table. Le bouton ",(0,n.kt)("strong",{parentName:"li"},"Supprimer")," permet de supprimer la ligne courante."),(0,n.kt)("li",{parentName:"ul"},"La colonne \u201cAdresse IP\u201d permet de d\xe9signer la ou les adresse(s) IP concern\xe9e(s) par la r\xe8gle. Pour sp\xe9cifier une adresse, cliquez dans la colonne et saisissez l\u2019adresse sous la forme 123.45.67.89 (format IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (format IPv6). Vous pouvez utiliser le caract\xe8re ",(0,n.kt)("em",{parentName:"li"}," (\xe9toile) pour sp\xe9cifier des adresses du type \u201ccommence par\u201d. Par exemple, 192.168.")," indique toutes les adresses d\xe9butant par 192.168."),(0,n.kt)("li",{parentName:"ul"},"L\u2019application des r\xe8gles s\u2019effectue dans l\u2019ordre d\u2019affichage de la table. Si deux r\xe8gles sont contradictoires, la priorit\xe9 sera accord\xe9e \xe0 la r\xe8gle situ\xe9e le plus haut dans le tableau. Vous pouvez r\xe9ordonner les lignes en modifiant le tri courant (cliquez sur un en-t\xeate de colonne pour alterner le sens de tri). Vous pouvez \xe9galement d\xe9placer des lignes par glisser-d\xe9poser."),(0,n.kt)("li",{parentName:"ul"},"Pour des raisons de s\xe9curit\xe9, seules les adresses correspondant \xe0 une r\xe8gle d\u2019autorisation explicite pourront se connecter. En particulier, si la table contient uniquement une ou plusieurs r\xe8gle(s) de type Refuser, toutes les adresses seront refus\xe9es car aucune ne satisfera \xe0 au moins une r\xe8gle. Si vous souhaitez refuser certaines adresses et autoriser toutes les autres, ajoutez une r\xe8gle Autoriser * \xe0 la fin de la table. Par exemple :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Refuser 192.168.* (refuser toutes adresses d\xe9butant par 192.168)"),(0,n.kt)("li",{parentName:"ul"},"Autoriser * (et autoriser les autres)")))),(0,n.kt)("p",null,"Par d\xe9faut, aucune restriction de connexion n\u2019est appliqu\xe9e par 4D Server : la premi\xe8re ligne de la table contient le libell\xe9 Autoriser et le caract\xe8re * (toute adresse)."))}p.isMDXComponent=!0},12962:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"}}]);