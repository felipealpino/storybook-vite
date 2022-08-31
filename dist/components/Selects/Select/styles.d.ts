import { ISelectDefaultProps } from '../interfaces/ISelectDefaultProps';
declare type ISelectProps = Pick<ISelectDefaultProps, 'status' | 'disabled'> & {
    isOpen: boolean;
    childrenHeight?: number;
};
export declare const SelectContainer: import("styled-components").StyledComponent<"div", any, ISelectProps, never>;
export declare const SelectDropDownBody: import("styled-components").StyledComponent<"ul", any, Pick<ISelectDefaultProps, "isBodyContentAbsolute">, never>;
export {};
