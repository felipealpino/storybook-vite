import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ElementStatus } from "../../shared/theme/colors";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { BallContainer, PaginationContainer } from "./styles";

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

const Pagination: React.FC<IPagination> = ({
  totalOfPages,
  currentPage,
  className,
  fisrtPageStartsIn = 0,
  rounded,
  status,
  paginationCallback,
  disabled,
}) => {
  const [showDots, setShotDots] = useState<"start" | "end" | "both">();
  const lastPage = fisrtPageStartsIn === 0 ? totalOfPages - 1 : totalOfPages;
  const isInLastPage = currentPage === lastPage;
  const isInFirstPage = currentPage === fisrtPageStartsIn;

  const renderPagesWithDots = useMemo(() => {
    let toRender: JSX.Element[] = [];

    if (showDots === "end") {
      for (let i = fisrtPageStartsIn; i <= 5; i++) {
        toRender.push(
          <BallContainer
            status={status}
            disabled={disabled}
            rounded={rounded}
            isCurrentPage={i === currentPage}
            key={i}
          >
            {i}
          </BallContainer>
        );
      }

      toRender.push(<span>...</span>);
      toRender.push(
        <BallContainer
          status={status}
          disabled={disabled}
          rounded={rounded}
          isCurrentPage={lastPage === currentPage}
          key={lastPage}
        >
          {lastPage}
        </BallContainer>
      );
    }

    if (showDots === "start") {
      toRender.push(
        <BallContainer
          status={status}
          disabled={disabled}
          rounded={rounded}
          isCurrentPage={fisrtPageStartsIn === currentPage}
          key={fisrtPageStartsIn}
        >
          {fisrtPageStartsIn}
        </BallContainer>
      );

      toRender.push(<span>...</span>);

      for (let i = lastPage - 3; i <= lastPage; i++) {
        toRender.push(
          <BallContainer isCurrentPage={i === currentPage} key={i}>
            {i}
          </BallContainer>
        );
      }
    }

    if (showDots === "both") {
      toRender.push(
        <BallContainer
          isCurrentPage={fisrtPageStartsIn === currentPage}
          key={fisrtPageStartsIn}
        >
          {fisrtPageStartsIn}
        </BallContainer>
      );

      toRender.push(<span>...</span>);

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        toRender.push(
          <BallContainer isCurrentPage={i === currentPage} key={i}>
            {i}
          </BallContainer>
        );
      }

      toRender.push(<span>...</span>);

      toRender.push(
        <BallContainer isCurrentPage={lastPage === currentPage} key={lastPage}>
          {lastPage}
        </BallContainer>
      );
    }

    return toRender;
  }, [currentPage, lastPage, showDots, fisrtPageStartsIn, rounded, disabled]);

  const renderPagesWithoutDots = useMemo(() => {
    let toRender: JSX.Element[] = [];

    for (let i = fisrtPageStartsIn; i <= lastPage; i++) {
      toRender.push(
        <BallContainer
          status={status}
          rounded={rounded}
          isCurrentPage={i === currentPage}
          key={i}
        >
          {i}
        </BallContainer>
      );
    }

    return toRender;
  }, [currentPage, lastPage, showDots, fisrtPageStartsIn, rounded, disabled]);

  const handleClickPreviousPage = useCallback(() => {
    if (isInFirstPage) return;
    paginationCallback(currentPage - 1);
  }, [isInFirstPage, currentPage]);

  const handleClickNextPage = useCallback(() => {
    if (isInLastPage) return;
    paginationCallback(currentPage + 1);
  }, [isInLastPage, currentPage]);

  useEffect(() => {
    if (totalOfPages > 7) {
      if (currentPage > 4 && currentPage < totalOfPages - 3) {
        setShotDots("both");
      } else if (currentPage > 4) {
        setShotDots("start");
      } else if (currentPage < totalOfPages - 3) {
        setShotDots("end");
      }
    }
  }, [currentPage, totalOfPages]);

  return (
    <PaginationContainer className={`pagination-container ${className || ""}`}>
      <BallContainer
        status={status}
        rounded={rounded}
        disabled={disabled || isInFirstPage}
        onClick={handleClickPreviousPage}
      >
        <FiChevronLeft />
      </BallContainer>

      {totalOfPages > 7 && renderPagesWithDots}
      {totalOfPages <= 7 && renderPagesWithoutDots}

      <BallContainer
        status={status}
        rounded={rounded}
        disabled={disabled || isInLastPage}
        onClick={handleClickNextPage}
      >
        <FiChevronRight />
      </BallContainer>
    </PaginationContainer>
  );
};

export { Pagination };
