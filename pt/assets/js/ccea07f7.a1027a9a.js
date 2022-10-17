"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});n(67294);var r=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const o={id:"users",title:"P\xe1gina Usu\xe1rios"},i=void 0,c={unversionedId:"ServerWindow/users",id:"version-19-R6/ServerWindow/users",title:"P\xe1gina Usu\xe1rios",description:"The Users page lists the 4D users connected to the server.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/ServerWindow/users.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/users",permalink:"/docs/pt/19-R6/ServerWindow/users",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"users",title:"P\xe1gina Usu\xe1rios"},sidebar:"docs",previous:{title:"Monitor Page",permalink:"/docs/pt/19-R6/ServerWindow/monitor"},next:{title:"Processes Page",permalink:"/docs/pt/19-R6/ServerWindow/processes"}},l={},h=[{value:"List of Users",id:"list-of-users",level:2},{value:"Managing sleeping users",id:"managing-sleeping-users",level:3},{value:"Search/filtering Area",id:"searchfiltering-area",level:2},{value:"Administration Buttons",id:"administration-buttons",level:2},{value:"Send message",id:"send-message",level:3},{value:"Watch Processes",id:"watch-processes",level:3},{value:"Drop user",id:"drop-user",level:3}],p={toc:h};function u(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",s({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Users")," page lists the 4D users connected to the server."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(36373).Z,width:"1034",height:"163"})),(0,r.kt)("p",null,'The "Users" button indicates, in parentheses, the total number of users connected to the server (this number does not take into account any display filters applied to the window). The page also contains a dynamic search area and control buttons. You can modify the order of the columns by dragging and dropping their header areas.'),(0,r.kt)("p",null,"You can also sort the list of column values by clicking on its header. Click several times to specify in turn an ascending/descending order."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15940).Z,width:"116",height:"20"})),(0,r.kt)("h2",s({},{id:"list-of-users"}),"List of Users"),(0,r.kt)("p",null,"For each user connected to the server, the list provides the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System of the client machine (macOS or Windows) as an icon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"4D User"),": Name of the 4D user, or alias if set with the ",(0,r.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1666.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SET USER ALIAS")),' command on the user machine. If passwords are not activated and no alias has been set, all users are named "Designer".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Machine name"),": Name of the remote machine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Session name"),": Name of the session opened on the remote machine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IP Address"),": IP address of the remote machine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Login date"),": Date and time of the remote machine connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU Time"),": CPU time consumed by this user since connecting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Activity"),': Ratio of time that 4D Server devotes to this user (dynamic display). "Sleeping" if the remote machine has switched to sleep mode (see below).')),(0,r.kt)("h3",s({},{id:"managing-sleeping-users"}),"Managing sleeping users"),(0,r.kt)("p",null,"4D Server specifically handles cases where a machine running a 4D remote application switches to sleep mode while its connection to the server machine is still active. In this case, the connected 4D remote application automatically notifies 4D Server of its imminent disconnection. On the server, the connected user changes to a ",(0,r.kt)("strong",{parentName:"p"},"Sleeping")," activity status:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67250).Z,width:"1139",height:"202"})),(0,r.kt)("p",null,"This status frees up resources on the server. In addition, the 4D remote application reconnects to 4D Server automatically after waking up from sleep mode."),(0,r.kt)("p",null,"The following scenario is supported: a remote user stops working for awhile, for example during a lunch break, but keeps the connection to the server open. The machine switches to sleep mode. When the user returns, they wake the machine up and the 4D remote application automatically recovers its connection to the server as well as the session context."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A sleeping remote session is automatically dropped by the server after 48 hours of inactivity. You can modify this default timeout using the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SET DATABASE PARAMETER"))," command with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote connection sleep timeout")," selector.")),(0,r.kt)("h2",s({},{id:"searchfiltering-area"}),"Search/filtering Area"),(0,r.kt)("p",null,"This feature can be used to reduce the number of rows displayed in the list to those that correspond to the text entered in the search area. The area indicates the columns where the search/filtering will be carried out. On the Users page, it will be the 4D User, Machine name and Session name columns."),(0,r.kt)("p",null,"The list is updated in real time as you enter text in the area. It is possible to enter more than one value to be searched for: separate the values with a semi-colon. The ",(0,r.kt)("inlineCode",{parentName:"p"},"OR"),' type operator is used in this case. For example, if you enter "John;Mary;Peter," only rows with John OR Mary OR Peter in the target columns will be kept.'),(0,r.kt)("h2",s({},{id:"administration-buttons"}),"Administration Buttons"),(0,r.kt)("p",null,"This page includes three control buttons. These are active if at least one row is selected. You can select several rows by holding down the ",(0,r.kt)("strong",{parentName:"p"},"Shift")," key for an adjacent selection or ",(0,r.kt)("strong",{parentName:"p"},"Ctrl")," (Windows) / ",(0,r.kt)("strong",{parentName:"p"},"Command")," (macOS) key for a non-adjacent selection."),(0,r.kt)("h3",s({},{id:"send-message"}),"Send message"),(0,r.kt)("p",null,"This button can be used to send a message to the 4D users selected in the window. If no user is selected, the button is not active. When you click on this button, a dialog box appears that lets you enter the message. The dialog box indicates the number of users that will receive this message:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58881).Z,width:"460",height:"229"})),(0,r.kt)("p",null,"The message will be displayed as an alert on the remote machines."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can perfom the same action for remote users with the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1632.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SEND MESSAGE TO REMOTE USER"))," command.")),(0,r.kt)("h3",s({},{id:"watch-processes"}),"Watch Processes"),(0,r.kt)("p",null,"This button can be used to directly show the processes of the user(s) selected on the ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/pt/19-R6/ServerWindow/processes"}),(0,r.kt)("strong",{parentName:"a"},"Processes")," page")," of the window. When you click on this button, 4D Server switches to the Processes page and enters the selected user names in the search/filtering area."),(0,r.kt)("h3",s({},{id:"drop-user"}),"Drop user"),(0,r.kt)("p",null,"This button can be used to force the selected user(s) to disconnect. When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down ",(0,r.kt)("strong",{parentName:"p"},"Alt")," key while clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Drop user")," button to disconnect the selected user(s) directly without displaying the confirmation dialog box)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can perfom the same action for remote users with the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1633.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"DROP REMOTE USER"))," command.")))}u.isMDXComponent=!0},58881:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},67250:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-sleeping-215c7c2ed0334b24d86018ba014b2788.png"},15940:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAUCAIAAADTDI4qAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kJAg41DhHrjwYAAAImSURBVHic7VjNSgMxEJ6sdavSWg/+YBFEEG8efASPehA9CXrwMQTPXvUt9CZKH0EfQLCgoJ4U/KkHW/u3m+4mRqIxzWZb6W5dLfuxDDOTyST5mAxL0EvhBr6QyUxCjDBQKj0yaUS9jV5GosmiNKJt9BAQEupn5d7eXI2OzUa0nZ5F3Ba6iL9IrjmQbuv5F0i0D/kxBAXYKst0MNMvWDvUMwiTXM6p4EsosvNfI3dy6De0srrhdUbTFjjdSoEznX9+Hq7IZtt4JSAgtAy28P+VnivoVupd9oB0CeRRQbocr50eHF4e/ZiFrpIrCifE4ylEeytX2UBY68qQ2WzBLKg9V/oB7hxfSbBd0Y6byRQ03+7PSHl1rrf0KPm5yZMzXTEDnEeDlbXN3PEBk63DomkL/PCCgoDgDIrMykLB82vRllkI+VeMl2Qy1cGR2BSZI63Hb1QuUj8zEoT5tvDdECn90H2yKUPCbGrNOo9mojZYZ/4evG8LMboBFL/ndgP8PTdRr7wJ1/DdHhqcNobGaTFPSxeGdU+q90AsQoDVOrtdsVQk6wHYBcI+AAsDdsBxwFzYJRNLjE90eXEqyJ0aLg9e76C5bZJIgVUw8LNbPO9zytjImKQUS690ccV2aOP1smEV6xYQCgNDI9mt16v82UflVqs1QW56frnI5hSOTPuO1h+o/YScGkHIQEmXYMMwY6nIhtPANtRrVYzBTWb7Z9azi/uMSc7qOw86iLS/1FGTAAAAAElFTkSuQmCC"},36373:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-users-a5fbe263f9a5f955ad40cf79716ba37b.png"}}]);