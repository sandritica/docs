"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"atomic_$atonce",title:"$atomic/$atOnce"},s=void 0,c={unversionedId:"REST/atomic_$atonce",id:"version-19-R8/REST/atomic_$atonce",title:"$atomic/$atOnce",description:"Autorise les actions d'une requ\xeate REST \xe0 faire partie d'une transaction. Si aucune erreur n'est g\xe9n\xe9r\xe9e, la transaction est valid\xe9e. Sinon, la transaction est annul\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/fr/REST/atomic_$atonce",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/REST/$atomic_$atonce.md",tags:[],version:"19-R8",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/fr/REST/asArray"},next:{title:"$attributes",permalink:"/docs/fr/REST/attributes"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],p={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autorise les actions d'une requ\xeate REST \xe0 faire partie d'une transaction. Si aucune erreur n'est g\xe9n\xe9r\xe9e, la transaction est valid\xe9e. Sinon, la transaction est annul\xe9e."),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"When you have multiple actions together, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"$atomic/$atOnce")," to make sure that none of the actions are completed if one of them fails. You can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"$atomic")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"$atOnce"),"."),(0,r.kt)("h2",a({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Nous appelons la requ\xeate REST suivante dans une transaction."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee?$method=update&$atomic=true")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Donn\xe9es POST")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n')),(0,r.kt)("p",null,"Nous obtenons l'erreur suivante dans la deuxi\xe8me entit\xe9 ; la premi\xe8re entit\xe9 n'est donc pas sauvegard\xe9e :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"M\xeame si le salaire de la premi\xe8re entit\xe9 porte la valeur 45000, cette valeur n'a pas \xe9t\xe9 sauvegard\xe9e sur le serveur et le timestamp (__STAMP)* n'a pas \xe9t\xe9 modifi\xe9. Si nous rechargeons l'entit\xe9, la valeur pr\xe9c\xe9dente s'affichera.")))}m.isMDXComponent=!0}}]);