"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[12202],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||y[f]||u;return n?t.createElement(m,o(o({ref:r},c),{},{components:n})):t.createElement(m,o({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<u;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98321:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var t=n(87462),i=(n(67294),n(3905));const u={id:"running-queries",title:"Running Queries"},o=void 0,a={unversionedId:"zio-query/running-queries",id:"zio-query/running-queries",title:"Running Queries",description:"There are several ways to run a ZQuery:",source:"@site/docs/zio-query/running_queries.md",sourceDirName:"zio-query",slug:"/zio-query/running-queries",permalink:"/zio-query/running-queries",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-query/running_queries.md",tags:[],version:"current",frontMatter:{id:"running-queries",title:"Running Queries"},sidebar:"ecosystem-sidebar",previous:{title:"Creating Queries",permalink:"/zio-query/creating-queries"},next:{title:"ZIO Quill",permalink:"/zio-quill/"}},l={},s=[],c={toc:s},p="wrapper";function y(e){let{components:r,...n}=e;return(0,i.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are several ways to run a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"runCache"),' runs the query using a given pre-populated cache. This can be useful for deterministically "replaying" a query without executing any new requests.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"runLog")," runs the query and returns its result along with the cache containing a complete log of all requests executed and their results. This can be useful for logging or analysis of query execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run")," runs the query and returns its result.")))}y.isMDXComponent=!0}}]);