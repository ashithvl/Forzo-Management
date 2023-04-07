import React from "react";
import { useTable } from "react-table";
import { release } from "../../data/data";
import { MdDownload } from "react-icons/md";

const LeadershipComponent = () => {
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
        Header: "Start Date",
        accessor: "actualStart",
      },
      {
        Header: "End Date",
        accessor: "actualEnd",
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
    <>
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
      <div className="flex  bg-white p-2 pr-4 w-full justify-end">
        <button className="text-purple-600 text-xs flex items-center gap-1">
          <MdDownload /> DOWNLOAD
        </button>
      </div>
    </>
  );
};

export default LeadershipComponent;
