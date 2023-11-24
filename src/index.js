import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page } from "./components/Page";
import { AppLogin } from "./components/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLogin />,
  },
  { path: "/pages", element: <Page /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
