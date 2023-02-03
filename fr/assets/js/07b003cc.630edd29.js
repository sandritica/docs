"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),v=a,m=d["".concat(i,".").concat(v)]||d[v]||c[v]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"variant",title:"Variant"},s=void 0,i={unversionedId:"Concepts/variant",id:"version-19-R8/Concepts/variant",title:"Variant",description:"Variant est un type de variable qui permet d'encapsuler des donn\xe9es de type valide et standard dans une variable. En r\xe8gle g\xe9n\xe9rale, ce type de variable peut \xeatre utilis\xe9 pour \xe9crire du code g\xe9n\xe9rique qui retourne ou re\xe7oit des valeurs dont le type n'est pas connu. C'est le cas par exemple du code traitant des attributs d'objet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/Concepts/dt_variant.md",sourceDirName:"Concepts",slug:"/Concepts/variant",permalink:"/docs/fr/Concepts/variant",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_variant.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"variant",title:"Variant"},sidebar:"docs",previous:{title:"Heure",permalink:"/docs/fr/Concepts/time"},next:{title:"Variables",permalink:"/docs/fr/Concepts/variables"}},u={},p=[],c={toc:p};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Variant est un type de variable qui permet d'encapsuler des donn\xe9es de type valide et standard dans une variable. En r\xe8gle g\xe9n\xe9rale, ce type de variable peut \xeatre utilis\xe9 pour \xe9crire du code g\xe9n\xe9rique qui retourne ou re\xe7oit des valeurs dont le type n'est pas connu. C'est le cas par exemple du code traitant des attributs d'objet."),(0,r.kt)("p",null,"Une variable de type variant peut contenir une valeur des types de donn\xe9es suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BLOB"),(0,r.kt)("li",{parentName:"ul"},"boolean"),(0,r.kt)("li",{parentName:"ul"},"collection"),(0,r.kt)("li",{parentName:"ul"},"date"),(0,r.kt)("li",{parentName:"ul"},"entier long"),(0,r.kt)("li",{parentName:"ul"},"object"),(0,r.kt)("li",{parentName:"ul"},"picture"),(0,r.kt)("li",{parentName:"ul"},"pointer"),(0,r.kt)("li",{parentName:"ul"},"r\xe9el"),(0,r.kt)("li",{parentName:"ul"},"text"),(0,r.kt)("li",{parentName:"ul"},"time"),(0,r.kt)("li",{parentName:"ul"},"Null"),(0,r.kt)("li",{parentName:"ul"},"undefined")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Les tableaux ne peuvent pas \xeatre stock\xe9s dans des variables de type variant.")),(0,r.kt)("p",null,"En modes interpr\xe9t\xe9 et compil\xe9, le m\xeame contenu peut \xeatre affect\xe9 \xe0 une m\xeame variable variant. Contrairement aux types de variable standard, le type de contenu des variable de type variant est diff\xe9rent du type de variable variant lui-m\xeame. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n')),(0,r.kt)("p",null,"Vous pouvez utiliser des variables variant chaque fois qu'elles sont attendues. Vous devez simplement vous assurer que le type de donn\xe9es du contenu de la variable est du type attendu. Lorsque vous acc\xe9dez \xe0 des variables de type variant, seule leur valeur courante est prise en compte. Par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //assign variable to another variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n')),(0,r.kt)("p",null,"Variant peut \xeatre utilis\xe9 pour d\xe9clarer des param\xe8tres de m\xe9thode ($0, $1, etc.) pouvant \xeatre de diff\xe9rents types. Dans ce cas, vous pouvez g\xe9n\xe9rer votre code en testant le type de valeur du param\xe8tre, par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"C_VARIANT($1)\nCase of\n: (Value type($1)=Is longint)\n...\n: (Value type($1)=Is text)\n...\n//statement(s)\n End case\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lorsque des variables variant ne sont pas n\xe9cessaires (c'est-\xe0-dire lorsque le type de donn\xe9es est connu), il est recommand\xe9 d'utiliser des variables typ\xe9es standard. Les variables typ\xe9es standard fournissent de meilleures performances, un code plus clair et permettent au compilateur d'\xe9viter les bugs li\xe9s \xe0 des types de donn\xe9es pass\xe9s qui sont inattendus.")))}d.isMDXComponent=!0}}]);