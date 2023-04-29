import React from "react";
import { useTable } from "react-table";
import { release } from "../../../data/data";

const TableViewComponent = () => {
  const data = React.useMemo(() => release, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "No.",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Module",
        accessor: "module",
      },
      {
        Header: "Planned Start",
        accessor: "plannedStart",
      },
      {
        Header: "Planned End",
        accessor: "plannedEnd",
      },
      {
        Header: "Actual Start",
        accessor: "actualStart",
      },
      {
        Header: "Actual End",
        accessor: "actualEnd",
      },
      {
        Header: "Planned Hours",
        accessor: "plannedHours",
      },
      {
        Header: "Actual Hours",
        accessor: "actualHours",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Assigned To",
        accessor: "assignedTo",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="bg-purple-200 text-purple-900 font-bold text-xs p-2 border border-purple-300 text-start"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={`${
                      index === 0 || index === rows.length - 1
                        ? `bg-purple-100 border border-purple-300`
                        : `bg-white border border-neutral-200`
                    } text-xs p-1`}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableViewComponent;
