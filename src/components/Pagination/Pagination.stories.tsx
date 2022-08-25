import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import { Fragment } from "react";
import { Pagination } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "PAGINATION/Pagination",
  component: Pagination,
  argTypes: {
    ...hideArgs,
    currentPage: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState<number>(0);
  function pagination(pageToGO: number) {
    console.log("🚀 ~ pageToGO", pageToGO);
    setPage(pageToGO);
  }

  return (
    <Fragment>
      <BaseStyles />
      <Pagination
        {...args}
        currentPage={page}
        paginationCallback={pagination}
      />
    </Fragment>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  totalOfPages: 10,
};
