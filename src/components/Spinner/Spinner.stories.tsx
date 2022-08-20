import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Spinner } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "SPINNER/Spinner",
  component: Spinner,
  argTypes: hideArgs,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Fragment>
    <BaseStyles />
    <Spinner {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {};
