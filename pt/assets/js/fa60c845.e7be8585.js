"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69052],{3905:(e,o,a)=>{a.d(o,{Zo:()=>p,kt:()=>u});var t=a(67294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),l=function(e){var o=t.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):n(n({},o),e)),a},p=function(e){var o=l(e.components);return t.createElement(d.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,b=m["".concat(d,".").concat(u)]||m[u]||c[u]||s;return a?t.createElement(b,n(n({ref:o},p),{},{components:a})):t.createElement(b,n({ref:o},p))}));function u(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=m;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var l=2;l<s;l++)n[l]=a[l];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23567:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>p});a(67294);var t=a(3905);function r(){return r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function s(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const n={id:"shared",title:"Objetos e cole\xe7\xf5es compartilhados"},i=void 0,d={unversionedId:"Concepts/shared",id:"version-20/Concepts/shared",title:"Objetos e cole\xe7\xf5es compartilhados",description:"Os objectos partilhados e as cole\xe7\xf5es partilhadas  s\xe3o objectos espec\xedficos  e cole\xe7\xf5es  cujos conte\xfados s\xe3o partilhados entre processos. Ao contr\xe1rio das vari\xe1veis interprocessos, os objetos partilhados e as cole\xe7\xf5es partilhadas t\xeam a vantagem de serem compat\xedveis com processos 4D preemptivos: podem ser passados por refer\xeancia como par\xe2metros de comandos como New process ou CALL WORKER.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/pt/20/Concepts/shared",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"shared",title:"Objetos e cole\xe7\xf5es compartilhados"},sidebar:"docs",previous:{title:"Par\xe2metros",permalink:"/docs/pt/20/Concepts/parameters"},next:{title:"Classes",permalink:"/docs/pt/20/Concepts/classes"}},l={},p=[{value:"Utiliza\xe7\xe3o de objetos ou cole\xe7\xf5es compartidos",id:"utiliza\xe7\xe3o-de-objetos-ou-cole\xe7\xf5es-compartidos",level:2},{value:"Modifica\xe7\xe3o",id:"modifica\xe7\xe3o",level:3},{value:"Leitura",id:"leitura",level:3},{value:"Duplica\xe7\xe3o",id:"duplica\xe7\xe3o",level:3},{value:"Armazenamento",id:"armazenamento",level:3},{value:"Use... End use",id:"use-end-use",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2}],c={toc:p};function m(e){var{components:o}=e,a=s(e,["components"]);return(0,t.kt)("wrapper",r({},c,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Os objectos partilhados")," e as cole\xe7\xf5es partilhadas *",(0,t.kt)("strong",{parentName:"p"},"* s\xe3o objectos espec\xedficos ",(0,t.kt)("a",r({parentName:"strong"},{href:"/docs/pt/20/Concepts/object"}))," e cole\xe7\xf5es ",(0,t.kt)("a",r({parentName:"strong"},{href:"/docs/pt/20/Concepts/collection"}))," cujos conte\xfados s\xe3o partilhados entre processos. Ao contr\xe1rio das ",(0,t.kt)("a",r({parentName:"strong"},{href:"/docs/pt/20/Concepts/variables#interprocess-variables"}),"vari\xe1veis interprocessos"),", os objetos partilhados e as cole\xe7\xf5es partilhadas t\xeam a vantagem de serem compat\xedveis com "),"processos 4D preemptivos**: podem ser passados por refer\xeancia como par\xe2metros de comandos como ",(0,t.kt)("inlineCode",{parentName:"p"},"New process")," ou ",(0,t.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),"."),(0,t.kt)("p",null,"Os objetos partilhados e as cole\xe7\xf5es partilhadas podem ser armazenados em vari\xe1veis de tipo normalizadas ",(0,t.kt)("inlineCode",{parentName:"p"},"Object")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"Collection")," , mas t\xeam de ser instanciados utilizando comandos espec\xedficos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para criar um objeto partilhado, utilize o comando ",(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,t.kt)("inlineCode",{parentName:"a"},"New shared object"))," ,"),(0,t.kt)("li",{parentName:"ul"},"Para criar uma cole\xe7\xe3o partilhada, utilize o comando ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/API/CollectionClass#new-shared-collection"}),(0,t.kt)("inlineCode",{parentName:"a"},"New shared collection"))," .")),(0,t.kt)("admonition",r({},{type:"note"}),(0,t.kt)("p",{parentName:"admonition"},"Os objectos e cole\xe7\xf5es partilhados podem ser definidos como propriedades de objetos ou cole\xe7\xf5es padr\xe3o (n\xe3o partilhados).")),(0,t.kt)("p",null,"Para modificar um objeto/cole\xe7\xe3o partilhado, \xe9 necess\xe1rio chamar a estrutura ",(0,t.kt)("strong",{parentName:"p"},"Use...End use")," . A leitura de um valor de objeto/cole\xe7\xe3o partilhado n\xe3o requer ",(0,t.kt)("strong",{parentName:"p"},"Use...End use"),"."),(0,t.kt)("p",null,"Um cat\xe1logo \xfanico e global devolvido  pelo comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Storage")," est\xe1 sempre dispon\xedvel em todo o banco de dados e seus componentes, e pode ser utilizado para armazenar todos os objetos e cole\xe7\xf5es compartidos."),(0,t.kt)("h2",r({},{id:"utiliza\xe7\xe3o-de-objetos-ou-cole\xe7\xf5es-compartidos"}),"Utiliza\xe7\xe3o de objetos ou cole\xe7\xf5es compartidos"),(0,t.kt)("p",null,"Uma vez instanciados com os comandos ",(0,t.kt)("inlineCode",{parentName:"p"},"New shared object")," ou ",(0,t.kt)("inlineCode",{parentName:"p"},"New shared collection")," , as propriedades e os elementos do objeto/cole\xe7\xe3o partilhados podem ser modificados ou lidos a partir de qualquer processo da aplica\xe7\xe3o, sob determinadas condi\xe7\xf5es."),(0,t.kt)("h3",r({},{id:"modifica\xe7\xe3o"}),"Modifica\xe7\xe3o"),(0,t.kt)("p",null,"As modifica\xe7\xf5es podem ser aplicadas a objetos partilhados e cole\xe7\xf5es partilhadas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"adicionar ou remover propriedades de objectos,"),(0,t.kt)("li",{parentName:"ul"},"adicionar ou editar valores (desde que sejam suportados em objetos partilhados), incluindo outros objetos partilhados ou cole\xe7\xf5es (que criam um grupo partilhado, ver abaixo).")),(0,t.kt)("p",null,"Todas as instru\xe7\xf5es de modifica\xe7\xe3o num objeto ou cole\xe7\xe3o partilhados t\xeam de ser protegidas dentro de um bloco ",(0,t.kt)("a",r({parentName:"p"},{href:"#use-end-use"}),(0,t.kt)("inlineCode",{parentName:"a"},"Use...End use"))," , caso contr\xe1rio \xe9 gerado um erro."),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n')),(0,t.kt)("p",null,"Por conveni\xeancia, todas as fun\xe7\xf5es de cole\xe7\xe3o ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/CollectionClass"}))," que modificam o objeto partilhado ou a cole\xe7\xe3o inserem um bloco interno ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," para que n\xe3o tenha de o codificar. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$col:=New shared collection()\n$col.push("alpha") //.push() desencadeia internamente a utiliza\xe7\xe3o Use/End, pelo que n\xe3o \xe9 necess\xe1rio faz\xea-lo voc\xea mesmo\n')),(0,t.kt)("p",null,"Se precisar de executar v\xe1rias modifica\xe7\xf5es na mesma cole\xe7\xe3o, pode proteger todas as modifica\xe7\xf5es com um \xfanico ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," para que as modifica\xe7\xf5es sejam executadas atomicamente."),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$col:=Storage.mySharedCollection\nUse($col)\n    $col[0]:="omega" //modificar um elemento tem de ser efetuado dentro de Use/End use\n    $col.push("alpha") //.push() desencadeia internamente Use/End use, mas queremos fazer ambas as modifica\xe7\xf5es atomicamente\nEnd Use\n')),(0,t.kt)("p",null,"Um objeto/cole\xe7\xe3o partilhado s\xf3 pode ser modificado por um processo de cada vez. ",(0,t.kt)("inlineCode",{parentName:"p"},"Use")," bloqueia o objeto/cole\xe7\xe3o compartido para outras threads, enquanto que o \xfaltimo ",(0,t.kt)("inlineCode",{parentName:"p"},"End use")," desbloqueia todos os objetos e cole\xe7\xf5es. . A tentativa de modificar um objeto/cole\xe7\xe3o partilhado sem pelo menos um ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," gera um erro. Quando um processo chama ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," num objeto/cole\xe7\xe3o partilhado que j\xe1 est\xe1 a ser utilizado por outro processo, este \xe9 simplesmente colocado em espera at\xe9 que o ",(0,t.kt)("inlineCode",{parentName:"p"},"End use")," o desbloqueie (n\xe3o \xe9 gerado qualquer erro). Consequentemente, as instru\xe7\xf5es em ",(0,t.kt)("inlineCode",{parentName:"p"},"Use... End use")," estruturas devem ser executadas rapidamente e desbloquear os elementos o mais rapidamente poss\xedvel. Assim, recomenda-se vivamente que se evite modificar um objeto partilhado ou uma cole\xe7\xe3o diretamente a partir da interface, por exemplo, atrav\xe9s de uma caixa de di\xe1logo."),(0,t.kt)("p",null,"A atribui\xe7\xe3o de objectos/colec\xe7\xf5es partilhados a propriedades ou elementos de outros objectos/colec\xe7\xf5es partilhados \xe9 permitida e cria ",(0,t.kt)("strong",{parentName:"p"},"grupos partilhados"),". Um grupo partilhado \xe9 criado automaticamente quando um objeto/cole\xe7\xe3o partilhado \xe9 definido como valor de propriedade ou elemento de outro objeto/cole\xe7\xe3o partilhado. Os grupos partilhados permitem o aninhamento de objectos e colec\xe7\xf5es partilhados, mas imp\xf5em regras adicionais:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Chamar ",(0,t.kt)("inlineCode",{parentName:"li"},"Utilizar")," num objeto/cole\xe7\xe3o partilhado pertencente a um grupo bloqueia propriedades/elementos de todos os objectos/cole\xe7\xf5es partilhados do grupo e incrementa o seu contador de bloqueio. Chamando ",(0,t.kt)("inlineCode",{parentName:"li"},"End use")," diminui o contador de bloqueio do grupo e quando o contador estiver a 0, todos os objectos/colec\xe7\xf5es partilhados ligados s\xe3o desbloqueados."),(0,t.kt)("li",{parentName:"ul"},"Um objeto/cole\xe7\xe3o partilhado s\xf3 pode pertencer a um grupo partilhado. \xc9 devolvido um erro se tentar definir um objeto/cole\xe7\xe3o partilhado j\xe1 agrupado para um grupo diferente."),(0,t.kt)("li",{parentName:"ul"},"Os objetos/cole\xe7\xf5es partilhados agrupados n\xe3o podem ser desagrupados. Uma vez inclu\xeddo num grupo partilhado, um objeto/cole\xe7\xe3o partilhado est\xe1 permanentemente ligado a esse grupo durante toda a sess\xe3o. Mesmo que todas as refer\xeancias de um objeto/cole\xe7\xe3o sejam removidas do objeto/cole\xe7\xe3o pai, permanecer\xe3o linkadas.")),(0,t.kt)("p",null,"Consulte o exemplo 2 para ver uma ilustra\xe7\xe3o das regras de grupos partilhados."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:")," Os grupos partilhados s\xe3o geridos atrav\xe9s de uma propriedade interna denominada ",(0,t.kt)("em",{parentName:"p"},"identificador de bloqueio"),". Para obter informa\xe7\xf5es detalhadas sobre este valor, consulte a Refer\xeancia da Linguagem 4D."),(0,t.kt)("h3",r({},{id:"leitura"}),"Leitura"),(0,t.kt)("p",null,"Ao chamar a ",(0,t.kt)("inlineCode",{parentName:"p"},"Use")," em um objeto/colecci\xf3n compartido de um grupo se bloquear\xe3o as propriedades/elementos de todos os objetos/cole\xe7\xf5es compartidos que perten\xe7am ao mesmo grupo."),(0,t.kt)("p",null,"However, it is necessary to read a shared object/collection within ",(0,t.kt)("inlineCode",{parentName:"p"},"Use... End use")," when several values are linked together and must be read at once, for consistency reasons."),(0,t.kt)("h3",r({},{id:"duplica\xe7\xe3o"}),"Duplica\xe7\xe3o"),(0,t.kt)("p",null,"\xc9 poss\xedvel chamar ",(0,t.kt)("inlineCode",{parentName:"p"},"OB Copy")," com um objeto partilhado (ou com um objeto que contenha objetos partilhados como propriedades), mas devolver\xe1 um objeto padr\xe3o (n\xe3o partilhado), incluindo os objetos nele contidos (se existirem)."),(0,t.kt)("h3",r({},{id:"armazenamento"}),"Armazenamento"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Armazenamento")," \xe9 um objeto partilhado \xfanico, automaticamente dispon\xedvel em cada aplica\xe7\xe3o e m\xe1quina. Este objeto partilhado \xe9 devolvido pelo comando ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1525.html"}),(0,t.kt)("inlineCode",{parentName:"a"},"Storage"))," . \xc9 poss\xedvel utilizar este objeto para fazer refer\xeancia a todos os objetos/cole\xe7\xf5es partilhados definidos durante a sess\xe3o que se pretende que estejam dispon\xedveis a partir de quaisquer processos preemptivos ou padr\xe3o."),(0,t.kt)("p",null,"Note-se que, ao contr\xe1rio dos objetos partilhados padr\xe3o, o objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"storage")," n\xe3o cria um grupo partilhado quando s\xe3o adicionados objetos/cole\xe7\xf5es partilhados como suas propriedades. Esta exce\xe7\xe3o permite que o objeto ",(0,t.kt)("strong",{parentName:"p"},"Storage")," seja utilizado sem bloquear todos os objectos partilhados ou colec\xe7\xf5es ligados."),(0,t.kt)("p",null,"Para mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Storage")," ."),(0,t.kt)("h2",r({},{id:"use-end-use"}),"Use... End use"),(0,t.kt)("p",null,"A sintaxe formal da estrutura ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," \xe9 a seguinte:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"})," Use(Shared_object_or_Shared_collection)\n    statement(s)\n End use\n")),(0,t.kt)("p",null,"A estrutura ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," define uma sequ\xeancia de instru\xe7\xf5es que executar\xe3o tarefas no par\xe2metro ",(0,t.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," sob a prote\xe7\xe3o de um sem\xe1foro interno. ",(0,t.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," pode ser qualquer objeto partilhado ou cole\xe7\xe3o partilhada v\xe1lida."),(0,t.kt)("p",null,"Os objectos partilhados e as colec\xe7\xf5es partilhadas s\xe3o concebidos para permitir a comunica\xe7\xe3o entre processos, em particular, ",(0,t.kt)("strong",{parentName:"p"},"processos 4D preemptivos"),". Podem ser passados por refer\xeancia como par\xe2metros de um processo para outro. \xc9 obrigat\xf3rio rodear as modifica\xe7\xf5es em objectos partilhados ou colec\xe7\xf5es partilhadas pelas palavras-chave ",(0,t.kt)("inlineCode",{parentName:"p"},"Use...End use")," para impedir o acesso simult\xe2neo entre processos."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Quando a linha ",(0,t.kt)("strong",{parentName:"li"},"Use")," \xe9 executada com \xeaxito, todas as propriedades/elementos de ",(0,t.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," s\xe3o bloqueados para todos os outros processos com acesso de escrita at\xe9 que a linha correspondente ",(0,t.kt)("inlineCode",{parentName:"li"},"End use")," seja executada."),(0,t.kt)("li",{parentName:"ul"},"As declara\xe7\xf5es __ sequ\xeancia podem executar qualquer modifica\xe7\xe3o nas propriedades/elementos Shared_object_or_Shared_collection sem risco de acesso simult\xe2neo."),(0,t.kt)("li",{parentName:"ul"},"Se outro objeto partilhado ou cole\xe7\xe3o for adicionado como uma propriedade do par\xe2metro ",(0,t.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," , ficam ligados no mesmo grupo partilhado."),(0,t.kt)("li",{parentName:"ul"},"Se outro processo tentar acessar a uma das propriedades ",(0,t.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," ou propriedades ligadas enquanto uma sequ\xeancia ",(0,t.kt)("strong",{parentName:"li"},"Use...End use")," estiver sendo executada, \xe9 automaticamente colocado em espera e aguarda at\xe9 que a sequ\xeancia atual seja terminada."),(0,t.kt)("li",{parentName:"ul"},"A linha ",(0,t.kt)("strong",{parentName:"li"},"End use")," desbloqueia as propriedades ",(0,t.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," e todos os objetos que compartem o mesmo identificador de bloqueio."),(0,t.kt)("li",{parentName:"ul"},"V\xe1rias estruturas ",(0,t.kt)("strong",{parentName:"li"},"Use...End use")," podem ser aninhadas no c\xf3digo 4D. No caso de um grupo, cada ",(0,t.kt)("strong",{parentName:"li"},"Utiliza\xe7\xe3o")," aumenta o contador de bloqueio do grupo e cada ",(0,t.kt)("strong",{parentName:"li"},"Utiliza\xe7\xe3o final")," diminui-o; todas as propriedades/elementos s\xf3 ser\xe3o libertados quando a \xfaltima chamada ",(0,t.kt)("strong",{parentName:"li"},"Utiliza\xe7\xe3o final")," colocar o contador de bloqueio a 0.")),(0,t.kt)("admonition",r({},{type:"note"}),(0,t.kt)("p",{parentName:"admonition"},"Tenha em aten\xe7\xe3o que as fun\xe7\xf5es de cole\xe7\xe3o ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/CollectionClass"}))," que modificam cole\xe7\xf5es partilhadas desencadeiam automaticamente uma utiliza\xe7\xe3o interna **** para esta cole\xe7\xe3o partilhada enquanto a fun\xe7\xe3o for executada.")),(0,t.kt)("h2",r({},{id:"exemplo-1"}),"Exemplo 1"),(0,t.kt)("p",null,"Se quiser lan\xe7ar v\xe1rios processos que executem uma tarefa de invent\xe1rio em diferentes produtos e atualizem o mesmo objeto partilhado. O processo principal instancia um objeto partilhado vazio e, em seguida, lan\xe7a os outros processos, passando o objeto partilhado e os produtos a contar como par\xe2metros:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($_items;0)\n ... //preencher o array com itens para contar\n $nbItems:=Tamanho do array($_items)\n var $inventory : Object\n $inventory:=Novo objeto partilhado\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Criar processos\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0; "HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory objeto enviado por refer\xeancia\n End for\n')),(0,t.kt)("p",null,'No m\xe9todo "HowMany", o invent\xe1rio \xe9 efetuado e o objeto partilhado $inventory \xe9 atualizado o mais rapidamente poss\xedvel:'),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"    //HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //m\xe9todo para contar produtos\n Use($inventory) //utilizar objeto partilhado\n    $inventory[$what]:=$count  /guardar os resultados para este item\n End use\n")),(0,t.kt)("h2",r({},{id:"exemplo-2"}),"Exemplo 2"),(0,t.kt)("p",null,"Os exemplos seguintes destacam regras espec\xedficas para o tratamento de grupos partilhados:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"})," $ob1:=Novo objeto partilhado\n $ob2:=Novo objeto partilhado\n Use($ob1)\n    $ob1.a:=$ob2  //grupo 1 \xe9 criado\n End use\n\n $ob3:=Novo objeto partilhado\n $ob4:=Novo objeto partilhado\n Use($ob3)\n    $ob3.a:=$ob4  //grupo 2 \xe9 criado\n End use\n\n Use($ob1) //utilize um objeto do grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 j\xe1 pertence a outro grupo\n  //atribui\xe7\xe3o n\xe3o \xe9 permitida\n End use\n\n Use($ob3)\n    $ob3.a:=Null //remover qualquer refer\xeancia a $ob4 do grupo 2\n End use\n\n Use($ob1) //utilizar um objeto do grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 ainda pertence ao grupo 2\n  //atribui\xe7\xe3o n\xe3o \xe9 permitida\n End use\n")))}m.isMDXComponent=!0}}]);