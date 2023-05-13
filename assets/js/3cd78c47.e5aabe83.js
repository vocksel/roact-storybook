"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[819],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,i(i({ref:e},u),{},{components:o})):n.createElement(f,i({ref:e},u))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1436:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2},i="Writing Stories",l={unversionedId:"writing-stories",id:"writing-stories",title:"Writing Stories",description:'flipbook uses the concept of "storybooks" and "stories." A storybook is used to tell flipbook where to look for stories, and a story tells flipbook what Roact component should be mounted, along with an optional summary and controls to help you with writing different states for your components.',source:"@site/docs/writing-stories.md",sourceDirName:".",slug:"/writing-stories",permalink:"/flipbook/docs/writing-stories",draft:!1,editUrl:"https://github.com/flipbook-labs/flipbook/edit/master/docs/writing-stories.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/flipbook/docs/intro"},next:{title:"Story Format",permalink:"/flipbook/docs/story-format"}},s={},c=[{value:"Storybook",id:"storybook",level:2},{value:"Story",id:"story",level:2},{value:"Controls",id:"controls",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-stories"},"Writing Stories"),(0,r.kt)("p",null,'flipbook uses the concept of "storybooks" and "stories." A storybook is used to tell flipbook where to look for stories, and a story tells flipbook what Roact component should be mounted, along with an optional summary and controls to help you with writing different states for your components.'),(0,r.kt)("h2",{id:"storybook"},"Storybook"),(0,r.kt)("p",null,"Every project needs a storybook, so to get started you will create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectName.storybook.lua")," file at the root of your project with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- src/ProjectName.storybook.lua\n\n-- Make sure to adjust the path to Roact if needed \nlocal Roact = require(path.to.Roact)\n\nreturn {\n    roact = Roact,\n    storyRoots = { \n        script.Parent.Components\n    }\n}\n")),(0,r.kt)("p",null,"When flipbook reads this file, it will use the copy of Roact given for each of your stories, and it will search in ",(0,r.kt)("inlineCode",{parentName:"p"},"script.Parent.Components")," for all of your story files."),(0,r.kt)("p",null,"Right now you should see a single entry in flipbook's sidebar for this storybook. Let's add a story to liven things up!"),(0,r.kt)("h2",{id:"story"},"Story"),(0,r.kt)("p",null,"A story and its associated component should be in two separate files. Both files should share the same name, however the story will end with ",(0,r.kt)("inlineCode",{parentName:"p"},".story"),". To get started, let's create ",(0,r.kt)("inlineCode",{parentName:"p"},"Button.lua")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Button.story.lua"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- src/Components/Button.lua\n\nlocal Roact = require(path.to.Roact)\n\ntype Props = {\n    text: string,\n    onActivated: (() -> ())?,\n}\n\nlocal function Button(props)\n    return Roact.createElement("TextButton", {\n        Text = props.text,\n        TextSize = 16,\n        Font = Enum.Font.GothamBold,\n        TextColor3 = Color3.fromRGB(255, 255, 255),\n        BackgroundColor3 = Color3.fromRGB(239, 31, 90),\n        BorderSizePixel = 0,\n        AutomaticSize = Enum.AutomaticSize.XY,\n        [Roact.Event.Activated] = props.onActivated,\n    }, {\n        Padding = Roact.createElement("UIPadding", {\n            PaddingTop = UDim.new(0, 8),\n            PaddingRight = UDim.new(0, 8),\n            PaddingBottom = UDim.new(0, 8),\n            PaddingLeft = UDim.new(0, 8),\n        }),\n    })\nend\n\nreturn Button\n')),(0,r.kt)("p",null,"And now let's write the story to mount the Button component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- src/Components/Button.story.lua\n\nlocal Roact = require(path.to.Roact)\nlocal Button = require(script.Parent.Button)\n\nreturn {\n    summary = "A generic button component that can be used anywhere",\n    story = Roact.createElement(Button, {\n        text = "Click me",\n        onActivated = function()\n            print("click")\n        end,\n    }),\n}\n')),(0,r.kt)("p",null,"In the sidebar for flipbook you should now see your newly created Button story. Go ahead and select it to view the button you just created."),(0,r.kt)("p",null,"Writing stories can significantly improve your experience while developing Roact components.It's recommended that you create a story for each component so that you work on them in isolation to build up a strong foundation for your app."),(0,r.kt)("h3",{id:"controls"},"Controls"),(0,r.kt)("p",null,'flipbook also has the feature of "controls" where you can specify configurable values that get passed down into your component.'),(0,r.kt)("p",null,'We will continue with our Button component and give it a "disabled" state for when we don\'t want a user to be able to interact with it:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'type Props = {\n    text: string,\n+   isDisabled: boolean?,\n    onActivated: (() -> ())?,\n}\n\nlocal function Button(props)\n+   local color = if props.isDisabled then Color3.fromRGB(82, 82, 82) else Color3.fromRGB(239, 31, 90)\n\n    return Roact.createElement("TextButton", {\n        Text = props.text,\n        TextSize = 16,\n        Font = Enum.Font.GothamBold,\n        TextColor3 = Color3.fromRGB(255, 255, 255),\n-       BackgroundColor3 = Color3.fromRGB(239, 31, 90),\n+       BackgroundColor3 = color,\n        BorderSizePixel = 0,\n        AutomaticSize = Enum.AutomaticSize.XY,\n-       [Roact.Event.Activated] = props.onActivated,\n+       [Roact.Event.Activated] = if props.isDisabled then nil else props.onActivated,\n    }, {\n        Padding = Roact.createElement("UIPadding", {\n            PaddingTop = UDim.new(0, 8),\n            PaddingRight = UDim.new(0, 8),\n            PaddingBottom = UDim.new(0, 8),\n            PaddingLeft = UDim.new(0, 8),\n        }),\n    })\nend\n\nreturn Button\n')),(0,r.kt)("p",null,"And now modify the story to pass in the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'local Roact = require(path.to.Roact)\nlocal Button = require(script.Parent.Button)\n\nreturn {\n    summary = "A generic button component that can be used anywhere",\n    story = Roact.createElement(Button, {\n        text = "Click me",\n+       isDisabled = true,\n        onActivated = function()\n            print("click")\n        end,\n    }),\n}\n')),(0,r.kt)("p",null,'The story should automatically reload and you will see the button is greyed out and no longed prints "click" when activated.'),(0,r.kt)("p",null,"Despite this new ",(0,r.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop, it is still hard to test out different state sfor the button since you have to manually edit the story each time. That's where controls come in. Modify your story as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'local Roact = require(path.to.Roact)\nlocal Button = require(script.Parent.Button)\n\nreturn {\n    summary = "A generic button component that can be used anywhere",\n+   controls = {\n+       isDisabled = false,\n+   },\n-   story = Roact.createElement(Button, {\n+   story = function(props)\n+       return Roact.createElement(Button, {\n            text = "Click me",\n-           isDisabled = true,\n+           isDisabled = props.controls.isDisabled,\n            onActivated = function()\n                print("click")\n            end,\n        })\n+   end,\n}\n')),(0,r.kt)("p",null,'With this change, a new "Controls" panel will appear where you can toggle the ',(0,r.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop. This gets fed into your Button component and will automatically reload. You can now toggle between your button's states to see how it behaves."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"You have just been given an example of how to create a storybook and a story for a Button component that makes use of flipbook's controls feature. This document outlines the biggest features of flipbook, but there are other options you can play around with."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"/flipbook/docs/story-format"},"Story Format")," next to learn about all the options you have available."))}p.isMDXComponent=!0}}]);