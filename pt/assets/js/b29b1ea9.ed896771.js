"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):A(A({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,g=u["".concat(o,".").concat(c)]||u[c]||p[c]||l;return a?r.createElement(g,A(A({ref:t},d),{},{components:a})):r.createElement(g,A({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,A=new Array(l);A[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,A[1]=i;for(var s=2;s<l;s++)A[s]=a[s];return r.createElement.apply(null,A)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>A,metadata:()=>o,toc:()=>d});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const A={id:"string",title:"String"},i=void 0,o={unversionedId:"Concepts/string",id:"version-19-R6/Concepts/string",title:"String",description:"String is a generic term that stands for:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/Concepts/dt_string.md",sourceDirName:"Concepts",slug:"/Concepts/string",permalink:"/docs/pt/19-R6/Concepts/string",draft:!1,tags:[],version:"19-R6",frontMatter:{id:"string",title:"String"},sidebar:"docs",previous:{title:"Ponteiro",permalink:"/docs/pt/19-R6/Concepts/pointer"},next:{title:"Hora",permalink:"/docs/pt/19-R6/Concepts/time"}},s={},d=[{value:"String literals",id:"string-literals",level:2},{value:"Escape sequences",id:"escape-sequences",level:3},{value:"String operators",id:"string-operators",level:2},{value:"String comparisons",id:"string-comparisons",level:2},{value:"Wilcard character (@)",id:"wilcard-character-",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Character Reference Symbols",id:"character-reference-symbols",level:2},{value:"Advanced note about invalid character reference",id:"advanced-note-about-invalid-character-reference",level:3},{value:"Exemplo",id:"exemplo",level:3}],p={toc:d};function u(e){var{components:t}=e,A=l(e,["components"]);return(0,r.kt)("wrapper",n({},p,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"String is a generic term that stands for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Text fields or variables: a Text field, variable, or expression may contain from 0 to 2 GB of text."),(0,r.kt)("li",{parentName:"ul"},"Alphanumeric fields: an Alphanumeric field may contain from 0 to 255 characters (limit set when field is defined).")),(0,r.kt)("h2",n({},{id:"string-literals"}),"String literals"),(0,r.kt)("p",null,'A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:'),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'"Add Records"\n"No records found."\n"Fatura "\n')),(0,r.kt)("p",null,'An empty string is specified by two quotation marks with nothing between them ("").'),(0,r.kt)("h3",n({},{id:"escape-sequences"}),"Escape sequences"),(0,r.kt)("p",null,"The following escape sequences can be used within strings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Escape sequence"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Character replaced"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\\n"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"LF (Line feed)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\\t"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"HT (Tab)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\\r"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CR (Carriage return)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\\","\\ "),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\\ (Backslash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\\",'"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'" (Quotation marks)')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The \\ (backslash) character is used as a separator in pathnames under Windows. You must therefore use a double backslash ","\\",'\\ in paths when you want to have a backslash in front of a character used in one of the escape sequences recognized by 4D (e.g. "C:',"\\","\\MyDocuments","\\",'\\New.txt").'),(0,r.kt)("h2",n({},{id:"string-operators"}),"String operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Sintaxe"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Retorna"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Expression"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Concatenation"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String + String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" + "def"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abcdef"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Repeti\xe7\xe3o"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String * Number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"ab" * 3'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"ababab"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Igual"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String = String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" = "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" = "abd"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Desigualdade"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String # String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" # "abd"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" # "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Maior que"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String > String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abd" > "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" > "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Menor que"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String < String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" < "abd"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" < "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Maior ou igual a"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String >= String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abd" >= "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" >= "abd"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Menor que ou igual a"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String <= String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abc" <= "abd"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"abd" <= "abc"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Cont\xe9m palavra chave"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String % String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"Alpha Bravo" % "Bravo"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"Alpha Bravo" % "ravo"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Picture % String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Booleano"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),'Picture_expr % "Mer"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True (*)")))),(0,r.kt)("p",null,'(*) If the keyword "Mer" is associated with the picture stored in the picture expression (field or variable).'),(0,r.kt)("h2",n({},{id:"string-comparisons"}),"String comparisons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strings are compared on a character-by-character basis (except in the case of searching by ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19-R6/Concepts/string#keywords"}),"keywords"),", see below)."),(0,r.kt)("li",{parentName:"ul"},'When strings are compared, the case of the characters is ignored; thus, "a"="A" returns ',(0,r.kt)("inlineCode",{parentName:"li"},"TRUE"),". To test if the case of two characters is different, compare their character codes. For example, the following expression returns ",(0,r.kt)("inlineCode",{parentName:"li"},"FALSE"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'Character code("A")=Character code("a") // because 65 is not equal to 97\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When strings are compared, diacritical characters are taken into account. For example, the following expressions return ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUE"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'     "n"="\xf1"\n     "n"="\xd1"\n     "A"="\xe5"\n      // etc.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," String comparison takes into account specificities of the language ",(0,r.kt)("strong",{parentName:"p"},"defined for the 4D data file")," (which is not always the same as the language defined for the system)."),(0,r.kt)("h3",n({},{id:"wilcard-character-"}),"Wilcard character (@)"),(0,r.kt)("p",null,"The 4D language supports ",(0,r.kt)("strong",{parentName:"p"},"@")," as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'"abcdefghij"="abc@"\n')),(0,r.kt)("p",null,"The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"FALSE"),", because the @ is considered only as a one character in the first operand:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'    "abc@"="abcdefghij"\n')),(0,r.kt)("p",null,'The wildcard means "one or more characters or nothing". As seguintes express\xf5es s\xe3o ',(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'     "abcdefghij"="abcdefghij@"\n     "abcdefghij"="@abcdefghij"\n     "abcdefghij"="abcd@efghij"\n     "abcdefghij"="@abcdefghij@"\n     "abcdefghij"="@abcde@fghij@"\n')),(0,r.kt)("p",null,"On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return ",(0,r.kt)("inlineCode",{parentName:"p"},"FALSE"),". The following expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"FALSE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'"abcdefghij"="abc@@fg"\n')),(0,r.kt)("p",null,"When the comparison operator is or contains a < or > symbol, only comparison with a single wildcard located at the end of the operand is supported:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'     "abcd"<="abc@" // Valid comparison\n     "abcd"<="abc@ef" //Not a valid comparison\n')),(0,r.kt)("p",null,"If you want to execute comparisons or queries using @ as a character (and not as a wildcard), you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Character code(At sign)")," instruction. Imagine, for example, that you want to know if a string ends with the @ character. The following expression (if $vsValue is not empty) is always ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'($vsValue[[Length($vsValue)]]="@")\n')),(0,r.kt)("p",null,"The following expression will be evaluated correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"(Character code($vsValue[[Length($vsValue)]])#64)  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," A 4D option in the Design environment allows you to define how the @ character is interpreted when it is included in a character string."),(0,r.kt)("h3",n({},{id:"keywords"}),"Keywords"),(0,r.kt)("p",null,'Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The ',(0,r.kt)("strong",{parentName:"p"},"%")," operator always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," if the query concerns several words or only part of a word (for example, a syllable). The \u201cwords\u201d are character strings surrounded by \u201cseparators,\u201d which are spaces and punctuation characters and dashes. An apostrophe, like in \u201cToday's\u201d, is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'     "Alpha Bravo Charlie"%"Bravo" // Returns True\n     "Alpha Bravo Charlie"%"vo" // Returns False\n     "Alpha Bravo Charlie"%"Alpha Bravo" // Returns False\n     "Alpha,Bravo,Charlie"%"Alpha" // Returns True\n     "Software and Computers"%"comput@" // Returns True\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notas:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"4D uses the ICU library for comparing strings (using ",(0,r.kt)("inlineCode",{parentName:"li"},"<>=#")," operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: ",(0,r.kt)("a",n({parentName:"li"},{href:"http://www.unicode.org/reports/tr29/#Word_Boundaries"}),"http://www.unicode.org/reports/tr29/#Word_Boundaries"),"."),(0,r.kt)("li",{parentName:"ul"},"In the Japanese version, instead of ICU, 4D uses Mecab by default for detecting keywords."))),(0,r.kt)("h2",n({},{id:"character-reference-symbols"}),"Character Reference Symbols"),(0,r.kt)("p",null,"The character reference symbols: [","[...]","]"),(0,r.kt)("p",null,"These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable, string variable, or field."),(0,r.kt)("p",null,"If the character reference symbols appear on the left side of the assignment operator (:=), a character is assigned to the referenced position in the string. For example, if vsName is not an empty string, the following line sets the first character of vsName to uppercase:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'If(vsName#"")\n    vsName[[1]]:=Uppercase(vsName[[1]])\nEnd if\n')),(0,r.kt)("p",null,"Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//The following example tests if the last character of vtText is an At sign "@"\n If(vtText#"")\n    If(Character code(Substring(vtText;Length(vtText);1))=At sign)\n  //...\n    End if\n End if\n\n  //Using the character reference syntax, you would write in a simpler manner:\n If(vtText#"")\n    If(Character code(vtText[[Length(vtText)]])=At sign)\n  // ...\n    End if\n End if\n')),(0,r.kt)("h3",n({},{id:"advanced-note-about-invalid-character-reference"}),"Advanced note about invalid character reference"),(0,r.kt)("p",null,"When you use the character reference symbols, you must address existing characters in the string in the same way you address existing elements of an array. For example if you address the 20th character of a string variable, this variable MUST contain at least 20 characters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Failing to do so, in interpreted mode, does not cause a syntax error."),(0,r.kt)("li",{parentName:"ul"},"Failing to do so, in compiled mode (with no options), may lead to memory corruption, if, for instance, you write a character beyond the end of a string or a text."),(0,r.kt)("li",{parentName:"ul"},"Failing to do so, in compiled mode, causes an error with the option Range Checking On. For example, executing the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),'//Very bad and nasty thing to do, boo!\n vsAnyText:=""\n vsAnyText[[1]]:="A"\n')),(0,r.kt)("p",null,"will trigger the Runtime Error shown here:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:a(59448).Z,width:"642",height:"332"})),(0,r.kt)("h3",n({},{id:"exemplo"}),"Exemplo"),(0,r.kt)("p",null,"The following project method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  //Capitalize_text project method\n  //Capitalize_text ( Text ) -> Text\n  //Capitalize_text ( Source text ) -> Capitalized text\n\n $0:=$1\n $vlLen:=Length($0)\n If($vlLen>0)\n    $0[[1]]:=Uppercase($0[[1]])\n    For($vlChar;1;$vlLen-1)\n       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)\n          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])\n       End if\n    End for\n End if\n')),(0,r.kt)("p",null,"For example, the line:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'ALERT(Capitalize_text("hello, my name is jane doe and i\'m running for president!"))\n')),(0,r.kt)("p",null,"displays the alert shown here:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt-text",src:a(44077).Z,width:"512",height:"282"})))}u.isMDXComponent=!0},44077:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},59448:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Syntax_Error.en-9839a6b23f8e4a167fb902c93d5e8c08.png"}}]);