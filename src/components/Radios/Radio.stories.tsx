import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Radio } from "./Radio";

export default {
  title: "RADIO/Radio",
  component: Radio,
  argTypes: hideArgs,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Fragment>
    <BaseStyles />
    <Radio {...args} />
    <br />
    <Radio {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  name: "radio1",
};
