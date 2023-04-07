import React from "react";
import { useTable } from "react-table";
import { release } from "../../data/data";

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
                className="bg-purple-200 text-purple-900 font-bold text-xs p-2 border border-purple-300"
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
            <tr
              {...row.getRowProps()}
              className={`${
                index === 0 || index === rows.length - 1
                  ? `bg-purple-100 border-b border-purple-200`
                  : `bg-white border border-neutral-200`
              }`}
            >
              {row.cells.map((cell, index) => {
                return (
                  <td {...cell.getCellProps()} className={`p-1  text-xs  `}>
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
