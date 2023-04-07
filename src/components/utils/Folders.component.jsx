import React from "react";
import { MdFolder, MdOutlineArrowBack } from "react-icons/md";
import { RiDriveFill } from "react-icons/ri";
import { driveFiles } from "../../data/data";
import { useTable } from "react-table";
import { BsFiletypeXlsx } from "react-icons/bs";

const FoldersComponent = ({ showDrive, setDrive }) => {
  const data = React.useMemo(() => driveFiles, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Last Modified",
        accessor: "lastModified",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      {showDrive && (
        <div className="flex absolute top-0 right-0 w-screen ">
          <div
            className=" bg-black w-2/3 h-screen opacity-25"
            onClick={() => {
              setDrive(false);
            }}
          />
          <div className=" bg-white w-1/3 h-screen p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-purple-600 text-lg">
                Google Drive
              </h2>
              <RiDriveFill size={30} className="text-purple-600 opacity-70" />
            </div>

            {/* Folder view ------------------------------- */}

            {/* <h2 className="text-sky-500 font-semibold pt-6">Folders</h2>
        <div className="p-6 w-auto flex gap-10 flex-row flex-wrap">
          <div className="flex flex-col items-center">
            <MdFolder className="text-neutral-600" size={60} />
            <p className="text-sm">Project Plan</p>
          </div>
          <div className="flex flex-col items-center">
            <MdFolder className="text-neutral-600" size={60} />
            <p className="text-sm">Requirement</p>
          </div>
          <div className="flex flex-col items-center">
            <MdFolder className="text-neutral-600" size={60} />
            <p className="text-sm">Design</p>
          </div>
          <div className="flex flex-col items-center">
            <MdFolder className="text-neutral-600" size={60} />
            <p className="text-sm">Requirement</p>
          </div>
          <div className="flex flex-col items-center">
            <MdFolder className="text-neutral-600" size={60} />
            <p className="text-sm">Requirement</p>
          </div>
        </div> */}

            {/* File list view ----------------------------- */}

            <h2 className="text-sky-500 font-semibold pt-6 flex items-center gap-2">
              <MdOutlineArrowBack /> Project Plan
            </h2>
            <table {...getTableProps()} className="w-full mt-4">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="bg-purple-200 text-purple-900 font-bold text-xs p-2 text-left"
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
                            className={`p-2  text-xs  bg-white border-b border-neutral-200 ${
                              index === 0 ? "flex gap-2 items-center" : ""
                            }`}
                          >
                            {index === 0 && (
                              <BsFiletypeXlsx className="text-green-600" />
                            )}{" "}
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default FoldersComponent;
