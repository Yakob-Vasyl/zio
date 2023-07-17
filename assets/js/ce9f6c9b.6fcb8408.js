"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[91131],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"metric-reference",title:"ZIO Metric Reference"},l=void 0,o={unversionedId:"zio-metrics-connectors/metrics/metric-reference",id:"zio-metrics-connectors/metrics/metric-reference",title:"ZIO Metric Reference",description:"All ZIO metrics are defined in the form of aspects that can be applied to effects without changing",source:"@site/docs/zio-metrics-connectors/metrics/metric-reference.md",sourceDirName:"zio-metrics-connectors/metrics",slug:"/zio-metrics-connectors/metrics/metric-reference",permalink:"/zio-metrics-connectors/metrics/metric-reference",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-metrics-connectors/metrics/metric-reference.md",tags:[],version:"current",frontMatter:{id:"metric-reference",title:"ZIO Metric Reference"},sidebar:"ecosystem-sidebar",previous:{title:"Metrics",permalink:"/zio-metrics-connectors/metrics/"},next:{title:"StatsD Client",permalink:"/zio-metrics-connectors/metrics/statsd-client"}},s={},p=[{value:"Counter",id:"counter",level:2},{value:"API",id:"api",level:3},{value:"Examples",id:"examples",level:3},{value:"Gauges",id:"gauges",level:2},{value:"API",id:"api-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Histograms",id:"histograms",level:2},{value:"API",id:"api-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Summaries",id:"summaries",level:2},{value:"API",id:"api-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"Frequencies",id:"frequencies",level:2},{value:"API",id:"api-4",level:3},{value:"Examples",id:"examples-4",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All ZIO metrics are defined in the form of aspects that can be applied to effects without changing\nthe signature of the effect it is applied to."),(0,r.kt)("p",null,"Also, every ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric"),"s implementation are further qualified by a type parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"In")," that must be compatible with\nthe output type of the effect. Practically this means that, for example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric.Counter[Any]")," can be applied\nto any effect while a ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric.Counter[Double]")," can only be applied to effects producing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),"."),(0,r.kt)("p",null,"Finally, each metric understands a certain data type it can observe to manipulate its state.\nCounters, Gauges, Histograms and Summaries all understand ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," values while a Frequency understands\n",(0,r.kt)("inlineCode",{parentName:"p"},"String")," values."),(0,r.kt)("p",null,"In cases where the output type of effect is not compatible with the type required to manipulate the\nmetric, the API defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," method to construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric[_, In2, _]")," with a mapper function\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"In")," to the type required by the metric."),(0,r.kt)("p",null,"There is also an ability to set up additional conditions for metric value capture.\nSuch methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"trackAll"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trackDefectWith"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trackDurationWith"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trackErrorWith")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trackSuccessWith")," allow for\ncustomized tracking based on specific criteria. This flexibility enables us to define our own tracking logic and metrics\nbased on the requirements of our application. For example, we can track defects only when certain conditions are met or\ntrack the duration of specific ZIO effects.\nThe ZIO Metric methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"trackErrorWith")," allow capturing and tracking\nerrors in ZIO effects.\nEach of this help methods returns new ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIOAspect"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val countAllErrors: ZIOAspect[Nothing, Any, Nothing, Any, Nothing, Any] = Metric.counter("countAllErrors").contramap[Any](_ => 1L).trackError\n')),(0,r.kt)("p",null,"It is possible to add some custom tag to Metric via ",(0,r.kt)("inlineCode",{parentName:"p"},"tagged()")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val countRequests = Metric.counter("countRequests")\n\nval countRequestsByPath = for {\n  _ <- requestLogic @@ countRequests.tagged("path", path)\n} yield ()\n')),(0,r.kt)("p",null,"The API functions in this document are implemented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric")," object. An aspect can be applied to\nan effect with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@@")," operator."),(0,r.kt)("p",null,"Once an application is instrumented with Metric aspects, it can be configured with a client implementation\nthat is responsible for providing the captured metrics to an appropriate backend. Currently, ZIO Metrics supports\nclients for ",(0,r.kt)("a",{parentName:"p",href:"/zio-metrics-connectors/metrics/statsd-client"},"StatsD")," and ",(0,r.kt)("a",{parentName:"p",href:"/zio-metrics-connectors/metrics/prometheus-client"},"Prometheus")," out of the box."),(0,r.kt)("h2",{id:"counter"},"Counter"),(0,r.kt)("p",null,"A counter is simply a named variable that increases over time."),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"Create a counter which is incremented by value produced by effect every time it is executed successfully. This can be\napplied to any effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def counter(name: String): Metric.Counter[Long]\n\ndef counterDouble(name: String): Metric.Counter[Double]\n\ndef counterInt(name: String): Metric.Counter[Int]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Create a counter named ",(0,r.kt)("inlineCode",{parentName:"p"},"countAll")," which is incremented by ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," every time it is invoked."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val aspCountAll = Metric.counter("countAll").contramap[Any](_ => 1L)\n')),(0,r.kt)("p",null,"After contramap to Any, the counter can be applied to any effect. Note, that the same aspect can be applied\nto more than one effect. In the example we would count the sum of executions of both effects\nin the for comprehension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val countAll = for {\n  _ <- ZIO.unit @@ aspCountAll\n  _ <- ZIO.unit @@ aspCountAll\n} yield ()\n")),(0,r.kt)("p",null,"Create a counter named ",(0,r.kt)("inlineCode",{parentName:"p"},"countBytes")," that can be applied to effects having the output type ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val aspCountBytes = Metric.counterDouble("countBytes")\n')),(0,r.kt)("p",null,"Now we can apply it to effects producing ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," (in a real application the value might be\nthe number of bytes read from a stream or something similar):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val countBytes = nextDoubleBetween(0.0d, 100.0d) @@ aspCountBytes\n")),(0,r.kt)("h2",{id:"gauges"},"Gauges"),(0,r.kt)("p",null,"A gauge is a named variable of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," that can change over time. It can either be set\nto an absolute value or relative to the current value."),(0,r.kt)("h3",{id:"api-1"},"API"),(0,r.kt)("p",null,"Create a gauge that can be set to absolute values. It can be applied to effects yielding a Double"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def gauge(name: String): Metric.Gauge[Double]\n")),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"Create a gauge that can be set to absolute values, it can be applied to effects yielding a Double"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val aspGauge = Metric.gauge("setGauge")\n')),(0,r.kt)("p",null,"Now we can apply these aspects to effects having an output type ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),". Note that we can instrument\nan effect with any number of aspects if the type constraints are satisfied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val gaugeSomething = for {\n  _ <- nextDoubleBetween(0.0d, 100.0d) @@ aspGauge @@ aspCountAll\n} yield ()\n")),(0,r.kt)("h2",{id:"histograms"},"Histograms"),(0,r.kt)("p",null,"A histogram observes ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," values and counts the observed values in buckets. Each bucket is defined\nby an upper boundary and the count for a bucket with the upper boundary ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," increases by ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," if an observed\nvalue ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," is less or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("p",null,"As a consequence, all buckets that have a boundary ",(0,r.kt)("inlineCode",{parentName:"p"},"b1")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"b1 > b")," will increase by ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," after observing ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,r.kt)("p",null,"A histogram also keeps track of the overall count of observed values and the sum of all observed values."),(0,r.kt)("p",null,"By definition, the last bucket is always defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"Double.MaxValue"),", so that the count of observed values in\nthe last bucket is always equal to the overall count of observed values within the histogram."),(0,r.kt)("p",null,"To define a histogram aspect, the API requires that the boundaries for the histogram are specified when creating\nthe aspect."),(0,r.kt)("p",null,"The mental model for a histogram is inspired\nfrom ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/metric_types/#histogram"},"Prometheus"),"."),(0,r.kt)("h3",{id:"api-2"},"API"),(0,r.kt)("p",null,"Create a histogram that can be applied to effects producing ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," values. The values will be counted as outlined\nabove."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def histogram(name: String, boundaries: Histogram.Boundaries): Metric.Histogram[Double]\n")),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("p",null,"Create a histogram with 12 buckets: ",(0,r.kt)("inlineCode",{parentName:"p"},"0..100")," in steps of ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Double.MaxValue"),". It can be applied to effects\nyielding a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val aspHistogram =\n  Metric.histogram("myHistogram", Histogram.Boundaries.linear(0.0d, 10.0d, 11))\n')),(0,r.kt)("p",null,"Now we can apply the histogram to effects producing ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val histogram = nextDoubleBetween(0.0d, 120.0d) @@ aspHistogram \n")),(0,r.kt)("h2",{id:"summaries"},"Summaries"),(0,r.kt)("p",null,"Similar to a histogram a summary also observes ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," values. While a histogram directly modifies the bucket counters\nand does not keep the individual samples, the summary keeps the observed samples in its internal state. To avoid the set\nof samples grow uncontrolled, the summary need to be configured with a maximum age ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," and a maximum size ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),". To\ncalculate the statistics, maximal ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," samples will be used, all of which are not older than ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,r.kt)("p",null,"Essentially the set of samples is a sliding window over the last observed samples matching the conditions above."),(0,r.kt)("p",null,"A summary is used to calculate a set of quantiles over the current set of samples. A quantile is defined by a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),"\nvalue ",(0,r.kt)("inlineCode",{parentName:"p"},"q"),"\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"0 <= q <= 1")," and resolves to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," as well."),(0,r.kt)("p",null,"The value of a given quantile ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," is the maximum value ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," out of the current sample buffer with size ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," where at\nmost ",(0,r.kt)("inlineCode",{parentName:"p"},"q * n"),"\nvalues out of the sample buffer are less or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,r.kt)("p",null,"Typical quantiles for observation are ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," (the median) and the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.95"),". Quantiles are very good for monitoring Service\nLevel Agreements."),(0,r.kt)("p",null,"The ZIO Metrics API also allows summaries to be configured with an error margin ",(0,r.kt)("inlineCode",{parentName:"p"},"e"),". The error margin is applied to the count of\nvalues, so that a\nquantile ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," for a set of size ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," resolves to value ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," if the number ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," of values less or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"(1 -e)q * s <= n <= (1+e)q"),"."),(0,r.kt)("h3",{id:"api-3"},"API"),(0,r.kt)("p",null,"A metric aspect that adds a value to a summary each time the effect it is applied to succeeds. This aspect can be\napplied to effects producing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def summary(\n  name: String,\n  maxAge: Duration,\n  maxSize: Int,\n  error: Double,\n  quantiles: Chunk[Double]\n): Metric.Summary[Double]\n")),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)("p",null,"Create a summary that can hold 100 samples, the max age of the samples is ",(0,r.kt)("inlineCode",{parentName:"p"},"1 day")," and the\nerror margin is ",(0,r.kt)("inlineCode",{parentName:"p"},"3%"),". The summary should report the ",(0,r.kt)("inlineCode",{parentName:"p"},"10%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"50%")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"90%")," Quantile.\nIt can be applied to effects yielding an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val aspSummary =\n  Metric.summary("mySummary", 1.day, 100, 0.03d, Chunk(0.1, 0.5, 0.9)).contramap[Int](_.toDouble)\n')),(0,r.kt)("p",null,"Now we can apply this aspect to an effect producing an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val summary = nextIntBetween(100, 500) @@ aspSummary\n")),(0,r.kt)("h2",{id:"frequencies"},"Frequencies"),(0,r.kt)("p",null,"Frequencies are used to count the occurrences of distinct string values. For example an application that uses logical\nnames for its services, the number of invocations for each service can be tracked."),(0,r.kt)("p",null,"Essentially, a Frequency is a set of related counters sharing the same name and tags. The counters are set\napart from each other by an additional configurable tag. The values of the tag represent the observed\ndistinct values."),(0,r.kt)("p",null,"To configure a frequency aspect, the name of the tag holding the distinct values must be configured."),(0,r.kt)("h3",{id:"api-4"},"API"),(0,r.kt)("p",null,"A metric aspect that counts the number of occurrences of each distinct\nvalue returned by the effect it is applied to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def frequency(name: String): Metric.Frequency[String]\n")),(0,r.kt)("h3",{id:"examples-4"},"Examples"),(0,r.kt)("p",null,"Create a Frequency to observe the occurrences of unique Strings.\nIt can be applied to effects yielding a String."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val aspSet = Metric.frequency("mySet")\n')),(0,r.kt)("p",null,"Now we can generate some keys within an effect and start counting the occurrences\nfor each value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val set = nextIntBetween(10, 20).map(v => s"myKey-$v") @@ aspSet\n')))}m.isMDXComponent=!0}}]);