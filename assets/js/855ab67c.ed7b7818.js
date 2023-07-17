"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[69462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=l(r),u=o,f=y["".concat(p,".").concat(u)]||y[u]||m[u]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[y]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"symmetric-encryption",title:"Symmetric Encryption"},c=void 0,a={unversionedId:"zio-crypto/symmetric-encryption",id:"zio-crypto/symmetric-encryption",title:"Symmetric Encryption",description:"Algorithms",source:"@site/docs/zio-crypto/symmetric-encryption.md",sourceDirName:"zio-crypto",slug:"/zio-crypto/symmetric-encryption",permalink:"/zio-crypto/symmetric-encryption",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-crypto/symmetric-encryption.md",tags:[],version:"current",frontMatter:{id:"symmetric-encryption",title:"Symmetric Encryption"},sidebar:"ecosystem-sidebar",previous:{title:"HMAC",permalink:"/zio-crypto/hmac"},next:{title:"Signature",permalink:"/zio-crypto/signature"}},p={},l=[{value:"Algorithms",id:"algorithms",level:2}],s={toc:l},y="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"algorithms"},"Algorithms"),(0,o.kt)("p",null,"We support Advanced Encryption Standard (AES)\nin Galois/Counter Mode (GCM) for\nAES-GCM-128, AES-GCM-192, and AES-GCM-256."))}m.isMDXComponent=!0}}]);