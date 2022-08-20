import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from ".";

export default {
  title: "AVATAR/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: "https://source.unsplash.com/random?avatar",
  width: 50,
  height: 50,
};
