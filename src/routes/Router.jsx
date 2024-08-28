import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Landing from "../components/Landing";
import Itinerario from "../components/Itinerario";

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

export default router;
