import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.page";
import ProjectPage from "./pages/Project.page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
