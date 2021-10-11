import { ComponentPropsWithoutRef, ReactNode, useMemo, useState } from "react";

import "./table.module.css";
import Spinner from "components/spinner";
import Pagination from "components/pagination";

interface TableProps extends ComponentPropsWithoutRef<"table"> {
  loading?: boolean;
  head: ReactNode;
  data: any[];
  renderRows: Function;
  PageSize: number;
  currentPage: number;
  setCurrentPage: Function;
}

export default function Table({
  loading,
  head,
  data,
  renderRows,
  PageSize,
  currentPage,
  setCurrentPage,
  ...props
}: TableProps) {
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  function renderTableBody() {
    if (loading) {
      return (
        <tr>
          <Spinner />
        </tr>
      );
    }
    if (data?.length === 0 || !data) {
      return (
        <div className="text-center absolute top-0 left-0 w-full text-2xl font-thin pt-[2.5rem]">
          No data
        </div>
      );
    }
    return currentTableData.map((item, index) => renderRows(item, index));
  }

  return (
    <div
      className="border-separate border bg-white w-full rounded-lg p-5 borderSpacing-0-0 shadow-md min-h-[12rem]"
      {...props}
    >
      <table className="w-full mb-3">
        <thead>
          <tr className="bg-gray-50 p-2">{head}</tr>
        </thead>
        <tbody className="relative min-h-32">{renderTableBody()}</tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        handlePageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
}

Table.defaultProps = {
  loading: false
};
