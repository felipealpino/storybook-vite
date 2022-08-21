import React, { useRef, useState, useEffect, useCallback } from "react";

import { ElementStatus } from "../../shared/theme/colors";

import { SwipeToggleContainer } from "./styles";

export interface ISwipeToggle {
  rounded?: boolean;
  animatedIcon?: boolean;
  status: ElementStatus;
  outline?: boolean;
  disabled?: boolean;
  isChecked?: boolean;
  handleOnChange?: (stateCheckButton: boolean) => void;
  className?: string;
}

const SwipeToggle: React.FC<ISwipeToggle> = ({ handleOnChange, ...props }) => {
  const [statusCheck, setStatusCheck] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = useCallback(() => {
    if (handleOnChange) handleOnChange(statusCheck);
  }, [handleOnChange, statusCheck]);

  useEffect(() => {
    setStatusCheck(props.isChecked || false);
  }, [props.isChecked]);

  return (
    <SwipeToggleContainer
      {...props}
      className={`swipe-toggle-container ${props.className || ""}`}
      statusCheck={statusCheck}
    >
      <input type="checkbox" ref={inputRef} onChange={handleChangeInput} />
      <span
        className="slider"
        onClick={() => !props.disabled && setStatusCheck(!statusCheck)}
      >
        <div className="center-ball">
          {props.animatedIcon && (
            <div className="animated-icon-div">
              <div className="animated-icon"></div>
            </div>
          )}
        </div>
      </span>
    </SwipeToggleContainer>
  );
};

export { SwipeToggle };
