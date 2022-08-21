import React from "react";
import { ElementStatus } from "../../shared/theme/colors";
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
declare const SwipeToggle: React.FC<ISwipeToggle>;
export { SwipeToggle };
