"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99179],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=u(e.components);return o.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return t?o.createElement(b,n(n({ref:a},p),{},{components:t})):o.createElement(b,n({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,n=new Array(s);n[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var u=2;u<s;u++)n[u]=t[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83652:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});t(67294);var o=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const n={id:"configuration",title:"Configura\xe7\xe3o do servidor"},i=void 0,l={unversionedId:"REST/configuration",id:"version-18/REST/configuration",title:"Configura\xe7\xe3o do servidor",description:"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, i.e. to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/pt/18/REST/configuration",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"configuration",title:"Configura\xe7\xe3o do servidor"},sidebar:"docs",previous:{title:"Come\xe7ando",permalink:"/docs/pt/18/REST/gettingStarted"},next:{title:"Usu\xe1rios e sess\xf5es",permalink:"/docs/pt/18/REST/authUsers"}},u={},p=[{value:"Iniciar o servidor REST",id:"iniciar-o-servidor-rest",level:2},{value:"Configura\xe7\xe3o de acesso REST",id:"configura\xe7\xe3o-de-acesso-rest",level:2},{value:"Using the Database settings",id:"using-the-database-settings",level:3},{value:"M\xe9todo base On REST Authentication",id:"m\xe9todo-base-on-rest-authentication",level:3},{value:"Expor tabelas e campos",id:"expor-tabelas-e-campos",level:2},{value:"Expor as tabelas",id:"expor-as-tabelas",level:3},{value:"Expor campos",id:"expor-campos",level:3}],d={toc:p};function c(e){var{components:a}=e,n=s(e,["components"]);return(0,o.kt)("wrapper",r({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, ",(0,o.kt)("em",{parentName:"p"},"i.e.")," to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more."),(0,o.kt)("p",null,"Para iniciar usando as funcionalidades REST, precisa iniciar e configurar o servidor 4D REST."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Em 4D Server, abrir uma sess\xe3o REST exige que uma licen\xe7a cliente 4D free esteja dispon\xedvel.",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"Em 4D single-user, pode abrir at\xe9 tr\xeas sess\xf5es REST para fins de teste. You need to manage the ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/18/REST/authUsers#session-cookie"}),"session cookie")," to use the same session for your requesting application."))),(0,o.kt)("h2",r({},{id:"iniciar-o-servidor-rest"}),"Iniciar o servidor REST"),(0,o.kt)("p",null,"Por raz\xf5es de seguran\xe7a, o padr\xe3o de 4D \xe9 n\xe3o responder a peti\xe7\xf5es REST. If you want to start the REST Server, you must check the ",(0,o.kt)("strong",{parentName:"p"},"Expose as REST server"),' option in the "Web/REST resource" page of the database settings in order for REST requests to be processed.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:t(74500).Z,width:"862",height:"377"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.")),(0,o.kt)("p",null,'A mensagem de aviso "Aten\xe7\xe3o, verifique os privil\xe9gios de acesso" \xe9 exibida quando checar essa op\xe7\xe3o para chamar aten\xe7\xe3o para o fato que os servi\xe7os REST foram ativados, como padr\xe3o acessar os objetos de banco de dados \xe9 gr\xe1tis desde que os acessos REST n\xe3o tenham sido configurados.'),(0,o.kt)("h2",r({},{id:"configura\xe7\xe3o-de-acesso-rest"}),"Configura\xe7\xe3o de acesso REST"),(0,o.kt)("p",null,"Como padr\xe3o, acessos REST s\xe3o abertos a todos os usu\xe1rios que s\xe3o obviamente n\xe3o configurados para raz\xf5es de seguran\xe7a e tamb\xe9m para controlar uso de licen\xe7as de cliente."),(0,o.kt)("p",null,"Pode configurar os acessos REST de uma das maneiras abaixo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"assigning a ",(0,o.kt)("strong",{parentName:"li"},"Read/Write"),' user group to REST services in the "Web/REST resource" page of the Database Settings;'),(0,o.kt)("li",{parentName:"ul"},"escrever um m\xe9todo de database ",(0,o.kt)("inlineCode",{parentName:"li"},"On REST Authentication")," para interceptar e manejar qualquer peti\xe7\xe3o inicial REST.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"N\xe3o pode usar as duas funcionalidades ao mesmo tempo. Once an ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),' database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Database Settings is ignored.')),(0,o.kt)("h3",r({},{id:"using-the-database-settings"}),"Using the Database settings"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Read/Write"),' menu in the "Web/REST resource" page of the database settings specifies a group of 4D users that is authorized to establish the link to the 4D database using REST queries.'),(0,o.kt)("p",null,"By default, the menu displays ",(0,o.kt)("inlineCode",{parentName:"p"},"<Anyone>"),", which means that REST accesses are open to all users. Quando tiver especificado um grupo, s\xf3 contas de usu\xe1rios 4D que perten\xe7am ao grupo podem ser usadas ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/REST/authUsers"}),"acesso a 4D atrav\xe9s de peti\xe7\xf5es REST"),". Se uma conta for usada que n\xe3o perten\xe7a a esse grupo, 4D retorna um erro de autentica\xe7\xe3o para o emissor da peti\xe7\xe3o."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Para essa configura\xe7\xe3o funcionar, o m\xe9todo de database ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," n\xe3o deve ser definido. If it exists, 4D ignores access settings defined in the Database Settings.")),(0,o.kt)("h3",r({},{id:"m\xe9todo-base-on-rest-authentication"}),"M\xe9todo base On REST Authentication"),(0,o.kt)("p",null,"O m\xe9todo database ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," lhe oferece uma forma personalizada de controlar a abertura de sess\xf5es REST em 4D. Esse m\xe9todo de banco de dados \xe9 chamado automaticamente quando uma nova sess\xe3o for aberta atrav\xe9s da peti\xe7\xe3o REST. Quando receber uma ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/REST/authUsers"}),"solicita\xe7\xe3o para abrir uma sess\xe3o REST"),", os identificadores de conex\xe3o s\xe3o oferecidos no cabe\xe7alho da solicita\xe7\xe3o. O m\xe9todo database ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \xe9 chamado para poder avaliar estes identificadores. You can use the list of users for the 4D database or you can use your own table of identifiers. Para obter mais informa\xe7\xe3o, consulte a ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html"}),"documentaci\xf3n")," do m\xe9todo database",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"."),(0,o.kt)("h2",r({},{id:"expor-tabelas-e-campos"}),"Expor tabelas e campos"),(0,o.kt)("p",null,"Once REST services are enabled in the 4D database, by default a REST session can access all tables and fields of the datastore, and thus use their data. Por exemplo, se seu banco de dados conter uma tabela ","[Employee]",", \xe9 poss\xedvel escrever:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n')),(0,o.kt)("p",null,"Esta peti\xe7\xe3o devolver\xe1 todos os empregados cujo campo de salario seja superior a 10000."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'As tabelas ou campos 4D que tenham o atributo "Invis\xedvel" tamb\xe9m s\xe3o expostas em REST por padr\xe3o.')),(0,o.kt)("p",null,"Se quiser personalizar os objetos de datastore acess\xedveis atrav\xe9s de REST, deve desativar a exposi\xe7\xe3o para cada tabela ou campo que queira esconder. Quando uma peti\xe7\xe3o REST tentar acessar um recurso n\xe3o autorizado, 4D devolve um erro."),(0,o.kt)("h3",r({},{id:"expor-as-tabelas"}),"Expor as tabelas"),(0,o.kt)("p",null,"Como padr\xe3o, todas as tabelas s\xe3o expostas em REST."),(0,o.kt)("p",null,"Por raz\xf5es de seguran\xe7a, pode querer expor apenas algumas tabelas em sua datastore para as chamadas REST. Por exemplo, se criar uma tabela ","[Users]"," que armazene os nomes de usu\xe1rio e as senhas, seria melhor n\xe3o deix\xe1-la exposta."),(0,o.kt)("p",null,"Para remover a exposi\xe7\xe3o REST para uma tabela:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visualizar o inspetor de Tabelas no editor de Estrutura e selecionar a tabela que quiser modfiicar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uncheck the ",(0,o.kt)("strong",{parentName:"p"},"Expose as REST resource")," option: ",(0,o.kt)("img",{alt:"alt-text",src:t(36878).Z,width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."))),(0,o.kt)("h3",r({},{id:"expor-campos"}),"Expor campos"),(0,o.kt)("p",null,"Como padr\xe3o, todos os campos 4D database s\xe3o expostos em REST."),(0,o.kt)("p",null,"Pode querer expor certos campos de suas tabelas para REST. Por exemplo, \xe9 poss\xedvel que n\xe3o queira expor o campo ","[Employees]","Salary."),(0,o.kt)("p",null,"Para eliminar a exposi\xe7\xe3o REST de um campo:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Exibar o inspetor de Campo no editor de Estruturas e selecione o campo a modificar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Desmarque a op\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Expor como recurso REST")," para o campo. ",(0,o.kt)("img",{alt:"alt-text",src:t(60401).Z,width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Para que um campo seja access\xedvel a trav\xe9s de REST, a tabela pai tamb\xe9m deve ser. Se a tabela pai n\xe3o estiver exposta, nenhum dos campos estar\xe1, independente de seu estado.")))}c.isMDXComponent=!0},74500:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},60401:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},36878:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"}}]);