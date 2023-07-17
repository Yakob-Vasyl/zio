"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[89334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(n),f=i,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||s;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={id:"timing-out-tests",title:"Timing-out Tests"},a=void 0,o={unversionedId:"reference/test/aspects/timing-out-tests",id:"reference/test/aspects/timing-out-tests",title:"Timing-out Tests",description:"The timeout test aspect takes a duration and times out each test. If the test case runs longer than the time specified, it is immediately canceled and reported as a failure, with a message showing that the timeout was exceeded:",source:"@site/docs/reference/test/aspects/timing-out-tests.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/timing-out-tests",permalink:"/reference/test/aspects/timing-out-tests",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/timing-out-tests.md",tags:[],version:"current",frontMatter:{id:"timing-out-tests",title:"Timing-out Tests"},sidebar:"reference-sidebar",previous:{title:"Configuring Tests",permalink:"/reference/test/aspects/configuring-tests"},next:{title:"Dynamic Test Generation",permalink:"/reference/test/dynamic-test-generation"}},c={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," test aspect takes a duration and times out each test. If the test case runs longer than the time specified, it is immediately canceled and reported as a failure, with a message showing that the timeout was exceeded:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("effects can be safely interrupted") {\n  for {\n    _ <- ZIO.attempt(println("Still going ...")).forever\n  } yield assertTrue(true)\n} @@ TestAspect.timeout(1.second)\n')),(0,i.kt)("p",null,"By applying a ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout(1.second)")," test aspect, this will work with ZIO's interruption mechanism. So when we run this test, you can see a tone of print lines, and after a second, the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," aspect will interrupt that."))}m.isMDXComponent=!0}}]);