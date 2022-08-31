import { IAccordion } from '.';
declare type IAccordionProps = Pick<IAccordion, 'disabled' | 'status'> & {
    isOpen: boolean;
    childrenHeight?: number;
};
export declare const AccordionContainer: import("styled-components").StyledComponent<"div", any, IAccordionProps, never>;
export {};
