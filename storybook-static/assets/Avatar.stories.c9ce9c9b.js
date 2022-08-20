import{j as t,a as s,r as i}from"./jsx-runtime.80f4563e.js";import{s as m,B as p}from"./index.30e3d514.js";import{h as c}from"./hideArgTypes.a90ae262.js";import"./iframe.4aa7385a.js";const d=m.div`
  background: gray;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  img {
    height: 100%;
    font-family: cover;
    object-fit: cover;
    width: 100%;
  }

  ${e=>e.onClick&&"cursor: pointer"}
`,a=({image:e,width:n=50,height:o=50,className:r})=>t(d,{className:`avatar-container ${r||""}`,width:n,height:o,children:t("img",{src:e,alt:"avatar"})});try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},width:{defaultValue:{value:"50"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"50"},description:"",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/index.tsx#Avatar"]={docgenInfo:a.__docgenInfo,name:"Avatar",path:"src/components/Avatar/index.tsx#Avatar"})}catch{}const A={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Avatar } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "AVATAR/Avatar",
  component: Avatar,
  argTypes: hideArgs,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Fragment>
    <BaseStyles />
    <Avatar {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  image: "https://source.unsplash.com/random?avatar",
  width: 50,
  height: 50,
};
`,locationsMap:{primary:{startLoc:{col:48,line:13},endLoc:{col:1,line:18},startBody:{col:48,line:13},endBody:{col:1,line:18}}}}},title:"AVATAR/Avatar",component:a,argTypes:c},l=e=>s(i.exports.Fragment,{children:[t(p,{}),t(a,{...e})]}),g=l.bind({});g.args={image:"https://source.unsplash.com/random?avatar",width:50,height:50};const v=["Primary"];export{g as Primary,v as __namedExportsOrder,A as default};
//# sourceMappingURL=Avatar.stories.c9ce9c9b.js.map
