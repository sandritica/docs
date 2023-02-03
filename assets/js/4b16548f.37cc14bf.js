"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"interface",title:"Interface page"},i=void 0,l={unversionedId:"settings/interface",id:"version-19-R7/settings/interface",title:"Interface page",description:"You use the Interface page to set various options related to the project interface.",source:"@site/versioned_docs/version-19-R7/settings/interface.md",sourceDirName:"settings",slug:"/settings/interface",permalink:"/docs/19-R7/settings/interface",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Finterface.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"interface",title:"Interface page"},sidebar:"docs",previous:{title:"General page",permalink:"/docs/19-R7/settings/general"},next:{title:"Compiler page",permalink:"/docs/19-R7/settings/compiler"}},c={},p=[{value:"General",id:"general",level:2},{value:"Font to use with the MESSAGE command",id:"font-to-use-with-the-message-command",level:3},{value:"Appearance",id:"appearance",level:3},{value:"Shortcuts",id:"shortcuts",level:2}],u={toc:p};function m(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You use the Interface page to set various options related to the project interface."),(0,r.kt)("h2",a({},{id:"general"}),"General"),(0,r.kt)("p",null,"This area lets you set various options concerning display."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(32550).Z,width:"862",height:"352"})),(0,r.kt)("h3",a({},{id:"font-to-use-with-the-message-command"}),"Font to use with the MESSAGE command"),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Select...")," to set the font and size for the characters used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSAGE")," command."),(0,r.kt)("p",null,"The default font and its size depend on the platform where 4D is running."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This property also affects the following parts of 4D: ",(0,r.kt)("li",null,"certain preview areas of the Explorer"),(0,r.kt)("li",null,"the ruler of the Form editor"))),(0,r.kt)("p",null,"Other options configure the display of various windows in the Application mode."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Splash screen"),": When this option is deselected, the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/Menus/bars#splash-screen"}),"splash screen of the current menu bar")," does not appear in the Application mode. When you hide this window, it is up to you to manage the display of all your windows by programming, for example in the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Startup")," database method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Flushing progress"),": When this option is checked, 4D displays a window at the bottom left of the screen while the data in the cache is flushed. Since this operation momentarily blocks user actions, displaying this window lets them know that flushing is underway."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can set the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/settings/database#memory-page"}),"frequency for cache flushing")," in ",(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Database")," > ",(0,r.kt)("strong",{parentName:"p"},"Memory"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Printing progress"),": Lets you enable or disable the display of the printing progress dialog box when printing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use SDI mode on Windows"),": When this option checked, 4D enables automatically the SDI mode (Single-Document Interface) in your merged application if executed in a supported context."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"This option can be selected on macOS but will be ignored when the application is executed on this platform.")))),(0,r.kt)("h3",a({},{id:"appearance"}),"Appearance"),(0,r.kt)("p",null,"This menu lets you select the color scheme to use at the main application level. A color scheme defines a global set of interface colors for texts, backgrounds, windows, etc., used in your forms."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'This option only works on macOS. On Windows, the "Light" scheme is always used.')),(0,r.kt)("p",null,"The following schemes are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Light"),": the application will use the Default Light Theme\n",(0,r.kt)("img",{src:n(59350).Z,width:"928",height:"740"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dark"),": the application will use the Default Dark Theme\n",(0,r.kt)("img",{src:n(79931).Z,width:"928",height:"740"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inherited")," (default): the application will inherit from the higher priority level (i.e., OS user preferences)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default themes can be handled using CSS. For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/FormEditor/stylesheets#media-queries"}),"Media Queries")," section. ")),(0,r.kt)("p",null,"The main application scheme will be applied to forms by default. However, it can be overriden:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"by the ",(0,r.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1762.html"}),"SET APPLICATION COLOR SCHEME")," command at the working session level;"),(0,r.kt)("li",{parentName:"ul"},"using by the ",(0,r.kt)("a",a({parentName:"li"},{href:"../FormEditor/propertiesForm.html#color-scheme"}),"Color Scheme")," form property at each form level (highest priority level). ",(0,r.kt)("strong",{parentName:"li"},"Note:"),' When printed, forms always use the "Light" scheme.')),(0,r.kt)("h2",a({},{id:"shortcuts"}),"Shortcuts"),(0,r.kt)("p",null,"You use the Shortcuts area for viewing and modifying default shortcuts for three basic 4D form operations in your desktop applications. These shortcuts are identical for both platforms. Key icons indicate the corresponding Windows and macOS keys. "),(0,r.kt)("p",null,"The default shortcuts are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accept input form: ",(0,r.kt)("strong",{parentName:"li"},"Enter")),(0,r.kt)("li",{parentName:"ul"},"Cancel input form: ",(0,r.kt)("strong",{parentName:"li"},"Esc")),(0,r.kt)("li",{parentName:"ul"},"Add to subform: ",(0,r.kt)("strong",{parentName:"li"},"Ctrl+Shift+/")," (Windows) or ",(0,r.kt)("strong",{parentName:"li"},"Command+Shift+/")," (macOS)")),(0,r.kt)("p",null,"To change the shortcut of an operation, click the corresponding ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button. The following dialog box appears:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65590).Z,width:"365",height:"277"})),(0,r.kt)("p",null,"To change the shortcut, type the new key combination on your keyboard and click ",(0,r.kt)("strong",{parentName:"p"},"OK"),". If you prefer not to have a shortcut for an operation, click ",(0,r.kt)("strong",{parentName:"p"},"Clear"),"."))}m.isMDXComponent=!0},79931:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dark-appearance-e33d1d09173bd814692816b0d593fcbe.png"},32550:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/interface-page-19a8427111ce0b0b454a172f019b4317.png"},59350:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/light-appearance-45d44cbaab68c5db66e6c56bbd4b9bab.png"},65590:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);