import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Fragment } from "react";
import { Pagination } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "PAGINATION/Pagination",
  component: Pagination,
  argTypes: hideArgs,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Fragment>
    <BaseStyles />
    <Pagination {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 0,
  totalOfPages: 10,
};
