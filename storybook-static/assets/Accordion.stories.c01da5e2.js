import{a as n,r,j as o}from"./jsx-runtime.48533e16.js";import{A as i}from"./index.2cc5874f.js";import{h as t}from"./hideArgTypes.a90ae262.js";import{B as d}from"./index.235f6fa3.js";import"./iframe.668864a1.js";import"./index.esm.eb321859.js";const A={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Accordion } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "ACCORDIONS/Open multiple Accordions",
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
`,locationsMap:{"multiple-open":{startLoc:{col:51,line:13},endLoc:{col:1,line:32},startBody:{col:51,line:13},endBody:{col:1,line:32}}}}},title:"ACCORDIONS/Open multiple Accordions",component:i,argTypes:t},l=e=>n(r.exports.Fragment,{children:[o(d,{}),n(i,{...e,children:[o("div",{children:"alou"}),o("div",{children:"alou"}),o("div",{children:"alou"})]}),n(i,{...e,children:[o("div",{children:"alou"}),o("div",{children:"alou"}),o("div",{children:"alou"})]}),n(i,{...e,children:[o("div",{children:"alou"}),o("div",{children:"alou"}),o("div",{children:"alou"})]})]}),a=l.bind({});a.args={disabled:!1,status:"primary",title:"This is an accordion"};const h=["MultipleOpen"];export{a as MultipleOpen,h as __namedExportsOrder,A as default};
//# sourceMappingURL=Accordion.stories.c01da5e2.js.map
