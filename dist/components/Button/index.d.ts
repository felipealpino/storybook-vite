import { ElementStatus } from "../../shared/theme/colors";
import React, { ButtonHTMLAttributes } from "react";
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    status?: ElementStatus;
    outline?: boolean;
}
declare const Button: React.FC<IButton>;
export { Button };
