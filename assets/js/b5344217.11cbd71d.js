"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=s,m=u["".concat(c,".").concat(g)]||u[g]||f[g]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={id:"ignoring-tests",title:"Ignoring Tests"},i=void 0,a={unversionedId:"reference/test/aspects/ignoring-tests",id:"reference/test/aspects/ignoring-tests",title:"Ignoring Tests",description:"To ignore running a test, we can use the ignore test aspect:",source:"@site/docs/reference/test/aspects/ignoring-tests.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/ignoring-tests",permalink:"/reference/test/aspects/ignoring-tests",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/ignoring-tests.md",tags:[],version:"current",frontMatter:{id:"ignoring-tests",title:"Ignoring Tests"},sidebar:"reference-sidebar",previous:{title:"Flaky and Non-flaky Tests",permalink:"/reference/test/aspects/flaky-and-non-flaky-tests"},next:{title:"Non-deterministic Test Data",permalink:"/reference/test/aspects/non-deterministic-test-data"}},c={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To ignore running a test, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"ignore")," test aspect:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("an ignored test") {\n  assertTrue(false)\n} @@ TestAspect.ignore\n')),(0,s.kt)("p",null,"To fail all ignored tests, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"success")," test aspect:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\nsuite("sample tests")(\n  test("an ignored test") {\n    assertTrue(false)\n  } @@ TestAspect.ignore,\n  test("another ignored test") {\n    assertTrue(true)\n  } @@ TestAspect.ignore\n) @@ TestAspect.success\n')))}f.isMDXComponent=!0}}]);