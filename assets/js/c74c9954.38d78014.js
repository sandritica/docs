"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"overview",title:"Overview"},l=void 0,p={unversionedId:"Extensions/overview",id:"version-19-R7/Extensions/overview",title:"Overview",description:"The 4D project architecture is modular. You can provide additional functionalities to your 4D projects by installing components and plug-ins. Components are made of 4D code, while plug-ins can be built using any language.",source:"@site/versioned_docs/version-19-R7/Extensions/overview.md",sourceDirName:"Extensions",slug:"/Extensions/overview",permalink:"/docs/19-R7/Extensions/overview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R7/Extensions/overview.md",tags:[],version:"19-R7",frontMatter:{id:"overview",title:"Overview"},sidebar:"docs",previous:{title:"Restore",permalink:"/docs/19-R7/Backup/restore"},next:{title:"Getting Started",permalink:"/docs/19-R7/ViewPro/getting-started"}},s={},d=[{value:"Preinstalled 4D components",id:"preinstalled-4d-components",level:2},{value:"Third-party components",id:"third-party-components",level:2},{value:"Plugins",id:"plugins",level:2}],c={toc:d};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The 4D ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/Project/architecture"}),"project architecture")," is modular. You can provide additional functionalities to your 4D projects by installing ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/Concepts/components"}),(0,r.kt)("strong",{parentName:"a"},"components"))," and ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/Concepts/plug-ins"}),(0,r.kt)("strong",{parentName:"a"},"plug-ins")),". Components are made of 4D code, while plug-ins can be built using any language. "),(0,r.kt)("h2",a({},{id:"preinstalled-4d-components"}),"Preinstalled 4D components"),(0,r.kt)("p",null,"4D includes by default a set of built-in 4D components, that you can see in the ",(0,r.kt)("strong",{parentName:"p"},"Component Methods")," theme of the Explorer's Methods page. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Component Name"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Main Features"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4D Labels"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Internal component required to build label templates"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/4d-go-mobile/4D-Mobile-App-Server"}),"4D Mobile App Server")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set of utility classes and functions to authenticate, manage sessions, and develop mobile applications"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},".Action"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".Authentication"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".PushNotification"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".WebHandler"),", Authentication with email confirmation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/4d/4D-NetKit"}),"4D NetKit")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Set of tools to connect to third-party APIs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"OAuth2Provider")," class, ",(0,r.kt)("inlineCode",{parentName:"td"},"New OAuth2 provider"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"OAuth2ProviderObject.getToken()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html"}),"4D Progress")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Open one or more progress bars in the same window"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Progress New"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Progress SET ON STOP METHOD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Progress SET PROGRESS"),", ...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html"}),"4D SVG")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Create and manipulate common svg graphic objects"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"SVGTool_Display_viewer"),", multiple ",(0,r.kt)("inlineCode",{parentName:"td"},"SVG_")," methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/19-R7/ViewPro/getting-started"}),"4D ViewPro")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Spreadsheet features in your forms"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"See ",(0,r.kt)("a",a({parentName:"td"},{href:"/docs/19-R7/ViewPro/getting-started"}),"4D View Pro documentation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html"}),"4D Widgets")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Manage DatePicker, TimePicker, SearchPicker 4D widgets"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"DatePicker calendar"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DateEntry area"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TimeEntry"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SearchPicker SET HELP TEXT"),", ...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/4d/4D-WritePro-Interface"}),"4D WritePro Interface")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Manage ",(0,r.kt)("a",a({parentName:"td"},{href:"https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.en.html"}),"4D Write Pro")," palettes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"WP CreatePreview"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP PictureSettings"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP ShowTabPages"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP SwitchToolbar"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"WP UpdateWidget"))))),(0,r.kt)("h2",a({},{id:"third-party-components"}),"Third-party components"),(0,r.kt)("p",null,"You can develop and install your own 4D components. See ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/Extensions/develop-components"}),"this page")," for more information. "),(0,r.kt)("p",null,"Many developers from the 4D community have shared 4D components that you can install and use in you projects."),(0,r.kt)("p",null,"Browse Github to have a list of public 4D components gathered with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/topics/4d-component"}),(0,r.kt)("inlineCode",{parentName:"a"},"4d-component"))," topic. "),(0,r.kt)("h2",a({},{id:"plugins"}),"Plugins"),(0,r.kt)("p",null,"Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. As described in ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/19-R7/Extensions/develop-plug-ins"}),"this page"),", you can develop your own plug-ins. "),(0,r.kt)("p",null,"A lot of functionnalities are covered by the existing 4D plug-ins. Browse Github to have a list of public 4D plugins gathered with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/topics/4d-plugin"}),(0,r.kt)("inlineCode",{parentName:"a"},"4d-plugin"))," topic."))}m.isMDXComponent=!0}}]);