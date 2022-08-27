import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { hideArgs } from "../../stories/hideArgTypes";
import { BaseStyles } from "../BaseStyles";
import { AccordionsControlled } from "../Accordions/AccordionsControlled";
import { Accordion } from "../Accordions/Accordion";

export default {
  title: "ACCORDIONS/Open one Acordion",
  component: AccordionsControlled,
  argTypes: hideArgs,
} as ComponentMeta<typeof AccordionsControlled>;

const Template: ComponentStory<typeof AccordionsControlled> = (args) => (
  <Fragment>
    <BaseStyles />
    <AccordionsControlled gap={args.gap}>
      <Accordion title="Accordion 1" status="primary">
        <div>oi</div>
      </Accordion>
      <Accordion title="Accordion 2" disabled status="secondary">
        <div>oi</div>
      </Accordion>
      <Accordion title="Accordion 3" status="tertiary">
        <div>oi</div>
      </Accordion>
    </AccordionsControlled>
  </Fragment>
);

export const OneOpen = Template.bind({});
OneOpen.args = {
  gap: 0,
};
