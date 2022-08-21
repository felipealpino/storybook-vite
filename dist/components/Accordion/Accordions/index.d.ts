import React from "react";
export interface IAccordions {
    gap?: number;
    children?: React.ReactNode;
}
declare const Accordions: React.FC<IAccordions>;
export { Accordions };
