"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59666],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40493:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});t(67294);var n=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"templates",title:"P\xe1ginas de plantillas"},l=void 0,s={unversionedId:"WebServer/templates",id:"version-20-R2/WebServer/templates",title:"P\xe1ginas de plantillas",description:"El servidor web de 4D le permite utilizar las p\xe1ginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de c\xf3digo HTML est\xe1tico y de referencias 4D a\xf1adidas mediante etiquetas de transformaci\xf3n como 4DTEXT, 4DIF o 4DINCLUDE. Estas etiquetas suelen insertarse como comentarios de tipo HTML (``) en el c\xf3digo fuente HTML.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/WebServer/templates.md",sourceDirName:"WebServer",slug:"/WebServer/templates",permalink:"/docs/es/WebServer/templates",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"templates",title:"P\xe1ginas de plantillas"},sidebar:"docs",previous:{title:"Desarrollo web",permalink:"/docs/es/WebServer/gettingStarted"},next:{title:"Procesamiento de peticiones HTTP",permalink:"/docs/es/WebServer/httpRequests"}},d={},c=[{value:"Etiquetas para las plantillas",id:"etiquetas-para-las-plantillas",level:2},{value:"An\xe1lisis de etiquetas",id:"an\xe1lisis-de-etiquetas",level:2},{value:"Acceso a los m\xe9todos 4D a trav\xe9s de la web",id:"acceso-a-los-m\xe9todos-4d-a-trav\xe9s-de-la-web",level:2},{value:"Prevenci\xf3n de la inserci\xf3n de c\xf3digos maliciosos",id:"prevenci\xf3n-de-la-inserci\xf3n-de-c\xf3digos-maliciosos",level:2}],p={toc:c};function u(e){var{components:a}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El servidor web de 4D le permite utilizar las p\xe1ginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de c\xf3digo HTML est\xe1tico y de referencias 4D a\xf1adidas mediante ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Tags/tags"}),"etiquetas de transformaci\xf3n")," como 4DTEXT, 4DIF o 4DINCLUDE. Estas etiquetas suelen insertarse como comentarios de tipo HTML (",(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--#4DTagName TagValue--\x3e"),") en el c\xf3digo fuente HTML."),(0,n.kt)("p",null,"Cuando estas p\xe1ginas son enviadas por el servidor HTTP, son analizadas y las etiquetas que contienen son ejecutadas y sustituidas por los datos resultantes. Las p\xe1ginas que reciben los navegadores son una combinaci\xf3n de elementos est\xe1ticos y valores procedentes del procesamiento 4D."),(0,n.kt)("p",null,"Por ejemplo, si se escribe en una p\xe1gina HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<P>Welcome to \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n")),(0,n.kt)("p",null,"El valor de la variable 4D ",(0,n.kt)("em",{parentName:"p"},"vtSiteName")," se insertar\xe1 en la p\xe1gina HTML."),(0,n.kt)("h2",r({},{id:"etiquetas-para-las-plantillas"}),"Etiquetas para las plantillas"),(0,n.kt)("p",null,"Las siguientes etiquetas 4D est\xe1n disponibles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4DTEXT, para insertar variables y expresiones 4D como texto,"),(0,n.kt)("li",{parentName:"ul"},"4DHTML, para insertar el c\xf3digo HTML,"),(0,n.kt)("li",{parentName:"ul"},"4DEVAL, para evaluar toda expresi\xf3n 4D,"),(0,n.kt)("li",{parentName:"ul"},"4DSCRIPT, para ejecutar un m\xe9todo 4D,"),(0,n.kt)("li",{parentName:"ul"},"4DINCLUDE, para incluir una p\xe1gina dentro de otra,"),(0,n.kt)("li",{parentName:"ul"},"4DBASE, para modificar la carpeta por defecto utilizada por la etiqueta 4DINCLUDE,"),(0,n.kt)("li",{parentName:"ul"},"4DCODE, para insertar el c\xf3digo 4D,"),(0,n.kt)("li",{parentName:"ul"},"4DIF, 4DELSE, 4DELSEIF y 4DENDIF, para insertar condiciones en el c\xf3digo HTML,"),(0,n.kt)("li",{parentName:"ul"},"4DLOOP y 4DENDLOOP, para hacer bucles en el c\xf3digo HTML,"),(0,n.kt)("li",{parentName:"ul"},"4DEACH y 4DENDEACH, para hacer bucles en colecciones, selecciones de entidades o propiedades de objetos.")),(0,n.kt)("p",null,"Estas etiquetas se describen en la p\xe1gina ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Tags/tags"}),"Etiquetas de transformaci\xf3n"),"."),(0,n.kt)("p",null,"Es posible combinar etiquetas. Por ejemplo, el siguiente c\xf3digo HTML es permitido:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n\n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n")),(0,n.kt)("h2",r({},{id:"an\xe1lisis-de-etiquetas"}),"An\xe1lisis de etiquetas"),(0,n.kt)("p",null,'Por razones de optimizaci\xf3n, el servidor web de 4D no realiza el an\xe1lisis del c\xf3digo fuente HTML cuando se llama a las p\xe1ginas HTML utilizando URLs simples con el sufijo ".HTML" o ".HTM".'),(0,n.kt)("p",null,"El an\xe1lisis del contenido de las p\xe1ginas plantillas enviadas por el servidor web de 4D tiene lugar cuando se llaman los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," (.htm, .html, .shtm, .shtml), ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND BLOB")," (text/html type BLOB) o ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND TEXT"),', as\xed como cuando se env\xedan p\xe1ginas llamadas mediante URLs. En este \xfaltimo caso, por razones de optimizaci\xf3n, las p\xe1ginas con sufijo ".htm" y ".html" NO se analizan. Para "forzar" el an\xe1lisis de las p\xe1ginas HTML en este caso, debe a\xf1adir el sufijo ".shtm" o ".shtml" (por ejemplo, ',(0,n.kt)("inlineCode",{parentName:"p"},"http://www.server.com/dir/page.shtm"),"). Un ejemplo del uso de este tipo de p\xe1gina se da en la descripci\xf3n del comando ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET STATISTICS"),". Las p\xe1ginas XML (.xml, .xsl) tambi\xe9n son compatibles y siempre son analizadas por 4D."),(0,n.kt)("p",null,"Tambi\xe9n puede llevar a cabo el an\xe1lisis sint\xe1ctico fuera del contexto web cuando utilice el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"PROCESS 4D TAGS"),"."),(0,n.kt)("p",null,"Internamente, el analizador funciona con cadenas UTF-16, pero los datos a analizar pueden haber sido codificados de forma diferente. Cuando las etiquetas contienen texto (por ejemplo ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),"), 4D convierte los datos cuando es necesario dependiendo de su origen y de la informaci\xf3n disponible (charset). A continuaci\xf3n se muestran los casos en los que 4D analiza las etiquetas contenidas en las p\xe1ginas HTML, as\xed como las conversiones realizadas:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Acci\xf3n / Comando"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"An\xe1lisis del contenido de las p\xe1ginas enviadas"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Soporte de la sintaxis $(*)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Conjunto de caracteres utilizados para el an\xe1lisis sint\xe1ctico de las etiquetas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"P\xe1ginas llamadas a trav\xe9s de URLs"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'X, excepto las p\xe1ginas con extensiones ".htm" o ".html"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'X, excepto las p\xe1ginas con extensiones ".htm" o ".html"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Uso del conjunto de caracteres pasado como par\xe1metro del encabezado "Content-Type" de la p\xe1gina. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Uso del conjunto de caracteres pasado como par\xe1metro del encabezado "Content-Type" de la p\xe1gina. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"No es necesaria la conversi\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'X, si el BLOB es de tipo "text/html'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Uso del conjunto de caracteres definido en el encabezado "Content-Type" de la respuesta. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inclusi\xf3n por la etiqueta ",(0,n.kt)("inlineCode",{parentName:"td"},"\x3c!--#4DINCLUDE--\x3e")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Uso del conjunto de caracteres pasado como par\xe1metro del encabezado "Content-Type" de la p\xe1gina. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"PROCESS 4D TAGS")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Datos de texto: no hay conversi\xf3n. Datos BLOB: conversi\xf3n autom\xe1tica del conjunto de caracteres Mac-Roman por compatibilidad")))),(0,n.kt)("p",null,"(*) La sintaxis alternativa basada en $ est\xe1 disponible para las etiquetas 4DHTML, 4DTEXT y 4DEVAL."),(0,n.kt)("h2",r({},{id:"acceso-a-los-m\xe9todos-4d-a-trav\xe9s-de-la-web"}),"Acceso a los m\xe9todos 4D a trav\xe9s de la web"),(0,n.kt)("p",null,"La ejecuci\xf3n de un m\xe9todo 4D con ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEACH"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DELSEIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DHTML"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DIF"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DLOOP"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT")," a partir de una petici\xf3n web est\xe1 sujeta al valor del atributo ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/WebServer/allowProject"}),"disponible v\xeda las etiquetas 4D y las URL (4DACTION...)")," definida en las propiedades del m\xe9todo. Si no se comprueba el atributo para el m\xe9todo, \xe9ste no puede ser llamado desde una petici\xf3n web."),(0,n.kt)("h2",r({},{id:"prevenci\xf3n-de-la-inserci\xf3n-de-c\xf3digos-maliciosos"}),"Prevenci\xf3n de la inserci\xf3n de c\xf3digos maliciosos"),(0,n.kt)("p",null,"Las etiquetas 4D aceptan diferentes tipos de datos como par\xe1metros: texto, variables, m\xe9todos, nombres de comandos, etc. Cuando estos datos son proporcionados por su propio c\xf3digo, no hay riesgo de inserci\xf3n de c\xf3digo malicioso ya que usted controla la entrada. Sin embargo, el c\xf3digo de su base de datos suele trabajar con datos que, en un momento u otro, fueron introducidos a trav\xe9s de una fuente externa (entrada del usuario, importaci\xf3n, etc.)."),(0,n.kt)("p",null,"En este caso, es aconsejable ",(0,n.kt)("strong",{parentName:"p"},"no utilizar")," etiquetas como ",(0,n.kt)("inlineCode",{parentName:"p"},"4DEVAL")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"4DSCRIPT"),", que eval\xfaan par\xe1metros, directamente con este tipo de datos."),(0,n.kt)("p",null,"Adem\xe1s, seg\xfan el ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Tags/tags#recursive-processing"}),"principio de recursividad"),", el c\xf3digo malicioso puede incluir a su vez etiquetas de transformaci\xf3n. En este caso, es imprescindible utilizar la etiqueta ",(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),'. Imagine, por ejemplo, un campo de formulario web llamado "Name", donde los usuarios deben introducir su nombre. Este nombre se muestra mediante una etiqueta ',(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--#4DHTML vName--\x3e")," en la p\xe1gina. Si el texto del",'tipo "\\" se inserta en lugar del nombre, la interpretaci\xf3n de esta etiqueta provocar\xe1 la salida de la aplicaci\xf3n. Para evitar este riesgo, basta con utilizar sistem\xe1ticamente la etiqueta ',(0,n.kt)("inlineCode",{parentName:"p"},"4DTEXT"),' en este caso. Como esta etiqueta escapa a los caracteres especiales de HTML, cualquier c\xf3digo recursivo malicioso que pueda haberse insertado no ser\xe1 reinterpretado. Para referirnos al ejemplo anterior, el campo "Name" contendr\xe1, en este caso, "',(0,n.kt)("inlineCode",{parentName:"p"},"&lt;!--#4DEVAL QUIT 4D--&gt;"),'" que no ser\xe1 transformado.'))}u.isMDXComponent=!0}}]);