import { ElementStatus } from "../../shared/theme/colors";
import React, { ButtonHTMLAttributes, useCallback } from "react";
import { ButtonContainer } from "./styles";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ElementStatus;
  outline?: boolean;
}

const Button: React.FC<IButton> = ({ onClick, ...props }) => {
  const handleOnClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (props.disabled) return;
      onClick && onClick(event);
    },
    [onClick, props.disabled]
  );

  return (
    <ButtonContainer
      {...props}
      className={`button-container ${props.className || ""}`}
      onClick={(event) => handleOnClickButton(event)}
    ></ButtonContainer>
  );
};

export { Button };
