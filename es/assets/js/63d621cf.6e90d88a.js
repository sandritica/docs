/*! For license information please see 63d621cf.6e90d88a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51756],{975874:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(474848),r=n(28453);const s={id:"client-server",title:"P\xe1gina Cliente/Servidor"},o=void 0,c={id:"settings/client-server",title:"P\xe1gina Cliente/Servidor",description:"Las p\xe1ginas Cliente-Servidor agrupan los par\xe1metros relacionados con el uso de la base de datos en modo cliente-servidor. Naturalmente, estas propiedades s\xf3lo se tienen en cuenta cuando la base de datos se utiliza en modo remoto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/es/settings/client-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"client-server",title:"P\xe1gina Cliente/Servidor"},sidebar:"docs",previous:{title:"P\xe1gina de respaldo",permalink:"/docs/es/settings/backup"},next:{title:"P\xe1gina Web",permalink:"/docs/es/settings/web"}},l={},d=[{value:"P\xe1gina Opciones red",id:"p\xe1gina-opciones-red",level:2},{value:"Red",id:"red",level:3},{value:"Publicar la base al inicio",id:"publicar-la-base-al-inicio",level:4},{value:"Nombre de publicaci\xf3n",id:"nombre-de-publicaci\xf3n",level:4},{value:"N\xfamero de puerto",id:"n\xfamero-de-puerto",level:4},{value:"4D Server y n\xfameros de puerto",id:"4d-server-y-n\xfameros-de-puerto",level:4},{value:"Autenticaci\xf3n del usuario con el servidor de dominio",id:"autenticaci\xf3n-del-usuario-con-el-servidor-de-dominio",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Capa de red",id:"capa-de-red",level:4},{value:"Tiempo antes de desconexi\xf3n Cliente-Servidor",id:"tiempo-antes-de-desconexi\xf3n-cliente-servidor",level:4},{value:"Comunicaci\xf3n cliente-servidor",id:"comunicaci\xf3n-cliente-servidor",level:3},{value:"Registrar los clientes al Inicio para Execute On Client",id:"registrar-los-clientes-al-inicio-para-execute-on-client",level:4},{value:"Cifrar las comunicaciones Cliente-Servidor",id:"cifrar-las-comunicaciones-cliente-servidor",level:4},{value:"Actualizar la carpeta Resources durante una sesi\xf3n",id:"actualizar-la-carpeta-resources-durante-una-sesi\xf3n",level:4},{value:"P\xe1gina Configuraci\xf3n IP",id:"p\xe1gina-configuraci\xf3n-ip",level:2},{value:"Tabla de configuraci\xf3n Autorizar-Rechazar",id:"tabla-de-configuraci\xf3n-autorizar-rechazar",level:3}];function t(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Las p\xe1ginas Cliente-Servidor agrupan los par\xe1metros relacionados con el uso de la base de datos en modo cliente-servidor. Naturalmente, estas propiedades s\xf3lo se tienen en cuenta cuando la base de datos se utiliza en modo remoto."}),"\n",(0,i.jsx)(a.h2,{id:"p\xe1gina-opciones-red",children:"P\xe1gina Opciones red"}),"\n",(0,i.jsx)(a.h3,{id:"red",children:"Red"}),"\n",(0,i.jsx)(a.h4,{id:"publicar-la-base-al-inicio",children:"Publicar la base al inicio"}),"\n",(0,i.jsx)(a.p,{children:"Esta opci\xf3n le permite indicar si la base de datos 4D Server aparecer\xe1 o no en la lista de bases de datos publicadas."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Cuando esta opci\xf3n est\xe1 marcada (por defecto), la base de datos se hace p\xfablica y aparece en la lista de bases de datos publicadas (pesta\xf1a",(0,i.jsx)(a.strong,{children:"Disponible"}),")."]}),"\n",(0,i.jsxs)(a.li,{children:["Cuando la opci\xf3n no est\xe1 marcada, la base de datos no se hace p\xfablica y no aparece en la lista de bases de datos publicadas. Para conectarse, los usuarios deben introducir manualmente la direcci\xf3n de la base de datos en la pesta\xf1a ",(0,i.jsx)(a.strong,{children:"Personalizada"})," de la caja de di\xe1logo de conexi\xf3n."]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Si modifica este par\xe1metro, deber\xe1 reiniciar la base del servidor para que se tenga en cuenta."})}),"\n",(0,i.jsx)(a.h4,{id:"nombre-de-publicaci\xf3n",children:"Nombre de publicaci\xf3n"}),"\n",(0,i.jsxs)(a.p,{children:["This option lets you change the publication name of a 4D Server database, ",(0,i.jsx)(a.em,{children:"i.e."}),", the name displayed on the dynamic ",(0,i.jsx)(a.strong,{children:"Available"})," tab of the connection dialog box (see the ",(0,i.jsx)(a.a,{href:"../Desktop/clientServer/md#opening-a-remote-project",children:"Opening a remote project"})," paragraph). Por defecto, 4D Server utiliza el nombre del archivo de proyecto. Puede introducir cualquier nombre personalizado que desee."]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Este par\xe1metro no se tiene en cuenta en las aplicaciones cliente-servidor personalizadas. En teor\xeda, la aplicaci\xf3n cliente se conecta directamente a la aplicaci\xf3n servidor, sin pasar por la caja de di\xe1logo de conexi\xf3n. Sin embargo, en caso de error, puede aparecer esta caja de di\xe1logo; en este caso, el nombre de publicaci\xf3n de la aplicaci\xf3n servidor es el nombre del proyecto compilado."})}),"\n",(0,i.jsx)(a.h4,{id:"n\xfamero-de-puerto",children:"N\xfamero de puerto"}),"\n",(0,i.jsx)(a.p,{children:"Esta opci\xf3n le permite cambiar el n\xfamero del puerto TCP en el que 4D Server publica la base de datos. Esta informaci\xf3n se almacena en el proyecto y en cada m\xe1quina cliente. Por defecto, el n\xfamero de puerto TCP utilizado por 4D Server y 4D en modo remoto es 19813."}),"\n",(0,i.jsx)(a.p,{children:"La personalizaci\xf3n de este valor es necesaria cuando desea utilizar varias aplicaciones 4D en la misma m\xe1quina; en este caso, debe especificar un n\xfamero de puerto diferente para cada aplicaci\xf3n.\nCuando se modifica este valor desde 4D Server o 4D, se transmite autom\xe1ticamente a todas las m\xe1quinas 4D conectadas a la base de datos."}),"\n",(0,i.jsxs)(a.p,{children:["Para actualizar las otras m\xe1quinas clientes que no est\xe9n conectadas, basta con introducir el nuevo n\xfamero de puerto (precedido de dos puntos) despu\xe9s de la direcci\xf3n IP del equipo servidor en la pesta\xf1a ",(0,i.jsx)(a.strong,{children:"Personalizado"})," de la caja de di\xe1logo de conexi\xf3n  Por ejemplo, si el nuevo n\xfamero de puerto es 19888:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:n(771906).A+"",width:"466",height:"488"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"S\xf3lo las bases de datos publicadas en el mismo puerto que el definido en 4D client son visibles en la p\xe1gina de publicaci\xf3n din\xe1mica TCP/IP."}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"4d-server-y-n\xfameros-de-puerto",children:"4D Server y n\xfameros de puerto"}),"\n",(0,i.jsx)(a.p,{children:"4D Server utiliza tres puertos TCP para las comunicaciones entre los servidores internos y los clientes:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"SQL Server"}),': 19812 por defecto (puede modificarse a trav\xe9s de la p\xe1gina "SQL/Configuraci\xf3n" de las Preferencias).']}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Servidor de aplicaciones"}),': 19813 por defecto (puede modificarse a trav\xe9s de la p\xe1gina "Cliente-Servidor/Configuraci\xf3n" de las Preferencias, ver arriba).']}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Servidor DB4D"})," (servidor de base de datos): 19814 por defecto. This port number cannot be modified directly but it always consists of the application server port number + 1.",(0,i.jsx)(a.br,{}),"\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.",(0,i.jsx)(a.br,{}),"\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly."]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"autenticaci\xf3n-del-usuario-con-el-servidor-de-dominio",children:"Autenticaci\xf3n del usuario con el servidor de dominio"}),"\n",(0,i.jsxs)(a.p,{children:["Esta opci\xf3n le permite implementar las funcionalidades SSO (",(0,i.jsx)(a.em,{children:"Single Sign On"}),") en su base de datos 4D Server en Windows. Al marcar esta opci\xf3n, 4D se conecta de forma transparente al directorio Active del servidor de dominio Windows y obtiene los tokens de autenticaci\xf3n disponibles. This option is described in the ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,i.jsx)(a.h4,{id:"service-principal-name",children:"Service Principal Name"}),"\n",(0,i.jsxs)(a.p,{children:["Cuando la autenticaci\xf3n \xfanica (SSO) est\xe1 activa (ver arriba), debe llenar este campo si desea utilizar Kerberos como protocolo de autenticaci\xf3n. This option is described in the ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,i.jsx)(a.h4,{id:"capa-de-red",children:"Capa de red"}),"\n",(0,i.jsxs)(a.p,{children:["Esta caja desplegable contiene 3 opciones de capa de red a elegir entre: ",(0,i.jsx)(a.strong,{children:"legacy"}),", ",(0,i.jsx)(a.strong,{children:"ServerNet"})," y ",(0,i.jsx)(a.strong,{children:"QUIC"})," (s\xf3lo en modo proyecto), que se utilizan para manejar las comunicaciones entre 4D Server y las m\xe1quinas 4D remotas (clientes)."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Legal"}),': esta antigua capa de red "Legal" sigue siendo soportada para garantizar la compatibilidad de las bases de datos creadas antes de la v15. Esta capa de red tambi\xe9n puede habilitarse por programaci\xf3n utilizando el comando ',(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"ServerNet"})," (por defecto): activa la capa de red de ServerNet en el servidor (disponible desde 4D v15)."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"QUIC"})," (disponible solo en modo proyecto): activa la capa de red QUIC en el servidor."]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Notas"}),":"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Al seleccionar esta opci\xf3n, se anula la opci\xf3n Utilizar capa de red heredada en caso de que se haya definido mediante el comando ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Puede saber si una aplicaci\xf3n 4D se est\xe1 ejecutando con una capa de red QUIC utilizando el comando ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/help/command/page1599.html",children:"Get application info"}),"."]}),"\n",(0,i.jsx)(a.li,{children:"Dado que QUIC utiliza el protocolo UDP, aseg\xfarese de que UDP est\xe1 permitido en la configuraci\xf3n de seguridad de su red."}),"\n",(0,i.jsx)(a.li,{children:"QUIC se conecta autom\xe1ticamente al puerto 19813 tanto para el servidor de aplicaciones como para el servidor DB4D."}),"\n",(0,i.jsxs)(a.li,{children:["Cuando se selecciona la opci\xf3n de capa QUIC:\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Cerca del selector aparece un mensaje beta y un icono de alerta."}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"#Client-Server-Connections-Timeout",children:"los par\xe1metros del tiempo de espera de las conexiones cliente-servidor"})," est\xe1n ocultos"]}),"\n",(0,i.jsxs)(a.li,{children:["La casilla de verificaci\xf3n ",(0,i.jsx)(a.a,{href:"#Encrypt-Client-Server-Communications",children:"Encriptar comunicaci\xf3n Cliente-Servidor"})," est\xe1 oculta (las comunicaciones QUIC son siempre en TLS, sea cual sea su modo seguro)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Compatibilidad"}),": necesita desplegar sus aplicaciones cliente/servidor con 4D v20 o superior antes de cambiar a la capa de red QUIC."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"En caso de modificaci\xf3n, deber\xe1 reiniciar la aplicaci\xf3n para que se tenga en cuenta el cambio. Toda aplicaci\xf3n cliente que estuviera conectada tambi\xe9n debe reiniciarse para poder conectarse con la nueva capa de red."})}),"\n",(0,i.jsx)(a.h4,{id:"tiempo-antes-de-desconexi\xf3n-cliente-servidor",children:"Tiempo antes de desconexi\xf3n Cliente-Servidor"}),"\n",(0,i.jsx)(a.p,{children:"Este dispositivo se utiliza para definir el tiempo de espera (periodo de inactividad m\xe1s all\xe1 del cual se cierra la conexi\xf3n) entre 4D Server y las m\xe1quinas cliente que se conectan a \xe9l. La opci\xf3n ilimitada elimina el tiempo de espera. Cuando se selecciona esta opci\xf3n, se elimina el control de la actividad del cliente."}),"\n",(0,i.jsx)(a.p,{children:"Cuando se selecciona un tiempo de espera, el servidor cerrar\xe1 la conexi\xf3n de un cliente si no recibe ninguna petici\xf3n de \xe9ste durante el tiempo l\xedmite especificado."}),"\n",(0,i.jsx)(a.h3,{id:"comunicaci\xf3n-cliente-servidor",children:"Comunicaci\xf3n cliente-servidor"}),"\n",(0,i.jsx)(a.h4,{id:"registrar-los-clientes-al-inicio-para-execute-on-client",children:"Registrar los clientes al Inicio para Execute On Client"}),"\n",(0,i.jsxs)(a.p,{children:["Cuando esta opci\xf3n est\xe1 marcada, todas las m\xe1quinas remotas 4D que se conectan a la base de datos pueden ejecutar m\xe9todos remotamente. Este mecanismo se detalla en la secci\xf3n ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html",children:"Procedimientos almacenados en las m\xe1quinas cliente"}),"."]}),"\n",(0,i.jsx)(a.h4,{id:"cifrar-las-comunicaciones-cliente-servidor",children:"Cifrar las comunicaciones Cliente-Servidor"}),"\n",(0,i.jsxs)(a.p,{children:["Esta opci\xf3n permite activar el modo seguro para las comunicaciones entre la m\xe1quina servidor y las m\xe1quinas remotas 4D. Esta opci\xf3n se detalla en la secci\xf3n ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html",children:"Cifrar las de conexiones cliente/servidor"}),"."]}),"\n",(0,i.jsx)(a.h4,{id:"actualizar-la-carpeta-resources-durante-una-sesi\xf3n",children:"Actualizar la carpeta Resources durante una sesi\xf3n"}),"\n",(0,i.jsxs)(a.p,{children:["This setting can be used to globally set the updating mode for the local instance of the ",(0,i.jsx)(a.strong,{children:"Resources"})," folder on the connected 4D machines when the ",(0,i.jsx)(a.strong,{children:"Resources"})," folder of the database is modified during the session (the ",(0,i.jsx)(a.strong,{children:"Resources"})," folder is automatically synchronized on the remote machine each time a session is opened). Hay tres par\xe1metros disponibles:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Nunca"}),": la carpeta local ",(0,i.jsx)(a.strong,{children:"Resources"})," no se actualiza durante la sesi\xf3n. La notificaci\xf3n enviada por el servidor es ignorada. La carpeta ",(0,i.jsx)(a.strong,{children:"Resources"})," local puede actualizarse manualmente mediante el comando ",(0,i.jsx)(a.strong,{children:"Update Local Resources"})," del men\xfa de acci\xf3n (ver ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html",children:"Uso del explorador de recursos"}),")."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Siempre"}),": la sincronizaci\xf3n de la carpeta local ",(0,i.jsx)(a.strong,{children:"Resources"})," se realiza autom\xe1ticamente durante la sesi\xf3n cada vez que el servidor env\xeda una notificaci\xf3n."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Preguntar"}),": cuando la notificaci\xf3n es enviada por el servidor, se muestra una caja de di\xe1logo en las m\xe1quinas cliente, indicando la modificaci\xf3n. The user can then accept or refuse the synchronization of the local ",(0,i.jsx)(a.strong,{children:"Resources"})," folder.",(0,i.jsx)(a.br,{}),"\nThe ",(0,i.jsx)(a.strong,{children:"Resources"})," folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Se pueden utilizar mecanismos autom\xe1ticos o manuales para notificar a cada cliente cu\xe1ndo se ha modificado el contenido de esta carpeta. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html",children:"Gesti\xf3n de la carpeta Resources"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"p\xe1gina-configuraci\xf3n-ip",children:"P\xe1gina Configuraci\xf3n IP"}),"\n",(0,i.jsx)(a.h3,{id:"tabla-de-configuraci\xf3n-autorizar-rechazar",children:"Tabla de configuraci\xf3n Autorizar-Rechazar"}),"\n",(0,i.jsx)(a.p,{children:"Esta tabla permite definir las reglas de control de acceso a la base en funci\xf3n de las direcciones IP de las m\xe1quinas 4D remotas. Esta opci\xf3n permite reforzar la seguridad, por ejemplo, para aplicaciones estrat\xe9gicas."}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Esta tabla de configuraci\xf3n no controla las conexiones web."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"El funcionamiento de la tabla de configuraci\xf3n es el siguiente:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:['La columna "Autorizar-Rechazar" permite seleccionar el tipo de regla a aplicar (Autorizar-Rechazar) mediante un men\xfa emergente. Para a\xf1adir una regla, haga clic en el bot\xf3n A\xf1adir. Aparece una nueva l\xednea en la tabla. El bot\xf3n ',(0,i.jsx)(a.strong,{children:"Borrar"})," permite eliminar la l\xednea actual."]}),"\n",(0,i.jsx)(a.li,{children:'La columna "Direcci\xf3n IP" permite designar las direcciones IP afectadas por la regla. Para especificar una direcci\xf3n, haga clic en la columna e introduzca la direcci\xf3n de la siguiente forma: 123.45.67.89 (formato IPv4) o 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Puede utilizar un caracter * (asterisco) para especificar las direcciones del tipo "comienza por". Por ejemplo, 192.168.* indica todas las direcciones que empiezan por 192.168.'}),"\n",(0,i.jsx)(a.li,{children:"La aplicaci\xf3n de las reglas se basa en el orden de visualizaci\xf3n de la tabla. Si dos reglas son contradictorias, se da prioridad a la regla situada m\xe1s arriba en la tabla. Puede reordenar las l\xedneas modificando la ordenaci\xf3n actual (haga clic en el encabezado de la columna para alternar la direcci\xf3n de la ordenaci\xf3n). Tambi\xe9n puede mover las l\xedneas utilizando arrastrar y soltar."}),"\n",(0,i.jsxs)(a.li,{children:["Por razones de seguridad, s\xf3lo las direcciones que realmente coincidan con una regla podr\xe1n conectarse. En otras palabras, si la tabla s\xf3lo contiene una o m\xe1s reglas de tipo Rechazar, todas las direcciones ser\xe1n rechazadas porque ninguna coincidir\xe1 con al menos una regla. Si desea denegar s\xf3lo determinadas direcciones (y permitir otras), a\xf1ada una regla Autorizar* al final de la tabla. Por ejemplo:\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Denegar 192.168.* (denegar todas las direcciones que empiecen por 192.168)"}),"\n",(0,i.jsx)(a.li,{children:"Autorizar * (y permitir todas las dem\xe1s direcciones)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Por defecto, 4D Server no aplica ninguna restricci\xf3n de conexi\xf3n: la primera l\xednea de la tabla contiene la etiqueta Autorizar y el caracter * (todas las direcciones)."})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},221020:(e,a,n)=>{var i=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,n){var i,s={},d=null,t=null;for(i in void 0!==n&&(d=""+n),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(t=a.ref),a)o.call(a,i)&&!l.hasOwnProperty(i)&&(s[i]=a[i]);if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===s[i]&&(s[i]=a[i]);return{$$typeof:r,type:e,key:d,ref:t,props:s,_owner:c.current}}a.Fragment=s,a.jsx=d,a.jsxs=d},474848:(e,a,n)=>{e.exports=n(221020)},771906:(e,a,n)=>{n.d(a,{A:()=>i});const i=n.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>c});var i=n(296540);const r={},s=i.createContext(r);function o(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);