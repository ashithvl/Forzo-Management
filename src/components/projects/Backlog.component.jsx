import React from "react";
import { backlogs } from "../../data/data";
import { useTable } from "react-table";
import ContainerWrapper from "../utils/ContainerWrapper.component";
import PageTitle from "../utils/PageTitle.component";
import AppButton from "../utils/AppButton.component";

import { TbBrandGoogleDrive } from "react-icons/tb";
import Breadcrumbs from "../utils/Breadcrumbs.component";
import { useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";

const BacklogComponent = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const [breadcrumbs] = useBreadcrumbs(params, pathname);

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
    <ContainerWrapper>
      <div className="flex justify-between mt-3">
        <PageTitle>Backlog</PageTitle>{" "}
        <AppButton
          variant="text"
          label="Drive"
          icon={<TbBrandGoogleDrive size={24} />}
        />
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <table {...getTableProps()} className="w-full mt-4">
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
                      className={`p-1 text-xs bg-white border border-neutral-200`}
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
    </ContainerWrapper>
  );
};

export default BacklogComponent;
