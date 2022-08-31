import React, { Fragment, useCallback, useMemo, useState } from 'react';

import { SelectContainer, SelectDropDownBody } from './styles';

import { ISelectDefaultProps } from '../../../components/Selects/interfaces/ISelectDefaultProps';
import { ISelectOptions } from '../../../components/Selects/interfaces/ISelectOptions';

import InputsErrorMessage from '../../../shared/components/InputsErrorMessage/inputsErrorMessage';
import { FiChevronRight } from 'react-icons/fi';
import InputLabel from '../../../shared/components/InputLabel';

const Select: React.FC<ISelectDefaultProps> = ({
	handleOnChange,
	initialOption,
	disabled,
	placeholder,
	label,
	status,
	required,
	name,
	isBodyContentAbsolute = true,
	className,
	options,
	error,
	noOptionsMessage = 'Nenhuma opção disponível...',
}) => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<ISelectOptions | undefined>(initialOption);

	const toggleSelect = useCallback(() => {
		!disabled && setOpen((oldState) => !oldState);
	}, [disabled]);

	const handleOptionClick = useCallback(
		(option: ISelectOptions) => {
			handleOnChange && handleOnChange(option);
			setSelectedItem(option);
			setOpen((oldState) => !oldState);
		},
		[handleOnChange]
	);

	const headerText = useMemo(() => {
		if (selectedItem) return selectedItem.name;
		if (placeholder) return placeholder;
		return 'Selecione uma Opção';
	}, [placeholder, selectedItem]);

	return (
		<Fragment>
			{label && <InputLabel label={label} status={status} isRequired={required} />}

			<SelectContainer className={`select-container ${className ? className : ''}`} status={status} isOpen={isOpen} disabled={disabled}>
				<div className="select-dropdown-header" onClick={toggleSelect}>
					{headerText}
					<FiChevronRight color="#222b45" />
				</div>

				{isOpen && (
					<SelectDropDownBody className="select-dropdown-body" isBodyContentAbsolute={isBodyContentAbsolute}>
						{options && options.length > 0 ? (
							options.map((option, index) => (
								<li key={index} className="select-dropdown-item" onClick={() => handleOptionClick(option)} id={name}>
									{option.name}
								</li>
							))
						) : (
							<li className="select-dropdown-item">{noOptionsMessage}</li>
						)}
					</SelectDropDownBody>
				)}
			</SelectContainer>

			{error && <InputsErrorMessage error={error} />}
		</Fragment>
	);
};

export { Select };
