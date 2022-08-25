import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ElementStatus } from "../../shared/theme/colors";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BallContainer, PaginationContainer } from "./styles";
import { v4 as uuidv4 } from "uuid";

export interface IPagination {
  totalOfPages: number;
  currentPage: number;
  status?: ElementStatus;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  fisrtPageStartsIn?: 0 | 1;
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
      for (let i = fisrtPageStartsIn; i < 5; i++) {
        toRender.push(
          <BallContainer
            status={status}
            disabled={disabled}
            rounded={rounded}
            isCurrentPage={i === currentPage}
            key={uuidv4()}
            onClick={() => paginationCallback(i)}
          >
            {i}
          </BallContainer>
        );
      }

      toRender.push(
        <span className="dots" key={uuidv4()}>
          ...
        </span>
      );
      toRender.push(
        <BallContainer
          status={status}
          disabled={disabled}
          rounded={rounded}
          isCurrentPage={lastPage === currentPage}
          key={uuidv4()}
          onClick={() => paginationCallback(lastPage)}
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
          key={uuidv4()}
          onClick={() => paginationCallback(fisrtPageStartsIn)}
        >
          {fisrtPageStartsIn}
        </BallContainer>
      );

      toRender.push(
        <span className="dots" key={uuidv4()}>
          ...
        </span>
      );

      for (let i = lastPage - 4; i <= lastPage; i++) {
        toRender.push(
          <BallContainer
            status={status}
            disabled={disabled}
            rounded={rounded}
            isCurrentPage={i === currentPage}
            key={uuidv4()}
            onClick={() => paginationCallback(i)}
          >
            {i}
          </BallContainer>
        );
      }
    }

    if (showDots === "both") {
      toRender.push(
        <BallContainer
          status={status}
          disabled={disabled}
          rounded={rounded}
          isCurrentPage={fisrtPageStartsIn === currentPage}
          key={uuidv4()}
          onClick={() => paginationCallback(fisrtPageStartsIn)}
        >
          {fisrtPageStartsIn}
        </BallContainer>
      );

      toRender.push(
        <span className="dots" key={uuidv4()}>
          ...
        </span>
      );

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        toRender.push(
          <BallContainer
            status={status}
            disabled={disabled}
            rounded={rounded}
            isCurrentPage={i === currentPage}
            key={uuidv4()}
            onClick={() => paginationCallback(i)}
          >
            {i}
          </BallContainer>
        );
      }

      toRender.push(
        <span className="dots" key={uuidv4()}>
          ...
        </span>
      );

      toRender.push(
        <BallContainer
          status={status}
          disabled={disabled}
          rounded={rounded}
          isCurrentPage={lastPage === currentPage}
          key={uuidv4()}
          onClick={() => paginationCallback(lastPage)}
        >
          {lastPage}
        </BallContainer>
      );
    }

    return toRender;
  }, [
    showDots,
    status,
    disabled,
    rounded,
    lastPage,
    currentPage,
    fisrtPageStartsIn,
    paginationCallback,
  ]);

  const renderPagesWithoutDots = useMemo(() => {
    let toRender: JSX.Element[] = [];

    for (let i = fisrtPageStartsIn; i <= lastPage; i++) {
      toRender.push(
        <BallContainer
          status={status}
          disabled={disabled}
          rounded={rounded}
          isCurrentPage={i === currentPage}
          key={uuidv4()}
          onClick={() => paginationCallback(i)}
        >
          {i}
        </BallContainer>
      );
    }

    return toRender;
  }, [
    currentPage,
    disabled,
    fisrtPageStartsIn,
    lastPage,
    paginationCallback,
    rounded,
    status,
  ]);

  const handleClickPreviousPage = useCallback(() => {
    if (isInFirstPage) return;
    paginationCallback(currentPage - 1);
  }, [isInFirstPage, paginationCallback, currentPage]);

  const handleClickNextPage = useCallback(() => {
    if (isInLastPage) return;
    paginationCallback(currentPage + 1);
  }, [isInLastPage, paginationCallback, currentPage]);

  useEffect(() => {
    if (totalOfPages > 7) {
      if (currentPage > 3 && currentPage < totalOfPages - 3) {
        setShotDots("both");
      } else if (currentPage > 4) {
        setShotDots("start");
      } else if (currentPage < totalOfPages - 3) {
        setShotDots("end");
      }
    }
  }, [currentPage, totalOfPages]);

  return (
    <PaginationContainer
      className={`pagination-container ${className || ""}`}
      key={showDots}
    >
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
