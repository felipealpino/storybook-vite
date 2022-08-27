import { ISpinner } from '../../components/Spinner';
import { colorGet } from '../../shared/utils/colorGet';
import styled, { css } from 'styled-components';

export const SpinnerContainer = styled.div<Pick<ISpinner, 'fixed'>>`
	${({ fixed }) =>
		fixed &&
		` 
    position: fixed;
    inset: 0;
    background: ${colorGet('basic', 300, true)};
    display: flex;
    justify-content: center;
    align-items: center;
    `}
`;

export const SpinnerBall = styled.div<Pick<ISpinner, 'status' | 'size' | 'fixed'>>`
	${({ size }) => css`
		width: ${size}px;
		height: ${size}px;
	`}

	${({ status }) => css`
		border: 4px solid ${colorGet(status, 600)};
		border-top: 4px solid ${colorGet(status, 400)};
		border-left: 4px solid ${colorGet(status, 400)};
		border-right: 4px solid ${colorGet(status, 400)};
	`}
	
	border-radius: 50%;
	animation: spin 1s cubic-bezier(1, 1, 1, 1) infinite;
	margin: ${({ fixed }) => (fixed ? 'unset' : 'auto')};

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
