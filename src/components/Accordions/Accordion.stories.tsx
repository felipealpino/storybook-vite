import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Fragment } from 'react';
import { hideArgs } from '../../stories/hideArgTypes';
import { BaseStyles } from '../BaseStyles';
import { Accordion } from './Accordion';

export default {
	title: 'ACCORDIONS/Open multiple Accordions',
	component: Accordion,
	argTypes: hideArgs,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Fragment>
		<BaseStyles />
		<Accordion {...args}>
			<div>alou</div>
			<div>alou</div>
			<div>alou</div>
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
	title: 'This is an accordion',
};
