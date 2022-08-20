import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { FiTrash2 } from "react-icons/fi";
import { BaseStyles } from "../BaseStyles";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";

export default {
  title: "CHECKBOXes/Checkbox",
  component: Checkbox,
  argTypes: hideArgs,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Fragment>
    <BaseStyles />
    <Checkbox {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  semiRounded: true,
  disabled: false,
  label: "This is a Checkbox",
  error: "",
  status: "primary",
};
