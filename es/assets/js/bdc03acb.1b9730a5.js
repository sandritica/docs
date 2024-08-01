/*! For license information please see bdc03acb.1b9730a5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58219],{411084:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(474848),r=i(28453);const s={id:"monitor",title:"P\xe1gina Monitor"},o=void 0,l={id:"ServerWindow/monitor",title:"P\xe1gina Monitor",description:"La p\xe1gina Monitor muestra informaci\xf3n din\xe1mica relativa al uso de la base de datos, as\xed como informaci\xf3n sobre el sistema y la aplicaci\xf3n 4D Server.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/monitor",permalink:"/docs/es/20-R5/ServerWindow/monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmonitor.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"monitor",title:"P\xe1gina Monitor"},sidebar:"docs",previous:{title:"Ventana de administraci\xf3n de 4D Server",permalink:"/docs/es/20-R5/ServerWindow/overview"},next:{title:"P\xe1gina Usuarios",permalink:"/docs/es/20-R5/ServerWindow/users"}},t={},d=[{value:"\xc1rea gr\xe1fica",id:"\xe1rea-gr\xe1fica",level:2},{value:"Visi\xf3n general del \xe1rea",id:"visi\xf3n-general-del-\xe1rea",level:2},{value:"\xc1rea Detalles",id:"\xe1rea-detalles",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["La p\xe1gina ",(0,n.jsx)(a.strong,{children:"Monitor"})," muestra informaci\xf3n din\xe1mica relativa al uso de la base de datos, as\xed como informaci\xf3n sobre el sistema y la aplicaci\xf3n 4D Server."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(216220).A+"",width:"1036",height:"699"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:'En Windows, parte de la informaci\xf3n del sistema que se muestra en esta p\xe1gina se recupera a trav\xe9s de las herramientas del "Analizador de rendimiento" de Windows. S\xf3lo se puede acceder a estas herramientas cuando el usuario que abri\xf3 la sesi\xf3n donde se lanz\xf3 4D Server tiene la autorizaci\xf3n de administraci\xf3n necesaria.'}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"\xe1rea-gr\xe1fica",children:"\xc1rea gr\xe1fica"}),"\n",(0,n.jsx)(a.p,{children:"El \xe1rea gr\xe1fica permite ver la evoluci\xf3n en tiempo real de varios par\xe1metros: el uso de la CPU, el tr\xe1fico de red y el estado de la memoria. Se selecciona el par\xe1metro que se va a mostrar a trav\xe9s de un men\xfa que se encuentra en el centro de la ventana:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(691285).A+"",width:"305",height:"162"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Uso de la CPU"}),': uso global de la CPU de la m\xe1quina, para todas las aplicaciones en conjunto. La parte espec\xedfica de 4D Server en esta tasa de uso se ofreced en el \xe1rea de informaci\xf3n "Procesadores".']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Red"}),': n\xfamero de bytes recibidos por segundo por la m\xe1quina (servidor o cliente). El n\xfamero de bytes enviados se suministra en el \xe1rea de informaci\xf3n "Red".']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Memoria f\xedsica"}),': cantidad de memoria RAM de la m\xe1quina utilizada por 4D Server. En el \xe1rea de informaci\xf3n "Memoria" se ofrece una visi\xf3n m\xe1s detallada del uso de la memoria.']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Memoria virtual"}),": cantidad de memoria virtual utilizada por la aplicaci\xf3n 4D Server. Esta memoria es asignada por el sistema en funci\xf3n de las necesidades de la aplicaci\xf3n. El valor que se encuentra en la parte inferior derecha del \xe1rea indica la cantidad de memoria que se est\xe1 utilizando actualmente. El valor que se encuentra en la parte superior izquierda indica la cantidad m\xe1xima de memoria virtual utilizable. El valor m\xe1ximo se calcula din\xe1micamente en funci\xf3n de la configuraci\xf3n general de la memoria de la aplicaci\xf3n."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Cach\xe9"}),": cantidad de memoria cach\xe9 utilizada por la aplicaci\xf3n 4D Server. El valor que se encuentra en la parte inferior derecha del \xe1rea indica la cantidad de memoria que se est\xe1 utilizando actualmente. The value found at the bottom right of the area indicates the quantity of memory currently being used."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Tenga en cuenta que cuando se selecciona esta opci\xf3n, el desplazamiento del \xe1rea gr\xe1fica se ralentiza, ya que un an\xe1lisis eficaz de la memoria cach\xe9 se realiza generalmente durante un per\xedodo de observaci\xf3n bastante largo."}),"\n",(0,n.jsx)(a.h2,{id:"visi\xf3n-general-del-\xe1rea",children:"Visi\xf3n general del \xe1rea"}),"\n",(0,n.jsx)(a.p,{children:'El \xe1rea "Visi\xf3n general" ofrece diferente informaci\xf3n sobre el sistema, la aplicaci\xf3n y las licencias instaladas en la m\xe1quina 4D Server.'}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Informaci\xf3n sistema"}),": ordenador, sistema y direcci\xf3n IP del servidor"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Informaci\xf3n aplicaci\xf3n"}),": n\xfamero de versi\xf3n interna de 4D Server y estado de Volume Shadow Copy"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Conexiones m\xe1ximas"}),": n\xfamero de conexiones simult\xe1neas permitidas por tipo de servidor"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Licencia"}),": descripci\xf3n de la licencia. Cuando la licencia producto o una de sus expansiones adjuntas vence en menos de 10 d\xedas, por ejemplo en el caso de una licencia de suscripci\xf3n, 4D Server intenta renovar autom\xe1ticamente la licencia desde la cuenta del usuario 4D. En este caso, si la renovaci\xf3n autom\xe1tica ha fallado por alguna raz\xf3n (error de conexi\xf3n, estado de la cuenta inv\xe1lido, contrato no prolongado...), se muestra un icono de advertencia junto a la licencia para alertar al administrador del servidor. Se puede mostrar informaci\xf3n adicional sobre el estado de la renovaci\xf3n de la licencia en un consejo cuando se pasa el rat\xf3n por sobre el \xe1rea:"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(395648).A+"",width:"502",height:"91"})}),"\n",(0,n.jsxs)(a.p,{children:["Generalmente, tendr\xe1 que verificar el ",(0,n.jsx)(a.a,{href:"/docs/es/20-R5/Admin/licenses",children:(0,n.jsx)(a.strong,{children:"Administrador de licencias"})}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"\xe1rea-detalles",children:"\xc1rea Detalles"}),"\n",(0,n.jsx)(a.p,{children:'El \xe1rea "Detalles" repite parte de la informaci\xf3n mostrada en el \xe1rea gr\xe1fica y ofrece tambi\xe9n informaci\xf3n adicional.'}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Disco duro"}),": capacidad global del disco duro y distribuci\xf3n del espacio utilizado por los datos de la base de datos (archivo de datos + \xedndice de datos), el espacio utilizado por otros archivos y el espacio libre disponible."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Memoria"}),": memoria RAM instalada en la m\xe1quina y cantidad de memoria utilizada por 4D Server, por otras aplicaciones o que est\xe1 disponible. La memoria utilizada por 4D Server tambi\xe9n puede mostrarse din\xe1micamente en el \xe1rea gr\xe1fica."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Procesadores"}),": tasa instant\xe1nea de ocupaci\xf3n de procesador(es) de la m\xe1quina por 4D Server y por otras aplicaciones. Esta tasa se recalcula constantemente. La tasa de ocupaci\xf3n por 4D Server tambi\xe9n puede mostrarse din\xe1micamente en el \xe1rea gr\xe1fica."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Red"}),": n\xfamero instant\xe1neo de bytes enviados y recibidos por la m\xe1quina (servidor o cliente). Este valor se actualiza constantemente. El n\xfamero de bytes recibidos tambi\xe9n puede mostrarse din\xe1micamente en el \xe1rea gr\xe1fica."]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,a,i)=>{var n=i(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,i){var n,s={},d=null,c=null;for(n in void 0!==i&&(d=""+i),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(c=a.ref),a)o.call(a,n)&&!t.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:r,type:e,key:d,ref:c,props:s,_owner:l.current}}a.Fragment=s,a.jsx=d,a.jsxs=d},474848:(e,a,i)=>{e.exports=i(221020)},216220:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/server-admin-6de46e4a6646d48d476ad5d9f78274d3.png"},691285:(e,a,i)=>{i.d(a,{A:()=>n});const n="data:image/png;base64,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"},395648:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/server-licence-failed-344940a57ec088cf090ffa990c427a47.png"},28453:(e,a,i)=>{i.d(a,{R:()=>o,x:()=>l});var n=i(296540);const r={},s=n.createContext(r);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);