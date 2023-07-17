"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[61805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},11124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"getting-started",title:"Getting Started with Quill",sidebar_label:"Getting Started"},o=void 0,l={unversionedId:"zio-quill/getting-started",id:"zio-quill/getting-started",title:"Getting Started with Quill",description:"### Scastie is a great tool to try out Quill without having to prepare a local environment. It works with mirror contexts, see this snippet as an example.",source:"@site/docs/zio-quill/getting-started.md",sourceDirName:"zio-quill",slug:"/zio-quill/getting-started",permalink:"/zio-quill/getting-started",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-quill/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started with Quill",sidebar_label:"Getting Started"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Quill",permalink:"/zio-quill/"},next:{title:"Writing Queries",permalink:"/zio-quill/writing-queries"}},s={},u=[{value:"Choosing a Module",id:"choosing-a-module",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("h3",{parentName:"blockquote",id:"scastie-is-a-great-tool-to-try-out-quill-without-having-to-prepare-a-local-environment-it-works-with-mirror-contexts-see-this-snippet-as-an-example"},(0,i.kt)("a",{parentName:"h3",href:"https://scastie.scala-lang.org/"},"Scastie")," is a great tool to try out Quill without having to prepare a local environment. It works with ",(0,i.kt)("a",{parentName:"h3",href:"/zio-quill/contexts#mirror-context"},"mirror contexts"),", see ",(0,i.kt)("a",{parentName:"h3",href:"https://scastie.scala-lang.org/QwOewNEiR3mFlKIM7v900A"},"this")," snippet as an example.")),(0,i.kt)("p",null,"Quill has integrations with many libraries. If you are using a regular RDBMS e.g. PostgreSQL\nand want to use Quill to query it with an asychronous, non-blocking, reactive application, the easiest way to get\nstarted is by using an awesome library called ZIO."),(0,i.kt)("p",null,"A simple ZIO + Quill application looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class Person(name: String, age: Int)\n\nclass DataService(quill: Quill.Postgres[SnakeCase]) {\n  import quill._\n  def getPeople: ZIO[Any, SQLException, List[Person]] = run(query[Person])\n}\nobject DataService {\n  def getPeople: ZIO[DataService, SQLException, List[Person]] =\n    ZIO.serviceWithZIO[DataService](_.getPeople)\n\n  val live = ZLayer.fromFunction(new DataService(_))\n}\nobject Main extends ZIOAppDefault {\n  override def run = {\n    DataService.getPeople\n      .provide(\n        DataService.live,\n        Quill.Postgres.fromNamingStrategy(SnakeCase),\n        Quill.DataSource.fromPrefix("myDatabaseConfig")\n      )\n      .debug("Results")\n      .exitCode\n  }\n}\n')),(0,i.kt)("p",null,"Add the following to build.sbt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "io.getquill"          %% "quill-jdbc-zio" % "4.6.1",\n  "org.postgresql"       %  "postgresql"     % "42.3.1"\n)\n')),(0,i.kt)("p",null,"You can find this code (with some more examples) complete with a docker-provided Postgres database ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deusaquilus/zio-quill-gettingstarted"},"here"),".\nA veriety of other examples using Quill with ZIO are available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-quill/tree/master/quill-jdbc-zio/src/test/scala/io/getquill/examples"},"examples")," folder."),(0,i.kt)("h2",{id:"choosing-a-module"},"Choosing a Module"),(0,i.kt)("p",null,"Choose the quill module that works for you!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are starting from scratch with a regular RDBMS try using the ",(0,i.kt)("inlineCode",{parentName:"li"},"quill-jdbc-zio")," module as shown above."),(0,i.kt)("li",{parentName:"ul"},"If you are developing a legacy Java project and don't want/need reactive, use ",(0,i.kt)("inlineCode",{parentName:"li"},"quill-jdbc"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are developing a project with Cats and/or Monix, try ",(0,i.kt)("inlineCode",{parentName:"li"},"quill-jdbc-monix"),"."),(0,i.kt)("li",{parentName:"ul"},'If you like to "live dangerously" and want to try a socket-level async library, try ',(0,i.kt)("inlineCode",{parentName:"li"},"quill-jasync-postgres"),"\nor ",(0,i.kt)("inlineCode",{parentName:"li"},"quill-jasync-mysql"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are using Cassandra, Spark, or OrientDB, try the corresponding modules for each of them.")))}d.isMDXComponent=!0}}]);