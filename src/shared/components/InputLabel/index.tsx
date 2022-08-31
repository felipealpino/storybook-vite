import React from 'react';
import { ElementStatus } from '../../theme/colors';
import { InputLabelContainer } from './styles';

export interface IInputLabel {
	label: string;
	isRequired?: boolean;
	className?: string;
	status?: ElementStatus;
}

const InputLabel: React.FC<IInputLabel> = ({ className, label, status, isRequired }) => {
	return (
		<InputLabelContainer className={`input-label ${className ? className : ''}`} status={status}>
			{label}
			{isRequired && <span className="required-star">*</span>}
		</InputLabelContainer>
	);
};

export default InputLabel;
