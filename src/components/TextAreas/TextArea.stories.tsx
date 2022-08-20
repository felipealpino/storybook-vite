import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { TextArea } from "./TextArea";

export default {
  title: "TEXTAREA/TextArea",
  component: TextArea,
  argTypes: hideArgs,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <Fragment>
    <BaseStyles />
    <TextArea {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {};
