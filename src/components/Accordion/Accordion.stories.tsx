import { ComponentStory, ComponentMeta } from "@storybook/react";
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
