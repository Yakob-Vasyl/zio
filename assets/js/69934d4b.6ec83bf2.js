"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[68581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"examples",title:"Examples"},o=void 0,i={unversionedId:"reference/test/assertions/examples",id:"reference/test/assertions/examples",title:"Examples",description:"Example 1: Equality Assertion",source:"@site/docs/reference/test/assertions/examples.md",sourceDirName:"reference/test/assertions",slug:"/reference/test/assertions/examples",permalink:"/reference/test/assertions/examples",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/assertions/examples.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"reference-sidebar",previous:{title:"Built-in Assertions",permalink:"/reference/test/assertions/built-in-assertions"},next:{title:"How it Works?",permalink:"/reference/test/assertions/how-it-works"}},l={},p=[{value:"Example 1: Equality Assertion",id:"example-1-equality-assertion",level:2},{value:"Example 2: Field-level Assertion",id:"example-2-field-level-assertion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1-equality-assertion"},"Example 1: Equality Assertion"),(0,a.kt)("p",null,'Assume we have a function that concatenates two strings. One simple property of this function would be "the sum of the length of all inputs should be equal to the length of the output". Let\'s see an example of how we can make an assertion about this property:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\ntest("The sum of the lengths of both inputs must equal the length of the output") {\n  check(Gen.string, Gen.string) { (a, b) =>\n    assert((a + b).length)(Assertion.equalTo(a.length + b.length))\n  }\n}\n')),(0,a.kt)("p",null,"The syntax of assertion in the above code, is ",(0,a.kt)("inlineCode",{parentName:"p"},"assert(expression)(assertion)"),". The first section is an expression of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," which is ",(0,a.kt)("em",{parentName:"p"},"result")," of our computation and the second one is the expected assertion of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Assertion[A]"),"."),(0,a.kt)("h2",{id:"example-2-field-level-assertion"},"Example 2: Field-level Assertion"),(0,a.kt)("p",null,"There is also an easy way to test an object's data for certain assertions with ",(0,a.kt)("inlineCode",{parentName:"p"},"hasField")," which accepts besides a name, a mapping function from object to its tested property, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Assertion")," object which will validate this property. Here our test checks if a person has at least 18 years and is not from the USA."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.test.Assertion.{isRight, isSome,equalTo, isGreaterThanEqualTo, not, hasField}\n\nfinal case class Address(country:String, city:String)\nfinal case class User(name:String, age:Int, address: Address)\n\ntest("Rich checking") {\n  assert(\n    User("Jonny", 26, Address("Denmark", "Copenhagen"))\n  )(\n    hasField("age", (u:User) => u.age, isGreaterThanEqualTo(18)) &&\n    hasField("country", (u:User) => u.address.country, not(equalTo("USA")))\n  )\n}\n')),(0,a.kt)("p",null,"What is nice about those tests is that test reporters will tell you exactly which assertion was broken. Let's say we would change ",(0,a.kt)("inlineCode",{parentName:"p"},"isGreaterThanEqualTo(18)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"isGreaterThanEqualTo(40)")," which will fail. Print out on the console will be a nice detailed text explaining what exactly went wrong:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[info]       User(Jonny,26,Address(Denmark,Copenhagen)) did not satisfy (hasField("age", _.age, isGreaterThanEqualTo(45)) && hasField("country", _.country, not(equalTo(USA))))\n[info]       26 did not satisfy isGreaterThanEqualTo(45)\n')))}d.isMDXComponent=!0}}]);