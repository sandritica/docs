"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35027],{795287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var s=t(474848),r=t(28453);const d={id:"vp-set-field",title:"VP SET FIELD"},i=void 0,c={id:"ViewPro/commands/vp-set-field",title:"VP SET FIELD",description:"VP SET FIELD ( rangeObj Pointer { ; formatPattern : Text } )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-field.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-field",permalink:"/docs/ja/ViewPro/commands/vp-set-field",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-field.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-set-field",title:"VP SET FIELD"},sidebar:"docs",previous:{title:"VP SET DEFAULT STYLE",permalink:"/docs/ja/ViewPro/commands/vp-set-default-style"},next:{title:"VP SET FORMULA",permalink:"/docs/ja/ViewPro/commands/vp-set-formula"}},l={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET FIELD"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"field"})," : Pointer { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30ec\u30f3\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,s.jsx)(n.td,{children:"\u30dd\u30a4\u30f3\u30bf\u30fc"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u4eee\u60f3\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3078\u306e\u53c2\u7167"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"\u30c6\u30ad\u30b9\u30c8"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP SET FIELD"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30eb\u30ec\u30f3\u30b8\u306b\u30014D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u4eee\u60f3\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"rangeObj"})," \u306b\u306f\u3001\u5024\u3092\u5272\u308a\u5f53\u3066\u305f\u3044\u30bb\u30eb\u306e\u30ec\u30f3\u30b8\u3092\u6e21\u3057\u307e\u3059\u3002 ",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5f15\u6570\u306b\u8907\u6570\u306e\u30bb\u30eb\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001\u6307\u5b9a\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u305d\u308c\u305e\u308c\u306e\u30bb\u30eb\u306b\u5bfe\u3057\u3066\u7e70\u308a\u8fd4\u3057\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"field"})," \u5f15\u6570\u306f\u3001",(0,s.jsx)(n.em,{children:"rangeObj"})," \u306e\u30ec\u30f3\u30b8\u306b\u5bfe\u3057\u3066\u5272\u308a\u5f53\u3066\u3089\u308c\u308b 4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/formulas#%E4%BB%AE%E6%83%B3%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E5%8F%82%E7%85%A7",children:"\u4eee\u60f3\u30d5\u30a3\u30fc\u30eb\u30c9"})," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u30d0\u30fc\u306b\u306f\u3001",(0,s.jsx)(n.em,{children:"field"})," \u306e\u4eee\u60f3\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u540d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 ",(0,s.jsx)(n.em,{children:"rangeObj"})," \u306b\u542b\u307e\u308c\u308b\u30bb\u30eb\u306b\u65e2\u5b58\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u305d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f ",(0,s.jsx)(n.em,{children:"field"})," \u3067\u4e0a\u66f8\u304d\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4efb\u610f\u306e ",(0,s.jsx)(n.em,{children:"formatPattern"})," \u5f15\u6570\u306f\u3001",(0,s.jsx)(n.em,{children:"field"})," \u5f15\u6570\u306b\u5bfe\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u6709\u52b9\u306a ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30ab\u30b9\u30bf\u30e0\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"})," \u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);