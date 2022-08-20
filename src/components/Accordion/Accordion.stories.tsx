import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Accordion } from ".";
import { Accordions } from "./Accordions";

export default {
  title: "ACCORDIONS/Accordions",
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Fragment>
    <Accordion {...args}>
      <div>alou</div>
      <div>alou</div>
      <div>alou</div>
    </Accordion>
    <Accordion {...args}>
      <div>alou</div>
      <div>alou</div>
      <div>alou</div>
    </Accordion>
    <Accordion {...args}>
      <div>alou</div>
      <div>alou</div>
      <div>alou</div>
    </Accordion>
  </Fragment>
);

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  disabled: false,
  status: "primary",
  title: "This is an accordion",
};

const Template2: ComponentStory<typeof Accordions> = (args) => (
  <Accordions gap={args.gap}>
    <Accordion title="Accordion 1" status="primary">
      <div>oi</div>
    </Accordion>
    <Accordion title="Accordion 2" disabled status="secondary">
      <div>oi</div>
    </Accordion>
    <Accordion title="Accordion 3" status="tertiary">
      <div>oi</div>
    </Accordion>
  </Accordions>
);

export const OneOpen = Template2.bind({});
OneOpen.args = {
  gap: 0,
};
