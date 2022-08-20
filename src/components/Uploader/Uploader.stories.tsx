import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Uploader } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "UPLOADER/Uploader",
  component: Uploader,
  argTypes: hideArgs,
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = (args) => (
  <Fragment>
    <BaseStyles />
    <Uploader {...args} />
  </Fragment>
);

export const Primary = Template.bind({});

Primary.args = {
  validTypes: ["image/png", "image/jpeg"],
  maxSize: undefined,
};
