import Button from "components/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import clsx from "clsx";

import { usePagination, DOTS } from "./usePagination";

interface PaginationProps {
  handlePageChange: Function;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = (props: PaginationProps) => {
  const {
    handlePageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange: (string | number)[] | undefined = usePagination(
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  );

  const handleClickNext = (): void => {
    handlePageChange(currentPage + 1);
  };

  const handleClickPrevious = (): void => {
    handlePageChange(currentPage - 1);
  };

  return (
    <ul className="flex items-center justify-end m-2">
      <Button
        className={clsx(
          "text-black py-0 px-3 h-8 text-center box-border flex items-center rounded-2xl",
          currentPage !== 1 &&
            "hover:bg-blue-400 transition-all hover:text-white cursor-pointer"
        )}
        onClick={handleClickPrevious}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </Button>

      {paginationRange?.map((pageNumber: number | string) => (
        <Button
          className={clsx(
            "text-black py-0 px-3 h-8 text-center box-border flex items-center rounded-2xl",
            pageNumber !== DOTS &&
              "hover:bg-blue-400 transition-all hover:text-white cursor-pointer"
          )}
          key={Math.random()}
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === DOTS}
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        className={clsx(
          "text-black py-0 px-3 h-8 text-center box-border flex items-center rounded-2xl",
          currentPage !== Math.ceil(totalCount / pageSize) &&
            "hover:bg-blue-400 transition-all hover:text-white cursor-pointer"
        )}
        onClick={handleClickNext}
        disabled={currentPage === Math.ceil(totalCount / pageSize)}
      >
        <FaAngleRight />
      </Button>
    </ul>
  );
};

export default Pagination;

Pagination.defaultProps = {
  siblingCount: 1
};
