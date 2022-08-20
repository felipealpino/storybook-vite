import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Tooltip } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Button } from "../Button";

export default {
  title: "TOOLTIP/Tooltip",
  component: Tooltip,
  argTypes: hideArgs,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Fragment>
    <BaseStyles />
    <Tooltip {...args}>
      <h1 style={{ margin: "2rem" }}>Hover me</h1>
    </Tooltip>
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {
  text: "I am a tooltip title",
};
