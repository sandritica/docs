"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,A=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(A,s(s({ref:t},u),{},{components:a})):n.createElement(A,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"authentication",title:"Autentica\xe7\xe3o"},o=void 0,l={unversionedId:"WebServer/authentication",id:"version-19-R6/WebServer/authentication",title:"Autentica\xe7\xe3o",description:"Authenticating users is necessary when you want to provide specific access rights to web users. Authentication designates the way the information concerning the user credentials (usually name and password) are collected and processed.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/WebServer/authentication.md",sourceDirName:"WebServer",slug:"/WebServer/authentication",permalink:"/docs/pt/19-R6/WebServer/authentication",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"authentication",title:"Autentica\xe7\xe3o"},sidebar:"docs",previous:{title:"Custom HTTP Error Pages",permalink:"/docs/pt/19-R6/WebServer/errorPages"},next:{title:"User sessions",permalink:"/docs/pt/19-R6/WebServer/sessions"}},d={},u=[{value:"Authentication modes",id:"authentication-modes",level:2},{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:3},{value:"Custom (default)",id:"custom-default",level:3},{value:"Basic protocol",id:"basic-protocol",level:3},{value:"Protocolo DIGEST",id:"protocolo-digest",level:3},{value:"On Web Authentication",id:"on-web-authentication",level:2},{value:"Database method calls",id:"database-method-calls",level:3},{value:"Sintaxe",id:"sintaxe",level:3},{value:"$1 - URL",id:"1---url",level:4},{value:"$2 - Header and Body of the HTTP request",id:"2---header-and-body-of-the-http-request",level:4},{value:"$3 - Web client IP address",id:"3---web-client-ip-address",level:4},{value:"$4 - Server IP address",id:"4---server-ip-address",level:4},{value:"$5 and $6 - User Name and Password",id:"5-and-6---user-name-and-password",level:4},{value:"Par\xe2metro $0",id:"par\xe2metro-0",level:4},{value:"Exemplo",id:"exemplo",level:3}],p={toc:u};function c(e){var{components:t}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",r({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Authenticating users is necessary when you want to provide specific access rights to web users. Authentication designates the way the information concerning the user credentials (usually name and password) are collected and processed."),(0,n.kt)("h2",r({},{id:"authentication-modes"}),"Authentication modes"),(0,n.kt)("p",null,"The 4D web server proposes three authentication modes, that you can select in the ",(0,n.kt)("strong",{parentName:"p"},"Web"),"/",(0,n.kt)("strong",{parentName:"p"},"Options (I)")," page of the Settings dialog box:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(15921).Z,width:"790",height:"176"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Using a ",(0,n.kt)("strong",{parentName:"p"},"custom")," authentication is recommended.")),(0,n.kt)("h3",r({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,n.kt)("p",null,"The operation of the 4D web server's access system is summarized in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(46018).Z,width:"680",height:"498"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Requests starting with ",(0,n.kt)("inlineCode",{parentName:"p"},"rest/")," are directly handled by the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/REST/configuration"}),"REST server"),".")),(0,n.kt)("h3",r({},{id:"custom-default"}),"Custom (default)"),(0,n.kt)("p",null,"Basically in this mode, it's up to the developer to define how to authenticate users. 4D only evaluates HTTP requests ",(0,n.kt)("a",r({parentName:"p"},{href:"#method-calls"}),"that require an authentication"),"."),(0,n.kt)("p",null,"This authentication mode is the most flexible because it allows you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"either, delegate the user authentication to a third-party application (e.g. a social network, SSO);"),(0,n.kt)("li",{parentName:"ul"},"or, provide an interface to the user (e.g. a web form) so that they can create their account in your customer database; then, you can authenticate users with any custom algorithm (see ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19-R6/WebServer/sessions#example"}),"this example"),' from the "User sessions" chapter). The important thing is that you never store the password in clear, using such code:')),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//... user account creation\nds.webUser.password:=Generate password hash($password)  \nds.webUser.save()\n")),(0,n.kt)("p",null,"See also ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/gettingStarted#authenticating-users"}),"this example"),' from the "Getting started" chapter.'),(0,n.kt)("p",null,"If no custom authentication is provided, 4D calls the ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method (if it exists). In addition to $1 and $2, only the IP addresses of the browser and the server ($3 and $4) are provided, the user name and password ($5 and $6) are empty. The method must return ",(0,n.kt)("strong",{parentName:"p"},"True")," in $0 if the user is successfully authenticated, then the resquested resource is served, or ",(0,n.kt)("strong",{parentName:"p"},"False")," in $0 if the authentication failed."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning:")," If the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method does not exist, connections are automatically accepted (test mode).")),(0,n.kt)("h3",r({},{id:"basic-protocol"}),"Basic protocol"),(0,n.kt)("p",null,"When a user connects to the server, a standard dialog box appears on their browser in order for them to enter their user name and password."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The name and password entered by the user are sent unencrypted in the HTTP request header. This mode typically requires HTTPS to provide confidentiality.")),(0,n.kt)("p",null,"Entered values are then evaluated:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the ",(0,n.kt)("strong",{parentName:"p"},"Include 4D passwords")," option is checked, user credentials will be first evaluated against the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Users/overview"}),"internal 4D users table"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the user name sent by the browser exists in the table of 4D users and the password is correct, the connection is accepted. If the password is incorrect, the connection is refused."),(0,n.kt)("li",{parentName:"ul"},"If the user name does not exist in the table of 4D users, the ",(0,n.kt)("a",r({parentName:"li"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method is called. If the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," database method does not exist, connections are rejected."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the ",(0,n.kt)("strong",{parentName:"p"},"Include 4D passwords")," option is not checked, user credentials are sent to the ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method along with the other connection parameters (IP address and port, URL...) so that you can process them. If the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method does not exist, connections are rejected."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"With the 4D Client web server, keep in mind that all the sites published by the 4D Client machines will share the same table of users. Validation of users/passwords is carried out by the 4D Server application.")))),(0,n.kt)("h3",r({},{id:"protocolo-digest"}),"Protocolo DIGEST"),(0,n.kt)("p",null,"This mode provides a greater level of security since the authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher."),(0,n.kt)("p",null,"As in BASIC mode, users must enter their name and password when they connect. The ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method is then called. When the DIGEST mode is activated, the $6 parameter (password) is always returned empty. In fact, when using this mode, this information does not pass by the network as clear text (unencrypted). It is therefore imperative in this case to evaluate connection requests using the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB Validate digest")," command."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You must restart the web server in order for the changes made to these parameters to be taken into account.")),(0,n.kt)("h2",r({},{id:"on-web-authentication"}),"On Web Authentication"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method is in charge of managing web server engine access. It is called by 4D or 4D Server when a dynamic HTTP request is received."),(0,n.kt)("h3",r({},{id:"database-method-calls"}),"Database method calls"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method is automatically called when a request or processing requires the execution of some 4D code (except for REST calls). It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist)."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method is therefore called:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"when the web server receives a URL requesting a resource that does not exist"),(0,n.kt)("li",{parentName:"ul"},"when the web server receives a URL beginning with ",(0,n.kt)("inlineCode",{parentName:"li"},"4DACTION/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"4DCGI/"),"..."),(0,n.kt)("li",{parentName:"ul"},"when the web server receives a root access URL and no home page has been set in the Settings or by means of the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET HOME PAGE")," command"),(0,n.kt)("li",{parentName:"ul"},"when the web server processes a tag executing code (e.g ",(0,n.kt)("inlineCode",{parentName:"li"},"4DSCRIPT"),") in a semi-dynamic page.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method is NOT called:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"when the web server receives a URL requesting a valid static page."),(0,n.kt)("li",{parentName:"ul"},"when the web server reveives a URL beginning with ",(0,n.kt)("inlineCode",{parentName:"li"},"rest/")," and the REST server is launched (in this case, the authentication is handled through the ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19-R6/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,n.kt)("inlineCode",{parentName:"a"},"On REST Authentication")," database method")," or ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/pt/19-R6/REST/configuration#using-the-structure-settings"}),"Structure settings"),").")),(0,n.kt)("h3",r({},{id:"sintaxe"}),"Sintaxe"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Web Authentication"),"( ",(0,n.kt)("em",{parentName:"p"},"$1")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$2")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$3")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$4")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$5")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$6")," : Text ) -> $0 : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"HTTP headers + HTTP body (up to 32 kb limit)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IP address of the web client (browser)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IP address of the server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome de usuario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Senha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$0"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Booleano"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True = request accepted, False = request rejected")))),(0,n.kt)("p",null,"You must declare these parameters as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//On Web Authentication database method\n\n C_TEXT($1;$2;$3;$4;$5;$6)\n C_BOOLEAN($0)\n\n//Code for the method\n")),(0,n.kt)("p",null,"Alternatively, you can use the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/Concepts/parameters#named-parameters"}),"named parameters")," syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// On Web Authentication database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"All the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method's parameters are not necessarily filled in. The information received by the database method depends on the selected ",(0,n.kt)("a",r({parentName:"p"},{href:"#authentication-mode"}),"authentication mode"),").")),(0,n.kt)("h4",r({},{id:"1---url"}),"$1 - URL"),(0,n.kt)("p",null,"The first parameter (",(0,n.kt)("inlineCode",{parentName:"p"},"$1"),") is the URL received by the server, from which the host address has been removed."),(0,n.kt)("p",null,"Let\u2019s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is 123.45.67.89. The following table shows the values of $1 depending on the URL entered in the Web browser:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"URL entered in web browser"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value of parameter $1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.45.67.89"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.45.67.89"}),"http://123.45.67.89")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.45.67.89/Customers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.45.67.89/Customers/Add"}),"http://123.45.67.89/Customers/Add")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers/Add")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.45.67.89/Do_This/If_OK/Do_That"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Do_This/If_OK/Do_That")))),(0,n.kt)("h4",r({},{id:"2---header-and-body-of-the-http-request"}),"$2 - Header and Body of the HTTP request"),(0,n.kt)("p",null,"The second parameter (",(0,n.kt)("inlineCode",{parentName:"p"},"$2"),") is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method as it is. Its contents will vary depending on the nature of the web browser which is attempting the connection."),(0,n.kt)("p",null,"If your application uses this information, it is up to you to parse the header and the body. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP HEADER")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP BODY")," commands."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.")),(0,n.kt)("h4",r({},{id:"3---web-client-ip-address"}),"$3 - Web client IP address"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$3")," parameter receives the IP address of the browser\u2019s machine. This information can allow you to distinguish between intranet and internet connections."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/webServerConfig#about-ipv6-support"}),"IPv6 Support")," section.")),(0,n.kt)("h4",r({},{id:"4---server-ip-address"}),"$4 - Server IP address"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$4")," parameter receives the IP address used to call the web server. 4D allows for multi-homing, which allows you to exploit machines with more than one IP address. For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/19-R6/WebServer/webServerConfig#ip-address-to-listen"}),"Configuration page"),"."),(0,n.kt)("h4",r({},{id:"5-and-6---user-name-and-password"}),"$5 and $6 - User Name and Password"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$5")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$6")," parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if ",(0,n.kt)("a",r({parentName:"p"},{href:"#basic-protocol"}),"basic")," or ",(0,n.kt)("a",r({parentName:"p"},{href:"#digest-protocol"}),"digest")," authentication is selected."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons.")),(0,n.kt)("h4",r({},{id:"par\xe2metro-0"}),"Par\xe2metro $0"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method returns a boolean in $0:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If $0 is True, the connection is accepted.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If $0 is False, the connection is refused."))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method is only executed if the connection has been accepted by ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING"),(0,n.kt)("br",null),"If no value is set to $0 or if $0 is not defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method, the connection is considered as accepted and the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method is executed."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Do not call any interface elements in the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," database method (",(0,n.kt)("inlineCode",{parentName:"li"},"ALERT"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"DIALOG"),", etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing."))))),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Example of the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method in ",(0,n.kt)("a",r({parentName:"p"},{href:"#digest-protocol"}),"DIGEST mode"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' // On Web Authentication Database Method\n #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \\\n    $user : Text; $pw : Text) -> $valid : Boolean\n\n var $found : cs. WebUserSelection\n $valid:=False\n\n $found:=ds. WebUser.query("User === :1";$user)\n If($found.length=1) // User is found\n    $valid:=WEB Validate digest($user;[WebUser]password)\n Else\n    $valid:=False // User does not exist\n End if\n')))}c.isMDXComponent=!0},15921:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},46018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/serverAccess-b28091b35f6bc6b3f5605b27e8333135.png"}}]);