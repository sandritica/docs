"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29818],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(o),b=a,u=m["".concat(p,".").concat(b)]||m[b]||d[b]||n;return o?r.createElement(u,i(i({ref:t},c),{},{components:o})):r.createElement(u,i({ref:t},c))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},113:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});o(67294);var r=o(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={id:"comboBoxOverview",title:"Combo Box"},s=void 0,p={unversionedId:"FormObjects/comboBoxOverview",id:"version-19-R8/FormObjects/comboBoxOverview",title:"Combo Box",description:"A combo box is similar to a drop-down list, except that it accepts text entered from the keyboard and has additional options.",source:"@site/versioned_docs/version-19-R8/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/FormObjects/comboBoxOverview",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/FormObjects/comboBox_overview.md",tags:[],version:"19-R8",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Check Box",permalink:"/docs/FormObjects/checkboxOverview"},next:{title:"Drop-down List",permalink:"/docs/FormObjects/dropdownListOverview"}},l={},c=[{value:"Handling combo boxes",id:"handling-combo-boxes",level:2},{value:"Using an object",id:"using-an-object",level:3},{value:"Using an array",id:"using-an-array",level:3},{value:"Using a choice list",id:"using-a-choice-list",level:3},{value:"Options",id:"options",level:2},{value:"Supported Properties",id:"supported-properties",level:2}],d={toc:c};function m(e){var{components:t}=e,i=n(e,["components"]);return(0,r.kt)("wrapper",a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A combo box is similar to a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/dropdownListOverview#overview"}),"drop-down list"),", except that it accepts text entered from the keyboard and has additional options. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(33741).Z,width:"173",height:"106"})),(0,r.kt)("p",null,"Fundamentally, you treat a combo box as an enterable area that uses its object, array or a choice list as the set of default values."),(0,r.kt)("h2",a({},{id:"handling-combo-boxes"}),"Handling combo boxes"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/Events/onDataChange"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Data Change"))," event to manage entries into the enterable area, as you would for any input form object. "),(0,r.kt)("p",null,"You initialize a combo box in exactly the same way as a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/dropdownListOverview#overview"}),"drop-down list"),": using an object, an array, or a choice list. "),(0,r.kt)("h3",a({},{id:"using-an-object"}),"Using an object"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is only available in 4D projects.")),(0,r.kt)("p",null,"An ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/Concepts/object"}),"object")," encapsulating a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/Concepts/collection"}),"collection")," can be used as the data source of a combo box. The object must contain the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"values")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mandatory - Collection of scalar values. All values must be of the same type. Supported types:",(0,r.kt)("li",null,"strings"),(0,r.kt)("li",null,"numbers"),(0,r.kt)("li",null,"dates"),(0,r.kt)("li",null,"times"),"If empty or not defined, the combo box is empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"same as Collection"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Text entered by the user")))),(0,r.kt)("p",null,"If the object contains other properties, they are ignored. "),(0,r.kt)("p",null,"When the user enters text into the combo box, the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentValue")," property of the object gets the entered text."),(0,r.kt)("h3",a({},{id:"using-an-array"}),"Using an array"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("strong",{parentName:"p"},"Using an array")," in the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/dropdownListOverview#using-an-array"}),"drop-down list page")," for information about how to initialize the array."),(0,r.kt)("p",null,"When the user enters text into the combo box, the 0th element of the array gets the entered text. "),(0,r.kt)("h3",a({},{id:"using-a-choice-list"}),"Using a choice list"),(0,r.kt)("p",null,"If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. This makes it easier to manage listed fields/variables."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you use a hierarchical list, only the first level is displayed and can be selected.")),(0,r.kt)("p",null,"To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," of the form object in the Property List."),(0,r.kt)("p",null,"When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("strong",{parentName:"p"},"Using a choice")," in the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/dropdownListOverview#using-a-choice-list"}),"drop-down list page")," for more information."),(0,r.kt)("h2",a({},{id:"options"}),"Options"),(0,r.kt)("p",null,"Combo box type objects accept two specific options: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/FormObjects/propertiesDataSource#automatic-insertion"}),"Automatic insertion"),": enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/FormObjects/propertiesRangeOfValues#excluded-list"}),"Excluded List")," (list of excluded values): allows setting a list whose values cannot be entered in the combo box. If an excluded value is entered, it is not accepted and an error message is displayed.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Associating a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesRangeOfValues#required-list"}),"list of required values")," is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/dropdownListOverview#overview"}),"drop-down list")," object.")),(0,r.kt)("h2",a({},{id:"supported-properties"}),"Supported Properties"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#alpha-format"}),"Alpha Format")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#date-format"}),"Date Format")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font"}),"Font")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#time-format"}),"Time Format")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#type"}),"Type")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},33741:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);