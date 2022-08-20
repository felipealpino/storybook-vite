import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "BUTTON/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click here 👆🏻</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};
