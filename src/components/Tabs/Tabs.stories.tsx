import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../shared/styles";
import { BaseStyles } from "../BaseStyles";
import { Tabs } from "../Tabs/Tabs";
import { ITab } from "../Tabs/Tab";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";

export default {
  title: "TABS/Tabs",
  component: Tabs,
  argTypes: hideArgs,
} as ComponentMeta<typeof Tabs>;

const tabsToRender: ITab[] = [
  {
    label: "Home",
    index: 0,
    componentToRender: <Fragment />,
  },
  {
    label: "Products",
    index: 1,
    componentToRender: <Fragment />,
  },
  {
    label: "Graphics",
    index: 2,
    componentToRender: <Fragment />,
  },
];

const Template: ComponentStory<typeof Tabs> = (args) => (
  <ThemeProvider>
    <BaseStyles />
    <Tabs {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  tabs: tabsToRender,
};
