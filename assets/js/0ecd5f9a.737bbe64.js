"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[85395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"index",title:"Introduction"},r=void 0,p={unversionedId:"zio-prelude/functional-abstractions/parameterized-types/index",id:"zio-prelude/functional-abstractions/parameterized-types/index",title:"Introduction",description:"In addition to abstractions for concrete types, ZIO Prelude provides a set of functional abstractions to describe the common structure of parameterized types.",source:"@site/docs/zio-prelude/functional-abstractions/parameterized-types/index.md",sourceDirName:"zio-prelude/functional-abstractions/parameterized-types",slug:"/zio-prelude/functional-abstractions/parameterized-types/",permalink:"/zio-prelude/functional-abstractions/parameterized-types/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/parameterized-types/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"ecosystem-sidebar",previous:{title:"Ord",permalink:"/zio-prelude/functional-abstractions/concrete-types/ord"},next:{title:"AssociativeBoth",permalink:"/zio-prelude/functional-abstractions/parameterized-types/associativeboth"}},l={},s=[{value:"Properties Of Parameterized Types",id:"properties-of-parameterized-types",level:2},{value:"Invariant",id:"invariant",level:3},{value:"Covariant",id:"covariant",level:3},{value:"Contravariant",id:"contravariant",level:3},{value:"ForEach",id:"foreach",level:3},{value:"NonEmptyForEach",id:"nonemptyforeach",level:3},{value:"Combining Parameterized Types",id:"combining-parameterized-types",level:2},{value:"AssociativeBoth",id:"associativeboth",level:3},{value:"CommutativeBoth",id:"commutativeboth",level:3},{value:"IdentityBoth",id:"identityboth",level:3},{value:"AssociativeEither",id:"associativeeither",level:3},{value:"CommutativeEither",id:"commutativeeither",level:3},{value:"IdentityEither",id:"identityeither",level:3},{value:"AssociativeFlatten",id:"associativeflatten",level:3},{value:"IdentityFlatten",id:"identityflatten",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In addition to abstractions for concrete types, ZIO Prelude provides a set of functional abstractions to describe the common structure of ",(0,i.kt)("em",{parentName:"p"},"parameterized types"),"."),(0,i.kt)("p",null,"A parameterized type is a type that is parameterized on one or more other types. For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"List[A]")," is parameterized on the element type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("p",null,"When we are describing the common structure of parameterized types we are talking about the structure of the parameterized type without knowing about the type it is parameterized on. For example, consider the following two abstractions to describe associative ways of combining two values of a data type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Associative[A] {\n  def combine(left: => A, right: => A): A\n}\n\ntrait AssociativeBoth[F[_]] {\n  def both[A, B](left: => F[A], right: => F[B]): F[(A, B)]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," abstraction describes a way of associatively combining two concrete data types."),(0,i.kt)("p",null,"The syntax is relatively straightforward here. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," is parameterized on a type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," that has an associative ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," operator."),(0,i.kt)("p",null,"When we define an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," we know the type of the values we are combining and can use that information in implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," operator. For example we know we have two ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," values and can combine them by adding them together."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit val IntAssociative: Associative[Int] =\n  new Associative[Int] {\n    def combine(left: => Int, right: => Int): Int =\n      left + right\n  }\n// IntAssociative: Associative[Int] = repl.MdocSession$MdocApp$$anon$1@266167b\n")),(0,i.kt)("p",null,"In contrast, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," abstraction describes a way of associatively combining two parameterized types."),(0,i.kt)("p",null,"The syntax here may look a little new. Instead of being parameterized on an ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," is parameterized on an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[_]"),"."),(0,i.kt)("p",null,"There is nothing special about the ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," here, just like the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," it is just a placeholder for some type. By convention we start with ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," for concrete types and ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," for parameterized types but we can call these types whatever we want."),(0,i.kt)("p",null,"What is important is the ",(0,i.kt)("inlineCode",{parentName:"p"},"[_]")," after ",(0,i.kt)("inlineCode",{parentName:"p"},"F"),". This tells the Scala compiler that this is a parameterized type, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," rather than a ",(0,i.kt)("inlineCode",{parentName:"p"},"List[Int]"),"."),(0,i.kt)("p",null,"The importance of this becomes clear when we define an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," because we do not know anything about the types ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," that the ",(0,i.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," values are parameterized on. This prevents us from doing anything with the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values that requires knowledge of their types and so essentially forces us to work exclusively at the level of the ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," structure."),(0,i.kt)("p",null,"To see this, consider how we would implement an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit val ListAssociativeBoth: AssociativeBoth[List] =\n  new AssociativeBoth[List] {\n    def both[A, B](left: => List[A], right: => List[B]): List[(A, B)] =\n      left.flatMap(a => right.map(b => (a, b)))\n  }\n// ListAssociativeBoth: AssociativeBoth[List] = repl.MdocSession$MdocApp$$anon$2@25dbb031\n")),(0,i.kt)("p",null,"Notice how the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," instance is parameterized on ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," rather than a list of any specific type. This is important because it says the ",(0,i.kt)("inlineCode",{parentName:"p"},"ListAssociativeBoth")," instance knows how to combine any two lists in an associative way, not just two lists of some specific type."),(0,i.kt)("p",null,"What would the implementation of such a way of combining look like? It would not be able to use any information about the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values, because they could be anything, so it would have to combine them in a way that worked for any ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," abstraction does this by combining the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values into a tuple. We will see later that this is one of two fundamental ways that we can combine two values in a generic way."),(0,i.kt)("p",null,"In our implementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," we return the Cartesian product of the two lists, which is an associative operation after reassociating nested tuples."),(0,i.kt)("p",null,"We'll talk more about ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," in the section on that abstraction. For now the goal of this discussion is not to discuss ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," in detail but to get a sense of what it means to describe the structure of a parameterized type instead of a concrete one."),(0,i.kt)("p",null,"Just like for concrete types, the abstractions for parameterized types fall into two categories."),(0,i.kt)("h2",{id:"properties-of-parameterized-types"},"Properties Of Parameterized Types"),(0,i.kt)("p",null,"The first set of abstractions define properties of single values of a parameterized type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]"),". All of them describe the fundamental nature of the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," parameter with respect to ",(0,i.kt)("inlineCode",{parentName:"p"},"F"),"."),(0,i.kt)("h3",{id:"invariant"},"Invariant"),(0,i.kt)("p",null,"The first relationship that ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," can have to ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," is that ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," both produces and consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values. For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonCodec[A]")," both produces ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values by turning JSON into ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values and consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values by turning ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values into JSON."),(0,i.kt)("p",null,"Parameterized types that both produce and consume ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values are ",(0,i.kt)("em",{parentName:"p"},"invariant")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," type parameter and we describe them with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," abstraction."),(0,i.kt)("p",null,"An invariant type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," can be transformed into an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Equivalence[A, B]")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"invmap")," operator. Conceptually, if we have a data type that produces and consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values we can always turn it into a data type that produces and consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values by transforming all inputs into ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values and all outputs back to ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values with the equivalence relationship."),(0,i.kt)("p",null,'This is useful to "lift" equivalence relationships into the context of a parameterized type. For example, if we have defined an equivalence between new and old versions of our data model we can use ',(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," to convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonCodec")," for the old data model into a ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonCodec")," for the new data model."),(0,i.kt)("h3",{id:"covariant"},"Covariant"),(0,i.kt)("p",null,"The second relationship that ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," can have to ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," is that ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," produces ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values but does not consume them. Data types that produce ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values may either just contain existing ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values, like a ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk"),", or potentially produce ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values at some point in the future, like a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("p",null,"Parameterized types that produce but do not consume ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values are ",(0,i.kt)("em",{parentName:"p"},"covariant")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," type parameter and we describe them with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstraction."),(0,i.kt)("p",null,"A covariant type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," can be transformed into an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," with a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => B")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," operator. Conceptually, if we have a data type that produces ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values then we can create a data type that produces ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values simply by taking each output and transforming it with the function."),(0,i.kt)("p",null,"This is useful to allow us to transform the output of a covariant type to build richer data pipelines. For example, if we had a function that decrypted some data and a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that loaded the encrypted data from a file we could return a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that produced the decrypted data, which we could then compose with the rest of our program."),(0,i.kt)("h3",{id:"contravariant"},"Contravariant"),(0,i.kt)("p",null,"The third relationship that ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," can have to ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," is that ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values but does not produce them. Examples of data types that consume values of one or more types include Scala functions with respect to their input, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," with respect to its environment type, and ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," with respect to stream elements."),(0,i.kt)("p",null,"Parameterized types that consume but do not produce ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values are ",(0,i.kt)("em",{parentName:"p"},"contravariant")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," type parameter and we describe them with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contravariant")," abstraction."),(0,i.kt)("p",null,"A contravariant type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," can be transformed into an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," with a function ",(0,i.kt)("inlineCode",{parentName:"p"},"B => A")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," operator. Conceptually, if we have a data type that consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values then we can create a data type that consumes ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values  simply by transforming each ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," value into an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value with the function before feeding it to the original data type."),(0,i.kt)("p",null,"This is useful to allow us to transform the input of a contravariant type to build richer data pipelines. For example, if we have a sink that takes chunks of bytes and writes them to a file we could transform it into a sink that takes strings and writes them to a file by providing a function to transform strings into bytes."),(0,i.kt)("h3",{id:"foreach"},"ForEach"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstraction by describing a data type that not only produces ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values but actually contains zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values as opposed to merely being able to potentially generate them at some point in the future. For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk")," has zero or more existing ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values and so has a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," instance defined for it whereas a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," merely may produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value at some point in the future."),(0,i.kt)("p",null,"A data type with a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," instance contains zero or more existing ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values so we can iterate over it, potentially transforming its values while maintaining its structure using an operator like ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.foreach"),". We can also tear it down entirely and reduce it to a summary value with an operator like ",(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft"),"."),(0,i.kt)("p",null,"This ability to get an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value out of the data type only exists because ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," describes a data type where the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values already exist. If we had a data type like ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," then we would not be able to get an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value out of it because a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," is only a description of a workflow that may produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value when it is run."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction is one of the most practically useful functional abstractions in ZIO Prelude. Most collection operators can be defined in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," and especially in combination with the abstractions for describing ways of combining concrete types it provides very powerful ways of working with collections."),(0,i.kt)("h3",{id:"nonemptyforeach"},"NonEmptyForEach"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"NonEmptyForEach")," abstraction further builds on ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," to describe a parameterized type that contains one or more existing ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values. For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"NonEmptyChunk")," is guaranteed to contain at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value."),(0,i.kt)("p",null,"Because a data type with a ",(0,i.kt)("inlineCode",{parentName:"p"},"NonEmptyForEach")," instance must always contain at least one existing ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value we can define certain operators for it that would not be safe to define for a data type that might not contain any ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values. For example, we can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce")," operator that reduces the collection to a summary value with an associative operator whereas with a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," instance we can only define a ",(0,i.kt)("inlineCode",{parentName:"p"},"fold")," operator that also requires an identity value to handle the empty case."),(0,i.kt)("h2",{id:"combining-parameterized-types"},"Combining Parameterized Types"),(0,i.kt)("p",null,"The second set of abstractions describe ways of combining parameterized types."),(0,i.kt)("p",null,"Because of the additional structure of parameterized types there are three separate ways that we can combine values of parameterized types, each of which may satisfy properties of associativity, commutativity, and identity."),(0,i.kt)("p",null,"The first way of combining an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," is to return both ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values. This corresponds to some notion of doing both things, though what exactly this means will depend on the parameterized type and the combining operation."),(0,i.kt)("p",null,"This way of combining is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CommutativeBoth"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," functional abstractions."),(0,i.kt)("p",null,"The second way of combining an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," is to return either an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," value. This corresponds to some notion of choosing which value to return, though again what exactly this means and how we choose will depend on the parameterized type and the combining operation."),(0,i.kt)("p",null,"This way of combining is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeEither"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CommutativeEither"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," functional abstractions."),(0,i.kt)("p",null,"The third way of combining actually combines two layers of ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," values, converting an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[F[A]]")," into an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]"),". This corresponds to some notion of evaluating the outer layer and then evaluating the inner layer."),(0,i.kt)("p",null,"This way of combining is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeFlatten")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," functional abstractions."),(0,i.kt)("h3",{id:"associativeboth"},"AssociativeBoth"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeBoth")," abstraction describes a parameterized type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," with an associative operator ",(0,i.kt)("inlineCode",{parentName:"p"},"both")," that can combine a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," into a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[(A, B)]"),". This is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," and corresponds to running the left value and then running the right value."),(0,i.kt)("h3",{id:"commutativeboth"},"CommutativeBoth"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CommutativeBoth")," describes a way of combining an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," to produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[(A, B)]")," that is both associative and commutative."),(0,i.kt)("p",null,"This is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipPar")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," and corresponds to running the left value and the right value in parallel, since this is the only way that the order will not matter as required by the commutative property."),(0,i.kt)("h3",{id:"identityboth"},"IdentityBoth"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," abstraction describes a way of combining an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," to produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[(A, B)]")," that is both associative and has an identity value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Any]"),". In ZIO the identity value is value is ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.unit")," since zipping any value with unit is equivalent to returning the original value unchanged"),(0,i.kt)("h3",{id:"associativeeither"},"AssociativeEither"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeEither")," abstraction describes a parameterized type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," with an associative operator ",(0,i.kt)("inlineCode",{parentName:"p"},"either")," that can combine a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," into a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Either[A, B]]"),". This is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"orElseEither")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," and corresponds to running the left value, but if it fails then running the right value."),(0,i.kt)("h3",{id:"commutativeeither"},"CommutativeEither"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CommutativeEither")," builds on ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeEither")," by describing an operator that combines an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and and ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," to produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Either[A, B]]")," in a way that is both associative and commutative. In ZIO this corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"raceEither")," operator which runs both effects concurrently and returns the first to succeed, since running both effects concurrently is the only way that the order will not matter as required by the commutative property."),(0,i.kt)("h3",{id:"identityeither"},"IdentityEither"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," abstraction describes a way of combining an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," to produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Either[A, B]]")," that is both associative and has an identity value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Nothing]"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," does not have such an identity value since it is not possible to fail without any error but conceptually such an identity would correspond to a failure that did not contain any information."),(0,i.kt)("h3",{id:"associativeflatten"},"AssociativeFlatten"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeFlatten")," abstraction describes the ability to flatten two layers of ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," structure in an associative way. In ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," this corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten")," operator, and in combination with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstraction the ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap")," operator, corresponding to running one ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," value and using its result to generate another ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," value and running that value."),(0,i.kt)("h3",{id:"identityflatten"},"IdentityFlatten"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," abstraction describes an identity value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Any]")," with respect to the associative flattening operation defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeFlatten"),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," this corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.unit")," and is the same as the identity value defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," instance."))}m.isMDXComponent=!0}}]);