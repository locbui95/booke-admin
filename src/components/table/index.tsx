import { ReactNode } from "react";

interface TableProps {
  head: ReactNode;
  data: any[];
  renderRows: Function;
}

function Table({ head, data, renderRows }: TableProps) {
  const currentDataList = data;

  function renderTableBody() {
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
      className="border-separate border border-gray-800 w-1/2 mx-52 rounded-lg p-5"
      style={{ borderSpacing: "0px 0px" }}
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

export default Table;
