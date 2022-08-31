import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { Fragment } from 'react';
import { IUploaderResponde, Uploader } from '.';
import { hideArgs } from '../../stories/hideArgTypes';
import { BaseStyles } from '../BaseStyles';

export default {
	title: 'UPLOADER/Uploader',
	component: Uploader,
	argTypes: hideArgs,
} as ComponentMeta<typeof Uploader>;

const Template: ComponentStory<typeof Uploader> = (args) => {
	const handleUploader = (files: IUploaderResponde[]) => {
		console.log(`inserted files`, files);
	};

	return (
		<Fragment>
			<BaseStyles />
			<Uploader {...args} handleUploadCallback={handleUploader} />
		</Fragment>
	);
};

export const Primary = Template.bind({});

Primary.args = {
	validTypes: ['image/png', 'image/jpeg'],
	maxSize: undefined,
};
