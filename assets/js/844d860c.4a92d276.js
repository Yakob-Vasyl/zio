"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[47680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>l});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(t),d=o,l=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(l,a(a({ref:n},u),{},{components:t})):r.createElement(l,a({ref:n},u))}));function l(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=t(87462),o=(t(67294),t(3905));const i={id:"example-of-consuming-producing-and-committing-offsets",title:"Example of Consuming, Producing and Committing Offsets"},a=void 0,c={unversionedId:"zio-kafka/example-of-consuming-producing-and-committing-offsets",id:"zio-kafka/example-of-consuming-producing-and-committing-offsets",title:"Example of Consuming, Producing and Committing Offsets",description:"This example shows how to consume messages from topic topica and produce transformed messages to topicb, after which consumer offsets are committed. Processing is done in chunks using ZStreamChunk for more efficiency.",source:"@site/docs/zio-kafka/example-of-consuming-producing-and-committing-offsets.md",sourceDirName:"zio-kafka",slug:"/zio-kafka/example-of-consuming-producing-and-committing-offsets",permalink:"/zio-kafka/example-of-consuming-producing-and-committing-offsets",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-kafka/example-of-consuming-producing-and-committing-offsets.md",tags:[],version:"current",frontMatter:{id:"example-of-consuming-producing-and-committing-offsets",title:"Example of Consuming, Producing and Committing Offsets"},sidebar:"ecosystem-sidebar",previous:{title:"Consuming Kafka topics using ZIO Streams",permalink:"/zio-kafka/consuming-kafka-topics-using-zio-streams"},next:{title:"Partition Assignment And Offset Retrieval",permalink:"/zio-kafka/partition-assignment-and-offset-retrieval"}},s={},m=[],u={toc:m},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to consume messages from topic ",(0,o.kt)("inlineCode",{parentName:"p"},"topic_a")," and produce transformed messages to ",(0,o.kt)("inlineCode",{parentName:"p"},"topic_b"),", after which consumer offsets are committed. Processing is done in chunks using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZStreamChunk")," for more efficiency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.ZLayer\nimport zio.kafka.consumer._\nimport zio.kafka.producer._\nimport zio.kafka.serde._\nimport org.apache.kafka.clients.producer.ProducerRecord\n\nval consumerSettings: ConsumerSettings = ConsumerSettings(List("localhost:9092")).withGroupId("group")\nval producerSettings: ProducerSettings = ProducerSettings(List("localhost:9092"))\n\nval consumerAndProducer = \n  ZLayer.scoped(Consumer.make(consumerSettings)) ++\n    ZLayer.scoped(Producer.make(producerSettings, Serde.int, Serde.string))\n\nval consumeProduceStream = Consumer\n  .plainStream(Subscription.topics("my-input-topic"), Serde.int, Serde.long)\n  .map { record =>\n    val key: Int    = record.record.key()\n    val value: Long = record.record.value()\n    val newValue: String = value.toString\n\n    val producerRecord: ProducerRecord[Int, String] = new ProducerRecord("my-output-topic", key, newValue)\n    (producerRecord, record.offset)\n  }\n  .mapChunksZIO { chunk =>\n    val records     = chunk.map(_._1)\n    val offsetBatch = OffsetBatch(chunk.map(_._2).toSeq)\n\n    Producer.produceChunk[Any, Int, String](records) *> offsetBatch.commit.as(Chunk(()))\n  }\n  .runDrain\n  .provideSomeLayer(consumerAndProducer)\n')))}f.isMDXComponent=!0}}]);