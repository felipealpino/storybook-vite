import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Select } from "./Select";

export default {
  title: "SELECTs/Select",
  component: Select,
  argTypes: hideArgs,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Fragment>
    <BaseStyles />
    <Select {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { name: "Thawan Cavalcante", value: "thawan" },
    { name: "Gabriel Campos", value: "gabriel" },
    { name: "Igor Araujo", value: "igor" },
    { name: "Felipe Gontijo", value: "felipe" },
  ],
};
