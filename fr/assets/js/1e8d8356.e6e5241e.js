"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"genInfo",title:"Obtenir des informations du serveur"},i=void 0,l={unversionedId:"REST/genInfo",id:"version-19/REST/genInfo",title:"Obtenir des informations du serveur",description:"Vous pouvez obtenir plusieurs informations du serveur REST :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/fr/19/REST/genInfo",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"genInfo",title:"Obtenir des informations du serveur"},sidebar:"docs",previous:{title:"Sessions et utilisateurs",permalink:"/docs/fr/19/REST/authUsers"},next:{title:"Manipulation des donn\xe9es",permalink:"/docs/fr/19/REST/manData"}},u={},c=[{value:"Catalogue",id:"catalogue",level:2},{value:"Informations sur le cache",id:"informations-sur-le-cache",level:2},{value:"queryPath et queryPlan",id:"querypath-et-queryplan",level:2}],p={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vous pouvez obtenir plusieurs informations du serveur REST :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"les datastores expos\xe9es et leurs attributs"),(0,n.kt)("li",{parentName:"ul"},"le contenu du cache du serveur REST, y compris les sessions utilisateur.")),(0,n.kt)("h2",a({},{id:"catalogue"}),"Catalogue"),(0,n.kt)("p",null,"Utilisez les param\xe8tres ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/catalog"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog")),",",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/catalog#catalogdataclass"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),", ou ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/catalog#catalogall"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/$all"))," pour obtenir la liste ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/configuration#exposing-tables-and-fields"}),"des dataclasses expos\xe9es et leurs attributs"),"."),(0,n.kt)("p",null,"Pour obtenir la collection de toutes les dataclass expos\xe9es avec leurs attributs :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /rest/$catalog/$all")),(0,n.kt)("h2",a({},{id:"informations-sur-le-cache"}),"Informations sur le cache"),(0,n.kt)("p",null,"Utilisez le param\xe8tre ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/info"}),(0,n.kt)("inlineCode",{parentName:"a"},"$info"))," pour obtenir des informations sur les s\xe9lections d'entit\xe9s stock\xe9es dans le cache du 4D Server et sur l'ex\xe9cution des sessions utilisateur."),(0,n.kt)("h2",a({},{id:"querypath-et-queryplan"}),"queryPath et queryPlan"),(0,n.kt)("p",null,"Les s\xe9lections d'entit\xe9 g\xe9n\xe9r\xe9es par les requ\xeates peuvent avoir les deux propri\xe9t\xe9s suivantes : ",(0,n.kt)("inlineCode",{parentName:"p"},"queryPlan")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"queryPath"),". Pour calculer et retourner ces propri\xe9t\xe9s, il vous suffit d'ajouter ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/queryplan"}),(0,n.kt)("inlineCode",{parentName:"a"},"$queryPlan"))," et/ou ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/REST/querypath"}),(0,n.kt)("inlineCode",{parentName:"a"},"$queryPath"))," dans la demande REST."),(0,n.kt)("p",null,"Par exemple :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true')),(0,n.kt)("p",null,"Ces propri\xe9t\xe9s sont des objets contenant des informations sur la fa\xe7on dont le serveur ex\xe9cute les requ\xeates composites en interne via des dataclass et des relations :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"queryPlan")," : objet contenant la description d\xe9taill\xe9e de la requ\xeate juste avant son ex\xe9cution (c'est-\xe0-dire la requ\xeate planifi\xe9e)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"queryPath")," : objet contenant la description d\xe9taill\xe9e de la requ\xeate telle qu'elle a \xe9t\xe9 r\xe9ellement effectu\xe9e.")),(0,n.kt)("p",null,"Les informations enregistr\xe9es incluent le type de requ\xeate (index\xe9 et s\xe9quentiel) et chaque sous-requ\xeate n\xe9cessaire ainsi que les op\xe9rateurs de conjonction. Les chemins d'acc\xe8s des requ\xeates contiennent \xe9galement le nombre d'entit\xe9s identifi\xe9es et la dur\xe9e d'ex\xe9cution de chaque crit\xe8re de recherche. Query paths also contain the number of entities found and the time required to execute each search criterion. G\xe9n\xe9ralement, la description du plan de requ\xeate et son chemin d'acc\xe8s sont identiques mais ils peuvent diff\xe9rer car 4D peut int\xe9grer des optimisations dynamiques lorsqu'une requ\xeate est ex\xe9cut\xe9e, afin d'am\xe9liorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requ\xeate index\xe9e en requ\xeate s\xe9quentielle s'il estime que ce processus est plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entit\xe9s recherch\xe9es est faible."))}d.isMDXComponent=!0}}]);