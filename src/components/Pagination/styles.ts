import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

type IBallContainer = {
  isCurrentPage?: boolean;
};

export const BallContainer = styled.div<IBallContainer>`
  cursor: pointer;
  border: 1px solid black;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  ${({ isCurrentPage }) =>
    isCurrentPage &&
    css`
      background-color: blue;
      color: white;
    `}

  transition: filter 0.3s;

  &:hover {
    border: 2px solid black;
    filter: brightness(0.5);
  }
`;
