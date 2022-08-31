import React from 'react';
import { ElementStatus } from '../../theme/colors';
export interface IInputLabel {
    label: string;
    isRequired?: boolean;
    className?: string;
    status?: ElementStatus;
}
declare const InputLabel: React.FC<IInputLabel>;
export default InputLabel;
