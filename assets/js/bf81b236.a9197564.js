"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61365],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(t),m=o,u=h["".concat(d,".").concat(m)]||h[m]||p[m]||a;return t?n.createElement(u,l(l({ref:r},c),{},{components:t})):n.createElement(u,l({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98729:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"error-handling",title:"Error handling"},i=void 0,d={unversionedId:"Concepts/error-handling",id:"version-20-R2/Concepts/error-handling",title:"Error handling",description:"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.",source:"@site/versioned_docs/version-20-R2/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/Concepts/error-handling",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"error-handling",title:"Error handling"},sidebar:"docs",previous:{title:"Control flow",permalink:"/docs/Concepts/control-flow"},next:{title:"Interpreted and Compiled modes",permalink:"/docs/Concepts/interpreted-compiled"}},s={},c=[{value:"Error or status",id:"error-or-status",level:2},{value:"Installing an error-handling method",id:"installing-an-error-handling-method",level:2},{value:"Scope and components",id:"scope-and-components",level:3},{value:"Handling errors within the method",id:"handling-errors-within-the-method",level:3},{value:"Example",id:"example",level:4},{value:"Using an empty error-handling method",id:"using-an-empty-error-handling-method",level:3}],p={toc:c};function h(e){var{components:r}=e,l=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Error handling is the process of anticipating and responding to errors that might occur in your application. 4D provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions. "),(0,n.kt)("p",null,"Error handling meets two main needs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"finding out and fixing potential errors and bugs in your code during the development phase,"),(0,n.kt)("li",{parentName:"ul"},"catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface. ")),(0,n.kt)("admonition",o({},{title:"Good practice",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. When 4D Server is not running ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/Admin/cli"}),"headless")," (i.e. launched with its ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/ServerWindow/overview"}),"administration window"),"), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/Debugging/debugLogFiles#4ddebuglogtxt-standard"}),"4DDebugLog file")," for further analysis. ")),(0,n.kt)("h2",o({},{id:"error-or-status"}),"Error or status"),(0,n.kt)("p",null,"Many 4D class functions, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"entity.save()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", return a ",(0,n.kt)("em",{parentName:"p"},"status"),' object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.'),(0,n.kt)("p",null,'Other "unpredictable" errors include disk write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.  '),(0,n.kt)("h2",o({},{id:"installing-an-error-handling-method"}),"Installing an error-handling method"),(0,n.kt)("p",null,"In 4D, all errors can be caught and handled by specific project methods, named ",(0,n.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,n.kt)("strong",{parentName:"p"},"error-catching"),") methods. "),(0,n.kt)("p",null,"Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).  "),(0,n.kt)("p",null,"To ",(0,n.kt)("em",{parentName:"p"},"install")," an error-handling project method, you just need to call the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page155.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ON ERR CALL"))," command with the project method name and (optionnally) scope as parameters. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method\n')),(0,n.kt)("p",null,"To stop catching errors for an execution context and give back hand, call ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," with an empty string:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("";ek local) //gives back control for the local process\n')),(0,n.kt)("p",null,"The  ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page704.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Method called on error"))," command allows you to know the name of the method installed by ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //If the document cannot be opened, an error is generated\n $ref:=Open document("MyDocument")\n  //Reinstallation of previous method\n ON ERR CALL($methCurrent;ek local)\n\n')),(0,n.kt)("h3",o({},{id:"scope-and-components"}),"Scope and components"),(0,n.kt)("p",null,"An error-handling method can be set for different execution contexts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for the ",(0,n.kt)("strong",{parentName:"li"},"current process"),"- a local error handler will be only called for errors that occurred in the current process of the current project,"),(0,n.kt)("li",{parentName:"ul"},"for the ",(0,n.kt)("strong",{parentName:"li"},"whole application"),"- a global error handler will be called for all errors that occurred in the application execution context of the current project,"),(0,n.kt)("li",{parentName:"ul"},"from the ",(0,n.kt)("strong",{parentName:"li"},"components"),"- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.")),(0,n.kt)("p",null,"Examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method\nON ERR CALL("globalHandler";ek global) //Installs a global error-handling method\nON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components\n')),(0,n.kt)("p",null,'You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.'),(0,n.kt)("p",null,"You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per execution context and per project."),(0,n.kt)("p",null,"When an error occurs, only one method is called, as described in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"error management",src:t(97681).Z,width:"1195",height:"578"})),(0,n.kt)("h3",o({},{id:"handling-errors-within-the-method"}),"Handling errors within the method"),(0,n.kt)("p",null,"Within a custom error method, you have access to several pieces of information that will help you identifying the error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dedicated system variables:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (longint): error code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method")," (text): name of the method that triggered the error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (longint): line number in the method that triggered the error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): formula of the 4D code (raw text) which is at the origin of the error. ")))),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"4D automatically maintains a number of variables called ",(0,n.kt)("strong",{parentName:"p"},"system variables"),", meeting different needs. See the ",(0,n.kt)("em",{parentName:"p"},"4D Language Reference manual"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Last errors"))," command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"GET LAST ERROR STACK"))," command that returns the same information as arrays."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"Get call chain")," command that returns a collection of objects describing each step of the method call chain within the current process. ")),(0,n.kt)("h4",o({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Here is a simple error-handling system:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//installing the error handling method\n ON ERR CALL("errorMethod")\n //... executing code\n ON ERR CALL("") //giving control back to 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// errorMethod project method\n If(Error#1006) //this is not a user interruption\n    ALERT("The error "+String(Error)+" occurred". The code in question is: \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",o({},{id:"using-an-empty-error-handling-method"}),"Using an empty error-handling method"),(0,n.kt)("p",null,"If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," system variable can be tested in any method, i.e. outside of the error-handling method:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')))}h.isMDXComponent=!0},97681:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"}}]);