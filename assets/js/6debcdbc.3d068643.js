"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"remote-admin",title:"Administration from Remote Machines"},c=void 0,s={unversionedId:"ServerWindow/remote-admin",id:"version-19-R8/ServerWindow/remote-admin",title:"Administration from Remote Machines",description:"You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine.",source:"@site/versioned_docs/version-19-R8/ServerWindow/remote-admin.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/remote-admin",permalink:"/docs/ServerWindow/remote-admin",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"remote-admin",title:"Administration from Remote Machines"},sidebar:"docs",previous:{title:"Real Time Monitor Page",permalink:"/docs/ServerWindow/real-time-monitor"},next:{title:"WebAdmin",permalink:"/docs/Admin/webAdmin"}},m={},l=[{value:"Opening the administration window on a remote 4D machine",id:"opening-the-administration-window-on-a-remote-4d-machine",level:2},{value:"Specificities of administration via a remote 4D machine",id:"specificities-of-administration-via-a-remote-4d-machine",level:2}],d={toc:l};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine."),(0,r.kt)("h2",i({},{id:"opening-the-administration-window-on-a-remote-4d-machine"}),"Opening the administration window on a remote 4D machine"),(0,r.kt)("p",null,"To open a server administration window from a client machine, you must be connected to the remote database as a Designer or Administrator. Otherwise, when you attempt to open the administration window, a privilege error (-9991) is generated."),(0,r.kt)("p",null,"This window can be accessed in one of two manners:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},"Administration Window")," command from the ",(0,r.kt)("strong",{parentName:"li"},"Help")," menu or click on the corresponding button in the 4D tool bar."),(0,r.kt)("li",{parentName:"ul"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"OPEN ADMINISTRATION WINDOW")," command.")),(0,r.kt)("p",null,"A ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/ServerWindow/monitor"}),"server administration window")," then appears on the client machine."),(0,r.kt)("h2",i({},{id:"specificities-of-administration-via-a-remote-4d-machine"}),"Specificities of administration via a remote 4D machine"),(0,r.kt)("p",null,"A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("a",i({parentName:"li"},{href:"/docs/ServerWindow/processes"}),"Process page"),", it is not possible to debug a user process (since the debug window appears on the server machine)."),(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("a",i({parentName:"li"},{href:"/docs/ServerWindow/maintenance"}),"Maintenance Page"),", it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). In this case, the client machine requesting the operation is automatically reconnected on restarting."),(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("a",i({parentName:"li"},{href:"/docs/ServerWindow/maintenance"}),"Maintenance Page"),", the ",(0,r.kt)("strong",{parentName:"li"},"View Report")," buttons are renamed ",(0,r.kt)("strong",{parentName:"li"},"Download Report")," after the execution of a maintenance operation. These files are downloaded into the local database folder on the client machine before being displayed.")))}p.isMDXComponent=!0}}]);