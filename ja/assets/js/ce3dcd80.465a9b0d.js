"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91087],{536604:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=n(474848),d=n(28453);const t={id:"blob-to-picture",title:"BLOB TO PICTURE",slug:"/commands/blob-to-picture",displayed_sidebar:"docs"},r=void 0,i={id:"commands-legacy/blob-to-picture",title:"BLOB TO PICTURE",description:"BLOB TO PICTURE ( pictureBlob ; picture {; codec} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-picture.md",sourceDirName:"commands-legacy",slug:"/commands/blob-to-picture",permalink:"/docs/ja/commands/blob-to-picture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-to-picture",title:"BLOB TO PICTURE",slug:"/commands/blob-to-picture",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Pictures",permalink:"/docs/ja/category/commands/Pictures"},next:{title:"COMBINE PICTURES",permalink:"/docs/ja/commands/combine-pictures"}},o={},l=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(e){const c={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.strong,{children:"BLOB TO PICTURE"})," ( ",(0,s.jsx)(c.em,{children:"pictureBlob"})," ; ",(0,s.jsx)(c.em,{children:"picture"})," {; ",(0,s.jsx)(c.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(c.table,{children:[(0,s.jsx)(c.thead,{children:(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.th,{children:"\u5f15\u6570"}),(0,s.jsx)(c.th,{children:"\u578b"}),(0,s.jsx)(c.th,{}),(0,s.jsx)(c.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(c.tbody,{children:[(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"pictureBlob"}),(0,s.jsx)(c.td,{children:"Blob"}),(0,s.jsx)(c.td,{children:"\u2192"}),(0,s.jsx)(c.td,{children:"\u30d4\u30af\u30c1\u30e3\u3092\u683c\u7d0d\u3057\u305fBLOB"})]}),(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"picture"}),(0,s.jsx)(c.td,{children:"Picture"}),(0,s.jsx)(c.td,{children:"\u2190"}),(0,s.jsx)(c.td,{children:"BLOB\u304b\u3089\u53d6\u308a\u51fa\u3057\u305f\u30d4\u30af\u30c1\u30e3"})]}),(0,s.jsxs)(c.tr,{children:[(0,s.jsx)(c.td,{children:"codec"}),(0,s.jsx)(c.td,{children:"Text"}),(0,s.jsx)(c.td,{children:"\u2192"}),(0,s.jsx)(c.td,{children:"\u30d4\u30af\u30c1\u30e3codec ID"})]})]})]}),"\n",(0,s.jsx)(c.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsx)(c.p,{children:"BLOB TO PICTURE \u30b3\u30de\u30f3\u30c9\u306f\u3001\u5143\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u95a2\u308f\u3089\u305a\u3001BLOB\u306b\u683c\u7d0d\u3055\u308c\u305f\u30d4\u30af\u30c1\u30e3\u30924D\u306e\u30d4\u30af\u30c1\u30e3\u5909\u6570\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u633f\u5165\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(c.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f ",(0,s.jsx)(c.a,{href:"/docs/ja/commands/read-picture-file",children:"READ PICTURE FILE"}),"\u30b3\u30de\u30f3\u30c9\u3068\u540c\u69d8\u3067\u3059\u304c\u3001\u30d5\u30a1\u30a4\u30eb\u3067\u306f\u306a\u304fBLOB\u306b\u5bfe\u3057\u3066\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067BLOB\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30d4\u30af\u30c1\u30e3\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30d4\u30af\u30c1\u30e3\u306eBLOB\u3078\u306e\u30ed\u30fc\u30c9\u306f\u3001\u4f8b\u3048\u3070 ",(0,s.jsx)(c.a,{href:"/docs/ja/commands/document-to-blob",children:"DOCUMENT TO BLOB"})," \u3042\u308b\u3044\u306f ",(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-to-blob",children:"PICTURE TO BLOB"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.em,{children:"pictureBlob"}),"\u5f15\u6570\u306b\u306f\u3001\u30d4\u30af\u30c1\u30e3\u3092\u7d0d\u3081\u305fBLOB\u30bf\u30a4\u30d7\u306e\u5909\u6570\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6e21\u3057\u307e\u3059\u3002\u3053\u306e\u30d4\u30af\u30c1\u30e3\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f4D\u304c\u30cd\u30a4\u30c6\u30a3\u30d6\u306b\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3082\u306e\u3067\u3042\u308c\u3070\u3044\u305a\u308c\u306e\u5f62\u5f0f\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002 ",(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u4efb\u610f\u306e",(0,s.jsx)(c.em,{children:"codec"})," \u5f15\u6570\u3092\u6e21\u3059\u3068\u30014D\u306f\u3053\u306e\u5f15\u6570\u3067\u6307\u5b9a\u3055\u308c\u305f\u5024\u3092\u4f7f\u7528\u3057\u3066BLOB\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u307e\u3059 (\u3053\u306e3\u756a\u76ee\u306e\u5f15\u6570\u3092\u4f7f\u7528\u3057\u305f\u7279\u5225\u306a\u6a5f\u80fd\u306b\u3064\u3044\u3066\u306f\u5f8c\u8ff0\u306e\u8aac\u660e\u3092\u53c2\u7167)\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.em,{children:"picture"})," \u5f15\u6570\u306b\u306f\u30d4\u30af\u30c1\u30e3\u3092\u8868\u793a\u3059\u308b4D\u30d4\u30af\u30c1\u30e3\u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5909\u6570\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.strong,{children:"\u6ce8:"})," \u5185\u90e8\u7684\u306a\u30d4\u30af\u30c1\u30e3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f4D\u306e\u5909\u6570\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:["\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u3001BLOB\u304c\u6b63\u3057\u304f\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001",(0,s.jsx)(c.em,{children:"picture"})," \u5f15\u6570\u306b\u306f\u8868\u793a\u3059\u308b\u30d4\u30af\u30c1\u30e3\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306e",(0,s.jsx)(c.em,{children:"codec"})," \u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001BLOB\u306e\u30c7\u30b3\u30fc\u30c9\u65b9\u6cd5\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.em,{children:"codec"}),"\u306b4D\u304c\u8a8d\u8b58\u3059\u308b (",(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-codec-list",title:"PICTURE CODEC LIST",children:"PICTURE CODEC LIST"})," \u30b3\u30de\u30f3\u30c9\u304b\u3089\u8fd4\u3055\u308c\u308b) codec\u3092\u6e21\u3059\u3068\u3001\u305d\u308c\u306fBLOB\u3068\u30d4\u30af\u30c1\u30e3\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u5909\u6570\u306b\u8fd4\u3055\u308c\u308b\u30d4\u30af\u30c1\u30e3\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.em,{children:"codec"}),"\u306b4D\u304c\u8a8d\u8b58\u3067\u304d\u306a\u3044codec\u3092\u6e21\u3059\u3068\u3001\u65b0\u3057\u3044codec\u304c\u52d5\u7684\u306b\u5f15\u6570\u306b\u6e21\u3057\u305fID\u3067\u8a18\u9332\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u30664D\u306fBLOB\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3057\u305f\u30d4\u30af\u30c1\u30e3\u3092\u8fd4\u3057\u3001OK\u5909\u6570\u306b1\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408BLOB\u3092\u53d6\u308a\u51fa\u3059\u306b\u306f\u3001\u540c\u3058\u30ab\u30b9\u30bf\u30e0ID\u3092\u4f7f\u7528\u3057\u3066",(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-to-blob",title:"PICTURE TO BLOB",children:"PICTURE TO BLOB"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u7279\u5225\u306a\u30e1\u30ab\u30cb\u30ba\u30e0\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a2\u3064\u306e\u7279\u5b9a\u306e\u30cb\u30fc\u30ba\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059*:*"]}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsx)(c.li,{children:"\u30d4\u30af\u30c1\u30e3\u3067\u306a\u3044BLOB\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3057\u3066\u30d4\u30af\u30c1\u30e3\u306b\u683c\u7d0d\u3059\u308b"}),"\n",(0,s.jsx)(c.li,{children:"codec\u3092\u4f7f\u7528\u305b\u305a\u306b\u30d4\u30af\u30c1\u30e3\u3092\u30ed\u30fc\u30c9\u3059\u308b"}),"\n"]}),"\n",(0,s.jsx)(c.p,{children:"\u3053 \u308c\u3089\u306e\u30e1\u30ab\u30cb\u30ba\u30e0\u306e\u5b9f\u88c5\u306f\u7279\u306b\u3001\u30d4\u30af\u30c1\u30e3\u914d\u5217\u3092\u4f7f\u7528\u3057\u305fBLOB\u914d\u5217\u306e\u4f5c\u6210\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u914d\u5217\u306f\u5168\u4f53\u304c\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u305f\u3081\u3001\u3053\u306e\u30e1\u30ab\u30cb\u30ba\u30e0\u306f\u6ce8\u610f \u3057\u3066\u4f7f\u7528\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u5927\u304d\u306a\u30b5\u30a4\u30ba\u306eBLOB\u3067\u4f5c\u696d\u3092\u884c\u3046\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.strong,{children:"Note:"})," ",(0,s.jsx)(c.a,{href:"/docs/ja/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),' \u30b3\u30de\u30f3\u30c9\u3067\u4f5c\u6210\u3055\u308c\u305fBLOB\u306f\u81ea\u52d5\u3067\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002BLOB\u306f\u7f72\u540d\u3055\u308c\u308b\u305f\u3081\u3001\u30ab\u30d7\u30bb\u30eb\u5316\u3059\u308b\u305f\u3081\u306bcodec\u3092\u6e21\u3059\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u5834\u5408\u3001\u53cd\u5bfe\u306e\u64cd\u4f5c\u306b\u306fcodec ID\u3068\u3057\u3066".4DVarBlob"\u3092 ',(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-to-blob",children:"PICTURE TO BLOB"})," \u30b3\u30de\u30f3\u30c9\u306b\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(c.h4,{id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",children:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8"}),"\n",(0,s.jsx)(c.p,{children:"\u30b3\u30de\u30f3\u30c9\u304c\u6b63\u3057\u304f\u5b9f\u884c\u3055\u308c\u308b\u3068\u30b7\u30b9\u30c6\u30e0\u5909\u6570OK\u306f1\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u5909\u63db\u306b\u5931\u6557 (QuickTime\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u3001Blob\u306b\u8aad\u307f\u53d6\u308a\u53ef\u80fd\u306a\u30d4\u30af\u30c1\u30e3\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u306a\u3044\u3001codec\u5f15\u6570\u3092\u8a8d\u8b58\u3067\u304d\u305f\u304cBlob\u304c\u6709\u52b9\u3067\u306a\u3044\u306a\u3069) \u3057\u305f\u5834\u5408\u3001OK\u306f0\u306b\u8a2d\u5b9a\u3055\u308c\u30014D\u306e\u30d4\u30af\u30c1\u30e3\u5909\u6570\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u7a7a\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(c.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,s.jsx)(c.br,{}),"\n",(0,s.jsx)(c.a,{href:"/docs/ja/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,s.jsx)(c.br,{}),"\n",(0,s.jsx)(c.a,{href:"/docs/ja/commands/read-picture-file",children:"READ PICTURE FILE"})]})]})}function h(e={}){const{wrapper:c}={...(0,d.R)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,c,n)=>{n.d(c,{R:()=>r,x:()=>i});var s=n(296540);const d={},t=s.createContext(d);function r(e){const c=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:c},e.children)}}}]);