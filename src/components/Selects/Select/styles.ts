import { colorGet } from '../../../shared/utils/colorGet';
import styled from 'styled-components';
import { ISelectDefaultProps } from '../interfaces/ISelectDefaultProps';

type ISelectProps = Pick<ISelectDefaultProps, 'status' | 'disabled'> & {
	isOpen: boolean;
	childrenHeight?: number;
};

export const SelectContainer = styled.div<ISelectProps>`
	--selectHeigth: 40px;
	--borderRadius: 4px;
	--bgColor: #ffffff;

	background-color: var(--bgColor);
	opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
	position: relative;
	font-size: 15px;
	width: 100%;

	.select-dropdown-header {
		border-radius: var(--borderRadius);
		height: var(--selectHeigth);
		cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
		border: 1px solid ${({ status }) => `${colorGet(status, 500)}`};
		justify-content: space-between;
		align-items: center;
		padding: 15px;
		display: flex;

		svg {
			transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
			margin-left: 10px;
			width: 20px;
			height: 20px;
			transition: 0.2s ease-in-out;
		}
	}
`;

export const SelectDropDownBody = styled.ul<Pick<ISelectDefaultProps, 'isBodyContentAbsolute'>>`
	top: calc(var(--selectHeigth));
	border-radius: var(--borderRadius);
	position: ${({ isBodyContentAbsolute }) => (isBodyContentAbsolute ? 'absolute' : 'initial')};
	box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
	animation: selectBodyAnimation 300ms;
	background-color: inherit;
	width: inherit;
	padding: 5px;
	z-index: 1;

	li {
		list-style-type: none;
	}

	@keyframes selectBodyAnimation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.select-dropdown-item {
		padding: 10px;
	}

	.select-dropdown-item:hover {
		cursor: pointer;
	}
`;
