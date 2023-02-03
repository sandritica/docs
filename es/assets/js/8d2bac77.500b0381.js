"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45588],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>m});var r=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=r.createContext({}),u=function(e){var n=r.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=t,B=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return o?r.createElement(B,l(l({ref:n},p),{},{components:o})):r.createElement(B,l({ref:n},p))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},19042:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});o(67294);var r=o(3905);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t.apply(this,arguments)}function a(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}const l={id:"blob",title:"BLOB"},s=void 0,i={unversionedId:"Concepts/blob",id:"version-19/Concepts/blob",title:"BLOB",description:"Un campo, variable o expresi\xf3n BLOB (Binary Large OBjects) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente. Un BLOB puede estar vac\xedo (longitud nula) o puede contener hasta 2147483647 bytes (2 GB).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/es/19/Concepts/blob",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Tipos de datos",permalink:"/docs/es/19/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/es/19/Concepts/boolean"}},u={},p=[{value:"Paso de par\xe1metros, punteros y resultados de funciones",id:"paso-de-par\xe1metros-punteros-y-resultados-de-funciones",level:2},{value:"Asignaci\xf3n",id:"asignaci\xf3n",level:2},{value:"Direccionar el contenido de un BLOB",id:"direccionar-el-contenido-de-un-blob",level:2}],c={toc:p};function d(e){var{components:n}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",t({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un campo, variable o expresi\xf3n BLOB (Binary Large OBjects) es una serie contigua de bytes que puede ser tratada como un objeto completo o cuyos bytes pueden ser direccionados individualmente. Un BLOB puede estar vac\xedo (longitud nula) o puede contener hasta 2147483647 bytes (2 GB)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Por defecto, 4D define el tama\xf1o m\xe1ximo de los blob en 2GB, pero este l\xedmite de tama\xf1o puede ser menor dependiendo de su sistema operativo y del espacio disponible.")),(0,r.kt)("p",null,"Un BLOB se carga en la memoria en su totalidad. Una variable BLOB se mantiene y existe s\xf3lo en la memoria. Un campo BLOB se carga en memoria desde el disco, como el resto del registro al que pertenece."),(0,r.kt)("p",null,"Al igual que los otros tipos de campo que pueden retener una gran cantidad de datos (como el tipo de campo Imagen), los campos BLOB no se duplican en la memoria cuando se modifica un registro. Por consiguiente, el resultado devuelto por los comandos ",(0,r.kt)("inlineCode",{parentName:"p"},"Old")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"Modified")," no es significativo cuando se aplica a un campo BLOB."),(0,r.kt)("h2",t({},{id:"paso-de-par\xe1metros-punteros-y-resultados-de-funciones"}),"Paso de par\xe1metros, punteros y resultados de funciones"),(0,r.kt)("p",null,"Los BLOBs en 4D pueden pasarse como par\xe1metros a los comandos 4D o a las rutinas de los plugins que esperan par\xe1metros BLOB. Los BLOBS tambi\xe9n pueden ser pasados como par\xe1metros a un m\xe9todo de usuario o ser devueltos como resultado de una funci\xf3n."),(0,r.kt)("p",null,"Para pasar un BLOB a sus propios m\xe9todos, tambi\xe9n puede definir un puntero al BLOB y pasar el puntero como par\xe1metro."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejemplos:")),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  ` Declarar una variable de tipo BLOB\n C_BLOB(anyBlobVar)\n  ` El BLOB se pasa como par\xe1metro a un comando 4D\n SET BLOB SIZE(anyBlobVar;1024*1024)\n  El BLOB se pasa como par\xe1metro a una rutina externa\n $errCode:=Haga algo con este BLOB(anyBlobVar)\n  ` El BLOB se pasa como par\xe1metro a un m\xe9todo que devuelve un BLOB\n C_BLOB(recuperarBlob)\n recuperarBlob:=Rellenar_Blob(cualquierBlobVar)\n  ` Se pasa un puntero al BLOB como par\xe1metro a un m\xe9todo de usuario\n COMPUTE BLOB(->anyBlobVar)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota para los desarrolladores de plugins:"),' un par\xe1metro BLOB se declara como "&O" (la letra "O", no el d\xedgito "0").'),(0,r.kt)("h2",t({},{id:"asignaci\xf3n"}),"Asignaci\xf3n"),(0,r.kt)("p",null,"Se pueden asignar BLOBs entre s\xed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  ` Declarar dos variables de tipo BLOB\n C_BLOB(vBlobA;vBlobB)\n  ` Fijar el tama\xf1o del primer BLOB en 10K\n SET BLOB SIZE(vBlobA;10*1024)\n  ` Asignar el primer BLOB al segundo\n vBlobB:=vBlobA\n")),(0,r.kt)("p",null,"Sin embargo, no se puede aplicar ning\xfan operador a los BLOB."),(0,r.kt)("h2",t({},{id:"direccionar-el-contenido-de-un-blob"}),"Direccionar el contenido de un BLOB"),(0,r.kt)("p",null,"Cada byte de un BLOB se puede direccionar individualmente utilizando los s\xedmbolos de corchetes {...}. Dentro de un BLOB, los bytes se numeran de 0 a N-1, donde N es el tama\xf1o del BLOB. Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  ` Declarar una variable de tipo BLOB\n C_BLOB(vBlob)\n  ` Fijar el tama\xf1o del BLOB en 256 bytes\n SET BLOB SIZE(vBlob;256)\n  ` El bucle siguiente inicializa los 256 bytes del BLOB en cero\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n")),(0,r.kt)("p",null,"Como se pueden direccionar todos los bytes de un BLOB de forma individual, se puede almacenar lo que se quiera en un campo o variable BLOB."))}d.isMDXComponent=!0}}]);