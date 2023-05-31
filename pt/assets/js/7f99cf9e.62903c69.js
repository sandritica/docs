"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15786],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>c});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),m=function(e){var a=o.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=m(e.components);return o.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(t),c=n,k=u["".concat(d,".").concat(c)]||u[c]||p[c]||r;return t?o.createElement(k,l(l({ref:a},s),{},{components:t})):o.createElement(k,l({ref:a},s))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<r;m++)l[m]=t[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57392:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});t(67294);var o=t(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function r(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"cli",title:"Interface de linha de comando"},i=void 0,d={unversionedId:"Admin/cli",id:"version-20/Admin/cli",title:"Interface de linha de comando",description:"\xc9 poss\xedvel usar o Terminal macOS ou o console do Windows para pilotar suas aplica\xe7\xf5es 4D (4D e 4D Servidor) com linhas de comando. Mais especificamente, essa funcionalidade permite que:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Admin/cli.md",sourceDirName:"Admin",slug:"/Admin/cli",permalink:"/docs/pt/Admin/cli",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"cli",title:"Interface de linha de comando"},sidebar:"docs",previous:{title:"Web Data Explorer",permalink:"/docs/pt/Admin/dataExplorer"},next:{title:"Protocolo TLS (HTTPS)",permalink:"/docs/pt/Admin/tls"}},m={},s=[{value:"Informa\xe7\xe3o b\xe1sica",id:"informa\xe7\xe3o-b\xe1sica",level:2},{value:"Lan\xe7ar uma aplica\xe7\xe3o 4D",id:"lan\xe7ar-uma-aplica\xe7\xe3o-4d",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Utilizar tool4d",id:"utilizar-tool4d",level:3},{value:"Funcionalidades 4D desativadas",id:"funcionalidades-4d-desativadas",level:3},{value:"4D Server em modo utilit\xe1rio",id:"4d-server-em-modo-utilit\xe1rio",level:2}],p={toc:s};function u(e){var{components:a}=e,t=r(e,["components"]);return(0,o.kt)("wrapper",n({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\xc9 poss\xedvel usar o Terminal macOS ou o console do Windows para pilotar suas aplica\xe7\xf5es 4D (4D e 4D Servidor) com linhas de comando. Mais especificamente, essa funcionalidade permite que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lance um banco de dados remotamente, que pode ser \xfatil especialmente para administrar servidores Web."),(0,o.kt)("li",{parentName:"ul"},"roda automaticamente testes para suas aplica\xe7\xf5es.")),(0,o.kt)("h2",n({},{id:"informa\xe7\xe3o-b\xe1sica"}),"Informa\xe7\xe3o b\xe1sica"),(0,o.kt)("p",null,"Pode executar linhas de comando para aplica\xe7\xf5es 4D usando o terminal macOS ou o console Windows."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Em macOS, precisa usar o comando ",(0,o.kt)("inlineCode",{parentName:"li"},"open"),"."),(0,o.kt)("li",{parentName:"ul"},"Em Windows pode passar os argumentos diretamente.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Em macOS pode passar os argumentos diretamente indo \xe0 pasta onde est\xe1 a aplica\xe7\xe3o dentro do pacote (rota Contents/MacOS) que permite dirigir o stream stderr. Por exemplo se o pacote 4D estiver na pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFolder"),",  deve escrever a linha de comando abaixo: ",(0,o.kt)("inlineCode",{parentName:"p"},"/MyFolder/4D.app/Contents/MacOS/4D"),". Entretanto, recomandos usar o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," sempre que n\xe3o precisar acessar o stream stderr.")),(0,o.kt)("h2",n({},{id:"lan\xe7ar-uma-aplica\xe7\xe3o-4d"}),"Lan\xe7ar uma aplica\xe7\xe3o 4D"),(0,o.kt)("p",null,"Aqui est\xe1 uma descri\xe7\xe3o das linhas de comando e os argumentos compat\xedveis com o lan\xe7amento de aplica\xe7\xf5es 4D."),(0,o.kt)("p",null,"Sintaxe:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{}),"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] \n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]\n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings] \n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",n({parentName:"tr"},{align:"left"}),"Argumento","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Valor"),(0,o.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"applicationPath")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Rota de 4D, Servidor 4D ou da aplica\xe7\xe3o fusionada."),(0,o.kt)("td",n({parentName:"tr"},{align:null}),'Lan\xe7a a aplica\xe7\xe3o. Mesmo que dar um clique duplo na aplica\xe7\xe3o. Quando chamado sem um argumento de arquivo estrutura, a aplica\xe7\xe3o \xe9 executada e a caixa de di\xe1logo "selecionar banco de dados" aparece.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--version")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Exibe a vers\xe3o da aplica\xe7\xe3o e termina")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--help")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Exibe ajuda e sai. Outros argumentos: -?, -h")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--project")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"projectPath ","|"," packagePath ","|"," 4dlinkPath"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Arquivo de projeto para abrir com o arquivo de dados atual. N\xe3o aparece nenhuma caixa de di\xe1logo.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--data")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"dataPath"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Arquivo de dados a abrir com o arquivo de projeto designado. Se n\xe3o for especificado, 4D usa o \xfaltimo arquivo aberto.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--opening-mode")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"interpreted ","|"," compiled"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Pede para o banco de dados abrir em modo interpretado ou compilado. Nenhum erro \xe9 gerado se o modo pedido estiver indispon\xedvel.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--create-data")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),'Cria automaticamente um novo arquivo de dados se nenhum arquivo v\xe1lido for encontrado. N\xe3o aparece nenhuma caixa de di\xe1logo. 4D usa o nome de arquivo passado no argumento "--data" se houver (gera um erro se um arquivo com o mesmo nome j\xe1 existir).')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--user-param")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"String usu\xe1rio personalizada"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),'Uma string que ficar\xe1 dispon\xedvel dentro da aplica\xe7\xe3o 4D atrav\xe9s do comando Get database parameter (a string n\xe3o deve come\xe7ar com o caractere "-" que \xe9 reservado).')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--headless")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Lan\xe7a 4D, Servidor 4D, ou a aplica\xe7\xe3o fusionada, sem uma interface (modo headless). Nesse modo:",(0,o.kt)("li",null," O modo Design n\xe3oe st\xe1 dispon\xedvel, o banco come\xe7a em modo Aplica\xe7\xe3o"),(0,o.kt)("li",null," Sem barra de ferramentas, sem barra de menu, sem janela MDI ou tela de apresenta\xe7\xe3o."),(0,o.kt)("li",null,"Nenhum \xedcone \xe9 exibido no dock ou na barra de tarefas."),(0,o.kt)("li",null,'O banco de dados aberto n\xe3o \xe9 registrado no menu "Bancos recentes"'),(0,o.kt)("li",null,"O hist\xf3rico de diagn\xf3sticos \xe9 iniciado automaticamente (ver ",(0,o.kt)("a",n({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"SET DATABASE PARAMETER"),", selector 79)"),(0,o.kt)("li",null,"Toda chamada para uma caixa de di\xe1logo \xe9 interceptada e uma resposta automaticamente \xe9 fornecida (por exemplo OK para o comando ",(0,o.kt)("a",n({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page41.html"}),"ALERT")," , Abortar para um di\xe1logo de erro...). Todos os comandos interceptados (*) s\xe3o gravados no hist\xf3rico de diagn\xf3stico."),(0,o.kt)("br",null),"Para quest\xf5es de manuten\xe7\xe3o \xe9 poss\xedvel enviar qualquer texto para streams normais de output usando o comando ",(0,o.kt)("a",n({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT"),". Note que aplica\xe7\xf5es headless 4D s\xf3 podem ser fechadas com uma chamada a ",(0,o.kt)("a",n({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page291.html"}),"QUIT 4D")," ou usando o gerente de tarefas do OS.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--dataless")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"O modo sem dados \xe9 \xfatil quando 4D rodar tarefas que n\xe3o precisam de dados (por exemplo na compila\xe7\xe3o de projetos). Lan\xe7a 4D, servidor 4D ou uma aplica\xe7\xe3o fusionada em modo Dataless. Nesse modo: ",(0,o.kt)("li",null,"Nenhum arquivo contendo dados \xe9 aberto, mesmo se especificado na linha de comando ou no arquivo ",(0,o.kt)("inlineCode",{parentName:"td"},".4DLink"),", ou se usar os comandos ",(0,o.kt)("inlineCode",{parentName:"td"},"CREATE DATA FILE")," e ",(0,o.kt)("inlineCode",{parentName:"td"},"OPEN DATA FILE")),(0,o.kt)("li",null,"Comandos que manipulam dados v\xe3o causar um erro. Por exemplo , ",(0,o.kt)("inlineCode",{parentName:"td"},"CREATE RECORD")," gera a mensagem \u201cnenhuma tabela est\xe1 dispon\xedvel para aplicar este comando\u201d."),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Nota"),":",(0,o.kt)("li",null,"Se passado na linha de comando, o modo sem dados se aplica a todos os bancos de dados abertos em 4D, desde que a aplica\xe7\xe3o seja fechada."),(0,o.kt)("li",null,"Se passado no arquivo ",(0,o.kt)("inlineCode",{parentName:"td"},".4DLink"),", modo dataless s\xf3 se aplica aos bancos especificados no arquivo ",(0,o.kt)("inlineCode",{parentName:"td"},".4DLink"),". Para saber mais sobre arquivos ",(0,o.kt)("inlineCode",{parentName:"td"},".4DLink")," veja ",(0,o.kt)("a",n({parentName:"td"},{href:"../Project/creating.md#project-opening-shortcuts"}),"Project opening shortcuts"),"."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-file")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Rota do arquivo"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Rota do arquivo personalizado WebAdmin ",(0,o.kt)("inlineCode",{parentName:"td"},".4DSettings")," para o  ",(0,o.kt)("a",n({parentName:"td"},{href:"/docs/pt/Admin/webAdmin"}),"servidor WebAdmin")," N\xe3o dispon\xedvel com ",(0,o.kt)("a",n({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--webadmin-access-key")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Chave de acesso para o servidor web ",(0,o.kt)("a",n({parentName:"td"},{href:"/docs/pt/Admin/webAdmin"}),"WebAdmin")," N\xe3o dispon\xedvel com ",(0,o.kt)("a",n({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--webadmin-auto-start")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Estado do in\xedcio autom\xe1tico para o servidor ",(0,o.kt)("a",n({parentName:"td"},{href:"/docs/pt/Admin/webAdmin"}),"WebAdmin")," N\xe3o dispon\xedvel com ",(0,o.kt)("a",n({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Armazena a chave de acesso e inicia automaticamente os par\xe2metros nas configura\xe7\xf5es de arquivo utilizadas (ou seja, o arquivo padr\xe3o ",(0,o.kt)("a",n({parentName:"td"},{href:"/docs/pt/Admin/webAdmin#webadmin-settings"}),(0,o.kt)("inlineCode",{parentName:"a"},"WebAdmin.4DSettings"))," ou um arquivo personalizado designado pelo par\xe2metro ",(0,o.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-path"),"). Use o argumento ",(0,o.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")," para salvar essas configura\xe7\xf5es se necess\xe1rio N\xe3o dispon\xedvel com ",(0,o.kt)("a",n({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--utility")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Apenas dispon\xedvel com 4D Server. Inicia ",(0,o.kt)("a",n({parentName:"td"},{href:"#4d-server-in-utility-mode"}),"4D Server no modo utilit\xe1rio"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--skip-onstartup")),(0,o.kt)("td",n({parentName:"tr"},{align:null})),(0,o.kt)("td",n({parentName:"tr"},{align:null}),'Inicia o projecto sem executar quaisquer m\xe9todos "autom\xe1ticos", incluindo os m\xe9todos de base de dados ',(0,o.kt)("inlineCode",{parentName:"td"},"On Startup")," e ",(0,o.kt)("inlineCode",{parentName:"td"},"On Exit"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"left"}),(0,o.kt)("inlineCode",{parentName:"td"},"--startup-method")),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"Nome do m\xe9todo projecto (string)"),(0,o.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo de projecto a executar imediatamente ap\xf3s o m\xe9todo de base ",(0,o.kt)("inlineCode",{parentName:"td"},"On Startup")," (se n\xe3o for ignorado com ",(0,o.kt)("inlineCode",{parentName:"td"},"--skip-onstartup"),").")))),(0,o.kt)("p",null,(0,o.kt)("a",n({parentName:"p"},{href:"debugLogFiles.md#4ddiagnosticlogtxt"}),"Diagnostic log file")," (licence alert, conversion dialog, database selection, data file selection). Nesses casos, uma mensagem de erro \xe9 criada tanto no stream stderr e no arquivo de eventos do sistema, e ent\xe3o a aplica\xe7\xe3o fecha."),(0,o.kt)("h3",n({},{id:"exemplos"}),"Exemplos"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'A pasta atual do usu\xe1rio \xe9 alcan\xe7ada usando o comando  "~ " em macOS e o comando "%HOMEPATH%" em Windows.')),(0,o.kt)("p",null,"Lance uma aplica\xe7\xe3o 4D armazenada no desktop:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n')),(0,o.kt)("p",null,"Abrir um ficheiro de pacote em macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"--args ~/Documents/myDB.4dbase\n")),(0,o.kt)("p",null,"Abrir um ficheiro de projecto:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"--args ~/Documentos/myProj/Projecto/myProj.4DProject\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n")),(0,o.kt)("p",null,"Abrir um ficheiro de projecto e um ficheiro de dados:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nou:\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n")),(0,o.kt)("p",null,"Abrir um ficheiro .4DLink:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"~/Desktop/MyDatabase.4DLink\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n")),(0,o.kt)("p",null,"Abrir em modo compilado e criar um arquivo de dados se n\xe3o dispon\xedvel:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n")),(0,o.kt)("p",null,"Abrir um ficheiro projeto e um arquivo de dados e passar uma \u201cstring\u201d como par\xe2metro do usu\xe1rio:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n')),(0,o.kt)("p",null,"Aberto sem interface (modo headless):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n")),(0,o.kt)("h2",n({},{id:"tool4d"}),"tool4d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tool4d")," \xe9 uma aplica\xe7\xe3o gratuita, leve e aut\xf3noma que permite abrir um projecto 4D em modo headless e executar algum c\xf3digo 4D utilizando o CLI."),(0,o.kt)("p",null,"tool4d est\xe1 dispon\xedvel em Windows e macOS e est\xe1 sempre associado a uma vers\xe3o 4D (mesma vers\xe3o e n\xfamero de compila\xe7\xe3o). S\xf3 \xe9 fornecido na localiza\xe7\xe3o em ingl\xeas."),(0,o.kt)("p",null,"tool4d \xe9 uma ferramenta perfeita para o fazer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"implementar uma cadeia CI/CD para sua aplica\xe7\xe3o 4D,"),(0,o.kt)("li",{parentName:"ul"},"usar um execut\xe1vel 4D leve para executar scripts 4D, por exemplo, para executar testes unit\xe1rios autom\xe1ticos.")),(0,o.kt)("h3",n({},{id:"utilizar-tool4d"}),"Utilizar tool4d"),(0,o.kt)("p",null,"Pode obter tool4d na",(0,o.kt)("a",n({parentName:"p"},{href:"https://product-download.4d.com/"}),"p\xe1gina de transfer\xeancia do produto 4D"),"."),(0,o.kt)("p",null,"Utiliza-se o tool4d executando uma ",(0,o.kt)("a",n({parentName:"p"},{href:"#launch-a-4d-application"}),"linha de comando")," com um projecto 4D padr\xe3o. Pode utilizar todos os argumentos descritos na tabela acima, excepto --",(0,o.kt)("inlineCode",{parentName:"p"},"webadmin")," uma vez que este componente est\xe1 ",(0,o.kt)("a",n({parentName:"p"},{href:"#disabled-4d-features"}),"desactivado no tool4d"),". Com tool4d, \xe9 lan\xe7ada a seguinte sequ\xeancia espec\xedfica:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"o tool4d executa o m\xe9todo de base ",(0,o.kt)("inlineCode",{parentName:"li"},"On Startup"),' (e todos os m\xe9todos "autom\xe1ticos" como o ',(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/Users/editing#user-properties"}),"m\xe9todo utilizador"),"), excepto se for passado o argumento ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-onstartup"),"."),(0,o.kt)("li",{parentName:"ol"},"tool4d executa o m\xe9todo designado pelo argumento ",(0,o.kt)("inlineCode",{parentName:"li"},"--startup-method"),", se existir."),(0,o.kt)("li",{parentName:"ol"},"tool4d executa o m\xe9todo de base ",(0,o.kt)("inlineCode",{parentName:"li"},"On Exit"),", excepto se for passado o argumento ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-onstartup"),"."),(0,o.kt)("li",{parentName:"ol"},"tool4d desiste.")),(0,o.kt)("p",null,"No Windows, tool4d \xe9 uma aplica\xe7\xe3o de consola, pelo que o fluxo ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," \xe9 apresentado no terminal (cmd, powershell...)."),(0,o.kt)("admonition",n({},{title:"Notas",type:"note"}),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"tool4d \xe9 sempre executado sem \u2018interface\u2019 (a op\xe7\xe3o de linha de comando ",(0,o.kt)("inlineCode",{parentName:"li"},"headless")," \xe9 in\xfatil)."),(0,o.kt)("li",{parentName:"ul"},"O comando ",(0,o.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page494.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"Application type")),' devolve o valor 6 ("tool4d") quando chamado a partir da aplica\xe7\xe3o tool4d.'),(0,o.kt)("li",{parentName:"ul"},"o ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/Debugging/debugLogFiles#4ddiagnosticlogtxt"}),"ficheiro de registo de diagn\xf3stico"),' tem o prefixo "4DDiagnosticLogTool".'))),(0,o.kt)("h3",n({},{id:"funcionalidades-4d-desativadas"}),"Funcionalidades 4D desativadas"),(0,o.kt)("p",null,"Tenha em mente que tool4d roda automaticamente em ",(0,o.kt)("strong",{parentName:"p"},"modo headless")," (veja ",(0,o.kt)("inlineCode",{parentName:"p"},"--headless")," em ",(0,o.kt)("a",n({parentName:"p"},{href:"#launch-a-4d-application"}),"esta tabela"),"), e n\xe3o d\xe1 acesso ao IDE 4D nem a nenhum de seus servidores. Em particular, s\xe3o desactivadas as seguintes funcionalidades:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"servidor de aplica\xe7\xf5es, servidor Web, servidor SQL,"),(0,o.kt)("li",{parentName:"ul"},"programador de c\xf3pias de seguran\xe7a,"),(0,o.kt)("li",{parentName:"ul"},"ODBC e SQL pass-through,"),(0,o.kt)("li",{parentName:"ul"},"todos os componentes tais como 4D View Pro, 4D SVG, 4D NetKit...,"),(0,o.kt)("li",{parentName:"ul"},"corrector ortogr\xe1fico hunspell,"),(0,o.kt)("li",{parentName:"ul"},"corrector ortogr\xe1fico japon\xeas (library ",(0,o.kt)("em",{parentName:"li"},"mecab"),"),"),(0,o.kt)("li",{parentName:"ul"},"WebAdmin,"),(0,o.kt)("li",{parentName:"ul"},"CEF,"),(0,o.kt)("li",{parentName:"ul"},"PHP,"),(0,o.kt)("li",{parentName:"ul"},"depurador remoto (depurador local, o comando ",(0,o.kt)("inlineCode",{parentName:"li"},"TRACE")," e os pontos de interrup\xe7\xe3o s\xe3o ignorados em aplica\xe7\xf5es sem interface).")),(0,o.kt)("h2",n({},{id:"4d-server-em-modo-utilit\xe1rio"}),"4D Server em modo utilit\xe1rio"),(0,o.kt)("p",null,"Pode lan\xe7ar uma inst\xe2ncia 4D Server em modo utilit\xe1rio (sem interface) usando a op\xe7\xe3o CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"--utility"),". Neste caso, \xe9 accionado o seguinte fluxo de trabalho:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"4D Server executa o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"li"},"On Startup"),' (e todos os m\xe9todos "autom\xe1ticos" tais como ',(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/Users/editing#user-properties"}),"m\xe9todo usu\xe1rio"),"), excepto se o par\xe2metro ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," for passado."),(0,o.kt)("li",{parentName:"ol"},"4D Server executa o m\xe9todo designado pelo ",(0,o.kt)("inlineCode",{parentName:"li"},"--startup-method"),", se houver."),(0,o.kt)("li",{parentName:"ol"},"4D Server executa o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"li"},"On Exit"),", excepto se o par\xe2metro ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," for passado."),(0,o.kt)("li",{parentName:"ol"},"4D Server \xe9 encerrado.")),(0,o.kt)("admonition",n({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"Ao contr\xe1rio de tool4d, 4D Server em modo utilit\xe1rio tem todas as suas funcionalidades ativadas. No entanto, o servidor de aplica\xe7\xf5es e todos os outros servidores n\xe3o s\xe3o iniciados.")),(0,o.kt)("admonition",n({},{title:"Ver tamb\xe9m",type:"tip"}),(0,o.kt)("p",{parentName:"admonition"},"Veja ",(0,o.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/"}),"este post do blog")," para exemplos de como usar tool4d e 4D Server no modo utilit\xe1rio.")))}u.isMDXComponent=!0}}]);