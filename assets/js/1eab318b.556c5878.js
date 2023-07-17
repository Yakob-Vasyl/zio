"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[13067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,b=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?s.createElement(b,o(o({ref:t},m),{},{components:n})):s.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const i={id:"index",title:"Introduction to ZIO Memberlist",sidebar_label:"ZIO Memberlist"},o=void 0,a={unversionedId:"zio-memberlist/index",id:"zio-memberlist/index",title:"Introduction to ZIO Memberlist",description:"ZIO-memberlist let you form cluster of multiply machines and by using gossip protocol which sends periodically messages between nodes maintain cluster and detects failining nodes.",source:"@site/docs/zio-memberlist/index.md",sourceDirName:"zio-memberlist",slug:"/zio-memberlist/",permalink:"/zio-memberlist/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-memberlist/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Memberlist",sidebar_label:"ZIO Memberlist"},sidebar:"ecosystem-sidebar",previous:{title:"Testing",permalink:"/zio-logging/testing"},next:{title:"ZIO Meta",permalink:"/zio-meta/"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"First Cluster",id:"first-cluster",level:2},{value:"Seeds nodes",id:"seeds-nodes",level:3},{value:"Static list of nodes",id:"static-list-of-nodes",level:4},{value:"Kubernetes service DNS",id:"kubernetes-service-dns",level:4},{value:"Define messages",id:"define-messages",level:2},{value:"Start Cluster",id:"start-cluster",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ZIO-memberlist let you form cluster of multiply machines and by using gossip protocol which sends periodically messages between nodes maintain cluster and detects failining nodes. "),(0,r.kt)("p",null,"Target for this library are users that builds distributed systems from the groud up. It could potentially be used to build next generation analytics platform, distributed caching solution or monitoring solutions to name a few. "),(0,r.kt)("p",null,"Name of the project come from name of Hashicorp project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/memberlist"},"memberlist"),". "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ZIO-memberlist")," is available via maven repo so import in ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," is sufficient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'resolvers += Resolver.sonatypeRepo("public")\n\nlibraryDependencies += "dev.zio" %% "zio-memberlist" % "0.0.0+40-a85dc5a1+20221121-1416-SNAPSHOT" \n')),(0,r.kt)("h2",{id:"first-cluster"},"First Cluster"),(0,r.kt)("h3",{id:"seeds-nodes"},"Seeds nodes"),(0,r.kt)("p",null,"In most if not all of membership protocols we have a concept of seeds nodes. It is list of addresses to cluster nodes that new nodes will use to join a cluster. This list could be static list of IP addresses or it could be dns name that is dynamically updated when members join and leave. In ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO-memberslist")," we represent this via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-memberlist/blob/master/memberlist/src/main/scala/zio/memberlist/discovery/Discovery.scala"},(0,r.kt)("inlineCode",{parentName:"a"},"zio.memberlist.discovery.Discovery.Service")),".\nWe provide two implementations that should allow you to start cluster."),(0,r.kt)("h4",{id:"static-list-of-nodes"},"Static list of nodes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.nio.core.SocketAddress._\n\nval seeds = Discovery.staticList(\n              Set(\n                inetSocketAddress("0.0.0.0", 5555), \n                inetSocketAddress("0.0.0.0", 5556)\n              )\n            )\n')),(0,r.kt)("h4",{id:"kubernetes-service-dns"},"Kubernetes service DNS"),(0,r.kt)("p",null,"To make this work you need to create headless service in k8 to represent cluster. Below example of service configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: zio-memberlist-srv\nspec:\n  clusterIP: None\n  publishNotReadyAddresses=True\n  ports:\n    - port: 5555\n      targetPort: swim\n      protocol: UDP\n      name: swim\n  selector:\n    app: zio-memberlist-node\n\n")),(0,r.kt)("p",null,"and code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.memberslist.discovery.Discovery\nimport zio.duration._\nimport zio.nio.core.InetAddress\n\nval seeds = Discovery.k8Dns(\n              InetAddress.byName(\n                "name-of-namespace.zio-memberlist-srv", \n                10.seconds, \n                5555\n              )\n            )\n')),(0,r.kt)("h2",{id:"define-messages"},"Define messages"),(0,r.kt)("p",null,"ZIO-memberlist allow you to send messages to other nodes in the cluster. However there is important limitation. Since ZIO-memberlist uses UDP for comunication your messages need to respect MTU. "),(0,r.kt)("p",null,"Here is example of messages that we could use to run Chaos experiment on the cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import upickle.default._\nimport zio.memberlist._\n\nsealed trait ChaosMonkey\n\nobject ChaosMonkey {\n  final case object SimulateCpuSpike extends ChaosMonkey\n\n  implicit val cpuSpikeCodec: ByteCodec[SimulateCpuSpike.type] =\n    ByaateCodec.fromReadWriter(macroRW[SimulateCpuSpike.type])\n\n  implicit val codec: ByteCodec[ChaosMonkey] =\n    ByteCodec.tagged[ChaosMonkey][\n      SimulateCpuSpike.type\n    ]\n}\n")),(0,r.kt)("p",null,"As you see apart of messages we need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteCodec")," instances that will be used to decode and encode your messages.  "),(0,r.kt)("h2",{id:"start-cluster"},"Start Cluster"),(0,r.kt)("p",null,"We need to put this all together. Let start with dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val config      = SwimConfig.fromEnv.orDie\nval logging     = Logging.console((_, msg) => msg)\nval dependencie = (ZLayer.requires[Clock] ++ logging ++ config) >+> seeds >+>  Memberlist.live[ChaosMonkey]\n")),(0,r.kt)("p",null,"And program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val program = receive[ChaosMonkey]\n      .foreach {\n        case (sender, message) =>\n          log.info(s"receive message: $message from: $sender") *>\n            ZIO.whenCase(message) {\n              case SimulateCpuSpike => log.info("simulating cpu spike")\n            }\n      }\n      .as(ExitCode.succeed)\n')))}p.isMDXComponent=!0}}]);