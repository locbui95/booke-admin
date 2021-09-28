import { ComponentPropsWithoutRef, ReactNode } from "react";

import "./table.styles.css";
import Spinner from "components/spinner";

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
  const currentDataList = data;

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
    return currentDataList.map((item) => renderRows(item));
  }

  return (
    <table
      className="border-separate border border-gray-800 w-1/2 mx-52 rounded-lg p-5 borderSpacing-0-0"
      {...props}
    >
      <thead>
        <tr className="bg-gray-50 ">{head}</tr>
      </thead>
      <tbody>
        <tr>{renderTableBody()}</tr>
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  loading: false
};
