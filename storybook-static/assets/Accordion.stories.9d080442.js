import{a as n,r as e,j as o}from"./jsx-runtime.80f4563e.js";import{A as i}from"./index.8729996b.js";import{h as t}from"./hideArgTypes.a90ae262.js";import{B as d}from"./index.30e3d514.js";import"./iframe.4aa7385a.js";import"./index.esm.186a66f7.js";const A={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Accordion } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "ACCORDIONS/Accordions",
  component: Accordion,
  argTypes: hideArgs,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Fragment>
    <BaseStyles />
    <Accordion {...args}>
      <div>alou</div>
      <div>alou</div>
      <div>alou</div>
    </Accordion>
    <Accordion {...args}>
      <div>alou</div>
      <div>alou</div>
      <div>alou</div>
    </Accordion>
    <Accordion {...args}>
      <div>alou</div>
      <div>alou</div>
      <div>alou</div>
    </Accordion>
  </Fragment>
);

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  disabled: false,
  status: "primary",
  title: "This is an accordion",
};
`,locationsMap:{"multiple-open":{startLoc:{col:51,line:13},endLoc:{col:1,line:32},startBody:{col:51,line:13},endBody:{col:1,line:32}}}}},title:"ACCORDIONS/Accordions",component:i,argTypes:t},a=r=>n(e.exports.Fragment,{children:[o(d,{}),n(i,{...r,children:[o("div",{children:"alou"}),o("div",{children:"alou"}),o("div",{children:"alou"})]}),n(i,{...r,children:[o("div",{children:"alou"}),o("div",{children:"alou"}),o("div",{children:"alou"})]}),n(i,{...r,children:[o("div",{children:"alou"}),o("div",{children:"alou"}),o("div",{children:"alou"})]})]}),l=a.bind({});l.args={disabled:!1,status:"primary",title:"This is an accordion"};const h=["MultipleOpen"];export{l as MultipleOpen,h as __namedExportsOrder,A as default};
//# sourceMappingURL=Accordion.stories.9d080442.js.map
