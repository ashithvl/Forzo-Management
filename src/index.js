import React from "react";
import ReactDOM from "react-dom/client";
import TimeAgo from "javascript-time-ago";
import App from "./App";

import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
