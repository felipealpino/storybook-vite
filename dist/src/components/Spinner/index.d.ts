import { ElementStatus } from '../../shared/theme/colors';
import React from 'react';
export interface ISpinner {
    status?: ElementStatus;
    fixed?: boolean;
    className?: string;
    size?: number;
}
declare const Spinner: React.FC<ISpinner>;
export { Spinner };
