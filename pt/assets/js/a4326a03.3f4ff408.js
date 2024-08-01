/*! For license information please see a4326a03.3f4ff408.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42743],{30447:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(474848),d=s(28453);const i={id:"CryptoKeyClass",title:"CryptoKey"},t=void 0,c={id:"API/CryptoKeyClass",title:"CryptoKey",description:"The CryptoKey class in the 4D language encapsulates an asymmetric encryption key pair.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/pt/20-R5/API/CryptoKeyClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FCryptoKeyClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/pt/20-R5/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/pt/20-R5/API/DataClassClass"}},l={},h=[{value:"Exemplo",id:"exemplo",level:3},{value:"Resumo",id:"resumo",level:3},{value:"4D. CryptoKey.new()",id:"4d-cryptokeynew",level:2},{value:"<em>par\xe2metros</em>",id:"par\xe2metros",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>op\xe7\xf5es</em>",id:"op\xe7\xf5es",level:4},{value:"<em>Resultado</em>",id:"resultado",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>op\xe7\xf5es</em>",id:"op\xe7\xf5es-1",level:5},{value:"<em>Resultado</em>",id:"resultado-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Resultado</em>",id:"resultado-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Resultado</em>",id:"resultado-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>op\xe7\xf5es</em>",id:"op\xe7\xf5es-2",level:4},{value:"<em>Resultado</em>",id:"resultado-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>op\xe7\xf5es</em>",id:"op\xe7\xf5es-3",level:4},{value:"<em>Resultado</em>",id:"resultado-5",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"CryptoKey"})," class in the 4D language encapsulates an asymmetric encryption key pair."]}),"\n",(0,r.jsxs)(n.p,{children:["This class is available from the ",(0,r.jsx)(n.code,{children:"4D"})," class store."]}),"\n",(0,r.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo abaixo de exemplo firma e verifica uma mensagem utilizando um novo par de chaves ECDSA, por exemplo para criar um token web JSON ES256."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Generate a new ECDSA key pair\n$key:=4D. CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Get signature as base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verify signature\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"resumo",children:"Resumo"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#4dcryptokeynew",children:[(0,r.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),(0,r.jsx)(n.br,{}),"creates a new ",(0,r.jsx)(n.code,{children:"4D.CryptoKey"})," object encapsulating an encryption key pair"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#curve",children:[(0,r.jsx)(n.strong,{children:".curve"})," : Text"]}),(0,r.jsx)(n.br,{}),"normalised curve name of the key"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#decrypt",children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),(0,r.jsx)(n.br,{}),"decrypts the ",(0,r.jsx)(n.em,{children:"message"})," parameter using the ",(0,r.jsx)(n.strong,{children:"private"})," key"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#encrypt",children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),(0,r.jsx)(n.br,{}),"encrypts the ",(0,r.jsx)(n.em,{children:"message"})," parameter using the ",(0,r.jsx)(n.strong,{children:"public"})," key"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getprivatekey",children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),(0,r.jsx)(n.br,{}),"returns the private key of the ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getpublickey",children:[(0,r.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),(0,r.jsx)(n.br,{}),"returns the public key of the ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#sign",children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),(0,r.jsx)(n.br,{}),"signs the utf8 representation of a ",(0,r.jsx)(n.em,{children:"message"})," string"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#size",children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,r.jsx)(n.br,{}),"the size of the key in bits"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#type",children:[(0,r.jsx)(n.strong,{children:".type"})," : Text"]}),(0,r.jsx)(n.br,{}),'name of the key type - "RSA", "ECDSA", "PEM"']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#verify",children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),(0,r.jsx)(n.br,{}),"verifies the base64 signature against the utf8 representation of ",(0,r.jsx)(n.em,{children:"message"})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4d-cryptokeynew",children:"4D. CryptoKey.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Par\xe2metros para gerar ou carregar um par de chaves"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"result"}),(0,r.jsx)(n.td,{children:"4D. CryptoKey"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto que cont\xe9m um par de chaves de encripta\xe7\xe3o"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"4D.CryptoKey.new()"})," function creates a new ",(0,r.jsx)(n.code,{children:"4D.CryptoKey"})," object encapsulating an encryption key pair, based upon the ",(0,r.jsx)(n.em,{children:"settings"})," object parameter. Permite gerar uma nova chave RSA o ECDSA, ou carregar um par de chaves existente desde uma defini\xe7\xe3o PEM."]}),"\n",(0,r.jsx)(n.h4,{id:"par\xe2metros",children:(0,r.jsx)(n.em,{children:"par\xe2metros"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#type",children:"type"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Defines the type of the key to create: ",(0,r.jsxs)(n.li,{children:['"RSA": generates a RSA key pair, using ',(0,r.jsx)(n.a,{href:"#size",children:".size"})," as size."]}),(0,r.jsxs)(n.li,{children:['"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,r.jsx)(n.a,{href:"#curve",children:".curve"})," as curve. Note that ECDSA keys cannot be used for encryption but only for signature."]}),(0,r.jsxs)(n.li,{children:['"PEM": loads a key pair definition in PEM format, using ',(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#curve",children:"curve"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da curva ECDSA"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#pem",children:"pem"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Defini\xe7\xe3o PEM de uma chave de cifrado a carregar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#size",children:"size"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"Tamanho da chave RSA em bits"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"cryptokey",children:(0,r.jsx)(n.em,{children:"CryptoKey"})}),"\n",(0,r.jsxs)(n.p,{children:["The returned ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object encapsulates an encryption key pair. \xc9 um objeto compartido e, portanto, pode ser utilizado por v\xe1rios processos 4D simultaneamente."]}),"\n",(0,r.jsx)(n.h2,{id:"curve",children:".curve"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".curve"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:'Defined only for ECDSA keys: the normalised curve name of the key. Normalmente "prime256v1" para ES256 (por defeito), "secp384r1" para ES384, "secp521r1" para ES512.'}),"\n",(0,r.jsx)(n.h2,{id:"decrypt",children:".decrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Message string to be decoded using ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})," and decrypted."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de codifica\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Estado"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".decrypt()"})," function decrypts the ",(0,r.jsx)(n.em,{children:"message"})," parameter using the ",(0,r.jsx)(n.strong,{children:"private"})," key. O algoritmo utilizado depende do tipo da chave."]}),"\n",(0,r.jsxs)(n.p,{children:["The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"op\xe7\xf5es",children:(0,r.jsx)(n.em,{children:"op\xe7\xf5es"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Encoding used to convert the ",(0,r.jsx)(n.code,{children:"message"}),' parameter into the binary representation to decrypt. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1rio decifrado na string de resultados. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padr\xe3o \xe9 "UTF-8".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsxs)(n.p,{children:["The function returns a status object with ",(0,r.jsx)(n.code,{children:"success"})," property set to ",(0,r.jsx)(n.code,{children:"true"})," if the ",(0,r.jsx)(n.em,{children:"message"})," could be successfully decrypted."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a mensagem tiver sido decifrada com \xeaxito"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"result"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Message decrypted and decoded using the ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["If ",(0,r.jsx)(n.code,{children:"success"})," is ",(0,r.jsx)(n.code,{children:"false"}),", may contain a collection of errors"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["In case the ",(0,r.jsx)(n.em,{children:"message"})," couldn't be decrypted because it was not encrypted with the same key or algorithm, the ",(0,r.jsx)(n.code,{children:"status"})," object being returned contains an error collection in ",(0,r.jsx)(n.code,{children:"status.errors"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"encrypt",children:".encrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Message string to be encoded using ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})," and encrypted."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de decodifica\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Message encrypted and encoded using the ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".encrypt()"})," function encrypts the ",(0,r.jsx)(n.em,{children:"message"})," parameter using the ",(0,r.jsx)(n.strong,{children:"public"})," key. O algoritmo utilizado depende do tipo da chave."]}),"\n",(0,r.jsxs)(n.p,{children:["The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,r.jsx)(n.h5,{id:"op\xe7\xf5es-1",children:(0,r.jsx)(n.em,{children:"op\xe7\xf5es"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Encoding used to convert the ",(0,r.jsx)(n.code,{children:"message"}),' parameter into the binary representation to encrypt. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padr\xe3o \xe9 "UTF-8".']})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-1",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsx)(n.p,{children:"O valor devolvido \xe9 uma mensagem encriptada."}),"\n",(0,r.jsx)(n.h2,{id:"getprivatekey",children:".getPrivateKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Chave privada em formato PEM"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".getPrivateKey()"})," function  returns the private key of the ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object in PEM format, or an empty string if none is available."]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-2",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsx)(n.p,{children:"O valor devolvido \xe9 a chave privada."}),"\n",(0,r.jsx)(n.h2,{id:"getpublickey",children:".getPublicKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Chave p\xfablica em formato PEM"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".getPublicKey()"})," function returns the public key of the ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object in PEM format, or an empty string if none is available."]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-3",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsx)(n.p,{children:"O valor devolvido \xe9 a chave p\xfablica."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pem",children:".pem"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".pem"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:"Defini\xe7\xe3o PEM de uma chave de cifrado a carregar. Se a chave for uma chave privada, ser\xe1 deduzido dela a chave p\xfablica RSA ou ECDSA."}),"\n",(0,r.jsx)(n.h2,{id:"sign",children:".sign()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"String mensagem a assinar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de assinatura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:'Signature in Base64 or Base64URL representation, depending on "encoding" option'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".sign()"})," function signs the utf8 representation of a ",(0,r.jsx)(n.em,{children:"message"})," string using the ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object keys and provided ",(0,r.jsx)(n.em,{children:"options"}),". It returns its signature in base64 or base64URL format, depending on the value of the ",(0,r.jsx)(n.code,{children:"options.encoding"})," attribute you passed."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave ",(0,r.jsx)(n.strong,{children:"privada"})," v\xe1lida."]}),"\n",(0,r.jsx)(n.h4,{id:"op\xe7\xf5es-2",children:(0,r.jsx)(n.em,{children:"op\xe7\xf5es"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave n\xe3o for uma chave RSA. Pass ",(0,r.jsx)(n.code,{children:"true"})," when producing a JWT for PS@ algorithm"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Representation of provided signature. Possible values are "Base64" or "Base64URL". Por padr\xe3o \xe9 "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-4",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsxs)(n.p,{children:["A representa\xe7\xe3o utf8 da string ",(0,r.jsx)(n.em,{children:"message"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,r.jsx)(n.p,{children:"Defined only for RSA keys: the size of the key in bits. ."}),"\n",(0,r.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:'Contains the name of the key type - "RSA", "ECDSA", "PEM" .'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"RSA": an RSA key pair, using ',(0,r.jsx)(n.code,{children:"settings.size"})," as ",(0,r.jsx)(n.a,{href:"#size",children:".size"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:['"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,r.jsx)(n.code,{children:"settings.curve"})," as ",(0,r.jsx)(n.a,{href:"#curve",children:".curve"}),". Lembre que chaves ECDSA n\xe3o podem ser usadas para a criptografia mas s\xf3 pela assinatura."]}),"\n",(0,r.jsxs)(n.li,{children:['"PEM": a key pair definition in PEM format, using ',(0,r.jsx)(n.code,{children:"settings.pem"})," as ",(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verify",children:".verify()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"String de mensagem utilizada para gerar a assinatura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"signature"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Signature to verify, in Base64 or Base64URL representation, depending on ",(0,r.jsx)(n.code,{children:"options.encoding"})," value"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de assinatura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Estado da verifica\xe7\xe3o"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".verify()"})," function verifies the base64 signature against the utf8 representation of ",(0,r.jsx)(n.em,{children:"message"})," using the ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object keys and provided ",(0,r.jsx)(n.em,{children:"options"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave ",(0,r.jsx)(n.strong,{children:"p\xfablica"})," v\xe1lida."]}),"\n",(0,r.jsx)(n.h4,{id:"op\xe7\xf5es-3",children:(0,r.jsx)(n.em,{children:"op\xe7\xf5es"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave n\xe3o for uma chave RSA. Pass ",(0,r.jsx)(n.code,{children:"true"})," when verifying a JWT for PS@ algorithm"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string  resultante. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-5",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsxs)(n.p,{children:["The function returns a status object with ",(0,r.jsx)(n.code,{children:"success"})," property set to ",(0,r.jsx)(n.code,{children:"true"})," if ",(0,r.jsx)(n.code,{children:"message"})," could be successfully verified (i.e. the signature matches)."]}),"\n",(0,r.jsxs)(n.p,{children:["In case the signature couldn't be verified because it was not signed with the same ",(0,r.jsx)(n.em,{children:"message"}),", key or algorithm, the ",(0,r.jsx)(n.code,{children:"status"})," object being returned contains an error collection in ",(0,r.jsx)(n.code,{children:"status.errors"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a assinatura corresponder com a mensagem"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["If ",(0,r.jsx)(n.code,{children:"success"})," is ",(0,r.jsx)(n.code,{children:"false"}),", may contain a collection of errors"]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var r=s(296540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var r,i={},h=null,a=null;for(r in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:d,type:e,key:h,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=h,n.jsxs=h},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(296540);const d={},i=r.createContext(d);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);