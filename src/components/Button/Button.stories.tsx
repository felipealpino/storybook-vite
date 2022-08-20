import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Button } from ".";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "BUTTON/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Fragment>
    <BaseStyles />
    <Button {...args}>Click here 👆🏻</Button>
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {};
