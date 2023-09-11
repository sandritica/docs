"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37295],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(f,i(i({ref:a},u),{},{components:n})):t.createElement(f,i({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87457:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var t=n(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"genInfo",title:"Obtener informaci\xf3n del servidor"},l=void 0,s={unversionedId:"REST/genInfo",id:"version-20-R2/REST/genInfo",title:"Obtener informaci\xf3n del servidor",description:"Puede obtener varias informaciones del servidor REST:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/es/REST/genInfo",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"genInfo",title:"Obtener informaci\xf3n del servidor"},sidebar:"docs",previous:{title:"Usuarios y sesiones",permalink:"/docs/es/REST/authUsers"},next:{title:"Manipulaci\xf3n de datos",permalink:"/docs/es/REST/manData"}},c={},u=[{value:"Cat\xe1logo",id:"cat\xe1logo",level:2},{value:"Informaci\xf3n de la cach\xe9",id:"informaci\xf3n-de-la-cach\xe9",level:2},{value:"queryPath y queryPlan",id:"querypath-y-queryplan",level:2}],d={toc:u};function p(e){var{components:a}=e,n=o(e,["components"]);return(0,t.kt)("wrapper",r({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Puede obtener varias informaciones del servidor REST:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"los almacenes de datos expuestos y sus atributos"),(0,t.kt)("li",{parentName:"ul"},"el contenido de la cach\xe9 del servidor REST, incluidas las sesiones de los usuarios.")),(0,t.kt)("h2",r({},{id:"cat\xe1logo"}),"Cat\xe1logo"),(0,t.kt)("p",null,"Utilice los par\xe1metros ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/catalog"}),(0,t.kt)("inlineCode",{parentName:"a"},"$catalog")),", ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/catalog#catalogdataclass"}),(0,t.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),", o ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/catalog#catalogall"}),(0,t.kt)("inlineCode",{parentName:"a"},"$catalog/$all"))," para obtener la lista de ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/configuration#exposing-tables-and-fields"}),"las clases de datos expuestas y sus atributos"),"."),(0,t.kt)("p",null,"Para obtener la colecci\xf3n de todas las clases de datos expuestas junto con sus atributos:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"GET /rest/$catalog/$all")),(0,t.kt)("h2",r({},{id:"informaci\xf3n-de-la-cach\xe9"}),"Informaci\xf3n de la cach\xe9"),(0,t.kt)("p",null,"Utilice el par\xe1metro ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/info"}),(0,t.kt)("inlineCode",{parentName:"a"},"$info"))," para obtener informaci\xf3n sobre las selecciones de entidades actualmente almacenadas en la cach\xe9 de 4D Server, as\xed como sobre las sesiones de usuario en ejecuci\xf3n."),(0,t.kt)("h2",r({},{id:"querypath-y-queryplan"}),"queryPath y queryPlan"),(0,t.kt)("p",null,"Las selecciones de entidades generadas a trav\xe9s de b\xfasquedas pueden tener las dos propiedades siguientes: ",(0,t.kt)("inlineCode",{parentName:"p"},"queryPlan")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"queryPath"),". Para calcular y devolver estas propiedades, basta con a\xf1adir ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/queryplan"}),(0,t.kt)("inlineCode",{parentName:"a"},"$queryPlan"))," y/o ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/querypath"}),(0,t.kt)("inlineCode",{parentName:"a"},"$queryPath"))," en la petici\xf3n REST."),(0,t.kt)("p",null,"Por ejemplo:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true')),(0,t.kt)("p",null,"Estas propiedades son objetos que contienen informaci\xf3n sobre c\xf3mo el servidor realiza consultas compuestas internamente a trav\xe9s de clases de datos y relaciones:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"queryPlan"),": objeto que contiene la descripci\xf3n detallada de la petici\xf3n justo antes de ser ejecutada (es decir, la consulta planificada)."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"queryPath"),": objeto que contiene la descripci\xf3n detallada de la consulta tal y como se ha realizado realmente.")),(0,t.kt)("p",null,"La informaci\xf3n registrada incluye el tipo de consulta (indexada y secuencial) y cada subconsulta necesaria junto con los operadores de conjunci\xf3n. Las rutas de acceso de las peticiones tambi\xe9n contienen el n\xfamero de entidades encontradas y el tiempo necesario para ejecutar cada criterio de b\xfasqueda. Query paths also contain the number of entities found and the time required to execute each search criterion. Generalmente, la descripci\xf3n del plan de consulta y su ruta de acceso son id\xe9nticas, pero pueden diferir porque 4D puede implementar optimizaciones din\xe1micas cuando se ejecuta una consulta para mejorar el rendimiento. Por ejemplo, el motor 4D puede convertir din\xe1micamente una consulta indexada en una secuencial si estima que es m\xe1s r\xe1pida. Este caso concreto puede darse cuando el n\xfamero de entidades que se buscan es bajo."))}p.isMDXComponent=!0}}]);