"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[274],{8438:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(4848),r=o(8453);const s={sidebar_position:2},i="Writing Stories",a={id:"writing-stories",title:"Writing Stories",description:'flipbook uses the concept of "storybooks" and "stories." A storybook is used to tell flipbook where to look for stories, and a story tells flipbook what Roact component should be mounted, along with an optional summary and controls to help you with writing different states for your components.',source:"@site/docs/writing-stories.md",sourceDirName:".",slug:"/writing-stories",permalink:"/flipbook/docs/writing-stories",draft:!1,unlisted:!1,editUrl:"https://github.com/flipbook-labs/flipbook/tree/main/docs/docs/docs/writing-stories.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting Started",permalink:"/flipbook/docs/intro"},next:{title:"Story Format",permalink:"/flipbook/docs/story-format"}},l={},c=[{value:"Storybook",id:"storybook",level:2},{value:"Story",id:"story",level:2},{value:"Controls",id:"controls",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"writing-stories",children:"Writing Stories"}),"\n",(0,n.jsx)(e.p,{children:'flipbook uses the concept of "storybooks" and "stories." A storybook is used to tell flipbook where to look for stories, and a story tells flipbook what Roact component should be mounted, along with an optional summary and controls to help you with writing different states for your components.'}),"\n",(0,n.jsx)(e.h2,{id:"storybook",children:"Storybook"}),"\n",(0,n.jsxs)(e.p,{children:["Every project needs a storybook, so to get started you will create a new ",(0,n.jsx)(e.code,{children:"ProjectName.storybook.luau"})," file at the root of your project with the following contents:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-lua",metastring:'title="src/ProjectName.storybook.lua"',children:"-- Make sure to adjust the path to Roact if needed\nlocal Roact = require(path.to.Roact)\n\nreturn {\n    roact = Roact,\n    storyRoots = {\n        script.Parent.Components\n    }\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["When flipbook reads this file, it will use the copy of Roact given for each of your stories, and it will search in ",(0,n.jsx)(e.code,{children:"script.Parent.Components"})," for all of your story files."]}),"\n",(0,n.jsx)(e.p,{children:"Right now you should see a single entry in flipbook's sidebar for this storybook. Let's add a story to liven things up!"}),"\n",(0,n.jsx)(e.h2,{id:"story",children:"Story"}),"\n",(0,n.jsxs)(e.p,{children:["A story and its associated component should be in two separate files. Both files should share the same name, however the story will end with ",(0,n.jsx)(e.code,{children:".story"}),". To get started, let's create ",(0,n.jsx)(e.code,{children:"Button.luau"})," and ",(0,n.jsx)(e.code,{children:"Button.story.luau"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-lua",metastring:'title="src/Components/Button.lua"',children:'local Roact = require(path.to.Roact)\n\ntype Props = {\n    text: string,\n    onActivated: (() -> ())?,\n}\n\nlocal function Button(props)\n    return Roact.createElement("TextButton", {\n        Text = props.text,\n        TextSize = 16,\n        Font = Enum.Font.GothamBold,\n        TextColor3 = Color3.fromRGB(255, 255, 255),\n        BackgroundColor3 = Color3.fromRGB(239, 31, 90),\n        BorderSizePixel = 0,\n        AutomaticSize = Enum.AutomaticSize.XY,\n        [Roact.Event.Activated] = props.onActivated,\n    }, {\n        Padding = Roact.createElement("UIPadding", {\n            PaddingTop = UDim.new(0, 8),\n            PaddingRight = UDim.new(0, 8),\n            PaddingBottom = UDim.new(0, 8),\n            PaddingLeft = UDim.new(0, 8),\n        }),\n    })\nend\n\nreturn Button\n'})}),"\n",(0,n.jsx)(e.p,{children:"And now let's write the story to mount the Button component:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-lua",metastring:'title="src/Components/Button.story.lua"',children:'local Roact = require(path.to.Roact)\nlocal Button = require(script.Parent.Button)\n\nreturn {\n    summary = "A generic button component that can be used anywhere",\n    story = Roact.createElement(Button, {\n        text = "Click me",\n        onActivated = function()\n            print("click")\n        end,\n    }),\n}\n'})}),"\n",(0,n.jsx)(e.p,{children:"In the sidebar for flipbook you should now see your newly created Button story. Go ahead and select it to view the button you just created."}),"\n",(0,n.jsx)(e.p,{children:"Writing stories can significantly improve your experience while developing Roact components.It's recommended that you create a story for each component so that you work on them in isolation to build up a strong foundation for your app."}),"\n",(0,n.jsx)(e.h3,{id:"controls",children:"Controls"}),"\n",(0,n.jsx)(e.p,{children:'flipbook also has the feature of "controls" where you can specify configurable values that get passed down into your component.'}),"\n",(0,n.jsx)(e.p,{children:'We will continue with our Button component and give it a "disabled" state for when we don\'t want a user to be able to interact with it:'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-diff",children:'type Props = {\n    text: string,\n+   isDisabled: boolean?,\n    onActivated: (() -> ())?,\n}\n\nlocal function Button(props)\n+   local color = if props.isDisabled then Color3.fromRGB(82, 82, 82) else Color3.fromRGB(239, 31, 90)\n\n    return Roact.createElement("TextButton", {\n        Text = props.text,\n        TextSize = 16,\n        Font = Enum.Font.GothamBold,\n        TextColor3 = Color3.fromRGB(255, 255, 255),\n-       BackgroundColor3 = Color3.fromRGB(239, 31, 90),\n+       BackgroundColor3 = color,\n        BorderSizePixel = 0,\n        AutomaticSize = Enum.AutomaticSize.XY,\n-       [Roact.Event.Activated] = props.onActivated,\n+       [Roact.Event.Activated] = if props.isDisabled then nil else props.onActivated,\n    }, {\n        Padding = Roact.createElement("UIPadding", {\n            PaddingTop = UDim.new(0, 8),\n            PaddingRight = UDim.new(0, 8),\n            PaddingBottom = UDim.new(0, 8),\n            PaddingLeft = UDim.new(0, 8),\n        }),\n    })\nend\n\nreturn Button\n'})}),"\n",(0,n.jsxs)(e.p,{children:["And now modify the story to pass in the ",(0,n.jsx)(e.code,{children:"isDisabled"})," prop:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-diff",children:'local Roact = require(path.to.Roact)\nlocal Button = require(script.Parent.Button)\n\nreturn {\n    summary = "A generic button component that can be used anywhere",\n    story = Roact.createElement(Button, {\n        text = "Click me",\n+       isDisabled = true,\n        onActivated = function()\n            print("click")\n        end,\n    }),\n}\n'})}),"\n",(0,n.jsx)(e.p,{children:'The story should automatically reload and you will see the button is greyed out and no longed prints "click" when activated.'}),"\n",(0,n.jsxs)(e.p,{children:["Despite this new ",(0,n.jsx)(e.code,{children:"isDisabled"})," prop, it is still hard to test out different state sfor the button since you have to manually edit the story each time. That's where controls come in. Modify your story as follows:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-diff",children:'local Roact = require(path.to.Roact)\nlocal Button = require(script.Parent.Button)\n\nreturn {\n    summary = "A generic button component that can be used anywhere",\n+   controls = {\n+       isDisabled = false,\n+   },\n-   story = Roact.createElement(Button, {\n+   story = function(props)\n+       return Roact.createElement(Button, {\n            text = "Click me",\n-           isDisabled = true,\n+           isDisabled = props.controls.isDisabled,\n            onActivated = function()\n                print("click")\n            end,\n        })\n+   end,\n}\n'})}),"\n",(0,n.jsxs)(e.p,{children:['With this change, a new "Controls" panel will appear where you can toggle the ',(0,n.jsx)(e.code,{children:"isDisabled"})," prop. This gets fed into your Button component and will automatically reload. You can now toggle between your button's states to see how it behaves."]}),"\n",(0,n.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsx)(e.p,{children:"You have just been given an example of how to create a storybook and a story for a Button component that makes use of flipbook's controls feature. This document outlines the biggest features of flipbook, but there are other options you can play around with."}),"\n",(0,n.jsxs)(e.p,{children:["Check out ",(0,n.jsx)(e.a,{href:"/flipbook/docs/story-format",children:"Story Format"})," next to learn about all the options you have available."]})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>i,x:()=>a});var n=o(6540);const r={},s=n.createContext(r);function i(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);