"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[55468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?s.createElement(d,o(o({ref:t},p),{},{components:r})):s.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const a={id:"classic-assertions",title:"Classic Assertions"},o=void 0,i={unversionedId:"reference/test/assertions/classic-assertions",id:"reference/test/assertions/classic-assertions",title:"Classic Assertions",description:"In almost all cases we encourage developers using smart assertions instead of classic assertions. They are more expressive and easier to use. So you can skip reading this section.",source:"@site/docs/reference/test/assertions/classic-assertions.md",sourceDirName:"reference/test/assertions",slug:"/reference/test/assertions/classic-assertions",permalink:"/reference/test/assertions/classic-assertions",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/assertions/classic-assertions.md",tags:[],version:"current",frontMatter:{id:"classic-assertions",title:"Classic Assertions"},sidebar:"reference-sidebar",previous:{title:"Smart Assertions",permalink:"/reference/test/assertions/smart-assertions"},next:{title:"Operations",permalink:"/reference/test/assertions/operations"}},l={},c=[{value:"Asserting Ordinary Values",id:"asserting-ordinary-values",level:2},{value:"Asserting ZIO Effects",id:"asserting-zio-effects",level:2},{value:"The for-comprehension Style",id:"the-for-comprehension-style",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In almost all cases we encourage developers using ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"/reference/test/assertions/smart-assertions"},"smart assertions"))," instead of ",(0,n.kt)("a",{parentName:"p",href:"/reference/test/assertions/classic-assertions"},"classic assertions"),". They are more expressive and easier to use. So you can skip reading this section."),(0,n.kt)("p",{parentName:"admonition"},"Only use ",(0,n.kt)("em",{parentName:"p"},"classic assertions")," when you know what you are doing. There are some rare cases where the smart assertions are not enough.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"assert")," and its effectful counterpart ",(0,n.kt)("inlineCode",{parentName:"p"},"assertZIO")," are the old way of asserting ordinary values and ZIO effects."),(0,n.kt)("h2",{id:"asserting-ordinary-values"},"Asserting Ordinary Values"),(0,n.kt)("p",null,"In order to test ordinary values, we should use ",(0,n.kt)("inlineCode",{parentName:"p"},"assert"),", like the example below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("sum") {\n  assert(1 + 1)(Assertion.equalTo(2))\n}\n')),(0,n.kt)("h2",{id:"asserting-zio-effects"},"Asserting ZIO Effects"),(0,n.kt)("p",null,"If we are testing an effect, we should use the ",(0,n.kt)("inlineCode",{parentName:"p"},"assertZIO")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("updating ref") {\n  val value = for {\n    r <- Ref.make(0)\n    _ <- r.update(_ + 1)\n    v <- r.get\n  } yield v\n  assertZIO(value)(Assertion.equalTo(1))\n}\n')),(0,n.kt)("h2",{id:"the-for-comprehension-style"},"The for-comprehension Style"),(0,n.kt)("p",null,"Having this all in mind, probably the most common and also most readable way of structuring tests is to pass a for-comprehension to ",(0,n.kt)("inlineCode",{parentName:"p"},"test")," function and yield a call to ",(0,n.kt)("inlineCode",{parentName:"p"},"assert")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("updating ref") {\n  for {\n    r <- Ref.make(0)\n    _ <- r.update(_ + 1)\n    v <- r.get\n  } yield assert(v)(Assertion.equalTo(v))\n}\n')))}f.isMDXComponent=!0}}]);