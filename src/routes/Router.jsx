import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";
import Itinerario from "../components/Itinerario";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/bautizo" element={<Landing />} />
        <Route path="/bautizo/itinerario" element={<Itinerario />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default Router;
