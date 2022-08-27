import { IAccordion } from '.';
import { colorGet } from '../../../shared/utils/colorGet';
import styled, { css } from 'styled-components';

type IAccordionProps = Pick<IAccordion, 'disabled' | 'status'> & {
	isOpen: boolean;
	childrenHeight?: number;
};

export const AccordionContainer = styled.div<IAccordionProps>`
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	background: ${({ status }) => (status ? colorGet(status, 400) : 'transparent')};
	min-height: 2rem;
	width: inherit;
	opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

	.accordion-header {
		padding: 0 1rem;
		min-height: inherit;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

		.accordion-header-content {
			display: flex;
			margin: 1rem 0;
			gap: 1rem;

			.accordion-title {
			}

			.accordion-description {
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				width: fit-content;
				color: #777777;
			}
		}

		.accordion-icon {
			transition: 0.2s ease-in-out;
			transition-property: transform;
			transform: ${({ isOpen }) => `rotate(${isOpen ? '0deg' : '-90deg'})`};

			svg {
				width: 20px;
				height: 20px;
			}
		}
	}

	.accordion-content {
		background: #ffffff;
		transition: height, padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		padding: ${({ isOpen }) => (isOpen ? '1rem' : '0 1rem')};

		${({ isOpen, childrenHeight }) =>
			!isOpen
				? css`
						height: 0px;
						overflow: hidden;
				  `
				: css`
						height: ${`${childrenHeight}px`};
				  `}

		.accordion-childrens {
			transition-duration: 300ms;
			transition-property: visibility, opacity;
			opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
			visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
		}
	}
`;
