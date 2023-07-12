"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"filter",title:"$filter"},o=void 0,p={unversionedId:"REST/filter",id:"version-20-R2/REST/filter",title:"$filter",description:"Permet de rechercher les donn\xe9es d'une dataclass ou d'une m\xe9thode (par exemple, $filter=\"firstName!='' AND salary>30000\")",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/REST/$filter.md",sourceDirName:"REST",slug:"/REST/filter",permalink:"/docs/fr/REST/filter",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"filter",title:"$filter"},sidebar:"docs",previous:{title:"$expand",permalink:"/docs/fr/REST/expand"},next:{title:"$imageformat",permalink:"/docs/fr/REST/imageformat"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Utiliser un filtre simple",id:"utiliser-un-filtre-simple",level:3},{value:"Utiliser un filtre complexe",id:"utiliser-un-filtre-complexe",level:3},{value:"Utiliser la propri\xe9t\xe9 params",id:"utiliser-la-propri\xe9t\xe9-params",level:3},{value:"Attribut",id:"attribut",level:2},{value:"Comparateur",id:"comparateur",level:2},{value:"Exemples",id:"exemples",level:2}],m={toc:u};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Permet de rechercher les donn\xe9es d'une dataclass ou d'une m\xe9thode (par exemple, ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter=\"firstName!='' AND salary>30000\""),")"),(0,a.kt)("h2",n({},{id:"description"}),"Description"),(0,a.kt)("p",null,"Ce param\xe8tre vous permet de d\xe9finir le filtre de votre dataclass ou de votre m\xe9thode."),(0,a.kt)("h3",n({},{id:"utiliser-un-filtre-simple"}),"Utiliser un filtre simple"),(0,a.kt)("p",null,"Un filtre est compos\xe9 des \xe9l\xe9ments suivants :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribut} {comparateur} {valeur}")),(0,a.kt)("p",null,"Par exemple : ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john"')," o\xf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," est l'",(0,a.kt)("strong",{parentName:"p"},"attribut"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," est le ",(0,a.kt)("strong",{parentName:"p"},"comparateur")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," est la ",(0,a.kt)("strong",{parentName:"p"},"valeur"),"."),(0,a.kt)("h3",n({},{id:"utiliser-un-filtre-complexe"}),"Utiliser un filtre complexe"),(0,a.kt)("p",null,"Un filtre plus complexe est compos\xe9 des \xe9l\xe9ments suivants, qui joint deux requ\xeates :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribut} {comparateur} {valeur} {AND/OR/EXCEPT} {attribut} {comparateur} {valeur}")),(0,a.kt)("p",null,"Par exemple : ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=john AND salary>20000"')," o\xf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"salary"),' sont les attributs de la dataclasse "Employee".'),(0,a.kt)("h3",n({},{id:"utiliser-la-propri\xe9t\xe9-params"}),"Utiliser la propri\xe9t\xe9 params"),(0,a.kt)("p",null,"Vous pouvez \xe9galement utiliser la propri\xe9t\xe9 params de 4D."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"{attribut} {comparateur} {placeholder} {AND/OR/EXCEPT} {attribut} {comparateur} {placeholder}&$params='",'["{value1}","{value2}"]',"\"'")),(0,a.kt)("p",null,"Par exemple : ",(0,a.kt)("inlineCode",{parentName:"p"},'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'"'),' o\xf9 firstName et salary sont les attributs de la dataclass "Employee".'),(0,a.kt)("p",null,"Pour plus d'informations sur la fa\xe7on de rechercher des donn\xe9es dans 4D, reportez-vous \xe0 la documentation de ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html"}),"dataClass.query()"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lorsque vous ins\xe9rez des guillemets (') ou des guillemets doubles (\"), vous devez les \xe9chapper en utilisant leur code de caract\xe8re :"),(0,a.kt)("li",null,"Quotes ('): \\u0027"),(0,a.kt)("li",null,'Guillemets doubles ("): \\u0022'),(0,a.kt)("p",{parentName:"blockquote"},"Par exemple, vous pouvez \xe9crire ce qui suit lors du passage d'une valeur avec un guillemet lors de l'utilisation de la propri\xe9t\xe9 ",(0,a.kt)("em",{parentName:"p"},"params")," :",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'')),(0,a.kt)("p",{parentName:"blockquote"},"If you pass the value directly, you can write the following: ",(0,a.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'))),(0,a.kt)("h2",n({},{id:"attribut"}),"Attribut"),(0,a.kt)("p",null,"Si l'attribut se trouve dans la m\xeame dataclass, vous pouvez simplement le passer directement (par exemple, ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName"),"). Cependant, si vous souhaitez lancer une requ\xeate dans une autre dataclass, vous devez inclure le nom de l'attribut relationnel et le nom d'attribut, c'est-\xe0-dire le chemin d'acc\xe8s (par exemple, employeur.nom). Le nom d'attribut est sensible \xe0 la casse (",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," n'est pas \xe9gal \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"FirstName"),")."),(0,a.kt)("p",null,'Vous pouvez \xe9galement rechercher des attributs de type Objet en utilisant la notation par points. Par exemple, si vous avez un attribut dont le nom est "objAttribute" avec la structure suivante :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n')),(0,a.kt)("p",null,"Vous pouvez rechercher dans l'objet en \xe9crivant ce qui suit :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"')),(0,a.kt)("h2",n({},{id:"comparateur"}),"Comparateur"),(0,a.kt)("p",null,"Le comparateur doit \xeatre l'une des valeurs suivantes :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Comparateur"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"est \xe9gal \xe0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"diff\xe9rent de")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"sup\xe9rieur \xe0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),">="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"sup\xe9rieur ou \xe9gal \xe0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"inf\xe9rieur \xe0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"inf\xe9rieur ou \xe9gal \xe0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"begin"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"commence avec")))),(0,a.kt)("h2",n({},{id:"exemples"}),"Exemples"),(0,a.kt)("p",null,'Dans l\'exemple suivant, nous recherchons tous les employ\xe9s dont le nom de famille commence par un "j" :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Employee?$filter="lastName begin j"\n')),(0,a.kt)("p",null,'Dans cet exemple, nous recherchons dans la dataclass "Employee" tous les employ\xe9s d\'une entreprise autre que Acmedont et dont le salaire est sup\xe9rieur \xe0 20 000 :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n')),(0,a.kt)("p",null,'Dans cet exemple, nous recherchons dans la dataclass "Person" toutes les personnes dont la propri\xe9t\xe9 num\xe9rique, de l\'attribut anotherobj de type Objet, est sup\xe9rieure \xe0 50 :'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n')))}d.isMDXComponent=!0}}]);