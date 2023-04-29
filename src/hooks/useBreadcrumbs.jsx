import { useEffect, useState } from "react";
import { projects } from "../data/data";

const useBreadcrumbs = (params, pathname) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    let newBreadcrumbs = [];

    if (pathname.includes("/")) {
      newBreadcrumbs.push({
        endPoint: `/`,
        name: "Home",
      });
    }

    if (pathname.includes("/projects")) {
      newBreadcrumbs.push({
        endPoint: `/projects`,
        name: "Projects",
      });
    }

    if (params.projectId) {
      const project = projects.find(
        (project) => project.id === parseInt(params.projectId)
      );
      newBreadcrumbs.push({
        endPoint: `/projects/${params.projectId}`,
        name: project.projectName,
      });
      if (params.releaseId) {
        const release = project.releases.find(
          (release) => release.id === parseInt(params.releaseId)
        );
        newBreadcrumbs.push({
          endPoint: `/projects/${params.projectId}/release/${params.releaseId}`,
          name: release.releaseName,
        });
      }
    }
    setBreadcrumbs(newBreadcrumbs);
  }, []);

  return [breadcrumbs];
};

export default useBreadcrumbs;
