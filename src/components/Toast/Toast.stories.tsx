import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "../../shared/styles";
import { BaseStyles } from "../BaseStyles";
import { ExampleToUse } from "./ExampleToUse";
import { ToastCard } from "./ToastCard";

export default {
  title: "TOAST/ToastCard",
} as ComponentMeta<typeof ToastCard>;

const Template: ComponentStory<typeof ToastCard> = (args) => (
  <ThemeProvider>
    <BaseStyles />
    <ExampleToUse />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
