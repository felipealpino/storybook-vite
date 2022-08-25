import { IPagination } from ".";
export declare const PaginationContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type IBallContainer = Pick<IPagination, "status" | "rounded" | "disabled"> & {
    isCurrentPage?: boolean;
};
export declare const BallContainer: import("styled-components").StyledComponent<"div", any, IBallContainer, never>;
export {};
