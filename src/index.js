import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page } from "./components/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/pages", element: <Page /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
