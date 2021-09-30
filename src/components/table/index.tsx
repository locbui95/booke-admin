import { ComponentPropsWithoutRef, ReactNode, useMemo, useState } from "react";

import "./table.module.css";
import Spinner from "components/spinner";
import Pagination from "components/pagination";

const PageSize: number = 5;
interface TableProps extends ComponentPropsWithoutRef<"table"> {
  loading?: boolean;
  head: ReactNode;
  data: any[];
  renderRows: Function;
}

export default function Table({
  loading,
  head,
  data,
  renderRows,
  ...props
}: TableProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
        <tr>
          <td className="text-center"> No data</td>
        </tr>
      );
    }
    return currentTableData.map((item) => renderRows(item));
  }

  return (
    <div
      className="border-separate border bg-white w-full rounded-lg p-5 borderSpacing-0-0 shadow-md"
      {...props}
    >
      <table className="w-full mb-3">
        <thead>
          <tr className="bg-gray-50 ">{head}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
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
