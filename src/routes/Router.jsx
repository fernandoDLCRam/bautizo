import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";
import Itinerario from "../components/Itinerario";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/bautizo" element={<Landing />} />
        <Route path="/itinerario" element={<Itinerario />} />
        <Route path="*" element={<Navigate to={"/bautizo"} />} />
      </Route>
    </Routes>
  );
};

export default Router;
