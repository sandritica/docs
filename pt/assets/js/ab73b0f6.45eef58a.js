"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"savedfilter",title:"$savedfilter"},l=void 0,s={unversionedId:"REST/savedfilter",id:"version-18/REST/savedfilter",title:"$savedfilter",description:'Saves the filter defined by $filter when creating an entity set (e.g., $savedfilter="")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/pt/18/REST/savedfilter",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/pt/18/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/pt/18/REST/savedorderby"}},p={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],d={toc:c};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Saves the filter defined by $filter when creating an entity set (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedfilter="{filter}"'),")"),(0,n.kt)("h2",a({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"When you create an entity set, you can save the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"You use ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," to save the filter you defined when creating your entity set and then pass ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," along with your call to retrieve the entity set each time."),(0,n.kt)("p",null,"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."),(0,n.kt)("p",null,"If you have used both ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/pt/18/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that."),(0,n.kt)("h2",a({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"In our example, we first call `",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," with the initial call to create an entity set as shown below:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset')),(0,n.kt)("p",null,"Then, when you access your entity set, you write the following to ensure that the entity set is always valid:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"')))}u.isMDXComponent=!0}}]);