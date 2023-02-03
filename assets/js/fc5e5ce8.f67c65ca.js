"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),y=o,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"savedorderby",title:"$savedorderby"},s=void 0,l={unversionedId:"REST/savedorderby",id:"version-18/REST/savedorderby",title:"$savedorderby",description:'Saves the order by defined by $orderby when creating an entity set (e.g., $savedorderby="")',source:"@site/versioned_docs/version-18/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/docs/18/REST/savedorderby",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedorderby.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/docs/18/REST/savedfilter"},next:{title:"$skip",permalink:"/docs/18/REST/skip"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Saves the order by defined by ",(0,n.kt)("inlineCode",{parentName:"p"},"$orderby")," when creating an entity set (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},'$savedorderby="{orderby}"'),")\t"),(0,n.kt)("h2",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,"When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/18/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),")."),(0,n.kt)("p",null,"You use ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," to save the order you defined when creating your entity set, you then pass ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," along with your call to retrieve the entity set each time."),(0,n.kt)("p",null,"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. If you have used both ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/18/REST/savedfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that."),(0,n.kt)("h2",o({},{id:"example"}),"Example"),(0,n.kt)("p",null,"You first call ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," with the initial call to create an entity set:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset')),(0,n.kt)("p",null,"Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"')))}u.isMDXComponent=!0}}]);