import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.page";
import ProjectPage from "./pages/Project.page";
import ProjectsComponent from "./components/projects/Projects.component";
import ReleasesComponent from "./components/releases/Releases.component";
import ReleaseDetailComponent from "./components/releases/releaseDetails/ReleaseDetail.component";
import BacklogComponent from "./components/projects/Backlog.component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />}>
            <Route index element={<ProjectsComponent />} />
            <Route path=":projectId" element={<ReleasesComponent />} />
            <Route
              path=":projectId/release/:releaseId"
              element={<ReleaseDetailComponent />}
            />
            <Route path=":projectId/backlog" element={<BacklogComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
