import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { SwipeToggle } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "CHECKBOXES/SwipeToggle",
  component: SwipeToggle,
  argTypes: hideArgs,
} as ComponentMeta<typeof SwipeToggle>;

const Template: ComponentStory<typeof SwipeToggle> = (args) => (
  <Fragment>
    <BaseStyles />
    <SwipeToggle {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {};
