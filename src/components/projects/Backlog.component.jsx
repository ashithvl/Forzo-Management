import React from "react";
import { backlogs } from "../../data/data";
import { useTable } from "react-table";

const BacklogComponent = () => {
  const data = React.useMemo(() => backlogs, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "No.",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Release Name",
        accessor: "releaseName",
      },
      {
        Header: "User Story",
        accessor: "userStory",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()} className="w-full mt-4">
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={`p-1  text-xs  bg-white border border-neutral-200`}
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

export default BacklogComponent;
