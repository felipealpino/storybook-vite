import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { Fragment } from 'react';
import { hideArgs } from '../../stories/hideArgTypes';
import { BaseStyles } from '../BaseStyles';
import { ISelectOptions } from './interfaces/ISelectOptions';
import { Select } from './Select';

export default {
	title: 'SELECTs/Select',
	component: Select,
	argTypes: hideArgs,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
	function handleOnChangeSelect(selectedOption: ISelectOptions) {
		console.log(selectedOption);
	}

	return (
		<Fragment>
			<BaseStyles />
			<Select {...args} handleOnChange={handleOnChangeSelect} />
		</Fragment>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	options: [
		{ name: 'Thawan Cavalcante', value: 'thawan' },
		{ name: 'Gabriel Campos', value: 'gabriel' },
		{ name: 'Igor Araujo', value: 'igor' },
		{ name: 'Felipe Gontijo', value: 'felipe' },
	],
};
