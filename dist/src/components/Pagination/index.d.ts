import React from "react";
import { ElementStatus } from "../../shared/theme/colors";
export interface IPagination {
    totalOfPages: number;
    currentPage: number;
    status?: ElementStatus;
    rounded?: boolean;
    className?: string;
    callbackGetListData: (page: number) => Promise<void>;
}
declare const Pagination: React.FC<IPagination>;
export { Pagination };
