"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"web",title:"Web page"},i=void 0,l={unversionedId:"settings/web",id:"version-20-R2/settings/web",title:"Web page",description:"Using the tabs on the Web page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see Web server. For more information about 4D Web services, refer to the Publication and use of Web Services chapter.",source:"@site/versioned_docs/version-20-R2/settings/web.md",sourceDirName:"settings",slug:"/settings/web",permalink:"/docs/settings/web",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fweb.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"web",title:"Web page"},sidebar:"docs",previous:{title:"Client-server page",permalink:"/docs/settings/client-server"},next:{title:"SQL page",permalink:"/docs/settings/sql"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Publishing Information",id:"publishing-information",level:3},{value:"Launch Web Server at Startup",id:"launch-web-server-at-startup",level:4},{value:"Enable HTTP",id:"enable-http",level:4},{value:"HTTP Port",id:"http-port",level:4},{value:"IP Address",id:"ip-address",level:4},{value:"Enable HTTPS",id:"enable-https",level:4},{value:"HTTPS Port",id:"https-port",level:4},{value:"Allow database access through 4DSYNC URLs",id:"allow-database-access-through-4dsync-urls",level:4},{value:"Paths",id:"paths",level:3},{value:"Default HTML Root",id:"default-html-root",level:4},{value:"Default Home Page",id:"default-home-page",level:4},{value:"Options (I)",id:"options-i",level:2},{value:"Cache",id:"cache",level:3},{value:"Use the 4D Web cache",id:"use-the-4d-web-cache",level:4},{value:"Pages Cache Size",id:"pages-cache-size",level:4},{value:"Clear Cache",id:"clear-cache",level:4},{value:"Web Process",id:"web-process",level:3},{value:"Scalable sessions (multi-process sessions)",id:"scalable-sessions-multi-process-sessions",level:4},{value:"No sessions",id:"no-sessions",level:4},{value:"Legacy sessions (single process sessions)",id:"legacy-sessions-single-process-sessions",level:4},{value:"Maximum Concurrent Web Processes",id:"maximum-concurrent-web-processes",level:4},{value:"Reuse Temporary Contexts",id:"reuse-temporary-contexts",level:4},{value:"Use preemptive processes",id:"use-preemptive-processes",level:4},{value:"Inactive Process Timeout",id:"inactive-process-timeout",level:4},{value:"Web Passwords",id:"web-passwords",level:3},{value:"Options (II)",id:"options-ii",level:2},{value:"Text Conversion",id:"text-conversion",level:3},{value:"Send Extended Characters Directly",id:"send-extended-characters-directly",level:4},{value:"Standard Set",id:"standard-set",level:4},{value:"Keep-Alive Connections",id:"keep-alive-connections",level:3},{value:"CORS Settings",id:"cors-settings",level:3},{value:"Enable CORS",id:"enable-cors",level:4},{value:"Domain names/HTTP methods allowed",id:"domain-nameshttp-methods-allowed",level:4},{value:"Log (type)",id:"log-type",level:2},{value:"Log Format",id:"log-format",level:3},{value:"Log (backup)",id:"log-backup",level:2},{value:"Web Services",id:"web-services",level:2},{value:"Server Side",id:"server-side",level:3},{value:"Client Side",id:"client-side",level:3},{value:"Web Features",id:"web-features",level:2},{value:"Publishing",id:"publishing",level:3},{value:"Expose as REST server",id:"expose-as-rest-server",level:4},{value:"Access",id:"access",level:3},{value:"Web Studio",id:"web-studio",level:3},{value:"Enable access to the web studio",id:"enable-access-to-the-web-studio",level:4}],u={toc:c};function d(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Using the tabs on the ",(0,r.kt)("strong",{parentName:"p"},"Web")," page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/overview"}),"Web server"),". For more information about 4D Web services, refer to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html"}),"Publication and use of Web Services")," chapter."),(0,r.kt)("h2",n({},{id:"configuration"}),"Configuration"),(0,r.kt)("h3",n({},{id:"publishing-information"}),"Publishing Information"),(0,r.kt)("h4",n({},{id:"launch-web-server-at-startup"}),"Launch Web Server at Startup"),(0,r.kt)("p",null,"Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerAdmin#starting-the-4d-web-server"}),"Web server administration")," section."),(0,r.kt)("h4",n({},{id:"enable-http"}),"Enable HTTP"),(0,r.kt)("p",null,"Indicates whether or not the Web server will accept non-secure connections. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#enable-http"}),"Enable HTTP"),"."),(0,r.kt)("h4",n({},{id:"http-port"}),"HTTP Port"),(0,r.kt)("p",null,"Listening IP (TCP) port number for HTTP. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#http-port"}),"HTTP Port"),"."),(0,r.kt)("h4",n({},{id:"ip-address"}),"IP Address"),(0,r.kt)("p",null,"IP address on which the 4D web server will receive HTTP requests (4D local and 4D Server). See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#ip-address-to-listen"}),"IP Address to listen"),"."),(0,r.kt)("h4",n({},{id:"enable-https"}),"Enable HTTPS"),(0,r.kt)("p",null,"Indicates whether or not the Web server will accept secure connections. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#enable-https"}),"Enable HTTPS"),"."),(0,r.kt)("h4",n({},{id:"https-port"}),"HTTPS Port"),(0,r.kt)("p",null,"Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#https-port"}),"HTTPS Port"),"."),(0,r.kt)("h4",n({},{id:"allow-database-access-through-4dsync-urls"}),"Allow database access through 4DSYNC URLs"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Compatibility Note"),": This option is ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#deprecated-settings"}),"deprecated"),". For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests."),(0,r.kt)("h3",n({},{id:"paths"}),"Paths"),(0,r.kt)("h4",n({},{id:"default-html-root"}),"Default HTML Root"),(0,r.kt)("p",null,"Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#root-folder"}),"Root Folder"),"."),(0,r.kt)("h4",n({},{id:"default-home-page"}),"Default Home Page"),(0,r.kt)("p",null,"Designate a default home page for the Web server. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#default-home-page"}),"Default Home page"),"."),(0,r.kt)("h2",n({},{id:"options-i"}),"Options (I)"),(0,r.kt)("h3",n({},{id:"cache"}),"Cache"),(0,r.kt)("h4",n({},{id:"use-the-4d-web-cache"}),"Use the 4D Web cache"),(0,r.kt)("p",null,"Enables the web page cache. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#cache"}),"Cache"),"."),(0,r.kt)("h4",n({},{id:"pages-cache-size"}),"Pages Cache Size"),(0,r.kt)("p",null,"Sets the cache size. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#cache"}),"Cache"),"."),(0,r.kt)("h4",n({},{id:"clear-cache"}),"Clear Cache"),(0,r.kt)("p",null,"At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).\nTo do so, you just have to click on the ",(0,r.kt)("strong",{parentName:"p"},"Clear Cache")," button. The cache is then immediately cleared."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use the special URL ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerAdmin#4dcacheclear"}),"/4DCACHECLEAR"),".")),(0,r.kt)("h3",n({},{id:"web-process"}),"Web Process"),(0,r.kt)("p",null,"This area allows you to configure how the web server will handle user sessions and their associated processes. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("strong",{parentName:"p"},"Legacy sessions")," option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.")),(0,r.kt)("h4",n({},{id:"scalable-sessions-multi-process-sessions"}),"Scalable sessions (multi-process sessions)"),(0,r.kt)("p",null,"When you select this option (recommended), a user session is managed through a ",(0,r.kt)("strong",{parentName:"p"},"Session")," object. See the ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/sessions#enabling-sessions"}),"User sessions page"),". "),(0,r.kt)("h4",n({},{id:"no-sessions"}),"No sessions"),(0,r.kt)("p",null,"When this option is selected, the web server does not provide any specific support for ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/sessions"}),"user sessions"),". Successive requests from web clients are always independent and no context is maintained on the server. "),(0,r.kt)("p",null,"In this mode, you can configure additional web server setttings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"#maximum-concurrent-web-processes"}),"Maximum Concurrent Web Processes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"#reuse-temporary-contexts"}),"Reuse Temporary Contexts (4D in remote mode)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"#use-preemptive-web-processes"}),"Use preemptive processes"))),(0,r.kt)("h4",n({},{id:"legacy-sessions-single-process-sessions"}),"Legacy sessions (single process sessions)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Compatibility Note:")," This option is only available in databases/projects created with a 4D version prior to 4D v18 R6."),(0,r.kt)("p",null,"This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html"}),"Web Sessions Management (Legacy)")," section. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#keep-session"}),"Keep Session"),"."),(0,r.kt)("p",null,"When selected, the ",(0,r.kt)("a",n({parentName:"p"},{href:"#reuse-temporary-contexts"}),"Reuse Temporary Contexts (4D in remote mode)")," option is automatically checked (and locked)."),(0,r.kt)("h4",n({},{id:"maximum-concurrent-web-processes"}),"Maximum Concurrent Web Processes"),(0,r.kt)("p",null,"Not available with ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/sessions"}),"scalable sessions"),"."),(0,r.kt)("p",null,"Strictly high limit of concurrent web processes. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#maximum-concurrent-web-processes"}),"Maximum Concurrent Web Processes"),"."),(0,r.kt)("h4",n({},{id:"reuse-temporary-contexts"}),"Reuse Temporary Contexts"),(0,r.kt)("p",null,"Not available with ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/sessions"}),"scalable sessions"),"."),(0,r.kt)("p",null,"Allows you to optimize the operation of the 4D Web server in remote mode. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#reuse-temporary-contexts-in-remote-mode"}),"Reuse temporary contexts in remote mode)"),"."),(0,r.kt)("h4",n({},{id:"use-preemptive-processes"}),"Use preemptive processes"),(0,r.kt)("p",null,"Not available with ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/sessions"}),"scalable sessions"),". "),(0,r.kt)("p",null,"Enables preemptive web processes in your compiled applications. When ",(0,r.kt)("strong",{parentName:"p"},"Use preemptive processes")," is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/preemptiveWeb"}),"Using preemptive Web processes"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"}),"Enabling the preemptive mode for the web server"),".")),(0,r.kt)("h4",n({},{id:"inactive-process-timeout"}),"Inactive Process Timeout"),(0,r.kt)("p",null,"Not available with ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/sessions"}),"scalable sessions"),". "),(0,r.kt)("p",null,"Allows you to set the maximum timeout before closing for inactive Web processes on the server. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#inactive-process-timeout"}),"Inactive Process Timeout"),"."),(0,r.kt)("h3",n({},{id:"web-passwords"}),"Web Passwords"),(0,r.kt)("p",null,"Set the authentication system that you want to apply to your Web server. Three options are proposed:"),(0,r.kt)("p",null,"Custom (default)\nPasswords with BASIC protocol\nPasswords with DIGEST protocol"),(0,r.kt)("p",null,"Using ",(0,r.kt)("strong",{parentName:"p"},"Custom")," authentication is recommended. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/authentication"}),(0,r.kt)("strong",{parentName:"a"},"Authentication"))," chapter in the ",(0,r.kt)("em",{parentName:"p"},"Web Development")," documentation."),(0,r.kt)("h2",n({},{id:"options-ii"}),"Options (II)"),(0,r.kt)("h3",n({},{id:"text-conversion"}),"Text Conversion"),(0,r.kt)("h4",n({},{id:"send-extended-characters-directly"}),"Send Extended Characters Directly"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#deprecated-settings"}),"Deprecated Settings"),"."),(0,r.kt)("h4",n({},{id:"standard-set"}),"Standard Set"),(0,r.kt)("p",null,"Define the set of characters to be used by the 4D Web server. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#character-set"}),"Character Set"),"."),(0,r.kt)("h3",n({},{id:"keep-alive-connections"}),"Keep-Alive Connections"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#keep-alive-connections"}),"Deprecated Settings"),"."),(0,r.kt)("h3",n({},{id:"cors-settings"}),"CORS Settings"),(0,r.kt)("h4",n({},{id:"enable-cors"}),"Enable CORS"),(0,r.kt)("p",null,"Enables Cross-origin resource sharing (CORS) service. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#enable-cors-service"}),"Enable CORS Service"),"."),(0,r.kt)("h4",n({},{id:"domain-nameshttp-methods-allowed"}),"Domain names/HTTP methods allowed"),(0,r.kt)("p",null,"List of allowed hosts and methods for the CORS service. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#cors-settings"}),"CORS Settings"),"."),(0,r.kt)("h2",n({},{id:"log-type"}),"Log (type)"),(0,r.kt)("h3",n({},{id:"log-format"}),"Log Format"),(0,r.kt)("p",null,"Starts or stops the recording of requests received by the 4D web server in the ",(0,r.kt)("em",{parentName:"p"},"logweb.txt")," file and sets its format. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/WebServer/webServerConfig#log-recording"}),"Log Recording"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The activation and deactivation of the log file of requests can also be carried out by programming using the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1210.html"}),"WEB SET OPTION")," command.")),(0,r.kt)("p",null,"The log format menu provides the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"No Log File"),": When this option is selected, 4D will not generate a log file of requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CLF (Common Log Format)"),": When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\\\nhost rfc931 user ","[DD/MMM/YYYY:HH:MM:SS]",' "request" state length\\\nEach field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"host: IP address of the client (ex. 192.100.100.10)"),(0,r.kt)("li",{parentName:"ul"},"rfc931: information not generated by 4D, it's always - (a minus sign)"),(0,r.kt)("li",{parentName:"ul"},"user: user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore)."),(0,r.kt)("li",{parentName:"ul"},"DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The date and time are local to the server.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request: request sent by the client (ex. GET /index.htm HTTP/1.0)"),(0,r.kt)("li",{parentName:"ul"},"state: reply given by the server."),(0,r.kt)("li",{parentName:"ul"},"length: size of the data returned (except the HTTP header) or 0.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds.\nThe possible values of state are as follows:\n200: OK\n204: No contents\n302: Redirection\n304: Not modified\n400: Incorrect request\n401: Authentication required\n404: Not found\n500: Internal error\nThe CLF format cannot be customized.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DLF (Combined Log Format)"),": When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Referer: Contains the URL of the page pointing to the requested document."),(0,r.kt)("li",{parentName:"ul"},"User-agent: Contains the name and version of the browser or software of the client at the origin of the request.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The DLF format cannot be customized.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ELF (Extended Log Format)"),": When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"WLF (WebStar Log Format)"),": When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuring the fields"),'\nWhen you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, use the arrow buttons or simply drag and drop the desired fields into the "Selected Tokens" area.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": You cannot select the same field twice."),(0,r.kt)("p",null,"The following table lists the fields available for each format (in alphabetical order) and describes its contents:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"ELF"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"WLF"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BYTES_RECEIVED"),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number of bytes received by the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"BYTES_SENT"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Number of bytes sent by the server to the client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"C_DNS"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"IP address of the DNS (ELF: field identical to the C_IP field)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"C_IP"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"IP address of the client (for example 192.100.100.10)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CONNECTION_ID"),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Connection ID number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS(COOKIE)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Information about cookies contained in the HTTP request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS(HOST)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Host field of the HTTP request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS(REFERER)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"URL of the page pointing to the requested document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS(USER_AGENT)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Information about the software and operating system of the client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS_SIP"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"IP address of the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS_URI"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"URI on which the request is made")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS_URI_QUERY"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CS_URI_STEM"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Part of request without query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"DATE"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"METHOD"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"HTTP method used for the request sent to the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"PATH_ARGS"),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'CGI parameters: string located after the "$" character')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"STATUS"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Reply provided by the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TIME"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"HH: hour, MM: minutes, SS: seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TRANSFER_TIME"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Time requested by server to generate the reply")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"USER"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"User name if authenticated; otherwise - (minus sign).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"If the user name contains spaces, they are replaced by _ (underlines)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"URL"),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"X"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"URL requested by the client")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dates and times are given in GMT.")),(0,r.kt)("h2",n({},{id:"log-backup"}),"Log (backup)"),(0,r.kt)("p",null,"Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"No Backup"),": The scheduled backup function is deactivated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Every X hour(s)"),": This option is used to program backups on an hourly basis. You can enter a value between 1 and 24 ."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"starting at"),": Used to set the time at which the first back up will begin."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Every X day(s) at X"),": This option is used to program backups on a daily basis. Enter 1 if you want to perform a daily backup. When this option is checked, you must indicate the time when the backup must be started.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Every X week(s), day at X"),": This option is used to program backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired. For example, you can use this option to set two weekly backups: one on Wednesdays and one on Fridays.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Every X month(s), Xth day at X"),": This option is used to program backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup must be started.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Every X MB"),": This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.")),(0,r.kt)("h2",n({},{id:"web-services"}),"Web Services"),(0,r.kt)("p",null,"You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side)."),(0,r.kt)("p",null,"For more information about the support of Web Services in 4D, refer to the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html"}),"Publication and use of Web Services")," chapter."),(0,r.kt)("h3",n({},{id:"server-side"}),"Server Side"),(0,r.kt)("p",null,'This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.  '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Allow Web Services Requests"),": This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the ",(0,r.kt)("em",{parentName:"li"},"Published in WSDL")," attribute. When this option is checked, 4D creates the WSDL file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Web Service Name"),': This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService. '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Web Services Namespace"),": This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (",(0,r.kt)("a",n({parentName:"li"},{href:"http://mycompany.com/mynamespace"}),"http://mycompany.com/mynamespace"),"). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: ",(0,r.kt)("a",n({parentName:"li"},{href:"http://www.4d.com/namespace/default"}),"http://www.4d.com/namespace/default"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).")),(0,r.kt)("h3",n({},{id:"client-side"}),"Client Side"),(0,r.kt)("p",null,'This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wizard Method Prefix"),': This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".')),(0,r.kt)("h2",n({},{id:"web-features"}),"Web Features"),(0,r.kt)("p",null,"This page contains the options used to enable and control advanced Web features such as the REST server."),(0,r.kt)("h3",n({},{id:"publishing"}),"Publishing"),(0,r.kt)("h4",n({},{id:"expose-as-rest-server"}),"Expose as REST server"),(0,r.kt)("p",null,"Starts and stops the REST Server. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/REST/configuration"}),"REST Server Configuration"),"."),(0,r.kt)("h3",n({},{id:"access"}),"Access"),(0,r.kt)("p",null,"This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/REST/configuration#configuring-rest-access"}),"Configuring REST access"),"."),(0,r.kt)("h3",n({},{id:"web-studio"}),"Web Studio"),(0,r.kt)("h4",n({},{id:"enable-access-to-the-web-studio"}),"Enable access to the web studio"),(0,r.kt)("p",null,"Enables general access to the web studio. You still need to configure it at every project level."))}d.isMDXComponent=!0}}]);