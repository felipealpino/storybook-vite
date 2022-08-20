import{a as r,r as n,j as t}from"./jsx-runtime.9fa4431b.js";import{B as o}from"./index.311e12ab.js";import{h as s}from"./hideArgTypes.a90ae262.js";import{B as a}from"./index.bc275c18.js";import"./iframe.0ce430a8.js";const y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Button } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "BUTTON/Button",
  component: Button,
  argTypes: hideArgs,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Fragment>
    <BaseStyles />
    <Button {...args}>Click here \u{1F446}\u{1F3FB}</Button>
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
`,locationsMap:{primary:{startLoc:{col:48,line:13},endLoc:{col:1,line:18},startBody:{col:48,line:13},endBody:{col:1,line:18}}}}},title:"BUTTON/Button",component:o,argTypes:s},m=e=>r(n.exports.Fragment,{children:[t(a,{}),t(o,{...e,children:"Click here \u{1F446}\u{1F3FB}"})]}),i=m.bind({});i.args={disabled:!1};const u=["Primary"];export{i as Primary,u as __namedExportsOrder,y as default};
//# sourceMappingURL=Button.stories.23e5130d.js.map
