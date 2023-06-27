import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./components/root";

// eslint-disable-next-line react-refresh/only-export-components
const RouteConfig = () => {
  const router = createBrowserRouter(routes(), {
    basename: import.meta.env.BASE_URL,
  });
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouteConfig />
  </React.StrictMode>
);
