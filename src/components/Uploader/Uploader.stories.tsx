import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Uploader } from ".";

export default {
  title: "UPLOADER/Uploader",
  component: Uploader,
  argTypes: {},
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = (args) => (
  <Uploader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  validTypes: ["image/png", "image/jpeg"],
  maxSize: undefined,
};
