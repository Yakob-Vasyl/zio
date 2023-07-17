"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[88714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"middleware-basic-authentication",title:"Middleware Basic Authentication Example",sidebar_label:"Middleware Basic Authentication"},o=void 0,c={unversionedId:"zio-http/examples/advanced/middleware-basic-authentication",id:"zio-http/examples/advanced/middleware-basic-authentication",title:"Middleware Basic Authentication Example",description:"",source:"@site/docs/zio-http/examples/advanced/middleware-basic-authentication.md",sourceDirName:"zio-http/examples/advanced",slug:"/zio-http/examples/advanced/middleware-basic-authentication",permalink:"/zio-http/examples/advanced/middleware-basic-authentication",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/advanced/middleware-basic-authentication.md",tags:[],version:"current",frontMatter:{id:"middleware-basic-authentication",title:"Middleware Basic Authentication Example",sidebar_label:"Middleware Basic Authentication"},sidebar:"ecosystem-sidebar",previous:{title:"Concrete Entity",permalink:"/zio-http/examples/advanced/concrete-entity"},next:{title:"Middleware CORS Handling",permalink:"/zio-http/examples/advanced/middleware-cors-handling"}},p={},l=[],s={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport zio.http.HttpAppMiddleware.basicAuth\nimport zio.http._\n\nobject BasicAuth extends ZIOAppDefault {\n\n  // Http app that requires a JWT claim\n  val user: HttpApp[Any, Nothing] = Http.collect[Request] { case Method.GET -> Root / "user" / name / "greet" =>\n    Response.text(s"Welcome to the ZIO party! ${name}")\n  }\n\n  // Composing all the HttpApps together\n  val app: HttpApp[Any, Nothing] = user @@ basicAuth("admin", "admin")\n\n  // Run it like any simple app\n  val run = Server.serve(app).provide(Server.default)\n}\n\n')))}u.isMDXComponent=!0}}]);