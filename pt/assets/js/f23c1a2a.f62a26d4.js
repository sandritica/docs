"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(h,s(s({ref:r},c),{},{components:t})):n.createElement(h,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49011:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"authUsers",title:"Users and sessions"},i=void 0,u={unversionedId:"REST/authUsers",id:"version-18/REST/authUsers",title:"Users and sessions",description:"Authenticating users",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/pt/18/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"authUsers",title:"Users and sessions"},sidebar:"docs",previous:{title:"Server Configuration",permalink:"/docs/pt/18/REST/configuration"},next:{title:"Obter informa\xe7\xe3o do servidor",permalink:"/docs/pt/18/REST/genInfo"}},l={},c=[{value:"Authenticating users",id:"authenticating-users",level:2},{value:"Cookie de sess\xe3o",id:"cookie-de-sess\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:3}],d={toc:c};function p(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"authenticating-users"}),"Authenticating users"),(0,n.kt)("p",null,"Como primeiro passo para abrir uma sess\xe3o REST no servidor 4D, o usu\xe1rio que envia a solicitude deve estar autenticado."),(0,n.kt)("p",null,"Pode iniciar a sess\xe3o de um usu\xe1rio em sua aplica\xe7\xe3o passando o nome e a senhar de usu\xe1rio em  ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/18/REST/directory#directorylogin"}),(0,n.kt)("inlineCode",{parentName:"a"},"$directory/login")),"."),(0,n.kt)("p",null,"Quando um usu\xe1rio registrar com sucesso, se abre uma sess\xe3o. Veja abaixo para saber como manejar o cookie da sess\xe3o nas seguintes peti\xe7\xf5es de cliente se for necess\xe1rio."),(0,n.kt)("p",null,"A sess\xe3o se fechar\xe1 automaticamente quando alcan\xe7ar o tempo de espera."),(0,n.kt)("h2",o({},{id:"cookie-de-sess\xe3o"}),"Cookie de sess\xe3o"),(0,n.kt)("p",null,"Cada peti\xe7\xe3o REST se gerencia por uma sess\xe3o espec\xedfica no servidor 4D."),(0,n.kt)("p",null,"Quando se recebe uma primeira peti\xe7\xe3o REST v\xe1lida, o servidor cria a sess\xe3o e envia uma cookie de sess\xe3o chamada ",(0,n.kt)("inlineCode",{parentName:"p"},"WASID4D")," no cabe\xe7alho de resposta ",(0,n.kt)("strong",{parentName:"p"},'"Set-Cookie"'),", que cont\xe9m o UUID da sess\xe3o, por exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n")),(0,n.kt)("p",null,"Nas seguintes peti\xe7\xf5es REST, tenha certeza de que esta cookie se inclua no ",(0,n.kt)("strong",{parentName:"p"},'cabe\xe7alho "Cookie"')," com o fim de reutilizar a mesma sess\xe3o. Em caso contr\xe1rio, se abrir\xe1 uma nova sess\xe3o e se utilizar\xe1 outra licen\xe7a."),(0,n.kt)("h3",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"A gest\xe3o de cookies de sess\xe3o depende de seu cliente HTTP. Este exemplo mostra como extrair e reenviar a cookie de sess\xe3o no contexto das peti\xe7\xf5es gestionadas atrav\xe9s do comando 4D ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP Request"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// Creating headers ARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0) APPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D") APPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest)) C_OBJECT($response)\n$response:=New object\n\n//This request opens a session for the user "kind user"\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n//Build new arrays for headers with only the cookie WASID4D\nbuildHeader(->headerNames;->headerValues)\n\n//This other request will not open a new session\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// buildHeader project method C_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0) COPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start) ARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid COPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n')))}p.isMDXComponent=!0}}]);