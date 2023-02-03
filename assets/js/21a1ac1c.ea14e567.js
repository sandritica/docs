"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var o=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"develop-plug-ins",title:"Developing Plug-ins"},l=void 0,s={unversionedId:"Extensions/develop-plug-ins",id:"version-19-R7/Extensions/develop-plug-ins",title:"Developing Plug-ins",description:"Why the need for a plug-in?",source:"@site/versioned_docs/version-19-R7/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/19-R7/Extensions/develop-plug-ins",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"develop-plug-ins",title:"Developing Plug-ins"},sidebar:"docs",previous:{title:"Developing Components",permalink:"/docs/19-R7/Extensions/develop-components"},next:{title:"Overview",permalink:"/docs/19-R7/WebServer/overview"}},p={},u=[{value:"Why the need for a plug-in?",id:"why-the-need-for-a-plug-in",level:2},{value:"What is a plug-in and what can it do?",id:"what-is-a-plug-in-and-what-can-it-do",level:2},{value:"Important note",id:"important-note",level:3},{value:"How to create a plug-in?",id:"how-to-create-a-plug-in",level:2},{value:"Sharing plug-ins",id:"sharing-plug-ins",level:2}],c={toc:u};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"why-the-need-for-a-plug-in"}),"Why the need for a plug-in?"),(0,o.kt)("p",null,"Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure."),(0,o.kt)("p",null,"It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected."),(0,o.kt)("p",null,"The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity."),(0,o.kt)("h2",a({},{id:"what-is-a-plug-in-and-what-can-it-do"}),"What is a plug-in and what can it do?"),(0,o.kt)("p",null,"A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity."),(0,o.kt)("p",null,"Usually, a plug-in does things that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4D cannot do (ie, specific platform technology),"),(0,o.kt)("li",{parentName:"ul"},"will be very hard to write just using 4D,"),(0,o.kt)("li",{parentName:"ul"},"are only available as Plug-in Entrypoint")),(0,o.kt)("p",null,"A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"plug-in routine")," is a routine written in native language (usually C or C++) that causes an action. "),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"external area")," is a part of a form that can display almost everything and interact with the user when necessary."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"external process")," is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process. ")),(0,o.kt)("h3",a({},{id:"important-note"}),"Important note"),(0,o.kt)("p",null,'A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call ',(0,o.kt)("inlineCode",{parentName:"p"},"PA_Yield()")," to give time to the 4D scheduler unless its task is critical for both it and the application."),(0,o.kt)("h2",a({},{id:"how-to-create-a-plug-in"}),"How to create a plug-in?"),(0,o.kt)("p",null,"4D provides on GitHub an open-source ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/4d/4D-Plugin-SDK"}),(0,o.kt)("strong",{parentName:"a"},"plug-in SDK")),", containing the 4D Plugin API and the 4D Plugin Wizard:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"}),(0,o.kt)("strong",{parentName:"a"},"4D Plugin API")),", written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"}),(0,o.kt)("strong",{parentName:"a"},"4D Plugin Wizard"))," is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.")),(0,o.kt)("h2",a({},{id:"sharing-plug-ins"}),"Sharing plug-ins"),(0,o.kt)("p",null,"We encourage you to support the 4D developer community by sharing your plug-ins, preferably on the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/topics/4d-plugin"}),"GitHub platform"),". We recommend that you use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"4d-plugin"))," topic to be correctly referenced."))}d.isMDXComponent=!0}}]);