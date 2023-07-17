"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[65918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,u=h["".concat(p,".").concat(d)]||h[d]||m[d]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"bash-and-zsh-completion",title:"Bash and Zsh Completion"},o=void 0,l={unversionedId:"zio-cli/bash-and-zsh-completion",id:"zio-cli/bash-and-zsh-completion",title:"Bash and Zsh Completion",description:"Overview",source:"@site/docs/zio-cli/bash-and-zsh-completion.md",sourceDirName:"zio-cli",slug:"/zio-cli/bash-and-zsh-completion",permalink:"/zio-cli/bash-and-zsh-completion",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-cli/bash-and-zsh-completion.md",tags:[],version:"current",frontMatter:{id:"bash-and-zsh-completion",title:"Bash and Zsh Completion"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO CLI",permalink:"/zio-cli/"},next:{title:"SBT Plugin",permalink:"/zio-cli/sbt-plugin"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Generating a completion shell script",id:"generating-a-completion-shell-script",level:2},{value:"How Bash and Zsh Completions are Generated",id:"how-bash-and-zsh-completions-are-generated",level:2},{value:"Further Reading",id:"further-reading",level:2}],c={toc:s},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"zio-cli")," supports a mechanism for performing tab completion of command line\noptions and arguments in bash and zsh. The approach that ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-cli")," uses to\ncommunicate with the shell tooling for performing tab completion is heavily\ninspired by the excellent Haskell\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pcapriotti/optparse-applicative#bash-zsh-and-fish-completions"},"optparse-applicative"),"\nlibrary. Every ",(0,i.kt)("inlineCode",{parentName:"p"},"CliApp")," is extended with a few hidden built-in options for\nproviding tab completions to shell environments."),(0,i.kt)("p",null,"In what follows, pretend that your CLI application (called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cli-app"),") has been\ninstalled into a stable location in your path (such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.local/bin"),"\ndirectory favored by the ",(0,i.kt)("inlineCode",{parentName:"p"},"zio-cli")," installer script)."),(0,i.kt)("h2",{id:"generating-a-completion-shell-script"},"Generating a completion shell script"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-completion-script")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-type")," built-in options produce a\nshell script that enables tab completion. In the example below, we generate a\ncompletion script (called ",(0,i.kt)("inlineCode",{parentName:"p"},"completion-script.sh"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"my-cli-app                                       \\\n    --shell-completion-script `which my-cli-app` \\\n    --shell-type bash > completion-script.sh\n")),(0,i.kt)("p",null,"After generating the script, you can quickly enable tab completion via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source completion-script.sh\n")),(0,i.kt)("p",null,"Unfortunately, the tab completion will only be enabled within the current shell\nsession. Normally, the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-completion-script")," should be shipped\nwith the program and copied to the appropriate directory (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/bash_completion.d/"),") during program installation."),(0,i.kt)("h2",{id:"how-bash-and-zsh-completions-are-generated"},"How Bash and Zsh Completions are Generated"),(0,i.kt)("p",null,"The shell completion scripts register an event handler that fires whenever\n",(0,i.kt)("inlineCode",{parentName:"p"},"my-cli-app")," is the first term at the terminal prompt and the tab key is\npressed. This event handler sends information about the terminal contents and\ncursor position back to ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cli-app")," using another built-in option called\n",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-completion-index")," and some special environment variables\n(",(0,i.kt)("inlineCode",{parentName:"p"},"COMP_WORD_0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"COMP_WORD_1"),", ...)."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cli-app")," receives these values, it runs a completion algorithm and\nprints the completion terms to the console (one line per completion term). The\nconsole output feeds back into the shell machinery, which renders the completion\nresults in the terminal."),(0,i.kt)("p",null,"For example, when the user types the following in the terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ my-cli-app foo bar baz\n")),(0,i.kt)("p",null,'and then moves the cursor over "foo" and hits the tab key, ',(0,i.kt)("inlineCode",{parentName:"p"},"my-cli-app")," is called\nas follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"COMP_WORD_0=my-cli-app     \\\nCOMP_WORD_1=foo            \\\nCOMP_WORD_2=bar            \\\nCOMP_WORD_3=baz            \\\nmy-cli-app                 \\\n--shell-completion-index 1 \\\n--shell-type bash\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"COMP_WORD_")," prefix of these environment variables is directly inspired by\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"COMP_WORD")," array-valued Bash variable that is part of its\n",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion.html"},"programmable completion system"),".\nUnfortunately, array-valued variables cannot be used as environment variables,\nso our approach instead uses one variable per term in the array."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pcapriotti/optparse-applicative#bash-zsh-and-fish-completions"},"optparse-applicative documentation"),"\nis an excellent resource that may help to clarify the implementation above."))}m.isMDXComponent=!0}}]);