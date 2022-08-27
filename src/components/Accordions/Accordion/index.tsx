import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AccordionContainer } from './styles';
import { FiChevronDown } from 'react-icons/fi';
import { ElementStatus } from '../../../shared/theme/colors';

export interface IAccordion {
	index?: number;
	status?: ElementStatus;
	className?: string;
	title?: string;
	descripton?: string;
	disabled?: boolean;
	handleSetCurrent?: (index: number) => void;
	accordionCurent?: number;
	children?: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({ descripton, status, handleSetCurrent, disabled, accordionCurent, index, title, children, className }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const accordionContentRef = useRef<HTMLDivElement>(null);

	const handleOpen = useCallback(() => {
		setIsOpen((oldState) => !oldState);
		handleSetCurrent && handleSetCurrent(Number(index));
	}, [handleSetCurrent, index]);

	useEffect(() => {
		if ((accordionCurent || accordionCurent === 0) && accordionCurent !== index) {
			setIsOpen(false);
		}
	}, [accordionCurent, index]);

	const childrenContentHeight = useMemo(() => {
		if (!accordionContentRef.current) return;
		if (isOpen) return accordionContentRef.current.offsetHeight + 32;
		return 0;
	}, [isOpen]);

	return (
		<AccordionContainer
			childrenHeight={childrenContentHeight}
			disabled={disabled}
			status={status}
			isOpen={isOpen}
			className={`accordion-container ${className || ''}`}
		>
			<div className="accordion-header" onClick={() => !disabled && handleOpen()}>
				<div className="accordion-header-content">
					<div className="accordion-title">
						<p>{title}</p>
					</div>
					<div className="accordion-description">
						<p>{descripton}</p>
					</div>
				</div>
				<div className="accordion-icon">
					<FiChevronDown color="#11182F" />
				</div>
			</div>
			{children && (
				<div className="accordion-content">
					<div ref={accordionContentRef} className="accordion-childrens">
						{children}
					</div>
				</div>
			)}
		</AccordionContainer>
	);
};

export { Accordion };
