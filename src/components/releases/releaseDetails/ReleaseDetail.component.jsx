import React, { useLayoutEffect } from "react";
import { useState } from "react";
import {
  MdOutlineInsertChart,
  MdOutlineLeaderboard,
  MdOutlineTableChart,
} from "react-icons/md";

import TableViewComponent from "./TableView.component";
import BoardViewComponent from "./BoardView.component";
import LeadershipComponent from "./Leadership.component";
import ContainerWrapper from "../../utils/ContainerWrapper.component";
import PageTitle from "../../utils/PageTitle.component";
import AppButton from "../../utils/AppButton.component";
import Breadcrumbs from "../../utils/Breadcrumbs.component";

import { projects } from "../../../data/data";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import { TbBrandGoogleDrive } from "react-icons/tb";
import { BiArchiveIn } from "react-icons/bi";

const ReleaseDetailComponent = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [breadcrumbs] = useBreadcrumbs(params, pathname);
  const [selectedTab, setSelectedTab] = useState(1);
  const [release, setRelease] = useState({});

  useLayoutEffect(() => {
    const project = projects.find(
      (project) => project.id === parseInt(params.projectId)
    );
    const release = project.releases.find(
      (release) => release.id === parseInt(params.releaseId)
    );
    console.log(release);
    setRelease(release);
  }, []);

  return (
    <ContainerWrapper>
      <div className="flex justify-between mt-3">
        <PageTitle>{release && release.releaseName}</PageTitle>
        <div className="flex">
          <AppButton
            variant="text"
            label="Blacklog"
            icon={<BiArchiveIn />}
            clickHandler={() =>
              navigate(`/projects/${params.projectId}/backlog`)
            }
          />
          <AppButton
            variant="text"
            label="Drive"
            icon={<TbBrandGoogleDrive size={24} />}
          />
        </div>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-row  w-full flex-wrap box-border">
        <div className="bg-white w-full flex flex-row justify-between px-4 border-b py-2">
          <div className="flex flex-row gap-4">
            <div
              className={`${
                selectedTab === 1
                  ? "border-b-2 border-purple-400 text-purple-700 "
                  : ""
              } px-2`}
            >
              <button
                className="text-sm my-2 flex items-center gap-1 cursor-pointer"
                onClick={() => setSelectedTab(1)}
              >
                <MdOutlineTableChart /> Table View
              </button>
            </div>
            <div
              className={`${
                selectedTab === 2
                  ? "border-b-2 border-purple-400 text-purple-700 cursor-pointer"
                  : ""
              } px-2`}
            >
              <button
                className="text-sm my-2 flex items-center gap-1 cursor-pointer"
                onClick={() => setSelectedTab(2)}
              >
                <MdOutlineInsertChart /> Board View
              </button>
            </div>
          </div>
          <div
            className={`${
              selectedTab === 0
                ? "border-b-2 border-purple-400 text-purple-700 "
                : ""
            } px-2`}
          >
            <button
              className="text-md my-1 flex items-center gap-1"
              onClick={() => setSelectedTab(0)}
            >
              <MdOutlineLeaderboard /> Leadership
            </button>
          </div>
        </div>

        {selectedTab === 1 ? (
          <TableViewComponent />
        ) : selectedTab === 2 ? (
          <BoardViewComponent />
        ) : (
          <LeadershipComponent />
        )}
      </div>
    </ContainerWrapper>
  );
};

export default ReleaseDetailComponent;
