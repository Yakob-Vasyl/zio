"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[53150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"understanding-optics",title:"Understanding Optics"},o=void 0,l={unversionedId:"zio-optics/understanding-optics",id:"zio-optics/understanding-optics",title:"Understanding Optics",description:"ZIO Optics is based on a single representation of an optic as a combination of a getter and a setter.",source:"@site/docs/zio-optics/understanding-optics.md",sourceDirName:"zio-optics",slug:"/zio-optics/understanding-optics",permalink:"/zio-optics/understanding-optics",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-optics/understanding-optics.md",tags:[],version:"current",frontMatter:{id:"understanding-optics",title:"Understanding Optics"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Optics",permalink:"/zio-optics/"},next:{title:"Constructing Optics",permalink:"/zio-optics/constructing-optics"}},s={},p=[{value:"Lens",id:"lens",level:2},{value:"Prism",id:"prism",level:2},{value:"Traversal",id:"traversal",level:2},{value:"Other",id:"other",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO Optics is based on a single representation of an optic as a combination of a getter and a setter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Optic[-GetWhole, -SetWholeBefore, -SetPiece, +GetError, +SetError, +GetPiece, +SetWholeAfter] {\n  def getOptic(whole: GetWhole): Either[GetError, GetPiece]\n  def setOptic(piece: SetPiece)(whole: SetWholeBefore): Either[SetError, SetWholeAfter]\n}\n")),(0,i.kt)("p",null,"The getter can take some larger structure of type ",(0,i.kt)("inlineCode",{parentName:"p"},"GetWhole")," and get a part of it of type ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPiece"),". It can potentially fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"p"},"GetError")," because the part we are trying to get might not exist in the larger structure."),(0,i.kt)("p",null,"The setter has the ability, given some piece of type ",(0,i.kt)("inlineCode",{parentName:"p"},"SetPiece")," and an original structure of type ",(0,i.kt)("inlineCode",{parentName:"p"},"SetWholeBefore"),", to return a new structure of type ",(0,i.kt)("inlineCode",{parentName:"p"},"SetWholeAfter"),". Setting can fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"p"},"SetError")," because the piece we are trying to set might not exist in the structure."),(0,i.kt)("h2",{id:"lens"},"Lens"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Lens")," is an optic that accesses a field of a product type, such as a tuple or case class."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GetError")," type of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Lens")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," because we can always get a field of a product type. The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetError")," type is also ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," because we can always set the field of a product type to a new value."),(0,i.kt)("p",null,"In this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetWhole"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SetWholeBefore"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"SetWholeAfter")," types are the same and represent the product type. The ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPiece")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SetPiece")," types are also the same and represent the field."),(0,i.kt)("p",null,"Thus, we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type Lens[S, A] = Optic[S, S, A, Nothing, Nothing, A, S]\n")),(0,i.kt)("p",null,"The simplified signature is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Lens[S, A] {\n  def getOptic(s: S): Either[Nothing, A]\n  def setOptic(a: A)(s: S): Either[Nothing, S]\n}\n")),(0,i.kt)("p",null,"This conforms exactly to our description above. A lens is an optic where we can always get part of the larger structure and given an original structure we can always set a new value in that structure."),(0,i.kt)("h2",{id:"prism"},"Prism"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Prism")," is an optic that accesses a case of a sum type, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Left")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Right")," cases of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," or one of the subtypes of a sealed trait."),(0,i.kt)("p",null,"Getting part of a larger data structure with a prism can fail because the case we are trying to access might not exist. For example, we might be trying to access the right side of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," but the either is actually a ",(0,i.kt)("inlineCode",{parentName:"p"},"Left"),"."),(0,i.kt)("p",null,"We use the data type ",(0,i.kt)("inlineCode",{parentName:"p"},"OpticFailure")," to model the different ways that getting or setting with an optic can fail. So the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetError")," type of a prism will be ",(0,i.kt)("inlineCode",{parentName:"p"},"OpticFailure"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait OpticFailure extends Throwable\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SetError")," type of a prism will be ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," because given one of the cases of a product type we can always return a new value of the product type since each case of the product type is an instance of the product type."),(0,i.kt)("p",null,"A prism also differs from a lens in that we do not need any original structure to set. A product type consists of nothing but its cases so if we have a new value of the case we want to set we can just use that value and don't need the original structure."),(0,i.kt)("p",null,"We represent this by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Any")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"SetWholeBefore")," type, indicating that we do not need any original structure to set a new value."),(0,i.kt)("p",null,"Thus, the definition of a prism is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type Prism[S, A] = Optic[S, Any, A, OpticFailure, Nothing, A, S]\n")),(0,i.kt)("p",null,"And the simplified signature is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Prism[S, A] {\n  def getOptic(s: S): Either[OpticFailure, A]\n  def setOptic(a: Any)(s: S): Either[Nothing, S]\n}\n")),(0,i.kt)("p",null,"Again this conforms exactly to our description. A prism is an optic where we might not be able to get a value but can always set a value and in fact do not require any original structure to set."),(0,i.kt)("h2",{id:"traversal"},"Traversal"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Traversal")," is an optic that accesses zero or more values in a collection, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk"),"."),(0,i.kt)("p",null,"Both getting and setting can fail because, for example, we might be trying to get or set a value at an index that does not exist in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk"),". We also need the original structure because we may only be modifying part of the collection."),(0,i.kt)("p",null,"The distinguishing feature of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Traversal")," is that it can access zero or more values instead of a single value. We represent this by parameterizing ",(0,i.kt)("inlineCode",{parentName:"p"},"SetPiece")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPiece")," on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk")," instead of a single value."),(0,i.kt)("p",null,"The definition of a traversal looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\ntype Traversal[S, A] = Optic[S, S, Chunk[A], OpticFailure, OpticFailure, Chunk[A], S]\n")),(0,i.kt)("p",null,"And the simplified signature looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Traversal[S, A] {\n  def getOptic(s: S): Either[OpticFailure, Chunk[A]]\n  def setOptic(as: Chunk[A])(s: S): Either[OpticFailure, S]\n}\n")),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("p",null,"ZIO Optics supports a wide variety of other optics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")," - An ",(0,i.kt)("inlineCode",{parentName:"li"},"Optional")," is an optic that accesses part of a larger structure where the part being accessed may not exist and the structure contains more than just that part. Both the ",(0,i.kt)("inlineCode",{parentName:"li"},"GetError")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SetError")," types are ",(0,i.kt)("inlineCode",{parentName:"li"},"OpticFailure")," because the part may not exist in the structure and setting does require the original structure since it consists of more than just this one part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Iso")," - An ",(0,i.kt)("inlineCode",{parentName:"li"},"Iso")," is an optic that accesses a part of a structure where the structure consists of nothing but the part. Both the ",(0,i.kt)("inlineCode",{parentName:"li"},"GetError")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SetError")," types are ",(0,i.kt)("inlineCode",{parentName:"li"},"Nothing")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"SetWholeBefore")," type is ",(0,i.kt)("inlineCode",{parentName:"li"},"Any"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fold")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"Fold")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Traversal")," that only allows getting a collection of values. The ",(0,i.kt)("inlineCode",{parentName:"li"},"SetWhole")," before and ",(0,i.kt)("inlineCode",{parentName:"li"},"SetPiece")," types are nothing because it is impossible to ever set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Getter")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"Getter")," is an optic that only allows getting a value. Like a ",(0,i.kt)("inlineCode",{parentName:"li"},"Fold")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"SetWholeBefore")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SetPiece")," types are ",(0,i.kt)("inlineCode",{parentName:"li"},"Nothing")," because it is impossible to ever set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Setter")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"Setter")," is an optic that only allows setting a value. The ",(0,i.kt)("inlineCode",{parentName:"li"},"GetWhole")," type is ",(0,i.kt)("inlineCode",{parentName:"li"},"Nothing")," because it is impossible to ever get.")),(0,i.kt)("p",null,"There are also more polymorphic versions of each optic that allow the types of the data structure and part before and after to differ. For example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPrism")," could allow us to access the right case of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Either[A, B]")," and set a ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," value to return an ",(0,i.kt)("inlineCode",{parentName:"p"},"Either[A, C]"),"."))}d.isMDXComponent=!0}}]);