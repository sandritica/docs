"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"real-time-monitor",title:"P\xe1gina de seguimiento en tiempo real"},s=void 0,l={unversionedId:"ServerWindow/real-time-monitor",id:"version-19-R8/ServerWindow/real-time-monitor",title:"P\xe1gina de seguimiento en tiempo real",description:'The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/ServerWindow/real-time-monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/real-time-monitor",permalink:"/docs/es/ServerWindow/real-time-monitor",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/ServerWindow/real-time-monitor.md",tags:[],version:"19-R8",frontMatter:{id:"real-time-monitor",title:"P\xe1gina de seguimiento en tiempo real"},sidebar:"docs",previous:{title:"P\xe1gina del servidor HTTP",permalink:"/docs/es/ServerWindow/http-server"},next:{title:"Administration from Remote Machines",permalink:"/docs/es/ServerWindow/remote-admin"}},p={},c=[{value:"Modo avanzado",id:"modo-avanzado",level:2},{value:"Bot\xf3n Instant\xe1nea",id:"bot\xf3n-instant\xe1nea",level:2},{value:"Mostrar operaciones al menos 5 segundos",id:"mostrar-operaciones-al-menos-5-segundos",level:2}],d={toc:c};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22680).Z,width:"700",height:"472"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine.")),(0,r.kt)("p",null,"Se a\xf1ade una l\xednea para cada operaci\xf3n larga realizada en los datos. This line automatically disappears when the operation is complete (you can check the ",(0,r.kt)("strong",{parentName:"p"},"Display operations at least 5 seconds")," option to keep quick operations on screen for 5 seconds, see below)."),(0,r.kt)("p",null,"La siguiente informaci\xf3n se ofrece para cada l\xednea:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Start Time"),': starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Duration")," (ms): duration in milliseconds of operation in progress"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Informaci\xf3n"),": t\xedtulo de la operaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Details"),": this area displays detailed information which will vary according to the type of operation selected. En particular:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Created on"),': indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operation Details"),": Operation type and (for query operations) query plan."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sub-operations")," (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Process Details"),": Additional information concerning the table, field, process or client, depending on the type of operation")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Real-time monitoring page uses the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1277.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"GET ACTIVITY SNAPSHOT"))," command internally. Puede encontrar m\xe1s informaci\xf3n en la descripci\xf3n de este comando.")),(0,r.kt)("p",null,"La p\xe1gina est\xe1 activa y se actualiza permanentemente en cuanto se muestra. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"haciendo clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Pausa"),","),(0,r.kt)("li",{parentName:"ul"},"haciendo clic en la lista,"),(0,r.kt)("li",{parentName:"ul"},"presionando la barra espaciadora.")),(0,r.kt)("p",null,'When you pause the page, a "PAUSED" message appears and the button label changes to ',(0,r.kt)("strong",{parentName:"p"},"Resume"),". You can resume monitoring of the operations by performing the same action as for pausing."),(0,r.kt)("h2",a({},{id:"modo-avanzado"}),"Modo avanzado"),(0,r.kt)("p",null,"The RTM page can display additional information, if necessary, for each listed operation."),(0,r.kt)("p",null,"To access the advanced mode for an operation, press ",(0,r.kt)("strong",{parentName:"p"},"Shift"),' and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the ',(0,r.kt)("inlineCode",{parentName:"p"},"GET ACTIVITY SNAPSHOT")," command). La informaci\xf3n disponible depende de la operaci\xf3n seleccionada."),(0,r.kt)("p",null,"Este es un ejemplo de la informaci\xf3n que se muestra en el modo est\xe1ndar:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7717).Z,width:"998",height:"293"})),(0,r.kt)("p",null,"In advanced mode (",(0,r.kt)("strong",{parentName:"p"},"Shift+Click")," on the operation), additional information is displayed:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17949).Z,width:"999",height:"288"})),(0,r.kt)("h2",a({},{id:"bot\xf3n-instant\xe1nea"}),"Bot\xf3n Instant\xe1nea"),(0,r.kt)("p",null,"El bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Instant\xe1nea")," permite copiar en el portapapeles todas las operaciones que se muestran en el panel RTM, as\xed como sus detalles relacionados (informaci\xf3n de procesos y suboperaciones):"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(10674).Z,width:"140",height:"40"})),(0,r.kt)("h2",a({},{id:"mostrar-operaciones-al-menos-5-segundos"}),"Mostrar operaciones al menos 5 segundos"),(0,r.kt)("p",null,"If you check the ",(0,r.kt)("strong",{parentName:"p"},"Display operations at least 5 seconds")," option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. Las operaciones retenidas aparecen atenuadas en la lista de operaciones. Esta funci\xf3n es \xfatil para obtener informaci\xf3n sobre las operaciones que se ejecutan muy r\xe1pidamente."))}m.isMDXComponent=!0},7717:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},17949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},22680:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},10674:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);