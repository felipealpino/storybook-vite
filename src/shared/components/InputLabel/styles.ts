import styled from 'styled-components';
import { IInputLabel } from '.';
import { colorGet } from '../../utils/colorGet';

export const InputLabelContainer = styled.label<Pick<IInputLabel, 'status'>>`
	white-space: nowrap;
	color: ${({ status }) => `${colorGet(status, 500)}`};
	text-transform: unset;
	margin: 4px 0px;
	font-size: 14px;
	font-weight: 700;
	user-select: none;
	pointer-events: none;
	display: flex;

	.required-star {
		color: ${colorGet('danger', 500)};
		font-size: 14px;
		margin-left: 3px;
	}
`;
