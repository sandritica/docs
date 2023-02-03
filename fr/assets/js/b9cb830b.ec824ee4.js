"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(b,i(i({ref:t},c),{},{components:r})):o.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var o=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"comboBoxOverview",title:"Combo Box"},s=void 0,l={unversionedId:"FormObjects/comboBoxOverview",id:"version-19/FormObjects/comboBoxOverview",title:"Combo Box",description:"Une combo box est semblable \xe0 une liste d\xe9roulante, hormis le fait que cet objet accepte la saisie de texte par l\u2019utilisateur et qu'elle dispose d'options suppl\xe9mentaires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/fr/19/FormObjects/comboBoxOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Case \xe0 cocher",permalink:"/docs/fr/19/FormObjects/checkboxOverview"},next:{title:"Liste d\xe9roulante",permalink:"/docs/fr/19/FormObjects/dropdownListOverview"}},p={},c=[{value:"Gestion des combo boxes",id:"gestion-des-combo-boxes",level:2},{value:"Utilisation d&#39;un objet",id:"utilisation-dun-objet",level:3},{value:"Utiliser un tableau",id:"utiliser-un-tableau",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Options",id:"options",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}],u={toc:c};function m(e){var{components:t}=e,i=n(e,["components"]);return(0,o.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Une combo box est semblable \xe0 une ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/dropdownListOverview#overview"}),"liste d\xe9roulante"),", hormis le fait que cet objet accepte la saisie de texte par l\u2019utilisateur et qu'elle dispose d'options suppl\xe9mentaires."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(67041).Z,width:"173",height:"106"})),(0,o.kt)("p",null,"Fondamentalement, vous devez consid\xe9rer l\u2019objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par d\xe9faut."),(0,o.kt)("h2",a({},{id:"gestion-des-combo-boxes"}),"Gestion des combo boxes"),(0,o.kt)("p",null,"Utilisez l\u2019\xe9v\xe9nement formulaire ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/Events/onDataChange"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Data Change"))," pour g\xe9rer les valeurs saisies, comme pour toute zone de saisie."),(0,o.kt)("p",null,"You initialize a combo box in exactly the same way as a ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/dropdownListOverview#overview"}),"drop-down list"),": using an object, an array, or a choice list."),(0,o.kt)("h3",a({},{id:"utilisation-dun-objet"}),"Utilisation d'un objet"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cette fonctionnalit\xe9 n'est disponible que dans les projets 4D.")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/Concepts/object"}),"object")," encapsulating a ",(0,o.kt)("a",a({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," can be used as the data source of a combo box. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,o.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,o.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"values")),(0,o.kt)("td",a({parentName:"tr"},{align:null}),"Collection"),(0,o.kt)("td",a({parentName:"tr"},{align:null}),"Obligatoire - Collection de valeurs scalaires. All values must be of the same type. Supported types:",(0,o.kt)("li",null,"cha\xeenes"),(0,o.kt)("li",null,"nombres"),(0,o.kt)("li",null,"dates"),(0,o.kt)("li",null,"times"),"If empty or not defined, the combo box is empty")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,o.kt)("td",a({parentName:"tr"},{align:null}),"identique \xe0 Collection"),(0,o.kt)("td",a({parentName:"tr"},{align:null}),"Text entered by the user")))),(0,o.kt)("p",null,"If the object contains other properties, they are ignored."),(0,o.kt)("p",null,"When the user enters text into the combo box, the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentValue")," property of the object gets the entered text."),(0,o.kt)("h3",a({},{id:"utiliser-un-tableau"}),"Utiliser un tableau"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("strong",{parentName:"p"},"Using an array")," in the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/dropdownListOverview#using-an-array"}),"drop-down list page")," for information about how to initialize the array."),(0,o.kt)("p",null,"When the user enters text into the combo box, the 0th element of the array gets the entered text."),(0,o.kt)("h3",a({},{id:"utiliser-une-\xe9num\xe9ration"}),"Utiliser une \xe9num\xe9ration"),(0,o.kt)("p",null,"If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. Cette possibilit\xe9 facilite la gestion des champs/variables \xe9num\xe9r\xe9(e) s."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Si vous utilisez une \xe9num\xe9ration hi\xe9rarchique, seul le premier niveau sera affich\xe9 et s\xe9lectionnable.")),(0,o.kt)("p",null,"To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," of the form object in the Property List."),(0,o.kt)("p",null,"When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("strong",{parentName:"p"},"Using a choice")," in the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/dropdownListOverview#using-a-choice-list"}),"drop-down list page")," for more information."),(0,o.kt)("h2",a({},{id:"options"}),"Options"),(0,o.kt)("p",null,"Combo box type objects accept two specific options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#automatic-insertion"}),"Automatic insertion"),": enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/fr/19/FormObjects/propertiesRangeOfValues#excluded-list"}),"Exclusion ")," (liste de valeurs exclues) : permet d'\xe9tablir une liste dont les valeurs ne peuvent pas \xeatre saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas accept\xe9e et un message d'erreur s'affiche.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"Associating a ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesRangeOfValues#required-list"}),"list of required values")," is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/dropdownListOverview#overview"}),"drop-down list")," object."))))),(0,o.kt)("h2",a({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},67041:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABqCAIAAABBIEYYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAaFSURBVHhe7Zw9ayNXFIb1W9y7dOEt/B8cAoZULoJKF1vlD6xQFdnqwpLCJrCRC3dRI1gIacwitjJKwLCNtUhYi9a4iTvlPfd7RjOjkSLNzkjvwyHcOXOvVvA+undk76b2RMjTk3hQ++lvVlXr+19WLm2AxngwI9UEcfaH/65QqR68/fB1LaXfHykGekAEekCETXhwfVSr1Y6vg1DROTi5cZe5Sr8/Ugwb8uBgb792dOFCpQdlZ1MenFw09vYbb0yo9KDsbMyDm69nx7W91x9VqIEHN409nBrC6dkHmWO3jeic42v9/kgxbNCDzMHXtxenYsnFqXmSwOX+gfbmzWsZ6PdHimGjHki6Kmbb8ZuBArfQUcfH2bE7Sj6e7Mtk/f5IMcx78Nsff8U6qPlmPg8kVOz8oQdyHKhbbgJuXR8ZA07PrBn6/ZFiiHnw5z+P35388POvv4dNXKKJW2EzpwduD9Ad3HIPDabkFAhOhKNjdV7Qg2KZ3w9iKiRKgMrtgUrXehA9GvSTgXTCu2as3x8phnkPUE6FNAlQGR6Y+P9n6fdHiiHRA5RWIU0CFD3YKtI8QMGANAlQ9GCryPAgu1I9IFWEHhCBHhCBHhCBHhCBHhBhzR6wqlpzfxs9f2kDNOLBj2Qn0QZojAdxy1jbXvSAJUUPWFLZHnzumudQ8HJ+7pel1vmX+5wzWWWqhR6YUF+9f5k9fnkVrGRtUyH04XA4Ho8nk8l0Ok31IDpmbVsh9H6/PxgMHh4eoEIuD+p35qiY3X12t7p3L7PZc91P+3T+aGZ13+lXYJW3EHqn0+n1elBhNBotdS64uxjM7t9/ijTfPVtLWBUohN5ut6ECdgUcEBnPifis22XI2OA8MLr4sTwwOjlYZS+E3mw2r66ubm9vcTRknAu2JGDtBHb+dA/UZNlFeC5UoRB6o9G4vLzM7QE2A31A+K+IqR6goAJ3hfLX8h64B8DH527GfuDPjuBAYZW1sj1g7UrRA5YUPWBJJXtgTnayM9ADItADImR70K2bf9Is1IMfLqaDJYct+VFi61APSBVY6IHNUnLNY0KwhFSH3B7kDZgeVJLcHmDotgPZG8KzQqbV6+jh0i2JDlrmhKEj5WShBw5ngQtYhmok03wrjN8MAmH865ASkXs/cM99fjNQSKzBtEj8sUFsTEpEbg/cg2LCA2Ni0vOD2JiUiOX3A2nGwkxMen4QG5MSsdADR5BfeDTwXNgKsj0guwI9IAI9IAI9IAI9IAI9IEKWB/iSFyPlOx+/DVaePPvBwpjpQeWhB0RY3oPgh4n21wxuAgbotiK/gXA3ExaSsrCsB5K0STHyGwcM5NrcQiNwRA0TF5KysKQHQdYgyPjwMJKtvYOB7iYvJGVhXR4oEYJsMRFr9H/NNT0oMUt6oCI3EfpozYRwnhKhXrcapCwkZWFZD3SKmjBjPVb3bDtIXpGwkJSFPB6sCDzgp74qbMwDORf4sa8Mm/BAHwC0oEpsbD8glYIeEIEeECHbA/nq5+DD/xaz0AP7uCcPf2sxIXhNUhpye7C2/OhBGcntAYZuO/A/GQy2CNtU/7bZrorPxKtYYtdr2WvIqiz0wOGCkqa5kJh15L6poo83ozOtJZ7EJimO3PuBC1IG/sOLGXKBps/RrkqcGYscV4agSQontwcu1TV64CdE1pPiWX4/kKaN1wfpm9JbMNO+phv6FyffhoUeOIKcVNTxpp2b8pzoZ5qJYoW9HfmbCuQbkO3BSviPPqkM6/dAPu78bFeNdXngDwD3SEAqxPr3A1JF6AER6AERFnngvzmufOrjJfjcWHYyPQi/Ad63WiuKQA8qQKYH60mQHlSATA/UqRDLUFoas1OomLP+N9qBB8G3S7/P2JbpzDVIAWR7AEwsc5m4dJUY+rYM58OLzAzCVk30IivcZBnaEdk4Cz1QKBlMXpKmxqXr8grHDtuUF/GZoysX6pX9GmOdJaII2SD5PHAh+iwxWocHCp2+XEbnkMLI9KDbsqFKPhKmC9o2FnvgexjZkOfyRkPNkjlzL0E2TvZ+IKkYggAF/5viMPtwDPTyoGNX+6b/E6wWfg7PheLI9oDsCvSACPSACMkekB0k7kGM4XDY7/c7nU673W42m5hNthLki5SRNRJP8GA8Hg8Gg16vh0lXV1dQhmwlyBcpI+vRaJTgwWQywUaB2zAFmwbZVpAvUkbWSDzBg+l0ihtwBNsFJpFtBfli70fW0+n0PxRXIKjzsNpiAAAAAElFTkSuQmCC"}}]);