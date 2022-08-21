import React from "react";
import { ElementStatus } from "../../shared/theme/colors";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { BallContainer, PaginationContainer } from "./styles";

export interface IPagination {
  totalOfPages: number;
  currentPage: number;
  status?: ElementStatus;
  rounded?: boolean;
  className?: string;
  paginationCallback: (page: number) => Promise<void>;
}

// last page desabiliatar right
// fist page desabilitar first

const Pagination: React.FC<IPagination> = ({
  rounded = true,
  paginationCallback,
  ...props
}) => {

  return (
    <PaginationContainer
      className={`pagination-container ${props.className || ""}`}
    >
      <BallContainer>
        <FiChevronLeft />
      </BallContainer>

      

      <BallContainer>
        <FiChevronRight />
      </BallContainer>
    </PaginationContainer>
  );
};

export { Pagination };
