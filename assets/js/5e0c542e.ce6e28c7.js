"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(a),u=r,h=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"FileHandleClass",title:"FileHandle"},o=void 0,p={unversionedId:"API/FileHandleClass",id:"version-19-R8/API/FileHandleClass",title:"FileHandle",description:"The FileHandle class has functions that allow you to sequentially read from or append contents to an opened File object. A file handle can access any part of a document.",source:"@site/versioned_docs/version-19-R8/API/FileHandleClass.md",sourceDirName:"API",slug:"/API/FileHandleClass",permalink:"/docs/API/FileHandleClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFileHandleClass.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"FileHandleClass",title:"FileHandle"},sidebar:"docs",previous:{title:"File",permalink:"/docs/API/FileClass"},next:{title:"Folder",permalink:"/docs/API/FolderClass"}},d={},s=[{value:"Example",id:"example",level:3},{value:"FileHandle object",id:"filehandle-object",level:3},{value:".breakModeRead",id:"breakmoderead",level:2},{value:"Description",id:"description",level:4},{value:".breakModeWrite",id:"breakmodewrite",level:2},{value:"Description",id:"description-1",level:4},{value:".charset",id:"charset",level:2},{value:"Description",id:"description-2",level:4},{value:".eof",id:"eof",level:2},{value:"Description",id:"description-3",level:4},{value:".getSize()",id:"getsize",level:2},{value:"Description",id:"description-4",level:4},{value:"See also",id:"see-also",level:4},{value:".mode",id:"mode",level:2},{value:"Description",id:"description-5",level:4},{value:".offset",id:"offset",level:2},{value:"Description",id:"description-6",level:4},{value:".readBlob()",id:"readblob",level:2},{value:"Description",id:"description-7",level:4},{value:"See also",id:"see-also-1",level:4},{value:".readLine()",id:"readline",level:2},{value:"Description",id:"description-8",level:4},{value:"See also",id:"see-also-2",level:4},{value:".readText()",id:"readtext",level:2},{value:"Description",id:"description-9",level:4},{value:"See also",id:"see-also-3",level:4},{value:".setSize()",id:"setsize",level:2},{value:"Description",id:"description-10",level:4},{value:"See also",id:"see-also-4",level:4},{value:".writeBlob()",id:"writeblob",level:2},{value:"Description",id:"description-11",level:4},{value:"See also",id:"see-also-5",level:4},{value:".writeLine()",id:"writeline",level:2},{value:"Description",id:"description-12",level:4},{value:"See also",id:"see-also-6",level:4},{value:".writeText()",id:"writetext",level:2},{value:"Description",id:"description-13",level:4},{value:"See also",id:"see-also-7",level:4}],m={toc:s};function k(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"FileHandle")," class has functions that allow you to sequentially read from or append contents to an opened ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"File"))," object. A file handle can access any part of a document."),(0,n.kt)("p",null,"File handle objects are created with the ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass#open"}),(0,n.kt)("inlineCode",{parentName:"a"},"file.open()"))," function."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To read or write a whole document at once, you might consider using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#gettext"}),"file.getText()")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#settext"}),"file.setText()")," functions.")),(0,n.kt)("p",null,"Thanks to the standard 4D object ",(0,n.kt)("em",{parentName:"p"},"refcounting"),", a file handle is automatically deleted when it is no longer referenced and thus, the requested ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"File"))," object is automatically closed. Consequently, with file handles you don't need to worry about closing documents."),(0,n.kt)("h3",r({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-code4d"}),'var $f : 4D.File\nvar $fhandle : 4D.FileHandle\n$f:=Folder(Database folder).file("example.txt")\n\n//Writing line by line from the start\n$fhandle:=$f.open("write")\n$text:="Hello World"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Writing line by line from the end\n$fhandle:=$f.open("append")\n$text:="Hello New World!"\nFor ($line; 1; 4)\n    $fhandle.writeLine($text+String($line))\nEnd for\n\n//Reading using a stop character and an object parameter\n$o:=New object()\n$o.mode:="read"\n$o.charset:="UTF-8"\n$o.breakModeRead:=Document with CRLF\n$stopChar:="!"\n$fhandle:=$f.open($o)\n$text:=$fhandle.readText($stopChar)\n\n//Reading line by line\n$lines:=New collection\n$fhandle:=$f.open("read")\nWhile (Not($fhandle.eof))\n    $lines.push($fhandle.readLine())\nEnd while\n\n')),(0,n.kt)("h3",r({},{id:"filehandle-object"}),"FileHandle object"),(0,n.kt)("p",null,"File handle objects cannot be shared."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#breakmoderead"}),(0,n.kt)("strong",{parentName:"a"},".breakModeRead")," : Text"),"\xa0","\xa0","\xa0","\xa0","the processing mode for line breaks used when reading the file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#breakmodewrite"}),(0,n.kt)("strong",{parentName:"a"},".breakModeWrite")," : Text"),"\xa0","\xa0","\xa0","\xa0","the processing mode for line breaks used when writing to the file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#charset"}),(0,n.kt)("strong",{parentName:"a"},".charset")," : Text"),"\xa0","\xa0","\xa0","\xa0","the charset used when reading from or writing to the file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#eof"}),(0,n.kt)("strong",{parentName:"a"},".eof")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","True is the ",(0,n.kt)("inlineCode",{parentName:"td"},"offset")," has reached the end of the file, and False otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getsize"}),(0,n.kt)("strong",{parentName:"a"},".getSize()")," : Real "),"\xa0","\xa0","\xa0","\xa0","returns the current size of the document, expressed in bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#mode"}),(0,n.kt)("strong",{parentName:"a"},".mode")," : Text"),"\xa0","\xa0","\xa0","\xa0",'the mode in which the file handle was created: "read", "write", or "append"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#offset"}),(0,n.kt)("strong",{parentName:"a"},".offset")," : Real"),"\xa0","\xa0","\xa0","\xa0","the current offset of the data stream (position inside the document)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#readblob"}),(0,n.kt)("strong",{parentName:"a"},".readBlob"),"( ",(0,n.kt)("em",{parentName:"a"},"bytes")," : Real ) : [4D.Blob](BlobClass) "),"\xa0","\xa0","\xa0","\xa0","returns a blob a ",(0,n.kt)("em",{parentName:"td"},"bytes")," size from the file, starting from the current position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#readline"}),(0,n.kt)("strong",{parentName:"a"},".readLine()")," : Text "),"\xa0","\xa0","\xa0","\xa0","returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#readtext"}),(0,n.kt)("strong",{parentName:"a"},".readText"),"( { ",(0,n.kt)("em",{parentName:"a"},"stopChar")," : Text } ) : Text "),"\xa0","\xa0","\xa0","\xa0","returns text from the file, starting from the current position until the first ",(0,n.kt)("em",{parentName:"td"},"stopChar")," string is encountered (if passed) or the end of file is reached")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#setsize"}),(0,n.kt)("strong",{parentName:"a"},".setSize"),"( ",(0,n.kt)("em",{parentName:"a"},"size")," : Real )"),"\xa0","\xa0","\xa0","\xa0","sets a new ",(0,n.kt)("em",{parentName:"td"},"size")," in bytes for the document")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#writeblob"}),(0,n.kt)("strong",{parentName:"a"},".writeBlob"),"( ",(0,n.kt)("em",{parentName:"a"},"blob")," : 4D.Blob ) "),"\xa0","\xa0","\xa0","\xa0","writes ",(0,n.kt)("em",{parentName:"td"},"blob")," into the file, starting from the current position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#writeline"}),(0,n.kt)("strong",{parentName:"a"},".writeLine"),"( ",(0,n.kt)("em",{parentName:"a"},"lineOfText")," : Text ) "),"\xa0","\xa0","\xa0","\xa0","writes ",(0,n.kt)("em",{parentName:"td"},"lineOfText")," content at the current position and inserts an end-of-line delimiter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#writetext"}),(0,n.kt)("strong",{parentName:"a"},".writeText"),"( ",(0,n.kt)("em",{parentName:"a"},"textToWrite")," : Text )"),"\xa0","\xa0","\xa0","\xa0","writes ",(0,n.kt)("em",{parentName:"td"},"textToWrite")," content at the current position and does not insert a final end-of-line delimiter")))),(0,n.kt)("h2",r({},{id:"breakmoderead"}),".breakModeRead"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".breakModeRead")," : Text"),(0,n.kt)("h4",r({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property returns the processing mode for line breaks used when reading the file."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property can be defined at the handle creation with the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),(0,n.kt)("inlineCode",{parentName:"a"},"file.open()"))," function (see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),"the ",(0,n.kt)("inlineCode",{parentName:"a"},".open()")," function"),' for more information). Default is "native".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property always contains a text value, even if the ",(0,n.kt)("inlineCode",{parentName:"p"},".open()")," option was set using a number (constant).")),(0,n.kt)("p",null,"This property is ",(0,n.kt)("strong",{parentName:"p"},"read-only"),"."),(0,n.kt)("h2",r({},{id:"breakmodewrite"}),".breakModeWrite"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".breakModeWrite")," : Text"),(0,n.kt)("h4",r({},{id:"description-1"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property returns the processing mode for line breaks used when writing to the file."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property can be defined at the handle creation with the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),(0,n.kt)("inlineCode",{parentName:"a"},"file.open()"))," function (see ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),"the ",(0,n.kt)("inlineCode",{parentName:"a"},".open()")," function"),' for more information). Default is "native".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property always contains a text value, even if the ",(0,n.kt)("inlineCode",{parentName:"p"},".open()")," option was set using a number (constant).")),(0,n.kt)("p",null,"This property is ",(0,n.kt)("strong",{parentName:"p"},"read-only"),"."),(0,n.kt)("h2",r({},{id:"charset"}),".charset"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".charset")," : Text"),(0,n.kt)("h4",r({},{id:"description-2"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".charset")," property returns the charset used when reading from or writing to the file."),(0,n.kt)("p",null,"The charset can be defined at the handle creation with the ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass#open"}),(0,n.kt)("inlineCode",{parentName:"a"},"file.open()")),' function. Default is "UTF-8".'),(0,n.kt)("p",null,"This property is ",(0,n.kt)("strong",{parentName:"p"},"read-only"),"."),(0,n.kt)("h2",r({},{id:"eof"}),".eof"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".eof")," : Boolean"),(0,n.kt)("h4",r({},{id:"description-3"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".eof")," property returns True is the ",(0,n.kt)("inlineCode",{parentName:"p"},"offset")," has reached the end of the file, and False otherwise."),(0,n.kt)("p",null,"This property is ",(0,n.kt)("strong",{parentName:"p"},"read-only"),"."),(0,n.kt)("h2",r({},{id:"getsize"}),".getSize()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getSize()")," : Real "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Size of the document in bytes")))),(0,n.kt)("h4",r({},{id:"description-4"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".getSize()")," function returns the current size of the document, expressed in bytes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This function returns the same value as the (",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass#size"}),".size"),") property of the ",(0,n.kt)("inlineCode",{parentName:"p"},"File")," class.")),(0,n.kt)("h4",r({},{id:"see-also"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#setsize"}),".setSize()"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass#size"}),"file.size")),(0,n.kt)("h2",r({},{id:"mode"}),".mode"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".mode")," : Text"),(0,n.kt)("h4",r({},{id:"description-5"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".mode"),' property returns the mode in which the file handle was created: "read", "write", or "append".'),(0,n.kt)("p",null,"The mode can be defined at the handle creation with the ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass#open"}),(0,n.kt)("inlineCode",{parentName:"a"},"file.open()")),' function. Default is "read".'),(0,n.kt)("p",null,"This property is ",(0,n.kt)("strong",{parentName:"p"},"read-only"),"."),(0,n.kt)("h2",r({},{id:"offset"}),".offset"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".offset")," : Real"),(0,n.kt)("h4",r({},{id:"description-6"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".offset")," property returns the current offset of the data stream (position inside the document). The offset value is automatically updated after read and write operations."),(0,n.kt)("p",null,"Setting the ",(0,n.kt)("inlineCode",{parentName:"p"},".offset")," will change its current value."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the passed value is negative, the ",(0,n.kt)("inlineCode",{parentName:"li"},".offset")," is set to the start of the file (zero)."),(0,n.kt)("li",{parentName:"ul"},"If the passed value is higher than the size of the file,  the ",(0,n.kt)("inlineCode",{parentName:"li"},".offset")," is set to the end of the file (size of file).")),(0,n.kt)("p",null,"This property is ",(0,n.kt)("strong",{parentName:"p"},"read/write"),"."),(0,n.kt)("h2",r({},{id:"readblob"}),".readBlob()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".readBlob"),"( ",(0,n.kt)("em",{parentName:"p"},"bytes")," : Real ) : ",(0,n.kt)("a",r({parentName:"p"},{href:"BlobClass"}),"4D.Blob")," "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"bytes")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number of bytes to be read")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"BlobClass"}),"4D.Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bytes read from the file")))),(0,n.kt)("h4",r({},{id:"description-7"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".readBlob()")," function returns a blob a ",(0,n.kt)("em",{parentName:"p"},"bytes")," size from the file, starting from the current position ."),(0,n.kt)("p",null,"When this function is executed, the current position (",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the last byte read."),(0,n.kt)("h4",r({},{id:"see-also-1"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#writeblob"}),".writeBlob()")),(0,n.kt)("h2",r({},{id:"readline"}),".readLine()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".readLine()")," : Text "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Line of text")))),(0,n.kt)("h4",r({},{id:"description-8"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".readLine()")," function returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached."),(0,n.kt)("p",null,"When this function is executed, the current position (",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.")),(0,n.kt)("h4",r({},{id:"see-also-2"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#readtext"}),".readText()"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"#writeline"}),".writeLine()")),(0,n.kt)("h2",r({},{id:"readtext"}),".readText()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".readText"),"( { ",(0,n.kt)("em",{parentName:"p"},"stopChar")," : Text } ) : Text "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"stopChar")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Character(s) at which to stop reading")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text from the file")))),(0,n.kt)("h4",r({},{id:"description-9"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".readText()")," function returns text from the file, starting from the current position until the first ",(0,n.kt)("em",{parentName:"p"},"stopChar")," string is encountered (if passed) or the end of file is reached."),(0,n.kt)("p",null,"This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),"opening the file handle")," by setting the ",(0,n.kt)("a",r({parentName:"p"},{href:"#breakmoderead"}),(0,n.kt)("inlineCode",{parentName:"a"},".breakModeRead"))," property.  "),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"stopChar")," character string is not included in the returned text. If you omit the ",(0,n.kt)("em",{parentName:"p"},"stopChar")," parameter, the whole document text is returned.  "),(0,n.kt)("p",null,"When this function is executed, the (",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is placed just after the ",(0,n.kt)("em",{parentName:"p"},"stopChar")," string."),(0,n.kt)("p",null,"If the ",(0,n.kt)("em",{parentName:"p"},"stopChar")," parameter is passed and not found, ",(0,n.kt)("inlineCode",{parentName:"p"},".readText()")," returns an empty string and the ",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset")," is left untouched."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.")),(0,n.kt)("h4",r({},{id:"see-also-3"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#readline"}),".readLine()"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"#writetext"}),".writeText()")),(0,n.kt)("h2",r({},{id:"setsize"}),".setSize()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setSize"),"( ",(0,n.kt)("em",{parentName:"p"},"size")," : Real )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"size"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"New size of the document in bytes")))),(0,n.kt)("h4",r({},{id:"description-10"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".setSize()")," function sets a new ",(0,n.kt)("em",{parentName:"p"},"size")," in bytes for the document."),(0,n.kt)("p",null,"If the ",(0,n.kt)("em",{parentName:"p"},"size")," value is less than the current document size, the document content is truncated from the beginning to get the new ",(0,n.kt)("em",{parentName:"p"},"size")," ."),(0,n.kt)("h4",r({},{id:"see-also-4"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#getsize"}),".getSize()"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"FileClass#size"}),"file.size")),(0,n.kt)("h2",r({},{id:"writeblob"}),".writeBlob()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".writeBlob"),"( ",(0,n.kt)("em",{parentName:"p"},"blob")," : 4D.Blob ) "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"BlobClass"}),"4D.Blob")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob to write in the file")))),(0,n.kt)("h4",r({},{id:"description-11"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".writeBlob()")," function writes ",(0,n.kt)("em",{parentName:"p"},"blob")," into the file, starting from the current position ."),(0,n.kt)("p",null,"When this function is executed, the current position (",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the last byte written."),(0,n.kt)("h4",r({},{id:"see-also-5"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#readblob"}),".readBlob()")),(0,n.kt)("h2",r({},{id:"writeline"}),".writeLine()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".writeLine"),"( ",(0,n.kt)("em",{parentName:"p"},"lineOfText")," : Text ) "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"lineOfText")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text to write")))),(0,n.kt)("h4",r({},{id:"description-12"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".writeLine()")," function writes ",(0,n.kt)("em",{parentName:"p"},"lineOfText")," content at the current position and inserts an end-of-line delimiter (unlike the ",(0,n.kt)("a",r({parentName:"p"},{href:"#writetext"}),".writeText()")," function). By default, a native end-of-line delimiter is used, but you can define another delimiter when ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),"opening the file handle")," by setting the ",(0,n.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),(0,n.kt)("inlineCode",{parentName:"a"},".breakModeWrite"))," property.  "),(0,n.kt)("p",null,"When this function is executed, the current position (",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the end-of-line delimiter."),(0,n.kt)("h4",r({},{id:"see-also-6"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),".breakModeWrite"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"#readline"}),".readLine()"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"#writetext"}),".writeText()")),(0,n.kt)("h2",r({},{id:"writetext"}),".writeText()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"History"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v19 R7"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".writeText"),"( ",(0,n.kt)("em",{parentName:"p"},"textToWrite")," : Text )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"textToWrite")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text to write")))),(0,n.kt)("h4",r({},{id:"description-13"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".writeText()")," function writes ",(0,n.kt)("em",{parentName:"p"},"textToWrite")," content at the current position and does not insert a final end-of-line delimiter (unlike the ",(0,n.kt)("a",r({parentName:"p"},{href:"#writeline"}),".writeLine()")," function). This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/API/FileClass#open"}),"opening the file handle")," by setting the ",(0,n.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),(0,n.kt)("inlineCode",{parentName:"a"},".breakModeWrite"))," property.  "),(0,n.kt)("p",null,"When this function is executed, the current position (",(0,n.kt)("a",r({parentName:"p"},{href:"#offset"}),".offset"),") is updated after the next end-of-line delimiter."),(0,n.kt)("h4",r({},{id:"see-also-7"}),"See also"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"#breakmodewrite"}),".breakModeWrite"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"#readtext"}),".readText()"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"#writeline"}),".writeLine()")))}k.isMDXComponent=!0}}]);