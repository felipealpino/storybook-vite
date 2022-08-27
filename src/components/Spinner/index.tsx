import { ElementStatus } from '../../shared/theme/colors';
import React from 'react';

import { SpinnerBall, SpinnerContainer } from './styles';

export interface ISpinner {
	status?: ElementStatus;
	fixed?: boolean;
	className?: string;
	size?: number;
}

const Spinner: React.FC<ISpinner> = ({ fixed = true, size = 30, className, status }) => {
	return (
		<SpinnerContainer className={`spinner-container ${className || ''}`} fixed={fixed}>
			<SpinnerBall className="spinner-ball" status={status} size={size} fixed={fixed} />
		</SpinnerContainer>
	);
};

export { Spinner };
