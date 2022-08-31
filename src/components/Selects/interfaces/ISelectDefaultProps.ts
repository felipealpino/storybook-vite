import { ISelectOptions } from './ISelectOptions';
import { ElementStatus } from '../../../shared/theme/colors';
import { SelectHTMLAttributes } from 'react';

export interface ISelectDefaultProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	options: ISelectOptions[];
	name: string;
	status: ElementStatus;
	placeholder?: string;
	handleOnChange?: (selectedOption: ISelectOptions) => void;
	error?: string;
	initialOption?: ISelectOptions;
	isBodyContentAbsolute?: boolean;
	noOptionsMessage?: string;
}
