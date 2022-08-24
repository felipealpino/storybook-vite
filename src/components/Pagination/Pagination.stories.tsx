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

const Template: ComponentStory<typeof Pagination> = (args) => {
  function pagination(pageToGO: number) {
    console.log("🚀 ~ pageToGO", pageToGO);
  }

  return (
    <Fragment>
      <BaseStyles />
      <Pagination {...args} paginationCallback={pagination} />
    </Fragment>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 0,
  totalOfPages: 10,
};
