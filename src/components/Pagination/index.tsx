import React, { useEffect, useMemo, useState } from "react";
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

const Pagination: React.FC<IPagination> = ({
  rounded = true,
  paginationCallback,
  totalOfPages = 15,
  currentPage = 0,
  ...props
}) => {
  const [showDots, setShotDots] = useState<"start" | "end" | "both">();

  const renderPagesWithDots = useMemo(() => {
    let toRender: JSX.Element[] = [];

    if (showDots === "end") {
      for (let i = 1; i <= 5; i++) {
        toRender.push(
          <BallContainer isCurrentPage={i === currentPage} key={i}>
            {i}
          </BallContainer>
        );
      }

      toRender.push(<span>...</span>);
      toRender.push(
        <BallContainer
          isCurrentPage={totalOfPages === currentPage}
          key={totalOfPages}
        >
          {totalOfPages}
        </BallContainer>
      );
    }

    if (showDots === "start") {
      toRender.push(
        <BallContainer isCurrentPage={1 === currentPage} key={1}>
          {1}
        </BallContainer>
      );

      toRender.push(<span>...</span>);

      for (let i = totalOfPages - 3; i <= totalOfPages; i++) {
        toRender.push(
          <BallContainer isCurrentPage={i === currentPage} key={i}>
            {i}
          </BallContainer>
        );
      }
    }

    if (showDots === "both") {
      toRender.push(
        <BallContainer isCurrentPage={1 === currentPage} key={1}>
          {1}
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
        <BallContainer
          isCurrentPage={totalOfPages === currentPage}
          key={totalOfPages}
        >
          {totalOfPages}
        </BallContainer>
      );
    }

    return toRender;
  }, [currentPage, totalOfPages, showDots]);

  const renderPagesWithoutDots = useMemo(() => {
    let toRender: JSX.Element[] = [];

    for (let i = 1; i <= totalOfPages; i++) {
      toRender.push(
        <BallContainer isCurrentPage={i === currentPage} key={i}>
          {i}
        </BallContainer>
      );
    }

    return toRender;
  }, [currentPage, totalOfPages, showDots]);

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

  console.log({ showDots });
  return (
    <PaginationContainer
      className={`pagination-container ${props.className || ""}`}
    >
      <BallContainer>
        <FiChevronLeft />
      </BallContainer>

      {totalOfPages > 7 && renderPagesWithDots}
      {totalOfPages <= 7 && renderPagesWithoutDots}

      <BallContainer>
        <FiChevronRight />
      </BallContainer>
    </PaginationContainer>
  );
};

export { Pagination };
