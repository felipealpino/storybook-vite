import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Avatar } from ".";
import { BaseStyles } from "../BaseStyles";

export default {
  title: "AVATAR/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Fragment>
    <BaseStyles />
    <Avatar {...args} />
  </Fragment>
);

export const Primary = Template.bind({});
Primary.args = {
  image: "https://source.unsplash.com/random?avatar",
  width: 50,
  height: 50,
};
