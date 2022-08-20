import { ComponentStory, ComponentMeta } from "@storybook/react";
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
    <Button {...args}>Click here 👆🏻</Button>
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
