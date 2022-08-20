import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseStyles } from "../BaseStyles";
import { Fragment } from "react";
import { Input } from "./Input";
import { hideArgs } from "../../stories/hideArgTypes";

console.log(hideArgs);
export default {
  title: "INPUTs/Input",
  component: Input,
  argTypes: hideArgs,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Fragment>
    <BaseStyles />
    <Input {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: "This is a Input",
  error: "",
  status: "primary",
  required: true,
};
