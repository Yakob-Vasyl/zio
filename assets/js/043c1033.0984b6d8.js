"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[95455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=s,v=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function v(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},78633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const o={id:"system",title:"System"},a=void 0,i={unversionedId:"reference/services/system",id:"reference/services/system",title:"System",description:"System service contains several useful functions related to system environments and properties. Both of system environments and system properties are key/value pairs. They are used to pass user-defined information to our application.",source:"@site/docs/reference/services/system.md",sourceDirName:"reference/services",slug:"/reference/services/system",permalink:"/reference/services/system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/services/system.md",tags:[],version:"current",frontMatter:{id:"system",title:"System"},sidebar:"reference-sidebar",previous:{title:"Random",permalink:"/reference/services/random"},next:{title:"Programming Paradigms in ZIO",permalink:"/reference/architecture/programming-paradigms-in-zio"}},l={},p=[{value:"System Environment",id:"system-environment",level:2},{value:"System Property",id:"system-property",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"System service contains several useful functions related to system environments and properties. Both of ",(0,s.kt)("strong",{parentName:"p"},"system environments")," and ",(0,s.kt)("strong",{parentName:"p"},"system properties")," are key/value pairs. They are used to pass user-defined information to our application."),(0,s.kt)("p",null,"Environment variables are global operating system level variables available to all applications running on the same machine, while properties are application-level variables provided to our application."),(0,s.kt)("h2",{id:"system-environment"},"System Environment"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"env")," function retrieves the value of an environment variable:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  user <- System.env("USER")\n  _    <- user match {\n            case Some(value) => \n              Console.printLine(s"The USER env is: $value")\n            case None        => \n              Console.printLine("Oops! The USER env is not set")\n          }\n} yield ()\n')),(0,s.kt)("h2",{id:"system-property"},"System Property"),(0,s.kt)("p",null,"Also, the System service has a ",(0,s.kt)("inlineCode",{parentName:"p"},"property")," function to retrieve the value of a system property:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  user <- System.property("LOG_LEVEL")\n  _    <- user match {\n           case Some(value) => \n             Console.printLine(s"The LOG_LEVEL property is: $value")\n           case None => \n             Console.printLine("Oops! The LOG_LEVEL property is not set")\n         }\n} yield ()\n')),(0,s.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,s.kt)("p",null,"With the ",(0,s.kt)("inlineCode",{parentName:"p"},"lineSeparator")," method, we can determine the line separator for the underlying platform:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'System.lineSeparator\n// res2: String = """\n// """\n')))}u.isMDXComponent=!0}}]);