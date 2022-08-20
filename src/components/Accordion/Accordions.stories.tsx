import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Accordion } from ".";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { Accordions } from "./Accordions";

export default {
  title: "ACCORDIONS/Accordion",
  component: Accordions,
  argTypes: hideArgs,
} as ComponentMeta<typeof Accordions>;

const Template: ComponentStory<typeof Accordions> = (args) => (
  <Fragment>
    <BaseStyles />
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
  </Fragment>
);

export const OneOpen = Template.bind({});
OneOpen.args = {
  gap: 0,
};
