"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71081],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>A});var o=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),A=i,m=u["".concat(p,".").concat(A)]||u[A]||d[A]||n;return t?o.createElement(m,s(s({ref:r},c),{},{components:t})):o.createElement(m,s({ref:r},c))}));function A(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=u;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<n;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62337:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});t(67294);var o=t(3905);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"shapesOverview",title:"Formes"},a=void 0,p={unversionedId:"FormObjects/shapesOverview",id:"version-19-R7/FormObjects/shapesOverview",title:"Formes",description:"Les formes sont des objets statiques qui peuvent \xeatre ajout\xe9es \xe0 des formes 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/FormObjects/shapes_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/shapesOverview",permalink:"/docs/fr/19-R7/FormObjects/shapesOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fshapes_overview.md%20(19-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R7",frontMatter:{id:"shapesOverview",title:"Formes"},sidebar:"docs",previous:{title:"R\xe8gle",permalink:"/docs/fr/19-R7/FormObjects/ruler"},next:{title:"Spinner",permalink:"/docs/fr/19-R7/FormObjects/spinner"}},l={},c=[{value:"Rectangle",id:"rectangle",level:2},{value:"Exemple JSON :",id:"exemple-json-",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:4},{value:"Ligne",id:"ligne",level:2},{value:"propri\xe9t\xe9 startPoint",id:"propri\xe9t\xe9-startpoint",level:3},{value:"Exemple JSON :",id:"exemple-json--1",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge-1",level:4},{value:"Ovale",id:"ovale",level:2},{value:"Exemple JSON :",id:"exemple-json--2",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge-2",level:4}],d={toc:c};function u(e){var{components:r}=e,s=n(e,["components"]);return(0,o.kt)("wrapper",i({},d,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Les formes sont des ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/formObjectsOverview#active-and-static-objects"}),"objets statiques")," qui peuvent \xeatre ajout\xe9es \xe0 des formes 4D."),(0,o.kt)("p",null,"Les formes 4D prennent en charge les formes basiques suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"rectangles"),(0,o.kt)("li",{parentName:"ul"},"lignes"),(0,o.kt)("li",{parentName:"ul"},"ovales")),(0,o.kt)("h2",i({},{id:"rectangle"}),"Rectangle"),(0,o.kt)("p",null,"Un rectangle statique est un objet d\xe9coratif contenu dans les formulaires. Les rectangles sont limit\xe9s \xe0 des formes carr\xe9es."),(0,o.kt)("p",null,"Les rectangles sont cr\xe9\xe9s \xe0 l'aide de plusieurs propri\xe9t\xe9s (couleur, \xe9paisseur de ligne, motif, etc.). L'",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#corner-radius"}),"arrondi"),", en particulier, des coins du rectangle peuvent \xeatre d\xe9finis."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(75406).Z,width:"98",height:"114"})),(0,o.kt)("h4",i({},{id:"exemple-json-"}),"Exemple JSON :"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'    "myRectangle": {\n        "type": "rectangle",    //d\xe9finit le type d\'objet\n        "left": 60,             //position sur la gauche du formulaire\n        "top": 160,             //position en haut du formulaire\n        "width": 100,           //largeur de l\'objet \n        "height": 20,           //hauteur de l\'objet\n        "borderRadius": 20      //d\xe9finit le rayon d\'arrondi\n                }\n')),(0,o.kt)("h4",i({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,o.kt)("p",null,(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#css-class"}),"Css Class")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#corner-radius"}),"Rayon d'arrondi")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#dotted-line-type"}),"Type de pointill\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"}),"Couleur de fond")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dimensionnement horizontal")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#line-color"}),"Couleur de ligne")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#line-width"}),"\xc9paisseur du trait")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dimensionnement vertical")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")),(0,o.kt)("h2",i({},{id:"ligne"}),"Ligne"),(0,o.kt)("p",null,"Une ligne statique est un objet d\xe9coratif pour les formulaires, entre deux trac\xe9s. Les lignes peuvent \xeatre horizontales, verticales ou de toute forme d'angle."),(0,o.kt)("p",null,"Les lignes sont cr\xe9\xe9es \xe0 l'aide de plusieurs propri\xe9t\xe9s (couleur, \xe9paisseur de ligne, etc.)."),(0,o.kt)("h3",i({},{id:"propri\xe9t\xe9-startpoint"}),"propri\xe9t\xe9 startPoint"),(0,o.kt)("p",null,"La propri\xe9t\xe9 JSON ",(0,o.kt)("inlineCode",{parentName:"p"},"startPoint")," d\xe9finit \xe0 partir de quelle coordonn\xe9e la ligne peut \xeatre dessin\xe9e (voir l'exemple)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"la propri\xe9t\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"startPoint")," n'est pas expos\xe9e dans la liste des propri\xe9t\xe9s, o\xf9 la direction du dessin de ligne est visible.")),(0,o.kt)("h4",i({},{id:"exemple-json--1"}),"Exemple JSON :"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "topLeft", //premi\xe8re orientation\n        "strokeDashArray": "6 2" //pointill\xe9\n        }\n')),(0,o.kt)("p",null,"Result: ",(0,o.kt)("img",{src:t(13260).Z,width:"160",height:"120"})),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),'    "myLine": {\n        "type": "line",                \n        "left": 20,\n        "top": 40,\n        "width": 100,\n        "height": 80,\n        "startPoint": "bottomLeft", //deuxi\xe8me orientation\n        "strokeDashArray": "6 2" //pointill\xe9\n        }\n')),(0,o.kt)("p",null,"Result: ",(0,o.kt)("img",{src:t(64724).Z,width:"160",height:"120"})),(0,o.kt)("h4",i({},{id:"propri\xe9t\xe9s-prises-en-charge-1"}),"Propri\xe9t\xe9s prises en charge"),(0,o.kt)("p",null,(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#css-class"}),"Css Class")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#dotted-line-type"}),"Type de pointill\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dimensionnement horizontal")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#line-color"}),"Couleur du trait")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#line-width"}),"\xc9paisseur du trait")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"#startpoint-property"}),"startPoint")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dimensionnement vertical")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")),(0,o.kt)("h2",i({},{id:"ovale"}),"Ovale"),(0,o.kt)("p",null,"Un ovale statique est un objet d\xe9coratif contenu dans les formulaires. Les objets de forme ovale peuvent \xeatre utilis\xe9s pour dessiner des formes circulaires (lorsque les propri\xe9t\xe9s ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#width"}),"largeur")," et ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#height"}),"hauteur")," sont identiques)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(73340).Z,width:"75",height:"111"})),(0,o.kt)("h4",i({},{id:"exemple-json--2"}),"Exemple JSON :"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'    "myOval": {\n        "type": "oval",    //d\xe9finit le type d\'objet\n        "left": 60,             //position sur la gauche du formulaire\n        "top": 160,             //position en haut du formulaire\n        "width": 100,           //largeur de l\'objet \n        "height": 20,           //hauteur de l\'objet\n        "borderRadius": 20      //d\xe9finit la couleur de fond\n                }\n')),(0,o.kt)("h4",i({},{id:"propri\xe9t\xe9s-prises-en-charge-2"}),"Propri\xe9t\xe9s prises en charge"),(0,o.kt)("p",null,(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bas")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#css-class"}),"Css Class")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#dotted-line-type"}),"Type de pointill\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color"}),"Couleur de fond")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#height"}),"Hauteur")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Dimensionnement horizontal")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#left"}),"Gauche")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#line-color"}),"Couleur du trait")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesBackgroundAndBorder#line-width"}),"\xc9paisseur du trait")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#object-name"}),"Nom")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#right"}),"Droite")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#top"}),"Haut")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Dimensionnement vertical")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesDisplay#visibility"}),"Visibilit\xe9")," - ",(0,o.kt)("a",i({parentName:"p"},{href:"/docs/fr/19-R7/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largeur")))}u.isMDXComponent=!0},13260:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANhSURBVHhe7dovTiRBGIZxboAk4QDjEDjECCQOzw0QSJJO5gbcgwQ5glOMQLQgQSAQJIgRe4R9N19n/4VZZruru6veen5iQmGfTH091XUAf99gisDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5ghsjsDmCGyOwOYIbI7A5uYM/PT01P2F0cwW+PX19ejo6O7urltjHLMFlrZtT05Orq6uPj4+un8htTkDy/v7++Xl5enp6fPzc/cvJDVz4LBarZbLZbdAUlkEltileexKLpfAst1utVczktPKKLBoJF9cXDCSE8orcGiaRr+gHh8fuzUGyDGwPDw8qPHb21u3Rl+ZBpaYxNqrGclD5Bs4XF9fM5KHyD2wMJKHKCCwaCQfHh5ycN1DGYFls9ksFov1et2tsZ9iAks8bemTkby/kgKH+/t7RvL+ygssjOT9FRlYYiRzcP2lUgNLHFzf3t52a3ym4MAhvsG8Z9yl+MCih2pG8i4OgYWRvItJYOFd8qd8Aoemac7OzroF/AILj12/MwwsXO/6yTOwMJKDbeDAu2TzwFL59S7/wBKTWHt1hSO5isDh5uamwpFcUWBZrVbHx8dVjeS6Ast6vdZIrufgurrA0rat9upKvsc1BpbtdqtP/Va2H8mVBg7aru1HctWBRXXV2Hgk1x5YtEsbH1wT+AelVeCmabq1EQL/Ek9em80mlh4I/IeXlxezkUzgv5mNZAJ/Ikayx8E1gXfSRn1+ft4tikXgfzF47CLw15bLZbkjmcBfK3okE3hfGsklHlwT+D+o7mKxKOt6F4H/Tzx2tW1bykgmcB9N05QykgncUykjmcD9FfEumcCDxMF1zt9jAg+V+fUuAqeR7fUuAieT50gmcEoxkrM6uCZwYnFwnc/1LgKPIp/3jAQeSybXuwg8ohxGMoHHNfu7ZAJPQRv1XNe7CDyRuR67CDyp6a93EXhS049kAs9gynfJBJ6H6k5zvYvAs5nmeheBZzb29S4Cz2/UkUzgLIz3LpnAuYiD6+TfYwJnZIzrXQTOTtrrXQTOUcKRTOBMxUgefnBN4HzFwfXA610Ezl08ecVnDwQuQO+6QmBzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ2R2BzBDZHYHMENkdgcwQ21wWGrYOD70yi0jKVpSuYAAAAAElFTkSuQmCC"},64724:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAIAAAD6wG44AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANZSURBVHhe7duhTitBFIfxvgOCpAJJgqhAkCAQlTg8AskbNGnCGyAqeYrKCpIKBB7ZpBJBUlHBI9y52TV34EJ358zOzH++nyCM/kLPducwgr5PiCKwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCF+Dj46P9rTsCiyNwvvb7/f39/cPDQ3vuhcCZ2m63V1dXNzc3IZ/PDoFz9PLycnJyEvi32yBwdpbL5fHxsfvZnsMQODvuM/nt7a09BCNwLpqh+/z83J6NEDgLhkPXQ+D0np6eDIeuh8CJzefzs7Mzw6HrIXBiLm3gN92fETgNN3Qnk8n7+3t7jobACUQduh4CD6p5vRx16HoIPBxXdzqdhr9e7oTAg3p9fW1/GwqBh+CG7vX1dXsYFoHjGn7oeggckdWdbggCx7LZbCK9Xu6EwBEN/0j1FYGNmSxSGSKwpRyGrofAZuLd6YYgsA3bRSpDBLZhu0hliMBBIi1SGSJwf3kOXQ+BexryTjcEgfuIvUhliMB9xF6kMkTgDgZbpDJE4EOVMnQ9BP5d8jvdEAT+RZJFKkME/l0Ot369Efi/Ei5SGSLwN4oeuh4C+zK80w1B4H9kskhliMC+oh+pviLwX7ktUhkisNrQ9dQeuIg73RBVB852kcpQ1YGzXaQyVGPg/BepDFUXeL1eaw9dT12BF4vF0dGR9tD1VBR4NptpvF7upIrA+/3e/SxokcqQfuDVanV6elrWIpUh8cCPj4+1DV2PbODdbnd7e1vh0PXIBr68vFR9vdyJYODmkUrs1q83tcBu6E6n0/YApcAM3W+JBN5sNufn5wzdrxQCu7rj8bie18udFB+YR6qfFRy4Gbrz+bw94zulBmboHqjIwKvViqF7oPICL5fLyl8vd1JS4OZ5qoZFKkPFBG6Grvtwbs84TBmBGbq9FRCYO90QuQeuc5HKUL6Ba16kMpRp4MoXqQzlGJihayivwNzpmssrMItU5nIJzK1fJFkEXiwWLFJFkjiw+8O9u7tj6MaTMvB2u724uGDoRpUssPuOW9X/6aaSLLDDI9UAUgbGAAgsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILK4NDFmj0R82ANRa+9ve+AAAAABJRU5ErkJggg=="},73340:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,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"},75406:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAByCAIAAAAnEZPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEkSURBVHhe7d2xDQMhEABBcAXff5V0gJOPbGRv/jMJkK6EdNnNtdbgn9d98pNMiUyJTIlMiUzJYSC4ruu+PdJxQjpn2nvfj4eZ8zxI+nSJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiUyJTIlMiW2Hn+q2Q775dIlMiUyJTIlMiUyJTMEYb82sGvDSbsgTAAAAAElFTkSuQmCC"}}]);