import React from "react";
import { ElementStatus } from "../../shared/theme/colors";
export interface IPagination {
    totalOfPages: number;
    currentPage: number;
    status?: ElementStatus;
    rounded?: boolean;
    disabled?: boolean;
    className?: string;
    fisrtPageStartsIn: 0 | 1;
    paginationCallback: (pageToGo: number) => any;
}
declare const Pagination: React.FC<IPagination>;
export { Pagination };
