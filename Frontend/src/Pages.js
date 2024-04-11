import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Eticket from "./Pages/Eticket";
import NotFound from "./Pages/404";
import Admin from "./Pages/Admin";

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/eticket" element={<Eticket />}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}
