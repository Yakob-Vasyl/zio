"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[79766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"hmac",title:"HMAC"},o=void 0,p={unversionedId:"zio-crypto/hmac",id:"zio-crypto/hmac",title:"HMAC",description:"Hash-based message authentication codes (HMACs), are a type of",source:"@site/docs/zio-crypto/hmac.md",sourceDirName:"zio-crypto",slug:"/zio-crypto/hmac",permalink:"/zio-crypto/hmac",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-crypto/hmac.md",tags:[],version:"current",frontMatter:{id:"hmac",title:"HMAC"},sidebar:"ecosystem-sidebar",previous:{title:"Hash",permalink:"/zio-crypto/hash"},next:{title:"Symmetric Encryption",permalink:"/zio-crypto/symmetric-encryption"}},s={},c=[{value:"Algorithms",id:"algorithms",level:2},{value:"API",id:"api",level:2},{value:"String Example",id:"string-example",level:2},{value:"Byte Example",id:"byte-example",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hash-based message authentication codes (HMACs), are a type of\nmessage authentication code (MAC) that use cryptographic hash functions\nand a secret key.\nThey function as a kind of digital signature of\ndata integrity and authenticity.\nHMACs use symmetric keys. The key used to sign a message is the same as is\nused to verify the authenticity and integrity of the message."),(0,a.kt)("h2",{id:"algorithms"},"Algorithms"),(0,a.kt)("p",null,"We support HMAC-SHA1, HMAC-SHA256, HMAC-SHA384, and HMAC-SHA512."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"There are two basic functions provided: ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"verify"),"."),(0,a.kt)("p",null,"For any message ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," and key ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", we have that ",(0,a.kt)("inlineCode",{parentName:"p"},"verify(m, sign(m, k), k) == true"),"."),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"verify")," are implemented in terms of\n",(0,a.kt)("inlineCode",{parentName:"p"},"String")," (provided you specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"Charset"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"Byte"),"."),(0,a.kt)("h2",{id:"string-example"},"String Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import java.nio.charset.StandardCharsets._\n\nobject Example extends zio.App {\n  override def run(args: List[String]) = (for {\n    k        <- HMAC.genKey(HMACSHA256)\n    hmac     <- HMAC.sign(m, k, US_ASCII)\n    verified <- HMAC.verify(m, hmac, k, US_ASCII)\n  } yield verified).exitCode\n    .provideCustomLayer(HMAC.live)\n}\n")),(0,a.kt)("h2",{id:"byte-example"},"Byte Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object Example extends zio.App {\n  override def run(args: List[String]) = (for {\n    m        <- SecureRandom.nextBytes(10)\n    k        <- HMAC.genKey(HMACSHA256)\n    hmac     <- HMAC.sign(m1, k)\n    verified <- HMAC.verify(m0, hmac, k)\n  } yield verified).exitCode\n    .provideCustomLayer(HMAC.live ++ SecureRandom.live.orDie)\n}\n")))}d.isMDXComponent=!0}}]);