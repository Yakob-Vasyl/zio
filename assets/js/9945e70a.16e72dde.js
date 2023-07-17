"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[96547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={id:"prometheus-client",title:"Prometheus Client"},i=void 0,s={unversionedId:"zio-metrics-connectors/metrics/prometheus-client",id:"zio-metrics-connectors/metrics/prometheus-client",title:"Prometheus Client",description:"In a normal prometheus setup we will find prometheus agents which query configured endpoints",source:"@site/docs/zio-metrics-connectors/metrics/prometheus-client.md",sourceDirName:"zio-metrics-connectors/metrics",slug:"/zio-metrics-connectors/metrics/prometheus-client",permalink:"/zio-metrics-connectors/metrics/prometheus-client",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-metrics-connectors/metrics/prometheus-client.md",tags:[],version:"current",frontMatter:{id:"prometheus-client",title:"Prometheus Client"},sidebar:"ecosystem-sidebar",previous:{title:"StatsD Client",permalink:"/zio-metrics-connectors/metrics/statsd-client"},next:{title:"Micrometer Connector",permalink:"/zio-metrics-connectors/metrics/micrometer-connector"}},l={},m=[{value:"ZIO Metrics in Prometheus",id:"zio-metrics-in-prometheus",level:2},{value:"Counter",id:"counter",level:3},{value:"Gauge",id:"gauge",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Summary",id:"summary",level:3},{value:"Set",id:"set",level:3},{value:"Serving Prometheus metrics",id:"serving-prometheus-metrics",level:2},{value:"Running the prometheus example",id:"running-the-prometheus-example",level:2},{value:"Simple Prometheus setup",id:"simple-prometheus-setup",level:2},{value:"Download and configure Prometheus",id:"download-and-configure-prometheus",level:3},{value:"Download and configure Grafana",id:"download-and-configure-grafana",level:3},{value:"Grafana dashboard",id:"grafana-dashboard",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a normal prometheus setup we will find prometheus agents which query configured endpoints\nat regular intervals. The endpoints are HTTP endpoints serving the current metric state in\nan encoding defined by ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format"},"prometheus"),"."),(0,a.kt)("p",null,"ZIO Metrics provides the Prometheus encoding for the captured metrics out of the box. To avoid enforcing\na particular HTTP implementation, an instrumented application needs to expose the encoded format\nas an endpoint with the HTTP server of it\xb4s choice. "),(0,a.kt)("h2",{id:"zio-metrics-in-prometheus"},"ZIO Metrics in Prometheus"),(0,a.kt)("p",null,"Most of the ZIO metrics have a direct representation in the Prometheus encoding. "),(0,a.kt)("h3",{id:"counter"},"Counter"),(0,a.kt)("p",null,"A counter is represented as a prometheus counter. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# TYPE countAll counter\n# HELP countAll \ncountAll 460.0 1623586224730\n")),(0,a.kt)("h3",{id:"gauge"},"Gauge"),(0,a.kt)("p",null,"A gauge is represented as a prometheus gauge. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# TYPE adjustGauge gauge\n# HELP adjustGauge \nadjustGauge -1.2485836762095701 1623586224730\n")),(0,a.kt)("h3",{id:"histogram"},"Histogram"),(0,a.kt)("p",null,"A histogram is represented as a prometheus histogram. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# TYPE myHistogram histogram\n# HELP myHistogram \nmyHistogram{le="0.0"} 0.0 1623586224730\nmyHistogram{le="10.0"} 8.0 1623586224730\nmyHistogram{le="20.0"} 18.0 1623586224730\nmyHistogram{le="30.0"} 30.0 1623586224730\nmyHistogram{le="40.0"} 44.0 1623586224730\nmyHistogram{le="50.0"} 51.0 1623586224730\nmyHistogram{le="60.0"} 59.0 1623586224730\nmyHistogram{le="70.0"} 65.0 1623586224730\nmyHistogram{le="80.0"} 76.0 1623586224730\nmyHistogram{le="90.0"} 88.0 1623586224730\nmyHistogram{le="100.0"} 95.0 1623586224730\nmyHistogram{le="+Inf"} 115.0 1623586224730\nmyHistogram_sum 6828.578655207023 1623586224730\nmyHistogram_count 115.0 1623586224730\n')),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A histogram is represented as a prometheus summary. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# TYPE mySummary summary\n# HELP mySummary \nmySummary{quantile="0.1",error="0.03"} 147.0 1623589839194\nmySummary{quantile="0.5",error="0.03"} 286.0 1623589839194\nmySummary{quantile="0.9",error="0.03"} 470.0 1623589839194\nmySummary_sum 42582.0 1623589839194\nmySummary_count 139.0 1623589839194\n')),(0,a.kt)("h3",{id:"set"},"Set"),(0,a.kt)("p",null,"A set is represented by a set of prometheus counters, distinguished from each other with an\nextra label as configured in the aspect. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# TYPE mySet counter\n# HELP mySet \nmySet{token="myKey-17"} 7.0 1623589839194\nmySet{token="myKey-18"} 9.0 1623589839194\nmySet{token="myKey-19"} 12.0 1623589839194\nmySet{token="myKey-13"} 6.0 1623589839194\nmySet{token="myKey-14"} 4.0 1623589839194\nmySet{token="myKey-15"} 6.0 1623589839194\nmySet{token="myKey-16"} 5.0 1623589839194\nmySet{token="myKey-10"} 10.0 1623589839194\nmySet{token="myKey-11"} 1.0 1623589839194\nmySet{token="myKey-12"} 10.0 1623589839194\n')),(0,a.kt)("h2",{id:"serving-prometheus-metrics"},"Serving Prometheus metrics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\n\nimport zio._\nimport zio.console._\nimport zio.metrics.connectors.{prometheusLayer, publisherLayer}\n\nimport sample.InstrumentedSample\n\nval instrumentedSample = new InstrumentedSample() {}\n")),(0,a.kt)("p",null,"ZIO Metrics connector provides a prometheus client that can be used to produce the prometheus encoded metric state\nupon request. The state is encoded in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrometheusPublisher")," case class and the single attribute of\ntype ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref[String]")," holds the prometheus encoded metric state. "),(0,a.kt)("p",null,"So, to retrieve the prometheus encoded state, the application can simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"PrometheusPublisher#get")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val encodedContent: UIO[String] = publisher.get\n")),(0,a.kt)("p",null,"In our example application we use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-http"},"zio-http")," to serve the metrics. Other application might choose another HTTP server framework if required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'private val metricsConfig = ZLayer.succeed(MetricsConfig(5.seconds))\n\nprivate lazy val indexPage =\n  """<html>\n    |<title>Simple Server</title>\n    |<body>\n    |<p><a href="/prometheus/metrics">Prometheus Metrics</a></p>\n    |<p><a href="/insight/keys">Insight Metrics: Get all keys</a></p>\n    |</body\n    |</html>""".stripMargin\n\nprivate lazy val static =\n  Http.collect[Request] { case Method.GET -> Root => Response.html(Html.fromString(indexPage)) }\n\nprivate lazy val prometheusRouter =\n  Http\n    .collectZIO[Request] { case Method.GET -> Root / "prometheus" / "metrics" =>\n      ZIO.serviceWithZIO[PrometheusPublisher](_.get.map(Response.text))\n    }\n')),(0,a.kt)("p",null,"Now, using the HTTP server and the ",(0,a.kt)("a",{parentName:"p",href:"/zio-metrics-connectors/metrics/instrumentation-examples"},"instrumentation examples")," we can create an effect\nthat simply runs the sample effects with their instrumentation. And within a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.App")," we can override the run method,\nwhich is now simply the execute method with a Prometheus client provided in it\xb4s environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"  private val serverInstall =\n  Server.install(static ++ prometheusRouter)\n\nprivate lazy val runHttp = (serverInstall *> ZIO.never).forkDaemon\n\nprivate lazy val serverConfig = ZLayer.succeed(Server.Config.default.port(bindPort))\n\noverride def run: ZIO[Environment & ZIOAppArgs & Scope, Any, Any] = (for {\n  f <- runHttp\n  _ <- program\n  _ <- f.join\n} yield ())\n  .provide(\n    serverConfig,\n    Server.live,\n\n    // This is the general config for all backends\n    metricsConfig,\n\n    // The prometheus reporting layer\n    prometheus.publisherLayer,\n    prometheus.prometheusLayer,\n\n    // Enable the ZIO internal metrics and the default JVM metricsConfig\n    // Do NOT forget the .unit for the JVM metrics layer\n    Runtime.enableRuntimeMetrics,\n    DefaultJvmMetrics.live.unit,\n  )\n")),(0,a.kt)("h2",{id:"running-the-prometheus-example"},"Running the prometheus example"),(0,a.kt)("p",null,"Any of the examples can be run from a command line within the project checkout directory with "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sbt sampleApp/run\n")),(0,a.kt)("p",null,"Out of the choices, select the option corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"sample.SamplePrometheusStatsDApp"),"."),(0,a.kt)("p",null,"If everything works, we should be able to use a web browser to go to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/metrics")," and should see something like "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# TYPE myCounter counter\n# HELP myCounter\nmyCounter{effect="count2"} 46.0 1608982756235\n# TYPE setGauge gauge\n# HELP setGauge\nsetGauge 8.66004641453435 1608982756235\n# TYPE changeGauge gauge\n# HELP changeGauge\nchangeGauge 90.7178906485008 1608982756235\n# TYPE myCounter counter\n# HELP myCounter\nmyCounter{effect="count1"} 92.0 1608982756235\n')),(0,a.kt)("p",null,"Once we see the metrics being served from our example, we can set up Prometheus and Grafana to create a simple dashboard displaying\nour metrics. "),(0,a.kt)("h2",{id:"simple-prometheus-setup"},"Simple Prometheus setup"),(0,a.kt)("p",null,"The following steps have been tested on Ubuntu 18.04 running inside the Windows Subsystem for Linux.\nEssentially, you need to download the prometheus binaries for your environment and start the server\nwith our sample configuration located at "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${PROJECT_HOME}/examples/prometheus/promcfg.yml\n")),(0,a.kt)("p",null,"This will just configure a prometheus job that regular polls ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/metrics")," for prometheus\nencoded metrics."),(0,a.kt)("p",null,"In addition, you need to download the Grafana binaries for your installation, start the Grafana server and configure\nprometheus as a single data source. "),(0,a.kt)("p",null,"Finally, you can import our example dashboard at ",(0,a.kt)("inlineCode",{parentName:"p"},"examples/prometheus/ZIOMetricsDashboard.json")," and enjoy the results."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These steps are not intended to replace the Prometheus or Grafana documentation. Please refer to their web sites\nfor guidelines towards a more sophisticated setup or an installation on different platforms. ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"download-and-configure-prometheus"},"Download and configure Prometheus"),(0,a.kt)("p",null,"In the steps below the project checkout directory will be referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"$DIR"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/releases/download/v2.23.0/prometheus-2.23.0.linux-amd64.tar.gz"},"Download")," prometheus"),(0,a.kt)("li",{parentName:"ol"},"Extract the downloaded archive to a directory of your choice, this will be referred to as ",(0,a.kt)("inlineCode",{parentName:"li"},"$PROMDIR"),". "),(0,a.kt)("li",{parentName:"ol"},"Within ",(0,a.kt)("inlineCode",{parentName:"li"},"$PROMDIR")," execute ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"./prometheus --config.file $DIR/examples/prometheus/promcfg.yml\n")),"This will start the prometheus server which regularly polls the HTTP endpoint of the example above for its metrics.")),(0,a.kt)("h3",{id:"download-and-configure-grafana"},"Download and configure Grafana"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://dl.grafana.com/oss/release/grafana-7.3.6.linux-amd64.tar.gz"},"Download")," grafana")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Extract the downloaded archive to a directory of your choice, this will be referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"$GRAFANADIR"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Within ",(0,a.kt)("inlineCode",{parentName:"p"},"$GRAFANADIR")," execute "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"./bin/grafana-server\n")),(0,a.kt)("p",{parentName:"li"},"This will start a Grafana server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now you should be able to login to Grafana at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000' with the default user "),"admin",(0,a.kt)("inlineCode",{parentName:"p"},"with the default \npassword"),"admin`. "),(0,a.kt)("p",{parentName:"li"},"Upon the first login you will be asked to change the default password. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Within the Grafana menu on the left hand side you will find ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Dashboards")," within that page, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Import"),". ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can now either install a dashboard from grafana.com or use a text field to paste JSON. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"$DIR/examples/prometheus/ZIOMetricsDashboard.json")," into the text field and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Load"),"."),(0,a.kt)("p",{parentName:"li"},"This will import our dashboard example. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, under ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Dashboards")," the just imported ZIO dashboard should be visible. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the dashboard. "))),(0,a.kt)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),(0,a.kt)("p",null,"Here is a screenshot of the Grafana dashboard produced with the setup above. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A simple Grafana Dashboard",src:n(59743).Z,width:"2804",height:"1987"})))}c.isMDXComponent=!0},59743:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ZIOMetrics-Grafana-55da5b2aabcb63450c69108506e0f584.png"}}]);