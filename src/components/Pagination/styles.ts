import { colorGet } from "../../shared/utils";
import styled, { css } from "styled-components";
import { IPagination } from ".";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

type IBallContainer = Pick<IPagination, "status" | "rounded" | "disabled"> & {
  isCurrentPage?: boolean;
};

export const BallContainer = styled.div<IBallContainer>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border: 1px solid ${({ status }) => colorGet(status, 500)};
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ rounded }) => (rounded ? "1rem" : "5px")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};

  ${({ isCurrentPage, status }) =>
    isCurrentPage &&
    css`
      background-color: ${colorGet(status, 200)};
    `}

  transition: filter 0.3s;

  ${({ disabled, status }) =>
    !disabled &&
    css`
      &:hover {
        border: 2px solid ${colorGet(status, 700)};
        filter: brightness(0.9);
      }
    `}
`;
