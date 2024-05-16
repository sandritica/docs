"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24135],{603905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),d=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return s.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?s.createElement(h,r(r({ref:n},u),{},{components:t})):s.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},582898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});t(667294);var s=t(603905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},a.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const r={id:"authUsers",title:"Usuarios y sesiones"},o=void 0,l={unversionedId:"REST/authUsers",id:"version-20-R5/REST/authUsers",title:"Usuarios y sesiones",description:"When scalable sessions are enabled (recommended), REST requests can create and use web user sessions, providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/es/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"authUsers",title:"Usuarios y sesiones"},sidebar:"docs",previous:{title:"Configuraci\xf3n del servidor",permalink:"/docs/es/REST/configuration"},next:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/REST/genInfo"}},d={},u=[{value:"Modos de inicio de sesi\xf3n de usuario",id:"modos-de-inicio-de-sesi\xf3n-de-usuario",level:2},{value:"Modo por defecto",id:"modo-por-defecto",level:3},{value:"Forzar el modo de inicio de sesi\xf3n",id:"forzar-el-modo-de-inicio-de-sesi\xf3n",level:3},{value:"Peticiones REST descriptivas",id:"peticiones-rest-descriptivas",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:3},{value:"Sintaxis",id:"sintaxis",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Using <code>On REST Authentication</code>",id:"using-on-rest-authentication",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3}],c={toc:u};function p(e){var{components:n}=e,r=i(e,["components"]);return(0,s.kt)("wrapper",a({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/WebServer/sessions#enabling-sessions"}),"scalable sessions are enabled")," (recommended), REST requests can create and use ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/WebServer/sessions"}),"web user sessions"),", providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges."),(0,s.kt)("p",null,"Cuando se abre una sesi\xf3n de usuario web, puede manejarla a trav\xe9s del objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," y la ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/API/SessionClass"}),"Session API"),". Las siguientes peticiones REST reutilizan la misma cookie de sesi\xf3n."),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"On 4D Server, opening a REST session might require that a free 4D client license is available, depending on the ",(0,s.kt)("a",a({parentName:"li"},{href:"#user-login-modes"}),"user login mode"),".",(0,s.kt)("br",null)),(0,s.kt)("li",{parentName:"ul"},"En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas."))),(0,s.kt)("h2",a({},{id:"modos-de-inicio-de-sesi\xf3n-de-usuario"}),"Modos de inicio de sesi\xf3n de usuario"),(0,s.kt)("p",null,'El modo de inicio de sesi\xf3n del usuario le permite controlar c\xf3mo las peticiones REST adquieren licencias 4D Client. Puedes elegir entre dos modos de inicio de sesi\xf3n de usuario: "predeterminado" o "inicio de sesi\xf3n forzado".'),(0,s.kt)("p",null,"You set the user login mode through the ",(0,s.kt)("inlineCode",{parentName:"p"},"forceLogin")," property in the ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/ORDA/privileges#rolesjson-file"}),(0,s.kt)("inlineCode",{parentName:"a"},"roles.json")," file"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},"default mode"),' is used if the "forceLogin" property is missing or set to "false",'),(0,s.kt)("li",{parentName:"ul"},"el modo ",(0,s.kt)("strong",{parentName:"li"},"force login"),' se utiliza si la propiedad "forceLogin" es "true".')),(0,s.kt)("admonition",a({},{type:"caution"}),(0,s.kt)("p",{parentName:"admonition"},"If you modify this property, the server must be restarted to take the change into account.")),(0,s.kt)("admonition",a({},{type:"note"}),(0,s.kt)("p",{parentName:"admonition"},"In Qodly Studio for 4D, the mode can be set using the ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/WebServer/qodly-studio#force-login"}),(0,s.kt)("strong",{parentName:"a"},"Force login")," option")," in the Privileges panel.")),(0,s.kt)("h3",a({},{id:"modo-por-defecto"}),"Modo por defecto"),(0,s.kt)("p",null,"In the default mode, any REST request is processed in a web user session that automatically consumes a license (the web user session is created if it does not already exist). Puede utilizar este modo simple si no necesita controlar cu\xe1ntas licencias se conservan en el servidor.\nWhen the default mode is enabled, you can authenticate users through the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method (see below)."),(0,s.kt)("h3",a({},{id:"forzar-el-modo-de-inicio-de-sesi\xf3n"}),"Forzar el modo de inicio de sesi\xf3n"),(0,s.kt)("p",null,'En el modo "inicio de sesi\xf3n forzada", el uso de la licencia est\xe1 desconectado de las sesiones de usuario web. A license is required only when the ',(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/API/SessionClass#setprivileges"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," is executed, allowing you to control the number of used licenses."),(0,s.kt)("p",null,(0,s.kt)("a",a({parentName:"p"},{href:"#descriptive-rest-requests"}),"Descriptive REST requests"),' are always processed by the server, even if no web user session using a license is opened. En este caso, son procesados a trav\xe9s de sesiones "invitado".'),(0,s.kt)("p",null,"All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/API/SessionClass#setprivileges"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," function for the session. Ejecutar esta funci\xf3n activa el consumo de la licencia 4D."),(0,s.kt)("p",null,"Este modo le permite implementar la siguiente secuencia de acceso:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'At the first REST call (for a webform call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than descriptive requests, no license consumption.'),(0,s.kt)("li",{parentName:"ol"},"You call your exposed ",(0,s.kt)("a",a({parentName:"li"},{href:"/docs/es/ORDA/ordaClasses#datastore-class"}),"datastore class function")," named ",(0,s.kt)("inlineCode",{parentName:"li"},"authentify()")," (created beforehand), in which you check the user credentials and call ",(0,s.kt)("a",a({parentName:"li"},{href:"/docs/es/API/SessionClass#setprivileges"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," with appropriate privileges."),(0,s.kt)("li",{parentName:"ol"},"La petici\xf3n ",(0,s.kt)("inlineCode",{parentName:"li"},"/rest/$catalog/authentify")," se env\xeda al servidor junto con las credenciales del usuario. Este paso s\xf3lo requiere un formulario de acceso b\xe1sico que no acceda a datos; puede ser un formulario Qodly (llamado a trav\xe9s de la petici\xf3n ",(0,s.kt)("inlineCode",{parentName:"li"},"/rest/$getWebForm"),")."),(0,s.kt)("li",{parentName:"ol"},"If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:t(912398).Z,width:"1344",height:"756"})),(0,s.kt)("h3",a({},{id:"peticiones-rest-descriptivas"}),"Peticiones REST descriptivas"),(0,s.kt)("p",null,'Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). Estas peticiones son:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",a({parentName:"li"},{href:"/docs/es/REST/catalog"}),(0,s.kt)("inlineCode",{parentName:"a"},"/rest/$catalog"))," requests (e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"/rest/$catalog/$all"),") - access to available dataclasses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/rest/$catalog/authentify")," - la funci\xf3n del almac\xe9n de datos utilizada para iniciar sesi\xf3n del usuario"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"/rest/$getWebForm")," - la renderizaci\xf3n de un formulario Qodly")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:t(254699).Z,width:"1171",height:"302"})),(0,s.kt)("h3",a({},{id:"function-authentify"}),(0,s.kt)("inlineCode",{parentName:"h3"},"Function authentify")),(0,s.kt)("h4",a({},{id:"sintaxis"}),"Sintaxis"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"exposed Function authentify({params : type}) {-> result : type}\n    // code\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"authentify()")," function must be implemented in the ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/ORDA/ordaClasses#datastore-class"}),"DataStore class")," of the project and must be called through a REST request."),(0,s.kt)("p",null,'This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.'),(0,s.kt)("p",null,"The function can receive any authentication or contextual information as ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/classFunctions#parameters"}),"parameter(s)")," and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request."),(0,s.kt)("p",null,"This function should contain two parts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"alg\xfan c\xf3digo para identificar y autenticar al remitente de la petici\xf3n REST,"),(0,s.kt)("li",{parentName:"ul"},"if the authentication is successful, a call to ",(0,s.kt)("a",a({parentName:"li"},{href:"/docs/es/API/SessionClass#setprivileges"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()"))," that assigns appropriate privileges to the session.")),(0,s.kt)("p",null,"If the function does not call ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/API/SessionClass#setprivileges"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session.setPrivileges()")),", no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected."),(0,s.kt)("h4",a({},{id:"ejemplo"}),"Ejemplo"),(0,s.kt)("p",null,"S\xf3lo quiere conocer a los usuarios para abrir una sesi\xf3n web en el servidor. Ha creado la siguiente funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"authentify()")," en la clase datastore:"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n    \n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) //the user is known\n    If (Verify password hash($credentials.password; $user.password))\n        Session.setPrivileges("vip")\n    Else \n\n        return "Wrong password"\n    End if \nElse \n        return "Wrong user"\nEnd if \n')),(0,s.kt)("p",null,"Para llamar a la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"authentify()"),":"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"POST")," ",(0,s.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/authentify")),(0,s.kt)("p",null,"Cuerpo de la petici\xf3n:"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-json"}),'[{"name":"Henry",\n"password":"123"}]\n')),(0,s.kt)("h2",a({},{id:"using-on-rest-authentication"}),"Using ",(0,s.kt)("inlineCode",{parentName:"h2"},"On REST Authentication")),(0,s.kt)("p",null,'In default login mode (i.e. the "force login" mode is disabled), you can log in a user to your application by calling ',(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST request including the user's name and password in the header. Esta petici\xf3n llama al m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo)."),(0,s.kt)("p",null,"Si no se ha definido el m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),", se abre una sesi\xf3n ",(0,s.kt)("inlineCode",{parentName:"p"},"guest"),"."),(0,s.kt)("h3",a({},{id:"ejemplo-1"}),"Ejemplo"),(0,s.kt)("p",null,"In this example, the user enters their email and password in an html page that requests ",(0,s.kt)("a",a({parentName:"p"},{href:"/docs/es/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST (it is recommended to use an HTTPS connection to send the html page). Se llama al m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," para validar las credenciales y establecer la sesi\xf3n."),(0,s.kt)("p",null,"P\xe1gina de inicio de sesi\xf3n HTML:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:t(75014).Z,width:"268",height:"85"})),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n    <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n  \n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n  \n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n  \n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n  \n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,s.kt)("p",null,"Cuando la p\xe1gina de inicio de sesi\xf3n se env\xeda al servidor, se llama al m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'    //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n    //A \'/rest\' URL has been called with headers username-4D and password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Tan pronto como se ha llamado y devuelto ",(0,s.kt)("inlineCode",{parentName:"p"},"True"),", el m\xe9todo base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," deja de llamarse en la sesi\xf3n.")),(0,s.kt)("p",null,"El m\xe9todo proyecto ",(0,s.kt)("inlineCode",{parentName:"p"},"fillSession")," inicializa la sesi\xf3n usuario, por ejemplo:"),(0,s.kt)("pre",null,(0,s.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n')))}p.isMDXComponent=!0},254699:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},912398:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/force-login-2-1930148cafd4aa463ed094161b992f72.jpeg"},75014:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"}}]);