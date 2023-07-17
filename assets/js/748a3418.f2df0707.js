"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[32637],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10143:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={id:"server",title:"Server"},i=void 0,p={unversionedId:"zio-http/dsl/server",id:"zio-http/dsl/server",title:"Server",description:"This section describes, ZIO HTTP Server and different configurations you can provide while creating the Server",source:"@site/docs/zio-http/dsl/server.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/server",permalink:"/zio-http/dsl/server",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/server.md",tags:[],version:"current",frontMatter:{id:"server",title:"Server"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Http",permalink:"/zio-http/"},next:{title:"Http",permalink:"/zio-http/dsl/http"}},s={},l=[{value:"Start a ZIO HTTP Server with default configurations",id:"start-a-zio-http-server-with-default-configurations",level:2},{value:"Start a ZIO HTTP Server with custom configurations.",id:"start-a-zio-http-server-with-custom-configurations",level:2}],c={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes, ZIO HTTP Server and different configurations you can provide while creating the Server"),(0,a.kt)("h2",{id:"start-a-zio-http-server-with-default-configurations"},"Start a ZIO HTTP Server with default configurations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio._\n\ndef app: App[Any] = ???\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Server.serve(app).provide(Server.default)\n// scala.NotImplementedError: an implementation is missing\n//  at scala.Predef$.$qmark$qmark$qmark(Predef.scala:344)\n//  at repl.MdocSession$MdocApp.app(server.md:14)\n//  at repl.MdocSession$MdocApp$$anonfun$1.apply(server.md:21)\n//  at repl.MdocSession$MdocApp$$anonfun$1.apply(server.md:21)\n")),(0,a.kt)("p",null,"A quick shortcut to only customize the port is ",(0,a.kt)("inlineCode",{parentName:"p"},"Server.defaultWithPort"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Server.serve(app).provide(Server.defaultWithPort(8081))\n// scala.NotImplementedError: an implementation is missing\n//  at scala.Predef$.$qmark$qmark$qmark(Predef.scala:344)\n//  at repl.MdocSession$MdocApp.app(server.md:14)\n//  at repl.MdocSession$MdocApp$$anonfun$2.apply(server.md:31)\n//  at repl.MdocSession$MdocApp$$anonfun$2.apply(server.md:31)\n")),(0,a.kt)("p",null,"Or to customize more properties of the ",(0,a.kt)("em",{parentName:"p"},"default configuration"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Server.serve(app).provide(\n  Server.defaultWith(\n    _.port(8081).enableRequestStreaming\n  )\n)\n// scala.NotImplementedError: an implementation is missing\n//  at scala.Predef$.$qmark$qmark$qmark(Predef.scala:344)\n//  at repl.MdocSession$MdocApp.app(server.md:14)\n//  at repl.MdocSession$MdocApp$$anonfun$3.apply(server.md:41)\n//  at repl.MdocSession$MdocApp$$anonfun$3.apply(server.md:41)\n")),(0,a.kt)("h2",{id:"start-a-zio-http-server-with-custom-configurations"},"Start a ZIO HTTP Server with custom configurations."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"live")," layer expects a ",(0,a.kt)("inlineCode",{parentName:"p"},"Server.Config")," holding the custom configuration for the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Server\n  .serve(app)\n  .provide(\n    ZLayer.succeed(Server.Config.default.port(8081)),\n    Server.live\n  )\n// scala.NotImplementedError: an implementation is missing\n//  at scala.Predef$.$qmark$qmark$qmark(Predef.scala:344)\n//  at repl.MdocSession$MdocApp.app(server.md:14)\n//  at repl.MdocSession$MdocApp$$anonfun$4.apply(server.md:56)\n//  at repl.MdocSession$MdocApp$$anonfun$4.apply(server.md:57)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"configured")," layer loads the server configuration using the application's ",(0,a.kt)("em",{parentName:"p"},"ZIO configuration provider"),", which\nis using the environment by default but can be attached to a different backends using\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-config/"},"ZIO Config library"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Server\n  .serve(app)\n  .provide(\n    Server.configured()\n  )\n// scala.NotImplementedError: an implementation is missing\n//  at scala.Predef$.$qmark$qmark$qmark(Predef.scala:344)\n//  at repl.MdocSession$MdocApp.app(server.md:14)\n//  at repl.MdocSession$MdocApp$$anonfun$6.apply(server.md:71)\n//  at repl.MdocSession$MdocApp$$anonfun$6.apply(server.md:72)\n")),(0,a.kt)("p",null,"In order to customize Netty-specific properties, the ",(0,a.kt)("inlineCode",{parentName:"p"},"customized")," layer can be used, providing not only ",(0,a.kt)("inlineCode",{parentName:"p"},"Server.Config"),"\nbut also ",(0,a.kt)("inlineCode",{parentName:"p"},"NettyConfig"),"."))}u.isMDXComponent=!0}}]);