"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[74233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),v=a,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},16487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"server",title:"Advanced Server Example",sidebar_label:"Server"},i=void 0,p={unversionedId:"zio-http/examples/advanced/server",id:"zio-http/examples/advanced/server",title:"Advanced Server Example",description:"",source:"@site/docs/zio-http/examples/advanced/server.md",sourceDirName:"zio-http/examples/advanced",slug:"/zio-http/examples/advanced/server",permalink:"/zio-http/examples/advanced/server",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/advanced/server.md",tags:[],version:"current",frontMatter:{id:"server",title:"Advanced Server Example",sidebar_label:"Server"},sidebar:"ecosystem-sidebar",previous:{title:"Middleware CORS Handling",permalink:"/zio-http/examples/advanced/middleware-cors-handling"},next:{title:"Streaming File",permalink:"/zio-http/examples/advanced/streaming-file"}},l={},c=[],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import scala.util.Try\n\nimport zio._\n\nimport zio.http._\nimport zio.http.netty.NettyConfig\nimport zio.http.netty.NettyConfig.LeakDetectionLevel\n\nobject HelloWorldAdvanced extends ZIOAppDefault {\n  // Set a port\n  private val PORT = 0\n\n  private val fooBar: HttpApp[Any, Nothing] = Http.collect[Request] {\n    case Method.GET -> Root / "foo" => Response.text("bar")\n    case Method.GET -> Root / "bar" => Response.text("foo")\n  }\n\n  private val app = Http.collectZIO[Request] {\n    case Method.GET -> Root / "random" => Random.nextString(10).map(Response.text(_))\n    case Method.GET -> Root / "utc"    => Clock.currentDateTime.map(s => Response.text(s.toString))\n  }\n\n  val run = ZIOAppArgs.getArgs.flatMap { args =>\n    // Configure thread count using CLI\n    val nThreads: Int = args.headOption.flatMap(x => Try(x.toInt).toOption).getOrElse(0)\n\n    val config           = Server.Config.default\n      .port(PORT)\n    val nettyConfig      = NettyConfig.default\n      .leakDetection(LeakDetectionLevel.PARANOID)\n      .maxThreads(nThreads)\n    val configLayer      = ZLayer.succeed(config)\n    val nettyConfigLayer = ZLayer.succeed(nettyConfig)\n\n    (Server.install(fooBar ++ app).flatMap { port =>\n      Console.printLine(s"Started server on port: $port")\n    } *> ZIO.never)\n      .provide(configLayer, nettyConfigLayer, Server.customized)\n  }\n}\n')))}u.isMDXComponent=!0}}]);