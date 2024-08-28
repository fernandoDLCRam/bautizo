import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Landing from "./components/Landing";
import Itinerario from "./components/Itinerario";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/itinerario",
    element: <Itinerario />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
